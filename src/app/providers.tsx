"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        {children}

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
