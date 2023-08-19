/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
//import auth from "@/auth/authService";

//import firebase from 'firebase/app'
//import 'firebase/auth'

Vue.use(Router);

const router = new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  base: "/portal",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "/",
      component: () => import("./layouts/main/Main.vue"),
      children: [],
      meta: {
        requiresAuth: true,
      },
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [],
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404",
    },
  ],
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
  document.title = "CMS BO";
});

router.beforeEach((to, from, next) => {
  //firebase.auth().onAuthStateChanged(() => {

  // get firebase current user
  //const firebaseCurrentUser = firebase.auth().currentUser

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");

    if (!token) {
      next({ name: "page-login" });
    } else {
      next();
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    const token = localStorage.getItem("token");

    if (token) {
      next({ name: "admin-analytics" });
    } else {
      next();
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
  // if (
  //     to.path === "/pages/login" ||
  //     to.path === "/pages/forgot-password" ||
  //     to.path === "/pages/error-404" ||
  //     to.path === "/pages/error-500" ||
  //     to.path === "/pages/register" ||
  //     to.path === "/callback" ||
  //     to.path === "/pages/comingsoon" ||
  //     (auth.isAuthenticated() || firebaseCurrentUser)
  // ) {
  //     return next();
  // }

  // If auth required, check login. If login fails redirect to login page
  // if(to.meta.authRequired) {
  //   if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
  //     router.push({ path: '/pages/login', query: { to: to.path } })
  //   }
  // }

  //return next()
  // Specify the current path as the customState parameter, meaning it
  // will be returned to the application after auth
  // auth.login({ target: to.path });

  //});
});

export default router;
