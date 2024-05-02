import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import ProjectsView from '@/ProjectsView.vue'
import ProjectView from '@/components/ProjectView.vue'

const routes = [
  { path: '/', component: ProjectsView },
  { path: '/project/', component: ProjectView, props: true }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
