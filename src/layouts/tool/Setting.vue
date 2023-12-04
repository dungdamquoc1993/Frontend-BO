<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Đức Nguyễn
  Author URL: @skydn93
========================================================================================== -->

<template>
  <div id="list-tool-setting" class="data-list-container">
    <template>
      <!-- <p>Sắp tới sẽ cập nhận liên quan tới hệ thống</p> -->
      <div class="vx-row">
        <div class="vx-col w-full mb-base">
          <p class="mb-4" style="text-decoration: overline">
            <span style="text-decoration: overline">[THIẾT LẬP MIN RÚT / NẠP]:</span>
          </p>
          <div class="vx-row">
            <div class="vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12">
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" label-placeholder="Min nạp Paypal"
                v-model="settingJson.min_d_paypal" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" label-placeholder="Min rút Paypal"
                v-model="settingJson.min_w_paypal" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4"
                label-placeholder="Phí rút Paypal Nội Bộ" v-model="settingJson.fee_w_paypal_nb" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4"
                label-placeholder="Phí rút Paypal Địa chỉ" v-model="settingJson.fee_w_paypal_acc" />
            </div>
            <!-- <div class="vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12">
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Min nạp BTC" v-model="settingJson.min_d_btc"/>
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Min rút BTC" v-model="settingJson.min_w_btc"/>
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Phí rút BTC Nội bộ" v-model="settingJson.fee_w_btc_nb"/>
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Phí rút BTC Địa chỉ" v-model="settingJson.fee_w_btc_acc"/>
                  </div>
                  <div class="vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12">
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Min nạp ETH" v-model="settingJson.min_d_eth"/>
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Min rút ETH" v-model="settingJson.min_w_eth"/>
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Phí rút ETH Nội bộ" v-model="settingJson.fee_w_eth_nb"/>
                    <vs-input type="number" style="display: inline-block;" class="m-2 mb-4" label-placeholder="Phí rút ETH ERC20" v-model="settingJson.fee_w_eth_ERC20"/>
                  </div> -->
            <div class="vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12">
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" label-placeholder="Min nạp USDT"
                v-model="settingJson.min_d_usdt" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" label-placeholder="Min rút USDT"
                v-model="settingJson.min_w_usdt" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4"
                label-placeholder="Phí rút USDT Nội bộ" v-model="settingJson.fee_w_usdt_nb" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4"
                label-placeholder="Phí rút USDT BEP20 (BSC)" v-model="settingJson.fee_w_usdt_BEP20" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4"
                label-placeholder="Phí rút USDT ERC 20" v-model="settingJson.fee_w_usdt_ERC20" />
            </div>
          </div>
        </div>

        <div class="vx-col w-full md:w-1/2 lg:w-6/12 xl:w-6/12 mb-base">
          <p class="mb-4">
            <span style="text-decoration: overline">[THIẾT LẬP VÍ]:</span>
          </p>
          <div class="vx-row">
            <div class="vx-col w-full centerx md:w-1/2 lg:w-2/4 xl:w-2/4">
              <p class="mb-4">Mặc định Ví sử dụng:</p>
              <ul class="centerx">
                <li class="mb-4">
                  <vs-radio v-model="settingJson.default_wallet_sys" vs-value="usdt">Ví USDT</vs-radio>
                </li>
                <li class="mb-4">
                  <vs-radio disabled="disabled" v-model="settingJson.default_wallet_sys" vs-value="btc">Ví BTC</vs-radio>
                </li>
                <li class="mb-4">
                  <vs-radio disabled="disabled" v-model="settingJson.default_wallet_sys" vs-value="eth">Ví ETH</vs-radio>
                </li>
              </ul>
              <p>
                <i>Ghi chú: Ví sử dụng mặc định dùng để giao dịch tiền tệ giữa
                  Tài Khoản thực và các Ví phụ khác</i>
              </p>
            </div>
            <div class="vx-col w-full centerx md:w-1/2 lg:w-2/4 xl:w-2/4">
              <p class="mb-4">Hiển thị Ví thanh toán:</p>
              <ul class="centerx">
                <li class="mb-4 relative">
                  <vs-checkbox v-model="settingJson.show_wallet_usdt" @change="changeWallet('usdt', $event)">Ví
                    USDT</vs-checkbox>
                  <div class="absolute" style="top: 0; right: 0">
                    <IconCrypto style="width: 20px" coinname="USDT" color="color" format="svg" />
                  </div>
                </li>
                <!-- <li class="mb-4 relative">
                        <vs-checkbox disabled="disabled" v-model="settingJson.show_wallet_btc" @change="changeWallet('btc',$event)">Ví BTC</vs-checkbox>
                        <div class="absolute" style="top: 0; right: 0">
                          <IconCrypto style="width: 20px" coinname="BTC" color="color" format="svg" />
                        </div>
                      </li>
                      <li class="mb-4 relative">
                        <vs-checkbox disabled="disabled" v-model="settingJson.show_wallet_eth" @change="changeWallet('eth',$event)">Ví ETH</vs-checkbox>
                        <div class="absolute" style="top: 0; right: 0">
                          <IconCrypto style="width: 20px" coinname="ETH" color="color" format="svg" />
                        </div>
                      </li> -->
                <li class="mb-4 relative">
                  <vs-checkbox v-model="settingJson.show_wallet_paypal" @change="changeWallet('paypal', $event)">Ví
                    PAYPAL</vs-checkbox>
                  <div class="absolute" style="top: 0; right: 0">
                    <img width="20" :src="require('@/assets/images/sky/icon_bank/paypal-mini.png')
                      " />
                  </div>
                </li>
              </ul>
              <p><i>Ghi chú: Các Ví chứa các khoản tiền NẠP và Rút</i></p>
            </div>
          </div>
        </div>

        <div class="vx-col w-full md:w-1/2 lg:w-6/12 xl:w-6/12 mb-base">
          <p class="mb-4">
            <span style="text-decoration: overline">[THIẾT LẬP QUOTE USD đồng COIN]: </span><i>( Mặc định Auto Update
              )</i>
          </p>
          <div class="vx-row">
            <div class="vx-col centerx md:w-1/2 lg:w-2/4 xl:w-2/4">
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4"
                label-placeholder="Auto Update Seconds" v-model="settingJson.timeLoopUpdateQuote" />
              <p class="m-2 mb-4">
                <i>Chú ý: Thời gian được tính bằng (giây)</i>
              </p>
              <div class="m-2 block">
                <vs-switch v-model="checkOnOffAutoQuote" @change="checkOnOffAutoQuote = !checkOnOffAutoQuote">
                  <span slot="on">Bật</span>
                  <span slot="off">Tắt</span>
                </vs-switch>
              </div>
              <p class="m-2"><i>Chú ý: Bật / tắt Auto cập nhật USD Quote</i></p>
            </div>
            <div class="vx-col centerx md:w-1/2 lg:w-2/4 xl:w-2/4">
              <p class="mb-4">Quote USD:</p>
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" :label-placeholder="`1 USD = ${formatPrice(
                1 / settingJson.quote_USD_BTC,
                6
              )} BTC`" v-model="settingJson.quote_USD_BTC" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" :label-placeholder="`1 USD = ${formatPrice(
                1 / settingJson.quote_USD_ETH,
                4
              )} ETH`" v-model="settingJson.quote_USD_ETH" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" :label-placeholder="`1 USD = ${formatPrice(
                1 / settingJson.quote_USD_USDT,
                2
              )} USDT`" v-model="settingJson.quote_USD_USDT" />
              <vs-input type="number" style="display: inline-block" class="m-2 mb-4" :label-placeholder="`1 USD = ${formatPrice(
                1 / settingJson.quote_USD_PAYPAL,
                2
              )} PAYPAL`" v-model="settingJson.quote_USD_PAYPAL" />
              <p><i>Chú ý: Paypal mặc định là 1</i></p>
            </div>
          </div>
        </div>

        <div class="vx-col w-full mb-base">
          <div class="vx-row">
            <div class="vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12">
              <p class="mb-4">
                <span style="text-decoration: overline">[THIẾT LẬP GỬI THÔNG BÁO]:
                </span>
              </p>
              <!--<p class="mb-4">
                        Telegram Token:
                      </p> -->
              <!--<vs-input style="display: inline-block;" v-model="settingJson.teleToken" class="m-2 mb-4" label-placeholder="Token"/>-->
              <div class="vx-row">
                <div class="vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12">
                  <p class="mb-4">Telegram kênh NẠP / RÚT:</p>
                  <div>
                    <!--<vs-input style="display: inline-block;" v-model="settingJson.teleChatID" class="m-2 mb-4" label-placeholder="Chat ID"/>-->
                    <vs-checkbox :disabled="!activeNTF" v-model="settingJson.teleActiveDeposit"
                      @change="changeActiveNotify('d', $event)">Nạp tiền</vs-checkbox>
                    <p><i>- Ghi chú: Gửi tin khi người dùng nạp tiền</i></p>
                    <vs-checkbox :disabled="!activeNTF" v-model="settingJson.teleActiveWithdraw"
                      @change="changeActiveNotify('w', $event)">Rút tiền</vs-checkbox>
                    <p><i>- Ghi chú: Gửi tin khi người dùng rút tiền</i></p>
                  </div>
                </div>
                <div class="vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12">
                  <p class="mb-4">Telegram kênh ĐẶT CƯỢC:</p>
                  <div>
                    <!--<vs-input style="display: inline-block;" v-model="settingJson.teleChatIDBet" class="m-2 mb-4" label-placeholder="Chat ID"/>-->
                    <vs-checkbox :disabled="!activeNTB" v-model="settingJson.teleActiveBet"
                      @change="changeActiveNotify('b', $event)">Đặt cược</vs-checkbox>
                    <p><i>- Ghi chú: Gửi tin khi người dùng đặt cược</i></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="vx-col centerx md:w-1/2 lg:w-3/12 xl:w-3/12">
              <p class="mb-4">
                <span style="text-decoration: overline">[THIẾT LẬP BẢO TRÌ]:
                </span>
              </p>
              <vs-checkbox v-model="settingJson.maintenance" @change="changeActiveBaoTri($event)">Bảo trì</vs-checkbox>
              <p class="mb-4"><i>- Ghi chú: Bảo trì hệ thống</i></p>
              <p class="mb-4">
                <span style="text-decoration: overline">[THIẾT LẬP MẠNG NẠP TIỀN]:
                </span>
              </p>
              <vs-radio v-model="settingJson.default_netw_pay" vs-value="ct">Chính thức</vs-radio>
              <p></p>
              <vs-radio v-model="settingJson.default_netw_pay" vs-value="tn">Thử nghiệm</vs-radio>
              <p>
                <b>- Mạng đang sử dụng là:
                  {{
                    settingJson.default_netw_pay == "tn"
                    ? "Thử nghiệm"
                    : "Chính thức"
                  }}</b>
              </p>
              <p>
                <i>- Ghi chú: Mạng nạp tiền mặc định BSC <br /><a href="https://bscscan.com">https://bscscan.com</a></i>
              </p>
            </div>
            <div class="vx-col centerx md:w-1/2 lg:w-3/12 xl:w-3/12">
              <p class="mb-4">
                <span style="text-decoration: overline">[THIẾT LẬP ĐỊA CHỈ VÍ]:
                </span>
              </p>
              <vs-input style="display: inline-block" class="m-2 mb-4" v-model="settingJson.ADDRESS_ETH_USDT"
                label-placeholder="Địa chỉ Ví nhận tiền" />
              <vs-input style="display: inline-block" class="m-2 mb-4" v-model="settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT"
                label-placeholder="Private KEY Ví nhận tiền ( Có thể rỗng )" />
              <p>
                <i>- Ghi chú: Là địa chỉ Ví chính người chơi để nạp tiền vào
                  <b>(Vui lòng liên kết 2 mạng BEP20 và ERC20)</b></i>
              </p>
              <vs-input style="display: inline-block" class="m-2 mb-4" v-model="settingJson.ADDRESS_ETH_TRANSACTION"
                label-placeholder="Địa chỉ Ví gửi tiền" />
              <vs-input style="display: inline-block" class="m-2 mb-4" v-model="settingJson.PRIVATE_KEY_ETH_TRANSACTION"
                label-placeholder="Private KEY Ví gửi tiền" />
              <p>
                <i>- Ghi chú: Là địa chỉ Ví dùng để chi trả cho người chơi rút
                  tiền <b>(Vui lòng liên kết 2 mạng BEP20 và ERC20)</b></i>
              </p>
            </div>

            <!-- <div class="vx-col centerx md:w-1/2 lg:w-3/12 xl:w-3/12">
              <p class="mb-4">
                <span style="text-decoration: overline"
                  >[THIẾT LẬP NGÂN HÀNG]:
                </span>
              </p>
              <vs-input
                style="display: inline-block"
                class="m-2 mb-4"
                v-model="settingJson.BANK_NAME"
                label-placeholder="Tên ngân hàng"
              />
               <vs-input
                style="display: inline-block"
                class="m-2 mb-4"
                v-model="settingJson.BANK_ACCOUNT_NAME"
                label-placeholder="Tên chủ tài khoản"
              />
              <vs-input
                style="display: inline-block"
                class="m-2 mb-4"
                v-model="settingJson.BANK_ACCOUNT"
                label-placeholder="Số tài khoản"
              />
              <vs-input
                style="display: inline-block"
                class="m-2 mb-4"
                v-model="settingJson.BANK_BRANCH"
                label-placeholder="Chi nhánh"
              />
            </div> -->
          </div>
        </div>

        <vs-button class="w-full" color="success" type="filled" @click="clickSubmitSetting">Cập nhật</vs-button>
      </div>
    </template>
  </div>
</template>

<script>
import SETTINGS from "../../../settings.json";

export default {
  components: {},
  data() {
    return {
      cnSv: 0,

      checkOnOffAutoQuote: true,
      radioBC: "payeer",
      settingJson: {
        min_d_paypal: 5,
        min_d_btc: 0.001,
        min_d_eth: 0.02,
        min_d_usdt: 5,

        min_w_paypal: 5,
        min_w_btc: 0.001,
        min_w_eth: 0.02,
        min_w_usdt: 5,

        fee_w_paypal_nb: 0, // phí rút về tài khoản trong hệ thống
        fee_w_paypal_acc: 2, // phí rút về tài khoản trong paypal

        fee_w_btc_nb: 0, // phí rút về tài khoản BTC trong hệ thống
        fee_w_btc_acc: 0.0003, // phí rút về tài khoản BTC sàn

        fee_w_eth_nb: 0, // phí rút về tài khoản ETH sàn
        fee_w_eth_ERC20: 0.001, // phí rút về tài khoản ETH sàn

        fee_w_usdt_nb: 0, // phí rút về tài khoản USDT trong hệ thống
        fee_w_usdt_BEP20: 1, // phí rút về tài khoản USDT trong hệ thống
        fee_w_usdt_ERC20: 2, // phí rút về tài khoản USDT sàn

        default_wallet_sys: "usdt",
        default_netw_pay: "tn",

        show_wallet_paypal: true,
        show_wallet_btc: false,
        show_wallet_eth: false,
        show_wallet_usdt: false,

        timeLoopUpdateQuote: 30, // thời gian mỗi giây cập nhập giá USD sấp sĩ coin
        quote_USD_USDT: 1,
        quote_USD_BTC: 1,
        quote_USD_ETH: 1,
        quote_USD_PAYPAL: 1,

        teleChatIDBet: "",
        teleChatID: "",
        teleToken: "",
        teleActiveBet: false,
        teleActiveDeposit: false,
        teleActiveWithdraw: false,

        ADDRESS_ETH_USDT: "",
        PRIVATE_KEY_ADDRESS_ETH_USDT: "",
        ADDRESS_ETH_TRANSACTION: "",
        PRIVATE_KEY_ETH_TRANSACTION: "",

        BANK_NAME: "",
        BANK_ACCOUNT: "",
        BANK_ACCOUNT_NAME: "",
        BANK_BRANCH: "",

        maintenance: false, // bảo trì
      },
    };
  },
  computed: {
    activeNTB() {
      if (this.settingJson.teleChatIDBet == "") {
        return false;
      } else {
        return true;
      }
    },
    activeNTF() {
      if (
        this.settingJson.teleChatID == "" ||
        this.settingJson.teleToken == ""
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    changeActiveBaoTri(event) {
      let o = event.target.checked;
      this.settingJson.maintenance = o;
    },

    changeActiveNotify(val, event) {
      let o = event.target.checked;
      switch (val) {
        case "b":
          this.settingJson.teleActiveBet = o;
          break;
        case "d":
          this.settingJson.teleActiveDeposit = o;
          break;
        case "w":
          this.settingJson.teleActiveWithdraw = o;
          break;
      }
    },

    changeWallet(val, event) {
      let o = event.target.checked;
      switch (val) {
        case "usdt":
          this.settingJson.show_wallet_usdt = o;
          break;
        case "btc":
          this.settingJson.show_wallet_btc = o;
          break;
        case "eth":
          this.settingJson.show_wallet_eth = o;
          break;
        case "paypal":
          this.settingJson.show_wallet_paypal = o;
          break;
      }
    },

    clickSubmitSetting() {
      let obj = {
        qUSDT: this.settingJson.quote_USD_USDT,
        qETH: this.settingJson.quote_USD_ETH,
        qBTC: this.settingJson.quote_USD_BTC,
        qPaypal: this.settingJson.quote_USD_PAYPAL,

        tCUseSys: this.settingJson.default_wallet_sys.toLowerCase(),

        mDBTC: this.settingJson.min_d_btc,
        mDETH: this.settingJson.min_d_eth,
        mDUSDT: this.settingJson.min_d_usdt,
        mDPaypal: this.settingJson.min_d_paypal,

        mWBTC: this.settingJson.min_w_btc,
        mWETH: this.settingJson.min_w_eth,
        mWUSDT: this.settingJson.min_w_usdt,
        mWPaypal: this.settingJson.min_w_paypal,

        iAWPaypal: this.settingJson.show_wallet_paypal,
        iAWETH: this.settingJson.show_wallet_eth,
        iAWUSDT: this.settingJson.show_wallet_usdt,
        iAWBTC: this.settingJson.show_wallet_btc,

        fDPaypalNB: this.settingJson.fee_w_paypal_nb,
        fDPaypalAcc: this.settingJson.fee_w_paypal_acc,
        fDBTCNB: this.settingJson.fee_w_btc_nb,
        fDBTCAcc: this.settingJson.fee_w_btc_acc,
        fDETHNB: this.settingJson.fee_w_eth_nb,
        fDETHERC20: this.settingJson.fee_w_eth_ERC20,
        fDUSDTNB: this.settingJson.fee_w_usdt_nb,
        fDUSDTBEP20: this.settingJson.fee_w_usdt_BEP20,
        fDUSDTERC20: this.settingJson.fee_w_eth_ERC20,

        teleChatIDBet: this.settingJson.teleChatID,
        teleChatID: this.settingJson.teleChatID,
        teleToken: this.settingJson.teleChatToken,
        teleActiveBet: this.settingJson.activeBetSendTelegram,
        teleActiveDeposit: this.settingJson.activeDepositSendTelegram,
        teleActiveWithdraw: this.settingJson.activeWithdraSendTelegram,

        ADDRESS_ETH_USDT: this.settingJson.ADDRESS_ETH_USDT,
        PRIVATE_KEY_ADDRESS_ETH_USDT:
          this.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT,
        ADDRESS_ETH_TRANSACTION: this.settingJson.ADDRESS_ETH_TRANSACTION,
        PRIVATE_KEY_ETH_TRANSACTION:
          this.settingJson.PRIVATE_KEY_ETH_TRANSACTION,
        IS_TEST_SMART_CHAIN:
          this.settingJson.default_netw_pay == "tn" ? true : false,

        timeLoopQuote: this.settingJson.timeLoopUpdateQuote,
        autoQuote: this.settingJson.checkOnOffAutoQuote,

        BANK_NAME: this.settingJson.BANK_NAME,
        BANK_ACCOUNT: this.settingJson.BANK_ACCOUNT,
        BANK_ACCOUNT_NAME: this.settingJson.BANK_ACCOUNT_NAME,
        BANK_BRANCH: this.settingJson.BANK_BRANCH,

        maintenance: this.settingJson.maintenance,
      };
      const token = localStorage.getItem('token')
      this.sendMessage({ type: "setDataSys", data: obj, token });
    },

    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
      return this.$vs.notify({
        text: "Đã cập nhật hệ thống",
        color: "success",
        position: "top-right",
        iconPack: "feather",
        icon: "icon-message-square",
      });
    },

    connectSever() {
      var _this = this;

      this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET_SYS);

      this.connection.onopen = function () {
        console.log(
          "Successfully connected to the echo websocket server systems..."
        );
      };

      this.connection.onclose = function () {
        if (_this.cnSv == 0) {
          _this.$vs.notify({
            text: "Không kết nối được tới máy chủ. Sẽ kết nối lại sau 5 giây",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        } else {
          _this.$vs.notify({
            text: "Đang kết nối lại lần " + _this.cnSv,
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        }

        if (_this.cnSv == 6) {
          _this.$vs.notify({
            text: "Kết nối thất bại. Vui lòng kiểm tra và bật lại máy chủ",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        }

        //console.log('Socket is closed. Reconnect will be attempted in 5 second.', e.reason);
        if (_this.cnSv <= 5) {
          setTimeout(() => {
            _this.connectSever();
            _this.cnSv++;
          }, 5000);
        }
      };

      // _this.connection.onerror = function(err) {
      //   //console.error('Socket encountered error: ', err.message, 'Closing socket');
      //    _this.$vs.notify({
      //         text:'Kết nối máy chủ thất bại.',
      //         color:'danger',
      //         position:'top-right',
      //         iconPack: 'feather',
      //         icon:'icon-message-square'
      //       });
      //   _this.connection.close();
      // };

      this.connection.onmessage = function (event) {
        let data = JSON.parse(event.data);
        let dl = data.data;

        if (data.type === "getDataSys") {
          _this.settingJson.min_d_paypal = dl.minDepositPaypal;
          _this.settingJson.min_d_btc = dl.minDepositBTC;
          _this.settingJson.min_d_eth = dl.minDepositETH;
          _this.settingJson.min_d_usdt = dl.minDepositUSDT;

          _this.settingJson.min_w_paypal = dl.minWithdrawalPaypal;
          _this.settingJson.min_w_btc = dl.minWithdrawalBTC;
          _this.settingJson.min_w_eth = dl.minWithdrawalETH;
          _this.settingJson.min_w_usdt = dl.minWithdrawalUSDT;

          _this.settingJson.fee_w_paypal_nb = dl.feeRutPaypalNoiBo; // phí rút về tài khoản trong hệ thống
          _this.settingJson.fee_w_paypal_acc = dl.feeRutPaypalAcc; // phí rút về tài khoản trong paypal

          _this.settingJson.fee_w_btc_nb = dl.feeRutBTCNoiBo; // phí rút về tài khoản BTC trong hệ thống
          _this.settingJson.fee_w_btc_acc = dl.feeRutBTCAcc; // phí rút về tài khoản BTC sàn

          _this.settingJson.fee_w_eth_nb = dl.feeRutETHNoiBo; // phí rút về tài khoản ETH sàn
          _this.settingJson.fee_w_eth_ERC20 = dl.feeRutETHERC20; // phí rút về tài khoản ETH sàn

          _this.settingJson.fee_w_usdt_nb = dl.feeRutUSDTNoiBo; // phí rút về tài khoản USDT trong hệ thống
          _this.settingJson.fee_w_usdt_BEP20 = dl.feeRutUSDTBEP20; // phí rút về tài khoản USDT trong hệ thống
          _this.settingJson.fee_w_eth_ERC20 = dl.feeRutUSDTERC20; // phí rút về tài khoản USDT sàn

          _this.settingJson.default_wallet_sys =
            dl.typeCurrUseSys.toLowerCase();

          _this.settingJson.show_wallet_paypal = dl.isActiveWalletPaypal;
          _this.settingJson.show_wallet_btc = dl.isActiveWalletBTC;
          _this.settingJson.show_wallet_eth = dl.isActiveWalletETH;
          _this.settingJson.show_wallet_usdt = dl.isActiveWalletUSDT;

          _this.settingJson.timeLoopUpdateQuote = dl.timeLoop;
          _this.checkOnOffAutoQuote = dl.autoQuoteSet;

          _this.settingJson.quote_USD_BTC = dl.quotePriceBTC;
          _this.settingJson.quote_USD_ETH = dl.quotePriceETH;
          _this.settingJson.quote_USD_USDT = dl.quotePriceUSDT;
          _this.settingJson.quote_USD_PAYPAL = dl.quotePricePAYPAL;

          _this.settingJson.teleChatIDBet = dl.teleChatIDBet;
          _this.settingJson.teleChatID = dl.teleChatID;
          _this.settingJson.teleToken = dl.teleChatToken;
          _this.settingJson.teleActiveBet = dl.activeBetSendTelegram;
          _this.settingJson.teleActiveDeposit = dl.activeDepositSendTelegram;
          _this.settingJson.teleActiveWithdraw = dl.activeWithdraSendTelegram;

          _this.settingJson.ADDRESS_ETH_USDT = dl.ADDRESS_ETH_USDT;
          _this.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT =
            dl.PRIVATE_KEY_ADDRESS_ETH_USDT;
          _this.settingJson.ADDRESS_ETH_TRANSACTION =
            dl.ADDRESS_ETH_TRANSACTION;
          _this.settingJson.PRIVATE_KEY_ETH_TRANSACTION =
            dl.PRIVATE_KEY_ETH_TRANSACTION;
          _this.settingJson.default_netw_pay =
            dl.IS_TEST_SMART_CHAIN == true ? "tn" : "ct";

          _this.settingJson.BANK_NAME = dl.BANK_NAME;
          _this.settingJson.BANK_ACCOUNT = dl.BANK_ACCOUNT;
          _this.settingJson.BANK_ACCOUNT_NAME = dl.BANK_ACCOUNT_NAME;
          _this.settingJson.BANK_BRANCH = dl.BANK_BRANCH;

          _this.settingJson.maintenance = dl.maintenance;
        }
      };
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
  },
  mounted() {
    this.isMounted = true;

    this.connectSever();
  },
};
</script>

<style lang="scss">
#list-tool-setting {
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

      >span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
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

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);

        td {
          padding: 20px;

          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }

          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
        }

        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }

      th.td-check {
        padding: 0 15px !important;
      }

      tr {
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
