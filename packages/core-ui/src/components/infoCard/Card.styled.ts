import styled from "styled-components";

export const CardWrapper = styled.div.attrs({
  className: "card",
})`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 240px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img.attrs({
  className: "card__image",
})`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`;

export const CardContent = styled.div.attrs({
  className: "card__content",
})`
  padding: 16px;
  text-align: center;
`;

export const CardTitle = styled.h3.attrs({
  className: "card__title",
})`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;
