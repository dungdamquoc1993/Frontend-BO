<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Đức Nguyễn
  Author URL: 
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>RÚT TIỀN</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <!-- <vs-divider class="mb-0"></vs-divider> -->

    <VuePerfectScrollbar style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px);" class="scroll-area--data-list-add-new">
      
      <div class="p-4">
            <vx-card
                subtitle="Phương thức thanh toán" class="mb-5">
                <div class="vx-row mb-3">
                    <div class="vx-col w-full">
                        <div class="imgShow absolute" style="right: 100px;">
                            <img width="35" :src="require('@/assets/images/sky/icon_bank/tether-mini.svg')">
                        </div>
                        <vs-collapse>
                            <vs-collapse-item class="p-0">
                            <div slot="header" class="p-0">Tether (ERC-20)</div>
                                <!-- <h6 class="mt-1 mb-1" style="color: #778db9; font-size: 12px;">ĐƯỢC ĐỀ NGHỊ</h6>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2" width="25" height="25" :src="require('@/assets/images/sky/icon_bank/vcb-mini.svg')"> Vietcombank
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/vtb-mini.svg')"> VietinBank
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/momo_wallet-mini.svg')"> Momo
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/tcb-mini.svg')"> Techcombank
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/sacom-mini.svg')"> Sacombank
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/dab-mini.svg')"> DongA Bank
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/card-mini.svg')"> Thẻ ngân hàng
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/perfect_money-mini.svg')"> Perfect Money
                                </a>
                                <h6 class="mt-1 mb-1" style="color: #778db9; font-size: 12px;">THẺ NGÂN HÀNG</h6>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/cup-mini.svg')"> China UnionPay
                                </a>
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/jcb-mini.svg')"> JCB
                                </a> -->
                                <h6 class="mt-1 mb-1" style="color: #778db9; font-size: 12px;">VÍ ĐIỆN TỬ</h6>
                                <!-- <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/bitcoin-mini.svg')"> Bitcoin
                                </a> -->
                                <a class="flex mt-2 mb-2" href="javascript:void(0);" @click="selectWallet('usdt')">
                                    <img class="mr-2" width="25" height="25" :src="require('@/assets/images/sky/icon_bank/tether-mini.svg')"> Tether (ERC-20)
                                </a>
                                <!-- <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/ethereum-mini.svg')"> Ethereum
                                </a> -->
                        </vs-collapse-item>
                        </vs-collapse>
                    </div>
                </div>
            </vx-card>
            <vs-tabs class="mb-5 mt-5" alignment="fixed">
              <vs-tab label="Nội bộ" @click="withDefault = false">
                <div>
                  <label class="flex mt-3 mb-3">Phí: 8 USDT</label>
                  <div class="centerx default-input relative mt-6">
                    <span class="title z-10 absolute text-xs">Giá trị USDT</span>
                    <vs-input size="large" class="inputx w-full" placeholder="Số tiền tối thiểu: 5 USDT" v-model="amountRutNB" />
                    <span class="allmax absolute cursor-pointer" @click="enterAllPriceNB">Tất cả</span>
                  </div>
                  <div class="centerx default-input relative mt-6">
                    <span class="title z-10 absolute text-xs">Biệt danh người nhận</span>
                    <vs-input size="large" class="inputx w-full" placeholder="Biệt danh người nhận" v-model="nickNameNB" />
                  </div>
                  <div class="centerx default-input relative mt-6">
                    <span class="title z-10 absolute text-xs">Ghi chú ( không bắt buộc )</span>
                    <vs-input size="large" class="inputx w-full" placeholder="Nhập ghi chú của bạn" v-model="noteForU" />
                    <!-- <span class="paste absolute cursor-pointer" @click="pastText">Dán</span> -->
                  </div>
                </div>
              </vs-tab>
              <vs-tab label="ERC-20" @click="withDefault = true">
                <div>
                  <label class="flex mt-3 mb-3">Phí: 25.8 USDT</label>
                  <div class="centerx default-input relative mt-6">
                    <span class="title z-10 absolute text-xs">Giá trị USDT</span>
                    <vs-input size="large" class="inputx w-full" placeholder="Số tiền tối thiểu: 5 USDT" v-model="amountRutUSDT" />
                    <span class="allmax absolute cursor-pointer" @click="enterAllPriceUSDT">Tất cả</span>
                  </div>
                  <div class="centerx default-input relative mt-6">
                    <span class="title z-10 absolute text-xs">Địa chỉ người nhận</span>
                    <vs-input size="large" class="inputx w-full" placeholder="Địa chỉ người nhận" v-model="addressUSDT" />
                  </div>
                  <div class="centerx default-input relative mt-6">
                    <span class="title z-10 absolute text-xs">Ghi chú ( không bắt buộc )</span>
                    <vs-input size="large" class="inputx w-full" placeholder="Nhập ghi chú của bạn" v-model="noteForUSDT" />
                    <!-- <span class="paste absolute cursor-pointer" @click="pastText">Dán</span> -->
                  </div>
                </div>
              </vs-tab>
              <!--<vs-tab label="BEP20 (BSC)">
                <div></div>
              </vs-tab> -->
          </vs-tabs>
      </div>

    </VuePerfectScrollbar>
    <div class="flex flex-wrap items-center p-6" slot="footer">
        <!-- <span class="text-center block w-full text-xs italic">Bạn phải bật 2FA để yêu cầu rút tiền</span> -->
        <!-- disabled -->
        <vs-button class="mt-5 w-full" color="danger" type="border" icon-pack="feather" icon="icon-send" @click="Withdrawal">Gửi</vs-button>
    </div>
  </vs-sidebar>
  
  
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AuthenticationService from '@/services/AuthenticationService'
import getData from '@/pages/trade/navbar/components/data.json'

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
    // isSidebarActive(val) {
    //   if(!val) return
    //   if(Object.entries(this.data).length === 0) {
    //     //this.initValues()
    //     this.$validator.reset()
    //   }else {
    //     let { token } = JSON.parse(JSON.stringify(this.data))
    //     this.token = token
    //     //this.initValues()
    //   }
    //   // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    // }
  },
  data() {
    return {
        walletName: 'usdt',
        blObj: getData,
        withDefault: false,
        nickNameNB: '',
        noteForU: '',
        noteForUSDT: '',
        amountRutNB: '',
        amountRutUSDT: '',
        addressUSDT: '',
        colorxChangePass:"#def1d1",
        popupActiveChangePass: false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
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
  methods: {
    selectWallet(val){
      this.walletName = val
    },

    enterAllPriceNB(){
      this.amountRutNB = this.blObj.balance
    },

    enterAllPriceUSDT(){
      this.amountRutUSDT = this.blObj.balance
    },

    isNumber(value){
        return typeof value === 'number' && isFinite(value);
    },

    
    replaceAll(str, find, replace) {
        return Number(str.replace(new RegExp(find, 'g'), replace));
    },

    Withdrawal(){

        if(!this.withDefault){

          if(this.amountRutNB == '' || this.nickNameNB == ''){
            return this.$vs.notify({
                      text: 'Các trường không được rỗng.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
          }

          let amount = this.amountRutNB.toString()
          amount = this.replaceAll(amount, ',', '')
          amount = this.replaceAll(amount.toString(), '-', '')
          
          if(!this.isNumber(amount) || amount <= 0){
              return this.$vs.notify({
                  text:'Giá trị không hợp lệ',
                  color:'danger',
                  position:'top-right',
                  iconPack: 'feather',
                  icon:'icon-x-circle'})
          }

          // rút tiền nôi bộ
            let obj = {
                amS: amount,
                nick: this.nickNameNB,
                gc: this.noteForU,
                //w: this.walletName
            }

            let phi = 8
            let tongphi = amount + phi
            if(this.blObj.blLive < tongphi){
                return this.$vs.notify({
                      text: 'Số dư không đủ.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
            }

            if(amount < 5){
              return this.$vs.notify({
                      text: 'Số tiền rút tối thiểu là 5.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
            }


            AuthenticationService.withdrawalUser(obj)
            .then((res) => {
                if(res.data.success){

                  this.blObj.balance = this.blObj.balance - tongphi

                  return this.$vs.notify({
                      text: 'Rút tiền thành công.',
                      iconPack: 'feather',
                      icon: 'icon-check',
                      color: 'success',
                      position:'top-right',
                  });
                }else{
                  return this.$vs.notify({
                      text: 'Số dư không đủ.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
                }
            })
          
        }else{

            let amount = this.amountRutUSDT.toString()
            amount = this.replaceAll(amount, ',', '')
            amount = this.replaceAll(amount.toString(), '-', '')
            
            if(!this.isNumber(amount) || amount <= 0){
                return this.$vs.notify({
                    text:'Giá trị không hợp lệ',
                    color:'danger',
                    position:'top-right',
                    iconPack: 'feather',
                    icon:'icon-x-circle'})
            }

            if(this.amountRutUSDT == '' || this.addressUSDT == ''){
              return this.$vs.notify({
                        text: 'Các trường không được rỗng.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
            }
            
            let obj = {
                amS: amount,
                address: this.addressUSDT,
                gc: this.noteForUSDT,
               // w: this.walletName
            }

            let phi = 8
            let tongphi = amount + phi
            if(this.blObj.blLive < tongphi){
                return this.$vs.notify({
                      text: 'Số dư không đủ.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
            }

            if(amount < 5){
              return this.$vs.notify({
                      text: 'Số tiền rút tối thiểu là 5.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
            }

            AuthenticationService.withdrawalUsdt(obj)
            .then((res) => {
              if(res.data.success){
                
                  this.blObj.balance = this.blObj.balance - tongphi

                  return this.$vs.notify({
                      text: 'Rút tiền thành công.',
                      iconPack: 'feather',
                      icon: 'icon-check',
                      color: 'success',
                      position:'top-right',
                  });
                }else{
                  return this.$vs.notify({
                      text: 'Số dư không đủ.',
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
                }
            })
        }
    },
  
    showHoSoSetting(data){
      let id = data
      console.log(id)
      this.toggleDataSidebar(true)
    },

    toggleDataSidebar(val=false) {
      this.SidebarHSSetting = val
    },
  },
  created() {
    
      
  },
  components: {
    VuePerfectScrollbar
  }
}
</script>

<style lang="scss" scoped>
.title{
  background: #02142b; 
  left: 20px;
  top: -8px;
  padding: 0 5px;
}
.paste, .allmax {
    top: 10px;
    right: 20px;
    padding: 5px;
    background: #4e6884;
    color: #fff;
    border-radius: 5px;
}
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

.vx-card{
    background-color: #02142b;
    border: 1px solid #b3b3b3;
}
</style>
<style>
.vx-card .vx-card__collapsible-content .vx-card__body{
    padding: 0rem 1.5rem;
 }
.vx-card .vs-con-input-label.is-label-placeholder{
    margin-top: 5px;
}
.vx-card .vx-card__header{
    padding: 1rem 1.5rem 0;
}
.vx-card input{
    background: transparent;
}
.vx-card .con-content--item a{
    color: #d0d0d0
}
.vx-card .vs-collapse-item--header{
    padding: 0rem;
}
</style>
