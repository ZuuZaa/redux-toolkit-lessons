import { Counter } from "./features/counter/Counter"
import { AddPostForm } from "./features/posts/AddPostForm"
import { PostList } from "./features/posts/PostList"


const App = () => {
  return (
    <>
      <div>Redux Toolkit</div>
      <Counter />
      <AddPostForm/>
      <PostList/>
    </>
  )
}

export default App