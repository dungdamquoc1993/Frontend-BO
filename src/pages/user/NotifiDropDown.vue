<template>
  <!-- NOTIFICATIONS -->
  <div @click.stop="updateViewNotifi()">
        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
            <feather-icon icon="BellIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
            <span class="block ttM">Thông Báo</span>
            <span class="notification-dropdown-button-number">{{ countNews }}</span>


        <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

                <div class="notification-top text-center p-5 bg-success text-white">
                <h3 class="text-white">{{ countNews }} tin mới</h3>
                <!-- <p class="opacity-75">App Notifications</p> -->
                </div>
                <div id="loading-corners" class="vs-con-loading__container">
                    <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings" :key="$vs.rtl">
                        <ul class="bordered-items">
                            <li v-for="ntf in unreadNotifications" :key="ntf.index" class="flex justify-between px-4 py-4 notification cursor-pointer">
                            <div class="flex items-start">
                                <feather-icon :icon="ntf.icon" :svgClasses="[`text-${ntf.category}`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
                                <div class="mx-2">
                                <span class="font-medium block notification-title" :class="[`text-${ntf.category}`]">{{ ntf.title }}</span>
                                <small v-html="ntf.msg"></small>
                                </div>
                            </div>
                            <small class="mt-1 whitespace-no-wrap">{{ ntf.time }}</small>
                            </li>
                        </ul>
                    </VuePerfectScrollbar>
                </div>
                

                <!-- <div class="
                checkout-footer
                fixed
                bottom-0
                rounded-b-lg
                text-primary
                w-full
                p-2
                font-semibold
                text-center
                border
                border-b-0
                border-l-0
                border-r-0
                border-solid
                d-theme-border-grey-light
                cursor-pointer">
                <span>View All Notifications</span>
                </div> -->
            </vs-dropdown-menu>
        </vs-dropdown>
  </div>
  
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import AuthenticationService from '@/services/AuthenticationService'
import getData from '@/pages/trade/navbar/components/data.json'
import moment from 'moment'

moment.updateLocale("en", {
  relativeTime: {
    h: "1 giờ",
    hh: "%d giờ",
    d: "1 ngày",
    dd: "%d ngày",
    w: "1 tuần",
    ww: "%d tuần",
    M: "1 tháng",
    MM: "%d tháng",
    y: "1 năm",
    yy: "%d năm",
    future: (diff) => (diff == "bây giờ" ? diff : `trong ${diff}`),
    past: (diff) => (diff == "bây giờ" ? diff : `${diff} trước`),
    s: "bây giờ",
    ss: "%d giây",
  }
});

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
        countNews: 0,
      unreadNotifications: [
          {
            index    : 0,
            title    : 'Nạp tiền',
            msg      : 'Bạn vừa nhận $ 10.00 từ <b>ABC</b>',
            icon     : 'MessageSquareIcon',
            time     : '',
            category : 'success'
          },

      ],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60,
      },
    }
  },
  methods: {
    

    getHMS(value){
      if (value) {
          let now = moment(String(value)).fromNow();
          //let mim = moment(String(value)).format('mm');
          //let sec = moment(String(value)).format('ss');
          return now;
      }
    },

    updateViewNotifi(){
        this.getListNotifi();
        let obj = {
            e: getData.email
        }
        AuthenticationService.updateListNotifi(obj)
          .then((res) => {
              setTimeout(() => {
                  this.countNews = 0;
              }, 3000)
              
          })
    },

    getListNotifi(){
        //this.openLoadingInDiv();
        this.unreadNotifications = [];
        let obj = {
            e: getData.email
        }

        AuthenticationService.getListNotifi(obj)
          .then((res) => {
              this.$vs.loading.close('#loading-corners > .con-vs-loading');
              if(res.data.success){
                  let dataN = res.data.data;
                  for(let i = 0; i < dataN.length; i++){
                      if(dataN[i].views === 0) this.countNews++;
                      let json = {
                          index: i,
                          title: dataN[i].title,
                          msg:  dataN[i].content,
                          icon     : 'MessageSquareIcon',
                          time     : this.getHMS(dataN[i].created_at),
                          category : 'success'

                      }
 
                      this.unreadNotifications.push(json);
                  }
                  
              }
          })
    },

    openLoadingInDiv(){
        this.$vs.loading({
            container: '#loading-corners',
            type: 'corners',
            scale: 0.6
        })
    },

  },

  mounted(){
      this.getListNotifi()
  }

}

</script>

<style scoped>
.notification-dropdown-button-number {
    position: absolute;
    top: -7px;
    left: calc(50% + 2px);
    display: inline-block;
    overflow: hidden;
    background: #e22a67;
    color: #fff;
    min-width: 18px;
    height: 18px;
    line-height: 14px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 9px;
    border: 2px solid #02142b;
    padding: 0 2px;
}
@media screen and (max-width: 600px) {

    .notification-dropdown-button-number{
        top: -10px;
        min-width: 22px;
        height: 22px;
        line-height: 18px;
        font-size: 12px;
    }

}
</style>
<style>
.notification-dropdown.notification-dropdown .vs-dropdown--menu--after{
    background: #28c76f !important;
}
</style>

