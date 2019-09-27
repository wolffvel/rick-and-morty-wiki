import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ChacterCard from './CharacterCard';

const ShowCaracters = props => {
  const name = props.query;
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name }
  });

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error);
    return <h1>There was an error</h1>;
  }
  const characters = data.characters.results;
  if (!characters) return <h1>There are no results to show</h1>;

  return (
    <div className='show-characters'>
      {characters.map(character => (
        <ChacterCard
          key={character.id}
          name={character.name}
          imgUrl={character.image}
          status={character.status}
          species={character.species}
          origin={character.origin.name}
          lastLocation={character.location.name}
        />
      ))}
    </div>
  );
};

const GET_CHARACTERS = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      info {
        pages
        next
      }
      results {
        id
        name
        image
        status
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export default ShowCaracters;
