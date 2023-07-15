<template>

  <div v-if="!iSLogin" class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">
          <transition :name="routerTransition" mode="out-in">
            <router-view @changeRouteTitle="changeRouteTitle" @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)" />
          </transition>
  </div>
  <div v-else class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">

    <vx-tour :steps="steps" v-if="!disableThemeTour && (windowWidth >= 1200 && mainLayoutType === 'vertical' && verticalNavMenuWidth == 'default')" />

    <the-customizer
      v-if                    = "!disableCustomizer"
      :hideScrollToTop        = "hideScrollToTop"
      :navbarType             = "navbarType"
      :navbarColor            = "navbarColor"
      :routerTransition       = "routerTransition"
      @toggleHideScrollToTop  = "toggleHideScrollToTop"
      @updateNavbar           = "updateNavbar"
      @updateNavbarColor      = "updateNavbarColor"
      @updateRouterTransition = "updateRouterTransition" />

    <v-nav-menu
      :navMenuItems = "navMenuItems"
      title         = ""
      parent        = ".layout--main" />

    <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
      <div id="content-overlay" />

    <!-- Navbar -->
    <template v-if="mainLayoutType === 'horizontal' && windowWidth >= 1200">
      <the-navbar-horizontal
        :navbarType= "navbarType"
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]" />

      <div style="height: 62px" v-if="navbarType === 'static'"></div>

      <h-nav-menu
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]"
        :navMenuItems="navMenuItems" />
    </template>

    <template v-else>
      <the-navbar-vertical
        :navbarColor="navbarColor"
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]" />
    </template>
    <!-- /Navbar -->

      <div class="content-wrapper">

        <div class="">  <!-- router-view -->
          <div class="router-content">

            <transition :name="routerTransition">

              <div v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="router-header flex flex-wrap items-center mb-6">
                <div
                  class="content-area__heading"
                  :class="{'pr-4 border-0 md:border-r border-solid border-grey-light' : $route.meta.breadcrumb}">
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>

                <!-- BREADCRUMB -->
                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route" :isRTL="$vs.rtl" />

                <!-- DROPDOWN -->
                <!-- <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
                  <vs-button radius icon="icon-settings" icon-pack="feather" />

                  <vs-dropdown-menu class="w-32">
                    <vs-dropdown-item>
                      <div @click="$router.push('/pages/profile').catch(() => {})" class="flex items-center">
                        <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Profile</span>
                      </div>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <div @click="$router.push('/apps/todo').catch(() => {})" class="flex items-center">
                        <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Tasks</span>
                      </div>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <div @click="$router.push('/apps/email').catch(() => {})" class="flex items-center">
                        <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Inbox</span>
                      </div>
                    </vs-dropdown-item>
                  </vs-dropdown-menu>

                </vs-dropdown> -->

              </div>
            </transition>

            <div class="content-area__content">

              <back-to-top bottom="5%" :right="$vs.rtl ? 'calc(100% - 2.2rem - 38px)' : '30px'" visibleoffset="500" v-if="!hideScrollToTop">
                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" />
              </back-to-top>

              <transition :name="routerTransition" mode="out-in">
                <router-view @changeRouteTitle="changeRouteTitle" @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)" />
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!--<the-footer />-->
    </div>
  </div>
</template>

<script>
import BackToTop           from 'vue-backtotop'
import themeConfig         from '@/../themeConfigClient.js'
import HNavMenu            from "@/pages/trade/navbar/components/HorizontalNavMenu.vue"
import navMenuItems        from "@/pages/trade/navbar/navMenuItems.js"
import TheNavbarHorizontal from '@/pages/trade/navbar/BarHorizontal.vue'
import TheNavbarVertical   from '@/pages/trade/navbar/BarVertical.vue'
import VNavMenu            from '@/pages/trade/navbar/components/VerticalNavMenu.vue'
import AuthenticationService from '@/services/AuthenticationService'
import getData from '@/pages/trade/navbar/components/data.json'

//import LogRegForGet  from '@/pages/user/LogRegForGet.vue'

//import TheCustomizer       from "@/layouts/components/customizer/TheCustomizer.vue"
// import TheFooter           from '@/layouts/components/TheFooter.vue'

const VxTour = () => import('@/components/VxTour.vue')

