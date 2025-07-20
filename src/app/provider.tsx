// src/component/Providers.tsx
'use client';

import { SessionProvider } from "next-auth/react";
import QueryProvider from "../app/component/QueryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </SessionProvider>
  );
}
