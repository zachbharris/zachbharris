import BlogPostList from "@/components/BlogPostList";

export const metadata = {
  title: "Blog",
  description: "A collection of my thoughts and ideas.",
};

const BlogPage = () => {
  return (
    <div className="pt-2 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold font-sans mt-4 mb-2">Blog</h1>
      <BlogPostList enableInfiniteScroll />
    </div>
  );
};

export default BlogPage;
