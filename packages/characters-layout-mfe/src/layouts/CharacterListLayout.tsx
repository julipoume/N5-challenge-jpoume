import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCharacters } from "../hooks/useCharacters";
import { useLanguageListener } from "../hooks/useLanguageListener";
import { Card, Spinner } from "@mfe/core-ui";
import {
  FilterContainer,
  FilterInput,
  LayoutWrapper,
  ListContainer,
} from "./CharacterListLayout.styled";

interface CharacterListLayoutProps {
  source: string | null;
}

interface Character {
  id: string;
  name: string;
  image: string;
}

const CharacterListLayout: React.FC<CharacterListLayoutProps> = ({ source }) => {
  const { t, i18n } = useTranslation();
  useLanguageListener(i18n);

  const { characters, loading, error } = useCharacters(source);
  const [filter, setFilter] = useState("");

  const filteredCharacters =
    characters?.filter((char: Character) =>
      char.name.toLowerCase().includes(filter.toLowerCase())
    ) || [];

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  
  if (!source || (!characters && !loading)) return null;

  return (
    <LayoutWrapper>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder={t("filter_placeholder")}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </FilterContainer>

      <ListContainer>
        {filteredCharacters.map((char) => (
          <Card key={char.id} image={char.image} title={char.name} />
        ))}
      </ListContainer>
    </LayoutWrapper>
  );
};

export default CharacterListLayout;