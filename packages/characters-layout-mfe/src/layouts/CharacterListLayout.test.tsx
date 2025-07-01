import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import CharacterListLayout from "./CharacterListLayout";

jest.mock("../hooks/useCharacters");
jest.mock("../hooks/useLanguageListener");
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === "filter_placeholder") return "Filter characters...";
      return key;
    },
    i18n: { changeLanguage: jest.fn() },
  }),
}));

import { useCharacters } from "../hooks/useCharacters";
import { useLanguageListener } from "../hooks/useLanguageListener";

describe("CharacterListLayout", () => {
  const mockUseCharacters = useCharacters as jest.Mock;
  const mockUseLanguageListener = useLanguageListener as jest.Mock;

  beforeEach(() => {
    mockUseLanguageListener.mockClear();
  });

  it("renders error message if error", () => {
    mockUseCharacters.mockReturnValue({
      characters: null,
      loading: false,
      error: { message: "Failed to load" },
    });
    render(<CharacterListLayout source="test-source" />);
    expect(screen.getByText(/error: failed to load/i)).toBeInTheDocument();
  });

  it("renders nothing if no source", () => {
    mockUseCharacters.mockReturnValue({
      characters: null,
      loading: false,
      error: null,
    });
    const { container } = render(<CharacterListLayout source={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders filtered list of characters", () => {
    const characters = [
      { id: "1", name: "Ama", image: "ama.jpg" },
      { id: "2", name: "Dante", image: "dante.jpg" },
      { id: "3", name: "Juan", image: "juan.jpg" },
    ];
    mockUseCharacters.mockReturnValue({
      characters,
      loading: false,
      error: null,
    });

    render(<CharacterListLayout source="test-source" />);
    
    expect(screen.getByText("Ama")).toBeInTheDocument();
    expect(screen.getByText("Dante")).toBeInTheDocument();
    expect(screen.getByText("Juan")).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Filter characters...");
    fireEvent.change(input, { target: { value: "Dan" } });
    expect(screen.queryByText("Ama")).not.toBeInTheDocument();
    expect(screen.getByText("Dante")).toBeInTheDocument();
    expect(screen.queryByText("Juan")).not.toBeInTheDocument();
  });
});