export default {
    components: { 
      //LogRegForGet,
      BackToTop,
      //TheFooter,
      HNavMenu,
      VNavMenu,
      //TheCustomizer,
      TheNavbarHorizontal,
      TheNavbarVertical,
      VxTour
    },
    data() {
        return {
            iSLogin: false,
            navMenuItems      : navMenuItems,
            dynamicWatchers   : {},
            isNavbarDark      : false,
            disableCustomizer : themeConfig.disableCustomizer,
            disableThemeTour  : themeConfig.disableThemeTour,
            hideScrollToTop   : themeConfig.hideScrollToTop,
            navbarColor       : themeConfig.navbarColor || '#fff',
            navbarType        : themeConfig.navbarType  || 'floating',
            footerType        : themeConfig.footerType  || 'static',
            routerTransition  : themeConfig.routerTransition || 'none',
            steps: [
            {
              target  : '#btnVNavMenuMinToggler',
              content : 'Thu gọn.'
            },
            // {
            //   target  : '.vx-navbar__starred-pages',
            //   content : 'Tạo dấu trang của riêng bạn. Bạn cũng có thể sắp xếp lại chúng bằng cách kéo và thả.'
            // },
            // {
            //   target  : '.i18n-locale',
            //   content : 'Bạn có thể thay đổi ngôn ngữ từ đây.'
            // },
            // {
            //   target  : '.navbar-fuzzy-search',
            //   content : 'Thử tìm kiếm để truy cập các trang trong nháy mắt.'
            // },
            // {
            //   target  : '.customizer-btn',
            //   content : 'Tùy chỉnh mẫu dựa trên sở thích của bạn',
            //   params  : {
            //     placement: 'left'
            //   }
            // },
            // {
            //   target  : '.vs-button.buy-now',
            //   content : 'Chúng tôi còn rất nhiều sản phẩm khác ^.^!',
            //   params  : {
            //     placement: 'top'
            //   }
            // },
          ],
        }
    },
    watch: {
    "$route"() {
      this.routeTitle = this.$route.meta.pageTitle
      let token = localStorage.hasOwnProperty('tokenUser');
      if(token){

        this.iSLogin = true;
        //this.khoiTaoPrintUser();
        AuthenticationService.getInfoUser()
        .then((res) => {

            if(res.data.success == 1){
  
                let dt = res.data.data

                getData.uid= dt.id
                getData.email= dt.email
                getData.profile_image= dt.profile_image
                getData.displayName= dt.nick_name
                getData.uidLive= dt.order[1].u_id
                getData.uidDemo= dt.order[0].u_id
                getData.am_usdt= dt.b
                getData.vip= dt.vip
                getData.vip_lv= dt.level_vip
                getData.pen_commiss= dt.pending_commission
                getData.ref= dt.ref
                getData.upid= dt.upid
                getData.c2fa= dt.fa2
                getData.id_front= dt.id_front
                getData.id_back= dt.id_back,
                getData.first_name= dt.first_name
                getData.last_name= dt.last_name
                getData.verify= dt.verify
                getData.num_secu= dt.num_secury
                getData.country= dt.c
                getData.so_cmnd= dt.so_cmnd
                
                
        
                getData.blLive = dt.order[1].balance
                getData.blDemo = dt.order[0].balance
                getData.balance = dt.balance

                localStorage.setItem('INFO', JSON.stringify(dt))
                //localStorage.removeItem('isLog')

            }else if(res.data.success == 4){
                localStorage.removeItem('INFO')
                localStorage.removeItem('tokenUser')
                window.location.href = window.location.origin + '/login'
                //let checkLog = localStorage.getItem('isLog')
                //localStorage.setItem('isLog', true);
                //if(!checkLog){
                //    localStorage.setItem('isLog', true)
                    //window.location.href = window.location.origin + '/login'
                //}
                
            }
        })
      }else{
        this.iSLogin = false
      }

    },
    isThemeDark(val) {
      const color = this.navbarColor == "#fff" && val ? "#02142b" : "#fff"
      this.updateNavbarColor(color)
    },
    "$store.state.mainLayoutType"(val) {
      this.setNavMenuVisibility(val)
      this.disableThemeTour = true
    }
  },
    computed: {
      bodyOverlay() { return this.$store.state.bodyOverlay },
      contentAreaClass() {
        if(this.mainLayoutType === "vertical") {
          if      (this.verticalNavMenuWidth == "default") return "content-area-reduced"
          else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg"
          else return "content-area-full"
        }
        // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
        else return "content-area-full"
      },
      footerClasses() {
        return {
          'footer-hidden': this.footerType == 'hidden',
          'footer-sticky': this.footerType == 'sticky',
          'footer-static': this.footerType == 'static',
        }
      },
      isThemeDark()     { return this.$store.state.theme == 'dark' },
      layoutTypeClass() { return `main-${this.mainLayoutType}` },
      mainLayoutType()  { return this.$store.state.mainLayoutType  },
      navbarClasses()   {
        return {
          'navbar-hidden'   : this.navbarType == 'hidden',
          'navbar-sticky'   : this.navbarType == 'sticky',
          'navbar-static'   : this.navbarType == 'static',
          'navbar-floating' : this.navbarType == 'floating',
        }
      },
      isAppPage() {
        return this.$route.meta.no_scroll || false
      },
      verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth },
      windowWidth(){ 
          return this.$store.state.windowWidth 
        },
    },
    methods: {
      changeRouteTitle(title) {
        this.routeTitle = title
      },
      updateNavbar(val) {
        if (val == "static") this.updateNavbarColor(this.isThemeDark ? "#02142b" : "#fff")
        this.navbarType = val
      },
      updateNavbarColor(val) {
        this.navbarColor = val
        if (val == "#fff") this.isNavbarDark = false
        else this.isNavbarDark = true
      },
      updateFooter(val) {
        this.footerType = val
      },
      setNavMenuVisibility(layoutType) {
        if((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === "vertical" && this.windowWidth < 1200)) {
          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
          this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
        }
        else {
          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
        }
      },
      updateRouterTransition(val) {
        this.routerTransition = val
      },
      toggleHideScrollToTop(val) {
        this.hideScrollToTop = val
      },
      khoiTaoPrintUser(){
        let gData = JSON.parse(localStorage.getItem('INFO'))
        if(gData){
          getData.uid= gData.id,
          getData.email= gData.email,
          getData.profile_image= gData.profile_image,
          getData.displayName= gData.nick_name,
          getData.uidLive= gData.order[1].u_id,
          getData.uidDemo= gData.order[0].u_id,
          getData.vip= gData.vip,
          getData.vip_lv= gData.level_vip,
          getData.pen_commiss= gData.pending_commission,
          getData.ref= gData.ref,
          getData.c2fa= gData.fa2,
          getData.id_front= gData.id_front,
          getData.id_back= gData.id_back,
          getData.first_name= gData.first_name,
          getData.last_name= gData.last_name,
          getData.verify= gData.verify,
          getData.num_secu= gData.num_secury,
          getData.country= gData.c,
          getData.blLive = gData.order[1].balance
          getData.blDemo = gData.order[0].balance
          getData.balance = gData.balance,
          getData.mkt = gData.mkt
        }
      }
    },
    created() {
      
      let token = localStorage.hasOwnProperty('tokenUser')
      if(token){
        this.iSLogin = true
      }

      this.khoiTaoPrintUser();
      

      const color = this.navbarColor == "#fff" && this.isThemeDark ? "#02142b" : this.navbarColor
      this.updateNavbarColor(color)
      this.setNavMenuVisibility(this.$store.state.mainLayoutType)
      // Dynamic Watchers for tour
      // Reason: Once tour is disabled it is not required to enable it.
      // So, watcher is required for just disabling it.
      this.dynamicWatchers.windowWidth = this.$watch("$store.state.windowWidth", (val) => {
        if(val < 1200) {
          this.disableThemeTour = true
          this.dynamicWatchers.windowWidth()
        }
      })

      this.dynamicWatchers.verticalNavMenuWidth = this.$watch("$store.state.verticalNavMenuWidth", () => {
        this.disableThemeTour = true
        this.dynamicWatchers.verticalNavMenuWidth()
      })

      this.dynamicWatchers.rtl = this.$watch("$vs.rtl", () => {
        this.disableThemeTour = true
        this.dynamicWatchers.rtl()
      })
    },
    beforeDestroy() {
      Object.keys(this.dynamicWatchers).map(i => {
        this.dynamicWatchers[i]()
        delete this.dynamicWatchers[i]
      })
    }
}
</script>

