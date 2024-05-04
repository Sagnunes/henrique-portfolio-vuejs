import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import ProjectsView from '@/ProjectsView.vue'
import ProjectView from '@/ProjectView.vue'
import NightView from '@/NightView.vue'
import PaisagensView from '@/PaisagensView.vue'
import InventarioArteView from '@/InventarioArteView.vue'
import DrinkView from '@/DrinkView.vue'
import FolhetoView from '@/FolhetoView.vue'
import CasamentoView from '@/CasamentoView.vue'
import CartaoVisitaView from '@/CartaoVisitaView.vue'
import MadeiraExperienceView from '@/MadeiraExperienceView.vue'
import SaladView from '@/SaladView.vue'
import OrquestraView from '@/components/OrquestraView.vue'

const routes = [
  { path: '/', component: ProjectsView },
  { path: '/night-views', component: NightView },
  { path: '/paisagens', component: PaisagensView },
  { path: '/inventario-arte', component: InventarioArteView },
  { path: '/drink', component: DrinkView },
  { path: '/folheto', component: FolhetoView },
  { path: '/casamento', component: CasamentoView },
  { path: '/cartao_visita', component: CartaoVisitaView },
  { path: '/madeira_experience', component: MadeiraExperienceView },
  { path: '/orquestra', component: OrquestraView },
  { path: '/salad', component: SaladView },
  { path: '/project/', component: ProjectView, props: true }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
