import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div>
      <div className='row' style={{marginTop:"0px", backgroundColor:"black", justifyContent: "space-around", border: "2px solid black"}}>
        <div className='col-2'>
          <p style={{ border: "2px solid black",textDecoration:"none" }}><a style={{textDecoration:"none",color:"white" }} href="/exercise/0006">ABS Exercise</a></p>
        </div>
        <div className='col-2'>
          <p style={{ border: "2px solid black" }}><a style={{textDecoration:"none",color:"white" }} href="/exercise/0015">Back Exercise</a></p>
        </div>
        <div className='col-2'>
          <p style={{ border: "2px solid black" }}><a style={{textDecoration:"none",color:"white" }} href="/exercise/0022">Chest Exercise</a></p>
        </div>
        <div className='col-2'>
          <p style={{ border: "2px solid black" }}><a style={{textDecoration:"none",color:"white" }} href="/exercise/0016">Legs Exercise</a></p>
        </div>
        <div className='col-2'>
          <p style={{ border: "2px solid black" }}><a style={{textDecoration:"none",color:"white" }} href="/exercise/0018">Triceps Extension</a></p>
        </div>
        <div className='col-2'>
          <p style={{ border: "2px solid black" }}><a style={{textDecoration:"none",color:"white" }} href="/exercise/0026">Biceps</a></p>
        </div>
      </div>
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
    
      
    </div>
  );
};

export default ExerciseDetail;
