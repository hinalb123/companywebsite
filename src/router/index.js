import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoView from '../views/DemoView.vue'
import RegisterWorld from '../components/RegisterWorld.vue'
import LoginWorld from '../components/LoginWorld.vue'
import DashboardWorld from '../components/DashboardWorld.vue'
import UpdateWorld from '../components/UpdateWorld.vue'
import ToDos from '../components/ToDos.vue'
import AddToDos from '../components/AddToDos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  { path: '/demo',  component: DemoView },

  {
    path: '/register',
    name: 'RegisterWorld',
    component: RegisterWorld,
 
  },

  {
    path: '/login',
    name: 'LoginWorld',
    component: LoginWorld,
    alias: '/loginworld',
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'DashboardWorld',
    component: DashboardWorld,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/update/:id',
    name: 'UpdateWorld',
    component:UpdateWorld,
  
  },
  {
    path: '/todos',
    name: 'ToDos',
    component:ToDos,
  
  },
  {
    path: '/addtodos',
    name: 'AddToDos',
    component:AddToDos,
  
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

  // router.beforeEach((to,from,next) => {
  //   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  //   const token = localStorage.getItem('token');
    
  //   if (requiresAuth && token) {
  //     next();
  //   } else if (requiresAuth && !token) {
  //     next('/login');
  //   } else if (!requiresAuth && token) {
  //     next('/dashboard');
  //   } else {
  //     next();
  //   }
  // });

export default router


