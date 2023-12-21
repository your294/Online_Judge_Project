import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory(import.meta.env.BASE_URL);

const home = () => import("../view/home/CodeHome.vue")
const problemset = () => import("../view/problemset/ProblemSet.vue")
const contest = () => import("../view/activity/Contest.vue")
const notFound = () => import("../view/errorhandle/NotFound.vue")
const problemView = () => import("../view/problemset/ProblemView.vue")

export const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/problemset/'
        },
        {
            path: '/home/',
            name: "home",
            component: home
        },
        {
            path: '/problemset/',
            name: "problemset",
            component: problemset,
        },
        {
            path: '/problem/',
            name: 'problemView',
            component: problemView
        },
        {
            path: '/contest/',
            name: "contest",
            component: contest
        },
        {
            path: '/404/',
            name: "not found",
            component: notFound
        }
    ]
});

router.beforeEach((to, from, next) => {
    window.document.body.classList.add('modern-dark');
    next();
});