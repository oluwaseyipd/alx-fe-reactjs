import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async (page = 1) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  return data;
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true, // 
    staleTime: 1000 * 60, // 1 min fresh
    cacheTime: 1000 * 60 * 5, // 5 min cache
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-[#C15F3C] text-white px-4 py-2 rounded hover:bg-[#a34d30] transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-3">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:bg-gray-50"
          >
            <h3 className="font-bold text-[#C15F3C]">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((old) => old + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsComponent;
