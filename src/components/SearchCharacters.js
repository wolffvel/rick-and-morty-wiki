import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const SearchCharacters = () => {
  // const [query, setQuery] = useState('');
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error);
    return <h1>There was an error</h1>;
  }

  console.log(data);
  return (
    <div className='search-characters'>
      <h1>search</h1>
    </div>
  );
};

const GET_CHARACTERS = gql`
  {
    characters(filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
        status
        origin {
          name
        }
        image
      }
    }
  }
`;

export default SearchCharacters;
