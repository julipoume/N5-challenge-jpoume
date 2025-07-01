import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin-left: 8px;
`;

export const HeaderWrapper = styled.header`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  height: 64px;
  top: 0;
  right: 0;
  left: 0;
  background-color: #142d54;
  opacity: 0.9;
  box-shadow: 0 5px 30px #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  color: white;
  margin: 0;
`;

export const LanguageSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: white;
`;

interface LanguageOptionProps {
  isActive: boolean;
}

export const LanguageOption = styled.button<LanguageOptionProps>`
  background: none;
  border: none;
  color: ${(props) => (props.isActive ? '#ebe0e2' : 'white')};
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  padding: 0 0.5rem;
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ebe0e2;
  }
`;
