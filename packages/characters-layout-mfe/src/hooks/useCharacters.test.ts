import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useCharacters } from './useCharacters';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useCharacters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return characters after successful fetch for rick-and-morty', async () => {
    const mockData = {
      results: [
        { id: '1', name: 'Rick Sanchez', image: 'url1' },
        { id: '2', name: 'Morty Smith', image: 'url2' },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const { result } = renderHook(() => useCharacters('rick-and-morty'));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.characters).toHaveLength(2);
    expect(result.current.characters[0].name).toBe('Rick Sanchez');
    expect(result.current.error).toBeNull();
  });

  it('should set error for unknown source', () => {
    const { result } = renderHook(() => useCharacters('unknown-source'));

    expect(result.current.loading).toBe(false);
    expect(result.current.error).not.toBeNull();
    expect(result.current.error?.message).toBe('error source');
  });

  it('should reset characters when source is null', () => {
    const { result } = renderHook(() => useCharacters(null));

    expect(result.current.characters).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
