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
    <div class="vx-navbar-wrapper" :class="classObj">
      

      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">
        
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" />

        <router-link tag="div" class="vx-logo cursor-pointer" to="/">
          <logo class="w-full fill-current text-primary" />
        </router-link>

        <vs-spacer />
        <!--<span style="font-size: 14px;">Ứng dụng chỉ mục đích nghiên cứu và học hỏi, tôi sẽ không chịu trách nhiệm về nội dung hoặc có ai sử dụng với mục đích khác!</span>-->
        <!-- <i18n /> -->

        <!--<notification-drop-down />-->

        <profile />

      </vs-navbar>
    </div>
  </div>
</template>


<script>

//import I18n                 from "@/layouts/components/navbar/components/I18n.vue"
//import NotificationDropDown from "@/layouts/components/navbar/components/NotificationDropDown.vue"
//import NotificationDropDown from "@/pages/user/navbar/NotifiDropDown.vue"
import Profile      from "./components/Profile"
import Logo         from "./Logo.vue"

export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    //I18n,
    //NotificationDropDown,
    Profile,
    Logo
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#02142b" : this.navbarColor
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor() {
      return {'text-white': (this.navbarColor != '#02142b' && this.$store.state.theme === 'dark') || (this.navbarColor != '#fff' && this.$store.state.theme !== 'dark')}
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default")      return "navbar-default"
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced"
      else if (this.verticalNavMenuWidth)              return "navbar-full"
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
    }
  }
}
</script>
<style scoped>

h1, h2{
    font-weight: normal;
}

</style>

<style>
@media screen and (max-width: 768px){
  .vx-logo{
    display: none;
    /*visibility: hidden;
    width: 0px;*/
  }
}
</style>