# Contact Form Backend Setup Guide

This guide walks you through setting up the contact form backend with email notifications and database storage on AWS Amplify.

## Overview

The contact form backend includes:
- **Email Notifications**: Sends new form submissions to your email
- **Database Storage**: Stores all contact submissions for CRM and follow-up
- **Form Validation**: Client and server-side validation
- **Error Handling**: Graceful error recovery

## Quick Start

### 1. Set Up Email Service (Resend)

Resend is the simplest email service to get started with. It's free for up to 100 emails/day.

#### Steps:
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your domain or use Resend's test domain
4. Get your API key from the dashboard
5. Copy the `.env.example` to `.env.local` (for local development)
6. Add your API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

#### For Production (AWS Amplify):
1. In AWS Amplify Console
2. Go to App Settings → Environment variables
3. Add `RESEND_API_KEY` with your API key value

**Note**: Resend allows you to use any sender email address. The default is `noreply@safehaveninspectionsllc.com`. To customize this, update the email in `src/server/contact.ts` line 64.

### 2. Set Up Database (Optional but Recommended)

Choose one of the options below for persistent storage:

#### Option A: Supabase PostgreSQL (Recommended for Beginners)

Supabase is a managed PostgreSQL service with a generous free tier.

**Steps**:
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Wait for project initialization
4. Go to Project Settings → API
5. Copy your `Project URL` (Connection String)
6. Create a `.env.local` file with:
   ```
   DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]
   ```
7. The connection string is available in Supabase under Settings → Database

**Create the contact_submissions table**:
Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'new' -- new, contacted, converted, spam
);

-- Create an index for faster queries
CREATE INDEX idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
```

#### Option B: Neon PostgreSQL

Similar to Supabase but Neon is PostgreSQL-only (simpler, lighter).

1. Go to [https://neon.tech](https://neon.tech)
2. Sign up and create a project
3. Copy the connection string
4. Set `DATABASE_URL` in your environment

#### Option C: DynamoDB (AWS Native)

If you want to stay fully within AWS ecosystem:

1. Use AWS Console to create a DynamoDB table
2. Configure your Amplify Function to access DynamoDB
3. Update the database handler in `src/server/contact.ts`

**Note**: DynamoDB requires more setup but is included in AWS free tier.

#### Option D: File-Based Storage (Development Only)

Leave `DATABASE_URL` empty and the form will still work. Submissions won't be persisted, but the system will function.

### 3. Deploy to AWS Amplify

#### Prerequisites
- GitHub repository with the code pushed
- AWS Amplify connected to your GitHub

#### Steps:
1. In AWS Amplify Console, go to App Settings → Environment variables
2. Add the following environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `DATABASE_URL`: Your PostgreSQL connection string (if using database)

3. Redeploy:
   - Go to the Deployments tab
   - Click the most recent deployment
   - Click "Redeploy this version"

4. Wait for the build to complete (usually 2-3 minutes)

### 4. Test the Form

1. Navigate to `https://your-domain.com/contact`
2. Fill out the form with test data
3. Submit

#### Expected Results:
- ✅ Form shows "Request received" message
- ✅ You receive an email with the submission
- ✅ Submission is stored in database (if configured)
- ✅ No errors in the browser console

#### Troubleshooting:

**"Email notifications disabled" warning**:
- You haven't set `RESEND_API_KEY`
- Form still works but emails aren't sent

**"Database URL not configured" warning**:
- This is normal if you're in development
- Set `DATABASE_URL` to enable storage

**Form submission fails**:
- Check browser console for errors
- Check CloudWatch logs in AWS (Amplify → Hosting)
- Verify environment variables are set correctly

## Email Customization

To customize the email notifications:

1. Edit `src/server/contact.ts`
2. Update the `sendEmailNotification()` function:
   - Change the `from` address (line 64)
   - Change the `to` address (line 65)
   - Change the email template in `formatEmailHtml()` function

## Database Queries

### View recent submissions (Supabase)
```sql
SELECT * FROM contact_submissions 
ORDER BY submitted_at DESC 
LIMIT 20;
```

### Get submissions from today
```sql
SELECT * FROM contact_submissions 
WHERE DATE(submitted_at) = CURRENT_DATE 
ORDER BY submitted_at DESC;
```

### Export all submissions as CSV
In Supabase Dashboard:
1. Go to the Table Editor
2. Select `contact_submissions` table
3. Click the three dots menu
4. Select "Export"

## Custom Domain Verification (for Email)

If using custom domain with Resend:

1. In Resend dashboard, add your domain
2. Add the required DNS records to your domain registrar
3. Verify the domain
4. Update the email sender in `src/server/contact.ts`

## Next Steps

1. **Add CRM Integration**: Connect to Salesforce, HubSpot, or Pipedrive
2. **Add SMS Notifications**: Send SMS to your phone when new submissions arrive
3. **Add Analytics**: Track form submissions, conversion rates
4. **Add Lead Scoring**: Automatically prioritize high-value leads
5. **Add Automations**: Auto-reply emails, automatic task creation

## Support

If you encounter issues:
1. Check CloudWatch logs in AWS Amplify console
2. Review the error message in the browser console
3. Verify environment variables are set
4. Test with the `.env.local` file first (development)
