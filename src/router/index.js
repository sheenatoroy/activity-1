import { createRouter, createWebHistory } from 'vue-router';
import HomeViews from '../views/HomeViews.vue';
import BrowseBookView from '../views/BrowseBookView.vue';
import CartBooks from '@/components/CartBooks.vue';
import LoginViews from '../views/LoginViews.vue';
import StatusView from '../views/StatusView.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeViews
    },
    
    {
        path: '/BrowseBook',
        name: 'BrowseBook',
        component: BrowseBookView
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
    {
        path: '/Status',
        name: 'Status',
        component: StatusView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
