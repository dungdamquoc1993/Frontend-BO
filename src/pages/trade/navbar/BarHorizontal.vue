<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div class="relative">
  <div class="vx-navbar-wrapper navbar-full p-0">
    <vs-navbar class="navbar-custom navbar-skelton" :class="navbarClasses"  :style="navbarStyle" :color="navbarColor">

      <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992" />

      <router-link tag="div" to="/" class="vx-logo cursor-pointer mx-auto flex items-center">
        <logo class="w-10 mr-4 fill-current text-primary" />
        <span class="vx-logo-text text-primary"></span>
      </router-link>

      <i18n />

      <!-- <notification-drop-down /> -->

      <profile />

    </vs-navbar>
  </div>
</div>
</template>

<script>
import I18n                 from "@/layouts/components/navbar/components/I18n.vue"
//import NotificationDropDown from "@/layouts/components/navbar/components/NotificationDropDown.vue"
import Profile              from "./components/Profile"
import Logo                 from "./Logo"

export default {
  name: "the-navbar-horizontal",
  props: {
    logo: { 
        type: String 
        },
        navbarType: {
            type: String,
            required: true
        }
  },
  components: {
    Logo,
    I18n,
    //NotificationDropDown,
    Profile,
  },
  computed: {
    navbarColor() {
      let color = "#fff"
      if (this.navbarType === "sticky") color = "#f7f7f7"
      else if (this.navbarType === 'static') {
        if (this.scrollY < 50) {
          color = "#f7f7f7"
        }
      }

      this.isThemedark === "dark" ? color === "#fff" ? color = "#02142b" : color = "#111" : null

      return color
    },
    isThemedark()          { return this.$store.state.theme                                                                       },
    navbarStyle()          { return this.navbarType === "static" ? {transition: "all .25s ease-in-out"} : {}                      },
    navbarClasses()        { return this.scrollY > 5 && this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none" },
    scrollY()              { return this.$store.state.scrollY                                                                     },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth                                                        },
    windowWidth()          { return this.$store.state.windowWidth                                                                 },
  }
}

</script>

