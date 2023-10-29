<template>
  <div class="the-navbar__user-meta flex items-center text-acc" v-if="activeUserInfo.displayName != ''">
    <!--<div class="the-navbar__user-meta flex items-center"> -->
    <!-- <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
     <small>Available</small>
    </div> -->
    <div class="con-img ml-3 mr-3" style="border-radius: 3px; padding: 0.375rem 0.75rem">
      <vs-dropdown vs-custom-content vs-trigger-click>
        <div class="text-left cursor-pointer" style="font-weight: bold">
          <p class="text-sm" style="color: #c1c1c1">
            {{ isAcc ? "Tài khoản Thực" : "Tài khoản Demo" }}
          </p>
          <p>
            <span class="text-money">$
              {{
                isAcc
                ? this.formatPrice(blObj.blLive, 2)
                : this.formatPrice(blObj.blDemo, 2)
              }}</span>
            <span class="float-right">
              <feather-icon icon="ChevronDownIcon" svgClasses="w-6 h-6 text-down" />
            </span>
          </p>
        </div>
        <vs-dropdown-menu class="dropdown-account" style="width: 160px">
          <div class="accLive mb-3">
            <span style="font-size: 12px; color: #d6d6d6">Tài khoản Thực</span>
            <div class="balance cursor-pointer" @click="changeAccount(1)">
              <span style="color: #e8e8e8; font-weight: bold; font-size: 16px">$ {{ formatPrice(blObj.blLive, 2) }}</span>
              <span class="reloadBalance absolute" style="right: 10px; z-index: 99999" @click="clickShowPopTrans()">
                <feather-icon icon="LinkIcon" class="cursor-pointer w-4"></feather-icon>
              </span>
            </div>
          </div>
          <hr style="border-color: #b4c2d2" />
          <div class="accDemo mt-3">
            <span style="font-size: 12px; color: #d6d6d6">Tài khoản Demo</span>
            <div class="balance cursor-pointer" @click="changeAccount(0)">
              <span style="color: #e8e8e8; font-weight: bold; font-size: 16px">$ {{ formatPrice(blObj.blDemo, 2) }}</span>
              <span class="reloadBalance absolute z-10" style="right: 10px">
                <feather-icon icon="RefreshCwIcon" @click.stop="reloadBalanceDemo()"
                  class="cursor-pointer w-4"></feather-icon>
              </span>
            </div>
          </div>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <div class="con-img ml-3 mr-3">
      <vs-button color="success" icon-pack="feather" icon="icon-dollar-sign" type="relief"
        @click="(popupActiveNapNhanh = true), getBalanceWalletClick()">Nạp Nhanh</vs-button>
      <!-- <vs-button type="line" icon-pack="feather" :color="colorNT" icon="icon-dollar-sign" @click.stop="viewNapTien()">Nạp nhanh</vs-button> -->
    </div>
    <!--<div class="con-img ml-3">
      <vs-button type="line" icon-pack="feather" :color="colorRT" icon="icon-dollar-sign" @click.stop="viewRutTien()">Rút tiền</vs-button>
    </div> -->
    <!-- <div class="con-img ml-3 mr-3 cursor-pointer msetting" @click="clickShowPopCaiDat()"> -->
    <vs-dropdown vs-custom-content vs-trigger-click>
      <div class="con-img cursor-pointer msetting">
        <feather-icon icon="SettingsIcon" svgClasses="w-5 h-5" class="block text-center h-5 cursor-pointer" />
        <span>Cài Đặt</span>
      </div>
      <vs-dropdown-menu class="dropdown-setting" style="min-width: 300px;">
        <div class="flex items-center justify-between mb-3 p-2">
          <div class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img"
              aria-labelledby="languageIconTitle" stroke="#ffffff" stroke-width="1" stroke-linecap="square"
              stroke-linejoin="miter" fill="none" color="#ffffff">
              <title id="languageIconTitle">Language</title>
              <circle cx="12" cy="12" r="10" />
              <path stroke-linecap="round"
                d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z" />
              <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
            </svg>
            <span style="color: #fff; font-size: 16px;">Ngôn ngữ</span>
          </div>
          <div class="relative">
            <vs-button color="#38495d" type="filled" class="text-left p-0 bg-[#011022]" @click="closeDropdownLanguage()">
              <div class="flex items-center gap-1 rounded-lg border-white border-solid p-2 border">
                <img style="width: 20px; height: 20px;" :src="langIsSelect.icon || listLanguage[0].icon" />
                <span>{{ langIsSelect.name || listLanguage[0].name }}</span>
                <feather-icon class="material-icons ml-3" icon="ChevronDownIcon" svgClasses="w-4 h-4" />
              </div>
            </vs-button>
            <div class="hidden items-center justify-start listLanguage" :class="{ active: showDropdownLang }">
              <div v-for="lang in listLanguage" :key="lang.name" class="flex items-center cursor-pointer py-2"
                @click="selectLang(lang)">
                <img style="width: 20px; height: 20px;" :src="lang.icon" />
                <span class="ml-2" style="color: #2f4553; font-weight: 600;">{{ lang.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mb-3 p-2">
          <div class="flex items-center gap-1">
            <img style="width: 24px; height: 24px;"
              src="../../../../assets/images/wallet/currency-exchange-svgrepo-com.svg" />
            <span style="color: #fff; font-size: 16px;">Tiền tệ</span>
          </div>
          <div class="relative">
            <vs-button color="#38495d" type="filled" class="text-left p-0 bg-[#011022]" @click="closeDropdownCurrency()">
              <div class="flex items-center gap-1 rounded-lg border-white border-solid p-2 border">
                <span>{{ currencyIsSelect || listCurrency[0] }}</span>
                <feather-icon class="material-icons ml-3" icon="ChevronDownIcon" svgClasses="w-4 h-4" />
              </div>
            </vs-button>
            <div class="hidden items-center justify-start listLanguage" :class="{ active: showDropdownCurrency }">
              <div v-for="item in listCurrency" :key="item" class="flex items-center cursor-pointer py-2"
                @click="selectCurrency(item)">
                <span class="ml-2" style="color: #2f4553; font-weight: 600;">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </vs-dropdown-menu>
    </vs-dropdown>
    <!-- </div> -->
    <div class="con-img ml-3 mr-3 cursor-pointer mhoso" @click.stop="viewHoSo()">
      <feather-icon icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5" />
      <span>Hồ Sơ</span>
    </div>
    <!-- <div class="con-img ml-3 mr-3 text-center relative cursor-pointer mTT">
      <notification-drop-down />
    </div> -->

    <!-- <div class="menuMobileTopMobile">
        <div class="icon" @click="isMenuMobie = !isMenuMobie">
          <feather-icon icon="ListIcon" svgClasses="w-8 h-8"/>
        </div>
    </div>
    <div class="tabMenuMobileTOP flex items-center justify-center" :class="{'open': isMenuMobie}">
      <div class="con-img ml-3 mr-3 cursor-pointer" @click="popupActiveCaiDat = true">
        <feather-icon icon="SettingsIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span>Cài Đặt</span>
      </div>
      <div class="con-img ml-3 mr-3 cursor-pointer" @click.stop="viewHoSo()">
        <feather-icon icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span>Hồ Sơ</span>
      </div>
    </div> -->

    <ho-so-user-info :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
    <!-- <his-order-bet :isSidebarActive="addSidebarHisOrder" @closeSidebar="toggleDataSidebarHisOrder"/> -->

    <!-- <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img ml-3">
        <feather-icon icon="UserIcon" svgClasses="w-8 h-8" />
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>
      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>
          <vs-divider class="m-1" />
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Đăng xuất</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>-->
    <vs-popup class="qDeposit" title="Ví" :active.sync="popupActiveNapNhanh">
      <div :class="{'ld-loading': ldForm}">
        <div class="loading">
          <div class="loading__ring">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path></svg>
          </div>
          <div class="loading__ring">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path></svg>
          </div>
        </div>
      </div>
      <div class="icon-wallet">
        <img src="../../../../assets/images/wallet/wallet-svgrepo-com.svg" alt="Wallet">
      </div>
      <vs-tabs alignment="center">
        <vs-tab label="Nạp tiền">
          <div class="con-tab-ejemplo">
            <div class="wrapper">
              <div class="flex items-center justify-center gap-5">
                <div class="flex flex-col">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">Tiền</span>
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
                  <span class="text-[14px] text-[#b1bad3] font-semibold">Mạng</span>
                  <div class="relative">
                    <vs-button color="#38495d" type="filled" class="text-left btn-dropdown" @click="closeDropdown(false)">
                      <span class="white mr-2">{{ networkIsSelect.nameShort || walletIsSelect.children[0].nameShort }}</span>
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
                      Địa chỉ nạp tiền {{ walletIsSelect.name || listWallet[0].name }} của bạn
                    </div>
                  </span>
                  <div
                    class="flex w-full shrink-0 shadow-[0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 2px 0 rgba(0, 0, 0, .12)] rounded">
                    <div class="copy-wrapper rounded-l">
                      <span class="copy-text">{{ addressPayment }}</span>
                      <input type="hidden" id="addressPayment" :value="addressPayment">
                    </div>
                    <div class="input-button-copy rounded-r flex-shrink-0">
                      <button class="rounded" type="button">
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
                  <img alt="deposit-address" src="../../../../assets/images/wallet/qrcode.png" width="128px"
                    height="128px" id="walletQRCode" />
                </div>
              </div>
              <span class="block text-center text-[#b1bad3] text-[14px] mt-5">
                Chỉ gửi {{ walletIsSelect.name || listWallet[0].name }} đến địa chỉ này,
                {{ walletIsSelect.children && walletIsSelect.children.length ? '2' : '1' }}
                confirmations cần thiết.
              </span>
            </div>
          </div>
        </vs-tab>
        <vs-tab label="Rút tiền">
          <div class="con-tab-ejemplo">
            <div class="flex flex-col gap-5">
              <div class="flex items-center justify-center gap-5">
                <div class="flex flex-col items-center">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">Số tiền dư</span>
                  <div class="text-white font-semibold">
                    <span style="font-size: 16px;">{{
                      isAcc
                      ? this.formatPrice(blObj.blLive, 2)
                      : this.formatPrice(blObj.blDemo, 2)
                    }}$
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-5">
                <div class="flex flex-col">
                  <span class="text-[14px] text-[#b1bad3] font-semibold">Tiền</span>
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
                  <span class="text-[14px] text-[#b1bad3] font-semibold">Mạng</span>
                  <div class="relative">
                    <vs-button color="#38495d" type="filled" class="text-left btn-dropdown" @click="closeDropdown(false)">
                      <span class="white mr-2">{{ networkIsSelect.nameShort || walletIsSelect.children[0].nameShort }}</span>
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
                      <span>{{ walletIsSelect.name || listWallet[0].name }} Địa chỉ</span>
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
                      <span>Số tiền</span>
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
                      <span class="inline-flex">Tối đa</span>
                    </button>
                  </div>
                </div>
              </label>
              <button class="btn-crypto" @click="handleWithdrawCryto">
                <span>Rút tiền</span>
              </button>
              <p class="text-withdraw">
                Số tiền rút tối thiểu là
                <span>
                  2.50000000
                  <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" />
                </span>.
                Phí xử lý giao dịch
                <span>
                  1.00000000
                  <img style="width: 14px; height: 14px;" :src="walletIsSelect.icon || listWallet[0].icon" />
                </span>
                sẽ được khấu trừ vào số dư còn lại của bạn.
              </p>
            </div>
          </div>
        </vs-tab>
        <vs-tab label="Mua Crypto">
          <div class="con-tab-ejemplo">
            <div class="flex flex-col gap-5 items-center justify-center">
              <a href="https://p2p.binance.com/vi/trade/all-payments/USDT?fiat=VND" class="btn-crypto"
                style="background-color: #f0b90b;">
                <img style="height: 20px; object-fit: cover;" src="../../../../assets/images/wallet/binace.svg" />
              </a>
              <a href="https://www.bybit.com/fiat/trade/otc/?actionType=1&token=USDT&fiat=VND&paymentMethod"
                class="btn-crypto" style="background-color: #fff;">
                <img style="height: 20px; object-fit: cover;" src="../../../../assets/images/wallet/bybit.png" />
              </a>
              <a href="https://www.okx.com/vi/p2p-markets/vnd/buy-usdt" class="btn-crypto"
                style="background-color: #cf4444;">
                <img style="height: 20px; object-fit: cover;" src="../../../../assets/images/wallet/okx.svg" />
              </a>
              <a href="https://www.kucoin.com/vi/otc/buy/USDT-VND" class="btn-crypto" style="background-color: #c4ffc4;">
                <img style="height: 20px; object-fit: cover;" src="../../../../assets/images/wallet/kucoin.svg" />
              </a>
            </div>
            <p class="mt-5 text-withdraw">
              Tuyên bố miễn trừ trách nhiệm: Các dịch vụ bên thứ ba ở trên có thể được sử dụng để mua tiền điện tử có thể
              được sử dụng để chơi trên Stake. Bằng cách đăng ký trên nền tảng của họ, bạn cũng chấp nhận các điều khoản
              dịch vụ của họ và sẽ được yêu cầu vượt qua quy trình KYC của họ, quy trình này chạy độc lập với quy trình
              của chúng tôi.
            </p>
          </div>
        </vs-tab>
      </vs-tabs>
    </vs-popup>
    <vs-popup class="text-center" title="Chuyển tiền" :active.sync="popupTransferActive">
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
    </vs-popup>
  </div>
</template>

<script>
import HoSoUserInfo from "@/pages/trade/slidebar/HoSoUser";
//import HisOrderBet from '@/pages/trade/slidebar/HisOrderBet.vue'
import getData from "./data.json";
import AuthenticationService from "@/services/AuthenticationService";
import I18n from "./i18n";
import NotificationDropDown from "@/pages/user/NotifiDropDown.vue";
import QRCode from 'qrcode';
import axios from 'axios';
import BigNumber from 'bignumber.js';
//import { gsap } from "gsap"

export default {
  components: {
    I18n,
    HoSoUserInfo,
    NotificationDropDown,
    //HisOrderBet
  },
  data() {
    return {
      popupTransferActive: false,
      textWalletHtml:
        '<span class="mr-1 color-blue uppercase green">USDT</span> <span>Wallet</span>',
      textAccLive: "Tài khoản Thực",
      amountAcc: 0,
      amountAccLive: 0,
      enterAmount: "",

      isMenuMobie: false,
      switchAmThanh: true,
      popupActiveCaiDat: false,
      popupActiveNapNhanh: false,
      numberTween: 1000,
      counter: false,
      isAcc: 0,
      blObj: getData,
      colorNT: "#0094ff",
      colorRT: "#fff",

      // Data Sidebar
      addNewDataSidebar: false,
      addSidebarHisOrder: false,
      sidebarData: {},
      interval: false,
      showPopWalSL: false,
      showPopNetwork: false,
      showDropdownLang: false,
      showDropdownCurrency: false,
      walletIsSelect: {},
      networkIsSelect: '',
      langIsSelect: {},
      currencyIsSelect: '',
      balanceUSDT: 'BTC',
      enterMoneyDeposit: "",
      ttNhan: 0.0,
      listWallet: [
        {
          icon: require('../../../../assets/images/wallet/bitcoin-logo-svgrepo-com.svg'),
          name: 'BTC',
        },
        {
          icon: require('../../../../assets/images/wallet/ethereum-eth.svg'),
          name: 'ETH',
        },
        {
          icon: require('../../../../assets/images/wallet/usdt.svg'),
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
          icon: require('../../../../assets/images/wallet/bnb.svg'),
          name: 'BNB',
        },
        {
          icon: require('../../../../assets/images/wallet/usdc.svg'),
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
          icon: require('../../../../assets/images/wallet/matic-logo.svg'),
          name: 'MATIC',
        },
      ],
      listLanguage: [
        {
          name: 'Tiếng Việt',
          icon: require('../../../../assets/images/wallet/vietnam-flag-icon.svg'),
        },
        {
          name: 'Tiếng Anh',
          icon: require('../../../../assets/images/wallet/flag-en.svg'),
        }
      ],
      listCurrency: ['VND', 'USD'],
      addressPayment: '',
      userInfo: {},
      money: '',
      transfromMoney: '0',
      userAddress: '',
      ldForm: false
    }
  },
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    activeUserInfo() {
      return getData.displayName;
    },
  },
  watch: {
    number() {
      clearInterval(this.counter);
      if (this.number === this.numberTween) {
        return;
      }
      this.counter = setInterval(
        function () {
          if (Math.floor(this.numberTween) !== Math.floor(this.number)) {
            var change = (this.number - this.numberTween) / 5;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            this.numberTween = this.numberTween + change;
          } else {
            this.numberTween = this.number;
            clearInterval(this.counter);
          }
        }.bind(this),
        20
      );
    },
  },
  methods: {
    clickShowPopTrans() {
      alert('line 319 src/pages/trade/navbar/components/Profile.vue, show modal nạp rút tiền tab rút tiền')
      // this.popupTransferActive = true;
      this.popupActiveNapNhanh = true;
      this.amountAcc = getData.balance;
      this.amountAccLive = getData.blLive;
    },

    clickShowPopCaiDat() {
      alert('line 318 src/pages/trade/navbar/components/Profile.vue, show modal đổi ngôn ngữ và tiền tệ')
      this.popupActiveCaiDat = true;
    },

    clickTransMoney() {
      this.$vs.notify({
        text: 'This API is deprecated usdt-to-live, live-to-usdt Profile.vue',
        color: 'warning',
        iconPack: 'feather',
        icon: 'icon-check'
      });
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
      //       getData.blLive = getData.blLive + amount;
      //       getData.balance = getData.balance - amount;

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

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    // numberTo(start, end, duration, currency = false){

    //   console.log()
    //   this.blanceStart = end

    //   clearInterval(mm);
    //   var range = end - start;
    //   var minTimer = 50;
    //   var stepTime = Math.abs(Math.floor(duration / range));
    //   stepTime = Math.max(stepTime, minTimer);
    //   var startTime = new Date().getTime();
    //   var endTime = startTime + duration;

    //   var mm = setInterval(() => {
    //       var now = new Date().getTime();
    //       var remaining = Math.max((endTime - now) / duration, 0);
    //       var value = (end - (remaining * range))>>0;
    //       var blance = currency ? this.formatPrice(value, 2) : value;
    //       this.isAcc ? getData.blLive = blance : getData.blDemo = blance
    //       if (value == end) {
    //         clearInterval(mm);
    //       }
    //   }, stepTime);
    // },

    OnOffSound() {
      if (this.switchAmThanh) {
        localStorage.setItem("SOUND", true);
      } else {
        localStorage.setItem("SOUND", false);
      }
    },

    ttThucNhan(e) {
      let amount = e.currentTarget.value;
      amount = this.replaceAll(amount, ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      this.ttNhan = this.formatPrice(amount, 2);
    },

    submitDeposit() {
      this.$vs.notify({
        text: 'This API is deprecated usdt-wallet Profile.vue',
        color: 'warning',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      // let amount = this.ttNhan;
      // amount = this.replaceAll(amount.toString(), ",", "");
      // amount = this.replaceAll(amount.toString(), "-", "");
      // if (amount <= 0) {
      //   return this.$vs.notify({
      //     text: "Giá trị không hợp lệ",
      //     color: "danger",
      //     position: "top-right",
      //     iconPack: "feather",
      //     icon: "icon-x-circle",
      //   });
      // }
      // if (amount < 11) {
      //   return this.$vs.notify({
      //     text: "Số tiền tối thiểu không đủ",
      //     color: "danger",
      //     position: "top-right",
      //     iconPack: "feather",
      //     icon: "icon-x-circle",
      //   });
      // }
      // let obj = {
      //   money: amount,
      //   id: getData.uidLive,
      // };
      // AuthenticationService.depositWallet(obj).then((res) => {
      //   if (res.data.success == 1) {
      //     getData.balance -= amount;
      //     getData.blLive += amount;

      //     this.$vs.notify({
      //       text: "Nạp tiền thành công.",
      //       iconPack: "feather",
      //       icon: "icon-check",
      //       color: "success",
      //     });
      //   } else if (res.data.success == 3) {
      //     this.$vs.notify({
      //       text: "Số dư bạn không đủ.",
      //       color: "danger",
      //       position: "top-right",
      //       iconPack: "feather",
      //       icon: "icon-x-circle",
      //     });
      //   } else {
      //     this.$vs.notify({
      //       text: "Giá trị không hợp lệ",
      //       color: "danger",
      //       position: "top-right",
      //       iconPack: "feather",
      //       icon: "icon-x-circle",
      //     });
      //   }
      // });
    },

    submitDepositRequest() {
      let amount = this.ttNhan;

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

    allEnterWallet() {
      this.ttNhan = this.formatPrice(getData.balance, 2);
      this.enterMoneyDeposit = this.formatPrice(getData.balance, 2);
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
      const coinName = this.walletIsSelect.children
        ? this.walletIsSelect.children[0].nameShort
        : this.walletIsSelect.name || this.listWallet[0].name;
      this.calculateMoney(coinName);
    },

    selectLang(val) {
      this.langIsSelect = val;
      this.showDropdownLang = false;
    },

    selectCurrency(val) {
      localStorage.setItem('CURRENCY', JSON.stringify(val));
      this.currencyIsSelect = val;
      this.showDropdownCurrency = false;
    },

    selectNetwork(val) {
      this.networkIsSelect = val;
      this.showPopNetwork = false;
      this.showPopWalSL = false;
      const coinName = val.nameShort || this.walletIsSelect.children[0].nameShort;
      this.calculateMoney(coinName);
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

    closeDropdownLanguage() {
      this.showDropdownLang = !this.showDropdownLang;
      this.showDropdownCurrency = false;
    },

    closeDropdownCurrency() {
      this.showDropdownCurrency = !this.showDropdownCurrency;
      this.showDropdownLang = false;
    },

    reloadBalanceDemo() {
      $(".dropdown-account").hide();
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.success) {
          getData.blDemo = 1000;

          this.$vs.notify({
            text: "Tài khoản Demo đã nạp.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        }
      });
    },

    getBalanceWalletClick() {
      // alert(`line 652 src/pages/trade/navbar/components/Profile.vue show modal nạp rút tiền`)
      this.createQRCode(this.addressPayment);
      return this.$vs.notify({
        text: 'This API is deprecated balance-wallet Profile.vue',
        color: 'warning',
        iconPack: 'feather',
        icon: 'icon-check'
      });

      // AuthenticationService.getBalanceWallet().then((res) => {
      //   if (res.data.success) {
      //     let mU = res.data.data.usdt;
      //     this.balanceUSDT = this.formatPrice(mU, 2);
      //   }
      // });
    },

    changeAccount(val) {
      if (val) {
        localStorage.setItem("BO_BALANCE_TYPE", "LIVE");
        this.isAcc = getData.isAccount = 1;
      } else {
        localStorage.setItem("BO_BALANCE_TYPE", "DEMO");
        this.isAcc = getData.isAccount = 0;
      }
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    viewHoSo() {
      this.toggleDataSidebar(true);
    },

    viewHisOrder() {
      this.toggleDataSidebarHisOrder(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    toggleDataSidebarHisOrder(val = false) {
      this.addSidebarHisOrder = val;
    },

    logout() {
      // // if user is logged in via auth0
      // if (this.$auth.profile) this.$auth.logOut();

      // // if user is logged in via firebase
      // const firebaseCurrentUser = firebase.auth().currentUser

      // if (firebaseCurrentUser) {
      //     firebase.auth().signOut().then(() => {
      //         this.$router.push('/pages/login').catch(() => {})
      //     })
      // }
      // // If JWT login
      // if(localStorage.getItem("accessToken")) {
      //   localStorage.removeItem("accessToken")
      //   this.$router.push('/pages/login').catch(() => {})
      // }

      // // Change role on logout. Same value as initialRole of acj.js
      // this.$acl.change('admin')
      // localStorage.removeItem('userInfo')
      localStorage.removeItem("tokenUser");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push("/login").catch(() => { });
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

    calculateMoney(coinName) {
      axios.get(`https://api.binance.com/api/v3/klines?symbol=${coinName}USDT&interval=1m&limit=1`)
        .then((res) => {
          const value = new BigNumber(res.data[0][4]).toString();
          switch (coinName) {
            case 'BTC':
            case 'BNB':
              this.transfromMoney = (this.money / value).toFixed(8);
              break;
            case 'ETH ':
            case 'MATIC ':
              this.transfromMoney = (this.money / value).toFixed(18);
              break;
            default:
              this.transfromMoney = this.money;
              break;
          }
        })
    },

    handleCalculateMoney(e) {
      this.money = e.target.value;
      const coinName = this.walletIsSelect.children
        ? this.networkIsSelect.nameShort || this.walletIsSelect.children[0].nameShort
        : this.walletIsSelect.name || this.listWallet[0].name;
      this.calculateMoney(coinName);
    },

    async handleWithdrawCryto() {
      if (this.userInfo) {
        this.ldForm = true;
        const data = {
          userId: this.userInfo.id,
          network: this.walletIsSelect.name || this.listWallet[0].name,
          tokenName: this.walletIsSelect.name || this.listWallet[0].name,
          userAddress: this.userAddress,
          amountWithdrawInUsd: this.transfromMoney.toString(),
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
                text: "Rút tiền thất bại",
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
      const coinName = this.walletIsSelect.children
        ? this.networkIsSelect.nameShort || this.walletIsSelect.children[0].nameShort
        : this.walletIsSelect.name || this.listWallet[0].name;
      this.calculateMoney(coinName);
    }
  },
  created() {
    // if(!getData.displayName){
    //   AuthenticationService.getInfoUser()
    //   .then((res) => {
    //        if(res.data.success == 4){
    //           localStorage.removeItem('INFO')
    //           localStorage.removeItem('tokenUser')
    //            window.location.href = window.location.origin + '/login'
    //       }
    //   })
    // }
    this.userInfo = JSON.parse(localStorage.getItem("INFO"));
    if (this.userInfo) {
      this.addressPayment = this.userInfo.btc_address;
    }

    let checkSound = localStorage.hasOwnProperty("SOUND");
    if (!checkSound) {
      localStorage.setItem("SOUND", true);
    } else {
      let getS = localStorage.getItem("SOUND");
      if (getS === "false") {
        this.switchAmThanh = false;
      }
    }

    this.blanceStart = this.isAcc ? getData.blLive : getData.blDemo;

    let acc = localStorage.getItem("BO_BALANCE_TYPE");
    if (acc == "LIVE") {
      this.isAcc = getData.isAccount = 1;
    } else {
      this.isAcc = getData.isAccount = 0;
    }

    this.currencyIsSelect = JSON.parse(localStorage.getItem("CURRENCY"));
  },
};
</script>

<style scoped>
.reloadBalance {
  right: 10px;
  background: #fa2843;
  width: 40px;
  height: 25px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
}

.menuMobileTopMobile {
  display: none;
}

.tabMenuMobileTOP {
  visibility: hidden;
  position: fixed;
  height: 60px;
  left: 0;
  right: 0;
  top: -60px;
  background: #02142b;
  z-index: 999;
  transform: translate3d(0, 0, 0);
  transition-property: -webkit-transform visibility;
  transition-property: transform visibility;
  transition-property: transform visibility, -webkit-transform visibility;
  transition-duration: 0.2s;
}

.notification-dropdown-button-number {
  position: absolute;
  top: -7px;
  left: calc(50% + 2px);
  display: inline-block;
  overflow: hidden;
  background: #e22a67;
  color: #fff;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 9px;
  border: 2px solid #02142b;
  padding: 0 2px;
}

.toggleButtonWrapper span {
  display: inline-block;
  line-height: 25px;
  padding-left: 5px;
  padding-right: 5px;
}

.setting .wrap .line .type svg,
.setting .wrap .line .control svg {
  margin-right: 5px;
}

.setting .wrap .line-language-pc {
  padding: 15px;
  border-bottom: 1px solid #4a3c6f;
}

.setting .wrap .line {
  padding: 15px;
}

.qDeposit .allIn {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  color: #00ffe9;
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

.listLanguage {
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

.listLanguage.active {
  display: flex !important;
  flex-direction: column !important;
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

.icon.USDT {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center;
}

.icon.ETH {
  background: url("~@/assets/images/sky/eth.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon.BTC {
  background: url("~@/assets/images/sky/bitcoin.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

@media screen and (max-width: 600px) {

  .msetting,
  .mhoso,
  .ttM {
    display: none !important;
  }

  .mTT svg {
    width: 1.7rem !important;
    height: 1.7rem !important;
  }

  .mTT .notification-dropdown-button-number {
    top: -10px;
    min-width: 22px;
    height: 22px;
    line-height: 18px;
    font-size: 12px;
  }

  .menuMobileTopMobile {
    position: fixed;
    right: 0;
    top: 60px;
    background: #02142b;
    padding: 0px 10px;
    border-bottom-left-radius: 20px;
    display: block;
    cursor: pointer;
  }

  .tabMenuMobileTOP.open {
    visibility: visible;
    transform: translate3d(0, 100%, 0);
  }
}

@media screen and (max-width: 425px) {
  .text-acc {
    zoom: 0.9;
  }
}

@media screen and (max-width: 376px) {
  .text-acc {
    zoom: 0.8;
  }

  .text-down {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }

  .vs-tabs--li button.vs-tabs--btn {
    font-size: 12px;
  }
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
</style>
<style>
.content .inputGroup input {
  background: #fff;
  color: #545454;
}

@media screen and (max-width: 376px) {
  .vs-tabs--li button.vs-tabs--btn {
    font-size: 12px;
  }
}

.navbar-floating .vx-navbar {
  padding: 0.3rem 1rem;
}

.setting .vs-popup {
  width: 390px !important;
}

.qDeposit .vs-popup {
  width: 300px !important;
}

.qDeposit .vs-button--text {
  width: 100%;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-weight: 700;
}

.qDeposit .vs-button--text>span.icon,
.qDeposit .listWallShow .drop>span.icon {
  width: 14px;
  height: 14px;
  overflow: hidden;
  margin-right: 4px;
}

.qDeposit .vs-button--text>span,
.qDeposit .listWallShow .drop>span {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
}

.vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {
  padding: 0.75rem 1rem;
}

.qDeposit .vs-popup {
  background-position: center !important;
  position: relative !important;
  width: 100% !important;
  min-width: 200px !important;
  max-width: 500px !important;
  max-height: calc(100% - 4em) !important;
  display: flex !important;
  flex-direction: column !important;
  background: #1a2c38 !important;
  color: #b1bad3 !important;
  /* overflow: hidden!important; */
  margin: 16px;
}

.theme-dark .qDeposit.con-vs-popup .vs-popup .vs-popup--header {
  position: relative !important;
  ;
  background: #1a2c38 !important;
}

.theme-dark .qDeposit.con-vs-popup .vs-popup {
  background: #1a2c38 !important;
}

.theme-dark .qDeposit.con-vs-popup .vs-popup .vs-popup--header .vs-popup--close {
  position: absolute !important;
  top: 8px !important;
  right: 8px !important;
  background-color: #1a2c38 !important;
  color: #b1bad3 !important;
  box-shadow: none;
  -webkit-transform: none;
  transform: none;
}

.theme-dark .qDeposit.con-vs-popup .vs-popup .vs-popup--header .vs-popup--close:hover {
  color: #fff !important;
  -webkit-transform: none;
  transform: none;
}

.qDeposit .vs-popup--title h3 {
  padding: 16px !important;
}

.qDeposit .vs-popup--title {
  margin-left: 30px !important;
}

.qDeposit .con-ul-tabs {
  background: #0f212e !important;
  display: flex;
  border-radius: 3rem;
  padding: 5px;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 16px;
}

.qDeposit .vs-tabs--li {
  margin-left: 5px;
}

.qDeposit .vs-tabs--li:first-child {
  margin-left: 0;
}

.qDeposit .vs-tabs--li.activeChild {
  color: #fff;
  background-color: #2f4553;
  border-radius: 4rem;
}

.qDeposit .vs-tabs--li:hover {
  color: #fff;
  background-color: #2f4553;
  border-radius: 4rem;
}

.qDeposit .vs-tabs-primary .con-ul-tabs .line-vs-tabs {
  display: none !important;
}

.qDeposit .vs-tabs--li .vs-tabs--btn span {
  display: inline-flex;
  position: relative;
  align-items: center;
  color: #fff;
}

.qDeposit .vs-tabs-primary .vs-tabs--li button.vs-tabs--btn {
  padding: 15px 20px !important;
}

.qDeposit.con-vs-popup .vs-popup--content {
  padding-top: 0 !important;
}

.qDeposit .btn-dropdown {
  padding: 13px 16px !important;
  border-radius: 0.125rem !important;
  background: #0f212e !important;
  box-shadow: none !important;
}

.copy-wrapper {
  background-color: #2f4553;
  padding: 4px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid #2f4553;
  transition: all .3s linear;
}

.copy-wrapper:hover {
  border-color: #557086;
}

.copy-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: text;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding-left: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input-button-copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2f4553;
  transition: all .3s linear;
}

.input-button-copy:hover {
  background-color: #557086;
}

.input-button-copy button {
  background-color: transparent;
  outline: 0;
  border: 0;
  color: #fff;
  font-size: 16px;
  padding: 11px 14px;
  cursor: pointer;
}

.input-button-copy button span svg {
  fill: #fff;
}

.btn-crypto {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #00e701;
  color: #05080a;
  box-shadow: 0rem .0625rem .1875rem #00000033, 0rem .0625rem .125rem #0000001f;
  outline: 0;
  border: 0;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  padding: 16px 26px;
  cursor: pointer;
}

.btn-crypto:hover {
  opacity: 0.9;
  background-color: #1fff20;
}

.scrollX {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  -moz-transform: none !important;
  scrollbar-width: thin;
}

.text-red {
  color: #ED4163;
}

.input-wrap {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 2px 0 rgba(0, 0, 0, .12);
  border-radius: 4px;
}

.input-content {
  position: relative;
  flex-grow: 1;
  width: 100%;
  display: flex;
}

.input-address {
  padding: 8px;
  width: 100%;
  color: #fff;
  background: #0f212e;
  border: 2px solid #2f4553;
  border-radius: 4px;
  font-weight: 600;
  transition: all .25s;
  outline: 0;
  margin: 0;
  cursor: text;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  box-shadow: none;
}

.input-address:hover {
  border-color: #557086;
}

.input-content .after-icon {
  display: flex;
  cursor: text;
  position: absolute;
  display: flex;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #b1bad3;
  z-index: 2;
}

.input-button-wrap .btn-max {
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background-color: #2f4553;
  color: #fff;
  font-size: 14px;
  padding: 13px 16px;
  font-weight: 600;
  outline: 0;
  border: 0;
  cursor: pointer;
}

.input-button-wrap .btn-max:hover {
  background-color: #557086;
}

.text-withdraw {
  font-size: 14px;
  color: #b1bad3;
}

.text-withdraw span {
  display: inline-flex;
  align-items: center;
  gap: 0 4px;
}

.cursor-pointer {
  cursor: pointer !important;
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
