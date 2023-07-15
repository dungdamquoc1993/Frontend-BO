<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydn93
========================================================================================== -->

<template>
  <div id="list-bet-trade" class="data-list-container">

    <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
        <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
        <v-select v-model="selectedFormat" :options="formats" class="my-4" />
        <div class="flex">
          <span class="mr-4">Cell Auto Width:</span>
          <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
        </div>
    </vs-prompt>

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
                  <span v-if="showDeleteMultiBt" class="flex items-center" @click="deleteMultiple">
                    <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Xóa</span>
                  </span>
                </vs-dropdown-item>

                <!--<vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Archive</span>
                  </span>
                </vs-dropdown-item> -->

                <vs-dropdown-item>
                  <span class="flex items-center" @click="activePrompt=true">
                    <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>In</span>
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


            <!-- TRASH -->
            <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-danger border border-solid border-danger" @click="trashDataBet">
                <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-danger">Thùng rác</span>
            </div>
            <!-- RELOAD -->
            <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-success border border-solid border-success" @click="reloadList">
                <feather-icon icon="ArrowLeftIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-sucess">Trở về</span>
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
              <vs-th sort-key="description">Mô tả</vs-th>
              <vs-th sort-key="type">Loại</vs-th>
              <vs-th sort-key="buy_sell">Mua / Bán</vs-th>
              <vs-th sort-key="amount">Số tiền cược</vs-th>
              <vs-th sort-key="win_lose">Thắng / Thua</vs-th>
              <vs-th sort-key="result_bet">Kết quả</vs-th>
              <vs-th sort-key="open_close">Open / Close</vs-th>
              <vs-th sort-key="datecreate">Thời gian</vs-th>
              <!--<vs-th>Tác vụ</vs-th>-->
          </template>
        
          <template slot-scope="{data}">
            <tbody>
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <template v-if="tr.type_account">
                    <vs-td>
                        <p class="bet-description font-medium truncate">Email: {{ tr.email }}</p>
                        <p class="bet-description font-medium truncate">ID: {{ tr.id_account }}</p>
                        <p class="bet-description font-medium truncate" v-if="tr.type_account">Live Account</p>
                        <p class="bet-description font-medium truncate" v-else>Demo Account</p>
                    </vs-td>

                    <vs-td>
                        <p class="bet-currency">{{ tr.currency }}<br>
                          <span style="text-decoration: underline;color: #84f98d;" v-if="tr.marketing">Marketing</span> 
                          <span v-else>Thường</span> 
                        </p>
                    </vs-td>

                    <vs-td>
                        <p class="bet-buy_sell" v-if="tr.buy_sell == 'buy'">
                            <span class="text-success">MUA</span>
                        </p>
                        <p class="bet-buy_sell" v-else><span class="text-danger">BÁN</span></p>
                    </vs-td>

                    <vs-td>
                        <p class="bet-amount">
                            <IconCrypto style="width: 20px" coinname="USD" color="color" format="svg" /> 
                            <font color="#00ff5c">{{ getAmountDecimal('vn', tr.amount_bet) }}</font>
                        </p>
                    </vs-td>

                    <vs-td>
                        <p class="bet-win_lose">
                        <span style="color: #fb9494;font-weight: bold;text-shadow: 0px 0px 5px #f00;">{{  `${tr.amount_win != 0 ? '+'+tr.amount_win : '-'+tr.amount_lose}` }}</span>
                        </p>
                    </vs-td>

                    <vs-td>
                        <p class="bet-result_bet" v-if="tr.amount_win != 0">
                            <span class="text-success">Thắng</span>
                        </p>
                        <p class="bet-result_bet" v-else><span class="text-danger">Thua</span></p>
                    </vs-td>

                    <vs-td>
                        <p class="bet-open_close">{{ `${tr.open} -> ${tr.close}` }}</p>
                        <p>Phiên: {{ tr.session }}</p>
                    </vs-td>

                  <vs-td>
                    <p class="de-create">{{ formatDate(tr.created_at) }}</p>
                  </vs-td>

                  <vs-td class="whitespace-no-wrap text-center">
                        <vx-tooltip v-if="tr.status == 1" style="float: left" color="danger" text="Xóa">
                            <vs-button color="dark" type="line" icon-pack="feather" icon="icon-trash" @click.stop="deleteBet(tr.id, indextr, 0)"></vs-button>
                        </vx-tooltip>
                        <vx-tooltip v-else style="float: left" color="warning" text="Thu hồi">
                            <vs-button color="dark" type="line" icon-pack="feather" icon="icon-arrow-up-left" @click.stop="deleteBet(tr.id, indextr, 1)"></vs-button>
                        </vx-tooltip>
                  </vs-td>
                  </template>

              </vs-tr>
            </tbody>
          </template>
      </vs-table>

    </div>
    

    
  </div>
</template>

