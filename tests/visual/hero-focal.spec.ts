import { test, expect, type Page } from "@playwright/test";
import { PNG } from "pngjs";

/**
 * Visual regression: the home hero background must keep its bright focal
 * point (window / shutters area) in the upper portion of the section, so
 * the navy gradient overlay never flattens the image or pushes the light
 * source out of frame.
 *
 * We sample luminance in a 4x4 grid over the hero <section> and assert:
 *   1. The mean luminance of the upper half is meaningfully brighter than
 *      the lower half.
 *   2. The single brightest tile lives in the upper half (top two rows).
 *
 * Both checks are robust to reasonable gradient / overlay tweaks but fail
 * loudly if someone re-crops the image, drops the mobile source, or
 * darkens the top of the overlay past the point of visibility.
 */

async function tileLuma(
  page: Page,
  clip: { x: number; y: number; width: number; height: number },
): Promise<number> {
  const buf = await page.screenshot({
    clip: {
      x: Math.round(clip.x),
      y: Math.round(clip.y),
      width: Math.max(1, Math.round(clip.width)),
      height: Math.max(1, Math.round(clip.height)),
    },
  });
  const png = PNG.sync.read(buf);
  let total = 0;
  const pixels = png.data.length / 4;
  for (let i = 0; i < png.data.length; i += 4) {
    total +=
      0.2126 * png.data[i] +
      0.7152 * png.data[i + 1] +
      0.0722 * png.data[i + 2];
  }
  return total / pixels;
}

async function measureHero(page: Page) {
  const hero = page.locator("section").first();
  await expect(hero).toBeVisible();
  const box = await hero.boundingBox();
  if (!box) throw new Error("hero section has no bounding box");

  const rows = 4;
  const cols = 4;
  const grid: number[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) {
      row.push(
        await tileLuma(page, {
          x: box.x + (box.width * c) / cols,
          y: box.y + (box.height * r) / rows,
          width: box.width / cols,
          height: box.height / rows,
        }),
      );
    }
    grid.push(row);
  }

  const mean = (nums: number[]) => nums.reduce((s, n) => s + n, 0) / nums.length;
  const upper = mean([...grid[0], ...grid[1]]);
  const lower = mean([...grid[2], ...grid[3]]);

  let brightest = { luma: -1, row: -1, col: -1 };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] > brightest.luma) {
        brightest = { luma: grid[r][c], row: r, col: c };
      }
    }
  }

  return { grid, upper, lower, brightest };
}

test.describe("hero background focal point", () => {
  test("desktop keeps the bright focal point in the upper half", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    const { grid, upper, lower, brightest } = await measureHero(page);
    const diagnostic = JSON.stringify({ upper, lower, brightest, grid }, null, 2);

    expect(upper - lower, `upper vs lower luma\n${diagnostic}`).toBeGreaterThan(
      8,
    );
    expect(brightest.row, `brightest tile row\n${diagnostic}`).toBeLessThan(2);
  });

  test("mobile keeps the bright focal point in the upper half", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    const { grid, upper, lower, brightest } = await measureHero(page);
    const diagnostic = JSON.stringify({ upper, lower, brightest, grid }, null, 2);

    expect(upper - lower, `upper vs lower luma\n${diagnostic}`).toBeGreaterThan(
      5,
    );
    expect(brightest.row, `brightest tile row\n${diagnostic}`).toBeLessThan(2);
  });
});