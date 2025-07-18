import { WebClient } from '@slack/web-api';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Slack Notification API (SECURED)
 * 
 * This API requires authentication via x-api-key header.
 * 
 * Usage from backend (server-side only):
 * 
 * fetch('/api/slack', {
 *   method: 'POST',
 *   headers: { 
 *     'Content-Type': 'application/json',
 *     'x-api-key': process.env.SLACK_API_KEY
 *   },
 *   body: JSON.stringify({ 
 *     text: 'Your message here',
 *     channel: '#your-channel' // optional, defaults to #general
 *   })
 * })
 * .then(res => res.json())
 * .then(console.log)
 * .catch(console.error);
 * 
 * ⚠️  WARNING: Do NOT call this API from frontend/client-side code!
 * The API key would be exposed to users. Only use from server-side.
 */

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function POST(request: NextRequest) {
  try {
    // Check for API key authentication
    const apiKey = request.headers.get('x-api-key');
    const expectedApiKey = process.env.SLACK_API_KEY;
    
    if (!apiKey || apiKey !== expectedApiKey) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { text, channel = '#general' } = body;

    if (!text) {
      return NextResponse.json(
        { message: 'Text is required' },
        { status: 400 }
      );
    }

    // Validate channel format
    if (!channel.startsWith('#')) {
      return NextResponse.json(
        { message: 'Channel must start with #' },
        { status: 400 }
      );
    }

    await slackClient.chat.postMessage({
      channel: channel,
      text: text,
    });

    return NextResponse.json({ message: 'Message sent to Slack' });
  } catch (error) {
    console.error('Slack API error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 