<script>

import vSelect from 'vue-select'
import AuthenticationService from '@/services/AuthenticationService'
import moment from 'moment'
import Vue from 'vue'

export default {
  components: {
    vSelect
  },
  data() {
    return {
      showDeleteMultiBt: true,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats:["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["ID", "Mô tả", "Loại", "Số Tiền", "Ghi Chú", "Ngày Giao Dịch" ],
      headerVal: ["id", "description", "type", "amount", "note", "datecreate" ],
      productsFake: [
            {
              "id": 1,
              "id_account": "134242",
              "type_account": 1,
              "buy_sell": "buy",
              "amount_win": 9.5,
              "amount_lose": 0,
              "amount_bet": 9.5,
              "currency": "BTC",
              "open": 50552.98,
              "close": 50541.01,
              "session": 154242443,
              "created_at": "00:00:00 02-04-2021"
            },
        ],
      itemsPerPage: 10,
      isMounted: false,

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

    deleteMultiple(){
        let token = localStorage.getItem('token')
        this.$store.dispatch('setToken', token)
        
        if(this.selectedUser.length == 0){
          return this.$vs.notify({
            text:'Hãy chọn đối tượng cần xóa',
            color:'warning',
            iconPack: 'feather',
            icon:'icon-check'});
        }
        for(var i = this.selectedUser.length - 1; i >= 0 ;i--){
            let id = this.selectedUser[i]['id'];
            let obj = {
              id: id,
              val: 1
            }
            AuthenticationService.deleteBetsTrash(obj)
            .then((resp) => {
              if(!resp.data.success){
                localStorage.removeItem('token');
                this.$router.push('/pages/login').catch(() => {})
              }
            })
            Vue.delete(this.productsFake, i)
        }
        this.selectedUser = []
        return this.$vs.notify({
            text:'Đã xóa thành công',
            color:'success',
            iconPack: 'feather',
            icon:'icon-check'});
    },

    deleteBet(id, index, val){
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)
      let obj = {
        id: id,
        val: val
      }
      AuthenticationService.deleteBetsTrash(obj)
        .then((resp) => {
          if(resp.data.success){
              Vue.delete(this.productsFake, index)
              this.popupDeleteActive = false
              return this.$vs.notify({
                  text:'Đã xóa thành công',
                  color:'success',
                  iconPack: 'feather',
                  icon:'icon-check'});
          }else{
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => {})
          }
        })
    },


    trashDataBet(){
      this.showDeleteMultiBt = false
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)

      AuthenticationService.getBetsListHisTrash()
      .then((resp) => {
        if(!resp.data.success){
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => {})
        }else{
            this.productsFake = resp.data.data;
        }
      })
    },

    getOrderStatusColor(status) {
      if(status == 0) return "warning"
      if(status == 1) return "success"
      //if(status == 2) return "danger"
      return "warning"
    },
    getOrderStatusColorText(status) {
      if(status == 0) return "Chờ xử lý"
      if(status == 1) return "Hoàn thành"
      //if(status == 2) return "danger"
      return "Chờ xử lý"
    },

    getIconType(type){
      let cur = type.toUpperCase();
      return cur
    },

    formatDate(value){
      if (value) {
          return moment(String(value)).format('MM/DD/YYYY HH:mm:ss')
      }
    },

    getAmountDecimal(type, money){
      let cur = '$'
      let coin = type.toUpperCase()
      let minimum = 2
      if(coin == 'BTC') minimum = 6
      
      if(coin == 'ETH') minimum = 4

      if(coin == 'USDT') minimum = 2

      if(coin == 'VN') minimum = 0

      var formatter = new Intl.NumberFormat('en-US', {
          //style: 'currency',
          //currency: '',
          minimumFractionDigits: minimum
      });
      
      return cur+formatter.format(money);
    },

    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },




    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    // export ra file
    //==================================================================
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

    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
     reloadList(){
          this.showDeleteMultiBt = true
          let token = localStorage.getItem('token')
          this.$store.dispatch('setToken', token)

          AuthenticationService.getBetsListHistory()
          .then((resp) => {

            this.$vs.loading.close('#loading-corners > .con-vs-loading');
            
            if(!resp.data.success){
                localStorage.removeItem('token');
                this.$router.push('/pages/login').catch(() => {})
            }else{
                this.productsFake = resp.data.data;
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
  created() {
    // if(!moduleDataList.isRegistered) {
    //   this.$store.registerModule('dataList', moduleDataList)
    //   moduleDataList.isRegistered = true
    // }

    //this.$store.registerModule('dataList', this.productsFake);
    
    //this.$store.dispatch("dataList/fetchDataListItems")
    //console.log(this.productsFake);
    //console.log(this.$store.state.dataList);
    this.reloadList()
    
  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  }
}
</script>

<style lang="scss">
#list-bet-trade {
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
