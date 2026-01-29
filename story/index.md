## 1. What AI SDK is and why it is used

**Vercel AI SDK হলো এমন একটি টুল যা ওয়েব ডেভেলপারদের জন্য AI ব্যবহার করাকে সহজ, practical এবং production-ready করে দেয়**।

যখন OpenAI, Anthropic, Google এর মতো কোম্পানিগুলো তাদের AI model গুলো API হিসেবে উন্মুক্ত করলো, তখন AI হঠাৎ করেই সবার হাতের কাছে চলে আসে। কিন্তু বাস্তবে সেই API গুলো ব্যবহার করে একটি ভালো AI-powered ওয়েব অ্যাপ বানানো মোটেও সহজ ছিল না।

আপনি যদি সরাসরি OpenAI এর API ব্যবহার করতে যান, তাহলে আপনাকে নিজে নিজে অনেক বিষয় handle করতে হয়।
request–response format, streaming response manage করা, ধাপে ধাপে UI তে text দেখানো, error handling, rate limit, এমনকি model change হলে কোড update করা—এই সবকিছুই আলাদা করে ভাবতে হয়।

এই সমস্যাগুলোর একটা বড় বিষয় হলো, **এগুলো প্রায় সব AI-powered অ্যাপেই একই রকম**। তবুও প্রতিবার ডেভেলপারদের নতুন করে এগুলো solve করতে হচ্ছিল।

এই জায়গা থেকেই Vercel একটি গুরুত্বপূর্ণ বিষয় বুঝতে পারে।

যেভাবে React UI বানানোর common সমস্যাগুলো solve করে দেয়, ঠিক সেভাবেই AI integration এর common সমস্যাগুলোও abstract করা দরকার। ডেভেলপারদের যেন low-level AI API নিয়ে যুদ্ধ করতে না হয়।

এই চিন্তা থেকেই **Vercel AI SDK** এর জন্ম।

Vercel AI SDK মূলত একটি unified layer তৈরি করে, যেটা বিভিন্ন AI provider এর উপর বসে কাজ করে। আজ আপনি OpenAI ব্যবহার করছেন, ভবিষ্যতে চাইলে অন্য কোনো provider ব্যবহার করতে পারবেন, কিন্তু আপনার অ্যাপের মূল লজিক খুব একটা বদলাতে হবে না।

আরেকটি বড় কারণ ছিল **streaming experience**।

ChatGPT এর মতো অ্যাপে আপনি দেখেছেন, লেখা একসাথে আসে না, ধীরে ধীরে আসে। এই experience ইউজারের কাছে অনেক বেশি natural লাগে, কিন্তু এটাকে ঠিকভাবে implement করা backend এবং frontend—দুই দিক থেকেই বেশ জটিল।

Vercel AI SDK শুরু থেকেই streaming-কে first-class citizen হিসেবে ডিজাইন করেছে। অর্থাৎ streaming কোনো optional feature না, বরং SDK এর core অংশ।

শুধু backend নয়, frontend এর কথাও এখানে গুরুত্ব দেওয়া হয়েছে। React এর জন্য আলাদা কিছু hook দেওয়া আছে, যেগুলো ব্যবহার করে খুব অল্প কোডেই chat interface বা streaming UI তৈরি করা যায়। যেসব কাজ আগে করতে গেলে অনেক boilerplate লাগতো, সেগুলো এখন অনেক সহজ।

আরেকটি গুরুত্বপূর্ণ বিষয় হলো modern web architecture।

Vercel নিজেই Next.js তৈরি করে। তারা খুব ভালোভাবে জানে server, serverless, edge, streaming, React Server Components এগুলো বাস্তবে কীভাবে কাজ করে। AI SDK এই পুরো ecosystem মাথায় রেখে তৈরি করা।

সহজভাবে বললে—

* OpenAI এর API হলো raw engine
* Vercel AI SDK হলো সেই engine ব্যবহার করার জন্য প্রয়োজনীয় steering wheel, brake আর dashboard

এই কারণেই Vercel AI SDK এসেছে।
যাতে AI ওয়েব ডেভেলপারদের জন্য ভয়ের বিষয় না হয়ে, একটি normal tool হয়ে যায়—ঠিক যেমন database, authentication বা API call।

এই কোর্সে আপনি শুধু AI SDK এর API শিখবেন না।
আপনি শিখবেন **AI-powered অ্যাপ কীভাবে ভাবতে হয়**, আর Vercel AI SDK সেই চিন্তাকে বাস্তবে রূপ দেওয়ার কাজটা সহজ করে দেয়।

AI SDK মূলত তিনটি অংশে ভাগ করা।

প্রথম অংশটি হলো **Core**। এখানে আপনি text generate করতে পারবেন, streaming response ব্যবহার করতে পারবেন, এমনকি structured output (যেমন JSON) নিয়েও কাজ করতে পারবেন।

দ্বিতীয় অংশটি হলো **UI**। এখানে React এর জন্য কিছু বিশেষ hook দেওয়া আছে, যেগুলো ব্যবহার করে খুব সহজেই chat interface বা streaming UI তৈরি করা যায়।

তৃতীয় অংশটি হলো **React Server Components** এর জন্য। এটি এখনো experimental পর্যায়ে আছে, তাই এই কোর্সে আমরা এই অংশটি ব্যবহার করবো না।

