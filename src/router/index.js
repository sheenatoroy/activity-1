import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews.vue'
import BrowseBook from '@/components/BrowseBook.vue'
import CartBooks from '@/components/CartBooks.vue'


//route paths
const routes = [
    {
        path: '/',
        name: 'HomeViews',
        component: HomeViews
    },

    {
        path: '/BrowseBook',
        name: 'BrowseBook',
        component: BrowseBook
    },

    {
        path: '/CartBooks',
        name: 'CartBooks',
        component: CartBooks
    },

    ]

    const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
