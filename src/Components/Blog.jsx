import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./Api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetcher();
  }, []);
  const fetcher = () => {
    axios
      .get(`${API_BASE_URL}blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch blogs", error);
      });
  };
  return (
    <section className="bg-[#f3f7fb]">
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20">
        <div className="flex flex-col sm:items-center lg:items-start">
          <h2
            className="text-3xl font-serif font-bold md:text-5xl lg:text-left"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            The latest news
          </h2>
          <div className="w-40 mt-4 h-[5px] bg-[#006CB7] rounded"></div>
        </div>
        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-10 lg:text-left">
          The Future of Software Development: Trends to Watch.
        </p>
        {blogs.length > 0 ? (
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-10 lg:grid-cols-3 lg:max-w-full">
            {blogs
              .slice(blogs.length - 3)
              .reverse()
              .map((blog) => (
                <a
                  href="#"
                  key={blog.id}
                  className={`overflow-hidden bg-white rounded shadow group
                    `}
                  data-aos="fade-up"
                  data-aos-duration={blog.aosDuration}
                >
                  <div className="p-5">
                    <div className="relative">
                      <img
                        src={`http://localhost:3000/Images/${blog.image}`}
                        alt={blog.title}
                        className="w-full h-60 object-cover rounded group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-[#006CB7] uppercase bg-white rounded-full">
                          {blog.category}
                        </span>
                      </div>
                      <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                        {new Date(blog.createdAt).toLocaleString()}
                      </span>
                      <p className="mt-4 text-base text-gray-600">
                        {blog.title}
                      </p>
                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                      >
                        {blog.author}
                      </a>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <div className="text-center">Loading Blogs...</div>
        )}
      </div>
    </section>
  );
};

export default Blog;