<style scoped>

.pro-c-avatar__content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
}
</style>

<style>

::-webkit-scrollbar {
  width: 0.3em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.vs-con-input .vs-inputx{
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

button.vs-tabs--btn{
  font-weight: bold;
}

.theme-dark .con-vs-popup .vs-popup .vs-popup--header {
    background: #2b323c !important;
}

.theme-dark .vs-pagination--nav .vs-pagination--buttons{
  background: #757575 !important;
}

.theme-dark .vs-pagination--nav .vs-pagination--ul {
    background: rgba(121, 124, 140, 0.41) !important;
}

.vs-pagination-primary .effect, .vs-pagination-primary .vs-pagination--buttons:hover{
  background: #777b80 !important;
}

.vs-pagination-primary li:hover:not(.is-current){
  color: #777b80 !important;
}

.vs-tabs-primary .con-ul-tabs .activeChild button, .vs-tabs-primary .con-ul-tabs button:not(:disabled):hover{
  color: #e2e2e2 !important;
}

.vs-tabs-primary .con-ul-tabs .line-vs-tabs{
  /*background: linear-gradient(30deg,rgb(121, 124, 140),rgba(var(--vs-primary),.5))!important;*/
  background: linear-gradient(30deg,rgb(121, 124, 140),rgb(250 40 67))!important;
}

.v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar--item{
      padding: 0 10px !important;
}

.check {
    fill: #72c472;
    color: #72c472;
}

.green {
    color: #00c67a;
}

.lightyellow{
  color: lightyellow;
}

.bg-green{
    background: #00c67a;
}

.red {
    color: #FF4B61;
}

.bg-red{
    background: #FF4B61;
}

.colorGray{
    color: #868F93;
}

.white{
  color: #fff
}

.border-bottom {
    border-bottom: 1px solid #dee2e6!important;
}

.border-top {
    border-top: 1px solid #dee2e6!important;
}

.table{
    border-collapse: collapse;
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}

.customeTradeHistory, 
.customeAffiliateCommission {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij4KICA8ZyBpZD0iY2FsZW5kYXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODM3IDAuNSkiPgogICAgPGxpbmUgaWQ9IkxpbmVfMTM4MyIgZGF0YS1uYW1lPSJMaW5lIDEzODMiIHkyPSIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjY2MykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzEzODQiIGRhdGEtbmFtZT0iTGluZSAxMzg0IiB5Mj0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNjYzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPGxpbmUgaWQ9IkxpbmVfMTM4NSIgZGF0YS1uYW1lPSJMaW5lIDEzODUiIHgyPSIxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzM3IDcpIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzQxNzAiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDQxNzAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMyIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjMzNyAzKSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIvPgogIDwvZz4KPC9zdmc+Cg==) no-repeat right center;
}

.table-bordered td, 
.table-bordered th {
    border: 1px solid #dee2e6;
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}

/* Variables */
.loading {
  display: none;
}
.main-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
}
.main-loading .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transform: translate(-50%, -50%);
}
.ld-loading .loading {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transform: translate(-50%, -50%);
}
.ld-loading .loading__ring {
    position: absolute;
    width: 50px;
    height: 50px;
}
.ld-loading .loading__ring:first-child {
      transform: skew(30deg, 20deg);
}
.ld-loading .loading__ring:last-child {
      transform: skew(-30deg, -20deg) scale(-1, 1);
}
.ld-loading .loading__ring:last-child svg {
        animation-delay: -0.5s;
}
.ld-loading .loading__ring svg {
      animation: rotate 1s linear infinite;
      fill: #597079;
}

