<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  Item Name:
  Author: Ares DN
  Author URL: 
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>HỒ SƠ</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <!-- <vs-divider class="mb-0"></vs-divider> -->

    <VuePerfectScrollbar style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px);" class="scroll-area--data-list-add-new">
      
      

      <div class="p-4">
          <div class="vx-vx-row mb-3">
            <div class="vx-col w-full">
            <div class="flex flex-wrap items-center mb-base">
                  <vs-avatar v-if="!avatar" :src="require('@/assets/images/avatar/df.jpg')" size="80px" class="mr-4" />
                  <!--<vs-avatar v-else-if="url_avatar!=''" :src="url_avatar" size="80px" class="mr-4" /> -->
                  <vs-avatar v-else-if="!!avatar" :src="`${dm}api/auth/me/photo/${avatar}`" size="80px" class="mr-4" />
              <div>
                <input type="file" class="hidden" name="image" ref="update_avatar_input" @change="update_avatar($event.target.files)" accept="image/png, image/jpg, image/jpeg">
                <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> 
              </div>
            </div>
              <!--<div class="flex items-start flex-col sm:flex-vx-row">
                    
                <div>
                  <p class="text-lg font-medium mb-2 mt-4 sm:mt-0"></p>
                  <input type="file" class="hidden" ref="update_avatar_input" accept="image/*">

                  <vs-button class="mt-4 mr-4 mb-4">Thay đổi</vs-button>
                  <p>Mã bảo mật: {{ num_secury }}
                  </p>
                  <span class="italic" style="font-size: 10px;">Vui lòng giữ mã này an toàn để khôi phục mật khẩu</span>
                  <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> 
                </div>
              </div>-->
            </div>
          </div>

          <h3 class="mb-3" style="font-weight: blod">
            <feather-icon icon="UserIcon" ></feather-icon> Thông tin cá nhân
          </h3>

          <div class="vx-vx-row">
              <div class="vx-col w-full">
                  <vs-input label="Email" v-model="email" class="mt-2 w-full"  disabled="disabled"/>
              </div>
              
              <div class="vx-col w-full">
                  <vs-input label="Biệt danh" v-model="nickName" class="mt-2 w-full"  disabled="disabled"/>
              </div>

              <!-- <div class="vx-col lg:w-1/2 w-full">
                  <vs-input label="Họ" maxlength="8" v-model="frist_n" class="mt-2 w-full" />
              </div>

              <div class="vx-col lg:w-1/2 w-full">
                  <vs-input label="Tên" maxlength="8" v-model="last_n" class="mt-2 w-full" />
                 
              </div> -->

          </div>

      </div>

      <div class="p-4">
          <h3 class="mb-3" style="font-weight: blod">
              <feather-icon icon="UserCheckIcon" ></feather-icon> Xác minh tài khoản
            </h3>        
            <span class="d-flex mt-5" style="font-size: 12px;">
              Để đảm bảo an toàn cho tài sản của bạn, chúng tôi cần xác minh danh tính. Hãy điền thông tin thật chính xác, khi đã hoàn tất xác minh danh tính thì thông tin sẽ không chỉnh sửa được nữa.
            </span>
            <p class="clearfix"></p>
            <vs-button v-if="getDataJson.verify == 0" color="warning" type="border" class="mb-2 mt-2 float-right" @click.stop="showHoSoSetting()" >Xác nhận</vs-button>
            <span v-else-if="getDataJson.verify == 2" class="lightyellow italic">* Tài khoản đang được xem xét</span>
            <span v-else class="green italic">* Tài khoản đã được xác minh</span>
      </div>

      <p class="clearfix"></p>
      <div class="p-4">
          <h3 class="mb-3" style="font-weight: blod">
              <feather-icon icon="LockIcon" ></feather-icon> Bảo mật
            </h3>
            <span class="d-flex" style="font-size: 12px; margin-bottom: 5px">
              Bạn có muốn thay đổi mật khẩu không? Nhấp vào nút phía dưới để thay đổi.
            </span>
            <p class="clearfix"></p>
            <vs-button color="warning" type="border" class="mb-2 float-right"  @click="popupActiveChangePass=true">Đổi</vs-button>
            <p class="clearfix"></p>
            <span  class="d-flex" style="font-size: 12px; margin-bottom: 5px">Bắt buộc bật 2FA để rút tiền hoặc cập nhật các bảo mật.</span>
            <p class="clearfix"></p>
            <div class="mt-1 float-right">
              <label>Bật 2FA</label>
              <vs-switch color="success" v-model="swi2Fa" @change="on2FA" icon-pack="feather" vs-icon="icon-check" />
            </div>
            
      </div>
      
    <vs-popup background-color="rgba(0,0,0,.6)" :background-color-popup="colorxChangePass" class=""  title="Đổi mật khẩu" :active.sync="popupActiveChangePass">
      <div class="vx-vx-row">
        <div class="vx-col w-full">
            <vs-input type="password" label="Mật khẩu cũ" maxlength="20" v-model="passOld" name="passOld" class="mt-2 w-full"/>
        </div>

        <div class="vx-col w-full">
            <vs-input type="password" label="Mật khẩu mới" maxlength="20" v-model="passNew" name="passNew" class="mt-2 w-full"/>
        </div>
        
        <div class="vx-col w-full">
            <vs-input type="password" label="Nhập lại mật khẩu mới" maxlength="20" v-model="passRenew" name="passReNew" class="mt-2 w-full"/>
        </div>
        <div class="vx-col w-full mt-5">
          <small class="red italic" v-if="!getDataJson.c2fa">* Bạn phải bật 2FA để điều chỉnh</small>
          <vs-button v-else color="success" type="border" :disabled="disableChangePass" @click="ChangeNewPass()">Đồng ý</vs-button>
        </div>
        
      </div>
    </vs-popup>

    <ho-so-setting :isSidebarActive="SidebarHSSetting" @closeSidebar="toggleDataSidebar" /> 

    <vs-prompt title="Xác thực Google" @close="closeGG2FA" :active.sync="popupActive2FA" :buttons-hidden="true">
      <google-auth />
    </vs-prompt>

    </VuePerfectScrollbar>
    <!--<div class="flex flex-wrap items-center p-6" slot="footer">
        <vs-button class="mt-5 w-full" color="danger" type="border" icon-pack="feather" icon="icon-log-out" @click="logOutUser">Đăng xuất</vs-button>
    </div>-->
  </vs-sidebar>
  
  
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import HoSoSetting from '@/pages/trade/slidebar/HoSoSetting.vue'
import AuthenticationService from '@/services/AuthenticationService'
import getData from '@/pages/trade/navbar/components/data.json'
import GoogleAuth from '@/pages/trade/slidebar/2FAGoogle'
import SETTINGS from '../../../../settings.json'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  components: {
    VuePerfectScrollbar,
    HoSoSetting,
    GoogleAuth
  },
  watch: {
    
    isSidebarActive(val) {
      if(!val) return
      if(Object.entries(this.data).length === 0) {
        //this.initValues()
        this.$validator.reset()
      }else {
        let { token } = JSON.parse(JSON.stringify(this.data))
        this.token = token
        //this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {
      getDataJson: getData,
      dm: SETTINGS.BASE_URL,
      disableChangePass: false,
      passOld: '',
      passNew: '',
      passRenew: '',
      avatar: 'df.jpg',
      url_avatar: '',
      nickName: '',
      email: '',
      frist_n: '',
      last_n: '',
      swi2Fa: false,
      num_secury: 0,
      colorxChangePass:"#def1d1",
      popupActiveChangePass: false,
      popupActive2FA: false,
      // Data Sidebar
      SidebarHSSetting: false,
      sidebarDataSetting: {},
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      }
    }
  },
