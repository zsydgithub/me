import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import MusicDetail from './views/MusicDetail.vue';
import Book from './views/Book.vue';
import Photo from './views/Photo.vue';
import PhotoDetail from './views/PhotoDetail.vue';
import MovieDetail from './views/MovieDetail.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/movie/moviedetail',
      name: 'moviedetail',
      component: MovieDetail,
    },
    {
      path:'/music',
      name:'music',
      component:Music
    },{
      path:'/music/music-detail',
      name:'music-detail',
      component:MusicDetail
    },
    {
      path:'/book',
      name:'book',
      component:Book
    },
    ,{
      path:'/photo',
      name:'photo',
      component:Photo,
      children:[
        {
          path:'photodetail',
          name:'photodetail',
          component:PhotoDetail
        }
      ]
    }
  ],
});
