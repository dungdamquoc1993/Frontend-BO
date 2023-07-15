<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Đức Nguyễn
    Author URL: 
========================================================================================== -->

<template>
  <div
    v-if="canSee"
    class="vs-sidebar--item nav-item"
    :class="[
      {'vs-sidebar-item-active'            : activeLink},
      {'disabled-item pointer-events-none' : isDisabled}
    ]" >

      <router-link
        tabindex="-1"
        v-if="to"
        exact
        :class="[{'router-link-active': activeLink}]"
        :to="to"
        :target="target" class="nav-link cursor-pointer">
          <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
          <feather-icon v-else :class="{'w-3 h-3': iconSmall}" :icon="icon" />
          <slot />
      </router-link>
      <!-- class="nav-link cursor-pointer" -->
      <a class="nav-link cursor-pointer" v-else :target="target" :href="href" tabindex="-1">
        <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
        <feather-icon v-else :class="{'w-3 h-3': iconSmall}" :icon="icon" />
        <slot />
      </a>
  </div>
  
</template>

<script>



export default {
  name: 'v-nav-menu-item',
  props: {
    icon        : { type: String,                 default: ""               },
    iconSmall   : { type: Boolean,                default: false            },
    iconPack    : { type: String,                 default: 'material-icons' },
    href        : { type: [String, null],         default: '#'              },
    to          : { type: [String, Object, null], default: null             },
    slug        : { type: String,                 default: null             },
    index       : { type: [String, Number],       default: null             },
    featherIcon : { type: Boolean,                default: true             },
    target      : { type: String,                 default: '_self'          },
    isDisabled  : { type: Boolean,                default: false            },
  },
  computed: {
    canSee() {
      //this.$acl.check(this.$store.state.AppActiveUser.userRole)
      //return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true
      // bỏ nếu không muốn kiểm tra user đăng nhập
      return this.to ? true : true
    },
    activeLink() {
      return ((this.to == this.$route.path) || (this.$route.meta.parent == this.slug) && this.to) ? true : false
    }
    
  },
  methods: {

    createLink(slug){
      return window.location.origin + '/' + slug
    }
    
  },
}

</script>
<style scoped>
.nav-item .nav-link{
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
}
.v-nav-menu .feather-icon{
      margin-right: 0;
}

.v-nav-menu .vs-sidebar--item a{
  padding: 10px 0;
}
.v-nav-menu .vs-sidebar--item .router-link-active{
  background: transparent;
  box-shadow: none;
}

</style>
<style>

.v-nav-menu .vs-sidebar--item a span{
  font-size: 13px !important;
}

.v-nav-menu .vs-sidebar--item a .truncate {
  white-space: initial !important;
}
</style>

