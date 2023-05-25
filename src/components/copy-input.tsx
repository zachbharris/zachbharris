"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./icon";

export default function CopyInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [copied, setCopied] = useState(false);

  function onClick() {
    inputRef.current?.select();
    navigator.clipboard.writeText(inputRef.current?.value ?? "");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="relative overflow-hidden flex flex-row gap-4 bg-zinc-700/25 rounded-lg px-4 py-2">
      <AnimatePresence>
        {copied ? (
          <motion.span
            initial={{
              opacity: 0,
              transform: "scale(0.5)",
            }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(0.5)" }}
            transition={{ duration: 0.25, type: "spring" }}
            className="absolute right-16 top-0 bottom-0 my-auto h-full inline-flex items-center"
          >
            Copied
          </motion.span>
        ) : null}
      </AnimatePresence>
      <input
        type="email"
        value="hi@zachbharris.com"
        className="bg-transparent flex-1 overflow-hidden outline-none"
        ref={inputRef}
        onClick={() => inputRef.current?.select()}
        readOnly
      />
      <button
        type="button"
        className="p-2 bg-transparent hover:bg-zinc-700 active:bg-zinc-700/50 transition-colors rounded-lg outline-none focus-visible:outline-zinc-400"
        onClick={onClick}
      >
        <Icon icon="copy" />
      </button>
    </div>
  );
}
