import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/loach",
  },
  {
    path: "/loach",
    redirect: "/loach/login",
    component: () => import("../views/main.vue"),
    children: [
      {
        path: "/loach/home",
        name: "Home",
        component: () => import("../views/home/home.vue"),
      },
      {
        path: "/loach/comics",
        name: "Comics",
        component: () => import("../views/comics/comics.vue"),
      },
      {
        path: "/loach/eat",
        name: "Eat",
        component: () => import("../views/expand/eat/eat.vue"),
      },
      {
        path: "/loach/arder",
        name: "Arder",
        component: () => import("../views/music/music.vue"),
      },
      {
        path: "/loach/create",
        name: "Create",
        component: () => import("../views/create/create.vue"),
      },
    ],
  },
  {
    path: "/loach/login",
    name: "Login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../views/music/music.vue"),
  },
  {
    path: "/create",
    component: () => import("../views/create/create.vue"),
  },
  {
    path: "/eat",
    component: () => import("../views/expand/eat/eat.vue"),
  },
  {
    path: "/birthday",
    component: () => import("../views/expand/birthday/birthday.vue"),
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    return { x: 0, y: 0 };
  },
});

export default router;
