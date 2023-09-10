import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { bodyPartOption, exerciseOption } from '../components/SearchExercises'
import { fetchDataNew } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

// export const exerciseOption = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises',
//   headers: {
//     'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentpage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  //console.log(exercises, "aaaawwwwwwwwwwwwwwwwwwwwwwwwwww")

  const paginate = (e, value) => {
    setCurrentpage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === 'all') {
        exercisesData = await fetchDataNew(exerciseOption)
      } else {
        //console.log(bodyPart,typeof bodyPart,"*****************************")
        exercisesData = await fetchDataNew({
          method: 'GET',
          url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          headers: {
            'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        })
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  },[bodyPart])

  return (
    <Box id= "exercises"
      sx={{mt: { lg: '110px' }}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Result
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}}
        flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center" > 
          {exercises.length > 9 && (
            <Pagination 
              color="standard"
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={ paginate }
              size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises