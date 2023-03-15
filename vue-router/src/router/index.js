import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",

    name: "home",
    component: HomeView,
  },
  {
    path: "/about",

    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/transactions",

    name: "transactions",
    component: () => import("../views/TransactionView.vue"),
  },
  {
    path: "/transactions/:id",
    name: "transaction",
    component: () => import("../views/TransactionDetailView.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingView.vue"),
  },
  // {
  //   path: "/:pathMatch(.*)",
  //   name: "notfound",
  //   component: () => import("../views/NotFoundView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
