"use client";
import { ChatCard } from "@/components/chat/ChatCard";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { ChatError } from "@/components/chat/ChatError";
import { ChatLayout } from "@/components/chat/ChatLayout";
import { ChatLoading } from "@/components/chat/ChatLoading";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { Button } from "@/components/ui/Button";
import { useCompletion } from "@ai-sdk/react";


export default function StreamPage() {
    const {
        completion,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
        error,
        stop,
        setInput,
    } = useCompletion({
        api: "/api/stream",
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e);
        setInput("");
    }

    return (
        <ChatLayout>
            <ChatCard>
                <ChatMessages>
                    {completion && <ChatMessage>
                        {completion}
                    </ChatMessage>}
                    {isLoading && <ChatLoading />}
                    {error && <ChatError title={error.message} />}
                </ChatMessages>
                <ChatComposer
                    textareaProps={{
                        onChange: handleInputChange,
                        value: input
                    }}
                    sendButtonProps={{
                        disabled: isLoading
                    }}
                    formProps={{
                        onSubmit: handleFormSubmit
                    }}>
                    {isLoading && <Button onClick={stop} className={"bg-red-400"}>Stop</Button>}
                </ChatComposer>
            </ChatCard>
        </ChatLayout >
    );
}