import { Blog } from "@/types/blog";

const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );

  const result: Blog[] = await response.json();

  return result;
};

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-lg border p-4 shadow-sm">
            <h2 className="font-semibold">{blog.title}</h2>
            <p className="mt-2 text-gray-600">{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}