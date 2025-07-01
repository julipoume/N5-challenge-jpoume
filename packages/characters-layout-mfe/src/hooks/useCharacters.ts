import { useState, useEffect } from 'react';
import axios from 'axios';

interface Character {
  id: string;
  name: string;
  image: string;
}

interface UseCharactersReturn {
  characters: Character[];
  loading: boolean;
  error: Error | null;
}

export const useCharacters = (source: string | null): UseCharactersReturn => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!source) {
      setCharacters([]);
      return;
    }

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      const sources: { [key: string]: { url: string; normalizer: (data: any) => Character[] } } = {
        'rick-and-morty': {
          url: 'https://rickandmortyapi.com/api/character',
          normalizer: (data) => data.results.map((char: any) => ({
            id: char.id,
            name: char.name,
            image: char.image,
          })),
        },
        'harry-potter': {
          url: 'https://hp-api.onrender.com/api/characters',
          normalizer: (data) => data.slice(0, 25).map((char: any) => ({
            id: char.id,
            name: char.name,
            image: char.image,
          })),
        },
      };

      const selectedSource = sources[source];
      if (!selectedSource) {
        setError(new Error('error source'));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(selectedSource.url);
        setCharacters(selectedSource.normalizer(response.data));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [source]);

  return { characters, loading, error };
};