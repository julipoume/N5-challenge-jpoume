import React from "react";
import { CardWrapper, CardImage, CardContent, CardTitle } from "./Card.styled";

interface CardProps {
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => (
  <CardWrapper>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
    </CardContent>
  </CardWrapper>
);

export default Card;
