export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <button>Click me</button>
      <div>
        <label htmlFor="ramdomText">Enter Random Text: </label>
        <input id="ramdomText" role="randomText" />
      </div>
      <div>
        <label htmlFor="specifictText">Specifict Text: </label>
        <input id="specifictText" role="inputSpecifict" />
      </div>
      <div>
        <input type="text" placeholder="Searching..." />
      </div>
    </main>
  );
}
