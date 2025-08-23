import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60, // data stays fresh for 1 min
    cacheTime: 1000 * 60 * 5, // cache for 5 min
    refetchOnWindowFocus: true, // refetch when window is focused
  });

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:bg-gray-50"
          >
            <h3 className="font-bold text-[#C15F3C]">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
