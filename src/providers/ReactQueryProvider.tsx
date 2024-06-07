"use client";
import { ReactNode } from "react";
import { Query, QueryClient, QueryClientProvider } from "react-query";
function ReactQueryProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
