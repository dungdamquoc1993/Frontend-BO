<template>
  <div id="wallet">
    <div class="vx-row">
      <div :class="{ 'ld-loading': isLoadingAPI }">
        <div class="loading">
          <div class="loading__ring">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
              y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve">
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
              </path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
              y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve">
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full h-48 subBanner">
        <div class="container h-full flex items-center info">
          <div class="flex flex-col justify-center relative">
            <p class="text-lg">{{ $t('TotalAssets') }}</p>
            <p>
              <span class="price mr-2">
                {{
                  isAcc
                  ? (isCurrency == 'VND' ? this.formatPriceVND(blObj.blLive * 24000) : `$${this.formatPrice(blObj.blLive,
                    2)}`)
                  : (isCurrency == 'VND' ? this.formatPriceVND(blObj.blDemo * 24000) : `$${this.formatPrice(blObj.blDemo,
                    2)}`)
                }}
              </span>
            </p>
            <!-- <p>
              <span class="price mr-2" v-if="getSetSys.typeCurrUseSys == 'usdt'">
                {{ formatPrice(balanceForUser * getSetSys.quotePriceUSDT, 2) }}
              </span>
              <span class="price mr-2" v-if="getSetSys.typeCurrUseSys == 'btc'">
                {{ formatPrice(balanceForUser * getSetSys.quotePriceBTC, 2) }}
              </span>
              <span class="price mr-2" v-if="getSetSys.typeCurrUseSys == 'eth'">
                {{ formatPrice(balanceForUser * getSetSys.quotePriceETH, 2) }}
              </span>
              <span :class="`icon ${getSetSys.typeCurrUseSys} inline-block`"></span>
              <span class="basePrice text-lg">~ ${{ formatPrice(balanceUser, 2) }}</span>
            </p> -->
          </div>
        </div>
      </div>
      <div class="w-full" style="padding: 0 4rem">
        <div class="container">
          <vs-tabs>
            <vs-tab :label="$t('DepositHistory')" @click="
              getListHisTrade(),
              (showVC = false),
              (showVGD = false),
              (showNT = true)
              "></vs-tab>
            <vs-tab :label="$t('WithdrawHistory')" @click="
              getListHisTrade(),
              (showVC = true),
              (showVGD = false),
              (showNT = false)
              "></vs-tab>
            <vs-tab :label="$t('Recharge')" @click="
              getListHisTradeWGD(),
              (showVGD = true),
              (showVC = false),
              (showNT = false)
              "></vs-tab>
          </vs-tabs>
          <!-- Start nap tien -->

          <div class="showV" :class="{ block: showNT }">
            <div>
              <!-- <div class="history-body history-body-2">
                <div class="flex justify-between flex-col items-baseline lg:flex-row">
                  <h4 class="text-2xl color-white font-bold mb-3">
                    Nạp Ví:
                  </h4>
                </div>
                <div class="vx-row">
                  <div class="vx-col w-full lg:w-full mb-3">
                    <vs-input type="number" class="w-full" label="Số tiền nạp (USDT)" v-model="depositUSD" />
                    <vs-button class="my-4" color="success" icon-pack="feather" icon="icon-dollar-sign" type="relief"
                      @click="
                        submitDepositRequest(),
                        getListHisTrade(),
                        (showQR = true)
                        ">Yêu cầu nạp</vs-button>

                    <div class="showQR" :class="{ block: showQR }">
                      <span>Vui lòng chuyển khoản đúng {{ formatMoney(depositUSD * 24500) }} VND số tiền vào Ngân Hàng Thụ
                        hưởng sau!</span>
                      <p>
                        Giá trị nhận tối thiểu là: $
                        {{ getSetSys.minDepositUSDT }} (
                        {{ getSetSys.minDepositUSDT }} USDT)
                      </p>
                      <p>
                        Giá trị nhận VND tỷ giá 24.500VND= 1
                        (USDT)
                      </p>
                      <div class="flex items-center">
                        <vs-button class="my-4 mr-2" icon-pack="feather" icon="icon-copy" type="relief"
                          v-clipboard:copy="'VietinBank - Ngân Hàng TMCP Công Thương Việt Nam'"
                          @click="saoChep">VietinBank - Ngân Hàng Thương Việt Nam</vs-button>
                      </div>
                      <div class="flex items-center">
                        <vs-button class="my-4 mr-2" icon-pack="feather" icon="icon-copy" type="relief"
                          v-clipboard:copy="'sondz'" @click="saoChep">
                          beneficiary account number: sondz</vs-button>
                      </div>
                      <div class="flex items-center">
                        <vs-button class="my-4 mr-2" icon-pack="feather" icon="icon-copy" type="relief"
                          v-clipboard:copy="'CHUA DAT TEN'" @click="saoChep">Đại diện tổ chức nhận khoản thanh toán
                          :**********</vs-button>
                      </div>

                    </div>
                  </div>
                </div>
              </div> -->
              <div class="history lg:mb-4">
                <h4 class="mb-3 my-4 history-title">{{ $t('TransactionHistory') }}</h4>
                <div class="history-body relative" :class="{ 'ld-loading': isLoading }">
                  <div class="loading">
                    <div class="loading__ring">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                        xml:space="preserve">
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                        </path>
                      </svg>
                    </div>
                    <div class="loading__ring">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                        xml:space="preserve">
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="showHisM">
                    <div class="history-content">
                      <div class="box-result table-custom">
                        <div class="center">
                          <vs-table :max-items="maxHisWallet" pagination :data="dataHisWallet">
                            <template slot="thead">
                              <vs-th> {{ $t('Time') }} </vs-th>
                              <vs-th> {{ $t('Value') }} </vs-th>
                              <vs-th> {{ $t('Type') }} </vs-th>
                              <vs-th> {{ $t('Description') }} </vs-th>
                              <vs-th> {{ $t('Cryptocurrency') }} </vs-th>
                            </template>
                            <template slot-scope="{data}">
                              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                <vs-td :data="formatDateWallet(tr.created_at)">
                                  {{ formatDateWallet(tr.created_at) }}
                                </vs-td>
                                <vs-td :data="formatPrice(tr.amount, 2)">
                                  {{ formatPrice(tr.amount, 2) }}
                                </vs-td>
                                <vs-td :data="tr.token_name">
                                  {{ tr.token_name.toUpperCase() }}
                                </vs-td>
                                <vs-td :data="tr.hash">
                                  <div class="tooltip">
                                    {{ formatTxHash(tr.tx_hash) }}
                                    <span class="tooltiptext">{{ tr.tx_hash }}</span>
                                  </div>
                                </vs-td>
                                <vs-td :data="tr.crypto_price">
                                  {{ tr.crypto_price }}
                                </vs-td>
                              </vs-tr>
                            </template>
                          </vs-table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- End nap tien -->

          <div class="showV" :class="{ block: showVC }">
            <div class="box-coin-wrapper">
              <div class="history lg:mb-4">
                <h4 class="mb-3 history-title">{{ $t('TransactionHistory') }}</h4>
                <div class="history-body relative" :class="{ 'ld-loading': isLoading }">
                  <div class="loading">
                    <div class="loading__ring">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                        xml:space="preserve">
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                        </path>
                      </svg>
                    </div>
                    <div class="loading__ring">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                        xml:space="preserve">
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="showHisM">
                    <div class="history-content">
                      <div class="box-result table-custom">
                        <div class="center">
                          <vs-table :max-items="maxHisWallet" pagination :data="dataHisWithdraw">
                            <template slot="thead">
                              <vs-th> {{ $t('Time') }} </vs-th>
                              <vs-th> {{ $t('Value') }} </vs-th>
                              <vs-th> {{ $t('Type') }} </vs-th>
                              <vs-th> {{ $t('Description') }} </vs-th>
                              <vs-th> {{ $t('Cryptocurrency') }} </vs-th>
                              <vs-th> {{ $t('Address') }} </vs-th>
                            </template>
                            <template slot-scope="{data}">
                              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                <vs-td :data="formatDateWallet(tr.created_at)">
                                  {{ formatDateWallet(tr.created_at) }}
                                </vs-td>
                                <vs-td :data="formatPrice(tr.amount, 2)">
                                  {{ formatPrice(tr.amount, 2) }}
                                </vs-td>
                                <vs-td :data="tr.token_name">
                                  {{ tr.token_name.toUpperCase() }}
                                </vs-td>
                                <vs-td :data="tr.tx_hash">
                                  <div class="tooltip">
                                    {{ formatTxHash(tr.tx_hash) }}
                                    <span class="tooltiptext">{{ tr.tx_hash }}</span>
                                  </div>
                                </vs-td>
                                <vs-td :data="tr.crypto_price">
                                  {{ tr.crypto_price }}
                                </vs-td>
                                <vs-td :data="tr.to_address">
                                  {{ tr.to_address }}
                                </vs-td>
                              </vs-tr>
                            </template>
                          </vs-table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="showV" :class="{ block: showVGD }">
            <div class="contentBox">
              <div class="vx-row justify-center">
                <div class="vx-col w-full lg:w-1/2 mt-4">
                  <div class="background backgroundImg backgroundLive">
                    <div class="content flex flex-col justify-center items-center">
                      <span class="text-lg color-gray sm:mb-3 font-bold">{{ $t('RealAccount') }}</span>
                      <span class="price flex items-center mb:sm-3 mb-2">
                        <span class="text-3xl font-bold">
                          {{ isCurrency == 'VND' ? this.formatPriceVND(blObj.blLive * 24000) :
                            `$${this.formatPrice(blObj.blLive, 2)}` }}
                        </span>
                      </span>
                      <button @click="showPopTrans()" type="button"
                        class="btn button wbtn btn-large btn-radius w-9/12 cursor-pointer">
                        <img style="width: 20px; height: 20px; margin-right: 4px;"
                          src="../../assets/images/wallet/wallet-svgrepo-com.svg" />
                        <span>{{ $t('Wallet') }}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vx-col w-full lg:w-1/2 mt-4">
                  <div class="background backgroundImg backgroundDemo">
                    <div class="content flex flex-col justify-center items-center">
                      <span class="text-lg color-gray sm:mb-3 font-bold">{{ $t('DemoAccount') }}</span>
                      <span class="price flex items-center mb:sm-3 mb-2">
                        <span class="text-3xl font-bold">
                          {{ isCurrency == 'VND' ? this.formatPriceVND(blObj.blDemo * 24000) :
                            `$${this.formatPrice(blObj.blDemo, 2)}` }}
                        </span>
                      </span>
                      <button @click="clickReloadMoneyDemo" type="button"
                        class="btn button wbtn btn-large btn-radius w-9/12 cursor-pointer">
                        <span class="iconSubmit iconSubmitDemo"></span>
                        <span>{{ $t('Reload') }}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vx-col w-full lg:w-1/2 mt-4">
                  <div class="background backgroundImg backgroundComplaint">
                    <div class="content flex flex-col justify-center items-center">
                      <span class="text-lg color-gray sm:mb-3 font-bold">{{ $t('DepositComplaints') }}</span>
                      <span class="price flex items-center mb:sm-3 pb-12"></span>
                      <button @click="clickDepositComplaint" type="button"
                        class="btn button wbtn btn-large btn-radius w-9/12 cursor-pointer">
                        <img style="width: 20px; height: 20px; margin-right: 4px;"
                          src="../../assets/images/wallet/complaint-4.svg" />
                        <span>{{ $t('Complain') }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <vs-popup class="text-center" title="Chuyển tiền" :active.sync="popupTransferActive">
      <div class="header flex">
        <div class="leftHeader flex flex-col items-center">
          <span class="text-sm mb-2 font-bold white" v-html="textWalletHtml"></span>
          <span class="text-3xl font-bold">{{
            formatPrice(amountAcc, 2)
          }}</span>
        </div>
        <div class="rightHeader flex flex-col items-center">
          <span class="text-sm mb-2 font-bold white" v-html="textAccLive"></span>
          <span class="text-3xl font-bold">{{
            formatPrice(amountAccLive, 2)
          }}</span>
        </div>
        <div @click="changeTransMoney" class="changeAmount cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" class="iconTransfer">
            <g id="Group_10897" data-name="Group 10897" transform="translate(-559.431 -202.553)">
              <g id="Group_4613" data-name="Group 4613" transform="translate(559.431 202.553)">
                <g id="Rectangle_2919" data-name="Rectangle 2919" transform="translate(0)" fill="#e9f0fa" stroke="#e5e5e5"
                  stroke-width="1">
                  <rect width="30" height="30" rx="15" stroke="none"></rect>
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="none"></rect>
                </g>
              </g>
              <g id="conversion" transform="translate(567.976 210.905)">
                <path id="Path_13963" data-name="Path 13963"
                  d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"
                  transform="translate(-1 -1.172)" fill="#031219"></path>
                <path id="Path_13964" data-name="Path 13964"
                  d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"
                  transform="translate(-1 -20.395)" fill="#031219"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="content flex flex-col items-center">
        <div class="inputGroup mb-3 w-3/4 relative">
          <vs-input class="inputx text-left w-full" placeholder="Nhập số tiền" v-model="enterAmount" />
          <div class="input-append">
            <button type="button" class="btn cursor-pointer" @click="enterAllMoney">
              Tất cả
            </button>
          </div>
        </div>
        <vs-button @click="clickTransMoney" color="rgb(62, 201, 214)" type="filled">Chuyển Tiền</vs-button>
      </div>
    </vs-popup> -->
    <vs-popup class="qDeposit" :title="$t('Wallet')" :active.sync="popupTransferActive">
      <div :class="{ 'ld-loading': ldForm }">
        <div class="loading">
          <div class="loading__ring">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
              y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
              </path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
              y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div class="icon-wallet">
        <img src="../../assets/images/wallet/wallet-svgrepo-com.svg" alt="Wallet">
      </div>
      <vs-tabs alignment="center">
        <vs-tab :label="$t('Recharge')">
          <div class="con-tab-ejemplo">
            <div class="wrapper">
              <div class="flex items-center justify-center gap-5">
                <div class="flex flex-col">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">{{ $t('Money') }}</span>
                  <div class="relative">
                    <vs-button color="#38495d" type="filled" class="text-left btn-dropdown" @click="closeDropdown(true)">
                      <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" />
                      <span class="white mx-2">{{ walletIsSelect.name || listWallet[0].name }}</span>
                      <feather-icon class="material-icons" icon="ChevronDownIcon" svgClasses="w-4 h-4" />
                    </vs-button>
                    <div class="listWallShow" :class="{ active: showPopWalSL }">
                      <span v-for="wallet in listWallet" :key="wallet.name" class="drop cursor-pointer"
                        @click="selectWallet(wallet)">
                        <img style="width: 14px; height: 14px;" :src="wallet.icon" />
                        <span class="ml-2" style="color: #2f4553; font-weight: 600;">{{ wallet.name }}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div v-if="walletIsSelect.children" class="flex flex-col">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">{{ $t('Network') }}</span>
                  <div class="relative">
                    <vs-button color="#38495d" type="filled" class="text-left btn-dropdown" @click="closeDropdown(false)">
                      <span class="white mr-2">{{ networkIsSelect.nameShort || walletIsSelect.children[0].nameShort
                      }}</span>
                      <feather-icon class="material-icons" icon="ChevronDownIcon" svgClasses="w-4 h-4" />
                    </vs-button>
                    <div class="listWallShow listWallNetwork" :class="{ active: showPopNetwork }">
                      <span v-for="network in walletIsSelect.children" :key="network.name"
                        class="drop cursor-pointer text-left" @click="selectNetwork(network)">
                        <span style="color: #2f4553; font-weight: 600;">{{ network.name }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full relative mt-5">
                <label class="flex flex-col w-full">
                  <span class="inline-flex items-center font-semibold text-[14px] text-[#b1bad3] pb-1 justify-between">
                    <div class="inline-flex w-full">
                      {{ $t('DepositAddress') }} {{ walletIsSelect.name || listWallet[0].name }} {{ $t('yours') }}
                    </div>
                  </span>
                  <div
                    class="flex w-full shrink-0 shadow-[0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 2px 0 rgba(0, 0, 0, .12)] rounded">
                    <div class="copy-wrapper rounded-l">
                      <span class="copy-text">{{ addressPayment }}</span>
                      <input type="hidden" id="addressPayment" :value="addressPayment">
                    </div>
                    <div class="input-button-copy rounded-r flex-shrink-0">
                      <button class="rounded" type="button" @click="copyAddress">
                        <span class="inline-flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                              d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-center mt-5 ">
                <div
                  class="flex items-center justify-center p-2 rounded-sm shadow-[0 4px 6px -1px rgba(27, 23, 23, .2), 0 2px 4px -1px rgba(0, 0, 0, .12)]"
                  style="background: white">
                  <img alt="deposit-address" src="../../assets/images/wallet/qrcode.png" width="128px" height="128px"
                    id="walletQRCode" />
                </div>
              </div>
              <span class="block text-center text-[#b1bad3] text-[14px] mt-5">
                {{ $t('SendOnly') }} {{ walletIsSelect.name || listWallet[0].name }} {{ $t('ToThisAddress') }},
                {{ walletIsSelect.children && walletIsSelect.children.length ? '2' : '1' }}
                {{ $t('ConfirmationsNeeded') }}
              </span>
            </div>
          </div>
        </vs-tab>
        <vs-tab :label="$t('Withdraw')">
          <div class="con-tab-ejemplo">
            <div class="flex flex-col gap-5">
              <div class="flex items-center justify-center gap-5">
                <div class="flex flex-col items-center">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">{{ $t('BalanceAmount') }}</span>
                  <div class="text-white font-semibold">
                    <span style="font-size: 16px;">
                      {{
                        isAcc
                        ? (isCurrency == 'VND' ? this.formatPriceVND(blObj.blLive * 24000) :
                          `$${this.formatPrice(blObj.blLive, 2)}`)
                        : (isCurrency == 'VND' ? this.formatPriceVND(blObj.blDemo * 24000) :
                          `$${this.formatPrice(blObj.blDemo, 2)}`)
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-5">
                <div class="flex flex-col">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">{{ $t('Money') }}</span>
                  <div class="relative">
                    <vs-button color="#38495d" type="filled" class="text-left btn-dropdown wallShow"
                      @click="closeDropdown(true)">
                      <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" />
                      <span class="white mx-2">{{ walletIsSelect.name || listWallet[0].name }}</span>
                      <feather-icon class="material-icons" icon="ChevronDownIcon" svgClasses="w-4 h-4" />
                    </vs-button>
                    <div class="listWallShow" :class="{ active: showPopWalSL }">
                      <div v-for="wallet in listWallet" :key="wallet.name" class="drop cursor-pointer"
                        @click="selectWallet(wallet)">
                        <div class="flex items-center mr-5">
                          <span class="inline-block" style="color: #2f4553; font-weight: 600;">0.00000000</span>
                        </div>
                        <div class="flex items-center">
                          <img style="width: 14px; height: 14px;" :src="wallet.icon" />
                          <span class="ml-2" style="color: #2f4553; font-weight: 600;">{{ wallet.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="walletIsSelect.children" class="flex flex-col">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">{{ $t('Network') }}</span>
                  <div class="relative">
                    <vs-button color="#38495d" type="filled" class="text-left btn-dropdown" @click="closeDropdown(false)">
                      <span class="white mr-2">{{ networkIsSelect.nameShort || walletIsSelect.children[0].nameShort
                      }}</span>
                      <feather-icon class="material-icons" icon="ChevronDownIcon" svgClasses="w-4 h-4" />
                    </vs-button>
                    <div class="listWallShow listWallNetwork" :class="{ active: showPopNetwork }">
                      <span v-for="network in walletIsSelect.children" :key="network.name"
                        class="drop cursor-pointer text-left" @click="selectNetwork(network)">
                        <span style="color: #2f4553; font-weight: 600;">{{ network.name }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <label class="flex flex-col w-full">
                <span class="label-content svelte-5ecfln">
                  <div class="flex items-center pb-1">
                    <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" />
                    <span class="inline-block font-semibold text-[14px] text-[#2f4553] ml-1">
                      <span>{{ walletIsSelect.name || listWallet[0].name }} {{ $t('Address') }}</span>
                    </span>
                    <div class="asterisk-wrapper svelte-41a1vp">
                      <span class="text-red inline-flex justify-start text-[14px] font-normal ml-1">*</span>
                    </div>
                  </div>
                </span>
                <div class="input-wrap">
                  <div class="input-content">
                    <input autocomplete="on" class="input-address" type="text" name="address" v-model="userAddress" />
                  </div>
                </div>
              </label>
              <label class="flex flex-col w-full">
                <span class="flex items-center justify-between">
                  <div class="flex items-center pb-1">
                    <span class="inline-block font-semibold text-[14px] text-[#2f4553] ml-1">
                      <span>{{ $t('AmountOfMoney') }}</span>
                    </span>
                    <div class="asterisk-wrapper svelte-41a1vp">
                      <span class="text-red inline-flex justify-start text-[14px] font-normal ml-1">*</span>
                    </div>
                  </div>
                  <div class="inline-block font-semibold text-[#2f4553]">
                    <span class="inline-flex items-center gap-1" style="font-size: 12px;">
                      {{ transfromMoney }}
                      <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" />
                    </span>
                  </div>
                </span>
                <div class="input-wrap">
                  <div class="input-content">
                    <div class="after-icon">
                      <span class="font-semibold">US$</span>
                    </div>
                    <input autocomplete="on" class="input-address rounded-r-none" type="number" name="amount"
                      :value="money" @input="e => handleCalculateMoney(e)" />
                  </div>
                  <div class="input-button-wrap inline-flex flex-shrink-0">
                    <button class="btn-max" type="button" @click="handleMaxMoney">
                      <span class="inline-flex">{{ $t('Max') }}</span>
                    </button>
                  </div>
                </div>
              </label>
              <button class="btn-crypto" @click="handleWithdrawCryto">
                <span>{{ $t('Withdraw') }}</span>
              </button>
              <p class="text-withdraw">
                {{ $t('MinimumWithdrawAmount') }}
                <span>
                  10 USD
                  <!-- <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" /> -->
                </span>.
                {{ $t('TransactionProcessingFee') }}
                <span>
                  1 USD
                  <!-- <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" /> -->
                </span>
                {{ $t('FromYourRemainingBalance') }}
              </p>
            </div>
          </div>
        </vs-tab>
        <vs-tab :label="$t('BuyCrypto')">
          <div class="con-tab-ejemplo">
            <div class="flex flex-col gap-5 items-center justify-center">
              <a href="https://p2p.binance.com/vi/trade/all-payments/USDT?fiat=VND" class="btn-crypto"
                style="background-color: #f0b90b;" target="_blank">
                <img style="height: 20px; object-fit: cover;" src="../../assets/images/wallet/binace.svg" />
              </a>
              <a href="https://www.bybit.com/fiat/trade/otc/?actionType=1&token=USDT&fiat=VND&paymentMethod"
                class="btn-crypto" style="background-color: #fff;" target="_blank">
                <img style="height: 20px; object-fit: cover;" src="../../assets/images/wallet/bybit.png" />
              </a>
              <a href="https://www.okx.com/vi/p2p-markets/vnd/buy-usdt" class="btn-crypto"
                style="background-color: #cf4444;" target="_blank">
                <img style="height: 20px; object-fit: cover;" src="../../assets/images/wallet/okx.svg" />
              </a>
              <a href="https://www.kucoin.com/vi/otc/buy/USDT-VND" class="btn-crypto" style="background-color: #c4ffc4;"
                target="_blank">
                <img style="height: 20px; object-fit: cover;" src="../../assets/images/wallet/kucoin.svg" />
              </a>
            </div>
            <p class="mt-5 text-withdraw">
              {{ $t('DisclaimerTheParty') }}
            </p>
          </div>
        </vs-tab>
      </vs-tabs>
    </vs-popup>
    <vs-popup class="text-center" title="Thông tin" :active.sync="popupBillActive">
      <div class="flex justify-between mb-2 text-white" style="border-bottom: 1px solid #213f62; padding-bottom: 5px">
        <span>Thời gian:</span>
        <span>{{ timeShow }}</span>
      </div>
      <div class="flex justify-between mb-2 text-white" style="border-bottom: 1px solid #213f62; padding-bottom: 5px">
        <span>Giá trị:</span>
        <span>{{ valueShow }}</span>
      </div>
      <div class="flex justify-between mb-2 text-white" style="border-bottom: 1px solid #213f62; padding-bottom: 5px">
        <span>Loại:</span>
        <span>{{ typeShow }}</span>
      </div>
      <div class="flex justify-between mb-2 text-white" style="border-bottom: 1px solid #213f62; padding-bottom: 5px">
        <span>Mô tả:</span>
        <span>{{ descriptShow }}</span>
      </div>
      <div class="flex justify-between mb-2 text-white" style="border-bottom: 1px solid #213f62; padding-bottom: 5px">
        <span>Ghi chú:</span>
        <span>{{ noteShow }}</span>
      </div>
      <div class="flex justify-between mb-2 text-white" style="border-bottom: 1px solid #213f62; padding-bottom: 5px">
        <span>Trạng thái:</span>
        <span>{{ statusShow }}</span>
      </div>
    </vs-popup>

    <!--<nap-tien :isSidebarActive="addSidebarNapTien" @closeSidebar="toggleDataSidebarNapTien"/>
    <rut-tien :isSidebarActive="addSidebarRutTien" @closeSidebar="toggleDataSidebarRutTien"/> -->

    <vs-prompt title="" :active.sync="popupActiveNRTien" :buttons-hidden="true">
      <nap-rut-tien />
    </vs-prompt>
  </div>
</template>

<script>
var connectionNAP = false;
//import NapTien from '@/pages/trade/slidebar/NapTien.vue'
//import RutTien from '@/pages/trade/slidebar/RutTienS.vue'
import NapRutTien from "@/pages/trade/slidebar/NapRutTien.vue";
import getData from "@/pages/trade/navbar/components/data.json";
import AuthenticationService from "@/services/AuthenticationService";
import getSetSys from "@/services/settingSys.json";
import moment from "moment";
import SETTINGS from "../../../settings.json";
import QRCode from "qrcode";
import axios from 'axios';
import BigNumber from 'bignumber.js';

export default {
  components: {
    //NapTien,
    //RutTien,
    NapRutTien,
  },
  data() {
    return {
      typeShow: "",
      timeShow: "",
      valueShow: "",
      descriptShow: "",
      noteShow: "",
      statusShow: "",

      getSetSys: getSetSys,

      popupActiveNRTien: false,
      popupBillActive: false,

      showNT: true,
      showVC: false,
      showVGD: false,
      showQR: false,
      showHisUSD: true,
      showHisHH: false,
      textAddress: "",

      depositUSD: "",
      blObj: getData,
      textWalletHtml:
        '<span class="mr-1 color-blue uppercase green">USDT</span> <span>Wallet</span>',
      textAccLive: "Tài khoản Thực",
      amountAcc: 0,
      amountAccLive: 0,
      typeChange: false, // false: Wall to Live, true: Live to Wallet
      enterAmount: "",
      popupTransferActive: false,
      currentxUSDT: 1,
      currentxHH: 1,
      currentxWGD: 1,
      email: "",
      password: "",
      error: null,
      addSidebarNapTien: false,
      addSidebarRutTien: false,
      balanceUser: 0,

      balanceUSDT: 0,
      balanceETH: 0,
      balanceBTC: 0,
      balancePaypal: 0,

      isLoading: false,
      maxHisWallet: 10,
      pageHisWallet: 1,
      dataHisWallet: [],
      dataHisWithdraw: [],
      totalRUSDT: 0,
      dataHisWalletHoaHong: [],
      totalRHH: 0,
      dataHisWalletWGD: [],
      totalRWGD: 0,
      showPopWalSL: false,
      showPopNetwork: false,
      listWallet: [
        {
          icon: require('../../assets/images/wallet/bitcoin-logo-svgrepo-com.svg'),
          name: 'BTC',
        },
        {
          icon: require('../../assets/images/wallet/ethereum-eth.svg'),
          name: 'ETH',
        },
        {
          icon: require('../../assets/images/wallet/usdt.svg'),
          name: 'USDT',
          children: [
            {
              name: 'ETH - Ethereum (ERC20)',
              nameShort: 'ETH'
            },
            {
              name: 'BSC - BNB Smart Chain (BEP20)',
              nameShort: 'BNB'
            },
            {
              name: 'POLYGON - Matic',
              nameShort: 'MATIC'
            }
          ]
        },
        {
          icon: require('../../assets/images/wallet/bnb.svg'),
          name: 'BNB',
        },
        {
          icon: require('../../assets/images/wallet/usdc.svg'),
          name: 'USDC',
          children: [
            {
              name: 'ETH - Ethereum (ERC20)',
              nameShort: 'ETH'
            },
            {
              name: 'BSC - BNB Smart Chain (BEP20)',
              nameShort: 'BNB'
            },
            {
              name: 'POLYGON - Matic',
              nameShort: 'MATIC'
            }
          ]
        },
        {
          icon: require('../../assets/images/wallet/matic-logo.svg'),
          name: 'MATIC',
        },
      ],
      walletIsSelect: {},
      networkIsSelect: {},
      addressPayment: '',
      isAcc: 0,
      userInfo: {},
      money: '',
      transfromMoney: '0',
      userAddress: '',
      ldForm: false,
      isCurrency: 'USD',
      isLoadingAPI: false
    };
  },
  computed: {
    //   giaTriUocTinh(){
    //       return this.formatPrice(getSetSys.quotePriceUSDT + getSetSys.quotePriceETH + getSetSys.quotePriceBTC + getSetSys.quotePricePAYPAL, 2)
    //   },
    balanceForUser() {
      return getData.balance;
    },

    getEmail() {
      return getData.email;
    },
  },
  methods: {
    showPopTrans() {
      this.popupTransferActive = true;
      this.createQRCode(this.addressPayment);
    },
    popupBill(tr) {
      this.popupBillActive = true;

      this.timeShow = this.formatDateWallet(tr.created_at);

      if (getData.displayName.toUpperCase() == tr.from_u.toUpperCase()) {
        this.valueShow =
          tr.type_key == "rt" ||
            tr.type_key == "ct" ||
            tr.type_key == "ctsa" ||
            tr.type_key == "nn" ||
            tr.type_key == "mv"
            ? "-$" + this.formatPrice(tr.amount, 2)
            : "+$" + this.formatPrice(tr.amount, 2);
      } else if (getData.displayName.toUpperCase() == tr.to_u.toUpperCase()) {
        this.valueShow = "+$" + this.formatPrice(tr.amount, 2);
      }

      switch (tr.type_key) {
        case "rt":
          this.typeShow = "Rút tiền";
          break;
        case "nt":
          this.typeShow = "Nạp tiền" + tr.paypal_order_id ? "Paypal" : "";
          break;
        case "nn":
          this.typeShow = "Nạp nhanh";
          break;
        case "mv":
          this.typeShow = "Mua VIP";
          break;
        default:
      }

      if (
        tr.type_key == "ct" ||
        tr.type_key == "ctsa" ||
        tr.type_key == "ctas"
      ) {
        this.typeShow = "Chuyển tiền";
      }

      this.descriptShow =
        tr.type_key == "ctsa" || tr.type_key == "ctas" ? "" : tr.from_u + ": ";
      this.descriptShow = this.descriptShow + tr.type;
      this.noteShow = tr.note ? tr.note : "-";
      if (tr.status == 1) {
        this.statusShow = "Hoàn tất";
      } else if (tr.status == 0) {
        this.statusShow = "Đợi";
      } else if (tr.status == 0) {
        this.statusShow = "Hủy";
      }
    },

    formatMoney(value, type = '.') {
      return String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${type}`);
    },

    getAddressF() {
      this.isLoading = true;
      AuthenticationService.getAddressCoin("USDT").then((res) => {
        this.isLoading = false;
        let d = res.data;
        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => { });
          return;
        }
        this.textAddress = d.a;

        var canvas = document.querySelector("canvas");

        QRCode.toCanvas(
          canvas,
          getSetSys.ADDRESS_ETH_USDT,
          {
            margin: 1,
            color: {
              dark: "#fa2843",
            },
          },
          function (error) {
            if (error) console.error(error);
            //console.log('success!');
          }
        );
      });
    },

    saoChep() {
      return this.$vs.notify({
        text: "Đã Sao chép vào bộ nhớ",
        color: "success",
        position: "top-right",
        iconPack: "feather",
        icon: "icon-check",
      });
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    formatPriceVND(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    },

    showPopNapRutTien() {
      this.popupActiveNRTien = true;
    },

    submitDepositRequest() {
      let amount = this.depositUSD;

      amount = this.replaceAll(amount.toString(), ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (amount < 5) {
        return this.$vs.notify({
          text: "Số tiền tối thiểu không đủ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let obj = {
        email: getData.email,
        nick: getData.email,
        m: amount,
      };

      AuthenticationService.depositRequest(obj).then((res) => {
        if (res.data.success == 1) {
          this.$vs.notify({
            text: "Gửi yêu cầu nạp thành công.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        } else {
          this.$vs.notify({
            text: "Giá trị không hợp lệ",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      });
    },

    toggleDataSidebarNapTien(val = false) {
      this.addSidebarNapTien = val;
    },

    toggleDataSidebarRutTien(val = false) {
      this.addSidebarRutTien = val;
    },

    createQRCode(text) {
      const opts = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        }
      }

      QRCode.toDataURL(text, opts, (err, url) => {
        if (err) throw err;

        const walletQRCode = document.getElementById('walletQRCode');
        if (walletQRCode) {
          walletQRCode.src = url;
        }
      });
    },

    changeTransMoney() {
      if (this.typeChange) {
        // Live to Wallet
        this.typeChange = false;

        let b = this.textWalletHtml;
        let a = this.textAccLive;
        let d = getData.balance;
        let c = getData.blLive;

        this.textAccLive = b;
        this.textWalletHtml = a;
        this.amountAcc = d;
        this.amountAccLive = c;
      } else {
        // Live to Wallet
        this.typeChange = true;

        let a = this.textWalletHtml;
        let b = this.textAccLive;
        let c = getData.balance;
        let d = getData.blLive;

        this.textAccLive = a;
        this.textWalletHtml = b;
        this.amountAcc = d;
        this.amountAccLive = c;
      }
    },

    clickReloadMoneyDemo() {
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.success) {
          this.blObj.blDemo = 1000;

          return this.$vs.notify({
            text: "Tài khoản Demo đã nạp.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
            position: "top-right",
          });
        }
      });
    },

    clickDepositComplaint() {
      const userInfo = JSON.parse(localStorage.getItem("INFO"));
      if (userInfo) {
        const data = {
          userId: userInfo.id
        }
        this.isLoadingAPI = true;
        AuthenticationService.requestCheckBalanceFromUsers(data)
          .then((res) => {
            this.isLoadingAPI = false;
            if (res.data.success) {
              let successMessage = ''
              if (res.data.data.updateBtcBalance.status) {
                successMessage = `btc balance`
              } if (res.data.data.updateEthBalance.status) {
                successMessage = `${successMessage} and eth balance`
              } if (res.data.data.updateBnbBalance.status) {
                successMessage = `${successMessage} and bnb balance`
              } if (res.data.data.updateMaticBalance.status) {
                successMessage = `${successMessage} and matic balance`
              } if (res.data.data.updateUsdtEthBalance.status) {
                successMessage = `${successMessage} and usdt_eth balance`
              } if (res.data.data.updateUsdcEthBalance.status) {
                successMessage = `${successMessage} and usdc_eth balance`
              } if (res.data.data.updateUsdtBnbBalance.status) {
                successMessage = `${successMessage} and usdt_bsc balance`
              } if (res.data.data.updateUsdcBnbBalance.status) {
                successMessage = `${successMessage} and usdc_bsc balance`
              } if (res.data.data.updateUsdtMaticBalance.status) {
                successMessage = `${successMessage} and usdt_matic balance`
              } if (res.data.data.updateUsdcMaticBalance.status) {
                successMessage = `${successMessage} and usdc_matic balance`
              }
              if (successMessage != '') {
                successMessage = `${successMessage} has updated`
              } else {
                successMessage = `nothing has updated`
              }
              return this.$vs.notify({
                text: `check deposit success ${successMessage}`,
                iconPack: "feather",
                icon: "icon-check",
                color: "success",
                position: "top-right",
              });
            } else {
              return this.$vs.notify({
                text: "You can only check deposit request only once in 1 hours please wait till next request.",
                color: 'danger',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                position: "top-right",
              });
            }
          })
          .catch((error) => {
            this.isLoadingAPI = false;
          })
      }
    },

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    clickTransMoney() {
      return
      // let amount = this.enterAmount.toString();
      // amount = this.replaceAll(amount, ",", "");
      // amount = this.replaceAll(amount.toString(), "-", "");
      // if (!this.isNumber(amount) || amount <= 0) {
      //   return this.$vs.notify({
      //     text: "Giá trị không hợp lệ",
      //     color: "danger",
      //     position: "top-right",
      //     iconPack: "feather",
      //     icon: "icon-x-circle",
      //   });
      // }
      // if (this.typeChange) {
      //   // nếu true thì live to wallet

      //   // gửi tiền từ live tới tài khoản chính
      //   let obj = {
      //     email: getData.email,
      //     m: amount,
      //   };

      //   AuthenticationService.sendMoneyLiveToUsdt(obj).then((res) => {
      //     if (res.data.success) {
      //       getData.blLive -= amount;
      //       getData.balance += amount;

      //       this.amountAcc = getData.blLive;
      //       this.amountAccLive = getData.balance;

      //       // reload lại lịch sử
      //       this.getListHisTradeWGD();

      //       return this.$vs.notify({
      //         text: "Chuyển tiền thành công",
      //         color: "success",
      //         position: "top-right",
      //         iconPack: "feather",
      //         icon: "icon-check",
      //       });
      //     } else {
      //       return this.$vs.notify({
      //         text: "Số dư của bạn không đủ",
      //         color: "danger",
      //         position: "top-right",
      //         iconPack: "feather",
      //         icon: "icon-x-circle",
      //       });
      //     }
      //   });
      // } else {
      //   // wallet to live

      //   // gửi tiền từ tài khoản chính tới live
      //   let obj = {
      //     email: getData.email,
      //     m: amount,
      //   };

      //   AuthenticationService.sendMoneyUsdtToLive(obj).then((res) => {
      //     if (res.data.success) {
      //       getData.blLive += amount;
      //       getData.balance -= amount;

      //       this.amountAcc = getData.balance;
      //       this.amountAccLive = getData.blLive;

      //       // reload lại lịch sử
      //       this.getListHisTradeWGD();

      //       return this.$vs.notify({
      //         text: "Chuyển tiền thành công",
      //         color: "success",
      //         position: "top-right",
      //         iconPack: "feather",
      //         icon: "icon-check",
      //       });
      //     } else {
      //       return this.$vs.notify({
      //         text: "Số dư của bạn không đủ",
      //         color: "danger",
      //         position: "top-right",
      //         iconPack: "feather",
      //         icon: "icon-x-circle",
      //       });
      //     }
      //   });
      // }
    },

    getListHisTrade() {
      this.isLoading = true;
      const userInfo = JSON.parse(localStorage.getItem("INFO"));
      if (userInfo) {
        const data = {
          params: {
            userId: userInfo.id
          }
        }
        AuthenticationService.getDepositCryptoHistoryByUserid(data)
          .then((res) => {
            if (res.data.success) {
              this.isLoading = false;
              this.dataHisWallet = res.data.data;
            }
          })
        AuthenticationService.getWithdrawCryptoHistoryByUserid(data)
          .then((res) => {
            if (res.data.success) {
              this.isLoading = false;
              this.dataHisWithdraw = res.data.data;
            }
          })
      }
    },

    clickPageUSDT(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data;
        }
      });
    },

    getListHisTradeHH() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHH().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
          let c = (res.data.count / 10).toString();
          //this.totalRHH = Number(c.split(".")[0])
          this.totalRHH = Math.ceil(c);
        }
      });
    },

    clickPageHH(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHHNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
        }
      });
    },

    getListHisTradeWGD() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGD().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
          let c = (res.data.count / 10).toString();
          this.totalRWGD = Number(c.split(".")[0]);
        }
      });
    },

    clickPageWGD(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGDNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
        }
      });
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    formatDateWallet(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY HH:mm:ss");
      }
    },

    formatTxHash(value) {
      if (value) {
        return `${value.substr(0, 3)}...${value.substr(-2)}`
      }
    },

    getBalanceWallet() {
      return
      // AuthenticationService.getBalanceWallet().then((res) => {
      //   let d = res.data;
      //   if (d.success == 3 || d.success == 4) {
      //     localStorage.removeItem("token");
      //     this.$router.push("/login").catch(() => { });
      //     return;
      //   }
      //   if (d.success) {
      //     let mU = d.data.usdt;
      //     let mE = d.data.eth;
      //     let mB = d.data.btc;
      //     let mP = d.data.paypal;

      //     this.balanceUSDT = mU;
      //     this.balanceETH = mE;
      //     this.balanceBTC = mB;
      //     this.balancePaypal = mP;

      //     // mặc định hiển thị tiền đầu vào
      //     this.getAmount = this.balancePaypal;
      //   }
      // });
    },

    getSysWallet() {
      AuthenticationService.getSetupWallet().then((res) => {
        let g = res.data.data;
        getSetSys.quotePriceUSDT = this.replaceAll(
          this.formatPrice(g.qUSDT, 2),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceETH = this.replaceAll(
          this.formatPrice(g.qETH, 4),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceBTC = this.replaceAll(
          this.formatPrice(g.qBTC, 6),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePricePAYPAL = this.replaceAll(
          this.formatPrice(g.qPaypal, 2),
          ",",
          ""
        ); //  giá sấp sĩ USD

        getSetSys.typeCurrUseSys = g.tCUseSys; // đồng tiền tệ sử dụng trong hệ thống

        getSetSys.minDepositBTC = g.mDBTC; // nạp tiền tối thiểu
        getSetSys.minDepositETH = g.mDETH; // nạp tiền tối thiểu
        getSetSys.minDepositUSDT = g.mDUSDT; // nạp tiền tối thiểu
        getSetSys.minDepositPaypal = g.mDPaypal; // nạp tiền tối thiểu

        getSetSys.minWithdrawalBTC = g.mWBTC; // rút tiền tối thiểu
        getSetSys.minWithdrawalETH = g.mWETH; // rút tiền tối thiểu
        getSetSys.minWithdrawalUSDT = g.mWUSDT; // rút tiền tối thiểu
        getSetSys.minWithdrawalPaypal = g.mWPaypal; // rút tiền tối thiểu

        getSetSys.isActiveWalletPaypal = g.iAWPaypal; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletETH = g.iAWETH; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletUSDT = g.iAWUSDT; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletBTC = g.iAWBTC; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống

        getSetSys.feeRutPaypalNoiBo = g.fDPaypalNB;
        getSetSys.feeRutPaypalAcc = g.fDPaypalAcc;
        getSetSys.feeRutBTCNoiBo = g.fDBTCNB;
        getSetSys.feeRutBTCAcc = g.fDBTCAcc;
        getSetSys.feeRutETHNoiBo = g.fDETHNB;
        getSetSys.feeRutETHERC20 = g.fDETHERC20;
        getSetSys.feeRutUSDTNoiBo = g.fDUSDTNB;
        getSetSys.feeRutUSDTBEP20 = g.fDUSDTBEP20;
        getSetSys.feeRutUSDTERC20 = g.fDUSDTERC20;

        getSetSys.ADDRESS_ETH_USDT = g.ADDRESS_ETH_USDT;

        getSetSys.BANK_NAME = g.BANK_NAME;
        getSetSys.BANK_ACCOUNT_NAME = g.BANK_ACCOUNT_NAME;
        getSetSys.BANK_ACCOUNT = g.BANK_ACCOUNT;
        getSetSys.BANK_BRANCH = g.BANK_BRANCH;
      });
    },

    sendMessage(message) {
      this.connectionNAP.send(JSON.stringify(message));
    },

    getInfoUser() {
      this.sendMessage({
        type: "accountDetail",
        data: { email: getData.email },
      });
    },
    onWindowLoad() {
      this.getInfoUser();
    },

    selectWallet(val) {
      this.walletIsSelect = val;
      this.showPopWalSL = false;
      this.showPopNetwork = false;
      switch (val.name) {
        case 'BTC':
          this.addressPayment = this.userInfo.btc_address;
          break;
        case 'ETH':
        case 'BNB':
        case 'MATIC':
          this.addressPayment = this.userInfo.evm_native_address;
          break;
        case 'USDT':
        case 'USDC':
          this.addressPayment = this.userInfo.evm_erc20_address;
          break;
        default:
          break;
      }
      this.createQRCode(this.addressPayment);
      // const coinName = this.walletIsSelect.children
      //   ? this.walletIsSelect.children[0].nameShort
      //   : this.walletIsSelect.name || this.listWallet[0].name;
      const coinName = this.walletIsSelect.name
      this.calculateMoney(coinName);
    },

    selectNetwork(val) {
      this.networkIsSelect = val;
      this.showPopNetwork = false;
      this.showPopWalSL = false;
      // const coinName = val.nameShort || this.walletIsSelect.children[0].nameShort;
      // this.calculateMoney(coinName);
    },

    closeDropdown(isPopwal) {
      if (isPopwal) {
        this.showPopWalSL = !this.showPopWalSL;
        this.showPopNetwork = false;
      } else {
        this.showPopNetwork = !this.showPopNetwork;
        this.showPopWalSL = false;
      }
    },
    calculateMoney(coinName) {
      if (!["USDT", "USDC"].includes(coinName.toUpperCase())) {
        axios.get(`https://api.binance.com/api/v3/klines?symbol=${coinName}USDT&interval=1m&limit=1`)
          .then((res) => {
            const value = new BigNumber(res.data[0][4]).toString();
            switch (coinName) {
              case 'BTC':
              case 'BNB':
                this.transfromMoney = (this.money / value).toFixed(8);
                break;
              case 'ETH':
              case 'MATIC':
                this.transfromMoney = (this.money / value).toFixed(18);
                break;
              default:
                this.transfromMoney = this.money;
                break;
            }
          })
      } else this.transfromMoney = this.money
    },

    handleCalculateMoney(e) {
      this.money = e.target.value;
      // const coinName = this.walletIsSelect.children
      //   ? this.networkIsSelect.nameShort || this.walletIsSelect.children[0].nameShort
      //   : this.walletIsSelect.name || this.listWallet[0].name;
      const coinName = this.walletIsSelect.name ? this.walletIsSelect.name : this.listWallet[0].name
      this.calculateMoney(coinName);
    },

    async handleWithdrawCryto() {
      if (this.ldForm) return
      const getNetwork = () => {
        if (this.walletIsSelect.name) {
          return ["BTC", "ETH", "BNB", "MATIC"].includes(this.walletIsSelect.name) ? this.walletIsSelect.name : this.networkIsSelect.nameShort ? this.networkIsSelect.nameShort : this.listWallet[2].children[0].nameShort
        } else {
          return this.listWallet[0].name
        }
      }
      if (this.userInfo) {
        this.ldForm = true;
        const data = {
          userId: this.userInfo.id,
          network: getNetwork(),
          tokenName: this.walletIsSelect.name || this.listWallet[0].name,
          userAddress: this.userAddress,
          amountWithdrawInUsd: this.money.toString(),
        }
        await AuthenticationService.withdrawCryptoForUser(data)
          .then((res) => {
            this.ldForm = false;
            if (res.data.success) {
              this.$vs.notify({
                text: "Rút tiền thành công.",
                iconPack: "feather",
                icon: "icon-check",
                color: "success",
              });
            } else {
              this.$vs.notify({
                text: `Rút tiền thất bại: ${res.data.message}`,
                color: "danger",
                position: "top-right",
                iconPack: "feather",
                icon: "icon-x-circle",
              });
            }
          })
          .catch(() => {
            this.ldForm = false;
            this.$vs.notify({
              text: "Rút tiền thất bại",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          })
      }
    },

    handleMaxMoney() {
      this.money = this.isAcc
        ? this.blObj.blLive.toString()
        : this.blObj.blDemo.toString();
      // const coinName = this.walletIsSelect.children
      //   ? this.networkIsSelect.nameShort || this.walletIsSelect.children[0].nameShort
      //   : this.walletIsSelect.name || this.listWallet[0].name;
      const coinName = this.walletIsSelect.name
      this.calculateMoney(coinName);
    },
    copyAddress() {
      const thisIns = this;

      this.$copyText(this.addressPayment).then(function () {
        thisIns.$vs.notify({
          text: 'Đã sao chép vào bộ nhớ',
          color: 'success',
          iconPack: 'feather',
          position: 'top-right',
          icon: 'icon-check-circle'
        })
      }, function () {
        thisIns.$vs.notify({
          text: 'Lỗi sao chép',
          color: 'danger',
          iconPack: 'feather',
          position: 'top-right',
          icon: 'icon-alert-circle'
        })
      })
    }
  },
  mounted() {
    this.getSysWallet();

    this.getListHisTrade();
    setTimeout(() => {
      this.getListHisTrade();
    }, 1000);
    this.getListHisTradeWGD();
    this.getBalanceWallet();
  },

  created() {
    this.isCurrency = JSON.parse(localStorage.getItem('CURRENCY')) || 'USD';
    this.userInfo = JSON.parse(localStorage.getItem("INFO"));
    if (this.userInfo) {
      this.addressPayment = this.userInfo.btc_address;
    }

    this.createQRCode(this.addressPayment);
    this.amountAcc = getData.balance;
    this.amountAccLive = getData.blLive;

    if (!connectionNAP) {
      connectionNAP = true;
      this.connectionNAP = new WebSocket(SETTINGS.BASE_URL_SOCKET_NAP);

      this.connectionNAP.onopen = function () {
        //console.log("Successfully connected to the echo websocket server...")
        this.onWindowLoad();
      }.bind(this);

      this.connectionNAP.onmessage = function (event) {
        let data = JSON.parse(event.data);

        if (data.type === "mess") {
          let dl = data.data;

          this.amountAcc += dl.usd * 1;
          getData.balance += dl.usd * 1;
          this.balanceUSDT += dl.usd * 1;

          return this.$vs.notify({
            text: dl.mess,
            color: dl.style,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }.bind(this);
    }

    this.getAddressF();
    let acc = localStorage.getItem("BO_BALANCE_TYPE");
    if (acc == "LIVE") {
      this.isAcc = getData.isAccount = 1;
    } else {
      this.isAcc = getData.isAccount = 0;
    }
  },
};
</script>

<style scoped>
#wallet {
  color: #fff;
}

.showV {
  display: none;
}

.showQR {
  display: none;
}

.content .inputGroup .input-append button {
  width: 60px;
  height: 38px;
  background: transparent;
  border: none;
}

.content .inputGroup .input-append {
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.content {
  padding: 2rem;
}

.header {
  position: relative;
  background-color: #181c21;
}

.header .leftHeader {
  border-right: 1px solid rgba(255, 255, 255, 0.17);
}

.header .leftHeader,
.header .rightHeader {
  padding: 2rem;
  flex: 1 auto;
  max-width: 50%;
}

.header .iconTransfer {
  width: 40px;
  height: 40px;
}

.header .changeAmount {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.sectionTable {
  padding-top: 6rem;
}

.contentBox .background.backgroundLive {
  background-color: #2e3c4c;
  background-image: url("~@/assets/images/sky/livebanner.png");
}

.contentBox .background.backgroundDemo {
  background-color: #2e3c4c;
  background-image: url("~@/assets/images/sky/winbanner.png");
}

.contentBox .background.backgroundComplaint {
  background-color: #2e3c4c;
  background-image: url("~@/assets/images/sky/savings-mortgage-lending-background.png");
}

.backgroundImg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.contentBox .background {
  position: relative;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.text-red {
  color: red !important;
}

/*.contentBox .background:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 32.08661%;
}

.contentBox .background > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.contentBox .background .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}*/

.contentBox .background .content {
  border-radius: 5px;
}

.contentBox .wbtn.btn-radius {
  border: 1px solid transparent;
  border-radius: 3px !important;
}

.button.wbtn.btn-large {
  padding: 11px 2.5rem;
}

.button.wbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2177ff;
  color: #fff;
  font-weight: 400;
}

.iconSubmit {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
}

.iconSubmit.iconSubmitLive {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS45ODEiIGhlaWdodD0iMjEuOTg2IiB2aWV3Qm94PSIwIDAgMjEuOTgxIDIxLjk4NiI+CiAgPGcgaWQ9ImNvbnZlcnNpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjk4MSAxMC45OTMpIHJvdGF0ZSgxMzUpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQzIiBkYXRhLW5hbWU9IlBhdGggMjYyNDMiIGQ9Ik0xNC41NzEsNi44SC45NzFBLjkxOC45MTgsMCwwLDEsMCw1LjgyOWEuOTE4LjkxOCwwLDAsMSwuOTcxLS45NzFIMTIuMjRMOS4wMzQsMS42NTFhLjkzOS45MzksMCwwLDEsMC0xLjM2LjkzOS45MzksMCwwLDEsMS4zNiwwbDQuODU3LDQuODU3YS44ODcuODg3LDAsMCwxLC4xOTQsMS4wNjlBLjkzNC45MzQsMCwwLDEsMTQuNTcxLDYuOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ0IiBkYXRhLW5hbWU9IlBhdGggMjYyNDQiIGQ9Ik01LjgyOCwxNS44YS44ODIuODgyLDAsMCwxLS42OC0uMjkxTC4yOTEsMTAuNjUxQS44ODcuODg3LDAsMCwxLC4xLDkuNTgzLjkzNC45MzQsMCwwLDEsLjk3MSw5aDEzLjZhLjkxOC45MTgsMCwwLDEsLjk3MS45NzEuOTE4LjkxOCwwLDAsMS0uOTcxLjk3MUgzLjNsMy4yMDYsMy4yMDZhLjkzOS45MzksMCwwLDEsMCwxLjM2QS44ODIuODgyLDAsMCwxLDUuODI4LDE1LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjI1NykiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo=);
}

.iconSubmit.iconSubmitDemo {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy43OTUiIGhlaWdodD0iMTguNDg4IiB2aWV3Qm94PSIwIDAgMTcuNzk1IDE4LjQ4OCI+CiAgPGcgaWQ9InJlZnJlc2gtMDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIDAuMDgxKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjI1OSIgZGF0YS1uYW1lPSJQYXRoIDI2MjU5IiBkPSJNMTguOCw3LjM2NiwxNy41NTUtLjA4MSwxNC45OTMsMi40ODFhOC44LDguOCwwLDEsMCwyLjksMTAuNjQxLjguOCwwLDAsMC0xLjQ2OC0uNjQyLDcuMjE1LDcuMjE1LDAsMSwxLTIuNTczLTguODU0bC0yLjUsMi41WiIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==);
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

.history .box-result .block-col p>span {
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

.history .box-result .block-col>span {
  line-height: 30px;
}

.history .box-result .block-col.note span {
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

.history .box-result .block-col>span {
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

.history .box-result .block-col.type {
  text-align: center;
}

.history-body {
  background: #02142b;
  border-radius: 5px;
  border: none;
  padding: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.history-body-2 {
  padding: 20px !important;
}

.boxCoin img,
.boxCoin .curency-icon {
  max-width: 44px;
  margin-right: 0.5rem;
}

.boxCoin .boxCoinFooter {
  border-color: rgba(255, 255, 255, 0.1);
}

.boxCoin .boxCoinFooter img {
  width: 18px;
  margin-right: 5px;
}

.boxCoin .boxCoinFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-top: 1px solid #ddd;
  font-size: 0.8rem;
}

.boxCoinFooter a {
  color: #fff;
}

.boxCoin .boxCoin-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
}

.subBanner {
  color: rgba(255, 255, 255, 0.3);
  height: 160px;
  width: 100%;
  background-color: #2e3c4c;
}

.subBanner .price {
  color: #fff;
  font-size: 2.75rem;
  font-weight: 700;
}

.subBanner .icon {
  display: inline-block;
  background-size: cover;
  width: 36px;
  height: 35px;
}

.boxCoin .curency-icon.PAYPAL,
.subBanner .icon.PAYPAL {
  background-image: url(data:image/png;base64,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);
}

.boxCoin .curency-icon.USDT,
.subBanner .icon.USDT {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAABHNCSVQICAgIfAhkiAAACrRJREFUWEfVWHtwVNUZ/87d3Xt3926ym4SQQEIMGiGQKhXkkVGRiLWCtSJqCJR2bB1ftdXa4gPqpNtKiy+0HceqM3Uc0dYSBBy0tQUhQmBStZ3BMMROEZCYZIc8djfZe3fv7t17Tuc7d3dzd908JPSPnkxms7nn8Tu/8/t+33cugf+zRsbC629ttfdHuy4cHgyLIIoACQAQwfycTEvPkfWZAFdRYXK6p/ozf0NDcrTpRwfMGHlg75+u6mPx7Vos5iVEIAAsa570N+sk2T0A8Fm+flkTUezDmNMjq9MMqWnr9U0HCCG5U/Eh+QEzRoAQdv8Hf365Kxy8g1FDsC5AGBBGctDjZGyU+SZwGjgfFQRaWVj8yovXrL2bMUbygR6NYfLUP96pOTp49iM1oRUCg2zAFtayNjIBYON0oS6nM3xpUcWCjfUrzuRbZhSGgfxw7x93BRKRm6ieRNoy/cYU/VcGbM7GUofFAJhNdECFw/Xu89d99yY85dwpv7S+nzEh3rpzYVcyckCJKE4gJMOujRDwiq5zP/c8G0owA5S4BowgLYRh87jcQrXsXfCbA8eOgt9PxztFct/fXn+mOx55ABgTgDG+TUIBKmQvPFy/Atx2DO/z0z4dDMBTH74HNrvdJIIBozYClVLhloFX9jTvaGmhVqazGWaMbOvY697X09sZ0dRKxkBgAg8m3qo8RfD40ps5YAEZmWRjjMEn/d3wi7bdYHc4uDBSaxmFbvfpeVJp/YZlNw6CJcBzVyUP79vefFILNRt6EruhG2QkUFngg18vXQ2yXTovgClj0NHXDY8d3g2izZ7xQARlk0TjIsnb/OS1a7ZYg28EsN8vbG2or+iI9Z4IRVVRQIvK2g6BSo8XNl+9Gjx2CQgxH+fz3Vzi8xoqjs0FbBnICGE+p1u5vOzi2h9fdmUgzXIG0m0tLbYyb+KhHl3ZQhNJfjrph+kFZ8g++NXVq01JZOBm97IJWQ6IqMBg+VMHugNKwn/4bZNhK2AAJjglqBKcj/UOS0/uaGw0RhIHY2Tj/m3FAUb2hoeG5jGB2HKzCi7pIAJMdRfkUp+xphUzL4Ubai7hzOEJ4JFrhg6//fh96FOHwWBZAc8lEDeSrC+mjFiRBTSl1PB5vR0X2l0r/ctuO4vBl6aHPNq6Y90pZfDVeNKwE8x0OY1zxBhQMzSynuI3BPedOYuhcc7ClFAIBx5LJmDToV3QFQnxPnl9NSWvXIlRAsxpd+jVsvfOp69p2maSyBg5Dp2OZ/7SfjKsxytxkfEaspdujFLAs0oYSVg7dwl8b+7iDMP4TDV0ePjgW9ATCfN94lhbasO4VoYaZqk7LHwQIlCfw3V65Up5diNppAT8fuEn9TW3f8G0PySiGtgs9GVshpgMUkZBsjnA4xDBI7rA5RDBZXeAKNh57l46YxZcUVmTJQmdGvBG54cwGI1AghoQS+r8V01ooOgaRJM6JKkBdsFcGW0tQxmuC8CcTifMsMk/ePYbTa+RR/a1eIMk8dbZoWADEQQht4BBBpJJA6Z7vDCvvBqKJTeoegL6o0MQiqkQ1FRQ9TggsDW1C+HW2ZdnAUZwzW1vQ68aBgexgVdy8d9S2QslLg9gDXhmqJ/982wXbohgnJj5I6M8ZgDQcm/R4UriXkU27NuxrEsL7YnrCRnPK0u/DDiLqy6eB1E9CR393RBQQqAkNKAp3QlE4OzixtbPXQK3zFrAl0PTw1NBBh87tBu6lSAkKeX/4z+McVaLJDfUFE2Fy8ougM6BXmgPnOTPrMKkwKgsSZFpDncjuee91z4OaMp8TMO5kWZQCtdW18Gts+fDLw/vgTORILcfe8q60oGIZCCQ9XX1cMus+ZnEhM+jug4/P7QLupWRoMMsic8wgHETxKDQVLcErqueC4+07oBwQrMWRJxxNJ1yp6edPLjvzcd7E+qPNA2L9Ox8i/EnO0S2vq6e1BRPhc7+Hvh0IADdkSBE9DjXosmaydxVM2ZxHaNHZ2xNj8Nrx9u5dLAhWIdgB1kUYYooQ5WvBL5eVgWl7gJ458QncKTnRBa7KWkwySFGKp3e35HbW191+pj7/r6E8oQSjeHxfsnSbESAUrcHaounwewp02C67OPBhkGEgYPVlhKPg6LHue+aicKUhZ0QcIsSyA4X+CQn/xsTDy4S1qJwZmgAjg/2wqlwPyjJ+MjtJKUJlIPL5SLTXIUbiAgv4jgOcNPBHT89pQ41xzStIP2/rKsPAdANAyg1QLQ5wCe5ocxdyJmZ4vZAgeSC+VOrYKa3JMsV8QTae09BQA1DMKpCvxaBfjUC/TGFRRIxgieDMkNSTHWbDW8gWCE6JVGtkL2/fLZhzdasZOY/3iIG++i9Z+Pqc7FYzLTMUSyZT8tM3abTCOpx3ZzF0DRnkekSKY2ibDYd3AVfoIYpNa0LfwSCdWveBGUmEEZl0QVl7oINMEBeeq6xMZabffn3zR/sXn88OvhiTNPcPAwpL63HbajjploEvHDE1oBCTE9+KehGm4wLCZkFYLJDitb6yu9uvvLGN/NXa5nUxcjPDmy/I6BFnlfjmpiqgTjmsYCPBRhTc9ol8lV4lg1wzG5JSpZL8l3dQfsb6aIn3Sc/BsbIE21//XZHpHfXsB4nNgqEV2e4dUvqtpqKQQ1oql0CTXMsiQMYxHQdNrWlAFNTA5akkBKs+UEJowWSS7+ioOLa+668/siE7nQjRQIjD7W2rO7VlBeUeKw0pbdRSR5PElzDKW3nuVkySgAKHc5QuSTfvXV5087RImhMeWKNvKDMvfh49Ozfw/GY20azr/tWLY4H2Jo4rON4AiGM+iR37BJn6Q0fD2iHc2Vg7T+ReCIb399+0xcJ5YVIQivnL1EwEHNGIntNtYsmFnRoMmblhhphXtEVKJfke59cvubdUV55ZDBPBDDc9fLLjum1U+o/jw6/HYxHCwljtlzL+yoMZ6yQEKPE5R6qdHpW2diU9rHeqY0ddPl9h2w+vHPxZ8ND2wbj0Yv4nS/t1dz9TFtbk7Y1iw+bxU/IclUyrcvnKThZLXlv91+9qn08Zs8FMKCma6eJl3dHh/YMasoUwcCXAGbUM0ZhXV09NPJqbST4sfS0AuZHKhBaJHt6ZjpLbj4WiB4dS7O53E1IErmDnv3oQF1HqOutsKrWUMLlgTcXKPd4odJTBJQnQpq5+/17MAAa1bEkZRSYUSIX/qdOKl370NIVHeNmpJwO5wTY7/cLxrJLF/foyvaQqlQwRgk6FrLMbRojEv9IRSYmTEzHgs1GfW75RJUgr4O2Y0f9Oa+hJgL+nACnJiatp097Xz/ZdnAgEqkTGBNGII5IAsUqADCDgDFVLjx286yZy791wVWhiYDL12cygJFFsmn/zkv6IPZ6UFW+lqQGN6r0pOla1ibYWIlc8Gm54FzzeMMtnaOXVeNvY3KAecRh0fW5dM/+I/8KqEOzBIPZra9NGIBR7i3ueOmatYsIgDEZsOPVM+Nv19Lj0daWmgEj/vugqi43jCQnwm6zs+KCgjYfs93x9PKmUxO1rrEWnjzDI7OTB1tanLFSY39gOLQIE8v0At+RqUL8m/6G72tfafdjdD6fgPkyj+xrqQoR/RV8q1SaFO/c3N55Jvel9GTAn3fACGbjoZZSUAC2rGwcOB8ysG7wfwJ4MgyON/a/dC9tUIDKfkAAAAAASUVORK5CYII=);
}

.boxCoin .curency-icon.ETH,
.subBanner .icon.ETH {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjE3N2ZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwNWZjMyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzQ2MjUiIGRhdGEtbmFtZT0iR3JvdXAgNDYyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgPGcgaWQ9Ikdyb3VwXzQ2MTQiIGRhdGEtbmFtZT0iR3JvdXAgNDYxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzNiIgcng9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfNDYwNCIgZGF0YS1uYW1lPSJHcm91cCA0NjA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS4wNzYgNi4xMjMpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjIiIGRhdGEtbmFtZT0iUGF0aCAxMzkyMiIgZD0iTTE2LjUsNHY4Ljc4TDIzLjkxOSwxNi4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuMDc2IC00KSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzEzOTIzIiBkYXRhLW5hbWU9IlBhdGggMTM5MjMiIGQ9Ik0xNi40MjIsNCw5LDE2LjFsNy40MjItMy4zMTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOSAtNCkiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjQiIGRhdGEtbmFtZT0iUGF0aCAxMzkyNCIgZD0iTTE2LjUsMjEuOTI0djUuOTY2bDcuNDI2LTEwLjI3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjA3NiAtNC4xMzgpIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjUiIGRhdGEtbmFtZT0iUGF0aCAxMzkyNSIgZD0iTTE2LjQyMiwyNy44ODlWMjEuOTIzTDksMTcuNjE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkgLTQuMTM4KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzkyNiIgZGF0YS1uYW1lPSJQYXRoIDEzOTI2IiBkPSJNMTYuNSwyMC40OTVsNy40MjEtNC4zMDlMMTYuNSwxMi44NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4wNzYgLTQuMDkpIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjciIGRhdGEtbmFtZT0iUGF0aCAxMzkyNyIgZD0iTTksMTYuMTg2bDcuNDIyLDQuMzA5VjEyLjg3MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05IC00LjA5KSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);
}

.boxCoin .curency-icon.BTC,
.subBanner .icon.BTC {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNTUiIHgyPSIwLjU0OSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmE5NDFhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q4N2QwMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzE1MDEyIiBkYXRhLW5hbWU9Ikdyb3VwIDE1MDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIgLTE1KSI+CiAgICA8ZyBpZD0iR3JvdXBfNDYxMyIgZGF0YS1uYW1lPSJHcm91cCA0NjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMiAxNSkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzNiIgcng9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzEzOTIxIiBkYXRhLW5hbWU9IlBhdGggMTM5MjEiIGQ9Ik01MDIuNjI5LDM1Ni45NDljLjMzMy0yLjIyNy0xLjM2My0zLjQyNC0zLjY4MS00LjIyMmwuNzUzLTMuMDE2LTEuODM3LS40NTctLjczNCwyLjkzN2MtLjQ4Mi0uMTItLjk3OC0uMjM0LTEuNDcxLS4zNDZsLjczNi0yLjk1Ni0xLjgzNS0uNDU4LS43NTEsMy4wMTUtMy43LS45MTctLjQ4OSwxLjk2MXMxLjM2Mi4zMTIsMS4zMzQuMzMyYS45NzcuOTc3LDAsMCwxLC44NTYsMS4wNjhsLTIuMDYsOC4yNjNhLjY2Ny42NjcsMCwwLDEtLjg0MS40MzVjLjAxOC4wMjctMS4zMzUtLjMzNS0xLjMzNS0uMzM1bC0uOTEyLDIuMSwzLjcuOTM0LS43NiwzLjA1MSwxLjgzNC40NTcuNzUzLTMuMDE4Yy41LjEzNi45ODcuMjYxLDEuNDYzLjM3OWwtLjc1LDMsMS44MzYuNDU3Ljc2LTMuMDQ1YzMuMTMxLjU5Miw1LjQ4Ni4zNTMsNi40NzYtMi40NzYuOC0yLjI4LS4wMzktMy42LTEuNjg3LTQuNDUzYTIuOTMsMi45MywwLDAsMCwyLjM0NS0yLjdtLTQuMiw1Ljg4MmMtLjU2OSwyLjI4LTQuNDA3LDEuMDQ4LTUuNjUyLjczOGwxLjAwOC00LjA0MmMxLjI0NS4zMTEsNS4yMzYuOTI2LDQuNjQ0LDMuM20uNTY5LTUuOTE1Yy0uNTE4LDIuMDc1LTMuNzEzLDEuMDIxLTQuNzUuNzYybC45MTMtMy42NjdjMS4wMzcuMjU5LDQuMzc2Ljc0MSwzLjgzNiwyLjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjQuMTY1IC0zMjYuMDI2KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.boxCoin .curency-icon {
  width: 44px;
  height: 44px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.boxCoin {
  color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(112, 112, 112, 0.3);
  background-color: #02142b;
}

@media only screen and (max-width: 768px) {
  .history-body {
    overflow-x: auto;
  }

  .subBanner .info {
    justify-content: center;
  }

  .showHisM {
    overflow-x: auto;
    width: 860px;
  }
}
</style>

<style>
.content .inputGroup input {
  background: #fff;
  color: #545454;
}

.table-custom {
  margin-top: 20px;
}

.table-custom .vs-con-table .vs-table--content .vs-con-tbody {
  border: none !important;
  background: transparent !important;
}

.table-custom .vs-con-table .vs-table--thead {
  color: rgba(255, 255, 255, 0.7) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.table-custom .vs-con-table .vs-table--thead .vs-table-text {
  font-size: 14px !important;
  font-weight: 500 !important;
}

.table-custom .vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead tr {
  background: transparent !important;
  text-align: center !important;
}

.table-custom .vs-con-table .vs-table--tr {
  background: transparent !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.table-custom .vs-con-table .vs-table--tr:hover {
  transform: none !important;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  display: inline-block;
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 4px 6px;

  /* Position the tooltip */
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.qDeposit .listWallShow {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: none;
  background-color: #fff;
  border-radius: 0.25rem;
  max-height: inherit;
  padding: 0.25rem 0;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  min-width: 140px;
}

.qDeposit .listWallShow.listWallNetwork {
  min-width: 225px;
  width: 100%;
}

.qDeposit .listWallShow.listWallNetwork .drop {
  justify-content: flex-start;
}

.qDeposit .listWallShow.active {
  display: flex;
  flex-direction: column;
}

.qDeposit .listWallShow .drop {
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qDeposit .listWallShow .drop:hover {
  color: #05080a;
  background: #b1bad3;
}

.icon-wallet {
  position: absolute;
  top: 18px;
  left: 20px;
}

.icon-wallet img {
  width: 16px;
  height: 16px;
  object-fit: cover;
}
</style>
