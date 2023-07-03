import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

export const PostList = () => {

  const posts = useSelector(selectAllPosts)
  const user = "dave"

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <h5>{post.userId}</h5>
      <p>{post.content}</p>
    </article>
  )
  )


  return <section>
    <h1>Posts</h1>
    {renderPosts}
  </section>
}


