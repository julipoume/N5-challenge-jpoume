import React, { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Header from "./components/header";
import HeroSection from "./components/hero";
import MfeContainer from "./components/mfeContainer";

const AppContent = () => {
  const [dataSource, setDataSource] = useState<string | null>(null);

  return (
    <>
      <Header />
      <HeroSection onSelectShow={setDataSource} />
      <MfeContainer dataSource={dataSource} />
    </>
  );
};

const App = () => (
  <I18nextProvider i18n={i18n}>
    <AppContent />
  </I18nextProvider>
);

export default App;
