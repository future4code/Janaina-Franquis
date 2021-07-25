import React from "react";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";



const PostPage = () => {
  useUnprotectedPage()

  return (
    <div>
      PostPage
    </div>
   
  )
}

export default PostPage;