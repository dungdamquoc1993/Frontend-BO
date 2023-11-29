<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Ares
  Author URL: 
========================================================================================== -->


<template>
  <vs-sidebar click-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>NẠP TIỀN</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <!-- <vs-divider class="mb-0"></vs-divider> -->

    <VuePerfectScrollbar style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px);" class="scroll-area--data-list-add-new">
      
      <div class="p-4" v-if="!isNap">
            <vx-card
                subtitle="Số tiền nạp" class="mb-5 mt-5">
                <div class="vx-row mb-3">
                    <div class="vx-col w-full">
                        <vs-input icon-pack="feather" icon="icon-dollar-sign" placeholder="10" v-model="amountNap" class="is-label-placeholder w-full" />    
                    </div>
                </div>
            </vx-card>
            <vx-card
                subtitle="Phương thức thanh toán" class="mb-5">
                <div class="vx-row mb-3">
                    <div class="vx-col w-full">
                        <div class="imgShow" style="position: absolute;right: 100px;">
                            <img width="35" :src="require('@/assets/images/sky/icon_bank/paypal-mini.png')">
                        </div>
                        <vs-collapse>
                            <vs-collapse-item class="p-0">
                              <div slot="header" class="p-0">Paypal</div>
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
                                <!-- <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2" width="25" height="25" :src="require('@/assets/images/sky/icon_bank/tether-mini.svg')"> Tether (ERC-20)
                                </a> -->
                                <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2" width="25" height="25" :src="require('@/assets/images/sky/icon_bank/paypal-mini.png')"> Paypal
                                </a>
                                <!-- <a class="flex mt-2 mb-2" href="javascript:void(0);">
                                    <img class="mr-2"  width="25" height="25" :src="require('@/assets/images/sky/icon_bank/ethereum-mini.svg')"> Ethereum
                                </a> -->
                            </vs-collapse-item>
                        </vs-collapse>
                    </div>
                </div>
            </vx-card>
            <vs-button color="success" type="border" class="mt-2 w-full"  @click="NapTien">Nạp</vs-button>
      </div>
      <div class="p-4" v-else>
           <h1>Đang thực hiện thanh toán</h1>
           <p class="p-3">Có 1 cửa sổ Popup sẽ được bật lên, vui lòng thánh toán để hoàn thành.</p>
           <i>Lưu ý: </i> Nếu bạn không thấy của sổ Popup bật lên xin vui lòng vào trình duyệt Cài đặt -> bỏ chặn Cửa sổ bật lên
      </div>

    </VuePerfectScrollbar>
    <div class="flex flex-wrap items-center p-6" slot="footer" style="color: #828282;font-size: 11px;">
        <span>
            Khi gửi tiền bằng thẻ ngân hàng, số tiền bị trừ đi từ thẻ sẽ được tính theo tỷ giá hối đoái của ngân hàng khách hàng.
        </span>
        <span>
            Bạn không thể rút tiền thưởng về, nhưng có thể sử dụng chúng để giao dịch và rút tiền lãi. Tiền thưởng không ảnh hưởng đến việc rút tiền.
        </span>
    </div>
  </vs-sidebar>
  
  
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import HoSoSetting from '@/pages/trade/slidebar/HoSoSetting.vue'
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
        isNap: false,
        amountNap: 10,
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

    getOnlyNumberInString(t) {
        let e = t.match(/\d+/g)
        return e ? Number(e.join("")) : 0
    },

    NapTien(){
      let a = this.getOnlyNumberInString(this.amountNap.toString())

      if(a <= 9){
        return this.$vs.notify({
            text: 'Số tiền nạp tối thiểu là $10.',
            iconPack: 'feather',
            icon: 'icon-check',
            position:'top-right',
            color: 'danger'
        });
      }

      let obj = {
          a: a,
          n: getData.displayName,
      }

      this.isNap = true

      AuthenticationService.depositPaypal(obj)
      .then((res) => {
          if(res.data.success){
            this.$vs.notify({
                text: 'Vui lòng hoàn thành các bước để nạp tiền.',
                iconPack: 'feather',
                icon: 'icon-check',
                position:'top-right',
                color: 'success'
            });
            setTimeout(() =>{
                this.isNap = false
            }, 30000)
            window.open(res.data.link);
          }else{
           
          }
      })
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
  components: {
    VuePerfectScrollbar,
    HoSoSetting
  }
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
