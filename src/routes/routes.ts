import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from '../layouts/BaseLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { isLoggedIn } from '../middleware/auth';
import IndexPage from '../pages/IndexPage.vue';
import LoginPage from '../pages/LoginPage.vue';

const routes = [
    {
        path: '', component: MainLayout, children: [
            { path: '', component: IndexPage, name: 'home' },
        ]
    },
    {
        path: '/login', component: BaseLayout, children: [
            { path: '', component: LoginPage, name: 'login' },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



router.beforeEach(async (to, from) => {
    const auth = await isLoggedIn();
    if (to.name !== 'login' && !auth) {
        return router.push({ name: "login" });
    }
    return true;
});

export default router;