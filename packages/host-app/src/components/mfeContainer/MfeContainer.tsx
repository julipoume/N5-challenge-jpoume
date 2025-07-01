import React, { Suspense, lazy } from 'react';
import { Spinner } from '@mfe/core-ui';
import { MainContent } from './MfeContainer.styled';

const CharacterListLayout = lazy(
  () => import('characters/CharacterListLayout')
);

interface MfeContainerProps {
  dataSource: string | null;
}

const MfeContainer: React.FC<MfeContainerProps> = ({ dataSource }) => {
  return (
    <MainContent>
      <Suspense fallback={<Spinner />}>
        {dataSource && <CharacterListLayout source={dataSource} />}
      </Suspense>
    </MainContent>
  );
};

export default MfeContainer;