.color-white-50 {
    color: rgba(255, 255, 255, 0.5) !important;
}

/* Animation */
@keyframes rotate {
  to {
      transform: rotate(360deg);
  }
}

.md-count, 
.md-error, 
.md-helper-text {
    height: 20px;
    position: absolute;
    bottom: -22px;
    font-size: 12px;
    transition: .3s cubic-bezier(.4,0,.2,1);
}

.formWapper .md-count {
    right: 0;
    color: #5d6481;
}

.pageLRF .vs-sidebar{
    max-width: 428px !important;
}

/*.theme-dark input{
  background: transparent;
}*/

.theme-dark .vs-select--options{
    background: #1f2e3e;
}

.theme-dark .wizard-icon-container{
    background-color: #1c3d61 !important;
}

.vue-form-wizard.md .wizard-navigation .wizard-nav .wizard-icon-circle{
    border-color: #1c3d61 !important
}

.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{
  background-color: #1c3d61 !important;
}

.theme-dark .con-vs-dialog .vs-dialog header{
    background: #212121;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
@media (min-width: 1201px){
  .main-vertical .vx-navbar-wrapper {
      width: calc(100%) !important;
  }
  .navbar-floating .router-content{
    margin-left: 105px;
    margin-top: 0;
    padding-top: 5.5rem;
  }
}


</style>