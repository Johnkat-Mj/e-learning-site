import { createRouter,createWebHistory } from "vue-router";
import Home from '/src/pages/Home.vue'
import Cours from '/src/pages/Courses.vue'
import Contact from '/src/pages/SingleCourse.vue'
import Signin from '/src/pages/Signin.vue'
import Signup from '/src/pages/Signup.vue'
import Community from '/src/pages/Community.vue'
import Blog from '/src/pages/Blog.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/Cours",
        name: "Cours",
        component: Cours,
    },
    {
        path: "/Community",
        name: "Communaute",
        component: Community,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/Sign-in",
        name: "Sign-in",
        component: Signin,
    },
    {
        path: "/Sign-up",
        name: "Sign-up",
        component: Signup,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router