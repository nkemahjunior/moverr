import searchView from './searchView.js';
import navMenuView from './view.js';
import { heroTrending, state,latest,popularMovie,airingToday,movie,series,movieAwards,fast,live,searchFunctionality} from './model.js';
import sliderViews from './sliderViews.js';
import headerView from './headerView.js';
import latestView from './latestView.js';
import popularView from './popularView.js';
import airingTodayView from './airingTodayView.js';
import {exploreMain} from './exploreView.js';
import movieView from './movieView.js';

import seriesView from './seriesView.js';
import movieAwardsView from './movieAwardsView.js';
import fastView from './fastView.js';
import liveView from './liveView.js';

const searchController = async function(){
  const query = searchView._getTheSearchWord();
  if(query){
    await searchFunctionality(query);
    console.log("query has been sent")
    searchView._clearInputBar();
    searchView._searchPageRender(state.searchResults)
  }
  else console.log("no query now")
  
}

const navMenu = function(){
  navMenuView._navMenu();
  navMenuView._observerView(navMenuView._changeNavbg);

}

const heroTop3 = async function(){
  await heroTrending();
 
  headerView._headerRender(state.trendingPosters);
  sliderViews._heroSlide();
  
}


const latestController = async function(){
  await latest();
  latestView._latestRender(state.latestMovies);
  latestView._latestPlay();
  sliderViews._releasedSlide();
}

const popularController = async function(){
  await popularMovie();
  popularView._popularRender(state.popularMovies);
  sliderViews._popularSlide();

}

const airingTodayController = async function(){
  await airingToday();
  airingTodayView._airingTodayInfoRender(state.airingToda);
  airingTodayView._airingTodayRender(state.airingToda);
  //exploreMain(state.explorePhotos,state.airingToda);

}


const movieController = async function(){
  await movie();
  movieView._movieRender(state.movie);
  sliderViews._movieSlide();
}

const seriesController = async function(){
  await series();
  seriesView._seriesRender(state.series);
  sliderViews._seriesSlide();
  
}

const movieAwardsController = async function(){
  await movieAwards();
  movieAwardsView._movieAwardsRender(state.movieAwards);
  sliderViews._movieAwardsSlide();

}


const fastController = async function(){
  await fast();
   fastView._fastRender1(state.fast1);
   fastView._fastRender2(state.fast2);
   fastView._fastRender3(state.fast3);
   fastView._fastRender4(state.fast4);
   fastView._fastRender5(state.fast5);
  sliderViews._fastSlide();
}

const liveController = async function(){
  await live();
  liveView._liveRender1(state.live1);
  liveView._liveRender2(state.live2);
  liveView._liveRender3(state.live3);
  liveView._liveRender4(state.live4);
  liveView._liveRender5(state.live5);

}



const init = function(){
  searchView._searchHandler(searchController)
  navMenu();
  heroTop3();
  latestController();
  popularController();
  airingTodayController();
  movieController();
  seriesController();
  movieAwardsController();
  fastController();
  liveController();
}


init();

