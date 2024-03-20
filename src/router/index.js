import { createRouter, createWebHistory } from 'vue-router'
import NewsSingleView from '../views/NewsSingleView.vue'
import AnotherPage from '../views/AnotherPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/actualites/anstistabus-une-ludotheque-sur-roues',
            name: 'example-news',
            component: NewsSingleView
        },
        {
            path: '/another-page',
            name: 'another-page',
            component: AnotherPage
        }
    ]
})

export default router
