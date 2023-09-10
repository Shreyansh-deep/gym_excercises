import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  //console.log(exercise,"aaaaaaaaaaaaaaaaaaaaaaa")
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9',
        fontsize: '14px', borderRadius: '20px', textTransform: 'capotalize'
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#ffcc757',
        fontsize: '14px', borderRadius: '20px', textTransform: 'capotalize'
        }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px"
      pb='10px' textTransform="capitaliza" fontSize="22px" >
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
