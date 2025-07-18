import { NextResponse } from 'next/server';
import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import { WebClient } from '@slack/web-api';

// Initialize Neon client with error handling
let sql: NeonQueryFunction<false, false> | undefined;
try {
  sql = neon(process.env.DATABASE_URL!);
} catch (error) {
  console.error('Error initializing database connection:', error);
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone_number, message } = body;

    // Validate required fields
    if (!name || !email || !phone_number || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!sql) {
      throw new Error('Database connection not initialized');
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Store the inquiry in the database
    await sql`
      INSERT INTO inquiries (name, email, phone_number, message, created_at)
      VALUES (${name}, ${email}, ${phone_number}, ${message}, NOW())
    `;

    // Send Slack notification directly
    if (process.env.SLACK_BOT_TOKEN && process.env.SLACK_CHANNEL) {
      try {
        const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
        const slackMessage = `📥 *New Contact Inquiry*\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone_number}\n*Message:* ${message}`;
        
        await slackClient.chat.postMessage({
          channel: process.env.SLACK_CHANNEL,
          text: slackMessage,
        });
        
        console.log('SUCCESS: Slack message sent directly');
      } catch (slackError) {
        console.error('ERROR: Failed to send Slack notification:', slackError);
      }
    } else {
      console.warn('Slack bot token or channel not configured. Skipping Slack notification.');
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry', details: error instanceof Error ? error.message : 'Unknown error' },

      { status: 500 }
    );
  }
} 