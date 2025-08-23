import React from "react";
import './index.css';
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./PostsComponent";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">React Query Demo</h1>
        <PostsComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
