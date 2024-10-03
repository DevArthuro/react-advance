export const getPosts = async (page: number, limit: number) => {
  try {
    const respose = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await respose.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: (error as Error).message ?? "Failed to fetch posts",
    };
  }
};
