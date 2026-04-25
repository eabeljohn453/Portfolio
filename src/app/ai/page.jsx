"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AIPage() {
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const router = useRouter();

  // 🔥 auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", content: input };

  setStarted(true);
  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  // create empty assistant message
  setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let done = false;
    let fullText = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      const chunk = decoder.decode(value || new Uint8Array());
      fullText += chunk;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = fullText;
        return updated;
      });
    }
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Something went wrong." },
    ]);
  }
};

  return (
    <div className="h-screen bg-[#0f0f0f] text-white flex flex-col relative">
 
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 right-6 text-gray-400 hover:text-white text-2xl z-50 cursor-pointer"
      >
        ✕
      </button>

      {/* 🤖 Top Left Bot */}
      <div className="absolute top-5 left-6 z-50">
        <div className="relative w-16 h-16">

          <div className="absolute inset-0 rounded-full 
            bg-[linear-gradient(90deg,#a855f7,#3b82f6,#ec4899,#a855f7)] 
            bg-[length:200%_100%] animate-[glowMove_3s_linear_infinite]">
          </div>

          <div className="absolute inset-[4px] rounded-full bg-black flex items-center justify-center">
            <div className="text-xl">🤖</div>
          </div>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      {!started ? (
        // 🧠 Landing Screen
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-3xl md:text-4xl text-gray-200 text-center">
            Ask anything about{" "}
            <span className="text-white font-semibold">Eabel</span>
          </h1>
        </div>
      ) : (
        // 💬 Chat Screen
        <div className="flex-1 overflow-y-auto px-4 pt-20 pb-32 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* typing */}
          {loading && (
            <div className="text-gray-400 text-sm">Typing...</div>
          )}

          <div ref={bottomRef} />
        </div>
      )}

      {/* 🔥 INPUT */}
      <div className="absolute bottom-0 w-full px-4 pb-6 pt-2 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto bg-[#1e1e1e] rounded-full flex items-center px-5 py-3 border border-gray-700">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <button
            onClick={handleSend}
            className="ml-3 bg-white text-black rounded-full px-4 py-1 text-sm hover:opacity-80 cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>

    </div>
  );
}