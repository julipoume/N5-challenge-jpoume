import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #282c34;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: white;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1rem auto;
  font-family: monospace;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #ebe0e2 0%, #e9e5e2 60%, #efece6 100%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  height: 3.5rem;
  padding: 0 1.5rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`;