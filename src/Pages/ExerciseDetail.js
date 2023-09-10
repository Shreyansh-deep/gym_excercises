import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchDataNew } from '../utils/fetchData'
import { exerciseOption } from '../components/SearchExercises'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()

  useEffect(() => {
     const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl =  'https://youtube-search-and-download.p.rapidapi.com'
     
      const exerciseDetailData = await fetchDataNew({
        method: 'GET',
        url: `${exerciseDbUrl}/exercises/exercise/${id}`,
        headers: {
          'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      setExerciseDetail(exerciseDetailData);
      //const query = encodeURIComponent();

      //console.log({exerciseDetailData},`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,"RAMMMMMMMMMMMMMMM")

      const exerciseVideosData = await fetchDataNew({
        method: 'GET',
        url: `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        headers: {
          'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      })
      //console.log(exerciseVideosData)
        setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchDataNew({
        method: 'GET',
        url: `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        headers: {
          'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        })
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchDataNew({
        method: 'GET',
        url: `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        headers: {
          'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
       })
      setEquipmentExercises(equipmentExercisesData)

     }
     fetchExercisesData()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail
