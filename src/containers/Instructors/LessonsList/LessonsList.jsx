import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { ListBody } from './ListBody';
import { ListHeader } from './ListHeader';
import { ListSkeleton } from './ListSkeleton';
import { ListEmptyData } from './ListEmptyData';

import { useLessons } from '../hooks/useLessons';


const LessonsList = () => {
  const { loading } = useSelector(state => state.app);

  const {
    lessons,
    isEmptyListFiltered,
    handleSortLessons,
    handleLessonAddToCart,
  } = useLessons();

  const { isEmptyData, isLoadingData} = useMemo(() => ({
    isLoadingData: loading && isEmptyListFiltered,
    isEmptyData: !loading && isEmptyListFiltered,
  }), [loading, isEmptyListFiltered]);

  if (isEmptyData) return <ListEmptyData />;
  if (isLoadingData) return <ListSkeleton />;

  return (
    <>
      <ListHeader
        schema={lessons.schema}
        handleSortLessons={handleSortLessons}
      />
      <ListBody
        schema={lessons.schema}
        data={lessons.listFiltered}
        handleLessonAddToCart={handleLessonAddToCart}
      />
    </>
  );
};

export default LessonsList;