import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Transactions from "@/views/Transactions.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/transactions/:id",
    name: "Transaction",
    component: () => import("@/views/Transaction.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
