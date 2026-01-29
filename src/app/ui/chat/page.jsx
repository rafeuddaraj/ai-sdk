"use client";
import { ChatCard } from "@/components/chat/ChatCard";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { ChatError } from "@/components/chat/ChatError";
import { ChatLayout } from "@/components/chat/ChatLayout";
import { ChatLoading } from "@/components/chat/ChatLoading";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { Button } from "@/components/ui/Button";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";


export default function ChatPage() {
    const [input, setInput] = useState("");
    const {
        messages,
        status,
        stop,
        sendMessage,
        error,
    } = useChat({
        api: "/api/stream",
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendMessage({ text: input })
        setInput("");
    }

    return (
        <ChatLayout>
            <ChatCard>
                <ChatMessages>
                    {messages.map(message => message.parts.map((part, index) => <ChatMessage key={`${message.id}-${index}`} role={message.role}>
                        {part.text}
                    </ChatMessage>))}
                    {(status === "submitted" || status === "streaming") && <ChatLoading />}
                    {error && <ChatError title={error.name} description={error.message} />}
                </ChatMessages>
                <ChatComposer
                    textareaProps={{
                        onChange: (e) => setInput(e.target.value),
                        value: input
                    }}
                    sendButtonProps={{
                        disabled: status !== "ready"
                    }}
                    formProps={{
                        onSubmit: handleFormSubmit
                    }}>
                    {(status === "submitted" || status === "streaming") && <Button onClick={stop} className={"bg-red-400"}>Stop</Button>}
                </ChatComposer>
            </ChatCard>
        </ChatLayout >
    );
}