import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BookView from '@/components/book/BookView'
import AuthorView from '@/components/author/AuthorView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: BookView
    },
    {
      path: '/authors',
      name: 'Authors',
      component: AuthorView
    }
  ]
})
