import React from "react";
import { I18nextProvider } from "react-i18next";
import CharacterListLayout from "./layouts/CharacterListLayout";
import i18n from "./i18n";

const App = () => (
  <I18nextProvider i18n={i18n}>
    <div style={{ border: "2px dashed navy", padding: "1rem" }}>
      <h1>Characters MFE</h1>
      <hr />
      <h2>Rick and Morty List:</h2>
      <CharacterListLayout source="rick-and-morty" />
      <hr />
      <h2>Harry Potter List:</h2>
      <CharacterListLayout source="harry-potter" />
    </div>
  </I18nextProvider>
);

export default App;
