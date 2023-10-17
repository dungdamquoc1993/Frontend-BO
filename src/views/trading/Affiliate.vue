<template>
    <div id="AffiliatePage">
        <div v-if="isVip" class="bodyContent affiliatePage">
            <div class="banner">
                <div class="content">
                    <div class="container h-full">
                        <div class="vx-row h-full items-center">
                            <div class="vx-col lg:w-6/12">
                                <p class="text-3xl font-bold white line-height-normal mb-4">Bạn cần trở thành Thành viên VIP
                                    để nhận hoa hồng VIP và hoa hồng giao dịch</p>
                                <vs-button color="success" type="filled" @click="popupBuyThamGiaVip = true">Mua
                                    ngay</vs-button>
                            </div>
                            <div class="vx-col w-full lg:w-6/12">
                                <div class="affiliateInfo bgSecondary borderPrimary">
                                    <div class="linkGroup">
                                        <div class="vx-col flex-col justify-center">
                                            <div class="w-full">
                                                <p class="color-gray colorSecondary mb-2 label">Link Đăng ký</p>
                                                <div class="groupButton flex mb-4 relative">
                                                    <div class="leftControl">
                                                        <input type="text" v-model="linkDk" readonly="readonly" disabled
                                                            class="form-control w-full text-base pl-2">
                                                    </div>
                                                    <div class="rightControl">
                                                        <button class="btn button primary cursor-pointer"
                                                            v-clipboard:copy="linkDk" @click="saoChep">Sao chép</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-6/12">
                                                <p class="color-light-gray mb-2 colorSecondary label">Mã giới thiệu</p>
                                                <div class="groupButton flex mb-4 relative">
                                                    <div class="leftControl">
                                                        <input type="text" v-model="codeGioiThieu" readonly="readonly"
                                                            disabled class="form-control w-full text-base pl-2">
                                                    </div>
                                                    <div class="rightControl">
                                                        <button class="btn button primary cursor-pointer"
                                                            v-clipboard:copy="codeGioiThieu" @click="saoChep">Sao
                                                            chép</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subBanner bgSecondary flex items-center">
                <div class="container">
                    <div class="vx-row items-center">
                        <div class="col">
                            <div class="flex boxContent h-full items-center">
                                <div class="flex items-center">
                                    <div>
                                        <div class="icon iconInvite"></div>
                                    </div>
                                    <div>
                                        <div class="textContent">
                                            <p class="mb-1 title">Mời bạn</p>
                                            <p class="color-white-50 mb-0 des">Mời bạn đăng ký qua liên kết</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="borderSubBanner"></div>
                                <div class="flex items-center">
                                    <div>
                                        <div class="icon iconSign"></div>
                                    </div>
                                    <div>
                                        <div class="textContent">
                                            <p class="mb-1 title">Mời bạn</p>
                                            <p class="color-white-50 mb-0 des">Mời bạn đăng ký qua liên kết</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="borderSubBanner"></div>
                                <div class="flex items-center">
                                    <div>
                                        <div class="icon iconCommission"></div>
                                    </div>
                                    <div>
                                        <div class="textContent">
                                            <p class="mb-1 title">Mời bạn</p>
                                            <p class="color-white-50 mb-0 des">Mời bạn đăng ký qua liên kết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vs-popup class="text-center" title="Trở thành VIP" :active.sync="popupBuyThamGiaVip">
                <div class="contentWrapper" :class="{ 'ld-loading': loading }">
                    <div class="loading">
                        <div class="loading__ring">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"
                                xml:space="preserve">
                                <path
                                    d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                </path>
                            </svg>
                        </div>
                        <div class="loading__ring">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"
                                xml:space="preserve">
                                <path
                                    d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="header borderBtSecondary">
                        <span class="text-2xl font-bold capitalize modal-title">Chấp nhận tham gia</span>
                    </div>
                    <div class="body">
                        <div class="imgShake mb-3"></div>
                        <div class="textContent mb-3 colorSecondary">Bạn cần thanh toán $100 để mua Quyền Đại lý. Bạn muốn
                            tiếp tục?</div>
                        <div class="checkbox flex items-center justify-center mb-3">
                            <vs-checkbox color="success" v-model="dongYMua" @click="isDongY = !isDongY"></vs-checkbox>
                            <span for="customControlInline" class="accept">
                                Tôi xác nhận và đồng ý
                                <a target="_blank" href="/faqs" class="term">
                                    Điều khoản về dịch vụ
                                </a>
                            </span>
                        </div>
                        <vs-button class="w-full" color="warning" type="filled" :disabled="!isDongY" @click="OkBuyVip">Xác
                            nhận</vs-button>
                    </div>
                </div>
            </vs-popup>
            <vs-popup class="text-center" title="Thông Báo" :active.sync="popupThongBao">
                <div class="contentWrapper">
                    <div class="header borderBtSecondary">
                        <span class="text-2xl font-bold capitalize modal-title">Số dư của bạn không đủ</span>
                    </div>
                    <div class="body">
                        <img :src="require('@/assets/images/sky/not_enought_balance.svg')" alt="">

                        <vs-button class="w-full" color="warning" type="filled" @click="OkNapNgay">Nạp ngay</vs-button>
                    </div>
                </div>
            </vs-popup>
        </div>
        <div v-else class="affiliatePage pt-8">
            <div class="w-full">
                <vs-tabs alignment="center">
                    <vs-tab label="Tổng Quan" @click="showGobal = true, showCom = false, showqlHt = false">

                    </vs-tab>
                    <vs-tab label="Hoa Hồng"
                        @click="chiTietLoiNhuanHoaHong, showGobal = false, showCom = true, showqlHt = false">

                    </vs-tab>
                    <vs-tab label="Quản lý hệ thống" @click="showGobal = false, showCom = false, showqlHt = true">

                    </vs-tab>
                </vs-tabs>
                <div class="m-6">
                    <div class="gobal" :class="{ 'block': showGobal }">
                        <div class="container" :class="{ 'ld-loading': loading }">
                            <div class="loading">
                                <div class="loading__ring">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                                        style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                        <path
                                            d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="loading__ring">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                                        style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                        <path
                                            d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="dashboard-page dashboard-page--pc mt-4">
                                <div class="vx-row">
                                    <div class="vx-col w-full lg:w-1/3 mb-4">
                                        <div class="boxBasic bgSecondary borderSecondary">
                                            <div class="heading flex items-center mb-3 pb-3 borderBtSecondary">
                                                <div class="flex boxRank items-center">
                                                    <div class="rank-number">
                                                        <div class="backgroundImd iconRank" :class="`rank${vip_lv}`"></div>
                                                    </div>
                                                    <div class="rank-text">
                                                        <p class="textRank noselect cursor-pointer bgPrimary">
                                                            <span class="text">Cấp bậc</span>
                                                            <span class="q" @click="popupActiveRank = true">
                                                                <feather-icon icon="HelpCircleIcon"
                                                                    svgClasses="h-6 w-6 ml-1 c-question" />
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="body">
                                                <h5 class="nextRankCondition colorSecondary text-center mb-3">Điều kiện Cấp
                                                    bậc</h5>
                                                <div class="vx-row">
                                                    <div class="vx-col w-2/3">
                                                        <p class="text-base white-50 mb-2 name">F1 tổng (Tuần này)</p>
                                                        <p class="text-xl font-size-18 colorPrimary m-0 value">
                                                            <span class="colorSecondary">{{ hhMeF1isWeek }} / </span>
                                                            <span class="colorGray" v-if="totalDlisMe < 3">1,000</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 3">2,000</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 4">4,000</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 5">6,000</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 6">8,000</span>
                                                            <span class="colorGray" v-if="totalDlisMe >= 7">10,000</span>
                                                        </p>
                                                    </div>
                                                    <div class="vx-col w-1/3">
                                                        <p class="text-base white-50 mb-2 name">F1 Đại lý</p>
                                                        <p class="text-xl font-size-18 m-0 value">
                                                            <span class="colorSecondary">{{ totalDlisMe }} / </span>
                                                            <span class="colorGray" v-if="totalDlisMe < 3">2</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 3">3</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 4">4</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 5">5</span>
                                                            <span class="colorGray" v-if="totalDlisMe == 6">6</span>
                                                            <span class="colorGray" v-if="totalDlisMe >= 7">7</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-col w-full lg:w-1/3 mb-4">
                                        <div class="affiliateInfo bgSecondary borderSecondary">
                                            <div class="referralSponsor">
                                                <p class="mb-0">
                                                    <span class="text-xs colorSecondary mb-2">Người giới thiệu</span>
                                                </p>
                                                <p><span class="text-2xl colorSecondary mb-2 value">{{ f1cuaminh != '' ?
                                                    f1cuaminh : '-----' }}</span></p>
                                            </div>
                                            <hr class="borderBottom">
                                            <div class="linkGroup m-0">
                                                <div class="vx-row">
                                                    <div class="vx-col w-1/2 mb-2">
                                                        <p class="text-xs colorSecondary2 mb-2">Tổng số nhà giao dịch</p>
                                                        <p class="totalReferral colorSuccess text-2xl">{{ totalNGD }}</p>
                                                    </div>
                                                    <div class="vx-col w-1/2 mb-2">
                                                        <p class="text-xs colorSecondary2 mb-2">Tổng số Đại lý</p>
                                                        <p class="totalAgency colorPrimary text-2xl">{{ totalDaiLy }}</p>
                                                    </div>
                                                    <div class="vx-col w-1/2">
                                                        <p class="text-xs colorSecondary2 mb-2">Hoa hồng Giao dịch</p>
                                                        <p class="colorDanger text-2xl m-0">{{ commissGD }}</p>
                                                    </div>
                                                    <div class="vx-col w-1/2">
                                                        <p class="text-xs colorSecondary2 mb-2">Hoa hồng Đại lý</p>
                                                        <p class="colorPrimary text-2xl m-0">{{ pen_commiss }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-col w-full lg:w-1/3 mb-4">
                                        <div class="affiliateInfo bgSecondary borderSecondary">
                                            <p class="text-base font-bold white mb-3 affiliateInfo-title"
                                                style="vertical-align: middle;">
                                                <svg id="unlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 15.885 15.885" class="mr-1">
                                                    <path id="Path_34840" data-name="Path 34840"
                                                        d="M13.347,9.63l1.191-1.191a4.961,4.961,0,0,0,1.39-3.475,4.657,4.657,0,0,0-1.489-3.475A4.657,4.657,0,0,0,10.964,0,4.657,4.657,0,0,0,7.489,1.489L6.3,2.581a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0L8.879,2.78a3.063,3.063,0,0,1,4.17,0,3.08,3.08,0,0,1,.894,2.184,2.7,2.7,0,0,1-.894,2.085L11.957,8.24a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0Z"
                                                        transform="translate(-0.043)" fill="#fa2843"></path>
                                                    <path id="Path_34841" data-name="Path 34841"
                                                        d="M8.24,11.957,7.049,13.148a3.063,3.063,0,0,1-4.17,0,3.08,3.08,0,0,1-.894-2.184,2.7,2.7,0,0,1,.894-2.085L3.971,7.688a.96.96,0,0,0,0-1.39.96.96,0,0,0-1.39,0L1.489,7.489A4.657,4.657,0,0,0,0,10.964a4.657,4.657,0,0,0,1.489,3.475,4.657,4.657,0,0,0,3.475,1.489,4.657,4.657,0,0,0,3.475-1.489L9.63,13.247a.951.951,0,1,0-1.39-1.291Z"
                                                        transform="translate(0 -0.043)" fill="#fa2843"></path>
                                                    <path id="Path_34842" data-name="Path 34842"
                                                        d="M9.368,5.2,5.2,9.368a.96.96,0,0,0,0,1.39,1.072,1.072,0,0,0,.695.3,1.072,1.072,0,0,0,.695-.3l4.17-4.17A.983.983,0,1,0,9.368,5.2Z"
                                                        transform="translate(-0.035 -0.035)" fill="#fa2843"></path>
                                                    <path id="Path_34843" data-name="Path 34843"
                                                        d="M2.283,3.673a.9.9,0,0,0,.695.3.9.9,0,0,0,.695-.3.96.96,0,0,0,0-1.39L1.688.3A.96.96,0,0,0,.3.3a.96.96,0,0,0,0,1.39Z"
                                                        transform="translate(0 0)" fill="#fa2843"></path>
                                                    <path id="Path_34844" data-name="Path 34844"
                                                        d="M13.688,12.3a.983.983,0,1,0-1.39,1.39l1.986,1.986a.96.96,0,0,0,1.39,0,.96.96,0,0,0,0-1.39Z"
                                                        transform="translate(-0.087 -0.087)" fill="#fa2843"></path>
                                                </svg>

                                                Link Đăng ký
                                            </p>
                                            <div class="groupButton flex mb-4 relative">
                                                <div class="leftControl">
                                                    <input type="text" readonly="readonly" v-model="linkDk"
                                                        class="form-control w-full text-base pl-2">
                                                </div>
                                                <div class="rightControl">
                                                    <button class="btn button primary cursor-pointer"
                                                        v-clipboard:copy="linkDk" @click="saoChep">Sao chép</button>
                                                </div>
                                            </div>
                                            <p class="text-base font-bold white mb-3 affiliateInfo-title"
                                                style="vertical-align: middle;">
                                                <svg id="unlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 15.885 15.885" class="mr-1">
                                                    <path id="Path_34840" data-name="Path 34840"
                                                        d="M13.347,9.63l1.191-1.191a4.961,4.961,0,0,0,1.39-3.475,4.657,4.657,0,0,0-1.489-3.475A4.657,4.657,0,0,0,10.964,0,4.657,4.657,0,0,0,7.489,1.489L6.3,2.581a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0L8.879,2.78a3.063,3.063,0,0,1,4.17,0,3.08,3.08,0,0,1,.894,2.184,2.7,2.7,0,0,1-.894,2.085L11.957,8.24a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0Z"
                                                        transform="translate(-0.043)" fill="#fa2843"></path>
                                                    <path id="Path_34841" data-name="Path 34841"
                                                        d="M8.24,11.957,7.049,13.148a3.063,3.063,0,0,1-4.17,0,3.08,3.08,0,0,1-.894-2.184,2.7,2.7,0,0,1,.894-2.085L3.971,7.688a.96.96,0,0,0,0-1.39.96.96,0,0,0-1.39,0L1.489,7.489A4.657,4.657,0,0,0,0,10.964a4.657,4.657,0,0,0,1.489,3.475,4.657,4.657,0,0,0,3.475,1.489,4.657,4.657,0,0,0,3.475-1.489L9.63,13.247a.951.951,0,1,0-1.39-1.291Z"
                                                        transform="translate(0 -0.043)" fill="#fa2843"></path>
                                                    <path id="Path_34842" data-name="Path 34842"
                                                        d="M9.368,5.2,5.2,9.368a.96.96,0,0,0,0,1.39,1.072,1.072,0,0,0,.695.3,1.072,1.072,0,0,0,.695-.3l4.17-4.17A.983.983,0,1,0,9.368,5.2Z"
                                                        transform="translate(-0.035 -0.035)" fill="#fa2843"></path>
                                                    <path id="Path_34843" data-name="Path 34843"
                                                        d="M2.283,3.673a.9.9,0,0,0,.695.3.9.9,0,0,0,.695-.3.96.96,0,0,0,0-1.39L1.688.3A.96.96,0,0,0,.3.3a.96.96,0,0,0,0,1.39Z"
                                                        transform="translate(0 0)" fill="#fa2843"></path>
                                                    <path id="Path_34844" data-name="Path 34844"
                                                        d="M13.688,12.3a.983.983,0,1,0-1.39,1.39l1.986,1.986a.96.96,0,0,0,1.39,0,.96.96,0,0,0,0-1.39Z"
                                                        transform="translate(-0.087 -0.087)" fill="#fa2843"></path>
                                                </svg>

                                                Mã giới thiệu
                                            </p>
                                            <div class="groupButton flex mb-3">
                                                <div class="leftControl">
                                                    <input type="text" readonly="readonly" v-model="codeGioiThieu"
                                                        class="form-control w-full text-base pl-2">
                                                </div>
                                                <div class="rightControl">
                                                    <button class="btn button primary cursor-pointer"
                                                        v-clipboard:copy="codeGioiThieu" @click="saoChep">Sao chép</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-col w-full lg:w-2/3 mb-4">
                                        <div class="wrap-chart bgSecondary borderSecondary recent-statistics">
                                            <vs-tabs>
                                                <vs-tab label="Tháng này" @click="showTN = true, showTT = false">

                                                </vs-tab>
                                                <vs-tab label="Tháng trước" @click="showTT = true, showTN = false">

                                                </vs-tab>
                                            </vs-tabs>
                                            <div class="p-2">
                                                <div class="tn" :class="{ 'block': showTN, 'hidden': !showTN }">
                                                    <div class="content">
                                                        <div class="vx-row">
                                                            <div class="vx-col w-full lg:w-1/3">
                                                                <p
                                                                    class="text-xl font-bold white my-4 recent-statistics-title">
                                                                    Số liệu gần đây</p>
                                                                <p class="totalReferral colorSuccess mb-4">Tổng số nhà giao
                                                                    dịch mới ({{ tslgdmtn }})</p>
                                                                <p class="totalAgency colorBlue mb-4">Tổng số đại lý mới ({{
                                                                    tsdlmtn }})</p>
                                                                <p class="colorDanger">Tổng số hoa hồng mới ({{ tshhmtn }})
                                                                </p>
                                                            </div>
                                                            <div class="vx-col w-full lg:w-2/3">
                                                                <div class="wrap-chart bgPrimary">
                                                                    <highcharts ref="chartSpline" :options="optionsSpline">
                                                                    </highcharts>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tt" :class="{ 'show': showTT, 'hidden': !showTT }">
                                                    <div class="content">
                                                        <div class="vx-row">
                                                            <div class="vx-col w-full lg:w-1/3">
                                                                <p
                                                                    class="text-xl font-bold white my-4 recent-statistics-title">
                                                                    Số liệu gần đây</p>
                                                                <p class="totalReferral colorSuccess mb-4">Tổng số nhà giao
                                                                    dịch mới ({{ tslgdmtt }})</p>
                                                                <p class="totalAgency colorBlue mb-4">Tổng số đại lý mới ({{
                                                                    tsdlmtt }})</p>
                                                                <p class="colorDanger">Tổng số hoa hồng mới ({{ tshhmtt }})
                                                                </p>
                                                            </div>
                                                            <div class="vx-col w-full lg:w-2/3">
                                                                <div class="wrap-chart bgPrimary">
                                                                    <highcharts ref="chartSplineTwo"
                                                                        :options="optionsSpline2"></highcharts>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-col w-full lg:w-1/3 mb-4">
                                        <div class="networkVolumeStats bgSecondary borderSecondary">
                                            <div class="cardHeader flex items-center">
                                                <svg id="b-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="20"
                                                    viewBox="0 0 24 20" class="mr-2">
                                                    <rect id="Rectangle_4604" data-name="Rectangle 4604" width="24"
                                                        height="2" transform="translate(0 18)" fill="#fa2843"></rect>
                                                    <path id="Path_34533" data-name="Path 34533"
                                                        d="M4,18H6a1,1,0,0,0,1-1V8A1,1,0,0,0,6,7H4A1,1,0,0,0,3,8v9A1,1,0,0,0,4,18Z"
                                                        transform="translate(0 -2)" fill="#fa2843"></path>
                                                    <path id="Path_34534" data-name="Path 34534"
                                                        d="M11,18h2a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V17A1,1,0,0,0,11,18Z"
                                                        transform="translate(0 -2)" fill="#fa2843"></path>
                                                    <path id="Path_34535" data-name="Path 34535"
                                                        d="M17,12v5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H18A1,1,0,0,0,17,12Z"
                                                        transform="translate(0 -2)" fill="#fa2843"></path>
                                                </svg>
                                                <span class="text-xl white font-bold networkVolumeStats-title">KLGD Cấp
                                                    Dưới</span>
                                                <vs-dropdown vs-custom-content vs-trigger-click>
                                                    <a class="flex items-center" href.prevent>
                                                        <feather-icon icon="HelpCircleIcon"
                                                            svgClasses="h-6 w-6 ml-1 c-question" />
                                                    </a>
                                                    <vs-dropdown-menu class="dropdown-question">
                                                        <p class="m-0 text-sm">Tổng khối lượng giao dịch của 7 tầng mỗi
                                                            tháng.</p>
                                                    </vs-dropdown-menu>
                                                </vs-dropdown>
                                            </div>
                                            <div class="cardBody">
                                                <div class="vx-row head border-bottom border-top" style="width: 360px;">
                                                    <div class="vx-col lg:w-5/12">
                                                        <p class="m-0 texthead text-sm capitalize">Tháng</p>
                                                    </div>
                                                    <div class="vx-col lg:w-7/12">
                                                        <p class="m-0 texthead text-sm capitalize">tổng</p>
                                                    </div>
                                                </div>
                                                <div class="dataContent">
                                                    <div class="vx-row border-bottom"
                                                        style="margin-left: -5px; margin-right: -5px; width: 360px;">
                                                        <div class="vx-col lg:w-5/12">
                                                            <p class="m-0">{{ formatDateAff(t1) }}</p>
                                                        </div>
                                                        <div class="vx-col lg:w-7/12">
                                                            <p class="m-0">${{ formatPrice(klgdtc1, 2) }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="vx-row border-bottom"
                                                        style="margin-left: -5px; margin-right: -5px; width: 360px;">
                                                        <div class="vx-col lg:w-5/12">
                                                            <p class="m-0">{{ formatDateAff(t2) }}</p>
                                                        </div>
                                                        <div class="vx-col lg:w-7/12">
                                                            <p class="m-0">${{ formatPrice(klgdtc2, 2) }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="vx-row border-bottom"
                                                        style="margin-left: -5px; margin-right: -5px; width: 360px;">
                                                        <div class="vx-col lg:w-5/12">
                                                            <p class="m-0">{{ formatDateAff(t3) }}</p>
                                                        </div>
                                                        <div class="vx-col lg:w-7/12">
                                                            <p class="m-0">${{ formatPrice(klgdtc3, 2) }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="vx-row"
                                                        style="margin-left: -5px; margin-right: -5px; width: 360px;">
                                                        <div class="vx-col lg:w-5/12">
                                                            <p class="m-0">{{ formatDateAff(t4) }}</p>
                                                        </div>
                                                        <div class="vx-col lg:w-7/12">
                                                            <p class="m-0">${{ formatPrice(klgdtc4, 2) }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardFooter">
                                                <div class="vx-row">
                                                    <div class="vx-col lg:w-5/12">
                                                        <p class="m-0"><b>Tổng</b>
                                                        </p>
                                                    </div>
                                                    <div class="vx-col lg:w-7/12">
                                                        <p class="m-0"><b>${{ formatPrice((klgdtc1 + klgdtc2 + klgdtc3 +
                                                            klgdtc4), 2) }}</b>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-col w-full lg:w-1/3 mb-4">
                                        <div class="getIntouch bgSecondary borderSecondary">
                                            <div class="cardHeader flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.678" height="22.678"
                                                    viewBox="0 0 22.678 22.678" class="mr-2">
                                                    <g id="headphones-mic" transform="translate(0.5 0.5)">
                                                        <path id="Path_29605" data-name="Path 29605"
                                                            d="M1.5,9.826V6.014A5.515,5.515,0,0,1,7.014.5h6.893a5.515,5.515,0,0,1,5.514,5.514V9.826"
                                                            transform="translate(0.379)" fill="none" stroke="#fa2843"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-miterlimit="10" stroke-width="2"></path>
                                                        <path id="Path_29606" data-name="Path 29606"
                                                            d="M6.014,14.771H4.636A4.135,4.135,0,0,1,.5,10.636h0A4.135,4.135,0,0,1,4.636,6.5H6.014Z"
                                                            transform="translate(0 2.271)" fill="none" stroke="#fa2843"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-miterlimit="10" stroke-width="2"></path>
                                                        <path id="Path_29607" data-name="Path 29607"
                                                            d="M11.5,14.771h1.379a4.135,4.135,0,0,0,4.136-4.136h0A4.135,4.135,0,0,0,12.879,6.5H11.5Z"
                                                            transform="translate(4.164 2.271)" fill="none" stroke="#fa2843"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-miterlimit="10" stroke-width="2"></path>
                                                        <path id="Path_29608" data-name="Path 29608"
                                                            d="M12.15,16.636H5.257A2.756,2.756,0,0,1,2.5,13.879V12.5"
                                                            transform="translate(0.757 4.543)" fill="none" stroke="#fa2843"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-miterlimit="10" stroke-width="2"></path>
                                                    </g>
                                                </svg><span class="text-xl white font-bold getIntouch-title">Liên hệ</span>
                                            </div>
                                            <div class="cardBody">
                                                <div class="vx-row">
                                                    <div class="vx-col lg:w-4/12 text-center">
                                                        <img :src="require('@/assets/images/sky/bot.svg')" alt=""
                                                            class="mb-3">
                                                        <p class="elipText white text-base mb-2 getIntouch-sub-title">
                                                            Support001</p>
                                                    </div>
                                                    <div class="vx-col lg:w-8/12">
                                                        <p class="white-50 text-base mb-2 getIntouch-label">Địa chỉ Email
                                                        </p>
                                                        <p class="flex items-center">
                                                            <feather-icon icon="MailIcon"
                                                                svgClasses="h-6 w-6 ml-1 c-mail" />
                                                            <a :href="`mailto:contact@${hostName}`"
                                                                class="elipText white text-base ml-2 getIntouch-value">contact@{{ hostName }}</a>
                                                        </p>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="commission" :class="{ 'block': showCom }">
                        <div class="wraperContent">
                            <div class="headerContent flex lg:flex-row flex-col justify-between items-center mb-4">
                                <h1 class="text-2xl white font-bold text-capitalize pointer affiliateCommission-title">
                                    Hoa hồng
                                    <span class="q">
                                        <feather-icon icon="HelpCircleIcon" svgClasses="h-6 w-6 ml-1 c-question" />
                                    </span>
                                </h1>
                                <div class="affCommissionControl items-end flex flex-wrap">
                                    <div class="blockLine flex flex-col mr-3">
                                        <span class="type">Loại Hoa hồng</span>
                                        <v-select class="w-64 relative" v-model="selectedHoaHong" :options="optionsHoaHong"
                                            :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                    </div>
                                    <div class="blockLine flex flex-col mr-8 relative">
                                        <div class="dateRange">
                                            <datepicker class="customeTradeHistory startDate" :format="formatDate"
                                                v-model="startDate"></datepicker>
                                            <span class="seperate">-</span>
                                            <datepicker class="customeTradeHistory endDate" :format="formatDate"
                                                v-model="endDate"></datepicker>
                                        </div>
                                    </div>
                                    <vs-button class="w-32" color="rgb(62, 201, 214)" type="filled"
                                        @click="clickSearchDateTimeHoaHong">Tìm kiếm</vs-button>
                                </div>
                            </div>
                            <div class="notice-comission mb-4">
                                <p>
                                    <span style="color: #F02769;">Lưu ý: </span>
                                    <span style="color: #8D97A0;">Bạn sẽ nhận hoa hồng giao dịch từ tuyến dưới của ngay lập
                                        tức.</span>
                                </p>
                            </div>
                            <div class="body vx-row">
                                <!-- <div class="vx-col w-full lg:w-4/12 lg:mb-5 lg:pr-0">Mỗi ngày mới, bạn sẽ nhận hoa hồng giao dịch từ tuyến dưới của ngày hôm trước.
                                        <div class="wrap-chart bgSecondary boxShadowDashBoard commission-chart">
                                            <div class="header">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19.135" height="16.02" viewBox="0 0 19.135 16.02"><g id="edit-curves" transform="translate(0 -2)"><path id="Path_29616" data-name="Path 29616" d="M5,13.9C14.346,13.9,9.673,3,19.02,3" transform="translate(-0.885 0)" fill="none" stroke="#fa2843" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><path id="Path_29617" data-name="Path 29617" d="M18.135,17.02H1V3" transform="translate(0 0)" fill="none" stroke="#fa2843" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
                                                <span class="colorSecondary text-lg font-bold mb-0 ml-2 header-title">Biểu đồ Hoa hồng Giao dịch</span>
                                                <div class="control flex items-center">
                                                
                                                </div>
                                            </div>
                                            <div class="wrap-chart-below bgPrimary">
                                                <div id="chartCommisst" class="chart-instance chartHight">
                                                    <highcharts ref="chartSplineThree" :options="optionsSpline3"></highcharts>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                <div class="vx-col w-full lg:mt-0 mt-4">
                                    <div class="tableBackground bgSecondary trading-detail relative"
                                        v-if="selectedHoaHong.id == 1">
                                        <table class="table table-dark w-full tableComission bgSecondary"
                                            :class="{ 'ld-loading': isLoading }">
                                            <div class="loading">
                                                <div class="loading__ring">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                        y="0px" viewBox="0 0 100 100"
                                                        style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                                        <path
                                                            d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div class="loading__ring">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                        y="0px" viewBox="0 0 100 100"
                                                        style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                                        <path
                                                            d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <thead>
                                                <tr>
                                                    <th colspan="5">
                                                        <div class="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"
                                                                viewBox="0 0 11 14" class="mr-2">
                                                                <g id="single-copy-06" transform="translate(-1.278)">
                                                                    <rect id="Rectangle_4166" data-name="Rectangle 4166"
                                                                        width="10" height="11"
                                                                        transform="translate(1.778 2.5)" stroke-width="1"
                                                                        stroke="#fa2843" stroke-linecap="round"
                                                                        stroke-linejoin="round" fill="none"></rect>
                                                                    <line id="Line_1332" data-name="Line 1332" x2="6"
                                                                        transform="translate(3.778 0.5)" fill="none"
                                                                        stroke="#fa2843" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"></line>
                                                                </g>
                                                            </svg><span
                                                                class="white text-lg font-bold trading-detail-title">Chi
                                                                tiết Lợi nhuận Giao dịch</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <thead>
                                                <tr>
                                                    <th class="colorSecondary2">Thời gian</th>
                                                    <th class="colorSecondary2">Thanh toán</th>
                                                    <th class="colorSecondary2">Số lượng Giao dịch</th>
                                                    <!--<th class="colorSecondary2">Số nhà Giao dịch</th>-->
                                                    <th class="colorSecondary2">Khối lượng Giao dịch</th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-center table-content" v-if="listChiTietKLGD.length == 0">
                                                <tr>
                                                    <td colspan="5"><span>Không có dữ liệu</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody class="table-content" v-else>
                                                <tr :key="indextr" v-for="(tr, indextr) in listChiTietKLGD">
                                                    <td class="colorSecondary">{{ formatDateAff2(tr.dt) }}</td>
                                                    <td class="colorSecondary">{{ formatPrice(tr.thanhtoan, 2) }}</td>
                                                    <td class="colorSecondary">{{ tr.soluongGD }}</td>
                                                    <!--<td class="colorSecondary">{{ tr.soluongGD }}</td>-->
                                                    <td class="colorSecondary">{{ formatPrice(tr.klgd, 2) }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--<vs-pagination v-if="countPageHH > 0" class="mt-4 mb-2" :total="countPageHH" v-model="currentxHH"  @input="clickPageHH"></vs-pagination>
                                            -->
                                    </div>
                                    <div class="tableBackground bgSecondary trading-detail relative" v-else>
                                        <table class="table table-dark w-full tableComission bgSecondary"
                                            :class="{ 'ld-loading': isLoading }">
                                            <div class="loading">
                                                <div class="loading__ring">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                        y="0px" viewBox="0 0 100 100"
                                                        style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                                        <path
                                                            d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div class="loading__ring">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                        y="0px" viewBox="0 0 100 100"
                                                        style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                                        <path
                                                            d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <thead>
                                                <tr>
                                                    <th colspan="5">
                                                        <div class="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"
                                                                viewBox="0 0 11 14" class="mr-2">
                                                                <g id="single-copy-06" transform="translate(-1.278)">
                                                                    <rect id="Rectangle_4166" data-name="Rectangle 4166"
                                                                        width="10" height="11"
                                                                        transform="translate(1.778 2.5)" stroke-width="1"
                                                                        stroke="#fa2843" stroke-linecap="round"
                                                                        stroke-linejoin="round" fill="none"></rect>
                                                                    <line id="Line_1332" data-name="Line 1332" x2="6"
                                                                        transform="translate(3.778 0.5)" fill="none"
                                                                        stroke="#fa2843" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="1"></line>
                                                                </g>
                                                            </svg><span
                                                                class="white text-lg font-bold trading-detail-title">Chi
                                                                tiết Lợi nhuận Giao dịch</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <thead>
                                                <tr>
                                                    <th class="colorSecondary2">Thời gian</th>
                                                    <th class="colorSecondary2">Thanh toán</th>
                                                    <th class="colorSecondary2">Doanh số</th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-center table-content" v-if="listChiTietKLVip.length == 0">
                                                <tr>
                                                    <td colspan="5"><span>Không có dữ liệu</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody class="table-content" v-else>
                                                <tr :key="indextr" v-for="(tr, indextr) in listChiTietKLVip">
                                                    <td class="colorSecondary">{{ formatDateAff2(tr.dt) }}</td>
                                                    <td class="colorSecondary">{{ formatPrice(100, 2) }}</td>
                                                    <td class="colorSecondary">{{ tr.doanhso }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--<vs-pagination v-if="countPageHHVip > 0" class="mt-4 mb-2" :total="countPageHHVip" v-model="currentxHHVip"  @input="clickPageHHVip"></vs-pagination>
                                            -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="qlht" :class="{ 'block': showqlHt }">
                        <div class="w-full lg:pl-0 px-0">
                            <div>
                                <div class="filterDiv">
                                    <h1 class="text-2xl white font-bold capitalize mb-4">Quản lý đại lý</h1>
                                    <div class="flex flex-wrap">
                                        <div class="relative colFirst lg:mr-5 align-middle">
                                            <p class="color-white-50 mb-1 aff-test-type">Tìm kiếm bằng </p>
                                            <button class="btn search btnSearchType lg:mr-3 button cursor-pointer"
                                                :class="{ active: showActiveLv, primary: showActiveLv }"
                                                @click="showActiveLv = true, showActiveBD = false">Cấp bậc</button>
                                            <button class="btn search btnSearchType button cursor-pointer"
                                                :class="{ active: showActiveBD, primary: showActiveBD }"
                                                @click="showActiveBD = true, showActiveLv = false">Biệt danh</button>
                                        </div>
                                        <div class="md:w-1/2 align-middle">
                                            <div class="lg:ml-8">
                                                <div class="color-white-50 mb-1 aff-text-type">Xem Người bạn giới thiệu bằng
                                                    {{ showActiveLv ? 'Cấp bậc' : 'tên' }}</div>
                                                <div class="flex">
                                                    <v-select :class="{ block: showActiveLv, hidden: showActiveBD }"
                                                        class="w-32 relative mr-4" v-model="selectedLevel"
                                                        :options="optionsLevel" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                                                    <vs-input :class="{ block: showActiveBD, hidden: showActiveLv }"
                                                        class="inputx mr-4 TnD" placeholder="Nhập tên người dùng"
                                                        v-model="EnterNameUser" />
                                                    <vs-button v-if="showActiveLv" color="rgb(62, 201, 214)" type="filled"
                                                        @click="searchCapBac">Tìm kiếm</vs-button>
                                                    <vs-button v-else color="rgb(62, 201, 214)" type="filled"
                                                        @click="searchName">Tìm kiếm</vs-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="paddingResult">
                                    <div class="mb-3 flex flex-wrap">
                                        <h1 class="text-2xl white font-bold capitalize ">Kết quả tìm kiếm</h1>
                                        <div class="ml-auto flex flex-wrap scrollRange items-center">
                                            <span class="textTime mr-4">Khoảng thời gian:</span>
                                            <button class="btn btnTime mr-3 cursor-pointer"
                                                :class="{ 'button primary active': oneday }" @click="changeDateSelect(1)">Hôm
                                                qua</button>
                                            <button class="btn btnTime mr-3 cursor-pointer"
                                                :class="{ 'button primary active': twoday }" @click="changeDateSelect(7)">7
                                                ngày gần nhất</button>
                                            <button class="btn btnTime mr-3 cursor-pointer"
                                                :class="{ 'button primary active': threeday }"
                                                @click="changeDateSelect(30)">30 ngày gần nhất</button>
                                            <button class="btn btnTime cursor-pointer"
                                                :class="{ 'button primary active': allday }" @click="changeDateSelect(0)">Tất
                                                cả</button>
                                        </div>
                                    </div>
                                    <div class="search-result">
                                        <div class="table-responsive table-pc relative">
                                            <table class="table w-full text-center overflow-hidden table-bordered mb-0"
                                                :class="{ 'ld-loading': isLoading }">
                                                <div class="loading">
                                                    <div class="loading__ring">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                            y="0px" viewBox="0 0 100 100"
                                                            style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                                            <path
                                                                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div class="loading__ring">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                                                            y="0px" viewBox="0 0 100 100"
                                                            style="enable-background:new 0 0 100 100;" xml:space="preserve">
                                                            <path
                                                                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <thead>
                                                    <tr>
                                                        <th>Biệt danh</th>
                                                        <th>Cấp bậc</th>
                                                        <th>Tổng KLGD</th>
                                                        <th>HH nhận</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-if="datalistAgency.length == 0">
                                                    <tr>
                                                        <td colspan="4"><span>Không có dữ liệu</span></td>
                                                    </tr>
                                                </tbody>
                                                <tbody v-else>
                                                    <tr :key="itr" v-for="(tr, itr) in datalistAgency">
                                                        <td>
                                                            <a href.prevent class="color-yellow underline">{{ tr.nick_name
                                                            }}</a>
                                                        </td>
                                                        <td>{{ tr.level_vip }}</td>
                                                        <td>{{ formatPrice(tr.tklgd, 2) }}</td>
                                                        <td>{{ formatPrice(tr.thhn, 2) }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import VueApexCharts from 'vue-apexcharts'
import Datepicker from 'vuejs-datepicker'
import vSelect from 'vue-select'
import moment from 'moment'
import getData from '@/pages/trade/navbar/components/data.json'

import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts'
import More from 'highcharts/highcharts-more'
//import FormValidationCustomErrorMessagesVue from '../forms/form-validation/FormValidationCustomErrorMessages.vue'

More(Highcharts)

const chartOne = {
    chart: {
        type: 'areaspline',
        backgroundColor: "transparent",
        height: '250px',
    },
    title: {
        text: ''
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Tuần một',
            'Tuần hai',
            'Tuần ba',
            'Tuần bốn'
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: ''
        },
        grid: {
            cellHeight: 10
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' '
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [
        {
            color: '#31baa0',
            name: ' ',
            data: [0, 0, 0, 0]
        },
        {
            color: '#00b6ff',
            name: ' ',
            data: [0, 0, 0, 0]
        },
        {
            color: '#f46273',
            name: ' ',
            data: [0, 0, 0, 0]
        }
    ]
}

const chartTwo = {
    chart: {
        type: 'areaspline',
        backgroundColor: "transparent",
        height: '250px',
    },
    title: {
        text: ''
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Tuần một',
            'Tuần hai',
            'Tuần bả',
            'Tuần bốn'
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' '
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [
        {
            color: '#31baa0',
            name: ' ',
            data: [0, 0, 0, 0]
        },
        {
            color: '#00b6ff',
            name: ' ',
            data: [0, 0, 0, 0]
        },
        {
            color: '#f46273',
            name: ' ',
            data: [0, 0, 0, 0]
        }
    ]
}

const chartThree = {
    chart: {
        type: 'areaspline',
        backgroundColor: "transparent",
    },
    title: {
        text: ''
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Tuần một',
            'Tuần hai',
            'Tuần bả',
            'Tuần bốn'
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' '
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [
        {
            color: '#31baa0',
            name: ' ',
            data: [0, 0, 0, 0]
        },
        {
            color: '#00b6ff',
            name: ' ',
            data: [0, 0, 0, 0]
        },
        {
            color: '#f46273',
            name: ' ',
            data: [0, 0, 0, 0]
        }
    ]
}

export default {
    components: {
        highcharts: Chart,
        VueApexCharts,
        Datepicker,
        'v-select': vSelect,
    },
    data() {
        return {
            hostName: window.location.hostname,
            showGobal: true,
            showCom: false,
            showqlHt: false,
            showTT: false,
            showTN: true,

            optionsSpline: chartOne,
            optionsSpline2: chartTwo,
            optionsSpline3: chartThree,

            isLoading: false,

            popupThongBao: false,
            loading: false,
            linkDk: '',
            codeGioiThieu: '',
            isDongY: false,
            dongYMua: false,
            popupBuyThamGiaVip: false,
            isVip: false,
            showActiveLv: true,
            showActiveBD: false,
            EnterNameUser: '',
            currentxHH: 1,
            currentxHHVip: 1,
            f1cuaminh: '-------',
            optionsLevel: [
                { id: 1, label: 'Cấp 1' },
                { id: 2, label: 'Cấp 2' },
                { id: 3, label: 'Cấp 3' },
                { id: 4, label: 'Cấp 4' },
                { id: 5, label: 'Cấp 5' },
                { id: 6, label: 'Cấp 6' },
                { id: 7, label: 'Cấp 7' },
            ],
            selectedLevel: { id: 1, label: 'Cấp 1' },
            optionsHoaHong: [
                { id: 1, label: 'Hoa hồng Giao dịch' },
                { id: 2, label: 'Hoa hồng VIP' }
            ],
            selectedHoaHong: { id: 1, label: 'Hoa hồng Giao dịch' },
            popupActiveRank: false,
            formatDate: "dd/MM/yyyy",
            startDate: null,
            endDate: null,

            hhMeF1isWeek: 0,
            totalDlisMe: 0,

            totalDaiLy: 0,
            vip_lv: 1,
            pen_commiss: 0,
            totalNGD: 0,
            commissGD: 0,

            klgdtc1: 0,
            klgdtc2: 0,
            klgdtc3: 0,
            klgdtc4: 0,

            t1: '',
            t2: '',
            t3: '',
            t4: '',

            tslgdmtn: 0,
            tshhmtn: 0,
            tslgdmtt: 0,
            tshhmtt: 0,
            tsdlmtn: 0,
            tsdlmtt: 0,

            listChiTietKLGD: [],
            listChiTietKLVip: [],
            countPageHH: 0,
            countPageHHVip: 0,

            dateListDLSearch: 0,

            oneday: false,
            twoday: false,
            threeday: true,
            allday: false,

            datalistAgency: [],

            showhhGD: true
        }
    },

    methods: {

        saoChep() {
            return this.$vs.notify({
                text: 'Đã Sao chép vào bộ nhớ',
                color: 'success',
                position: 'top-right',
                iconPack: 'feather',
                icon: 'icon-check'
            })
        },

        OkBuyVip() {
            this.loading = true
            this.$vs.notify({
                text: 'This API is deprecated buy-vip Affiliate.vue',
                color: 'warning',
                iconPack: 'feather',
                icon: 'icon-check'
            });
            this.loading = false
            this.popupBuyThamGiaVip = false
            // AuthenticationService.UserBuyVip()
            // .then((res) => {
            //     this.loading = false
            //     if(res.data.success == 1){
            //         this.isVip = true
            //         this.popupBuyThamGiaVip = false
            //         this.$vs.notify({
            //             text:'Đã mua VIP thành công',
            //             color:'success',
            //             position:'top-right',
            //             iconPack: 'feather',
            //             icon:'icon-check'})
            //     }else if(res.data.success == 2){
            //         this.popupBuyThamGiaVip = false
            //         this.popupThongBao = true
            //     }

            // })
        },

        OkNapNgay() {
            this.popupThongBao = false;
            setTimeout(() => {
                this.$router.push('/user/balance').catch(() => { })
            }, 500)
        },

        f1ForUser() {
            this.loading = true;
            AuthenticationService.getNguoiGioiThieu()
                .then((res) => {
                    this.loading = false;
                    if (res.data.success) {
                        let d = res.data.data

                        this.hhMeF1isWeek = d.hhttisMe
                        this.f1cuaminh = d.nick
                        this.totalDaiLy = d.tsdl
                        this.totalNGD = d.tsngd
                        this.commissGD = d.hhgd
                        this.pen_commiss = d.hhdl

                        this.totalDlisMe = d.tsdlisMe

                        this.klgdtc1 = d.tslgdCD1
                        this.klgdtc2 = d.tslgdCD2
                        this.klgdtc3 = d.tslgdCD3
                        this.klgdtc4 = d.tslgdCD4

                        this.t1 = d.t1
                        this.t2 = d.t2
                        this.t3 = d.t3
                        this.t4 = d.t4

                        this.tslgdmtn = d.tslgdmtn ? d.tslgdmtn : 0
                        this.tshhmtn = d.tshhmtn ? d.tshhmtn : 0
                        this.tslgdmtt = d.tslgdmtt ? d.tslgdmtt : 0
                        this.tshhmtt = d.tshhmtt ? d.tshhmtt : 0

                        this.tsdlmtn = d.tsdlmtn ? d.tsdlmtn : 0
                        this.tsdlmtt = d.tsdlmtt ? d.tsdlmtt : 0

                        try {
                            let cS1 = this.$refs.chartSpline.chart;
                            let cS2 = this.$refs.chartSplineTwo.chart;

                            if (d.tsngdMoi0) {

                                let TSNGDM = cS1.series[0] // Tổng số nhà giao dịch mới
                                let pA0 = TSNGDM.points[0]
                                let pA1 = TSNGDM.points[1]
                                let pA2 = TSNGDM.points[2]
                                let pA3 = TSNGDM.points[3]
                                pA0.update({ y: d.tsngdMoi0 }, true)
                                pA1.update({ y: d.tsngdMoi1 }, true)
                                pA2.update({ y: d.tsngdMoi2 }, true)
                                pA3.update({ y: d.tsngdMoi3 }, true)
                            }


                            if (d.tsdlMoi0) {
                                let TSTTVM = cS1.series[1] // Tổng số đại lý mới
                                let pB0 = TSTTVM.points[0]
                                let pB1 = TSTTVM.points[1]
                                let pB2 = TSTTVM.points[2]
                                let pB3 = TSTTVM.points[3]
                                pB0.update({ y: d.tsdlMoi0 }, true)
                                pB1.update({ y: d.tsdlMoi1 }, true)
                                pB2.update({ y: d.tsdlMoi2 }, true)
                                pB3.update({ y: d.tsdlMoi3 }, true)
                            }


                            if (d.tshhMoi0) {
                                let TSHHM = cS1.series[2] // Tổng số hoa hồng mới
                                let pC0 = TSHHM.points[0]
                                let pC1 = TSHHM.points[1]
                                let pC2 = TSHHM.points[2]
                                let pC3 = TSHHM.points[3]
                                pC0.update({ y: d.tshhMoi0 }, true)
                                pC1.update({ y: d.tshhMoi1 }, true)
                                pC2.update({ y: d.tshhMoi2 }, true)
                                pC3.update({ y: d.tshhMoi3 }, true)
                            }

                            //================================

                            if (d.tsngdTTMoi0) {

                                let TSNGTTDM = cS2.series[0]
                                let nA0 = TSNGTTDM.points[0]
                                let nA1 = TSNGTTDM.points[1]
                                let nA2 = TSNGTTDM.points[2]
                                let nA3 = TSNGTTDM.points[3]
                                nA0.update({ y: d.tsngdTTMoi0 }, true)
                                nA1.update({ y: d.tsngdTTMoi0 }, true)
                                nA2.update({ y: d.tsngdTTMoi0 }, true)
                                nA3.update({ y: d.tsngdTTMoi0 }, true)
                            }


                            if (d.tsdlTTMoi0) {
                                let TSTTTTVM = cS2.series[1] // Tổng số đại lý mới
                                let nB0 = TSTTTTVM.points[0]
                                let nB1 = TSTTTTVM.points[1]
                                let nB2 = TSTTTTVM.points[2]
                                let nB3 = TSTTTTVM.points[3]
                                nB0.update({ y: d.tsdlTTMoi0 }, true)
                                nB1.update({ y: d.tsdlTTMoi1 }, true)
                                nB2.update({ y: d.tsdlTTMoi2 }, true)
                                nB3.update({ y: d.tsdlTTMoi3 }, true)
                            }


                            if (d.tshhTTMoi0) {
                                let TSTTHHM = cS2.series[2] // Tổng số hoa hồng mới
                                let nC0 = TSTTHHM.points[0]
                                let nC1 = TSTTHHM.points[1]
                                let nC2 = TSTTHHM.points[2]
                                let nC3 = TSTTHHM.points[3]
                                nC0.update({ y: d.tshhTTMoi0 }, true)
                                nC1.update({ y: d.tshhTTMoi1 }, true)
                                nC2.update({ y: d.tshhTTMoi2 }, true)
                                nC3.update({ y: d.tshhTTMoi3 }, true)
                            }
                        }
                        catch { }
                        //let cS3 = this.$refs.chartSplineThree.chart
                    }

                })
        },

        chiTietLoiNhuanHoaHong() {
            this.isLoading = true
            AuthenticationService.chiTietLoiNhuanHoaHong()
                .then((res) => {
                    this.isLoading = false
                    if (res.data.success) {
                        this.listChiTietKLGD = res.data.data
                        let c = (res.data.count / 10).toString()
                        this.countPageHH = Number(c.split(".")[0])
                    }
                })

        },

        clickPageHH(page) {
            this.isLoading = true
            AuthenticationService.chiTietLoiNhuanHoaHongPage(page)
                .then((res) => {
                    this.isLoading = false
                    if (res.data.success) {
                        this.listChiTietKLGD = res.data.data
                    }
                })
        },


        clickPageHHVip(page) {
            this.isLoading = true
            AuthenticationService.chiTietLoiNhuanHoaHongVipPage(page)
                .then((res) => {
                    this.isLoading = false
                    if (res.data.success) {
                        this.listChiTietKLVip = res.data.data;
                    }
                })
        },

        clickSearchDateTimeHoaHong() {
            this.isLoading = true

            let start = this.formatDateHis(this.startDate);
            let end = this.formatDateHis(this.endDate);

            let t = this.selectedHoaHong.id;

            let obj = {
                t: t,
                s: start,
                e: end
            };

            AuthenticationService.getSeachListChiTietHH(obj)
                .then((res) => {
                    this.isLoading = false
                    if (res.data.success) {

                        if (t == 1) {
                            this.listChiTietKLGD = res.data.data;
                        } else {
                            this.listChiTietKLVip = res.data.data;
                        }
                    }
                })
        },

        changeDateSelect(val) {
            if (val == 30) {
                this.oneday = false
                this.twoday = false
                this.threeday = true
                this.allday = false
            } else if (val == 7) {
                this.oneday = false
                this.twoday = true
                this.threeday = false
                this.allday = false
            } else if (val == 1) {
                this.oneday = true
                this.twoday = false
                this.threeday = false
                this.allday = false
            } else if (val == 0) {
                this.oneday = false
                this.twoday = false
                this.threeday = false
                this.allday = true
            }

            this.dateListDLSearch = val


        },

        searchCapBac() {
            let id = this.selectedLevel.id
            this.isLoading = true

            let obj = {
                id: id,
                kc: this.dateListDLSearch
            }

            AuthenticationService.getSeachListLvAgency(obj)
                .then((res) => {
                    this.isLoading = false
                    if (res.data.success) {
                        this.datalistAgency = res.data.data
                    } else {
                        this.datalistAgency = [];
                    }
                })
        },

        searchName() {
            let n = this.EnterNameUser
            this.isLoading = true

            let obj = {
                name: n,
                kc: this.dateListDLSearch
            }

            AuthenticationService.getSeachListNameAgency(obj)
                .then((res) => {
                    this.isLoading = false
                    if (res.data.success) {
                        this.datalistAgency = res.data.data
                    } else {
                        this.datalistAgency = [];
                    }
                })
        },

        formatDateHis(value) {
            if (value) {
                return moment(String(value)).format('YYYY-MM-DD')
            }
        },

        formatDateAff(value) {
            if (value) {
                return moment(String(value)).format('MM-YYYY')
            }
        },

        formatDateAff2(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        },


        formatPrice(value, minimum) {
            var formatter = new Intl.NumberFormat('en-US', {
                //style: 'currency',
                //currency: '',
                minimumFractionDigits: minimum
            });
            return formatter.format(value);
        },

        replaceAll(str, find, replace) {
            return Number(str.replace(new RegExp(find, 'g'), replace));
        },

        isNumber(value) {
            return typeof value === 'number' && isFinite(value);
        },


    },

    created() {

        // get f1 của mình
        this.f1ForUser()

        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();

        var last_week = new Date(year, currentDate.getMonth(), day - 7);

        this.startDate = moment(String(last_week)).format('MM/DD/YYYY');

        let end_date = new Date(year, month, day);

        this.endDate = moment(String(end_date)).format('MM/DD/YYYY');


        let Ref = getData.ref;
        this.linkDk = window.location.origin + '/register?r=' + Ref;
        this.codeGioiThieu = Ref;

        this.isVip = true // getData.vip

        this.vip_lv = getData.vip_lv

        this.pen_commiss = getData.pen_commiss
    },
}
</script>


<style scoped>
/*#AffiliatePage{
    margin: -2.2rem;
}*/

.affiliatePage .gobal,
.affiliatePage .commission,
.affiliatePage .qlht {
    display: none;
}

.contentWrapper .header {
    padding: 1rem;
    text-align: center;
}

.lsHH {
    display: none;
}

.contentWrapper .body {
    padding: 2rem 3rem;
    text-align: center;
}

.contentWrapper .body .imgShake {
    width: 211px;
    height: 205px;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~@/assets/images/sky/shake.svg');
}

.icon {
    width: 52px;
    height: 55px;
    margin-right: 1rem;
    background-size: cover;
    background-repeat: no-repeat;
}

.borderSubBanner {
    margin: auto;
    width: 90px;
    border-bottom: 1px solid hsla(0, 0%, 100%, .19);
}

.icon.iconCommission {
    background-image: url('~@/assets/images/sky/affi/3.svg');
}

.icon.iconSign {
    background-image: url('~@/assets/images/sky/affi/2.svg');
}

.icon.iconInvite {
    background-image: url('~@/assets/images/sky/affi/1.svg');
}

.affiliatePage .subBanner {
    color: #fff;
    height: 120px;
    background-color: #02142b !important;
}

.affiliatePage .banner .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.affiliatePage .banner {
    background-image: url('~@/assets/images/sky/bitono_affiliate_bg.png');
}

.affiliatePage .banner {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 120px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}

.color-yellow {
    color: #fa2843;
}

.table-bordered td {
    border-color: #7c7c7c;
}

.table-bordered thead th {
    color: hsla(0, 0%, 100%, .5);
    font-weight: 400;
    border-bottom-width: 1px;
    border-color: #7c7c7c;
}

.btnTime.active {
    background-color: #fa2843;
    color: #fff;
    border-color: #fa2843;
}

.btnTime {
    padding: 5px 11px;
    margin-bottom: 5px;
    border-radius: 5px;
    border: 1px solid #7c7c7c;
    color: #7c7c7c;
    background-color: transparent;
    white-space: nowrap;
}

.textTime {
    color: #7c7c7c;
}

.v-select .vs__dropdown-toggle {
    background: transparent;
}

.btnSearchType {
    background-color: #414141;
    color: #fff;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    min-width: 162px;
    padding: 9px 0;
}

.filterDiv .colFirst:before {
    content: "";
    background-color: #41416f;
    width: 1px;
    height: 45px;
    position: absolute;
    z-index: 898888;
    right: -25px;
    top: 22px;
    opacity: .6;
}

.filterDiv {
    background-color: #13263e;
    padding: 37px 42px;
    margin-bottom: 33px;
}

.tableBackground .table-dark td:first-child:after {
    width: calc(100% - 1.5rem);
    left: 1.5rem;
}

.tableBackground .table-dark td:last-child:after {
    width: calc(100% - 1.5rem);
    right: 1.5rem;
    left: auto;
}

.tableBackground .table-dark td,
.tableBackground .table-dark th {
    position: relative;
    border: none;
    padding: .75rem 1.5rem;
}

.tableBackground .table-dark td:after,
.tableBackground .table-dark th:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #7c7c7c;
}

.tableBackground .table-dark thead th {
    font-weight: 400;
    font-size: .75rem;
    color: #7c7c7c;
}

.tableBackground {
    border-radius: 20px;
    border: 1px solid #7c7c7c;
    height: 100%;
    overflow: hidden;
}

.wrap-chart .chartHight {
    height: 400px;
}

.wrap-chart .chart-instance {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.wrap-chart-below {
    border: none;
}

.c-question,
.c-mail {
    stroke: #fa2843;
}

.elipText {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.getIntouch .cardBody {
    padding: 1.25rem 1.25rem 1rem;
}

.getIntouch .cardHeader {
    padding: 1rem 1.25rem;
}

.getIntouch {
    border-radius: 20px;
    height: 100%;
}

.networkVolumeStats .cardFooter p {
    line-height: 45px;
    font-size: 18px;
}

.networkVolumeStats .cardFooter {
    background-color: #fa2843;
    color: #000;
}

.networkVolumeStats .cardFooter {
    padding: 0 1.25rem;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}

.networkVolumeStats .cardBody p {
    line-height: 40px;
}

.networkVolumeStats .cardBody .dataContent {
    margin-right: -10px;
    margin-left: -10px;
    color: #fff;
}

.networkVolumeStats .texthead {
    color: #7c7c7c;
}

.networkVolumeStats .cardBody .head p {
    line-height: 26px;
}

.networkVolumeStats .cardBody .border-bottom,
.networkVolumeStats .cardBody .border-top {
    border-color: #7c7c7c !important;
}

.networkVolumeStats .cardBody {
    padding: 0 1.25rem 1rem;
    height: 205px;
    overflow: hidden;
}

.networkVolumeStats .cardHeader {
    padding: 1rem 1.25rem;
}

.networkVolumeStats {
    background-color: #000;
    border-radius: 20px;
    height: 100%;
    position: relative;
    padding-bottom: 45px;
}

.wrap-chart {
    border-radius: 20px;
}

.wrap-chart {
    z-index: 2;
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: none;
    box-shadow: none;
    position: relative;
    border: 1px solid #7c7c7c;
}

.wrap-chart .header {
    padding: 15px;
    border-bottom: 1px solid #7c7c7c;
}

.groupButton .leftControl {
    width: 90%;
}

.groupButton .rightControl {
    width: auto;
}

.groupButton .form-control {
    color: #333;
    font-size: .875rem;
    background-color: #fafafa;
    border: 1px solid;
    border-radius: 8px 0 0 8px;
    border-color: #7c7c7c;
    height: 40px;
    line-height: 40px;
}

.button.primary,
.button.primary:hover {
    background-color: #fa2843 !important;
    color: #fff !important;
}

.groupButton .btn {
    line-height: 37px;
    height: 100%;
    border-radius: 0 3px 3px 0;
    border: none;
    width: 90px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    white-space: nowrap;
}

.colorSuccess {
    color: #31baa0;
}

.colorDanger {
    color: #f46273;
}

.colorPrimary {
    color: #fa2843;
}


.affiliatePage .affiliateInfo {
    padding: 1.25rem;
    border-radius: 18px;
    height: 100%;
    overflow: hidden;
}

.borderBottom {
    border-color: #7c7c7c;
}

.white-50 {
    color: hsla(0, 0%, 100%, .5) !important;
}

.colorSecondary {
    color: #fff !important;
}

.boxBasic .heading .textRank .q {
    vertical-align: middle;
    display: inline-block;
}

.bgPrimary-hover:hover,
.bgPrimary {
    background-color: #000 !important;
}

.boxBasic .heading .textRank {
    font-size: 17px;
    color: #fa2843;
    border: 1px solid #fa2843;
    border-radius: 14px;
    padding: 1rem 1rem 1rem 80px;
    margin-bottom: 0;
    min-width: 220px;
    width: 100%;
    max-width: 250px;
}

.boxBasic .heading .textRank .text {
    vertical-align: middle;
}

.rank-text {
    margin-left: -62px;
    width: auto !important;
}

.bgSecondary {
    background-color: #02142b !important;
}

.borderSecondary {
    border: 1px solid;
    border-color: #fa2843;
}

.boxRank {
    margin: 0 auto;
}


.borderBtSecondary {
    border-bottom: 1px solid;
    border-color: #fa2843;
}

.boxBasic .heading {
    position: relative;
    height: 100px;
    text-align: center;
}

.boxBasic {
    width: 100%;
    padding: 1.25rem;
    border-radius: 20px;
}

.iconRank {
    position: relative;
    height: 100px;
    width: 100px;
    z-index: 1;
}

.iconRank.rank7 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank7.png');
}

.iconRank.rank6 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank6.png');
}

.iconRank.rank5 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank5.png');
}

.iconRank.rank4 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank4.png');
}


.iconRank.rank3 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank3.png');
}

.iconRank.rank2 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank2.png');
}

.iconRank.rank1 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/images/sky/rank/rank1.png');
}

.dateRange {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 300px;
}

.dateRange>span {
    text-align: center;
}

.dateRange>span {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40px;
    flex: 0 0 40px;
    line-height: 40px;
    color: #fff;
}

@media only screen and (max-width: 646px) {
    .btnSearchType {
        width: 100%;
        margin-bottom: 5px;
    }

    .filterDiv .colFirst:before {
        right: 0;
        opacity: 0;
    }
}</style>

<style>.TnD input {
    color: #000;
    background: #fff;
}

.table td,
.table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

.table-bordered,
.table-bordered td,
.table-bordered th {
    border: 1px solid #dee2e6;
    text-align: center;
}

.vs--single .vs__selected {
    position: absolute;
    z-index: 111;
}

.vs__dropdown-toggle input {
    background: transparent;
}

.vdp-datepicker input {
    padding: 11px !important
}

.v-select .vs__dropdown-toggle {
    border: 0;
    border-bottom: 1px solid #fff;
    border-radius: 5px;
}

.vs__dropdown-option--highlight {
    background: #363b56;
}

.con-vs-popup .vs-popup {
    width: 800px;
}

.vs-popup--content {
    padding: 0;
    margin: 0;
    width: calc(100%);
}

.colorBlue {
    color: #00b6ff;
}

.content .inputGroup input {
    background: #fff;
    color: #545454;
}

.dateRange input {
    background: transparent;
    border-bottom: 1px solid #fff !important;
}</style>