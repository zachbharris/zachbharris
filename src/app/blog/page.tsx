import BlogPostList from "@/components/BlogPostList";

const BlogPage = () => {
  return (
    <div className="pt-2">
      <h1 className="text-4xl font-bold font-sans mt-4 mb-2">Blog</h1>
      <BlogPostList enableInfiniteScroll />
    </div>
  );
};

export default BlogPage;
