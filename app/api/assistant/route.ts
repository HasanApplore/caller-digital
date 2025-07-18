import { VapiClient } from "@vapi-ai/server-sdk";
import { NextResponse } from "next/server";

const client = new VapiClient({
  // Replace with your actual Vapi API token
  token: process.env.VAPI_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    if (action === 'start') {
      const call = await client.calls.create({
        assistantId: "c79e2c1b-6e9d-43d8-96dd-e0f1bc96abcc",
        phoneNumber: {
          twilioPhoneNumber: "+1(254)2495378",
          twilioAccountSid: "ACbda7113f7dfc27fac7e8c579b65c5c76",
          twilioAuthToken: "1c6dffabb3b25f83a194e8b1c2fd7231",
        },
      });

      // Return the entire call object since we're not sure about the exact property structure
      return NextResponse.json({ success: true, call });
    } else if (action === 'stop') {
      // Handle call ending if needed
      return NextResponse.json({ message: 'Call ended' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error("Error handling assistant request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 