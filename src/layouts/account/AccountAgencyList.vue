<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div id="list-agency-account" class="data-list-container">

    <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
        <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
        <v-select v-model="selectedFormat" :options="formats" class="my-4" />
        <div class="flex">
          <span class="mr-4">Cell Auto Width:</span>
          <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
        </div>
    </vs-prompt>

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <div id="loading-corners" class="vs-con-loading__container">

      <vs-table ref="table" multiple v-model="selectedUser" pagination :max-items="itemsPerPage" search :data="products">

        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

          <div class="flex flex-wrap-reverse items-center data-list-btn-container">

            <!-- ACTION - DROPDOWN -->
            <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

              <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
                <span class="mr-2">Tác vụ</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>

              <vs-dropdown-menu>

                <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Xóa</span>
                  </span>
                </vs-dropdown-item>

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Archive</span>
                  </span>
                </vs-dropdown-item> -->

                <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span @click="activePrompt=true">In</span>
                  </span>
                </vs-dropdown-item>
                

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Another Action</span>
                  </span>
                </vs-dropdown-item> -->

              </vs-dropdown-menu>
            </vs-dropdown>

            <!-- ADD NEW -->
            <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewAccount">
                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-primary">Tạo tài khoản</span>
            </div>
          </div>

          <!-- ITEMS PER PAGE -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ products.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : products.length }} of {{ queriedItems }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>

              <vs-dropdown-item @click="itemsPerPage=4">
                <span>4</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=10">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=15">
                <span>15</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=20">
                <span>20</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <template slot="thead">
          <vs-th sort-key="email">Email</vs-th>
          <vs-th sort-key="nickname">Tên</vs-th>
          <vs-th sort-key="wallet">Ví</vs-th>
          <vs-th sort-key="memberForAgency">Tổng thành viên</vs-th>
          <vs-th sort-key="pending_commission">Tổng Hoa Hồng</vs-th>
          <vs-th sort-key="secury2fa">Bảo mật 2FA</vs-th>
          <vs-th>Tác vụ</vs-th>
        </template>

          <template slot-scope="{data}">
            <tbody>
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                  <vs-td>
                      <p class="agency-name font-medium truncate">{{ tr.email }}</p>
                      <p>
                          <!--Địa chỉ BTC: <span style="color: #f8a037" @click="clickGetAddress(tr.address_BTC, tr.privateKey_BTC, tr.wif_BTC)">{{ tr.address_BTC }}</span><br>
                          Địa chỉ ETH: <span style="color: #627eea" @click="clickGetAddress(tr.address_ETH, tr.privateKey_ETH, '')">{{ tr.address_ETH }}</span><br>-->
                          Địa chỉ USDT: <span style="color: #26a17b" @click="clickGetAddress(tr.address_USDT, tr.privateKey_USDT, '')">{{ tr.address_USDT }}</span>
                          <br>
                          *** Tổng CHƠI: <span class="italic" style="color: #ff9900">${{ formatPrice(tr.pricePlay, 2) }}</span><br>
                          *** Tổng THẮNG: <span class="italic" style="color: #10ff00">${{ formatPrice(tr.priceWin, 2) }}</span><br>
                          *** Tổng THUA: <span class="italic" style="color: #ff5c5c">${{ formatPrice(tr.priceLose, 2) }}</span><br>
                           *** Lời: <span class="italic font-bold" style="color: #00ff89">${{ formatPrice(tr.priceWin - tr.priceLose, 2) }}</span><br>
                      </p>
                  </vs-td>

                <vs-td>
                  <p class="agency-name font-medium truncate">{{ tr.first_name }}<br>Biệt danh: {{ tr.nick_name }}</p>
                </vs-td>

                <vs-td>
                  <p class="user-price"><img width="20" :src="require('@/assets/images/sky/ic_vnd.png')"> {{ tr.money_vn }} đ<br>
                  <IconCrypto style="width: 20px" coinname="BTC" color="color" format="svg" /> ${{ formatPrice(tr.money_btc, 6) }}<br>
                  <IconCrypto style="width: 20px" coinname="ETH" color="color" format="svg" /> ${{ formatPrice(tr.money_eth, 4) }}<br>
                  <IconCrypto style="width: 20px" coinname="USDT" color="color" format="svg" /> ${{ formatPrice(tr.money_usdt, 2) }}<br>
                  <img width="20" :src="require('@/assets/images/sky/icon_bank/paypal-mini.png')">${{ formatPrice(tr.money_paypal, 2) }}
                  </p>
                </vs-td>

                <vs-td>
                  <p class="agency-total-member" v-if="!tr.sponsor" >
                    <vx-tooltip style="float: left" :title="tr.nick_name" color="success" text="Xem tổng thành viên">
                          <vs-button color="dark" type="line" icon-pack="feather" icon="icon-eye" @click.stop="viewPeopelAgency(tr.ref_code, indextr)">Xem</vs-button>
                    </vx-tooltip>
                  </p>
                  <p class="agency-total-member" v-else >
                      {{ tr.sponsor | k_formatter }}
                  </p>
                </vs-td>
                  
                <vs-td>
                  <p class="agency-commission">{{ formatPrice(tr.pending_commission, 2) }}</p>
                </vs-td>

                <vs-td>
                  <vs-chip :color="getOrderStatusColor(tr.active_2fa)" class="agency-status">{{ getOrderStatusColorText(tr.active_2fa) | title }}</vs-chip>
                </vs-td>

                <vs-td class="whitespace-no-wrap text-center">
                      <vx-tooltip style="float: left" :title="tr.nick_name" color="success" text="Cộng tiền vào tài khoản">
                          <vs-button color="dark" type="line" icon-pack="feather" icon="icon-dollar-sign" @click.stop="addMoneyUser(tr)"></vs-button>
                      </vx-tooltip>
                      <vx-tooltip style="float: left" :title="tr.nick_name" color="warning" text="Chỉnh sửa tài khoản">
                          <vs-button color="dark" type="line" icon-pack="feather" icon="icon-edit" @click.stop="editUser(tr)"></vs-button>
                      </vx-tooltip>
                      <vx-tooltip style="float: left" :title="tr.nick_name" color="danger" text="Xóa tài khoản">
                          <vs-button color="dark" type="line" icon-pack="feather" icon="icon-trash" @click="openPopDelete({id: tr.id, email: tr.email, index: indextr})"></vs-button>
                      </vx-tooltip>
                      
                      
                      

                    <!-- <feather-icon icon="DollarSignIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" @click.stop="addMoneyUser({id: tr.id, type: 'addMoney'})" />  
                    <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editUser(tr)" />
                    <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteUser(tr.id)" /> -->
                </vs-td>
              </vs-tr>
            </tbody>
          </template>
      </vs-table>

    </div>

    <vs-popup background-color="rgba(255,255,255,.6)" class="" title="Background" :active.sync="popupDeleteActive">
      <p> Bạn đồng ý xóa tài khoản {{ UserInfo.email }} này.</p>
      <vs-button icon="icon-trash" icon-pack="feather" type="gradient" @click.stop="deleteUser(UserInfo.id, UserInfo.index)">Đồng ý</vs-button>
    </vs-popup>
    <vs-popup title="Address Wallet" :active.sync="popupAdressWallet">
      <p>
          Address: {{ getAdress }} <feather-icon icon="CopyIcon" v-clipboard:copy="getAdress" v-clipboard:success="onCopy" class="cursor-pointer"></feather-icon><br> 
          Private Key: {{ getPrivateKey }} <feather-icon icon="CopyIcon" v-clipboard:copy="getPrivateKey" v-clipboard:success="onCopy" class="cursor-pointer"></feather-icon><br>
          WFI BTC Address: {{ getWfiKey }} <feather-icon icon="CopyIcon" v-clipboard:copy="getWfiKey" v-clipboard:success="onCopy" class="cursor-pointer"></feather-icon> 
      </p>
    </vs-popup>
  </div>
</template>

<script>
import DataViewSidebar from '@/layouts/account/slidebar/DataViewSidebar.vue'
import vSelect from 'vue-select'
import AuthenticationService from '@/services/AuthenticationService'
import Vue from 'vue'

export default {
  components: {
    DataViewSidebar,
    vSelect
  },
  data() {
    return {
      getAdress: '',
      getPrivateKey: '',
      getWfiKey: '',

      popupAdressWallet: false,

      UserInfo: {},
      popupDeleteActive: false,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats:["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Id", "Email", "Nick", "Ví", "Tổng thành viên", "Commission" ],
      headerVal: ["id", "email", "nickname", "wallet", "memberForAgency","pending_commission" ],
      productsFake: [
            {
              "id": 1,
              "email": "tesst@gmail.com",
              "nick_name": "SkyPlaza",
              "first_name": "Ares",
              "profile_image": "https://vi.vuejs.org/images/logo.png",
              "money_vn": 100.00,
              "money_btc": 0.000000,
              "money_eth": 0.0100,
              "money_usdt": 1.00,
              "money_paypal": 0.00,
              "manage_supers": 1,
              "pending_commission": 0.00,
              "active_2fa": 0,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 2,
              "email": "tesst@gmail.com",
              "nick_name": "SkyPlaza",
              "first_name": "Ares",
              "profile_image": "https://vi.vuejs.org/images/logo.png",
              "money_vn": 100.00,
              "money_btc": 0.000000,
              "money_eth": 0.0100,
              "money_usdt": 1.00,
              "money_paypal": 0.00,
              "manage_supers": 0,
              "pending_commission": 0.00,
              "active_2fa": 1,
              "created_at": "01:00:00 02-04-2021"
            },
        ],
      itemsPerPage: 10,
      isMounted: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    products() {
      return this.productsFake
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.productsFake.length
    }
  },
  methods: {
    clickGetAddress(a, p, w){
        this.popupAdressWallet = true
        if(w != '') {
          this.getWfiKey = w
        }else{
          this.getWfiKey = 'N/A'
        }
        this.getAdress = a 
        this.getPrivateKey = p 
    },

    onCopy() {
          this.$vs.notify({
              text: 'Đã sao chép vào bộ nhớ',
              color: 'success',
              iconPack: 'feather',
              position: 'top-center',
              icon: 'icon-check-circle'
          })
      },

    viewPeopelAgency(id, index){
      AuthenticationService.viewMemberAgency(id)
      .then((resq) => {
        if(resq.data.success){
          let num = resq.data.data[0].totalPeopel
          if(num == 0){
            this.productsFake[index].sponsor = 'Chưa có thành viên'
          }else{
            this.productsFake[index].sponsor = this.formatPrice(num ,0)
          }
          
        }
      })
    }, 
    deleteMultiple(){ // ko trigger
      for(var i = this.selectedUser.length - 1; i >= 0 ;i--){
          let id = this.selectedUser[i]['id'];
          AuthenticationService.deleteMember(id)
          Vue.delete(this.productsFake, i)
      }
      this.selectedUser = []
      return this.$vs.notify({
          text:'Đã xóa thành công',
          color:'success',
          iconPack: 'feather',
          icon:'icon-check'});
    },
    openPopDelete(data){
      this.UserInfo = data
      this.popupDeleteActive = true
    },
    deleteUser(id, index) {
      
      AuthenticationService.deleteMember(id)
        .then((resp) => {
          if(resp.data.success){
              Vue.delete(this.productsFake, index)
              this.popupDeleteActive = false
              return this.$vs.notify({
                  text:'Đã xóa thành công',
                  color:'success',
                  iconPack: 'feather',
                  icon:'icon-check'});
          }
        })
    },
    formatPrice(value, minimum) {
        var formatter = new Intl.NumberFormat('en-US', {
            //style: 'currency',
            //currency: '',
            minimumFractionDigits: minimum
        });
        return formatter.format(value);
    },
    addMoneyUser(data){
      data["type"] = 'addMoney'
      this.sidebarData = data      
      this.toggleDataSidebar(true)
    },
    addNewAccount(){
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    editUser(data) {
      delete data["type"]
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
      
    },
    getOrderStatusColor(status) {
      if(status == 0) return "warning"
      if(status == 1) return "success"
      //if(status == 2) return "danger"
      return "warning"
    },
    getOrderStatusColorText(status) {
      if(status == 0) return "Chưa bật"
      if(status == 1) return "Đã bật"
      //if(status == 2) return "danger"
      return "Chưa bật"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },

    // export ra file
    exportToExcel() {
        // kiểm tra nếu chưa chọn đối tượng thình sẽ không hiện bản xuất file
      if(this.selectedUser.length == 0){
        return this.$vs.notify({
            title:'Xuất dữ liệu',
            text:'Vui lòng chọn nội dung để hoàn thành',
            color:'danger',
            iconPack: 'feather',
            icon:'icon-heart'});
      } 
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.selectedUser
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }

        return v[j]
      }))
    },
    clearFields() {
      this.fileName = ""
      this.cellAutoWidth = true
      this.selectedFormat = "xlsx"
    },

    openLoadingInDiv(){
            this.$vs.loading({
                container: '#loading-corners',
                type: 'corners',
                scale: 0.6
            })
    },

  },
  created() {
    // if(!moduleDataList.isRegistered) {
    //   this.$store.registerModule('dataList', moduleDataList)
    //   moduleDataList.isRegistered = true
    // }

    //this.$store.registerModule('dataList', this.productsFake);
    
    //this.$store.dispatch("dataList/fetchDataListItems")
    //console.log(this.productsFake);
    //console.log(this.$store.state.dataList);

    let token = localStorage.getItem('token')
    this.$store.dispatch('setToken', token)

    AuthenticationService.getListAgency()
    .then((resp) => {

      this.$vs.loading.close('#loading-corners > .con-vs-loading');

      if(resp.data.success == 4){
          localStorage.removeItem('token');
          this.$router.push('/pages/login').catch(() => {})
      }else{
          this.productsFake = resp.data.data;
      }
    })

  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  }
}
</script>

<style lang="scss">
#list-agency-account {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
