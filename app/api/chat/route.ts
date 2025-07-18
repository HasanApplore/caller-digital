import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, assistantId } = body;

    // Get the last user message as input
    const lastUserMessage = messages.findLast((msg: any) => msg.role === 'user')?.content;
    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      );
    }

    console.log('Request body:', { input: lastUserMessage, assistantId });

    const response = await fetch('https://api.vapi.ai/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VAPI_API_KEY}`,
      },
      body: JSON.stringify({
        input: lastUserMessage,
        assistantId,
        stream: true
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`Failed to fetch chat response: ${response.status} ${response.statusText}`);
    }

    // Return the response as a stream
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error("Error handling chat request:", error);
    return NextResponse.json(
      { error: "Failed to process chat request", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 