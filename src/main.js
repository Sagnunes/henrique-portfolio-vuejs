import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import ProjectsView from '@/ProjectsView.vue'
import ProjectView from '@/ProjectView.vue'
import NightView from '@/NightView.vue'
import PaisagensView from '@/PaisagensView.vue'

const routes = [
  { path: '/', component: ProjectsView },
  { path: '/night-views', component: NightView },
  { path: '/paisagens', component: PaisagensView },
  { path: '/project/', component: ProjectView, props: true }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
