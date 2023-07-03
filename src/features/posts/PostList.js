import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

export const PostList = () => {

  const posts = useSelector(selectAllPosts)

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  )
  )


  return <section>
    <h1>Posts</h1>
    {renderPosts}
  </section>
}


