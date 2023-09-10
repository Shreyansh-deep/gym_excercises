// export const exerciseOptions =  {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// export const fetchData = async (url, options) => {
//   const response = await fetch(url, options);
//   const data = await response.json();

//   return data;
// }


import axios from 'axios';

// export const fetchData = async() => {
//   const options  = {
//     method: 'GET',
//     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     const data = response.data;
//     //console.log(data, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//     return data;
//   } catch (error) {
//     console.error(error);
//     //console.log("bbbbbbbbbbbbbbbbbbbbb")
//   }
// }


export async function fetchDataNew(options){
  //console.log(options,"aaaaaaawwwwwwwwwwwwwwwwwww")
  try {
  	const response = await axios.request(options);
    //console.log(response.data, "awwwwwwwwwwwwwwwwwwwwwwww")
    return response.data
  } catch (error) {
  	console.error(error);
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};