এই কোর্সটি মূলত তাদের জন্য, যারা **Next.js জানেন**, কিন্তু AI নিয়ে কাজ শুরু করবেন কীভাবে, সেটি এখনো পরিষ্কার না। আপনি যদি JavaScript এর বেসিক জানেন, React এর fundamentals বুঝেন, আর Next.js এর App Router সম্পর্কে ধারণা থাকে, তাহলে এই কোর্সটি আপনি নিশ্চিন্তে করতে পারবেন। TypeScript জানা থাকলে ভালো, তবে না জানলেও কোনো সমস্যা নেই। কোর্স চলাকালেই প্রয়োজনীয় অংশগুলো পরিষ্কার হয়ে যাবে।

---

## 2. Minimal project setup

এখন আমরা nextjs প্রজেক্ট তৈরি করবো, npx create-next-app@latest
(src) folder enable করবো।

আমরা এখানে TypeScript কে ignore করছি আমরা js প্রজেক্ট ই setup করছি tailwindCSS দিয়ে ঠিক আছে।

প্রজেক্ট তৈরি হয়ে গেলে পরবর্তী ধাপ হলো প্রয়োজনীয় dependency install করা। আমরা AI SDK এর core package install করবো, OpenAI provider install করবো, এবং React এর জন্য AI SDK এর আলাদা package ব্যবহার করবো। পাশাপাশি আমরা **Zod** install করে নিচ্ছি, যাতে পরে লেসনগুলোতে type-safe validation এর কাজে লাগবে।

install cmd = `pnpm add ai @ai-sdk/react zod`

আমরা এখন openai এর জন্য একটি API key জেনারেট করবো। "https://openai.com/api"

AI model ব্যবহার করা পুরোপুরি ফ্রি নয়, এটা মাথায় রাখতে হবে। আপনাকে OpenAI তে একটি account তৈরি করতে হবে, billing add করতে হবে, এবং তারপর একটি secret API key generate করতে হবে। এই API key মূলত আপনার অ্যাপের পক্ষ থেকে AI ব্যবহার করার অনুমতি দেয়।

এই key কখনোই সরাসরি কোডের ভেতরে লেখা যাবে না। আমরা `.env.local` ফাইল ব্যবহার করে API key সংরক্ষণ করবো। Next.js নিজে থেকেই এই ফাইলটিকে GitHub থেকে exclude করে রাখে, ফলে আপনার key নিরাপদ থাকে।

```env
OPENAI_API_KEY="your-api-key"
```

এখন nextjs run করে দেখবো সব ঠিক আছে নাকি।


---

## 3. Generating text with AI

আমরা এখন মূলত ai দিয়ে টেক্স জেনারেট করবো, তার জন্য, আমরা next.js এর route handler ব্যবহার করবো।

src ফোল্ডার এর app ফোল্ডারের মধ্যে api ফোল্ডার বানাবো, এবং সেখানে একটি route handler বানাচ্ছি completion নামে।

