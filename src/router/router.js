import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main"
import About from "@/pages/About"
import UserPage from "@/pages/UserPage"
import Cart from "@/pages/Cart"
import Contacts from "@/pages/Contacts"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/user',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/contact',
        component: Contacts
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;