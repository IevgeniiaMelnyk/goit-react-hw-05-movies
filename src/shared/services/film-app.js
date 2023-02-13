import axios from 'axios';

const KEY = 'b0b4fd1b10f37d2fc7069fdd28d61a74';
const moviesPopular = 'trending/movie/day';
export const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getMoviesPopular = async (page = 1) => {
  const { data } = await instance.get(`/${moviesPopular}?api_key=${KEY}`, {
    params: {
      page,
    },
  });
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}?api_key=${KEY}`);
  return data;
};
