import React, { useContext, useEffect } from "react";
import Header from "../src/Components/Header";
import Blogs from "../src/Components/Blogs";
import Pagination from "../src/Components/Pagination";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <Header />
      <Blogs />
      <Pagination />
    </>
  );
}

export default App;
