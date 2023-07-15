<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div id="list-history-postnews" class="data-list-container">

    <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
        <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
        <v-select v-model="selectedFormat" :options="formats" class="my-4" />
        <div class="flex">
          <span class="mr-4">Cell Auto Width:</span>
          <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
        </div>
    </vs-prompt>

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


          <!-- TRASH -->
          <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-danger border border-solid border-danger" @click="trashData">
              <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-danger">Thùng rác</span>
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
        <vs-th sort-key="title">Tiêu đề</vs-th>
        <vs-th sort-key="describe">Mô tả</vs-th>
        <vs-th sort-key="path">Path</vs-th>
        <vs-th sort-key="author">Tác giả</vs-th>
        <vs-th sort-key="status">Trạng thái</vs-th>
        <vs-th sort-key="datecreate">Thời gian</vs-th>
        <vs-th>Tác vụ</vs-th>
      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                <vs-td>
                    <p class="news-title font-medium truncate">{{ tr.title }}</p>
                </vs-td>

              <vs-td>
                <p class="news-describe font-medium truncate">
                  {{ tr.describe }}
                </p>
              </vs-td>

              <vs-td>
                <p class="news-path">{{ tr.path }}</p>
              </vs-td>

                <vs-td>
                <p class="news-author">{{ tr.author }}</p>
              </vs-td>

              <vs-td>
                <vs-chip :color="getStatusColor(tr.status)" class="de-status">{{ getStatusColorText(tr.status) | title }}</vs-chip>
              </vs-td>

              <vs-td>
                <p class="de-create">{{ tr.created_at }}</p>
              </vs-td>

              <vs-td class="whitespace-no-wrap text-center">
                    <vx-tooltip style="float: left" color="danger" text="Xóa">
                        <vs-button color="dark" type="line" icon-pack="feather" icon="icon-trash" @click.stop="deleteDeposit(tr.id)"></vs-button>
                    </vx-tooltip>
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
    </vs-table>
  </div>
</template>

<script>

import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },


  data() {
    return {
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats:["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Tài khoản", "Loại", "Số Tiền", "Trạng Thái", "Ngày Nạp" ],
      headerVal: ["account", "type", "amount", "status", "datecreate" ],
      productsFake: [
            {
              "id": 1,
              "title": 'ABC test',
              "describe": "nvmsnbfhkljfhllshkfs",
              "path": "Blog",
              "author": 'Ares', 
              "status": 1,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 2,
              "title": 'ABC test',
              "describe": "nvmsnbfhkljfhllshkfs",
              "path": "Blog",
              "author": 'Ares', 
              "status": 0,
              "created_at": "00:00:00 02-04-2021"
            }
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
    deleteDeposit(id) {
      return id
    },

    trashData(){
      
    },

    getStatusColor(status) {
      if(status == 0) return "warning"
      if(status == 1) return "success"
      //if(status == 2) return "danger"
      return "warning"
    },
    getStatusColorText(status) {
      if(status == 0) return "Đang xử lý"
      if(status == 1) return "Hoàn thành"
      //if(status == 2) return "danger"
      return "Đang xử lý"
    },

    getIconType(type){
      let cur = type.toUpperCase();
      return cur
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
    }

    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================


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
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
#list-history-postnews {
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
