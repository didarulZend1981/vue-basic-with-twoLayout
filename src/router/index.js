import { createRouter, createWebHistory } from 'vue-router'

import FrontendLayout from '../layouts/FrontendLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

import Home from '../pages/Home.vue'
import About from '../pages//Frontend/About.vue'

import Dashboard from '../pages/admin/Dashboard.vue'
import Settings from '../pages/admin/Settings.vue'
import Blog from '../pages/Frontend/Blog.vue'
import Contact from '../pages/Frontend/Contact.vue'
import Pricing from '../pages/Frontend/Pricing.vue'
import Schedule from '../pages/Frontend/Schedule.vue'
import Team from '../pages/Frontend/Team.vue'
import Testimonial from '../pages/Frontend/testimonial.vue'

const routes = [
                  {
                    path: '/',
                    component: FrontendLayout,
                    children: [
                      { path: '', name: 'Home', component: Home },
                      { path: 'about', name: 'About', component: About },
                      { path: 'blog', name: 'Blog', component: Blog },
                      { path: 'contact', name: 'Contact', component: Contact },
                      { path: 'pricing', name: 'Pricing', component: Pricing },
                      { path: 'schedule', name: 'Schedule', component: Schedule },
                      { path: 'team', name: 'Team', component: Team },
                      { path: 'Testimonial', name: 'Testimonial', component: Testimonial },
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
