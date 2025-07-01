import styled from "styled-components";

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin-right: 170px;
  margin-bottom: 25px;
`;

export const FilterInput = styled.input`
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 8px;
  border: none;
  width: 100%;
  max-width: 250px;
  background: linear-gradient(135deg, #f3f3f3, #e6e6ef);
  color: #333;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(101, 78, 163, 0.3);
    border-color: transparent;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1200px;
`;
