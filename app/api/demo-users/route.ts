import { NextResponse } from 'next/server';
import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import { WebClient } from '@slack/web-api';

// Initialize Neon client with error handling
let sql: NeonQueryFunction<false, false> | undefined;
try {
  if (process.env.DATABASE_URL) {
    sql = neon(process.env.DATABASE_URL);
  } else {
    console.warn('DATABASE_URL not found. Demo will work without database storage.');
  }
} catch (error) {
  console.error('Error initializing database connection:', error);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone_number } = body;

    // Validate required fields
    if (!name || !email || !phone_number) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If no database connection, still allow demo to proceed
    if (!sql) {
      console.log('Demo user details (no database):', { name, email, phone_number });
      
      // Send Slack notification if available
      if (process.env.SLACK_BOT_TOKEN && process.env.SLACK_CHANNEL) {
        try {
          const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
          const slackMessage = `🎯 *New Demo Request (No DB)*\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone_number}\n*Time:* ${new Date().toLocaleString()}`;
          
          await slackClient.chat.postMessage({
            channel: process.env.SLACK_CHANNEL,
            text: slackMessage,
          });
          
          console.log('SUCCESS: Slack message sent for demo user (no DB)');
        } catch (slackError) {
          console.error('ERROR: Failed to send Slack notification:', slackError);
        }
      }
      
      return NextResponse.json(
        { message: 'Demo user details processed successfully (no database storage)' },
        { status: 200 }
      );
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS demo_users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Store the demo user in the database
    await sql`
      INSERT INTO demo_users (name, email, phone_number, created_at)
      VALUES (${name}, ${email}, ${phone_number}, NOW())
    `;

    // Send Slack notification directly
    if (process.env.SLACK_BOT_TOKEN && process.env.SLACK_CHANNEL) {
      try {
        const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
        const slackMessage = `🎯 *New Demo Request*\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone_number}\n*Time:* ${new Date().toLocaleString()}`;
        
        await slackClient.chat.postMessage({
          channel: process.env.SLACK_CHANNEL,
          text: slackMessage,
        });
        
        console.log('SUCCESS: Slack message sent for demo user');
      } catch (slackError) {
        console.error('ERROR: Failed to send Slack notification:', slackError);
      }
    } else {
      console.warn('Slack bot token or channel not configured. Skipping Slack notification.');
    }

    return NextResponse.json(
      { message: 'Demo user details saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving demo user details:', error);
    return NextResponse.json(
      { error: 'Failed to save demo user details', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 