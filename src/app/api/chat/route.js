import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText } from "ai";

export const POST = async (req) => {
    const { messages } = await req.json();
    try {
        const result = await streamText({
            model: openai("gpt-4.1-nano"),
            messages: await convertToModelMessages(messages)
        })

        result.usage.then((usage) => {
            console.log({
                messageCount: messages.length,
                inputTokens: usage.inputTokens,
                outputTokens: usage.outputTokens,
                totalTokens: usage.totalTokens,
            });
        });

        return result.toUIMessageStreamResponse()
    } catch (err) {
        console.error("Chat Streaming error occured", err);
        return new Response(JSON.stringify({ err: err.message }), { status: 5000 })
    }
}