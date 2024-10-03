import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts } from "./service/posts";

function App() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasMore = useRef(true);
  const observer = useRef<IntersectionObserver>();

  const getAllPosts = useCallback(async () => {
    setLoading(true);
    const response: [] = await getPosts(page, 10);
    if ("error" in response) {
      setPosts([]);
      setLoading(false);
      return;
    }
    if (response.length === 0) {
      hasMore.current = false;
    } else {
      setPosts((prev) => [...prev, ...response]);
    }
    setLoading(false);
  }, [page]);

  const lastPostElementRef = useCallback(
    (node: Element) => {
      if (loading || !hasMore.current) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore.current) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    if (hasMore.current) {
      getAllPosts();
    }
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