//   filters: {
//     currencydecimal (val) {
//       if(val == 'BTC') return val.toFixed(6)
//       if(val == 'ETH') return val.toFixed(4)
//       return val.toFixed(2)
//     }
//   },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
  },
  mounted() {
    
  },
  methods: {

    closeGG2FA() {
        if(!getData.c2fa){
          this.swi2Fa = false
        }else{
          this.swi2Fa = true
        }
    },

    showHoSoSetting(){
      this.toggleDataSidebar(true)
    },

    toggleDataSidebar(val=false) {
      this.SidebarHSSetting = val
    },


    logOutUser(){
        localStorage.removeItem('tokenUser');
        localStorage.removeItem('INFO');
        getData.Notify = 0;
        localStorage.removeItem('stateOpen');

        window.location.href = window.location.origin + '/login'
    },


    ChangeNewPass(){
      this.disableChangePass = true

      if(this.passOld == '' || this.passNew == '' || this.passRenew == ''){
        return this.$vs.notify({
            text: 'Mật khẩu không được rỗng.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning',
            position:'top-right'
        });
      }

      if(this.passNew != this.passRenew){
        return this.$vs.notify({
            text: 'Mật khẩu mới của bạn không khớp.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning',
            position:'top-right'
        });
      }

      let obj = {
          email: this.email,
          passOld: this.passOld,
          password: this.passNew,
          code_secure: this.num_secury
      }

      AuthenticationService.changePassword2(obj)
      .then((res) => {
          this.disableChangePass = false
          if(res.data.success == 1){
              return this.$vs.notify({
                  text: 'Mật khẩu đã được đổi thành công.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  position:'top-right',
                  color: 'success'
              });
          }else if(res.data.success == 0){
              return this.$vs.notify({
                  text: 'Mật khẩu cũ không đúng.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  position:'top-right',
                  color: 'danger'
              });
          }else if(res.data.success == 3){
              return this.$vs.notify({
                  text: 'Mật khẩu đổi thất bại.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  position:'top-right',
                  color: 'danger'
              });
          }
      })

    },


    on2FA(){

      this.swi2Fa ? this.swi2Fa = false : this.swi2Fa = true

        // bật 2Fa
      this.popupActive2FA = true

    },

    update_avatar(file){
            //evt.preventDefault()
         
            this.urlPassFront = URL.createObjectURL(file[0]);
            

            const formData = new FormData();
            formData.append("image", file[0])
            formData.append("nick", getData.displayName)

            AuthenticationService.uploadAvatar(formData)
            .then((res) => {
                if(res.data.success){
                    return this.$vs.notify({
                        text: 'Ảnh đại diện thay đổi thành công.',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position:'top-right',
                        color: 'success'
                    });
                }
            })
    }

  },

  created() {

    this.nickName = getData.displayName
    this.avatar = getData.profile_image
    this.email = getData.email
    this.frist_n = getData.first_name
    this.last_n = getData.last_name

    this.swi2Fa = getData.c2fa

    this.num_secury = getData.num_secu

  
  },
  
}
</script>

<style lang="scss" scoped>
.pro-c-avatar__content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.pro-c-avatar_size_extra-large .pro-c-avatar__placeholder {
    padding: 1rem;
}
.pro-c-avatar__placeholder {
    fill: currentColor;
    box-sizing: border-box;
    height: 100%;
    padding: .5rem;
    width: 100%;
}
.vs-sidebar--background{
    background: rgba(0, 0, 0, 0.5);
}
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>

<style>

.theme-dark .con-vs-dialog .vs-dialog input,
.theme-dark .con-vs-dialog .vs-dialog .vs-con-textarea{
  background: transparent;
}

.vs-dialog{
  max-width: 600px !important;
}

.con-vs-dialog {
  z-index: 99999;
}
</style>
