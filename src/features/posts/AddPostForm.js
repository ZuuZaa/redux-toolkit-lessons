import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'
import { nanoid } from '@reduxjs/toolkit'

export const AddPostForm = () => {


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch()


    const onTitleChange = event => setTitle(event.target.value.trim())
    const onContentChange = event => setContent(event.target.value.trim())


    const onSubmit = (event) => {

        event.preventDefault()
        if(title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
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
                <button type='submit'>Save</button>
            </form>
        </section>
    )
}
