import OpenAI from "openai";
import { resumeData } from "../../../lib/resume.js";

const openai = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1", // ✅ GROQ
  apiKey: process.env.GROQ_API_KEY,          // ✅ USE GROQ KEY
});

export async function POST(req) {
  const { message } = await req.json();

  const stream = await openai.chat.completions.create({
    model: "llama-3.1-8b-instant", // ✅ Groq model
    stream: true,
    messages: [
      {
        role: "system",
        content: `
You are an AI assistant for Eabel John.

Use this data:
${JSON.stringify(resumeData)}

Rules:
- Be professional
- Keep answers clear
- Focus on Eabel's skills, projects, and experience
- Highlight AI projects like GODSEYE and Wedding AI when relevant
        `,
      },
      { role: "user", content: message },
    ],
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices?.[0]?.delta?.content || "";
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}