`/src/app/api/text-response/route.js
 ```js
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const POST = async (req) => {
    try {
        const { prompt } = await req.json();
        const resp = await generateText({
            model: openai("gpt-4.1-nano"),
            prompt
        })
        return Response.json({ text: resp.text });
    }
    catch (err) {
        console.log(err.message);
        return Response.json({ err })
    }
}
 ```

আমরা এখানে OpenAI এর gpt-4.1-nano model ব্যবহার করছি এবং generateText ফাংশনের মাধ্যমে prompt এর উপর ভিত্তি করে text generate করছি।

gpt-4.1-nano হলো একটি lightweight model, যা দ্রুত response দেয় এবং token cost তুলনামূলকভাবে কম। এই মডেলটি simple text generation, experimentation এবং ছোট প্রজেক্টের জন্য বেশ উপযোগী।

যেহেতু এটি একটি crash course এবং আমরা মূলত AI SDK-এর workflow বোঝাতে চাই, তাই development এবং learning-এর জন্য এই মডেলটি একটি practical choice।


এখন আমাদের ui বানাতে হবে।

তো আমরা, app ফোল্ডারের মধ্যে নতুন ফোল্ডার বানাই ui যেখানে আমাদের সকল ui এর কাজ গুলো করবো। মানে আমাদের ui রাউট বানাই।

সেখানে লিখিঃ
`/src/app/ui/text-response.jsx`

```jsx
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
```

এখন প্রম্পট লিখিঃ
-> What is LLM?
-> What is Ai

---

## 4. Using streaming responses

তো এখন পর্যন্ত আমরা AI দিয়ে মূলত text generate করতে পারছি।

কিন্তু এখানে একটা বিষয় খেয়াল করলে দেখা যাবে, এই responseটা পুরোপুরি তৈরি হওয়ার পরেই আমাদের UI তে দেখাচ্ছে। অর্থাৎ AI আগে সম্পূর্ণ উত্তর বানাচ্ছে, তারপর একবারে সেটাকে আমরা screen-এ render করছি।

অথচ ChatGPT বা Gemini যেভাবে কাজ করে, সেটা আলাদা। তারা streaming response ব্যবহার করে। মানে পুরো উত্তর তৈরি শেষ হওয়ার জন্য অপেক্ষা না করে, লেখা তৈরি হওয়ার সাথে সাথেই একটু একটু করে UI তে দেখাতে থাকে।

এই কারণেই তাদের response অনেক বেশি live এবং interactive মনে হয়।

তো আমরা এখন এই streaming ই করতে যাচ্ছি এখনঃ

`/src/app/api/stream.js`:

```js
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const POST = async (req) => {
    const { prompt } = await req.json();
    try {
        const result = streamText({
            model: openai("gpt-4.1-nano"),
            prompt
        })

        return result.toUIMessageStreamResponse();
    } catch (err) {
        console.log("Streamming error", err);
        return new Response({ error: err.messsage }, { status: 500 })
    }
}
```

এখন ui বানাইঃ

`/src/app/ui/stream.jsx`

```js
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
```

useCompletion হলো Vercel AI SDK-এর একটি React hook, যেটা single prompt থেকে AI text generate করার জন্য ব্যবহার হয়। এটি streaming support করে, তাই response একবারে না এসে ধীরে ধীরে আসে এবং UI automatically update হয়।

completion ভ্যারিয়েবলটিতে AI থেকে আসা পুরো text থাকে। Streaming চলাকালীন এই value ধীরে ধীরে বড় হয়। UI তে AI-এর output দেখানোর জন্য এটিই ব্যবহার করা হয়।

input হলো user যে লেখা textarea-তে টাইপ করছে তার current value। এটি controlled input হিসেবে কাজ করে।

handleInputChange textarea-এর onChange handler। এটি internally input state update করে, তাই আলাদা করে useState ব্যবহার করতে হয় না।

handleSubmit form submit হলে call হয়। এটি input কে prompt হিসেবে API-তে পাঠায় এবং AI completion generate করা শুরু করে।

isLoading true থাকে যতক্ষণ AI response stream হচ্ছে। এটি loading indicator দেখানো, button disable করা বা stop button দেখানোর জন্য ব্যবহার হয়।

error API বা network সংক্রান্ত কোনো সমস্যা হলে পাওয়া যায়। সাধারণত error.message UI তে দেখানো হয়।

stop function চলমান streaming request বন্ধ করে দেয়। User যদি মাঝখানে generation থামাতে চায়, তখন এটি ব্যবহার করা হয়।

setInput দিয়ে manually input value সেট করা যায়। এখানে submit করার পর textarea clear করার জন্য setInput("") ব্যবহার করা হয়েছে।

সব মিলিয়ে, এই hook user input নেয়, API call handle করে, streaming response manage করে এবং loading ও error state সহজভাবে expose করে।



আমরা ব্রাউজারে আবার প্রম্পট লিখছিঃ
-> What is LLM
-> What is Ai

---

## 5. Basic understanding of AI models and providers

Vercel AI SDK দিয়ে কাজ করতে গেলে model আর provider বোঝা সবচেয়ে গুরুত্বপূর্ণ foundation। কারণ এখানে তুমি শুধু AI call করছ না, তুমি আসলে একটা system design করছ যেখানে cost, latency, quality আর scalability সব একসাথে balance করতে হয়। এই জায়গায় ভুল decision নিলে app কাজ করবে ঠিকই, কিন্তু production এ গিয়ে সমস্যা শুরু হবে।

প্রথমে model নিয়ে কথা বলি। একটি AI model হলো trained neural network, যেটা বিশাল পরিমাণ data থেকে statistical pattern শিখেছে। এই model মানুষের মতো চিন্তা করে না, বরং probability দিয়ে কাজ করে। Large Language Model বা LLM হলো এই ধারণার বড় সংস্করণ, যেগুলো text বুঝতে, context ধরে রাখতে এবং natural language generate করতে পারে। Chatbot, content generation, summarization, code assistant এই সব feature মূলত LLM দিয়েই তৈরি হয়।

সব LLM একরকম নয়। কিছু model speed এবং cost এর জন্য optimize করা, কিছু model reasoning এবং quality এর জন্য, আবার কিছু model বড় context window handle করার জন্য। যেমন GPT-4.1 Nano বা Gemini Flash এর মতো model দ্রুত এবং তুলনামূলকভাবে সস্তা, তাই real time chat, autocomplete বা simple assistant এর জন্য এগুলো ভালো। অন্যদিকে GPT-4.1, Claude Sonnet বা Gemini Pro এর মতো model বেশি capable, তাই complex reasoning, high quality content বা instruction heavy কাজের জন্য এগুলো বেশি উপযুক্ত।

Text generation এর বাইরে embedding model খুব গুরুত্বপূর্ণ। এগুলো text কে vector এ convert করে এবং semantic meaning ধরে রাখে। Semantic search, recommendation system, document similarity, এবং RAG pipeline বানাতে embedding ছাড়া উপায় নেই। OpenAI, Google, Mistral সবাই embedding model দেয়, এবং এখানে সাধারণত সবচেয়ে capable model লাগবে না। Stability, consistency আর cost এখানে বেশি গুরুত্বপূর্ণ।

Image related কাজের জন্য আলাদা model ব্যবহার করা উচিত। Text generation model দিয়ে image বোঝার চেষ্টা করলে ভালো ফল পাওয়া যায় না। Image generation বা image analysis এর জন্য বিশেষভাবে trained model দরকার। OpenAI, Google এবং কিছু specialised provider এই ধরনের model দেয়। কোনটা best হবে সেটা use case এর উপর নির্ভর করে। Creative image generation হলে একরকম model ভালো, আর accurate image understanding হলে অন্য model ভালো কাজ করে।

Multimodal model হলো এমন model যেগুলো একাধিক ধরনের input handle করতে পারে। Text আর image একসাথে analyse করতে হলে multimodal model দরকার। GPT-4 class model, Claude এর নতুন version বা Gemini Pro এই জায়গায় শক্তিশালী। তবে multimodal model সাধারণত বেশি cost করে, তাই সব জায়গায় এগুলো ব্যবহার করা বুদ্ধিমানের কাজ না।

Model বেছে নেওয়ার সময় কয়েকটি technical factor সবসময় মাথায় রাখতে হয়। প্রথমটি context window। বড় document বা দীর্ঘ conversation নিয়ে কাজ করলে বড় context window দরকার। ছোট task এর জন্য বড় context window নেওয়া মানে অযথা বেশি টাকা খরচ করা। দ্বিতীয়টি reasoning capability। Simple task এর জন্য high end reasoning model ব্যবহার করলে benefit কম, কিন্তু complex task এ weak model ব্যবহার করলে output খারাপ হবে।

Latency আর speed আরেকটি গুরুত্বপূর্ণ বিষয়। User facing feature যেমন chat interface, live assistant বা autocomplete এর জন্য low latency model দরকার। Background processing, report generation বা analysis এর ক্ষেত্রে latency কম গুরুত্বপূর্ণ, সেখানে quality বেশি গুরুত্বপূর্ণ হয়।

Cost সব decision এর সাথে জড়িত। Input token আর output token অনুযায়ী pricing হয়। Faster, smarter এবং larger context window model এর cost বেশি হয়। Production system এ সাধারণত layered approach নেওয়া হয়। Default হিসেবে cheap model, আর complex case এ smart model।

এখন provider নিয়ে কথা বলি। Provider হলো সেই কোম্পানি যারা model তৈরি করে, train করে, infrastructure চালায় এবং API হিসেবে expose করে। OpenAI, Google, Anthropic, Mistral সবাই আলাদা philosophy এবং strength নিয়ে কাজ করে। কেউ reasoning এ strong, কেউ speed এ, কেউ multimodal এ। Provider নির্বাচন মানে শুধু model নির্বাচন না, এর সাথে reliability, rate limit, pricing transparency, privacy policy এবং long term support জড়িত।

এই জায়গায় Vercel AI SDK অনেক বড় সুবিধা দেয়। এটি provider specific API কে abstract করে unified interface দেয়। এর মানে হলো আপনি আজ OpenAI ব্যবহার করছেন, কাল Google, পরশু Anthropic। Application logic একই থাকবে। শুধু model আর provider config বদলালেই behaviour বদলাবে। এই abstraction experimentation সহজ করে এবং vendor lock in কমায়।

Real world system এ একাধিক provider রাখা খুব common practice। কারণ কোনো provider down হলে fallback দরকার হয়। আবার cost বা performance অনুযায়ী provider switch করাও দরকার হয়। AI SDK এই ধরনের architecture বানানো সহজ করে দেয়।

সব মিলিয়ে বলা যায়, model আর provider নিয়ে ভালো সিদ্ধান্ত নেওয়া মানে শুধু ভালো output পাওয়া না। এর মানে হলো stable, scalable এবং cost effective AI system বানানো। যখন তুমি বুঝে যাও কোন কাজের জন্য কোন model best এবং কোন provider সেই model সবচেয়ে ভালোভাবে serve করতে পারবে, তখন তুমি সত্যিকার অর্থে AI powered application design করতে পারো।


এখন google এর provider ব্যবহার করে একটি example দেখাবো।
https://aistudio.google.com এই সাইট থেকে apikey বানাবো তারপরে

আমাদের ঐ `/src/app/api/stream/route.js` ফাইলেই মূলত লিখবো। openai কে replace করে google কে দিলাম।

তার আগে আমরা pnpm install @ai-sdk/google করে provider install করবো।

```
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const POST = async (req) => {
    const { prompt } = await req.json();
    try {
        const result = streamText({
            model: google("gemini-2.0-flash"),
            prompt
        })
        return result.toUIMessageStreamResponse();
    } catch (err) {
        console.log("streamming error", err);
        return new Response({ error: err.messsage }, { status: 500 })
    }
}
```

এখন ব্রাউজারে কিছু prompt লিখবোঃ

-> What is Model

-> What LLM

---

## 6. What tokens are and why they matter

AI model ব্যবহার করার সময় pricing page এ প্রায়ই আমরা দেখি input tokens আর output tokens এর আলাদা দাম লেখা থাকে। কিন্তু শুরুতে token ব্যাপারটা অনেকের কাছেই ঝাপসা লাগে। কারণ token কোনো শব্দের মতো পরিষ্কার কিছু না। এটা এমন একটা ধারণা, যেটা না বুঝলে AI ব্যবহার করা যায় ঠিকই, কিন্তু খরচ আর performance বোঝা যায় না। বাস্তবে token বোঝা মানে AI system কীভাবে কাজ করে, সেটার ভেতরের logic বোঝা।

Language model এর দৃষ্টিকোণ থেকে token হলো text এর সবচেয়ে ছোট processing unit। Model পুরো বাক্য বা শব্দ একসাথে দেখে না। সে text কে ছোট ছোট অংশে ভেঙে নেয় এবং সেই অংশগুলো নিয়ে কাজ করে। এই অংশগুলো কখনো পুরো শব্দ হতে পারে, কখনো শব্দের অংশ, কখনো আবার punctuation বা special character। Token এর কোনো fixed length নেই। কোন text কীভাবে ভাঙবে, সেটা model এর tokenizer আর training এর উপর নির্ভর করে।

একই শব্দ ভিন্ন model এ ভিন্নভাবে token এ ভাঙতে পারে। কারণ প্রতিটি model তার training এর সময় ভাষাকে ভাঙার জন্য আলাদা encoding শিখেছে। ধরো একটি শব্দ যেমন “hamburger”। কোনো model এটাকে তিনটি অংশে ভাগ করতে পারে, আবার অন্য model দুই ভাগে। শব্দ একই থাকে, কিন্তু token breakdown আলাদা হয়। এই কারণেই একই prompt ভিন্ন model এ চালালে token count পরিবর্তন হয়।

(
https://platform.openai.com/tokenizer
এই সাইটে প্রবেশ করে আমরা বিভিন্ন প্রম্পট দিয়ে টুকেন কেলকুলেশন করে দেখাবো।
)

এই বিষয়টা বুঝলে একটা গুরুত্বপূর্ণ জিনিস পরিষ্কার হয়। Token মানে text এর character সংখ্যা না, শব্দের সংখ্যাও না। Token হলো model-specific representation। সাধারণভাবে ইংরেজি ভাষায় এক token প্রায় চারটি character এর সমান হয়। এটা exact নয়, কিন্তু quick estimation করার জন্য কাজে লাগে।

Token কেন এত গুরুত্বপূর্ণ, সেটা বুঝতে হলে এর practical impact দেখতে হবে। প্রথমত, token নির্ধারণ করে model একবারে কতটা text process করতে পারবে। প্রতিটি model এর একটা maximum token limit থাকে। এই limit এর ভেতরে system message, user prompt, আগের conversation history এবং model এর output সবকিছু ধরতে হয়। Limit ছুঁয়ে ফেললে নতুন input আর নেওয়া যায় না।

দ্বিতীয়ত, token সরাসরি cost এর সাথে যুক্ত। AI model ব্যবহার করার খরচ token অনুযায়ী হিসাব করা হয়। যত বেশি input token পাঠানো হবে, তত বেশি খরচ। যত বেশি output token generate হবে, খরচ আরও বাড়বে। বেশিরভাগ ক্ষেত্রে output token input token এর চেয়ে বেশি দামি হয়, কারণ text generate করা computationally বেশি expensive।

তৃতীয়ত, token output quality কে প্রভাবিত করে। খুব বেশি token পাঠালে model অপ্রয়োজনীয় তথ্যের ভেতরে হারিয়ে যেতে পারে। আবার খুব কম token দিলে model এর কাছে যথেষ্ট context থাকে না। ভালো output পেতে হলে prompt length, context এবং expected response এর মধ্যে balance রাখা জরুরি।

এই জায়গায় context window বিষয়টা খুব গুরুত্বপূর্ণ হয়ে ওঠে। Context window হলো model একবারে সর্বোচ্চ কত token মনে রাখতে পারে। এই window এর মধ্যে পুরো conversation state রাখা হয়। কিছু model ছোট context window নিয়ে কাজ করে, যেগুলো simple chat বা Q&A এর জন্য যথেষ্ট। আবার কিছু model বিশাল context window support করে, যেখানে বড় document বা দীর্ঘ conversation একসাথে process করা যায়।

বড় context window powerful হলেও এর একটা side effect আছে। Context window পূর্ণ হলে নতুন token ঢুকতে গিয়ে পুরোনো token বাদ দিতে হয়। অর্থাৎ model ধীরে ধীরে আগের তথ্য ভুলে যায়। এই কারণেই দীর্ঘ conversation এর পরে নতুন chat শুরু করা ভালো practice।

Input token আর output token এর পার্থক্য বোঝা cost optimization এর জন্য খুব গুরুত্বপূর্ণ। Input token হলো সবকিছু যা আপনি model কে পাঠান System prompt, user prompt, chat history, tool instruction সবই এর মধ্যে পড়ে। Output token হলো model যা generate করে। এই দুইটার pricing আলাদা হয় এবং limit-ও আলাদা হতে পারে।

Production system এ এই পার্থক্যটা খুব দ্রুত গুরুত্ব পায়। একটি ছোট prompt হয়তো cheap মনে হয়, কিন্তু যদি প্রতিটা request এ বড় output আসে, তাহলে মাস শেষে খরচ অনেক বেড়ে যেতে পারে। হাজার হাজার request হলে এই ছোট difference গুলো বড় অংকে পরিণত হয়।

Vercel AI SDK ব্যবহার করলে token usage track করা যায়। Generate বা stream করার পরে usage থেকে input token, output token এবং total token জানা যায়। Streaming এর ক্ষেত্রে এই তথ্য stream শেষ হওয়ার পরে পাওয়া যায়। এই সুবিধা production এ monitoring, alerting এবং cost control এর জন্য খুব দরকারি।

একটা বিষয় মনে রাখা জরুরি। SDK অনেক সময় internally কিছু system token যোগ করে, যেমন instruction formatting বা context management এর জন্য। তাই tokenizer tool এ যেটা দেখা যায়, actual API usage একটু বেশি হতে পারে। এটা স্বাভাবিক এবং প্রায় সব AI SDK এইভাবেই কাজ করে।

সব মিলিয়ে বলা যায়, token হলো AI system এর সবচেয়ে মৌলিক এবং গুরুত্বপূর্ণ ধারণাগুলোর একটি। Token বোঝা মানে শুধু pricing বোঝা নয়। এর মানে হলো context কীভাবে কাজ করে, model কীভাবে তথ্য মনে রাখে, এবং কীভাবে scalable ও cost effective AI application তৈরি করা যায়, সেটা বোঝা।

একবার token নিয়ে পরিষ্কার ধারণা তৈরি হলে আপনি স্বাভাবিকভাবেই ভালো prompt লিখতে পারবেন, অপ্রয়োজনীয় context বাদ দিতে পারবেন, chat history trim করতে পারবেন এবং প্রয়োজন অনুযায়ী model নির্বাচন করতে পারবেন। এই জায়গা থেকেই একজন সাধারণ API user আর একজন চিন্তাশীল AI application developer এর পার্থক্য তৈরি হয়।

এই গুলো পরীক্ষা করার জন্য `/src/app/api/stream/route.js` এই একই ফাইলে লিখবোঃ
```js
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = streamText({
      model: openai("gpt-5-nano"),
      prompt,
    });

    // Log token usage after streaming completes
    result.usage.then((usage) => {
      console.log({
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming text:", error);
    return new Response("Failed to stream text", { status: 500 });
  }
}
```

এখন ব্রাউজারে প্রম্পট লিখব /ui/stream পেজে গিয়েঃ
What is AI

এবং রেসপন্স আসলে terminal এ log গুলো দেখব আর এক্সপ্লেইন করবো।


----

## 7. Chat system and message history

এখন আমি বোঝাবো কেন simple prompt–response যথেষ্ট না একটা real chat experience বানানোর জন্য। আগে দেখাবো, AI আসলে কোনো memory রাখে না। পেজ রিফ্রেশ করলে বা follow-up প্রশ্ন করলে আগের তথ্য ভুলে যায়, কারণ প্রতিটা request আলাদা ভাবে প্রসেস হয়। এখান থেকেই chat system এর দরকারটা বোঝা যায়। মানে আমরা যখন prompt লিখছিলাম তখন কিন্তু জাস্ট single prompt ই পাঠাচ্ছিলাম তাই না। আমরা কিন্তু এই গুলোকে conversation আকারে পাঠায়নি।

আমি মূলত প্রম্পটে লিখবো মানে /ui/stream ->

-> My name is Sumit.
-> What is my Name.

কিন্তু ai ভুলে যাবে আমার নাম। আমার নাম বলতে পারবেন না।

এরপর আমি দেখাবো কীভাবে Vercel AI SDK ব্যবহার করে conversation history ধরে রাখা যায়। এখানে single prompt না পাঠিয়ে পুরো messages array পাঠানো হয়। route handler এ messages নেওয়া, সেগুলো model format এ convert করা, আর streaming response পাঠানো এই তিনটা জিনিস মূল ফোকাস হবে।

UI অংশে আমি useChat hook explain করবো। messages কীভাবে structure করা হয়, role আর parts দিয়ে কীভাবে UI render হয়, status দিয়ে loading, error আর stop button কিভাবে handle করা যায় — এগুলো high level এ বুঝিয়ে দেবো।

শেষে token বিষয়টা clear করবো। প্রতিটা নতুন message এর সাথে পুরো conversation পাঠানোর কারণে input tokens বাড়ে, আর cost ও বাড়ে। এজন্যই real apps এ new chat বা reset option থাকে। এই ভিডিও শেষে goal একটাই — chat কীভাবে কাজ করে, কেন messages array দরকার, আর token cost কীভাবে বাড়ে, এগুলো যেন পরিষ্কারভাবে মাথায় থাকে।


কোডঃ
`/src/app/api/chat/route.js`

```js
import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText } from "ai";

export const POST = async (req) => {
    const { messages } = await req.json();
    try {
        const result = await streamText({
            model: openai("gpt-4.1-nano"),
            messages: await convertToModelMessages(messages)
        })
        // এই গুলো একদম পরে দেখাবো।
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
```

`/src/app/ui/chat/page.jsx`

```js
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
```

এখন প্রম্পট লিখবোঃ

-> My name is Sumit
তারপরে
-> What is my name

এখন এভাবেই chat conversation হতে থাকবে ভুলবে না আর context ai.

---

## 8. Practical prompt engineering

AI application বানানোর সময় খুব দ্রুত একটা বিষয় পরিষ্কার হয়ে যায়, এখানে সবচেয়ে বড় সমস্যা model কত advanced সেটা না, বরং developer আর end user সেই intelligence টা কতটা clean, predictable আর friction-free ভাবে পাচ্ছে। অনেক সময় আমরা নতুন model, বেশি parameter, বা better benchmark নিয়ে কথা বলি, কিন্তু real product এ গিয়ে fail করি কারণ experience টা ঠিকভাবে design করা হয়নি। Programming-related educational বা developer-focused app হলে এই সমস্যা আরও sensitive হয়ে যায়। কারণ এখানে confusing response মানেই শেখার flow বা কাজের flow ভেঙে যাওয়া।

এই কারণেই AI SDK দিয়ে এখন পর্যন্ত যেসব জিনিস শেখা হয়েছে, সেগুলোকে শুধু AI feature হিসেবে না দেখে UX-focused engineering decision হিসেবে দেখা দরকার। Streaming response যোগ করা হয়েছে কারণ মানুষ spinner দেখে বসে থাকতে চায় না। Text একটু একটু করে আসলে user বুঝতে পারে system কাজ করছে। Chat memory রাখা হয়েছে কারণ শেখা বা coding কখনো one-off question না। এটা আগের context এর উপর দাঁড়িয়ে এগোয়। এই দুইটা জিনিসই model upgrade না, experience upgrade।

এই জায়গা থেকে পরের ধাপটা আরও critical। কারণ এখানে AI-এর output আর শুধু একটা answer থাকে না, এটা ধীরে ধীরে পুরো product এর behaviour হয়ে দাঁড়ায়। User যেভাবে অ্যাপটাকে perceive করে, সেটা অনেকটাই নির্ভর করে AI কীভাবে respond করছে তার উপর। একই AI model একেকটা product এ একেক রকম behave করবে, এটা automatic না। এটা deliberate ভাবে design করতে হয়।

Real-world application এ AI কখনো assistant, কখনো advisor, কখনো silent helper, আবার কখনো decision-support system হিসেবে কাজ করে। কোন প্রোডাক্টে AI কতটা কথা বলবে, কতটা concise হবে, কতটা assertive হবে, বা কতটা flexible থাকবে, এই সিদ্ধান্তগুলো model নিজে নেয় না। এগুলো product team কে ঠিক করে দিতে হয়।

আর এই behaviour design করার সবচেয়ে শক্তিশালী এবং practical tool হলো prompt engineering। Prompt engineering এখানে model কে smart বানানোর কৌশল না, বরং model কে product-এর context বোঝানোর ভাষা। আপনি AI-কে বলেন, এই পরিবেশে তুমি কীভাবে কাজ করবে, কী prioritize করবে, আর কোন জিনিস avoid করবে। একবার এই context ঠিকভাবে সেট হয়ে গেলে, একই model দিয়েই completely different experience তৈরি করা যায়।

এই কারণেই prompt engineering কে আলাদা কোনো technical trick হিসেবে না দেখে, real-world AI product design এর core অংশ হিসেবে দেখা দরকার। এখানে ভুল সিদ্ধান্ত মানে শুধু “ভুল answer” না, বরং পুরো experience unreliable হয়ে যাওয়া। আর সঠিক সিদ্ধান্ত মানে AI quietly কাজ করছে, user শুধু অনুভব করছে যে অ্যাপটা তার প্রয়োজন বুঝে কাজ করছে।

Prompt engineering মানে শুধু ভালো ইংরেজিতে prompt লেখা না। এটা AI-কে কী জানে সেটা বদলানোর চেষ্টা না। Prompt engineering মানে AI-কে কোন environment এ কাজ করতে হবে, সেটা পরিষ্কার করে দেওয়া। AI কে বলা, এই অ্যাপে তুমি কী role play করছো। Teacher, assistant, reviewer, advisor, না কি decision-support tool। এই role clarity না থাকলে, AI নিজের মতো করে guess করে নেয়, আর সেখান থেকেই inconsistency শুরু হয়।

ধরেন আপনি একটা AI-powered JavaScript learning বা coding practice app বানাচ্ছেন। User জিজ্ঞেস করল, “How do I handle form input in React?” কোনো prompt strategy না থাকলে AI explanation, React internals, best practices, historical context সব নিয়ে চলে যেতে পারে। তথ্য technically ঠিক থাকবে, কিন্তু user যেটা চেয়েছিল, সেটা হলো usable code। এখন আপনি যদি system prompt এ পরিষ্কার করে বলেন, “When users ask programming questions, respond with practical code examples only. Do not explain unless explicitly asked,” তখন AI একই প্রশ্নে সরাসরি working React code দিয়ে দেবে। এখানে model বদলালো না, capability বদলালো না। বদলালো শুধু behaviour। আর এই behaviour control করাটাই prompt engineering।

এই জায়গায় system prompt কে আপনি AI-এর knowledge বা memory না, বরং long-term attitude বলতে পারেন। আপনি একবার ঠিক করে দিলেন, এই অ্যাপে AI কীভাবে কথা বলবে, কতটা বলবে, আর কী avoid করবে। Beginner-friendly হবে নাকি advanced হবে, code-first হবে নাকি explanation-heavy হবে, সবকিছু এই এক জায়গায় define হয়ে যায়। পুরো conversation জুড়ে এই attitude কাজ করে, কিন্তু user শুধু অনুভব করে যে এই app টা predictable, consistent আর reliable।

তবে programming education বা developer-facing app এ system prompt যত powerful, ততটাই careful হতে হয়। কারণ এই instruction প্রতিটা request এর সাথে যায়। মানে প্রতিটা code question, প্রতিটা response এ token usage বাড়ে। Small demo তে এটা চোখে পড়ে না, কিন্তু large-scale learning platform বা internal developer tool এ গেলে latency আর cost real concern হয়ে দাঁড়ায়। তাই ভালো prompt engineering মানে বড় বড় rule লেখা না, বরং minimal কিন্তু effective instruction লেখা। যত কম কথায় AI-এর behaviour shape করা যায়, তত ভালো।

অনেক সময় শুধু rule দিলেই consistent output আসে না। তখন example দেখানো দরকার হয়। ধরেন আপনি চান, user যা-ই জিজ্ঞেস করুক, output সবসময় pure code হোক। শুধু system prompt দিলে মাঝে মাঝে AI এক লাইনের explanation যোগ করে ফেলতে পারে। কিন্তু আপনি যদি আগে এক-দুইটা example দেখান, user question আর তার exact code-only answer সহ, তখন AI ওই pattern ধরে ফেলে। এটাকেই few-shot prompting বলা হয়। Programming education বা coding practice app এ এটা খুব practical, কারণ এখানে output format নিজেই শেখার অংশ।

Few-shot prompting বিশেষ করে কাজে লাগে যেখানে consistency সবচেয়ে important। যেমন interview prep, code refactoring suggestion, API usage example, বা internal tooling। তবে এখানেও trade-off আছে। Example যত বেশি, token তত বেশি। তাই production-grade app গুলো সাধারণত minimum example দিয়ে maximum behaviour বের করার চেষ্টা করে।

এই পুরো আলোচনার ভেতরে একটা common pattern আছে। Prompt engineering মানে AI কে কড়া rule এ আটকে রাখা না। বরং AI কে এমন একটা working environment দেওয়া, যেখানে সে বুঝতে পারে এই অ্যাপে তার কাজ কী। Code লিখতে হবে নাকি explain করতে হবে, short answer দিতে হবে নাকি detailed output দিতে হবে, এগুলো যদি environment থেকেই clear থাকে, AI নিজেই ভালো decision নেয়। Environment unclear হলে AI নিজের মতো করে assume করে, আর সেটাই educational বা developer-facing product এর জন্য সবচেয়ে dangerous জায়গা।

এখন এই ধারণাটা পরিষ্কার করতে prompt engineering-এর তিনটা আলাদা use case দেখা যাক।

প্রথম use case হলো **Teacher-style prompt**। এখানে AI-এর role হলো concept পরিষ্কার করা। System prompt এ বলা থাকে যে AI beginner-friendly হবে, simple language ব্যবহার করবে, heavy jargon avoid করবে, আর example দিয়ে বোঝাবে। এই টাইপ prompt education platform বা tutorial-based app এ ভালো কাজ করে, যেখানে goal হলো বুঝিয়ে বলা, fast answer দেওয়া না।

দ্বিতীয় use case হলো **Coding assistant বা code-generation prompt**। এখানে AI teacher না, assistant developer। System prompt এ পরিষ্কার করে বলা থাকে যে explanation optional, default behaviour হলো working code দেওয়া। User যা জিজ্ঞেস করবে, তার practical implementation আসবে। এই prompt style coding practice app, internal dev tool, বা productivity-focused product এ সবচেয়ে বেশি effective।

তৃতীয় use case হলো **Decision বা product helper prompt**। ধরেন আপনি একটা AI tool বানাচ্ছেন যেটা developer বা product team কে decision নিতে সাহায্য করে। এখানে AI neither teacher nor code generator। সে context analyse করে, trade-off বোঝায়, pros-cons highlight করে। System prompt এ বলা থাকে, absolute answer না দিয়ে reasoning-oriented response দিতে। এই টাইপ prompt product planning, architecture discussion, বা technical decision-support tool এ ব্যবহার হয়।

এই তিনটা use case দেখলে একটা জিনিস পরিষ্কার হয়। Prompt engineering মানে একটাই “best prompt” বানানো না। Prompt engineering মানে role অনুযায়ী environment design করা। একই model, একই infrastructure, কিন্তু prompt বদলালে পুরো experience বদলে যায়।

Vercel AI SDK এই জায়গায় বিশেষভাবে helpful, কারণ এখানে prompt, message role, streaming, memory সব আলাদা করে চিন্তা করা যায়। আপনি model বদলালেও, provider change করলেও, আপনার prompt strategy আর product behaviour unchanged থাকতে পারে। Real-world AI application এ এই separation খুব valuable, কারণ এতে product thinking আর model choice একে অপরের উপর overly depend করে না।

শেষ পর্যন্ত prompt engineering এর success user কখনো শব্দে বোঝে না। তারা বোঝে অনুভবে। তারা দেখে app টা অপ্রয়োজনীয় কথা বলছে না, response predictable, আর output ঠিক যেটা দরকার সেটাই দিচ্ছে। যখন একটা AI-based programming education বা coding app এই জায়গায় পৌঁছে যায়, তখন বোঝা যায় এখানে AI feature দেখানোর চেষ্টা করা হয়নি, এখানে ভালো experience বানানো হয়েছে।



আমরা আমাদের `/src/app/api/chat/route.js` এই ফাইলের মধ্যে মূলত যা যা উপরে বলেছি সেই গুলো দিয়ে কোড লিখবো আর বুঝাবঃ

```js
import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText } from "ai";

export const POST = async (req) => {
  const { messages } = await req.json();

  try {
    const modelMessages = await convertToModelMessages(messages);

    const result = await streamText({
      model: openai("gpt-4.1-nano"),
      messages: [
        // প্রথম বার দেখাবেন। তারপরে কমেন্ট করবেন না রিমুভ করবেন।
        // {
        //   role: "system",
        //   content:
        //     "When a programming question is asked, reply with concrete code examples. " +
        //     "Skip explanations unless the user clearly asks for them."
        // },

        // ২য় বার দেখাবেন। তারপরে কমেন্ট করবেন না রিমুভ করবেন।
        // {
        //   role: "system",
        //   content:
        //     "You are an experienced teacher who explains ideas in a simple, relatable way, " +
        //     "using everyday analogies instead of heavy technical terms."
        // },
        // সর্ব শেষে দেখাবেন।
        {
          role: "system",
          content:
            "Turn React-related questions into clear, usable code snippets. " +
            "Return code only, without explanations or extra text."
        },
        {
          role: "user",
          content: "How can I toggle a boolean value?"
        },
        {
          role: "assistant",
          content: `
const [isOn, setIsOn] = useState(false);

const toggle = () => {
  setIsOn((prev) => !prev);
};
          `
        },
        ...modelMessages,
      ],
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("Chat Streaming error occured", err);
    return new Response(JSON.stringify({ err: err.message }), { status: 500 });
  }
};

```

ব্রাউজারে প্রম্পট লিখবোঃ

-> What is ReactJS [১ম বার, ২য় বার]
-> How to Button Submit.

বুঝিয়ে এই ডক্স হাতে ধরিয়ে দিবেনঃ https://platform.openai.com/docs/guides/prompt-engineering



---


## 9. Structured output (Object, Array, Enums, JSON)

## 10. AI tools (function calling, web search, sources)

## 11. MCP Tools

## 12. Message Metadata

## 13. Basic understanding of embeddings

## 14. Simple semantic search / basic RAG concept