import { createRouter, createWebHistory } from 'vue-router'

import FrontendLayout from '../layouts/FrontendLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

import Dashboard from '../pages/admin/Dashboard.vue'
import Settings from '../pages/admin/Settings.vue'

const routes = [
                  {
                    path: '/',
                    component: FrontendLayout,
                    children: [
                      { path: '', name: 'Home', component: Home },
                      { path: 'about', name: 'About', component: About }
                    ]
                  },
                  {
                    path: '/admin',
                    component: AdminLayout,
                    children: [
                      { path: '', name: 'Dashboard', component: Dashboard },
                      { path: 'settings', name: 'Settings', component: Settings }
                    ]
                  }
        ]

const router = createRouter({
      history: createWebHistory(),
      routes
})

export default router
