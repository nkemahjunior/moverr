
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjA1YmZmMTliMTUwNWE0YmNhODY0NmQ4ZWUzNWQ3ZiIsInN1YiI6IjY0NThkMDRhNmFhOGUwMDBlNGJjYWFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1W5WJc7TSNF2MceooW7rizRUMn6eCOkp0dapVz-dhpQ'
    }
  };

  export const state = {
    //THE STATE STORES ALL THE DATA ABOUT OUR APPLICATION
    trendingPosters : [],
    latestMovies : [],
    popularMovies : [],
    airingToda : [],
    explorePhotos : [],
    movie : [],
    series : [],
    movieAwards : [],
    fast  : [],
    fast1 : [],
    fast2 : [],
    fast3 : [],
    fast4 : [],
    fast5 : [],
    live1 : [],
    live2 : [],
    live3 : [],
    live4 : [],
    live5 : [],
    searchResults : [],
    searchResultsTV : [],
    searchResultsMovie : [],

  }


  const renderData =  function(el){
    //console.log(el )
    return {
      poster : 'https://image.tmdb.org/t/p/original'  + el.poster_path,
      id :  el.id,
      release_date : el.release_date ? el.release_date : el.first_air_date,
      title: el.name ? el.name : el.title,
      genreID : el.genre_ids[0],
      overview : el.overview
  
    }
    
  }


  
  
//https://image.tmdb.org/t/p/original/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

  export const heroTrending = async function(){
    try{
      const  response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
      const data =await response.json();
      // console.log(data.results);

      const [first,second,third] = data.results;

      const Top3arr = [first,second,third]
      // console.log(Top3arr)

      state.trendingPosters = Top3arr.map( renderData );



  } catch (err){
      console.log("heroTrendinig error is  " + err)
  }
}

export const latest = async function(){
  try{
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const data = await response.json();

    const {results} = data;

    state.latestMovies = results.map( renderData );
    
    // console.log(data)

  } 
  catch(err){
    console.log("latest code block = " + err)
  }
}

export const popularMovie = async function(){
  try{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

    const data = await response.json(); 
    const {results} = data;

    state.popularMovies = results.map( renderData )



    //  console.log(state.popularMovies[5].title);
  }
  catch(err){
    console.log("in popular block error = " + err);
  }
}


export const airingToday = async function (){
  try{
    const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options);
    const data = await response.json();

    const {results} = data;

    state.airingToda = results.map( renderData );
   
    

    state.explorePhotos = results.map(el => {
      return  {
        poster : 'https://image.tmdb.org/t/p/original'  + el.poster_path,

      }
    })


  }
  catch(err){
    console.log("airing today " + err);
  }
}




export const movie = async function(){
  try{

    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

    const data = await response.json();
    const {results} = data
  
    state.movie = results.map( renderData);


  }
  catch(err){
    console.log("airing today " + err);
  }
}

export const series = async function(){
  try{
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated', options);

    const data = await response.json();
    const {results} = data;

    //console.log(results)
  
    state.series = results.map( renderData )

  }
  catch(err){
    console.log("inside series block  "  + err)
  }
}


export const movieAwards = async function(){
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/day', options)
    const data = await response.json();
    const {results} = data;

    state.movieAwards = results.map( renderData );

  } catch (err) {
    console.log(" inside movie award block  " + err)
  }
}

export const fast = async function(){
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/day', options)
    const data = await response.json();
    const {results} = data;


    const fastObject = function(i){

     return {
        poster : 'https://image.tmdb.org/t/p/original'  + results[i].poster_path,
        id :  results[i].id,
        release_date : results[i].release_date ? results[i].release_date :results[i].first_air_date,
        title: results[i].name ? results[i].name : results[i].title,
        genreID : results[i].genre_ids[0],
        overview : results[i].overview
    
      }
    }

    for( let i = 0; i < 4 ; i++){
      state.fast1.push(  fastObject(i) )
    }

    for(let z = 4 ; z < 8; z++){
      state.fast2.push(  fastObject(z) )
    }

    for(let r = 8 ; r < 12; r++){
      state.fast3.push(  fastObject(r) )
    }

    for(let w = 12 ; w < 16; w++){
      state.fast4.push(  fastObject(w) )
    }
    
    for(let b = 16 ; b < 20; b++){
      state.fast5.push(  fastObject(b) )
    }



  } catch (err) {
    console.log(" inside fast block  " + err)
  }
}

export const live = async function(){
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/day', options)
    const data = await response.json();
    const {results} = data;


    const liveObject = function(i){

     return {
        poster : 'https://image.tmdb.org/t/p/original'  + results[i].poster_path,
        id :  results[i].id,
        release_date : results[i].release_date ? results[i].release_date :results[i].first_air_date,
        title: results[i].name ? results[i].name : results[i].title,
        genreID : results[i].genre_ids[0],
        overview : results[i].overview
    
      }
    }

    for( let i = 0; i < 4 ; i++){
      state.live1.push(  liveObject(i) )
    }

    for(let z = 4 ; z < 8; z++){
      state.live2.push(  liveObject(z) )
    }

    for(let r = 8 ; r < 12; r++){
      state.live3.push(  liveObject(r) )
    }

    for(let w = 12 ; w < 16; w++){
      state.live4.push(  liveObject(w) )
    }
    
    for(let b = 16 ; b < 20; b++){
      state.live5.push(  liveObject(b) )
    }



  } catch (err) {
    console.log(" inside live block  " + err)
  }
}


export const searchFunctionality = async function(query){
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options);
    const data = await response.json();
    const {results} = data;
     //console.log(results)

    const TvResults = results.filter(el => el.media_type === "tv");
    const movieResults = results.filter(el => el.media_type === "movie");

    state.searchResultsTV = TvResults.map((el) => {
      return {     
        poster : 'https://image.tmdb.org/t/p/original'  + el.poster_path,
        id :  el.id,
        release_date : el.release_date ? el.release_date : el.first_air_date,
        title: el.name ? el.name : el.title,
        genreID : el.genre_ids[0],
        overview : el.overview,
        mediaType : el.media_type,
      }
    })

    state.searchResultsMovie = movieResults.map(el => {
      return {     
        poster : 'https://image.tmdb.org/t/p/original'  + el.poster_path,
        id :  el.id,
        release_date : el.release_date ? el.release_date : el.first_air_date,
        title: el.name ? el.name : el.title,
        genreID : el.genre_ids[0],
        overview : el.overview,
        mediaType : el.media_type,
      }
    })

    //state.searchResultsMovie.forEach(el => console.log(el))
    
    state.searchResults = results.map((el) => {
      return {     
        poster : 'https://image.tmdb.org/t/p/original'  + el.poster_path,
        id :  el.id,
        release_date : el.release_date ? el.release_date : el.first_air_date,
        title: el.name ? el.name : el.title,
        genreID : el.genre_ids[0],
        overview : el.overview,
        mediaType : el.media_type,
      }
    })

    

  } catch (err) {
    console.log(" inside SEARCH block  " + err)
  }

}
