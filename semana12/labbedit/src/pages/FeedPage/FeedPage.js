import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";




const FeedPage = () => {
  useUnprotectedPage()
  useProtectedPage()
  return (
    <div>
      <h1>FeedPage</h1>

    </div>
  );
};

export default FeedPage;
