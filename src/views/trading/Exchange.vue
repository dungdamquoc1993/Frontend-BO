<template>
  <div id="exchangePage">
    <div class="container">
        <div class="vx-row">
            <div class="w-full">
                <div class="exchange-currency">
                    <h4 class="exchange-currency-title color-white font-bold mb-3 pt-4 capitalize">Chuyển đổi tiền tệ</h4>
                    <div class="vx-row boxExchange">
                        <div class="vx-col w-full lg:w-4/12">
                            <div class="send">
                                <div class="inputAmount mt-0 mb-1">
                                    <div class="flex justify-between items-center"><span class="font-bold font-12-m color-white">Gửi:</span>
                                        <div class="inputLabel absolute right-0">
                                            <a href="javascript:;" class="butt text-center" @click="ttClickAmount(1)">Một nửa</a> 
                                            <a href="javascript:;" class="butt text-center" @click="ttClickAmount(2)">Tất cả</a>
                                        </div>
                                    </div>
                                </div>
                                <div :class="`wrap-input-exchange ${isCoinOne}`">
                                    <div class="inputAmount">
                                        <form>
                                            <input type="number" step="0.000001" @keyup="convertMoney" v-model="amountEnterOne" class="form-control">
                                        </form>
                                    </div>
                                    <div class="boxSelectUnit">
                                        <div :class="`selectedUnit ${isCoinOne}`">
                                            <div :class="`icon ${isCoinOne}`"></div> <span class="color-white font-bold">{{ isCoinOne }}</span>
                                            <div class="info"><span class="titleUnit"></span>
                                                <div class="amount"><span class="label">Số dư của bạn :</span> <span class="number px-1">
                                                            {{ balanceOne }}
                                                        </span> <span :class="`symb ${isCoinOne}`">{{ isCoinOne }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vx-col w-full lg:w-1/12">
                            <div class="flex items-center justify-center">
                                <div class="buttonExchange" style="margin-top: 50px;">
                                    <button class="p-0 cursor-pointer" @click="transCoin">
                                        <div class="butt"><img src="data:image/png;base64,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">
                                        </div>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="vx-col w-full lg:w-4/12">
                            <div class="receive">
                                <span class="inputAmount font-bold mt-0 mb-1 inline-block color-white">Nhận</span>
                                <div :class="`wrap-input-exchange hasitem ${isCoinTwo}`">
                                    <div class="inputAmount">
                                        <input type="text" value="" disabled="disabled" readonly="readonly" placeholder="0" v-model="amountEnterTwo" class="form-control">
                                    </div>
                                    <div class="boxSelectUnit "><!-- activeSelectItem -->
                                        <div :class="`selectedUnit hasitem ${isCoinTwo}`">
                                            <div :class="`icon ${isCoinTwo}`"></div>
                                            <div class="info"><span class="titleUnit">{{ isCoinTwo }}</span>
                                                <div class="amount"><span class="label">Số dư của bạn :</span> <span class="number px-1">
                                                            {{ balanceTwo }}
                                                        </span> <span :class="`symb ${isCoinTwo}`">{{ isCoinTwo }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="listUnits shadow">
                                            <div class="itemSelectUnit ETH">
                                                <div class="icon ETH"></div>
                                                <div class="info"><span class="titleUnit">Ethereum</span>
                                                    <!-- <div class="amount">
                                                        <span class="label">Số dư của bạn :</span> <span class="number">0</span> 
                                                        <span class="symb ETH">ETH</span>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!---->
                                            <!---->
                                            <div class="itemSelectUnit USDT">
                                                <div class="icon USDT"></div>
                                                <div class="info">
                                                    <span class="titleUnit">USD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="vx-col w-full lg:w-3/12">
                            <div class="flex items-center md:mt-2 lg:mt-6 xl:mt-6">
                                <!---->
                                <!---->
                                <vs-button id="button-with-loading" class="vs-con-loading__container buttonCommon greenButton button investor md:w-full" type="filled" :disabled="disButtonTrans" @click="exChangeSubmit">{{ ssDownSend }}</vs-button>
                            </div>
                        </div>
                    </div>
                    <div class="processExchange"><span class="font-12 color-white">Giá trị chuyển đổi nhỏ nhất là {{ minAmountTrans + ' ' + isCoinOne }}</span>
                    </div>
                </div>
                <div class="historyEx lg:mb-4">
                    <h4 class="mb-3 history-title">Lịch sử đổi tiền</h4>
                    <div class="history-body relative" :class="{'ld-loading': isLoading}">
                        <table class="table listHis ex w-full">
                            <div class="loading">
                                <div class="loading">
                                    <div class="loading__ring">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path></svg>
                                    </div>
                                    <div class="loading__ring">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <thead class="header">
                                <tr>
                                    <th>Thời gian</th>
                                    <th>Đã gửi</th>
                                    <th>Đã nhận</th>
                                    <th>Từ</th>
                                    <th>Đến</th>
                                </tr>
                            </thead>
                            <tbody v-if="dataHisEx.length == 0">
                                <tr>
                                    <td colspan="5" class="text-center">Không có dữ liệu</td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr :key="indextr" v-for="(tr, indextr) in dataHisEx">
                                    <td>
                                        <span>{{ formatDateEx(tr.created_at) }}</span>
                                    </td>
                                    <td>
                                        <span class="red">- {{ formatPrice(tr.send, 2) }}</span>
                                    </td>
                                    <td>
                                        <span class="green">+ {{ formatPrice(tr.receive, 2) }}</span>
                                    </td>
                                    <td>
                                        <span :class="`icon ${tr.from_e.toUpperCase()}`"></span>
                                        {{ tr.from_e.toUpperCase() }}
                                    </td>
                                     <td>
                                        <span :class="`icon ${tr.to_e.toUpperCase()}`"></span>
                                        {{ tr.to_e.toUpperCase() }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <vs-pagination v-if="totalExH > 0" class="mt-4 mb-2" :total="totalExH" v-model="currentxEx" @input="clickPageEx"></vs-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import getData from '@/pages/trade/navbar/components/data.json'
import moment from 'moment'

export default {
components: {
    
},
  data () {
    return {
        currentxEx: 0,
        totalExH: 0,
        isLoading: false,

        minAmountTrans: 11,

        amountEnterOne: 1,
        amountEnterTwo: 0,

        balanceOne: 0,
        balanceTwo: 0,

        isCoinOne: 'PAYPAL',
        isCoinTwo: 'USDT',

        disButtonTrans: false,

        ssDownSend: 'Đổi',
        backgroundLoading:'primary',
        colorLoading: '#fff',
        
        totalRCT: 0,
        currentxCT: 0,
        dataHisEx: {}
    }
  },
  methods: {

    replaceAll(str, find, replace) {
        return Number(str.replace(new RegExp(find, 'g'), replace));
    },

    convertMoney(){
          let mE = this.amountEnterOne == '' ? 0 : Number(this.amountEnterOne)
          this.amountEnterTwo = this.formatPrice(mE * 1, 2) // 1 là giá trị quy đổi ( mặc định USDT là 1)

          
    },

    ttClickAmount(v){
        if(v == 1){ // thêm vào 1 nữa số tiền
        this.amountEnterOne = Number(this.balanceOne) / 2
        }else{ // thêm vào tất cả
        this.amountEnterOne = Number(this.balanceOne)
        }
        this.convertMoney();
    },

    transCoin(){

          if(this.isCoinOne == 'PAYPAL'){
              this.isCoinOne = 'USDT'
              this.isCoinTwo = 'PAYPAL'
              let o = this.balanceOne
              let t = this.balanceTwo

              this.balanceOne = t
              this.balanceTwo = o

          }else{
              this.isCoinOne = 'PAYPAL'
              this.isCoinTwo = 'USDT'

              let o = this.balanceOne
              let t = this.balanceTwo

              this.balanceOne = t
              this.balanceTwo = o
          }
          this.balanceOne = this.replaceAll(this.balanceOne.toString(), ',', '');
          
      },

      sendCodeSecure(){
        this.disButtonTrans = true

        this.$vs.loading({
            //background: this.backgroundLoading,
            color: this.colorLoading,
            container: "#button-with-loading",
            scale: 0.45
        })
        let giay = 10
        let countD = setInterval(() => {
            this.ssDownSend = giay + 's'
            if(giay == 0){
                this.disButtonTrans = false
                this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                this.ssDownSend = 'Đổi'
                clearInterval(countD)
            }
            giay--
        }, 1000)
    },

    exChangeSubmit(){
          let am = this.amountEnterOne == '' ? 0 : Number(this.amountEnterOne)
          let adf = this.minAmountTrans
          
          // kiểm tra nếu số tiền đổi nhỏ hơn 11 USD và có nhỏ hơn số tiền hiện có hay không
          if(am < adf){
              return this.$vs.notify({
                    text: `Giá trị chuyển đổi nhỏ nhất là ${adf} ${this.isCoinOne}`,
                    color:'danger',
                    position:'top-right',
                    iconPack: 'feather',
                    icon:'icon-x-circle'
                })
          }


          let dfBalance = Number(this.balanceOne)

          if(am > dfBalance){
              return this.$vs.notify({
                    text: 'Số dư không đủ để chuyển đổi',
                    color:'danger',
                    position:'top-right',
                    iconPack: 'feather',
                    icon:'icon-x-circle'
                })
          }
          
            // thực hiện quy trình chuyển đổi
            
            this.sendCodeSecure()

            let obj = {
                t_s: this.isCoinOne,
                t_r: this.isCoinTwo,
                a: am,
                
            }
            AuthenticationService.transWallet(obj)
            .then((res) => {
                let d = res.data 
                if(d.success == 3 || d.success == 4){
                    localStorage.removeItem('token')
                    this.$router.push('/login').catch(() => {})
                    return
                }

                if(d.success == 1){

                    this.balanceOne = this.formatPrice(dfBalance - am, 2)
                    this.balanceTwo = this.formatPrice(Number(this.balanceTwo) + am, 2)

                    return this.$vs.notify({
                        text:'Chuyển đổi thành công',
                        color:'success',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-check'
                    })

                }

            }) 
          
    },

    getBalanceWallet(){
        
        AuthenticationService.getBalanceWallet()
        .then((res) => {
            let d = res.data
            if(d.success == 3 || d.success == 4){
                localStorage.removeItem('token')
                this.$router.push('/login').catch(() => {})
                return
            }
            if(d.success){
                //let mU = d.data.usdt
                //let mE = d.data.eth
               // let mB = d.data.btc
                let mP = d.data.paypal

                //this.balanceUSDT = this.formatPrice(mU, 2)
                //this.balanceETH = this.formatPrice(mE, 4)
                //this.balanceBTC = this.formatPrice(mB, 6)
                this.balanceOne = this.formatPrice(mP, 2)

                this.balanceTwo = this.formatPrice(getData.balance, 2)
            }
        })
    },

    getExChange(){
        AuthenticationService.getExChangeUser()
        .then((res) => {
            let d = res.data
            if(d.success == 3 || d.success == 4){
                localStorage.removeItem('token')
                this.$router.push('/login').catch(() => {})
                return
            }
            if(d.success){
                let c = (d.count / 10).toString()
                this.totalExH = Number(c.split(".")[0])
                this.dataHisEx = d.data
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

    formatDateEx(value){
      if (value) {
          return moment(String(value)).format('MM/DD/YYYY HH:mm:ss')
      }
    },
    
  },

  mounted() {
      this.getExChange()
      this.getBalanceWallet()
  },
}
</script>


<style scoped>

.historyEx .table.ex {
    color: #fff;
    background-color: #232323;
}

.historyEx .table.ex tbody tr td:first-child {
    padding-left: 1.5rem;
}
    
.historyEx .table.ex tbody tr td span.icon {
    padding-left: 30px;
    background-size: 20px;
}

.historyEx .table.ex tbody tr td {
    padding: 0.75rem 1.75rem;
    position: relative;
}

.historyEx tbody tr {
    border-color: #e7e7e8;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.historyEx .table.ex thead tr {
    color: #8d97a0;
    border-bottom-color: rgba(255, 255, 255, 0.15);
}

.historyEx .table.ex thead th {
    padding: 0.75rem 1.5rem;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 15px;
}

.exchange-currency .boxExchange .inputAmount .inputLabel .butt.USD:focus, 
.exchange-currency .boxExchange .inputAmount .inputLabel .butt.USD:active {
    border: 1px solid #F0972D;
    background-color: #F0972D;
    color: #fff;
}

.exchange-currency .boxExchange .inputAmount .inputLabel .butt.USD:hover {
    border: 1px solid #F0972D;
    color: #F0972D;
}

.exchange-currency .boxExchange .inputAmount .inputLabel .butt {
    display: inline-block;
    overflow: hidden;
    height: 30px;
    line-height: 28px;
    width: 100px;
    border: 1px solid #e4e6e7;
    border-radius: 5px;
    margin: 0 3px;
    opacity: 1;
    transition: all 0.3s ease;
    background: #e4e6e7;
    color: #0c3653 !important;
}

.greenButton {
    background: #23c15f !important;
}


.exchange-currency .processExchange {
    margin-top: 5px;
    text-align: right;
    font-style: italic;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .selectedUnit .info .titleUnit {
    font-size: 16px;
    color: #fff;
}

.boxSelectUnit.activeSelectItem .titleUnit {
    color: #5D6481;
}

.boxSelectUnit .listUnits .itemSelectUnit .info .titleUnit {
    display: block;
    font-size: 20px;
    font-weight: bold;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .listUnits .itemSelectUnit .titleUnit {
    font-size: 14px;
    font-weight: normal;
}

.boxSelectUnit.activeSelectItem .listUnits {
    display: block;
}

.boxSelectUnit .listUnits {
    display: none;
    position: absolute;
    top: 74px;
    left: 0px;
    width: 100%;
    background: #12252E;
    z-index: 9;
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
}

.exchange-currency .button.wbtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #2177FF;
    color: #fff;
    font-weight: 400;
}

.exchange-currency .button.wbtn.btn-radius {
    border-radius: 4px !important;
}

.exchange-currency .boxExchange .button.investor {
    padding: unset;
    height: 60px;
    margin-top: 1.2rem;
    min-width: 230px;
    color: #fff;
}

.exchange-currency .buttonExchange button .butt img {
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
}

.exchange-currency .buttonExchange button .butt {
    background: transparent;
    width: 42px;
    height: 42px;
    display: block;
    overflow: hidden;
    border-radius: 42px;
    box-shadow: none;
}

.exchange-currency .buttonExchange button {
    background: none;
    border: none;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .selectedUnit .icon {
    width: 30px;
    height: 20px;
    margin: 0;
}

.boxSelectUnit .selectedUnit .info .amount span.symb.PAYPAL {
    color: #00B6FF;
}

.boxSelectUnit .selectedUnit .info .amount span.symb.USDT {
    color: #00C67A;
}

.boxSelectUnit .selectedUnit .info .amount span.symb.BTC {
    color: #E6C300;
}

.boxSelectUnit .selectedUnit .info .amount span.symb.ETH {
    color: #645cff;
}

.boxSelectUnit .selectedUnit .info .amount span.symb.WIN {
    color: #00B6FF;
}

.boxSelectUnit .selectedUnit .info .amount span.symb {
    text-transform: uppercase;
}

.boxSelectUnit .selectedUnit .info .amount span.label {
    opacity: 0.5;
}

.boxSelectUnit .selectedUnit .info .amount span {
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
}

.exchange-currency .boxExchange .amount {
    background-color: #232323 !important;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .selectedUnit .info .amount {
    position: absolute;
    bottom: -14px;
    left: 14px;
    background: #2f234d;
    padding: 0 8px;
    color: #fff;
}

.icon.PAYPAL {
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
}

.icon.WIN {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMiAyMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjIgMjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojMkUwMEFEO30KCS5zdDJ7ZmlsbDojMDBCNkZGO30KCS5zdDN7ZmlsbDojRkYwMDgyO30KPC9zdHlsZT4KPGcgaWQ9Ikdyb3VwXzExMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzI1LjMwOCAtMTI5LjMwOCkiPgoJPGcgaWQ9IkVsbGlwc2VfMjAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjUuMzA4IDEyOS4zMDgpIj4KCQk8Zz4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTEiIGN5PSIxMSIgcj0iMTEiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMSwyMkM0LjksMjIsMCwxNy4xLDAsMTFDMCw0LjksNC45LDAsMTEsMHMxMSw0LjksMTEsMTFDMjIsMTcuMSwxNy4xLDIyLDExLDIyeiBNMTEsMUM1LjUsMSwxLDUuNSwxLDExCgkJCQlzNC41LDEwLDEwLDEwYzUuNSwwLDEwLTQuNSwxMC0xMFMxNi41LDEsMTEsMXoiLz4KCQk8L2c+Cgk8L2c+Cgk8ZyBpZD0iR3JvdXBfNDMwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMwLjEwOSAxMzUuOTQxKSI+CgkJPGcgaWQ9IlBhdGhfMjQiPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMCwwYzEuNiwwLDMuMywwLDQuOSwwYzAsMS4yLDAuNSwyLjMsMS41LDMuMXYwbDAsMGMtMS43LDEuMy00LjIsMS01LjUtMC43QzAuMywxLjcsMCwwLjksMCwwTDAsMHoiLz4KCQk8L2c+CgkJPGcgaWQ9IlBhdGhfMjUiPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMy40LDQuNWMxLjEtMC4yLDIuMiwwLjEsMywwLjhsMCwwYy0xLDAuNy0xLjUsMS45LTEuNSwzLjFIMEMwLDYuNSwxLjQsNC44LDMuNCw0LjVMMy40LDQuNXoiLz4KCQk8L2c+CgkJPGcgaWQ9IlBhdGhfMzIiPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC45LDBoM2MwLDAuOS0wLjMsMS44LTAuOSwyLjZDNi44LDIuNyw2LjYsMi45LDYuNCwzLjFsMCwwbDAsMEM1LjQsMi4zLDQuOSwxLjIsNC45LDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJQYXRoXzMzIj4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQuOSw4LjRjMC0xLjIsMC41LTIuNCwxLjUtMy4xYzAuOSwwLjcsMS41LDEuOSwxLjUsMy4xSDQuOXoiLz4KCQk8L2c+CgkJPGcgaWQ9IlBhdGhfMzYiPgoJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNy45LDBoNC45YzAsMi4yLTEuOCwzLjktMy45LDMuOWMtMC41LDAtMS0wLjEtMS40LTAuM2MtMC40LTAuMS0wLjctMC4zLTEtMC41bDAsMHYwCgkJCQljMC4yLTAuMiwwLjQtMC4zLDAuNS0wLjVDNy42LDEuOCw3LjksMC45LDcuOSwweiIvPgoJCTwvZz4KCQk8ZyBpZD0iUGF0aF8zNyI+CgkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik02LjQsNS40QzguMSw0LDEwLjUsNC4zLDExLjksNmMwLjYsMC43LDAuOSwxLjYsMC45LDIuNUg3LjlDNy45LDcuMiw3LjMsNi4xLDYuNCw1LjRMNi40LDUuNHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);
    background-repeat: no-repeat;
    background-position: center;
}

.icon.USDT {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: center;
}

.icon.BTC {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOS40OTkgMjMuMDYyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZTZjMzAwOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBpZD0iU3VidHJhY3Rpb25fMiIgZGF0YS1uYW1lPSJTdWJ0cmFjdGlvbiAyIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDA5OS4zNjYtNjEyOS41MTVoMGwtMS43MzItLjQzNi43MDktMi44MzVjLS40NTgtLjExLS44OTUtLjIyOC0xLjM4LS4zNThsLS43MTEsMi44NTItMS43MzMtLjQzNi43MTYtMi44OC0uNTA2LS4xMjljLS4yMzgtLjA2MS0uNDgzLS4xMjUtLjcyOS0uMTgzbC0yLjI1NC0uNTY0Ljg2MS0xLjk4NWMuMDY0LjAxOCwxLjE3OS4zMTQsMS4yNTUuMzE0YS45NjQuOTY0LDAsMCwwLC4yMTMuMDI2LjYyOS42MjksMCwwLDAsLjU4Ni0uNDM1bDEuMTM0LTQuNTQ2Yy4wNjcuMDIuMTI3LjAzNC4xODUuMDQ1bC0uMDYyLS4wMi0uMDEzLDBjLS4wNDEtLjAxMy0uMDc4LS4wMjQtLjExLS4wMzJsLjgxMi0zLjI0MmEuOTE4LjkxOCwwLDAsMC0uODA2LTEuMDA2Yy0uMDEzLS4wMjQtLjk4OS0uMjUtMS4yNjUtLjMxM2wuNDY1LTEuODUsMi4zODcuNTkydi4wMTJjLjIzNC4wNTkuNDY5LjExNC43MTguMTcybC4xMTMuMDI3LjI3Ny4wNjMuNzA5LTIuODQ2LDEuNzMzLjQzMS0uNywyLjc5LjE3MS4wMzhjLjM1Mi4wOC43OTEuMTgxLDEuMjIzLjI4N2wuNjg4LTIuNzY5LDEuNzM0LjQzMS0uNzExLDIuODQ2YzIuNjQyLjkxMiwzLjc0NCwyLjE4LDMuNDczLDMuOTg2YTIuNzcsMi43NywwLDAsMS0yLjIxLDIuNTQ0YzEuNzY4LjkxNSwyLjI3MywyLjI1LDEuNTk1LDQuMmEzLjYzMSwzLjYzMSwwLDAsMS0zLjg1OCwyLjU4OSwxMi40NywxMi40NywwLDAsMS0yLjI1OC0uMjQ3bC0uNzE3LDIuODczWm0tLjg4OS05LjUyNy0uOTU4LDMuODE0LjMxNC4wODFhMTIuMDEsMTIuMDEsMCwwLDAsMi44OTEuNDk1YzEuMjA3LDAsMS45MjItLjQyOCwyLjEzLTEuMjdhMS41NjIsMS41NjIsMCwwLDAtLjE3MS0xLjIzNmMtLjY3Ni0xLjA5MS0yLjctMS41NDQtMy43ODctMS43ODhsLS4wMTgsMGMtLjE1NC0uMDM0LS4yOS0uMDY1LS40LS4wOTNabTEuMy01LjIwNi0uODY3LDMuNDYuMDM5LjAwOS4yNTUuMDY4YTkuMzUxLDkuMzUxLDAsMCwwLDIuMy4zOTRjMS4wNTksMCwxLjY5NC0uNCwxLjg5Mi0xLjE5MWExLjQ2NywxLjQ2NywwLDAsMC0uMTU0LTEuMTY3Yy0uNTcyLS45MjktMi4yMTctMS4yOTMtMy4xLTEuNDg5bC0uMTA5LS4wMjRjLS4wOTUtLjAyMS0uMTgxLS4wNDEtLjI1My0uMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxODUuNDU3IDkzNzkuNjA0KSByb3RhdGUoLTE0KSIvPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: center;
}

.icon.ETH {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC42MjUgMzMiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICM2MjYyZmY7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJldGhlcmV1bSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkgMSkiPgogICAgPGcgaWQ9Ikdyb3VwXzE0MyIgZGF0YS1uYW1lPSJHcm91cCAxNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkgLTEpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfNjQiIGRhdGEtbmFtZT0iUGF0aCA2NCIgY2xhc3M9ImNscy0xIiBkPSJNMjguNjE4LDE2LjgwOSwxOC4zMTIsMjIuNzkxLDgsMTYuODA5LDE4LjMxMiwwWm0tMTAuMzA2LDcuOUw4LDE4LjczLDE4LjMxMiwzMywyOC42MjUsMTguNzMsMTguMzEyLDI0LjcxMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04KSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==);
    background-repeat: no-repeat;
    background-position: center;
}

.exchange-currency .boxExchange .wrap-input-exchange.PAYPAL {
    border-color: #00B6FF;
}

.exchange-currency .boxExchange .wrap-input-exchange.ETH {
    border-color: #645cff;
}

.exchange-currency .boxExchange .wrap-input-exchange.USDT {
    border-color: #00C67A;
}

.exchange-currency .boxExchange .wrap-input-exchange.BTC .icon {
    color: #E6C300;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .listUnits .itemSelectUnit .icon {
    width: 20px;
    height: 20px;
    margin: 0;
    margin-right: 5px;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .listUnits .itemSelectUnit {
    height: 50px;
    align-items: center;
}

.boxSelectUnit .listUnits .itemSelectUnit {
    padding: 10px 11px;
    height: 74px;
    color: #fff;
    border-bottom: 1px solid #142C37;
    width: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
}

.exchange-currency .boxExchange .boxSelectUnit .listUnits {
    z-index: 8;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .listUnits {
    background: #fff;
    width: 50%;
    left: auto;
    right: 0;
    border-radius: 5px;
}

.boxSelectUnit .selectedUnit {
    color: #5D6481;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit .selectedUnit {
    border: none;
    position: unset;
    display: flex;
    align-items: center;
    height: 58px;
}

.boxSelectUnit .selectedUnit {
    border: 1px solid;
    padding: 10px 30px 10px 10px;
    border-radius: 5px;
    height: 74px;
    color: #fff;
    width: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
}

.exchange-currency .boxExchange .wrap-input-exchange .boxSelectUnit {
    position: unset;
}


.exchange-currency .boxExchange .inputAmount input {
    color: #fff;
    font-size: 22px;
}

.form-control {
    width: 100%;
    color: #5D6481;
    padding: 0 10px !important;
    background: #e0e7ff33 0% 0% no-repeat padding-box;
    border: 1px solid #e0e7ff;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
}

.exchange-currency .boxExchange .wrap-input-exchange .inputAmount input {
    background: transparent !important;
    color: #fff;
    border-color: transparent;
}

.exchange-currency .boxExchange .wrap-input-exchange .inputAmount {
    margin: 0;
}

.exchange-currency .boxExchange .wrap-input-exchange.BTC {
    border-color: #E6C300;
}

.exchange-currency .boxExchange .wrap-input-exchange {
    border: 1px solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.exchange-currency .boxExchange .inputAmount {
    height: 35px;
    position: relative;
}

.exchange-currency .boxExchange .send, 
.exchange-currency .boxExchange .receive {
    width: 100%;
}

.exchange-currency .boxExchange {
    display: flex;
    background: #232323;
    border-radius: 4px;
    padding: 1.2rem;
    border: 1px solid rgba(112, 112, 112, 0.15);
}

.history .box-result-header {
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 14px;
    padding: 10px 5px;
    height: 50px;
}

.history .box-result .item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 10px 5px;
    height: 50px;
}

.history .box-result .block-col.amount {
    flex: 0 0 85px;
    max-width: 85px;
}

.history .box-result .block-col.status {
    flex: 0 0 90px;
    max-width: 90px;
}

.history .box-result .block-col p > span {
    line-height: 30px;
}

.history .box-result .item svg {
    width: 14px;
    margin-right: 5px;
    vertical-align: middle;
}

.history .box-result .block-col.amount span {
    padding: 0 10px;
}

.history .box-result .item span {
    font-size: 14px;
}

.history .box-result .block-col > span {
    line-height: 30px;
}

.history .box-result .block-col.note span{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
}

.history .item-txid-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
    white-space: nowrap;
    display: block !important;
}


.history-nav .nav-tabs {
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    position: relative;
}

.history .box-result .block-col > span {
    line-height: 30px;
}

.history .box-result .block-col {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    padding-top: 0;
    padding-bottom: 0;
}

.history .box-result .block-col.time {
    flex: 0 0 110px;
    max-width: 110px;
}

.history-body{
    background: #232323;
    border-radius: 5px;
    border: none;
    padding: 0 !important;
    border: 1px solid rgba(255, 255, 255, 0.15);
}


</style>

<style>
.content .inputGroup input {
    background: #fff;
    color: #545454;
}
</style>