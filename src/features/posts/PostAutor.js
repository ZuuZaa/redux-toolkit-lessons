import { useSelector } from "react-redux"
import { getAllUsers } from "../users/usersSlice"

export const PostAuthor = ({id}) => {

    const users = useSelector(getAllUsers)
    const author = users.find(user=> user.id ===id) 
    console.log(id, author)
  return (
    <h5>{author}</h5>
  )
}


