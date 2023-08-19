<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Đức Nguyễn
  Author Telegram:  @skydnz
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4 v-if="dataType == 'addMoney'">CỘNG TIỀN TÀI KHOẢN</h4>
        <h4 v-else>{{ Object.entries(this.data).length === 0 ? "THÊM MỚI" : "CẬP NHẬT" }} TÀI KHOẢN</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px);" v-if="dataType != 'addMoney'" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">

        <!-- Product Image -->
        <template v-if="dataImg">

          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="`${dm}api/auth/me/photo/${dataImg}`" width="100" alt="img">
          </div>

          <!-- Image upload Buttons -->
          <!--<div class="modify-img flex justify-between mt-5">
            <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Cập nhật hình ảnh</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Xóa hình ảnh</vs-button>
          </div> -->
        </template>

        <!-- EMAIL -->
        <vs-input label="Hộp thư" v-model="dataEmail" class="mt-5 w-full" type="email" name="item-email" v-validate="'required|email|min:6|max:200'" />
        <span class="text-danger text-sm" v-show="errors.has('item-email')">{{ errors.first('item-email') }}</span>

        <!-- NICKNAME -->
        <vs-input label="Biệt danh" v-model="dataNick" class="mt-5 w-full" name="item-nick" v-validate="'required|min:6|max:20'" />
        <span class="text-danger text-sm" v-show="errors.has('item-nick')">{{ errors.first('item-nick') }}</span>


        <!-- NAME -->
        <vs-input label="Họ" v-model="dataFirstName" class="mt-5 w-full" name="item-first_name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-first_name')">{{ errors.first('item-first_name') }}</span>

        <vs-input label="Tên" v-model="dataLastName" class="mt-5 w-full" name="item-last_name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-last_name')">{{ errors.first('item-last_name') }}</span>

        <!-- PASSWORD -->
        <vs-input
            ref="password"
            type="password"
            data-vv-validate-on="blur"
            v-validate="'min:6|max:16'"
            name="password"
            label="Mật khẩu"
            v-model="dataPassword"
            class="mt-5 w-full" />

        <!-- WALLET -->
        <!-- <vs-input disabled  
            label="Ví VNĐ"
            icon-pack="feather"
            icon="icon-dollar-sign"
            v-model="dataMoneyVN"
            class="mt-5 w-full"
            v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
            name="item-wallet_sys" />
        <span class="text-danger text-sm" v-show="errors.has('item-wallet_sys')">{{ errors.first('item-wallet_sys') }}</span>

        <vs-input disabled 
            label="Ví BTC"
            icon-pack="feather"
            icon="icon-dollar-sign"
            v-model="dataMoneyBTC"
            class="mt-5 w-full"
            v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
            name="item-wallet_btc" />
        <span class="text-danger text-sm" v-show="errors.has('item-wallet_btc')">{{ errors.first('item-wallet_btc') }}</span>

        <vs-input disabled 
            label="Ví ETH"
            icon-pack="feather"
            icon="icon-dollar-sign"
            v-model="dataMoneyETH"
            class="mt-5 w-full"
            v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
            name="item-wallet_eth" />
        <span class="text-danger text-sm" v-show="errors.has('item-wallet_eth')">{{ errors.first('item-wallet_eth') }}</span>

        <vs-input disabled 
            label="Ví USDT"
            icon-pack="feather"
            icon="icon-dollar-sign"
            v-model="dataMoneyUSDT"
            class="mt-5 w-full"
            v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
            name="item-wallet_usdt" />
        <span class="text-danger text-sm" v-show="errors.has('item-wallet_usdt')">{{ errors.first('item-wallet_usdt') }}</span>
        -->

        <!-- CATEGORY -->
        <template v-if="superUser == 1">
            <p class="mt-2">Bạn không thể sửa Quyền của chính bạn</p>
        </template>
        <template v-else>
            <vs-select v-model="dataPermission" label="Quyền" class="mt-5 w-full" name="item-category" v-validate="'required'">
            <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in category_choices" />
            </vs-select>
            <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span>

            <vs-select v-if="dataPermission" v-model="isLevelVIP" label="Cấp" class="mt-5 w-full" name="item-category" v-validate="'required'">
            <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in category_level" />
            </vs-select>
            
        </template>

        <!-- ORDER STATUS -->
        <!-- <vs-select v-model="dataOrder_status" label="Trạng thái 2FA" class="mt-5 w-full">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in order_status_choices" />
        </vs-select> -->

        <!-- PRICE -->
        <!-- <vs-input
          icon-pack="feather"
          icon="icon-dollar-sign"
          label="Price"
          v-model="dataPrice"
          class="mt-5 w-full"
          v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
          name="item-price" />
        <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span> -->

        <!-- Upload -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

        <!-- <div class="upload-img mt-5" v-if="!dataImg">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">Cập nhật hình ảnh</vs-button>
        </div> -->

        <div class="flex flex-wrap items-center p-6" slot="footer">
          <vs-button class="mr-6" @click="submitDataUpdateUser" :disabled="!isFormValid">Gửi</vs-button>
          <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Hủy</vs-button>
        </div>

      </div>

      
    </VuePerfectScrollbar>

    
    <VuePerfectScrollbar v-else  style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px);" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6" >
          <span class="mb-10">
            {{ dataEmail }}
          </span>
          <!-- WALLET -->
          <vs-input 
              label="Ví VNĐ"
              icon-pack="feather"
              icon="icon-dollar-sign"
              class="mt-5 w-full"
              v-model="addDataMoneyVN"
              v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
              name="item-wallet_vn" />
          <span class="text-danger text-sm" v-show="errors.has('item-wallet_vn')">{{ errors.first('item-wallet_vn') }}</span>

          <vs-input 
              label="Ví BTC"
              icon-pack="feather"
              icon="icon-dollar-sign"
              class="mt-5 w-full"
              v-model="addDataMoneyBTC"
              v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
               />
         
          <vs-input 
              label="Ví ETH"
              icon-pack="feather"
              icon="icon-dollar-sign"
              class="mt-5 w-full"
              v-model="addDataMoneyETH"
              v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
              />
          
          <vs-input 
              label="Ví USDT"
              icon-pack="feather"
              icon="icon-dollar-sign"
              class="mt-5 w-full"
              v-model="addDataMoneyUSDT"
              v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
               />
          

          <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="submitDataUpdateMoney" :disabled="!isFormValid">Gửi</vs-button>
            <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Hủy</vs-button>
          </div>
      </div>
      
    </VuePerfectScrollbar>
    
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AuthenticationService from '@/services/AuthenticationService'
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
  watch: {
    isSidebarActive(val) {
      if(!val) return
      if(Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      }else {
        let { email, id, nick_name, first_name, last_name, money_vn, money_btc, money_eth, money_usdt, profile_image, type, vip_user, super_user, level_vip } = JSON.parse(JSON.stringify(this.data))
   
        this.dataId = id
        this.dataEmail = email
        this.dataNick = nick_name
        this.dataFirstName = first_name
        this.dataLastName = last_name
        this.dataMoneyVN = money_vn
        this.dataMoneyBTC = this.formatPrice(money_btc, 6)
        this.dataMoneyETH = this.formatPrice(money_eth, 4)
        this.dataMoneyUSDT = this.formatPrice(money_usdt, 2)
        this.dataImg = profile_image
        this.dataPassword = ''
        this.dataPermission = vip_user 
        this.superUser = super_user
        this.dataType = type
        this.addDataMoneyVN = 0
        this.addDataMoneyBTC = this.formatPrice(0, 6)
        this.addDataMoneyETH = this.formatPrice(0, 4)
        this.addDataMoneyUSDT = this.formatPrice(0, 2)
        this.isLevelVIP = level_vip;
        this.initValues()
      }
    }
  },
  data() {
    return {
        dm: SETTINGS.BASE_URL,

        superUser: 0,

        dataId: null,
        dataEmail: '',
        dataNick: '',
        dataFirstName: '',
        dataLastName: '',
        dataMoneyVN: 0,
        dataMoneyBTC: 0,
        dataMoneyETH: 0,
        dataMoneyUSDT: 0,
        dataImg: null,
        dataPassword: '',
        dataPermission: 0,
        dataType: null,
        addDataMoneyVN: 0,
        addDataMoneyBTC: 0,
        addDataMoneyETH: 0,
        addDataMoneyUSDT: 0,

      category_choices: [
        //{text:'Quản trị viên',value: 1},
        {text:'Đại lý ( VIP )', value: 1},
        {text:'Thành viên', value: 0}
      ],

      category_level: [
        {text:'Cấp 0', value: 0},
        {text:'Cấp 1', value: 1},
        {text:'Cấp 2', value: 2},
        {text:'Cấp 3', value: 3},
        {text:'Cấp 4', value: 4},
        {text:'Cấp 5', value: 5},
        {text:'Cấp 6', value: 6},
        {text:'Cấp 7', value: 7}
      ],

      isLevelVIP: 0,

      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
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
    isFormValid() {
        if(this.dataType != 'addMoney'){
            return !this.errors.any() && this.dataEmail && this.dataNick && this.dataFirstName && this.dataLastName
        }else{
            return (this.addDataMoneyVN >= 0) && (this.addDataMoneyBTC >= 0) && (this.addDataMoneyETH >= 0) && (this.addDataMoneyUSDT >= 0)
        }
      //return !this.errors.any() && this.dataName && this.dataCategory && (this.dataPrice > 0)
    }
  },
  methods: {
    formatPrice(value, minimum) {
        var formatter = new Intl.NumberFormat('en-US', {
            //style: 'currency',
            //currency: '',
            minimumFractionDigits: minimum
        });
        return formatter.format(value);
    },
    initValues() {
      if(this.data.id) return
        this.dataId = null
        this.dataEmail = ''
        this.dataNick = ''
        this.dataFirstName = ''
        this.dataLastName = ''
        this.dataMoneyVN = 0
        this.dataMoneyBTC = 0
        this.dataMoneyETH = 0
        this.dataMoneyUSDT = 0
        this.superUser = 0
        this.dataImg = null
        this.dataPassword = ''
        this.dataPermission = 0
        this.dataType = null
        this.addDataMoneyVN = 0
        this.addDataMoneyBTC = 0
        this.addDataMoneyETH = 0
        this.addDataMoneyUSDT = 0
    },
    submitDataUpdateMoney(){
        const obj = {
            id: this.dataId,
            nick_name: this.dataNick,
            email: this.dataEmail,
            type: 1, // 1: marketing, 0: member
            money_paypal: 0,
            money_btc: this.addDataMoneyBTC,
            money_eth: this.addDataMoneyETH,
            money_usdt: this.addDataMoneyUSDT, 
            money_vn:  this.addDataMoneyVN,
          }
        AuthenticationService.updatePriceMember(obj)
        .then((resp) => {
            if(resp.data.success){
              return this.$vs.notify({
                  text:'Đã cộng tiền thành công cho '+ this.dataNick,
                  color:'success',
                  iconPack: 'feather',
                  icon:'icon-check'});
              }else{
                if(!resp.data.l){
                  return this.$vs.notify({
                    text: 'Thời gian đăng nhập đã hết, vui lòng đăng nhập lại để sử dụng',
                    color:'danger',
                    iconPack: 'feather',
                    icon:'icon-alert-circle'});
                }
                return this.$vs.notify({
                  text: resp.data.message,
                  color:'danger',
                  iconPack: 'feather',
                  icon:'icon-alert-circle'});
              }
        })
    },
    submitDataUpdateUser() {
      this.$validator.validateAll().then(result => {
        if (result) {
            const obj = {
              id: this.dataId,
              nick_name: this.dataNick,
              first_name: this.dataFirstName,
              last_name: this.dataLastName,
              email: this.dataEmail,
              vip_user: this.dataPermission,
              level_vip: this.isLevelVIP,
              active: 1
            }
            if(this.dataPassword != ''){
              obj.password = this.dataPassword
            }
            // thêm mới tài khoản
            if(Object.entries(this.data).length == 0){
                AuthenticationService.checkEmail(this.dataEmail)
                .then((resp) => {
                  if(resp.data.success){
                      return this.$vs.notify({
                        text: 'Email này đã tồn tại',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-circle'});
                  }else{
                     AuthenticationService.createUser(obj)
                        .then((resp) => {
                          if(resp.data.success){
                            return this.$vs.notify({
                                title: this.dataEmail,
                                text:'Bạn đã tạo thành công',
                                color:'success',
                                iconPack: 'feather',
                                icon:'icon-check'});
                            }else{
                              return this.$vs.notify({
                                text: resp.data.message,
                                color:'danger',
                                iconPack: 'feather',
                                icon:'icon-alert-circle'});
                            }
                      })
                  }
                });
               
            }else{ // cập nhật tài khoản
                AuthenticationService.updateMember(obj)
                .then((resp) => {
                  if(resp.data.success){
                    return this.$vs.notify({
                        text:'Đã cập nhập thông tin thành công cho '+ this.dataNick,
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check'});
                    }else{
                      return this.$vs.notify({
                        text: resp.data.message,
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-circle'});
                    }
              })
            }
            
        }
          
      })
      
    //   this.$validator.validateAll().then(result => {
    //       if (result) {
    //         const obj = {
    //           id: this.dataId,
    //           name: this.dataName,
    //           img: this.dataImg,
    //           category: this.dataCategory,
    //           order_status: this.dataOrder_status,
    //           price: this.dataPrice
    //         }

    //         if(this.dataId !== null && this.dataId >= 0) {
    //           this.$store.dispatch("dataList/updateItem", obj).catch(err => { console.error(err) })
    //         }else{
    //           delete obj.id
    //           obj.popularity = 0
    //           this.$store.dispatch("dataList/addItem", obj).catch(err => { console.error(err) })
    //         }

    //         this.$emit('closeSidebar')
    //         this.initValues()
    //       }
    //   })
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
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
