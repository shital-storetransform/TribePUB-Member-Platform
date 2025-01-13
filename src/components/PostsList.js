import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
        date
      }
    }
  }
`;

const PostsList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.posts.nodes.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
