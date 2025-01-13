import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(input: { title: $title, content: $content }) {
      post {
        title
        content
      }
    }
  }
`;

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createPost] = useMutation(CREATE_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createPost({ variables: { title, content } });
      console.log(data.createPost.post);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePost;
