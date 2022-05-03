import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main"
import UserPage from "@/pages/UserPage"
import Cart from "@/pages/Cart"
import Catalog from "@/pages/Catalog"
import TovarPage from "@/pages/TovarPage"
import Category from "@/pages/Category"
import Cement from "@/pages/secondpages/Cement"
import DryMixes from "@/pages/secondpages/DryMixes"
import Drywall from "@/pages/secondpages/Drywall"
import Foam from "@/pages/secondpages/Foam"
import GasBlocks from "@/pages/secondpages/GasBlocks"
import PaintsAndEnamels from "@/pages/secondpages/PaintsAndEnamels"
import ProfileForDrywall from "@/pages/secondpages/ProfileForDrywall"
import ThermalInsulation from "@/pages/secondpages/ThermalInsulation"
import Waterproofing from "@/pages/secondpages/Waterproofing"
import WoodSlab from "@/pages/secondpages/WoodSlab"
import Consumables from "@/pages/secondpages/Consumables"
import ConstructionTools from "@/pages/secondpages/ConstructionTools"







const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/catalog',
        component: Catalog
    },
    {
        path: '/userpage',
        component: UserPage
    },
    {
        path: '/catalog/:id',
        component: TovarPage
    },
    {
        path: '/:category_slug',
        component: Category
    },





    {
        path: '/cement',
        component: Cement
    },
    {
        path: '/drymixes',
        component: DryMixes
    },
    {
        path: '/drywall',
        component: Drywall
    },
    {
        path: '/foam',
        component: Foam
    },
    {
        path: '/gasblocks',
        component: GasBlocks
    },
    {
        path: '/paintsAndEnamels',
        component: PaintsAndEnamels
    },
    {
        path: '/profilefordrywall',
        component: ProfileForDrywall
    },
    {
        path: '/thermalinsulation',
        component: ThermalInsulation
    },
    {
        path: '/waterproofing',
        component: Waterproofing
    },
    {
        path: '/woodslab',
        component: WoodSlab
    },
    {
        path: '/consumables',
        component: Consumables
    },
    {
        path: '/constructionTools',
        component: ConstructionTools
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;