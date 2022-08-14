import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/products/:slug/",
    name: "products",
    params: "slug",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/products/brand/:slug/",
    name: "products",
    params: "slug",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/Orders.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/product/:slug",
    name: "product",
    params: "slug",
    component: () => import("../views/Detail-Product.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
