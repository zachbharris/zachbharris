"use client";

import { useRef } from "react";
import Icon from "./icon";

export default function CopyInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function onClick() {
    inputRef.current?.select();
    navigator.clipboard.writeText(inputRef.current?.value ?? "");
  }

  return (
    <div className="flex flex-row gap-4 bg-zinc-700/25 rounded-lg px-4 py-2">
      <input
        type="email"
        value="hi@zachbharris.com"
        className="bg-transparent flex-1 overflow-hidden outline-none"
        ref={inputRef}
        onClick={onClick}
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
