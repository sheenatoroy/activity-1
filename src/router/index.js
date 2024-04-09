import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews.vue'
// import BrowseBookView from '../views/BrowseBookView.vue'
import BrowseBook from '@/components/BrowseBook.vue'
import CartBooks from '@/components/CartBooks.vue'
import LoginViews from '../views/LoginViews.vue'


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
        
        {
            path: '/Login',
            name: 'Login',
            component: LoginViews
        },
    ]

    const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
