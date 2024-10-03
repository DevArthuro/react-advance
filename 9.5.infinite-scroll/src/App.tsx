import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts } from "./service/posts";

function App() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const getAllPosts = async () => {
    setLoading(true);
    const response: [] = await getPosts(page, 10);
    if ("error" in response) {
      setPosts([]);
      setLoading(false);
      return;
    }
    setPosts((prev) => [...prev, ...response]);
    setLoading(false);
  };

  const lastPostElementRef = useCallback((node: Element) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    getAllPosts();
  }, [page]);

  return (
    <main>
      <h1>Mis publicaciones</h1>
      <ul>
        {posts.map((post, index) => (
          <li
            key={`${post?.id}-${index}`}
            ref={posts.length === index + 1 ? lastPostElementRef : null}
          >
            <h3>{post?.title}</h3>
            <p>{post?.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
