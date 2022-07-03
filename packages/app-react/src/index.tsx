/* eslint-disable no-console */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import { trpc } from './trpc';

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  url: 'http://localhost:8080/trpc',
});

// Dump environment
console.log(import.meta.env);

// Render App
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>,
);
