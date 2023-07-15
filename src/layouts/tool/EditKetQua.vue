<!-- =========================================================================================
  Description: Data List - List View
  Item Name: Admin
  Author: Ares DN
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div id="list-edit-result" class="data-list-container">

    <template>
        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/3">
              <p class="mb-4">
                  Thời gian còn lại: <span class=" mr-4" style="color: #d65b00; font-weight: bold;">{{ countDown }}s</span> 
                  Trạng thái đặt cược: <b :class="{'text-success': typeOder == 'Mở', 'text-danger': typeOder == 'Đóng'}" style="font-weight: bold;">{{ typeOder }}</b>
                  <!-- d63200 // đóng -->
              </p>
              <p class="mb-4">
                  Tổng cược BUY: <span class="mr-4 text-danger" style="font-size: 20px">$ {{ price_buy }}</span>
                  Tổng cược SELL: <span class="text-danger" style="font-size: 20px">$ {{ price_sell }}</span>
              </p>
              <p class="mb-4">
                  Tổng Marketing Cược: <span class="mr-4 text-danger" style="font-size: 20px">$ {{ price_total_mkt }}</span><br>
                  Tổng người chơi Cược: <span class="text-danger" style="font-size: 20px">$ {{ price_total }}</span>
              </p>
              <!-- <vs-progress indeterminate color="primary"></vs-progress> -->
              <vs-button @click="reloadAmTien" class="h-12 font-bold" color="danger" type="relief"> Tắt BẺ ÂM TIỀN</vs-button>
              <br>
              <b>
                  Hệ thống đang gỡ vì ÂM TIỀN ( có thể TẮT ) trong phiên đáng và sắp gỡ
              </b>
              <p></p>
              <br>
              <div class="vx-row">
                 <b>
                    Nếu {{AMOUNTBECAU_MIN}} BOT sẽ kích hoạt bẻ cầu cho đến khi hết LỖ
                </b>
                <div class="vx-col w-full lg:w-1/2">
                  <vs-input type="number" class="mb-4" color="success" v-model="AMOUNTBECAU_MIN" />
                </div>
                <div class="vx-col w-full lg:w-1/2 text-center">
                  <vs-button @click="sbAmountBeCauMin" class="h-12 font-bold" color="success" type="relief">Đồng ý</vs-button>
                </div>
                <b>
                    Nếu BUY hoặc SELL lớn hơn {{AMOUNTBECAU_MAX}} sẽ kích hoạt bẻ cầu
                </b>
                <div class="vx-col w-full lg:w-1/2">
                  <vs-input type="number" class="mb-4" color="success" v-model="AMOUNTBECAU_MAX" />
                </div>
                <div class="vx-col w-full lg:w-1/2 text-center">
                  <vs-button @click="sbAmountBeCauMax" class="h-12 font-bold" color="success" type="relief">Đồng ý</vs-button>
                </div>

              </div>
               
              
          </div>
          <div class="vx-col w-full lg:w-2/3">
                <p class="mb-4 mr-4">
                    Chức năng:
                </p>
                <!--<p>
                    <b>
                        Chú ý:
                    </b>
                        Nhập giá trị QUỸ tổng cược mặc định hệ thống trả cho người chơi, nếu hệ thống chi trả đạt tới mức QUỸ này thì hệ thống sẽ tự động kiếm lại QUỸ này<br>
                        Mục đích: khiến người chơi tin tưởng rằng hệ thống chúng ta không gian lận chỉnh sửa kết quả và thu hút người chơi
                </p>
                <p class="mb-4">Ví dụ: Nhập 1,000 $, hệ thống sẽ cho ra ngẫu nhiên BUY hoặc SELL, hệ thống sẽ tích tổng tiền: <br>
                1: THẮNG ( TÍCH 70% ) tổng tiền mỗi phiên sao cho "đủ số giá trị NHẬP bên dưới" dành QUỸ sau. Để cân bằng THẮNG THUA không lỗ<br>
                2: THUA mà hệ thống đã trả nếu đủ 1,000 $ thì sẽ bắt đầu gỡ lại!<br>
                <b><i> BUY hoặc SELL bên nào ít sẽ THẮNG</i> </b> <br>( Chúng ta đã ăn phí 5% mỗi cuộc giao dịch )
                </p>  
                <p class="flex items-center">
                  <vs-input type="number" class="mb-4" color="success" label-placeholder="Là số tiền tối thiểu" v-model="PriceBOT" />
                  <vs-button @click="SubmitBOTPrice" class="h-12 font-bold" color="danger" type="relief"> Đồng ý
                  </vs-button> *** Để giá trị 0 là TẮT
                </P> 
                <p>
                    <vs-checkbox v-model="checkOnOffBOT" @click="changeBOTOnOff">( BOT Cược tiền ảo)</vs-checkbox>
                    <br>
                    <br>
                    
                </p>-->
                <p>
                    <!--<span class="font-bold mb-4">=====Chỉ được phép mở 1 trong 3 chức năng phía dưới======</span>-->
                    <span class="font-bold mb-4">( GỠ TIỀN NẾU ÂM PHIÊN HIỆN TẠI )</span>
                    <!--<vs-checkbox v-model="checkOnOffBOTGoTien" @click="changeBOTGoTienOnOff">( GỠ TIỀN NẾU ÂM PHIÊN HIỆN TẠI )</vs-checkbox>-->
                    <br>
                    <b>
                        Chú ý:
                    </b>
                        PHIÊN hiện tại nếu âm tiền, sẽ tự kích hoạt gỡ tiền sao cho hết âm tiền cho các PHIÊN sau ( Được TẮT / MỞ tự động )
                    <br>
                    <br>
                   

                     <!--<vs-checkbox v-model="checkOnOffAnGian" @click="changeBetOnOff">( CƯỢC thấp WIN )</vs-checkbox> -->

                    <!-- <vs-checkbox v-model="checkOnOffAnGian" @change="changeBetOnOff">Có / Không (CƯỢC thấp WIN)</vs-checkbox> -->
                     <!--<br>
                    <span>
                    <b>
                        Chú ý:
                    </b>
                        Nếu chọn Có: Tổng của TIỀN CƯỢC bên MUA / BÁN ( nếu thấp hơn sẽ THẮNG, nhiều hơn sẽ THUA )
                    </span> --> 
                </p>
                <p>
                    <span>
                        -- Đồng <IconCrypto style="width: 20px" coinname="btc" color="color" format="svg" /> 
                    </span>
                    <ul class="centerx mb-4 mr-4" style="margin-left: 30px; line-height: 35px;">
                        <li>
                            <vs-radio v-model="radioBC" class="ml-4" vs-value="buy" @change="changeMode('buy')">MUA</vs-radio>
                            <vs-radio v-model="radioBC" class="ml-4" vs-value="sell" @change="changeMode('sell')">BÁN</vs-radio>
                            <vs-radio v-model="radioBC" class="ml-4" vs-value="off" @change="changeMode('off')">Tắt</vs-radio>
                            <br>
                            <span class="mb-4">
                            <b>
                                Chú ý:
                            </b>
                                Nếu chọn MUA hoặc BÁN thì kết thúc phiên sẽ nhảy về MUA Hoặc BÁN trên biểu đồ <br>( TẮT nếu muốn kết quả mặc định và HỆ THỐNG TỰ GỠ NẾU ÂM TIỀN )
                            </span>
                        </li>
                    </ul>
                </p> 
          </div>

          <div class="vx-col w-full lg:w-1/2">
              <p>Marketing</p> 
              <p class="mb-4">
                  Marketing Cược BUY: <span class="mr-4 text-danger" style="font-size: 20px">$ {{ price_buy_mkt }}</span><br>
                  Marketing Cược SELL: <span class="text-danger" style="font-size: 20px">$  {{ price_sell_mkt }}</span>
              </p>
              <table class="tbv">
                <tr>
                  <th>Email</th>
                  <th>Loại</th>
                  <th>Mua/Bán</th>
                  <th>Số Tiền Cược</th>
                </tr>
                <tr :data="tr" :key="indextr" v-for="(tr, indextr) in productsFake">
                  <template v-if="tr.mkt == 1">
                    <td>{{ tr.e }}</td>
                    <td><p class="bet-type">{{ tr.sv }}</p></td>
                    <td>
                      <p class="bet-buy_sell" v-if="tr.bet == 'buy'">
                          <span class="text-success mr-2">MUA</span>
                          <feather-icon icon="TrendingUpIcon" svgClasses="w-5 h-5"/>
                      </p>
                      <p class="bet-buy_sell" v-else>
                        <span class="text-danger mr-2">BÁN</span>
                        <feather-icon icon="TrendingDownIcon" svgClasses="w-5 h-5"/>
                      </p>
                    </td>
                    <td>
                      <p class="bet-amount">
                          <IconCrypto style="width: 20px" coinname="usdt" color="color" format="svg" /> 
                          <font class="ml-2" color="#006c27">{{ formatPrice(tr.amount, 2) }}</font>
                      </p>
                    </td>
                  </template>
                  
                </tr>

              </table>
          </div>
          <div class="vx-col w-full lg:w-1/2">
              <p>Người chơi</p> 
              <p class="mb-4">
                  Người chơi Cược BUY: <span class="mr-4 text-danger" style="font-size: 20px">$ {{ price_play_buy }}</span><br>
                  Người chơi Cược SELL: <span class="text-danger" style="font-size: 20px">$  {{ price_play_sell }}</span>
              </p>
              <table class="tbv">
                <tr>
                  <th>Email</th>
                  <th>Loại</th>
                  <th>Mua/Bán</th>
                  <th>Số Tiền Cược</th>
                </tr>
                <tr :data="tr" :key="indextr" v-for="(tr, indextr) in productsFake">
                  <template v-if="tr.mkt == 0">
                    <td>{{ tr.e }}</td>
                    <td><p class="bet-type">{{ tr.sv }}</p></td>
                    <td>
                      <p class="bet-buy_sell" v-if="tr.bet == 'buy'">
                          <span class="text-success mr-2">MUA</span>
                          <feather-icon icon="TrendingUpIcon" svgClasses="w-5 h-5"/>
                      </p>
                      <p class="bet-buy_sell" v-else>
                        <span class="text-danger mr-2">BÁN</span>
                        <feather-icon icon="TrendingDownIcon" svgClasses="w-5 h-5"/>
                      </p>
                    </td>
                    <td>
                      <p class="bet-amount">
                          <IconCrypto style="width: 20px" coinname="usdt" color="color" format="svg" /> 
                          <font class="ml-2" color="#006c27">{{ formatPrice(tr.amount, 2) }}</font>
                      </p>
                    </td>
                  </template>
                  
                </tr>

              </table>
          </div>
        </div>
        
        
    </template>

    
  </div>
