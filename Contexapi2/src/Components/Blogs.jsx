import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "../Components/Spinner";

function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div>
            <p>No Page Found</p>
          </div>
        ) : (
          <div className="flex w-[560px] flex-col m-auto mt-[75px] mb-[80px]">
            {posts.map((post) => (
              <div className="flex flex-col gap-[5px] my-2 ">
                <p className="font-bold ">{post.title}</p>

                <div className="font-semibold">
                  {post.author}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {post.category}
                </div>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <div>
                  {post.tags.map((tag) => (
                    <span>{tag} &nbsp; </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Blogs;
