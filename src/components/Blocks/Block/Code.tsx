"use client";

import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import allyDark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import allyLight from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-light";
import { useTheme } from "next-themes";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("bash", bash);

type Props = {
  block: CodeBlockObjectResponse;
};

export default function CodeBlock({ block }: Props) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div className="block my-4">
      <SyntaxHighlighter
        language={block.code.language}
        style={isDark ? allyDark : allyLight}
        customStyle={{
          backgroundColor: isDark ? "#27272a" : "#f4f4f5",
        }}
      >
        {block.code.rich_text.map((item) => item.plain_text)}
      </SyntaxHighlighter>
    </div>
  );
}
