"use client";
import { ChatCard } from "@/components/chat/ChatCard";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { ChatError } from "@/components/chat/ChatError";
import { ChatLayout } from "@/components/chat/ChatLayout";
import { ChatLoading } from "@/components/chat/ChatLoading";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { useState } from "react";


export default function TextResponsePage() {
    const [prompt, setPrompt] = useState(""); // user input
    const [completion, setCompletion] = useState(""); // AI response
    const [isLoading, setIsLoading] = useState(false); // loading flag
    const [error, setError] = useState(null); // error message

    const handleTextResponse = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setPrompt("");
        setError(null);

        try {
            const response = await fetch("/api/text-response", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setCompletion(data.text);
        } catch (error) {
            console.error("Error:", error);
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <ChatLayout>
            <ChatCard>
                <ChatMessages>
                    {completion && <ChatMessage>
                        {completion}
                    </ChatMessage>}
                    {isLoading && <ChatLoading />}
                    {error && <ChatError title={error} />}
                </ChatMessages>
                <ChatComposer
                    textareaProps={{
                        onChange: (e) => setPrompt(e.target.value),
                        value: prompt
                    }}
                    formProps={{
                        onSubmit: handleTextResponse
                    }} />
            </ChatCard>
        </ChatLayout >
    );
}