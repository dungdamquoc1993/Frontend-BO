import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import themeConfig from "@/../themeConfigClient.js"
import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"


Vue.use(Vuex)

// *From Auth - Data will be received from auth provider
const userDefaults = {
  uid         : -1,          // From Auth
  displayName : "Khách", // From Auth
  about       : "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  photoURL    : require("@/assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
  status      : "online",
  userRole    : "guest"
}

const userInfoLocalStorage = JSON.parse(localStorage.getItem("INFO")) || {}

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages



const getUserInfo = () => {

  // let userInfo = {
  //   //displayName:'',
  // }
  let userInfo = {}
  //userInfo  = JSON.parse(localStorage.getItem('INFO')) 

  // Object.keys(userDefaults).forEach((key) => {
  //   // If property is defined in localStorage => Use that
  //   userInfo[key] = userDefaults[key]
  // })


  // //return userInfo
  
  // // Update property in user
  // Object.keys(userDefaults).forEach((key) => {
  //   // If property is defined in localStorage => Use that
  //   userInfo[key] = userInfoLocalStorage[key] ?  userInfoLocalStorage[key] : userDefaults[key]
  // })

  // // Include properties from localStorage
  // Object.keys(userInfoLocalStorage).forEach((key) => {
  //   if(userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key]
  // })


  return userInfo
}

export default new Vuex.Store({
  strict: true,
  plugins: [
    
  ],
  getters,
  connected: null,
  session: 0,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    mainLayoutType: themeConfig.mainLayoutType || "vertical",
    windowWidth: null,
    isVerticalNavMenuActive : false,
    verticalNavMenuItemsMin : false,
    theme: themeConfig.theme || "light",
    //AddInfoUser: {},
    AppActiveUser: getUserInfo(),
    bodyOverlay             : false,
    navbarSearchAndPinList  : navbarSearchAndPinList,
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : "default",
    scrollY                 : 0,
    starredPages            : navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
    themePrimaryColor       : themeConfig.primary, // color

  },
  mutations: {
     // ////////////////////////////////////////////
    // UI
    // ////////////////////////////////////////////

    TOGGLE_CONTENT_OVERLAY(state, val) { state.bodyOverlay       = val },
    UPDATE_PRIMARY_COLOR(state, val)   { state.themePrimaryColor = val },
    UPDATE_THEME(state, val)           { state.theme             = val },
    UPDATE_WINDOW_WIDTH(state, width)  { state.windowWidth       = width },
    UPDATE_WINDOW_SCROLL_Y(state, val) { state.scrollY = val },

    TOGGLE_REDUCE_BUTTON(state, val) {
      state.reduceButton = val
    },

    setToken (state, token) {
      state.token = token
      //state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
      state.isVerticalNavMenuActive = value
    },
    UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
      state.verticalNavMenuWidth = width
    },
    UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
      state.verticalNavMenuItemsMin = val
    },

    SET_INFO_USDER(state, val) {
      state.AppActiveUser = val
    },

  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    setInfoUser({commit}, list){
      commit('SET_INFO_USDER', list)
    }
  }
})