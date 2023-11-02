<template>
  <div id="tradeHisPage" class="tradeHistory">
    <div class="vx-row">
        <div class="w-full">
            <div class="headerContent justify-between items-center mb-4">
                <div class="flex justify-between">
                    <h1 class="text-3xl white font-bold capitalize relative">
                        {{ $t('BOData') }}
                    </h1>
                    <!--<a href="#" class="inline-flex items-center white">
                        <span class="btn-eyes"></span>
                        <span>Ẩn số dư</span>
                    </a> -->

                </div>
            </div>
        </div>
        <div class="vx-col w-full lg:w-1/2 mt-2 lg:pl-0">
            <div class="bostats">
                <div class="wrap-chart">
                    <div class="chart-instance">
                        <div class="vx-row">
                            <div class="vx-col w-full lg:w-2/3 sm:mb-3 justify-center">
                                <!--<vue-apex-charts type="donut" height="250" :options="donutChart.chartOptions" :series="donutChart.series"></vue-apex-charts>
                                -->
                                <highcharts ref="chartDount" :options="optionsDount"></highcharts>

                            </div>
                            <div class="vx-col w-full lg:w-1/3 mt-3 mb-3">
                                <div class="w-full mb-3 borderRightColor">
                                    <p class="white text-center mt-3 mb-2 name">{{ $t('TotalRound') }}</p>
                                    <p class="white text-center value">{{ formatPrice(totalOrder, 0) }}</p>
                                </div>
                                <div class="w-full mb-3 borderTopColor">
                                    <p class="white text-center m-3 mb-2 name">{{ $t('WinRate') }}</p>
                                    <p class="white text-center value">{{ win_rate ? win_rate.toFixed(2) : 0 }}%</p>
                                </div>
                                <div class="w-full mb-3 borderTopColor">
                                    <p class="white text-center mt-3 mb-2 name">{{ $t('TotalTransaction') }}</p>
                                    <p class="white text-center value">
                                      {{ isCurrency == 'VND' ? this.formatPriceVND(trades * 24000) : `$${this.formatPrice(trades, 2)}` }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vx-col w-full lg:w-1/2 mt-2  lg:pr-0">
            <div class="vx-row">
                <div class="vx-col w-full xl:w-1/2 mt-2 lg:mt-0">
                    <div class="p-8 userStat profits flex align-middle justify-around">
                        <div class="wrap">
                            <div class="icon text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.525" height="40.623" viewBox="0 0 43.525 40.623"><g id="bar-graph-profit" transform="translate(0 -1)"><path id="Path_29851" data-name="Path 29851" d="M42.074,38.722H40.623V2.451A1.451,1.451,0,0,0,39.173,1h-5.8a1.451,1.451,0,0,0-1.451,1.451V38.722h-5.8V14.058a1.451,1.451,0,0,0-1.451-1.451h-5.8a1.451,1.451,0,0,0-1.451,1.451V38.722h-5.8V25.664a1.451,1.451,0,0,0-1.451-1.451h-5.8A1.451,1.451,0,0,0,2.9,25.664V38.722H1.451a1.451,1.451,0,0,0,0,2.9H42.074a1.451,1.451,0,1,0,0-2.9Z" fill="#b9c7ff"></path></g></svg>
                            </div>
                            <div class="info">
                                <p class="name m-0">{{ $t('NetProfit') }}</p>
                                <p class="value white m-0 d-flex">
                                    <span>
                                      {{ isCurrency == 'VND' ? this.formatPriceVND(profits * 24000) : `$${this.formatPrice(profits, 2)}` }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vx-col w-full xl:w-1/2 mt-2 xl:mt-0">
                    <div class="p-8 userStat revenue flex align-middle justify-around">
                        <div class="wrap">
                            <div class="icon text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="49.009" height="55.129" viewBox="0 0 49.009 55.129"><g id="savings" transform="translate(-4.441 -1)"><path id="Path_29852" data-name="Path 29852" d="M30.559,1A11.559,11.559,0,1,0,42.119,12.559,11.559,11.559,0,0,0,30.559,1Zm5.075,12.188-4.446,4.446a.889.889,0,0,1-1.257,0l-4.446-4.446a.889.889,0,0,1,0-1.257l4.446-4.446a.889.889,0,0,1,1.257,0l4.446,4.446A.889.889,0,0,1,35.634,13.188Z" transform="translate(-1.613)" fill="#bbe8e0"></path> <path id="Path_29853" data-name="Path 29853" d="M19.367,49l1.459,11.67a.889.889,0,0,0,.882.779H39.492a.889.889,0,0,0,.882-.779L41.833,49Z" transform="translate(-1.654 -5.32)" fill="#bbe8e0"></path> <path id="Path_29854" data-name="Path 29854" d="M53.149,32.773a15.086,15.086,0,0,0-23.314,4.239V28.95c-.3.019-.589.044-.889.044s-.594-.026-.889-.044v8.062A15.086,15.086,0,0,0,4.742,32.773a.889.889,0,0,0,0,1.334,15.056,15.056,0,0,0,19.339.513,13.3,13.3,0,0,1,3.93,8.6H18.276a.889.889,0,0,0-.882,1l.1.779H40.4l.1-.779a.889.889,0,0,0-.882-1H29.88a13.3,13.3,0,0,1,3.93-8.6,15.056,15.056,0,0,0,19.339-.513.889.889,0,0,0,0-1.334Z" transform="translate(0 -3.098)" fill="#bbe8e0"></path></g></svg>
                            </div>
                            <div class="info">
                                <p class="name m-0">{{ $t('TotalRevenue') }}</p>
                                <p class="value white m-0 d-flex">
                                    <span>
                                      {{ isCurrency == 'VND' ? this.formatPriceVND(revenue * 24000) : `$${this.formatPrice(revenue, 2)}` }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vx-col w-full relative mt-2">
                    <vs-progress class="bg-red" :height="8" :percent="80" color="success"></vs-progress>
                    <div class="block">
                        <span class="float-left mr-1">{{ $t('Buy').toUpperCase() }}</span>
                        <span class="green float-left">
                            {{ up_rate ? up_rate.toFixed(2) : 0 }}%
                        </span>
                        <span class="float-right ml-1">{{ $t('Sell').toUpperCase() }}</span>
                        <span class="red float-right">
                            <span v-if="up_rate">{{ (100 - up_rate ).toFixed(2)}}%  </span>
                            <span v-else>0%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vx-row mt-5">
        <div class="headerContent w-full flex lg:flex-row flex-col justify-between items-center mb-4">
            <h1 class="text-3xl white font-bold capitalize">{{ $t('TransactionHistory') }}</h1>
            <div class="lg:flex items-end">
                <div class="flex flex-col lg:mr-3 relative">
                    <div class="dateRange">
                        <datepicker class="customeTradeHistory startDate" :format="formatDate" v-model="startDate"></datepicker>
                        <span class="seperate">-</span>
                        <datepicker class="customeTradeHistory endDate" :format="formatDate" v-model="endDate"></datepicker>
                    </div>
                </div>
                <vs-button color="rgb(62, 201, 214)" type="filled" @click="getSeachOrderDate()">{{ $t('Search') }}</vs-button>
            </div>
        </div>
        <div class="table-responsive tableTradeHis relative">
            <table class="table table-bordered w-full" :class="{'ld-loading': isLoading}">
                <div class="loading">
                    <div class="loading__ring">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path></svg>
                    </div>
                    <div class="loading__ring">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path></svg>
                    </div>
                </div>
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Tài sản</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Lựa chọn</th>
                        <th>Đã chọn</th>
                        <th>Giá mở</th>
                        <th>Giá đóng</th>
                        <th>Giá trị</th>
                        <th>Thanh toán</th>
                    </tr>
                </thead>
                <tbody v-if="dataHisOrder.length == 0 ">
                    <tr>
                        <td colspan="9" class="text-center">
                            Không có dữ liệu
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr :key="indextr" v-for="(tr, indextr) in dataHisOrder">
                        <td class="text-center">
                            {{ tr.oss }}
                        </td>
                        <td class="text-center">
                            {{ tr.cu }}
                        </td>
                        <td class="text-center w-32">
                            {{ formatDateOrder(tr.d) }}
                        </td>
                        <td class="text-center">
                            30 giây
                        </td>
                        <td class="text-center" v-if="tr.bs == 'buy'">
                            <feather-icon class="text-success" icon="TrendingUpIcon" svgClasses="w-4 h-4"  />
                            MUA
                        </td>
                        <td class="text-center" v-else>
                            <feather-icon class="text-danger" icon="TrendingDownIcon" svgClasses="w-4 h-4" />
                            BÁN
                        </td>
                        <td class="text-center">
                            {{ isCurrency == 'VND' ? formatPriceVND(tr.o * 24000) : `$${tr.o}` }}
                        </td>
                        <td class="text-center">
                            {{ isCurrency == 'VND' ? formatPriceVND(tr.c * 24000) : `$${tr.c}` }}
                        </td>
                        <td class="text-center">
                            {{ isCurrency == 'VND' ? formatPriceVND(tr.ab * 24000) : `$${tr.ab}` }}
                        </td>
                        <td class="text-center text-success" v-if="tr.aw > 0">
                            +{{ isCurrency == 'VND' ? formatPriceVND(tr.aw * 24000) : `$${tr.aw}` }}
                        </td>
                        <td class="text-center text-danger" v-else>
                            -{{ isCurrency == 'VND' ? formatPriceVND(tr.al * 24000) : `$${tr.al}` }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
//import VueApexCharts from 'vue-apexcharts'

import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import More from 'highcharts/highcharts-more'

import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

Highcharts3D(Highcharts)
More(Highcharts)

const chartDount = {
    chart: {
        type: 'pie',
        backgroundColor: "transparent",
        height: '250px',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: 50,
            depth: 20
        },
        series: {
            colors: ["#EA5455", "#28C76F"],
        	dataLabels: {
          	    enabled: true,
                color: '#fff'
			}
		}
    },
    legend:{
        itemHoverStyle:{"color": "#C1C1C1"},
        itemStyle: {"color": "#fff", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"}
    },
    series: [{
        pie: {
            borderColor: 'transparent',
            borderWidth: 0
        },
        showInLegend: true,
        name: '',
        data: [
            ['Total Lose', 78],
            ['Total Win', 34]
        ]
    }]
}

export default {
    components: {
        //VueApexCharts,
        Datepicker,
        highcharts: Chart
    },
    data() {
        return {
            dataHisOrder: [],

            isLoading: false,

            down:0, // số lần sell
            down_rate:0, // tỉ lệ sell
            lose: 0,
            profits: 0, // lợi nhuận rồng
            refund: 0, // hoàn tiền
            revenue: 0, // tổng doanh thu
            trades: 0, // tổng tiền giao dịch
            up:0, // số lần buy
            up_rate:0, // tỉ lệ buy
            win: 0,
            win_rate: 0,

            formatDate: "MM/dd/yyyy",
            startDate: null,
            endDate: null,
            optionsDount: chartDount,
            totalOrder: 0,
            // donutChart: {
            //     series: [0, 1],
            //     chartOptions: {

            //         labels: ["Tổng vòng thua", "Tổng vòng thắng"],
            //         //colors: this.themeColors,
            //         colors: ["#28C76F", "#EA5455", "#414141"],

            //         responsive: [{
            //             breakpoint: 480,
            //             options: {
            //                 chart: {
            //                     width: 200
            //                 },
            //                 legend: {
            //                     position: 'bottom'
            //                 }
            //             }
            //         }]
            //     }
            // }
            isCurrency: 'USD'
        }
    },
  methods: {


    getInfoAccountDoanhThu(){
        AuthenticationService.getThongTinLoiNhuan()
        .then((res) => {
            if(res.data.success){
                let cD = this.$refs.chartDount.chart.series[0];
                let gD = res.data.data;
                let obj = [
                    {
                        name: 'Total Lose',
                        y: gD.lose
                    },
                    {
                        name: 'Total Win',
                        y: gD.win
                    }
                ]
                cD.update({data: obj}, true)
                this.totalOrder = gD.lose + gD.win
                //this.donutChart.series = [gD.lose, gD.win]

                this.up = gD.up
                this.up_rate = gD.up_rate
                this.down = gD.down
                this.down_rate = gD.down_rate
                this.win = gD.win
                this.win_rate = gD.win_rate
                this.lose = gD.lose
                this.trades = gD.trades
                this.revenue = gD.revenue

                this.profits = gD.profits

                gD = null;
            }
        })
    },


    getListHistoryOrder(){
        this.isLoading = true
        AuthenticationService.getListHisOrder()
        .then((res) => {
            if(res.data.success){
                //console.log(res.data.data)
                this.isLoading = false
                this.dataHisOrder = res.data.data
            }
        })
    },

    getSeachOrderDate(){
        this.isLoading = true


        let start =  this.formatDateHis(this.startDate)
        let end =  this.formatDateHis(this.endDate)

        let obj = {
            s: start,
            e: end
        }

        AuthenticationService.getSeachListOrder(obj)
        .then((res) => {
            if(res.data.success){
                //console.log(res.data.data)
                this.isLoading = false
                this.dataHisOrder = res.data.data
            }
        })
    },

    replaceAll(str, find, replace) {
        return Number(str.replace(new RegExp(find, 'g'), replace));
    },

    isNumber(value){
        return typeof value === 'number' && isFinite(value);
    },

    formatPrice(value, minimum) {
        var formatter = new Intl.NumberFormat('en-US', {
            //style: 'currency',
            //currency: '',
            minimumFractionDigits: minimum
        });
        return formatter.format(value);
    },

    formatDateHis(value){
        if (value) {
          return moment(String(value)).format('YYYY-MM-DD')
        }
    },

    formatDateOrder(value){
      if (value) {
          return moment(String(value)).format('MM/DD/YYYY HH:mm:ss')
      }
    },

    formatPriceVND(value) {
      return value.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
    },

  },

  created() {
        this.isCurrency = JSON.parse(localStorage.getItem('CURRENCY')) || 'USD';
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth()
        var year = currentDate.getFullYear()

        var last_week = new Date(year, currentDate.getMonth(), day - 7);

        this.startDate = moment(String(last_week)).format('MM/DD/YYYY')

        let end_date = new Date(year, month, day)

        this.endDate = moment(String(end_date)).format('MM/DD/YYYY')



        this.getInfoAccountDoanhThu()
        this.getListHistoryOrder()
  },
}
</script>

<style scoped>

.tableTradeHis{
    height: 400px;
}

#tradeHisPage{
    padding: 25px 4rem;
}

.table-bordered td {
    border-color: #797979;
}

.table-bordered thead th {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
    border-bottom-width: 1px;
    border-color: #797979;
    text-align: center;
}

.dateRange > span {
    flex: 0 0 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
}

.dateRange .customeTradeHistory:first-child {
    padding-right: 20px;
}

.dateRange .customeTradeHistory:last-child {
    padding-right: 20px;
}

.dateRange {
    display: flex;
    max-width: 300px;
}


.bostats {
    min-height: 292px;
    border-radius: 22px;
    border: 1px solid #41416F;
    background-color: #28384a;
}

.wrap-chart .chart-instance {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-bottom: 5px;
}

.tradeHistory .userStat.revenue {
    background-color: #31BAA0;
}

.tradeHistory .userStat.profits {
    background-color: #94886d;
}

.tradeHistory .userStat {
    border-radius: 14px;
    padding-left: 30px;
    padding-right: 30px;
}

.tradeHistory .userStat .wrap {
    flex: 1;
    display: flex;
    max-width: 300px;
    align-items: center;
}

.tradeHistory .userStat .info {
    flex: 1;
}

.tradeHistory .userStat .icon {
    flex: 0 0 60px;
    max-width: 60px;
}

.tradeHistory .userStat .info .name {
    font-size: 20px;
    color: #3c2a01;
}

.tradeHistory .userStat .info .value {
    font-size: 30px;
}

.icon {
    width: 24px;
    height: 50px;
    margin-right: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.borderTopColor{
    border-top: 1px solid rgba(255, 255, 255, 0.22);
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
    background: #02142b;
    border-radius: 5px;
    border: none;
    padding: 0 !important;
    border: 1px solid rgba(255, 255, 255, 0.15);
}


</style>

<style>

.theme-dark .apexcharts-canvas .apexcharts-pie-series path {
    stroke: transparent !important;
}

.content .inputGroup input {
    background: #fff;
    color: #545454;
}

.dateRange input{
    background: transparent;
    border-bottom: 1px solid #fff !important;
}
</style>
