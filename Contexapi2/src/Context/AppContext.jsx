import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);

    try {
      let url = `${baseUrl}?page=${page}`;
      const result = await fetch(url);
      const data = await result.json();

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("PAGE NOT FOUND");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
    console.log(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchBlogPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
