import React from "react";
import { blogposts } from "../../utils/data";

const Blog = () => {
  return (
    <section className="w-full h-fit px-8 md:px-12 lg:px-24 py-16 flex gap-10 justify-between flex-col  ">
      <h1
        id="text"
        className="w-fit mx-auto text-xl md:text-2xl lg:text-3xl font-inknut font-bold"
      >
        BLOG
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogposts.map((post, i) => (
          <div
            className="w-auto h-fit flex flex-col gap-2 items-center"
            key={i}
          >
            <img
              src={post.img}
              alt={post.title}
              loading="lazy"
              className="w-3/4 h-auto object-cover"
            />
            <h2 className="text-base md:text-xl font-bold font-inknut">
              {post.title.length > 20
                ? post.title.slice(0, 20) + "..."
                : post.title}
            </h2>
            <span className="text-gray-500">{post.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
