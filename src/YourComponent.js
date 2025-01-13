import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query
const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
      }
    }
  }
`;

function YourComponent() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts from WordPress</h2>
      <ul>
        {data.posts.nodes.map(post => (
          <li key={post.title}>
            <h3>{post.title}</h3>
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourComponent;
