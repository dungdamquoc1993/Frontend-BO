import Vue from 'vue'
import Router from 'vue-router'
//import auth from "@/auth/authService";

//import firebase from 'firebase/app'
//import 'firebase/auth'

import AuthenticationService from '@/services/AuthenticationService'
//import getData from '@/pages/trade/navbar/components/data.json'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            component: () => import('@/pages/trade/TradeMain.vue'),
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Trang chủ'
                    }
                },
                {
                    path: '/challenge',
                    name: 'challenge',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Trang chủ'
                    }
                },
                {
                    path: '/token-airdrop',
                    name: 'token-airdrop',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Trang chủ'
                    }
                },
                {
                    path: '/login',
                    name: 'login-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đăng nhập'
                    }
                },
                {
                    path: '/register',
                    name: 'register-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đăng ký'
                    }
                },       
                {
                    path: '/register/:r',
                    name: 'register-param-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đăng ký'
                    }
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Quên mật khẩu'
                    }
                },
                {
                    path: '/register-resend-verify-email',
                    name: 'register-resend-verify-email-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Gửi lại email xác nhận'
                    }
                },
                {
                    path: '/reset-password',
                    name: 'reset-password-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đặt lại mật khẩu'
                    }
                },
                {
                    path: '/reset-password/:e',
                    name: 'reset-password-param-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đặt lại mật khẩu'
                    }
                },
                {
                    path: '/trading',
                    name: 'client-index',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Giao dịch',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/balance',
                    name: 'balance-user',
                    component: () => import('../../views/trading/Wallet.vue'),
                    meta: {
                        title: 'Balance',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/exchange',
                    name: 'exchange-user',
                    component: () => import('../../views/trading/Exchange.vue'),
                    meta: {
                        title: 'Exchange',
                        requiresAuth: true
                    }
                    
                },
                {
                    path: '/user/trade/history',
                    name: 'trade-user-history',
                    component: () => import('../../views/trading/TradeHistory.vue'),
                    meta: {
                        title: 'Trade history',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/affiliate/general',
                    name: 'affiliate-user-general',
                    component: () => import('../../views/trading/Affiliate.vue'),
                    meta: {
                        title: 'Affiliate General',
                        requiresAuth: true
                    }
                }
            ],
            meta: {
                hideForAuth: true
            }
        },
        {
            path: '/',
            name: 'maintenance-page',
            component: () => import('@/pages/index/BaoTri.vue')
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
    linkActiveClass: 'router-link-active ',
    linkExactActiveClass: ''
})

router.beforeEach((to, from, next) => {
    //document.title = to.meta.title;
    document.title = 'TRADE';
    

    AuthenticationService.getStatusServer()
    .then((res) => {
        if(res.data.ok){
            return next({ name: 'maintenance-page' })
        }
    })

    // firebase.auth().onAuthStateChanged(() => {

    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //         // const token = localStorage.getItem('tokenUser');
                
    //         // if (!token){
    //         //     //next({ name: 'login-index' })
    //         //     window.location.href = window.location.origin + '/login'
    //         // } else {
    //         //     next()
    //         // }

            
    //     } else {
    //         next() // does not require auth, make sure to always call next()!
    //     }

    //     // if (to.matched.some(record => record.meta.hideForAuth)) {
    //     //     const token = localStorage.getItem('tokenUser');
                
    //     //     if (token){
    //     //         next({ name: 'client-index' })
    //     //     } else {
    //     //         next()
    //     //     }
    //     // } else {
    //     //     next() // does not require auth, make sure to always call next()!
    //     // }

    // })

    return next()
})

export default router