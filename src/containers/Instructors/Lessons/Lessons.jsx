import React from 'react';

import { Grid, Skeleton, Typography, Chip } from '@mui/material';

import LessonsBody from './LessonsBody';
import LessonsHeader from './LessonsHeader';

import useInstructors from '../hooks/useInstructors';

import img from '../../../assets/img/emptystate.png';
import CustomCard from '../../../components/@ui/CustomCard';

import { useFilter } from '../hooks/useFilter';
import { useLessons } from '../hooks/useLessons';

const Lessons = () => {
  const { app } = useInstructors();
  const { lessons, handleSortLessons, handleLessonAddToCart } = useLessons();
  const { filter, handleUnsetFilter } = useFilter();

  return (
    <>
      {app.loading && !lessons.listFiltered.length ? (
        <>
          <Skeleton height={72} variant="rectangular" />
          <Skeleton height={72} variant="rectangular" />
          <Skeleton height={72} variant="rectangular" />
        </>
      ) : (
        !app.loading && !lessons.listFiltered.length ? (
          <CustomCard>
            <Grid
              container
              direction="column"
              alignItems="center"
              gap={1}
            >
              <img src={`${window.ROOT_DIRECTORY}${img}`} width={335} alt='Not success' />
              <Typography variant="h5">Поиск не дал результатов</Typography>
              {filter.startDate ? (
                <>
                <Typography variant="body2">Выберите другой тариф или измените фильтр.</Typography>
                <Chip
                  label={`${filter.startDate} - ${filter.endDate}`}
                  variant="contained"
                  onDelete={handleUnsetFilter}
                  color="primary"
                />
                </>
              ) : (
                <Typography variant="body2">Выберите другой тариф в левом меню.</Typography>
              )}
            </Grid>
          </CustomCard>
        ) : (
          <>
            <LessonsHeader schema={lessons.schema} handleSortLessons={handleSortLessons} />
            <LessonsBody
              schema={lessons.schema}
              data={lessons.listFiltered}
              handleLessonAddToCart={handleLessonAddToCart}
            />
          </>
        )
      )}
    </>
  );
};

export default Lessons;