</template>

<script>

import SETTINGS from '../../../settings.json'

export default {
  components: {
  },
  data() {
    return {
      AMOUNTBECAU_MIN: -30,
      AMOUNTBECAU_MAX: 400,
      PriceBOT: 0,
      checkOnOffBOT: true,
      checkOnOffAnGian: false,  
      checkOnOffBOTGoTien: false,
      radioBC: '',
      productsFake: [ 
          // {e: 'admin@gmail.com', uid: 'DS9OR0KGJS', sv: 'BTC/USDT', bet: 'buy', amount: '10' } 
        ],
      itemsPerPage: 10,
      isMounted: false,

      countDown: 0,
      typeOder: 'Mở',

      price_buy: 0,
      price_sell: 0,
      price_buy_mkt: 0,
      price_sell_mkt: 0,
      price_total_mkt: 0,
      price_total: 0,

      price_play_buy: 0,
      price_play_sell: 0,
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
  watch:{
  
  },
  methods: {

    sbAmountBeCauMin(){
      this.sendMessage({type: 'editGL', data: {type: 'WRITE_AMOUNT_NEGA_AMOUNT_BREAK_BRIDGE', AMOUNT: this.AMOUNTBECAU_MIN}});
      return this.$vs.notify({
                text:'Đã thay đổi thành '+this.AMOUNTBECAU_MIN,
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
    },


    sbAmountBeCauMax(){
      this.sendMessage({type: 'editGL', data: {type: 'WRITE_AMOUNT_MAX_BREAK_BRIDGE', AMOUNT: this.AMOUNTBECAU_MAX}});
      return this.$vs.notify({
                text:'Đã thay đổi thành '+this.AMOUNTBECAU_MAX,
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
    },

    changeBOTOnOff(){   

        this.sendMessage({type: 'editGL', data: {type: 'BOT'}})

        if(this.checkOnOffBOT){

            return this.$vs.notify({
                text:'BOT đã được TẮT',
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
        }else{
            
            return this.$vs.notify({
                text:'BOT đã được BẬT',
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
        }
        
    },

    changeBetOnOff(){
        this.radioBC = 'off'
        
        this.checkOnOffBOTGoTien = false;

        if(this.checkOnOffAnGian){
   
            this.sendMessage({type: 'editGL', data: {type: 'BTC_OFF'}})

            return this.$vs.notify({
                text:'Đã thay đổi thành TẮT',
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
        }else{
            this.sendMessage({type: 'editGL', data: {type: 'BTC_LESS'}})

            return this.$vs.notify({
                text:'Đã thay đổi thành BẬT',
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
        }
        
    },

    reloadAmTien(){
      this.sendMessage({type: 'editGL', data: {type: 'GO_TIEN_OFF'}})
    },

    changeMode(val){
      this.checkOnOffAnGian = false  

      if(val == 'buy'){
        this.sendMessage({type: 'editGL', data: {type: 'BTC_BUY'}})
        val = 'MUA'
      } 
      if(val == 'sell'){
        this.sendMessage({type: 'editGL', data: {type: 'BTC_SELL'}})
        val = 'BÁN'
      } 
      if(val == 'off'){
        this.sendMessage({type: 'editGL', data: {type: 'BTC_OFF'}})
        val = 'TẮT' 
      }  

  
      return this.$vs.notify({
            text:'Đã thay đổi thành '+val,
            color:'success',
            position:'top-center',
            iconPack: 'feather',
            icon:'icon-message-square'});
    },

    formatPrice(value, minimum) {
        var formatter = new Intl.NumberFormat('en-US', {
            //style: 'currency',
            //currency: '',
            minimumFractionDigits: minimum
        });
        return formatter.format(value);
    },

    // getAmountDecimal(type, money){
    //   let cur = '$'
    //   let coin = type.toUpperCase()
    //   if(coin == 'BTC') return cur+money.toFixed(6)
    //   if(coin == 'ETH') return cur+money.toFixed(4)
    //   return cur+money.toFixed(2)
    // },

    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },


    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },

    changeRadioGetSV(dl){
      this.radioBC = ''

      if(dl.BTC.BUY) {
          this.radioBC = 'buy'
      }else if(dl.BTC.SELL) {
          this.radioBC = 'sell'
      }else if(!dl.BTC.BUY && !dl.BTC.SELL){
          this.radioBC = 'off'
      }

      if(dl.LESS_WIN){
          this.checkOnOffAnGian = true
      }else{
          this.checkOnOffAnGian = false
      }

      if(dl.PRICE_FUND_ON_OFF){
          this.checkOnOffBOTGoTien = true
      }else{
          this.checkOnOffBOTGoTien = false
      }

      if(dl.BOT){
          this.checkOnOffBOT = true
      }else{
          this.checkOnOffBOT = false
      }
  
      
    },

    

    changeBOTGoTienOnOff(){

        
        this.checkOnOffAnGian = false;
        this.radioBC = 'off'

        this.sendMessage({type: 'editGL', data: {type: 'BOT_GO_TIEN'}})

        if(this.checkOnOffBOTGoTien){
 
            return this.$vs.notify({
                text:'BOT gỡ tiền đã được TẮT',
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
        }else{
            
            return this.$vs.notify({
                text:'BOT gỡ tiền đã được BẬT',
                color:'success',
                position:'top-center',
                iconPack: 'feather',
                icon:'icon-message-square'});
        }

    },

    sendInfoAdmin(){
      this.sendMessage({type: 'accountDetail', data: {uid: 'ADMIN_BO', email: 'ad999999@gmail.com'}});
    }

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
    var _this = this
    this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET)

    this.connection.onopen = function() {
        _this.sendInfoAdmin();
        console.log("Successfully connected to the echo websocket server...")
    }


    this.connection.onmessage = function(event) {

        let data = JSON.parse(event.data)
        let dl = data.data

        if(data.type === 'allData'){
            _this.countDown = dl.candleClose
            _this.typeOder = dl.type == 'order' ? 'Mở' : 'Đóng';

            // reset lại số tiền = 0 khi thời gian = 0;
            if(dl.candleClose == 0){
              _this.price_buy = 0;
              _this.price_sell = 0;
              
            }
        }

        if(data.type === 'getTruck'){
          _this.changeRadioGetSV(dl);
          _this.AMOUNTBECAU_MIN = data.min_am_go;
          _this.AMOUNTBECAU_MAX = data.max_amount_be;

        }

        if(data.type === 'truck'){
          _this.productsFake = dl;
          _this.price_buy = _this.formatPrice(data.price_buy, 2);
          _this.price_sell = _this.formatPrice(data.price_sell, 2);
          _this.price_buy_mkt = _this.formatPrice(data.mktBUY, 2);
          _this.price_sell_mkt = _this.formatPrice(data.mktSELL, 2);
          _this.price_total_mkt = _this.formatPrice(data.mktBUY + data.mktSELL, 2);
          
          let tt = ( data.price_buy + data.price_sell ) - (data.mktBUY + data.mktSELL);


          _this.price_play_buy = _this.formatPrice(data.price_buy - data.mktBUY, 2);
          _this.price_play_sell = _this.formatPrice(data.price_sell - data.mktSELL, 2);
          _this.price_total = _this.formatPrice(tt, 2);
         
        }
    }

  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
#list-edit-result {
  .vs-switch{
      border: 1px solid #fff;
  }
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
<style scoped>
.tbv{
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #000;
}
.tbv tr {
    background-color: #ffa11f;
}
.tbv td, .tbv th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.tbv tr:nth-child(even) {
  background-color: #dddddd;
}
</style>