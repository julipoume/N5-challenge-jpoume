declare module '@mfe/core-ui' {
  import React from 'react';

  export interface CardProps {
    image: string;
    title: string;
  }
  export const Card: React.FC<CardProps>;
  export const Spinner: React.FC;
}