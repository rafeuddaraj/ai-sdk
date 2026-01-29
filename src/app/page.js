"use client";
import { ChatCard } from "@/components/chat/ChatCard";
import { ChatError } from "@/components/chat/ChatError";
import { ChatFooter } from "@/components/chat/ChatFooter";
import { ChatLayout } from "@/components/chat/ChatLayout";
import { ChatLoading } from "@/components/chat/ChatLoading";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatMessages } from "@/components/chat/ChatMessages";

export default function ExampleChatScreen() {
  return (
      <ChatLayout>
        <ChatCard>
          <ChatMessages>
            <ChatMessage role="assistant">Hi! How can I assist you today?</ChatMessage>
            <ChatMessage role="user">What is LLM?</ChatMessage>
            <ChatMessage role="assistant">
              LLM stands for Large Language Model, which is designed to understand and generate human-like text.
            </ChatMessage>

            <ChatLoading />

            <ChatError
              title="Request failed"
              description="API route error. Check your key / server logs."
            />
          </ChatMessages>

          <ChatFooter
            fileProps={{
              label: "Attach file",
              helperText: "image/pdf/txt",
              inputProps: {
                accept: "image/*,.pdf,.txt",
                // onChange: (...) => {}
              },
            }}
            composerProps={{
              formProps: {
                // onSubmit: (e) => { e.preventDefault(); }
              },
              textareaProps: {
                // value: prompt,
                // onChange: (e) => setPrompt(e.target.value),
              },
              clearButtonProps: {
                type: "button",
                // onClick: () => setPrompt(""),
              },
              sendButtonProps: {
                type: "submit",
                // disabled: !prompt?.trim(),
              },
            }}
          />
        </ChatCard>
      </ChatLayout>
  );
}