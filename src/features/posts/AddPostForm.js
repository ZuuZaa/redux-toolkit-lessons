import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postSlice'
import { getAllUsers } from '../users/usersSlice'

export const AddPostForm = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")

    const users = useSelector(getAllUsers)
    console.log(users)

    const dispatch = useDispatch()

    const onTitleChange = event => setTitle(event.target.value.trim())
    const onContentChange = event => setContent(event.target.value.trim())
    const onIdChange = event => setUserId(event.target.value.trim())

    const onSubmit = (event) => {

        event.preventDefault()
        if(title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle("")
            setContent("")
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type='text'
                    name='postTitle'
                    id='postTitle'
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor='postContent'>Post Content:</label>
                <textarea
                    rows="6"
                    cols="20"
                    name='postContent'
                    id='postContent'
                    value={content}
                    onChange={onContentChange}
                />
                <input
                    type='text'
                    name='userId'
                    id='userId'
                    value={userId}
                    onChange={onIdChange}
                />
                <button type='submit'>Save</button>
            </form>
        </section>
    )
}
