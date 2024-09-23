"use client";

import UserProfile from "@/components/UserProfile";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);

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
      <div>
        <input type="text" defaultValue="Audi Q5" />
      </div>
      <div>
        {showText && <span>This is the text!</span>}
        <button onClick={() => setShowText(!showText)}>Show Text</button>
      </div>
      <div>
        <h1>User Profile</h1>
        <UserProfile
          displayName="lasjdflksdjflkjdfskjafsdkjfdkjasdkfljkldfj"
          email="carlos.o9rrego38@gmail.com"
          isEmailVerified={true}
          username="Carloso"
        />
      </div>
    </main>
  );
}
