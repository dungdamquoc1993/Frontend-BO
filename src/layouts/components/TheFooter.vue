<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>Bản quyền &copy; {{ new Date().getFullYear() }} <a href="https://revailol.online" target="_blank" rel="nofollow">DEV</a></span>
        <span class="md:flex hidden items-center">
            <span>Được viết bằng thủ công với tất cả</span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
        </span>

        <!-- buyNow component -->
        <component :is="injections.components.BuyNow"></component>
    </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
