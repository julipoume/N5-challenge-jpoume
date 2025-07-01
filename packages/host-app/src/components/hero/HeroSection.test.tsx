import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "./HeroSection";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("HeroSection", () => {
  test("renders title, description and buttons", () => {
    const mockSelect = jest.fn();

    render(<HeroSection onSelectShow={mockSelect} />);

    expect(
      screen.getByText(/Descubrí a tus personajes favoritos/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Elegí una serie/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Harry Potter/i })
    ).toBeInTheDocument();
  });

  test("Call onSelectShow with the correct show when clicked", () => {
    const mockSelect = jest.fn();

    render(
      <I18nextProvider i18n={i18n}>
        <HeroSection onSelectShow={mockSelect} />
      </I18nextProvider>
    );

    fireEvent.click(screen.getByText(/Harry Potter/i));
    expect(mockSelect).toHaveBeenCalledWith("harry-potter");
  });
});
