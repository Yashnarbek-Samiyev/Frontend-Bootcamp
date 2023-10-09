import {createWebhistory, createRouter} from "vue-router";
import home from "../components/Router/home";
import login from "../components/Router/login";
import signup from "../components/Router/signup";
import Home from "@/components/Router/home.vue";
import Signup from "@/components/Router/signup.vue";
import Login from "@/components/Router/login.vue";

const routes= [
    {
        name:"Home",
        path:'/',
        component:Home,

    },
    {
        name:"Login",
        path:'/',
        component:Login,

    },
    {
        name:"Signup",
        path:'/',
        component:Signup,

    },

];
const router=createRouter({
    history:createWebhistory(),
    routes,
});
export default router;
