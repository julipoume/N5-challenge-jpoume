import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Description, ButtonWrapper, Button } from './HeroSection.styled';

interface HeroSectionProps {
  onSelectShow: (show: 'harry-potter' | 'rick-and-morty') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSelectShow }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <ButtonWrapper>
        <Button onClick={() => onSelectShow('harry-potter')}>
          {t('buttonHP')}
        </Button>
        <Button onClick={() => onSelectShow('rick-and-morty')}>
          {t('buttonRM')}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default HeroSection;