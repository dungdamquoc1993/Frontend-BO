<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydnz
========================================================================================== -->

<template>
    <div id="tradePage" class="trade-container">
    <div class="vx-row m-0">
        <div class="w-full">
  </div>
        <div class="vx-col w-full xl:w-10/12 relative">
            <div class="h-full">
                <div class="relative chartBox">
                    <highcharts ref="chartStock" class="wap-chart" :constructor-type="'stockChart'" :options="chartOptionsStock"></highcharts>
                    <div class="titleChartCandle flex items-center">
                        <span class="iconBTC"></span>
                        <span class="textPrice">BTC/USDT</span>
                    </div>
                    <div class="slider sidebarMobile" style="height: 180px;">
                        <div class="slidercontent">
                            <div class="backgroundOverlay" :style="`background-image: url(${require('@/assets/images/sky/overlay_left.svg')});`"></div>
                            <div class="flex flex-col justify-between " style="height: 172px; margin-left: 10px;">
                            <span class="font-12 zIndex99" style="color: rgb(252, 95, 95);">{{ CSSELL }}%</span>
                                <vs-progress style="width: 130px;" class="bg-red progress" :height="4" :percent="CSBUY" color="success"></vs-progress>
                                <span class="font-12 zIndex99" style="color: rgb(49, 186, 160);">{{ CSBUY }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="analysis-wrapper" class="analysis-wrapper relative">
                    <vs-tabs>
                        <vs-tab label="INDICATORS" @click="activeGau= true, activeHis=true">
                        </vs-tab>
                        <vs-tab label="LAST RESULTS" @click="activeGau=true, activeHis=false">
                        </vs-tab>
                    </vs-tabs>

                    <div class="wrap-gauge-meter" :class="{active:activeGau, hidden: !activeHis}">
                        <div class="wrap-gauge-meter-inner">
                            <div class="gauge-meter">
                                <div class="gauge-meter-sub gauge-meter--os">
                                    <div class="v-popover gauge-meter-popover">
                                        <div class="trigger inline-block">
                                            <h3 class="gauge-meter-title">Oscillators
                                                <span class="gauge-meter-title-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g id="c-question" transform="translate(3.068 -8.774)"><g id="Ellipse_1825" data-name="Ellipse 1825" transform="translate(-2.068 9.774)" fill="none" stroke="#fefefe" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"><circle cx="10" cy="10" r="10" stroke="none"></circle> <circle cx="10" cy="10" r="10.5" fill="none"></circle></g> <g id="question" transform="translate(3.497 13.43)"><path id="Path_30768" data-name="Path 30768" d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z" transform="translate(-5.694 -1)" fill="#fefefe"></path> <ellipse id="Ellipse_1827" data-name="Ellipse 1827" cx="1.363" cy="1.284" rx="1.363" ry="1.284" transform="translate(2.252 11.56)" fill="#fefefe"></ellipse></g></g></svg>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                    <h4 class="gauge-meter-sub-title">{{ textTitleOs }}</h4>
                                    <div class="gauge-meter-border">
                                        <div class="gauge-meter-background rank-2"></div>
                                        <ul class="gauge-meter-label-list">
                                            <li class="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                                            strong<br>sell
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--sell active">
                                            sell
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--neutral">
                                            neutral
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--buy">
                                            buy
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                                                strong<br>buy
                                            </li>
                                        </ul>
                                        <ul class="gauge-meter-status-list">
                                            <li class="gauge-meter-status-item">
                                                <span class="gauge-meter-status-value gauge-meter-status-value--sell">{{ NumOscSELL }}</span>
                                                <span class="gauge-meter-status-text">Sell</span>
                                            </li>
                                            <li class="gauge-meter-status-item">
                                                <span class="gauge-meter-status-value gauge-meter-status-value--neutral">{{ NumOscNeutral }}</span>
                                                <span class="gauge-meter-status-text">Neutral</span>
                                            </li>
                                            <li class="gauge-meter-status-item">
                                                <span class="gauge-meter-status-value gauge-meter-status-value--buy">{{ NumOscBUY }}</span>
                                                <span class="gauge-meter-status-text">Buy</span>
                                            </li>
                                        </ul>
                                        <highcharts ref="chartOs" class="gauge-meter-pane" :options="optionsOs"></highcharts>
                                    </div>
                                </div>
                                <div class="gauge-meter-sub gauge-meter--su">
                                    <div class="v-popover gauge-meter-popover">
                                        <div class="trigger" style="display: inline-block;">
                                            <h3 class="gauge-meter-title">
                                                        Summary
                                                        <span class="gauge-meter-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g id="c-question" transform="translate(3.068 -8.774)"><g id="Ellipse_1825" data-name="Ellipse 1825" transform="translate(-2.068 9.774)" fill="none" stroke="#fefefe" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"><circle cx="10" cy="10" r="10" stroke="none"></circle> <circle cx="10" cy="10" r="10.5" fill="none"></circle></g> <g id="question" transform="translate(3.497 13.43)"><path id="Path_30768" data-name="Path 30768" d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z" transform="translate(-5.694 -1)" fill="#fefefe"></path> <ellipse id="Ellipse_1827" data-name="Ellipse 1827" cx="1.363" cy="1.284" rx="1.363" ry="1.284" transform="translate(2.252 11.56)" fill="#fefefe"></ellipse></g></g></svg></span></h3> </div>
                                    </div>
                                    <h4 class="gauge-meter-sub-title">{{ textTitleSu }}</h4>
                                    <div class="gauge-meter-border">
                                        <div class="gauge-meter-background rank-3"></div>
                                        <ul class="gauge-meter-label-list">
                                            <li class="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                                                strong
                                                <br>sell
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--sell">
                                                sell
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--neutral active">
                                                neutral
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--buy">
                                                buy
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                                                strong
                                                <br>buy
                                            </li>
                                        </ul>
                                        <ul class="gauge-meter-status-list">
                                            <li class="gauge-meter-status-item">
                                            <span class="gauge-meter-status-value gauge-meter-status-value--sell">{{ NumSumSELL }}</span>
                                            <span class="gauge-meter-status-text">Sell</span>
                                            </li>
                                            <li class="gauge-meter-status-item">
                                            <span class="gauge-meter-status-value gauge-meter-status-value--neutral">{{ NumSumNeutral }}</span>
                                            <span class="gauge-meter-status-text">Neutral</span>
                                            </li>
                                            <li class="gauge-meter-status-item">
                                            <span class="gauge-meter-status-value gauge-meter-status-value--buy">{{ NumSumBUY }}</span>
                                            <span class="gauge-meter-status-text">Buy</span>
                                            </li>
                                        </ul>
                                        <!--  -->
                                        <highcharts class="gauge-meter-pane" :options="optionsSu" ref="chartSu"></highcharts>
                                        <!--  -->
                                    </div>
                                </div>
                                <div class="gauge-meter-sub gauge-meter--ma">
                                    <div class="v-popover gauge-meter-popover">
                                        <div class="trigger" style="display: inline-block;">
                                            <h3 class="gauge-meter-title">
                                                        Moving Averages
                                                        <span class="gauge-meter-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g id="c-question" transform="translate(3.068 -8.774)"><g id="Ellipse_1825" data-name="Ellipse 1825" transform="translate(-2.068 9.774)" fill="none" stroke="#fefefe" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"><circle cx="10" cy="10" r="10" stroke="none"></circle> <circle cx="10" cy="10" r="10.5" fill="none"></circle></g> <g id="question" transform="translate(3.497 13.43)"><path id="Path_30768" data-name="Path 30768" d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z" transform="translate(-5.694 -1)" fill="#fefefe"></path> <ellipse id="Ellipse_1827" data-name="Ellipse 1827" cx="1.363" cy="1.284" rx="1.363" ry="1.284" transform="translate(2.252 11.56)" fill="#fefefe"></ellipse></g></g></svg></span></h3> </div>
                                    </div>
                                    <h4 class="gauge-meter-sub-title">{{ textTitleMa }}</h4>
                                    <div class="gauge-meter-border">
                                        <div class="gauge-meter-background rank-3"></div>
                                        <ul class="gauge-meter-label-list">
                                            <li class="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                                                strong
                                                <br>sell
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--sell">
                                                sell
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--neutral active">
                                                neutral
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--buy">
                                                buy
                                            </li>
                                            <li class="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                                                strong
                                                <br>buy
                                            </li>
                                        </ul>
                                        <ul class="gauge-meter-status-list">
                                            <li class="gauge-meter-status-item">
                                            <span class="gauge-meter-status-value gauge-meter-status-value--sell">{{ NumMovSELL }}</span>
                                            <span class="gauge-meter-status-text">Sell</span>
                                            </li>
                                            <li class="gauge-meter-status-item">
                                            <span class="gauge-meter-status-value gauge-meter-status-value--neutral">{{ NumMovNeutral }}</span> <span class="gauge-meter-status-text">Neutral</span>
                                            </li>
                                            <li class="gauge-meter-status-item">
                                            <span class="gauge-meter-status-value gauge-meter-status-value--buy">{{ NumMovBUY }}</span>
                                            <span class="gauge-meter-status-text">Buy</span>
                                            </li>
                                        </ul>
                                        <highcharts class="gauge-meter-pane" :options="optionsMa" ref="chartMa"></highcharts>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="historyBox" :class="{active: !activeGau, hidden: activeHis}">
                        <div class="overviewInfo flex items-center">
                            <span class="badgeItem">
                                <span class="color-green uppercase font-bold">Mua</span>
                                <span> {{ totalBuyStatic }}</span>
                            </span>
                            <span class="badgeItem ml-2">
                                <span class="color-red uppercase font-bold">Bán</span>
                                <span> {{ totalSellStatic }}</span>
                            </span>
                        </div>
                        <div class="ct flex justify-center">
                            <div class="vx-row">
                                <div class="vx-col w-18 list1">
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                </div>
                                <div class="vx-col w-18 list2">
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                </div>
                                <div class="vx-col w-18 list3">
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                </div>
                                <div class="vx-col w-18 list4">
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                </div>
                                <div class="vx-col w-18 list5">
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="vx-col w-full xl:w-2/12 rightBar">
            <div class="pc block">
                <div class="mb-6">
                    <div class="mt-2 mb-2">
                        Tiền cược
                    </div>
                    <div class="relative">
                        <vs-input @keyup="nhapBetAmount" class="w-full betInput" icon-pack="feather" icon="icon-dollar-sign" placeholder="10" v-model="betAmount" icon-no-border />
                        <feather-icon @click="clearBAmount()" style="right: 5px;top: 7px; position: absolute !important" class="cursor-pointer" icon="XCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </div>
                    <div class="vx-row m-0 mt-2">
                        <div class="vx-col md:w-6/12 w-full text-center mt-2 p-1">
                            <span class="w-full bpF cursor-pointer h-8" @click="truBetAmount">-</span>
                        </div>
                        <div class="vx-col md:w-6/12 w-full text-center mt-2 p-1">
                            <span class="w-full bpF cursor-pointer h-8" @click="congBetAmount">+</span>
                        </div>
                        <div class="vx-col md:w-4/12 w-full text-center mt-2 p-1">
                            <span class="w-full bpF cursor-pointer h-8" @click="clickCT(50)">+50</span>
                        </div>
                        <div class="vx-col md:w-4/12 w-full text-center mt-2 p-1">
                            <span class="w-full bpF cursor-pointer h-8" @click="clickCT(100)">+100</span>
                        </div>
                        <div class="vx-col md:w-4/12 w-full text-center mt-2 p-1">
                            <span class="w-full bpF cursor-pointer h-8" @click="clickCT(0)">All</span>
                        </div>
                    </div>
                </div>
                <div class="lg:relative mb-10">
                    <div class="mt-2 mb-2 text-center">
                        Lợi nhuận
                    </div>
                    <div class="text-center">
                        <span class="profitPercent color-light-blue mb-2">95%</span>
                        <span class="profitValue color-green text-3xl font-bold">+${{ loiNhuan }}</span>
                    </div>
                </div>
                <div class="lg:relative mb-10 text-center">
                    <div class="text-center">
                        Chỉ báo tâm lý
                    </div>
                    <vs-progress class="bg-red" :height="4" :percent="CSBUY" color="success"></vs-progress>
                    <div class="block">
                        <span class="color-green float-left">
                            {{ CSBUY }}%
                        </span>
                        <span class="color-red float-right">
                            {{ CSSELL }}%
                        </span>
                    </div>
                </div>

                <div class="lg:relative mb-5 mt-10">
                    <div class="pb-1 col-md-12 col-4 bet-box-time" style="border: 1px solid #fa2843;border-radius: 4px;background-color: #1d233b;">
                        <a class="btn btn-trade-time btnTransparent w-100 flex flex-col justify-center items-center" style="height: 37px; color: #fff">
                            <p class="font-14 mb-0" style="line-height: normal;" :class="{'text-danger': !isBet}">{{ textTimeDown }}:
                                <span class="mb-0 font-bold ml-1 timer_counter second" style="line-height: normal;">{{ seconDown }}s</span>
                            </p>
                        </a>
                    </div>
                    <div class="h-6"></div>
                    <vs-button @click="BetBuySell('buy')" :disabled="!isBet" class="w-full h-16 font-bold mb-3" color="success" type="relief">
                    MUA
                        <feather-icon style="top: 5px;" icon="TrendingUpIcon" svgClasses="w-6 h-6"></feather-icon>
                    </vs-button>
                    <vs-button @click="BetBuySell('sell')" :disabled="!isBet" class="w-full h-16 font-bold" color="danger" type="relief">
                    BÁN
                        <feather-icon style="top: 5px;" icon="TrendingDownIcon" svgClasses="w-6 h-6"></feather-icon>
                    </vs-button>
                    <!--<vs-button @click="clickMin" class="w-full h-16 font-bold" color="danger" type="relief">
                    TEST
                        <feather-icon style="top: 5px;" icon="TrendingDownIcon" svgClasses="w-6 h-6"></feather-icon>
                    </vs-button> -->
                </div>
            </div>
            <div class="mobile hidden">
                <div class="sidebarPC relative">
                    <vs-progress class="bg-red" :height="4" :percent="CSBUY" color="success"></vs-progress>
                    <div class="block">
                        <span class="color-green float-left">
                            {{ CSBUY }}%
                        </span>
                        <span class="color-red float-right">
                            {{ CSSELL }}%
                        </span>
                    </div>
                </div>
                <div class="relative">
                    <div class="mt-2 mb-2 text-center">
                        Lợi nhuận
                        <span class="profitPercent color-light-blue mb-2">95%</span>
                        <span class="profitValue color-green text-3xl font-bold">+${{ loiNhuan }}</span>
                    </div>
                </div>
                 <div class="relative">
                    <div class="flex">
                        <div class="flex w-full mr-2">
                        <vs-button @click="truBetAmount" class="w-full" type="border" icon-pack="feather" icon="icon-minus"></vs-button>
                        </div>
                        <div class="flex relative" style="width: 55rem;">
                            <vs-input readonly="readonly" @click.stop="showMobileMenu=!showMobileMenu" class="w-full betInput" icon-pack="feather" icon="icon-dollar-sign" placeholder="10" v-model="betAmount" icon-no-border />
                            <feather-icon @click="clearBAmount()" style="right: 5px;top: 7px;position: absolute !important" class="cursor-pointer" icon="XCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                        </div>
                        <div class="flex w-full ml-2">
                        <vs-button @click="congBetAmount" class="w-full" type="border" icon-pack="feather" icon="icon-plus"></vs-button>
                        </div>
                    </div>
                </div>
                <div class="relative mb-5 mt-10">
                    <div class="flex">
                        <vs-button @click="BetBuySell('sell')" :disabled="!isBet" class="w-full h-16 font-bold" color="danger" type="relief">
                        BÁN
                        <feather-icon style="top: 5px;" icon="TrendingDownIcon" svgClasses="w-6 h-6"></feather-icon>
                        </vs-button>
                        <div class="m-2 flex">
                            <div class="relative" style="margin: 0 auto;">
                                <div class="absolute mbTextCountdown" :class="{'text-danger': !isBet}">
                                    {{ textTimeDown }}
                                </div>
                                <div class="circle red">
                                    <svg width="45" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="translate(110,110)">
                                            <circle r="100" class="e-c-base"></circle>
                                            <g transform="rotate(-90)">
                                                <circle r="100" class="e-c-progress" style="stroke-dasharray: 628.319;"></circle>
                                                <g id="e-pointer">
                                                    <circle cx="100" cy="0" r="8" class="e-c-pointer"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="controlls">
                                    <div class="display-remain-time timer_counter second">{{ seconDown }}</div>
                                </div>
                            </div>
                        </div>
                        <vs-button @click="BetBuySell('buy')" :disabled="!isBet" class="w-full h-16 font-bold" color="success" type="relief">
                        MUA
                        <feather-icon style="top: 5px;" icon="TrendingUpIcon" svgClasses="w-6 h-6"></feather-icon>
                        </vs-button>
                    </div>
                </div>
                <div class="keyboard-input-wrap" :class="{active: showMobileMenu}">
                    <div class="numKeyboardInput" @click="showMobileMenu=!showMobileMenu"></div>
                     <div class="keyboard" :class="{hiddenKey: !showMobileMenu}">
                            <div id="amountWrapper" class="amountWrapper">
                                <div class="headerAmount">
                                    <span>Khối lượng giao dịch</span>
                                </div>
                                <div class="groupButtonMobile flex">
                                    <div class="flex w-full mr-2">
                                        <vs-button @click="truBetAmount" class="w-full" type="border" icon-pack="feather" icon="icon-minus"></vs-button>
                                        </div>
                                    <div class="flex relative" style="width: 55rem;">
                                        <vs-input readonly="readonly" @keyup="nhapBetAmount" class="w-full betInput" icon-pack="feather" icon="icon-dollar-sign" placeholder="10" v-model="betAmount" icon-no-border />
                                        <feather-icon @click="clearBAmount()" style="right: 5px;top: 7px;position: absolute !important;" class="cursor-pointer" icon="XCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                                    </div>
                                    <div class="flex w-full ml-2">
                                        <vs-button @click="congBetAmount" class="w-full" type="border" icon-pack="feather" icon="icon-plus"></vs-button>
                                    </div>
                                </div>
                                <div class="relative">
                                    <div class="mt-2 mb-2 text-center">
                                        Lợi nhuận
                                        <span class="profitPercent color-light-blue mb-2">95%</span>
                                        <span class="profitValue color-green text-3xl font-bold">+${{ loiNhuan }}</span>
                                    </div>
                                </div>
                            </div>
                            <table id="keyboardLandscape" style="height: calc(100% - 160px);">
                                    <tbody>
                                        <tr class="suggestion">
                                            <td @click="clickCT(5)">+5</td>
                                            <td @click="clickCT(10)">+10</td>
                                            <td @click="clickCT(50)">+50</td>
                                            <td @click="clickCT(100)">+100</td>
                                        </tr>
                                        <tr>
                                            <td @click="writeBetAmountKey(1)">1</td>
                                            <td @click="writeBetAmountKey(2)">2</td>
                                            <td @click="writeBetAmountKey(3)">3</td>
                                            <td rowspan="2" @click="clickCT(0)"><span>Tất cả</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td @click="writeBetAmountKey(4)">4</td>
                                            <td @click="writeBetAmountKey(5)">5</td>
                                            <td @click="writeBetAmountKey(6)">6</td>
                                        </tr>
                                        <tr>
                                            <td @click="writeBetAmountKey(7)">7</td>
                                            <td @click="writeBetAmountKey(8)">8</td>
                                            <td @click="writeBetAmountKey(9)">9</td>
                                            <td rowspan="2" @click="showMobileMenu=!showMobileMenu">Hoàn tất</td>
                                        </tr>
                                        <tr>
                                            <td @click="writeBetAmountKey('.')">.</td>
                                            <td @click="writeBetAmountKey(0)">0</td>
                                            <td @click="deleteString">
                                            <feather-icon class="cursor-pointer" icon="DeleteIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                </div>

            </div>
        </div>
    </div>

    <div class="popupCongratulation" :class="{'block': isWinPop}">
        <div class="mask"></div>
        <div class="popupCongratulationContent">
            <div class="winLive flex justify-center">
                <div class="wrapNotify congratulation h-100 ">
                    <div class="boxNotify">
                        <img :src="require('@/assets/images/sky/icon_win_live.svg')" alt="" class="iconWin">
                        <div class="badgeDemo">{{ blObj.isAccount ? 'LIVE' : 'DEMO' }}</div>
                        <div class="boxContent flex justify-center items-center flex-col">
                            <div class="flex items-center">
                                <!---->
                            </div>
                            <p class="titleWin">Xin chúc mừng!</p> <span class="message_money text-4xl font-bold">+{{ moneyWin }}$</span>
                        </div>
                        <span class="cursor-pointer pointer"><i class="iconClose" data-feather='x'></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts'
import More from 'highcharts/highcharts-more'
import stockInit from 'highcharts/modules/stock'
import loadIndicatorsAll from 'highcharts/indicators/indicators'
import { isMobile, isTablet } from 'mobile-device-detect'
import getData from '@/pages/trade/navbar/components/data.json'
import SETTINGS from '../../../settings.json'
import AuthenticationService from '@/services/AuthenticationService'

More(Highcharts)
stockInit(Highcharts)
loadIndicatorsAll(Highcharts)


let timer = null

function convertTextValueMeter(t) {
    return t >= -90 && t <= -54 ? { cl: 'rank-1', text: "Strong sell", index: 1 } : t > -54 && t <= -18 ? { cl: 'rank-2', text: "Sell", index: 2 } : t > -18 && t <= 17 ? { cl: 'rank-3', text: "Neutral", index: 3 } : t > 17 && t <= 53 ? { cl: 'rank-4', text: "Buy", index: 4 } : t > 53 ? { cl: 'rank-5', text: "Strong Buy", index: 5 } : void 0
}

var UP_COLOR = "#31BAA0", DOWN_COLOR = "#FC5F5F", deviceVersion = 'pc'

var progressBar = $('.e-c-progress')
var lengthp = Math.PI * 2 * 100;
progressBar.css('stroke-dasharray', lengthp)

//circle ends
//let wholeTime = 30; // manage this to set the whole time


if (isMobile) {
    deviceVersion = 'mobile'
} else if (isTablet) {
    deviceVersion = 'tablet';
}


var listData = [], ohlcStock = [], volumeStock = [];

var chartGet = '', connected = false;

const stockChart = {
    chart: {
        panning: false,
        followTouchMove: false,
        height: (9 / 16 * 100) + '%', // 16:9 ratio
        zoomType: "",
        backgroundColor: "transparent",
        plotBackgroundImage: require('@/assets/images/sky/world_map.svg'),
        marginRight: "pc" !== deviceVersion ? 70 : 80,
        marginBottom: "pc" !== deviceVersion ? 25 : 30,

        events: {
            load() { }
        }
    },
    rangeSelector: {
        enabled: false,
        selected: 4
    },
    credits: {
        enabled: false
    },
    scrollbar: {
        enabled: false
    },
    navigator: {
        enabled: false
    },

    stockTools: {
        gui: {
            enabled: false
        }
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        candlestick: {
            lineColor: DOWN_COLOR,
            upLineColor: UP_COLOR,
            pointWidth: "pc" !== deviceVersion ? 9 : 10,
            maxPointWidth: "pc" !== deviceVersion ? 9 : 10
        },
        column: {
            minPointLength: 2,
            pointWidth: "pc" !== deviceVersion ? 11.2 : 11,
            maxPointWidth: "pc" !== deviceVersion ? 11.2 : 11,
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0
        },
        series: {
            zIndex: 2,

            states: {
                inactive: {
                    opacity: 1
                }
            },
            allowPointSelect: false,
            point: {
                events: {
                    click() { }
                }
            }
        }
    },
    tooltip: {
        split: false,
        enabled: true,
        label: false,
        animation: false,
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 0,
        shadow: false,
        stroke: "transparent",
        useHTML: true,
        style: {
            color: "#fff",
            fontSize: "12px",
            stroke: "transparent"
        },
        formatter() {
            return "BTC/USDT" === this.series.name ? '\n<span style="margin-right: 10px;"><b>O</b>: ' + this.point.open + '</span>\n<span style="margin-right: 10px;"><b>C</b>: ' + this.point.close + '</span>\n<span>&nbsp;</span>\n<br/>\n<span style="margin-right: 10px;"><b>H</b>: ' + this.point.high + '</span>\n<span style="margin-right: 10px;"><b>L</b>: ' + this.point.low + "</span>\n<span><b>Vol</b>: " + this.point.vol + "</span>" : "Volume" === this.series.name ? "<b>Vol</b>: " + this.y : ""
        },
        positioner() {
            var t = 20,
                e = "pc" !== deviceVersion ? 0 : 60;
            return {
                x: t,
                y: e
            }
        }
    },
    xAxis: {
        //minRange:30 * 24,
        type: "datetime",
        labels: {
            enabled: true,
            formatter() {
                return Highcharts.dateFormat('%M:%S', this.value);
            },
            style: {
                fontSize: 10,
                color: "#707070"
            }
        },
        plotLines: [{
            value: 0,
            color: "#ffffff",
            width: .75,
            id: "current-pricex",
            zIndex: 1e3,
            dashStyle: "LongDash"
        }],
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: "transparent",
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: [{
        gridLineColor: "#35275B",
        labels: {
            align: "right",
            x: "pc" !== deviceVersion ? 45 : 50,
            style: {
                color: "#fff",
                fontSize: "11px"
            }
        },
        height: "85%",
        top: 0,
        plotLines: [{
            value: 0,
            color: "#ffffff",
            width: .75,
            id: "current-price",
            zIndex: 100,
            label: {
                useHTML: true,
                text: 0,
                x: "pc" !== deviceVersion ? 60 : 70,
                align: "right",
                style: {
                    color: "#fff",
                    fontSize: "11px",
                    background: "transparent",
                    borderRadius: "4px"
                }
            }
        }],
        lineWidth: 0,
        resize: {
            enabled: true
        }
    }, {
        gridLineColor: "",
        visible: false,
        title: {
            align: "high",
            text: null,
            rotation: 0,
            y: 0,
            useHTML: true
        },
        top: "pc" == deviceVersion ? "83.4%" : "85%",
        height: "15%",
        lineWidth: 0,
        offset: 0
    }],
    series: [{
        id: "aapl",
        type: "candlestick",
        name: "BTC/USDT",
        color: DOWN_COLOR,
        upColor: UP_COLOR,
        data: ohlcStock
    }, {
        type: "column",
        name: "Volume",
        data: volumeStock,
        yAxis: 1
    },
    {
        name: "sma1",
        id: "sma1",
        type: "sma",
        linkedTo: "aapl",
        color: "#2177FF",
        lineWidth: 2,
        marker: false,
        zIndex: 3,
        visible: true,
        enableMouseTracking: false,
        params: {
            index: "0",
            period: 10
        },
        allowPointSelect: false,
        point: {
            events: {
                // click: function(t) {
                //     setTimeout(function() {}, 500)
                // }
            },
            tooltip: {
                enabled: false
            }
        }
    },
    {
        name: "sma2",
        id: "sma2",
        type: "sma",
        linkedTo: "aapl",
        color: "#E22A67",
        lineWidth: 2,
        marker: false,
        zIndex: 3,
        visible: true,
        enableMouseTracking: false,
        params: {
            index: "1",
            period: 5
        },
        allowPointSelect: false,
        point: {
            events: {
                // click: function(t) {
                //     setTimeout(function() {}, 500)
                // }
            },
            tooltip: {
                enabled: false
            }
        }
    }
    ]
}

const gaugeMeterOs = {
    chart: {
        type: "gauge",
        plotBorderWidth: null,
        backgroundColor: "rgba(0,0,0,0)",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        height: 70,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        events: {
            render(t) {
                let td = t.target.series[0].points[0].y
                let n = convertTextValueMeter(td)
                $(".gauge-meter--os .gauge-meter-background").removeClass("rank-1 rank-2 rank-3 rank-4 rank-5").addClass(n.cl)
                $(".gauge-meter--os .gauge-meter-label-item").removeClass("active")
                $(".gauge-meter--os .gauge-meter-label-item:nth-child(" + n.index + ")").addClass("active")
            }
        },
        animation: {
            duration: 1500,
            easing: "easeOutBounce"
        },

    },

    title: {
        text: ''
    },

    pane: [{
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "105%"],
        size: 140
    }],

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    yAxis: [{
        min: -90,
        max: 90,
        minorTickPosition: "outside",
        tickPosition: "outside",
        labels: {
            rotation: "auto",
            distance: 0,
            style: {
                color: "rgba(0,0,0,0)"
            }
        },
        pane: 0,
        title: "",
        minorTickColor: "rgba(0,0,0,0)",
        lineColor: "rgba(0,0,0,0)",
        tickColor: "rgba(0,0,0,0)"
    }],


    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: "85%",
                baseLength: "1%",
                rearLength: 0,
                backgroundColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    stops: [
                        [0, "#fff"],
                        [1, "#000"]
                    ]
                },
                baseWidth: 6,
                topWidth: 3
            }
        }
    },

    series: [{
        name: "Oscillator",
        data: [10],
        yAxis: 0
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 71
            },
            chartOptions: {
                chart: {
                    height: 35
                },
                pane: [{
                    size: 70
                }]
            }
        }]
    }
}

const gaugeMeterSu = {
    chart: {
        type: "gauge",
        plotBorderWidth: null,
        backgroundColor: "rgba(0,0,0,0)",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        height: 88,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        events: {
            render(t) {
                let td = t.target.series[0].points[0].y
                let n = convertTextValueMeter(td)
                $(".gauge-meter--su .gauge-meter-background").removeClass("rank-1 rank-2 rank-3 rank-4 rank-5").addClass(n.cl)
                $(".gauge-meter--su .gauge-meter-label-item").removeClass("active")
                $(".gauge-meter--su .gauge-meter-label-item:nth-child(" + n.index + ")").addClass("active")

            }
        },
        animation: {
            duration: 1500,
            easing: "easeOutBounce"
        },

    },

    title: {
        text: ''
    },

    pane: [{
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "105%"],
        size: 176
    }],

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    yAxis: [{
        min: -90,
        max: 90,
        minorTickPosition: "outside",
        tickPosition: "outside",
        labels: {
            rotation: "auto",
            distance: 0,
            style: {
                color: "rgba(0,0,0,0)"
            }
        },
        pane: 0,
        title: "",
        minorTickColor: "rgba(0,0,0,0)",
        lineColor: "rgba(0,0,0,0)",
        tickColor: "rgba(0,0,0,0)"
    }],


    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: "85%",
                baseLength: "1%",
                rearLength: 0,
                backgroundColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    stops: [
                        [0, "#fff"],
                        [1, "#000"]
                    ]
                },
                baseWidth: 6,
                topWidth: 3
            }
        }
    },

    series: [{
        name: "Summary",
        data: [10],
        yAxis: 0
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 89
            },
            chartOptions: {
                chart: {
                    height: 44
                },
                pane: [{
                    size: 88
                }]
            }
        }]
    }
}

const gaugeMeterMa = {
    chart: {
        type: "gauge",
        plotBorderWidth: null,
        backgroundColor: "rgba(0,0,0,0)",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        height: 70,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        events: {
            render(t) {
                let td = t.target.series[0].points[0].y
                let n = convertTextValueMeter(td)
                $(".gauge-meter--ma .gauge-meter-background").removeClass("rank-1 rank-2 rank-3 rank-4 rank-5").addClass(n.cl)
                $(".gauge-meter--ma .gauge-meter-label-item").removeClass("active")
                $(".gauge-meter--ma .gauge-meter-label-item:nth-child(" + n.index + ")").addClass("active")
            }
        },
        animation: {
            duration: 1500,
            easing: "easeOutBounce"
        },

    },

    title: {
        text: ''
    },

    pane: [{
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "105%"],
        size: 140
    }],

    credits: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    yAxis: [{
        min: -90,
        max: 90,
        minorTickPosition: "outside",
        tickPosition: "outside",
        labels: {
            rotation: "auto",
            distance: 0,
            style: {
                color: "rgba(0,0,0,0)"
            }
        },
        pane: 0,
        title: "",
        minorTickColor: "rgba(0,0,0,0)",
        lineColor: "rgba(0,0,0,0)",
        tickColor: "rgba(0,0,0,0)"
    }],


    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: "85%",
                baseLength: "1%",
                rearLength: 0,
                backgroundColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    stops: [
                        [0, "#fff"],
                        [1, "#000"]
                    ]
                },
                baseWidth: 6,
                topWidth: 3
            }
        }
    },

    series: [{
        name: "ma",
        data: [10],
        yAxis: 0
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 71
            },
            chartOptions: {
                chart: {
                    height: 35
                },
                pane: [{
                    size: 70
                }]
            }
        }]
    }
}

export default {
    components: {
        highcharts: Chart
    },
    data() {
        return {

            thisIDPlayer: 0,
            totalBuyStatic: 0,
            totalSellStatic: 0,

            //Moving
            NumMovBUY: 0,
            NumMovSELL: 0,
            NumMovNeutral: 0,
            textTitleMa: 'NEUTRAL',

            //Oscillators
            NumOscBUY: 0,
            NumOscSELL: 0,
            NumOscNeutral: 0,
            textTitleOs: 'NEUTRAL',

            //Summary
            NumSumBUY: 0,
            NumSumSELL: 0,
            NumSumNeutral: 0,
            textTitleSu: 'NEUTRAL',

            moneyWin: 0,
            isWinPop: false,
            blObj: getData,
            isBet: true,
            CSBUY: 0,
            CSSELL: 0,
            isOrder: true,
            activeGau: false,
            activeHis: true,
            balanceForuser: 0,
            showMobileMenu: false,
            betAmount: 10,
            loiNhuan: 19.50,
            optionsOs: gaugeMeterOs,
            optionsSu: gaugeMeterSu,
            optionsMa: gaugeMeterMa,
            // chartOptions: {
            //     series: [{
            //         data: [1,2,3] // sample data
            //         }]
            // }
            chartOptionsStock: stockChart,
            betOpen: {
                "s": 0,
                "l": {
                    "bet": [
                        {
                            "items": []
                        }
                    ]
                },
            }
        }
    },
    computed: {
        seconDown() {
            return getData.countDown;
        },
        textTimeDown() {
            return getData.textTimeDown;
        }
    },
    watch: {
        "oscillators.meter.numberValue": function () {
            this.redrawGaugeMeter("oscillators"), this.redrawGaugeMeter("summary")
        },
        "movingAverages.meter.numberValue": function () {
            this.redrawGaugeMeter("movingAverages"), this.redrawGaugeMeter("summary")
        },
    },
    methods: {


        disabledBet() {
            return this.isBet = !this.isBet ? true : false
        },
        // redrawGaugeMeter: function(t) {
        //     var e = void 0;
        //     (e = "oscillators" === t ? this.gaugeMeterOs : "movingAverages" === t ? this.gaugeMeterMa : this.gaugeMeterSu) && e.series && (e.series[0].points[0].update(this[t].meter.numberValue, !1), e.redraw())
        // },
        sendMessage(message) {
            this.connection.send(JSON.stringify(message));
        },

        // convertTextState(t) {
        //     switch (t) {
        //         case "buy":
        //             return h;
        //         case "sell":
        //             return u;
        //         case "neutral":
        //             return p
        //     }
        // },

        replaceAll(str, find, replace) {
            return Number(str.replace(new RegExp(find, 'g'), replace));
        },

        changeBlance(v) {
            if (getData.isAccount) {
                getData.blLive = getData.blLive - v
            } else {
                getData.blDemo = getData.blDemo - v
            }

            this.balanceForuser = getData.blDemo

        },

        checkBet(v) {
            // lấy tổng số dư của tài khoản
            let sodu = getData.isAccount ? getData.blLive : getData.blDemo

            this.balanceForuser = sodu

            if (sodu < v) return true
        },

        BetBuySell(v) {
            this.playAudio('order');

            if (getData.countDown <= 1) {
                return this.$vs.notify({
                    text: 'Vui lòng đợi phiên sau!',
                    color: 'danger',
                    position: 'top-right',
                    iconPack: 'feather',
                    icon: 'icon-x-circle'
                })
            }
            //this.isBet = false

            let gAmount = this.betAmount.toString()
            gAmount = this.replaceAll(gAmount, ',', '')


            if (this.checkBet(gAmount)) {
                return this.$vs.notify({
                    text: 'Số dư của bạn không đủ',
                    color: 'danger',
                    position: 'top-right',
                    iconPack: 'feather',
                    icon: 'icon-x-circle'
                })
            }


            let email = getData.email
            let typeAccount = getData.isAccount
            let uidLive = getData.uidLive
            let uidDemo = getData.uidDemo
            let uidAcc = 0

            this.changeBlance(gAmount)


            if (typeAccount == 1) {
                uidAcc = uidLive;
            } else {
                uidAcc = uidDemo;
            }

            let obj = {
                email: email,
                uid: uidAcc,
                ref: getData.ref,
                UpId: getData.upid,
                typeAccount: typeAccount, // 0: demo: 0 , 1: live
                betAmount: gAmount,
                type: v,
                mkt: getData.mkt
                //idPlayer: this.thisIDPlayer
            }


            this.sendMessage({ type: 'bet', data: obj })


            let ss = this.$store.session
            let timeGet = new Date().getTime();

            this.betOpen.s = ss
            let itp = {
                "ss": ss,
                "time": timeGet,
                "amt": gAmount,
                "type": v,
                "acc_type": typeAccount,
                "currencyType": "BTC/USD",
                "classIcon": "iconBitcoin"
            }

            this.betOpen.l.bet[0].items.push(itp);

            localStorage.setItem('stateOpen', JSON.stringify(this.betOpen))

            getData.Notify = this.betOpen.l.bet[0].items.length

            this.clearBAmount();


            // if(v === 'buy'){

            // }else{


            //     return this.$vs.notify({
            //         text:'Đặt lệnh thành công',
            //         color:'success',
            //         position:'top-right',
            //         iconPack: 'feather',
            //         icon:'icon-check'});
            // }
        },

        deleteString() {
            let getAmount = this.betAmount.toString();
            let total = getAmount.slice(0, -1);
            let sl = total.split(".")
            let check = sl.length - 1
            if (check == 1) {
                let g = this.replaceAll(total, ',', '')
                //console.log(g)
                this.betAmount = this.formatPrice(g, sl[1].length)
                this.tinhloinhuan(g)
                return
            }
            let g = this.getOnlyNumberInString(total, ',', '')
            this.betAmount = this.formatPrice(g, 0)
            this.tinhloinhuan(g)
        },

        writeBetAmountKey(v) {

            let getAmount = this.betAmount.toString() + v
            let sl = getAmount.split(".")
            let check = sl.length - 1
            if (v == '.') {
                this.betAmount = getAmount
                return
            }
            if (check > 1) return
            if (check == 1) {
                let g = this.replaceAll(getAmount, ',', '')
                this.betAmount = this.formatPrice(g, sl[1].length)
                this.tinhloinhuan(g)
                return
            }
            let a = this.getOnlyNumberInString(getAmount)
            this.betAmount = this.formatPrice(a, 0)
            this.tinhloinhuan(a)
        },

        congBetAmount() {
            let getAmount = this.betAmount.toString()
            let sl = getAmount.split(".")
            let check = sl.length - 1
            if (check > 1) return
            let tt = 0
            if (check == 1) {
                tt = this.replaceAll(getAmount, ',', '')
                let kq = tt * 2
                this.betAmount = this.formatPrice(kq, sl[1].length)
                this.tinhloinhuan(kq)
                return
            }
            let a = this.getOnlyNumberInString(getAmount)
            tt = a * 2
            this.tinhloinhuan(tt)
            this.betAmount = this.formatPrice(tt, 0)
        },

        truBetAmount() {
            let getAmount = this.betAmount.toString()
            let sl = getAmount.split(".")
            let check = sl.length - 1
            if (check > 1) return
            let tt = 0
            if (check == 1) {
                tt = this.replaceAll(getAmount, ',', '')
                let kq = tt / 2
                this.betAmount = this.formatPrice(kq, sl[1].length)
                this.tinhloinhuan(kq)
                return
            }
            let a = this.getOnlyNumberInString(getAmount)
            tt = a / 2
            this.tinhloinhuan(tt)
            this.betAmount = this.formatPrice(tt, 0)
        },

        nhapBetAmount(e) {
            let g = e.target.value
            let check = g.split(".").length - 1
            if (check > 1) return

            if (check == 1) {
                g = this.replaceAll(g, ',', '')
                this.tinhloinhuan(g)
                return
            }
            g = this.getOnlyNumberInString(g)
            this.betAmount = this.formatPrice(g, 0)
            this.tinhloinhuan(g)
        },

        formatPrice(value, minimum) {
            var formatter = new Intl.NumberFormat('en-US', {
                //style: 'currency',
                //currency: '',
                minimumFractionDigits: minimum
            });
            return formatter.format(value);
        },

        tinhloinhuan(m) {
            let lb = Number(m)
            lb = lb + (lb * 95 / 100)
            // tính lợi nhuận 95%
            this.loiNhuan = this.formatPrice(lb, 2)
        },

        getOnlyNumberInString(t) {

            let e = t.match(/\d+/g)

            return e ? Number(e.join("")) : 0
        },

        clearBAmount() {
            this.tinhloinhuan(10)
            this.betAmount = 10;
        },

        clickCT(amount) {
            let getAmount = this.betAmount.toString();
            getAmount = this.betAmount.toString();

            if (amount == 0) {
                getAmount = getData.isAccount ? getData.blLive.toString() : getData.blDemo.toString()
            }

            let check = getAmount.split(".").length - 1
            if (check > 1) return

            if (check == 1) {
                getAmount = this.replaceAll(getAmount, ',', '')
                let tt = getAmount + amount;
                this.tinhloinhuan(tt)
                this.betAmount = this.formatPrice(tt, 2);
                return
            }
            let aB = this.getOnlyNumberInString(getAmount);
            let tt = aB + amount;
            this.betAmount = this.formatPrice(tt, 0);
            this.tinhloinhuan(tt)

        },

        editUser() {

            //this.sidebarData = data
            this.toggleDataSidebar(true)

        },

        toggleDataSidebar(val = false) {
            this.addNewDataSidebar = val
        },

        updateBarChart(boPrice) {

            var chartInstance = chartGet;
            try {
                var lastCandle = chartInstance.series[1].points[chartInstance.series[1].points.length - 1]
                var color = this.getColor(boPrice.open, boPrice.close);

                if (lastCandle.x === boPrice.date) {
                    lastCandle.update({
                        x: boPrice.date,
                        y: boPrice.volume,
                        color: color
                    }, true);
                } else {
                    chartInstance.series[1].addPoint({
                        x: boPrice.date,
                        y: boPrice.volume,
                        color: color
                    }, true, true);
                }
            }
            catch { }


        },


        updateCandleStickChart(boPrice) {

            var chartInstance = chartGet;
            try {

                var lastCandle = chartInstance.series[0].points[chartInstance.series[0].points.length - 1];
                var color = this.getColor(boPrice.open, boPrice.close);

                var counter = Number(boPrice.candleClose)


                var o = {
                    x: boPrice.date,
                    open: boPrice.open.toFixed(2) * 1,
                    close: boPrice.close.toFixed(2) * 1,
                    high: boPrice.open.toFixed(2) * 1,
                    low: boPrice.open.toFixed(2) * 1,
                    vol: boPrice.volume.toFixed(2) * 1,
                    color: color
                };

                if (lastCandle.x === boPrice.date) {
                    if (counter < 1) {
                        var o = {
                            x: boPrice.date,
                            open: boPrice.open.toFixed(2) * 1,
                            close: boPrice.close.toFixed(2) * 1,
                            high: boPrice.high.toFixed(2) * 1,
                            low: boPrice.low.toFixed(2) * 1,
                            vol: boPrice.volume.toFixed(2) * 1,
                            color: color
                        };
                        setTimeout(() => {
                            lastCandle.update(o, true);
                        }, 1000);
                    } else {
                        var o = {
                            x: boPrice.date,
                            open: boPrice.open.toFixed(2) * 1,
                            close: boPrice.close.toFixed(2) * 1,
                            high: boPrice.open.toFixed(2) * 1,
                            low: boPrice.open.toFixed(2) * 1,
                            vol: boPrice.volume.toFixed(2) * 1,
                            color: color
                        };
                        lastCandle.update(o, true);
                    }
                } else {
                    chartInstance.series[0].addPoint(o, true, true);
                    // if(listData.length >= 200){
                    //     listData.shift();
                    // }
                    listData.push(boPrice);
                    let begin = 0;

                    const { dataMax } = chartInstance.xAxis[0].getExtremes();
                    if (deviceVersion !== 'pc') {
                        begin = this.setSizeStock(listData);
                        chartGet.xAxis[0].setExtremes(listData[begin + 10].date, dataMax, false);
                        chartGet.redraw();
                    } else {
                        ''
                        let c = listData.length;
                        chartGet.xAxis[0].setExtremes(listData[c - 90]['date'], dataMax, false);
                        chartGet.redraw();
                    }

                }
                chartInstance.xAxis[0].options.plotLines[0].value = boPrice.date;
                chartInstance.yAxis[0].options.plotLines[0].value = boPrice.close;

                let f = chartInstance.yAxis[0].plotLinesAndBands[0];

                f.label && f.label.attr({
                    text: '<div class="plotlineChart flex flex-col"><span class="price">' + boPrice.close + '</span><span class="time self-end">00:' + (counter > 9 ? counter : "0" + counter) + '</span></div>'
                });

                if (boPrice.type === 'order') {
                    this.isOrder = true
                    this.isBet = true
                    getData.textTimeDown = 'Hãy đặt lệnh'

                } else {
                    this.isOrder = false
                    this.isBet = false
                    getData.textTimeDown = 'Chờ kết quả'

                }

                getData.countDown = (counter > 9 ? counter : "0" + counter)

            }
            catch {

            }

        },

        getColor(openPrice, closePrice) {
            return openPrice < closePrice ? UP_COLOR : DOWN_COLOR
        },

        onReceiveSocketData(boPrice) {
            this.updateCandleStickChart(boPrice);
            this.updateBarChart(boPrice);
        },

        clickMin() {
            let ob = {
                "date": 1633237083670,
                "open": 47901.39,
                "high": 47902.77,
                "low": 47867.95,
                "close": 47870.84,
                "volume": 9.24,
                "candleClose": "05",
                "type": "watting"
            }
            const { dataMax } = chartGet.xAxis[0].getExtremes(); //dataMin
            console.log(chartGet.xAxis[0]);
            chartGet.xAxis[0].setExtremes(listData[110]['date'], dataMax, false);
            chartGet.redraw();
        },


        StaOscillators(e) {

            try {
                let chart = this.$refs.chartOs.chart

                let left = chart.series[0].points[0], leftVal
                //Oscillators
                this.NumOscBUY = e.b
                this.NumOscSELL = e.s
                this.NumOscNeutral = e.m

                if (e.m > e.s && e.m > e.b || e.m === e.s && e.m === e.b) {
                    this.textTitleOs = 'NEUTRAL'
                    left.update(0, true);
                    chart.redraw();
                }
                if (e.s > e.b) {
                    leftVal = -35
                    this.textTitleOs = 'SELL'
                    if (e.s >= 5) leftVal = -70, this.textTitleOs = 'STRONG SELL'
                    left.update(leftVal, true);
                    chart.redraw();
                } else if (e.s < e.b) {
                    leftVal = 35
                    this.textTitleOs = 'BUY'
                    if (e.b >= 5) leftVal = 70, this.textTitleOs = 'STRONG BUY'
                    left.update(leftVal, true);
                    chart.redraw();
                }
            } catch { }


        },

        StaSummary(e) {

            try {
                let chart = this.$refs.chartSu.chart

                let left = chart.series[0].points[0], leftVal

                //Summary
                this.NumSumBUY = e.b
                this.NumSumSELL = e.s
                this.NumSumNeutral = e.m

                if (e.m > e.s && e.m > e.b || e.m === e.s && e.m === e.b) {
                    this.textTitleSu = 'NEUTRAL'
                    left.update(0, true);
                    chart.redraw();
                    return
                }
                if (e.s > e.b) {
                    leftVal = -35
                    this.textTitleSu = 'SELL'
                    if (e.s >= 5) leftVal = -70, this.textTitleSu = 'STRONG SELL'
                    left.update(leftVal, true);
                    chart.redraw();
                } else if (e.s < e.b) {
                    leftVal = 35
                    this.textTitleSu = 'BUY'
                    if (e.b >= 5) leftVal = 70, this.textTitleSu = 'STRONG BUY'
                    left.update(leftVal, true);
                    chart.redraw();
                }
            } catch { }

        },

        StaMovingAverages(e) {

            try {
                let chart = this.$refs.chartMa.chart
                let left = chart.series[0].points[0], leftVal
                //Moving

                this.NumMovBUY = e.b
                this.NumMovSELL = e.s
                this.NumMovNeutral = e.m

                if (e.m > e.s && e.m > e.b || e.m === e.s && e.m === e.b) {
                    this.textTitleMa = 'NEUTRAL'
                    left.update(0, true);
                    chart.redraw();
                    return
                }
                if (e.s > e.b) {
                    leftVal = -35
                    this.textTitleMa = 'SELL'
                    if (e.s >= 5) leftVal = -70, this.textTitleMa = 'STRONG SELL'
                    left.update(leftVal, true);
                    chart.redraw();
                } else if (e.s < e.b) {
                    leftVal = 35
                    this.textTitleMa = 'BUY'
                    if (e.b >= 5) leftVal = 70, this.textTitleMa = 'STRONG BUY'
                    left.update(leftVal, true);
                    chart.redraw();
                }
            } catch { }

        },

        setSizeStock(data) {
            var chartWidth = parseInt($('.chartBox').width());

            let numBar = Math.floor((chartWidth - 90) / 19.44); //90 17.44 13.44
            if (numBar < data.length) {
                return data.length - numBar - 10;
            }

        },

        getDataDefaultGet(get) {

            let data = get;
            ohlcStock = [], volumeStock = [];

            var begin = 0;

            if (deviceVersion !== 'pc') {
                begin = this.setSizeStock(data);
            } else {
                let getWidth = parseInt($('body').width());
                if (getWidth >= 1260 && getWidth <= 1500) {
                    begin = 55;
                }
                if (getWidth >= 1500 && getWidth <= 1600) {
                    begin = 45;
                }
                if (getWidth >= 820 && getWidth <= 1260) {
                    begin = 75;
                }
            }

            for (var i = begin; i < data.length; i++) {
                var _o = {
                    x: data[i].date, // the date
                    open: data[i].open, // open
                    high: data[i].high, // high
                    low: data[i].low, // low
                    close: data[i].close, // close
                    vol: data[i].volume // volume
                };
                ohlcStock.push(_o);

                volumeStock.push({
                    x: data[i].date, // the date
                    y: data[i].volume, // the volume
                    color: data[i].open < data[i].close ? UP_COLOR : DOWN_COLOR
                });

            }



            stockChart.series[0].data = ohlcStock;
            stockChart.series[1].data = volumeStock;
            this.chartOptionsStock = stockChart;

            let ao = setInterval(() => {
                if (chartGet != '') {
                    clearInterval(ao);
                    const { dataMax } = chartGet.xAxis[0].getExtremes(); //dataMin

                    if (deviceVersion !== 'pc') {
                        chartGet.xAxis[0].setExtremes(data[begin + 40]['date'], dataMax, false);
                        chartGet.redraw();
                    } else {
                        let c = data.length;
                        chartGet.xAxis[0].setExtremes(data[c - 90]['date'], dataMax, false);
                        chartGet.redraw();
                    }

                }
            }, 100);

        },

        setChartHeight() {


            if (window.innerWidth > 768) {
                deviceVersion = 'pc'
            } else {
                deviceVersion = 'mobile'
            }

            //$('.w-18').css('max-width', $('#analysis-wrapper').width() / 4)
            let setS = setInterval(() => {
                let w = $('.chartBox').width();
                let h = $('.chartBox').height();
                if (!!w && !!h) {
                    let cH = this.$refs.chartStock.chart.chartHeight;
                    if (cH !== h) {
                        let chartInstance = this.$refs.chartStock.chart;
                        chartInstance.setSize($('.chartBox').width(), $('.chartBox').height(), true);
                        chartGet = chartInstance
                    } else {
                        clearInterval(setS);
                    }
                }
            }, 600);


            //this.$forceUpdate();
        },

        onWindowLoad() {

            let uidLive = getData.uidLive
            let uidDemo = getData.uidDemo
            let uidAcc = 0

            let acc = localStorage.getItem('BO_BALANCE_TYPE')
            if (acc == 'LIVE') {
                getData.isAccount = 1
            } else {
                getData.isAccount = 0
            }

            getData.isAccount ? uidAcc = uidLive : uidAcc = uidDemo

            this.sendMessage({ type: 'accountDetail', data: { uid: uidAcc, email: getData.email } });

            let notify = JSON.parse(localStorage.getItem('stateOpen'));
            if (notify) {
                getData.Notify = notify.l.bet[0].items.length
            }

        },

        addSound() {
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.registerSounds([
                {
                    id: "win",
                    src: require('@/assets/sounds/win-n.mp3')
                }, {
                    id: "lose",
                    src: require('@/assets/sounds/lose-n.mp3')
                }, {
                    id: "order",
                    src: require('@/assets/sounds/order-n.mp3')
                }
            ]);
        },


        playAudio(v) {
            let checkSound = localStorage.getItem('SOUND');
            if (checkSound === 'false') return;
            createjs.Sound.play(v);

            // let sound;
            // if(v == 'win'){
            //    // sound = require('@/assets/sounds/win-n.mp3');
            // }else if(v == 'lose'){
            //   //  sound = require('@/assets/sounds/lose-n.mp3');
            // }else if(v == 'order'){
            //    // sound = require('@/assets/sounds/order-n.mp3');
            // }
            // var audio = new Audio(sound);
            // audio.play();

        },

        getUserInfo() {
            AuthenticationService.getInfoUser()
                .then((res) => {

                    if (res.data.success == 1) {

                        let gData = res.data.data

                        getData.uid = gData.id,
                            getData.email = gData.email,
                            getData.profile_image = gData.profile_image,
                            getData.displayName = gData.nick_name,
                            getData.uidLive = gData.order[1].u_id,
                            getData.uidDemo = gData.order[0].u_id,
                            getData.vip = gData.vip,
                            getData.vip_lv = gData.level_vip,
                            getData.pen_commiss = gData.pending_commission,
                            getData.ref = gData.ref,
                            getData.c2fa = gData.fa2,
                            getData.id_front = gData.id_front,
                            getData.id_back = gData.id_back,
                            getData.first_name = gData.first_name,
                            getData.last_name = gData.last_name,
                            getData.verify = gData.verify,
                            getData.num_secu = gData.num_secury,
                            getData.country = gData.c,
                            getData.blLive = gData.order[1].balance
                        getData.blDemo = gData.order[0].balance
                        getData.balance = gData.balance,
                            getData.mkt = gData.mkt



                        localStorage.setItem('INFO', JSON.stringify(gData))
                    } else {
                        window.location.href = window.location.origin + '/login'
                    }
                });
        }

    },
    created() {



        //let token = localStorage.getItem('token')
        //this.$store.dispatch('setToken', token)


        let acc = localStorage.getItem('BO_BALANCE_TYPE')
        if (acc == 'LIVE') {
            getData.isAccount = 1
        } else {
            getData.isAccount = 0
        }

        // lấy tổng số dư của tài khoản
        this.balanceForuser = getData.isAccount ? getData.blLive : getData.blDemo

        if (!connected) {
            connected = true;

            this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET);

            //this.$store.connected = this.connection

            this.connection.onopen = function () {
                //console.log("Successfully connected to the echo websocket server...")
                this.onWindowLoad();
                this.getUserInfo();
            }.bind(this);

            this.connection.onmessage = function (event) {
                let data = JSON.parse(event.data)

                let dl = data.data;


                if (data.type === 'getListDauTien') {

                    if (dl) {
                        listData = dl;
                        this.getDataDefaultGet(dl);
                    }

                }
                if (data.type === 'getidPlayer') {
                    this.thisIDPlayer = data.data;
                }
                if (data.type === 'allData') {
                    this.onReceiveSocketData(dl);
                }
                if (data.type === 'transVolum') {
                    if (dl.nbuy) {
                        this.CSBUY = dl.ptbuy
                        this.CSSELL = dl.ptsell
                    }
                }
                if (data.type === 'checkBet') {
                    this.isBet = true
                    return this.$vs.notify({
                        text: 'Đặt lệnh thành công',
                        color: 'success',
                        position: 'top-right',
                        iconPack: 'feather',
                        icon: 'icon-check'
                    });
                }
                if (data.type === 'kq') {
                    if (dl.kq == 'win') {
                        let mn = dl.money

                        this.playAudio('win');

                        if (getData.isAccount) {
                            getData.blLive = getData.blLive + mn
                        } else {
                            getData.blDemo = getData.blDemo + mn
                        }

                        this.moneyWin = this.formatPrice(mn, 2)
                        this.isWinPop = true
                        setTimeout(() => {
                            this.isWinPop = false
                        }, 3000)
                    } else {
                        this.playAudio('lose');
                    }
                    // xóa notice = 0
                    getData.Notify = 0;
                    this.betOpen.l.bet[0].items = [];
                    localStorage.removeItem('stateOpen');
                }
                if (data.type === 'mess') {
                    if (dl.type == 'bet') {
                        return this.$vs.notify({
                            text: dl.mess,
                            color: dl.style,
                            position: 'top-right',
                            iconPack: 'feather',
                            icon: 'icon-x-circle'
                        })
                    }

                    if (dl.type === 'disAccount') {
                        // đăng xuất tài khoản
                        setTimeout(() => {
                            localStorage.removeItem('tokenUser');
                            localStorage.removeItem('INFO');
                            getData.Notify = 0;
                            localStorage.removeItem('stateOpen');
                            window.location.href = window.location.origin + '/login';
                        }, 3000);
                        return this.$vs.notify({
                            text: dl.mess,
                            color: dl.style,
                            position: 'top-right',
                            iconPack: 'feather',
                            icon: 'icon-x-circle'
                        });
                    }

                    if (dl.type === 'reloadAccount') {
                        location.reload();
                    }
                }
                if (data.type === 'static') {

                    let indicato = data.load



                    this.StaOscillators(indicato.Oscillators)
                    this.StaSummary(indicato.Summary)
                    this.StaMovingAverages(indicato.Moving)

                    //this.totalBuyStatic = dl.cbuy;
                    //this.totalSellStatic = dl.csell;

                    let sta = dl.static

                    let stl = sta.length
                    let istart = 0;
                    let csl = 40;
                    this.totalBuyStatic = this.totalSellStatic = 0;
                    //if(isMobile){ // rs lại tổng số
                    //    this.totalBuyStatic = this.totalSellStatic = 0;
                    //}
                    if (isMobile && stl > 60) {
                        //let sl = stl - csl;
                        let sl = 0;
                        if (stl > 60 && stl <= 80) {
                            sl = 20;
                        } else if (stl > 80) {
                            sl = 40;
                        }
                        for (let x = 0; x < sl; x++) {
                            sta.shift();
                        }
                        stl = sta.length;
                    }
                    let list = $('.historyBox');
                    $('.historyBox .item').removeClass('bg-green bg-red');
                    for (let i = istart; i < stl; i++) {
                        let item = i;
                        // let l1 = $('.historyBox .list1')
                        // let l2 = $('.historyBox .list2')
                        // let l3 = $('.historyBox .list3')
                        // let l4 = $('.historyBox .list4')
                        // let l5 = $('.historyBox .list5')
                        if (i < 20) {
                            if (sta[i] == 'buy') {
                                list.find('.item:eq(' + item + ')').addClass('bg-green')
                                this.totalBuyStatic++;
                            } else if (sta[i] == 'sell') {
                                list.find('.item:eq(' + item + ')').addClass('bg-red')
                                this.totalSellStatic++;
                            }
                        }
                        if (i > 19 && i < 40) {
                            if (sta[i] == 'buy') {
                                list.find('.item:eq(' + item + ')').addClass('bg-green')
                                this.totalBuyStatic++;
                            } else if (sta[i] == 'sell') {
                                list.find('.item:eq(' + item + ')').addClass('bg-red')
                                this.totalSellStatic++;
                            }
                        }
                        if (i > 39 && i < 60) {
                            if (sta[i] == 'buy') {
                                list.find('.item:eq(' + item + ')').addClass('bg-green')
                                this.totalBuyStatic++;
                            } else if (sta[i] == 'sell') {
                                list.find('.item:eq(' + item + ')').addClass('bg-red')
                                this.totalSellStatic++;
                            }
                        }
                        if (i > 59 && i < 80) {
                            if (sta[i] == 'buy') {
                                list.find('.item:eq(' + item + ')').addClass('bg-green')
                                this.totalBuyStatic++;
                            } else if (sta[i] == 'sell') {
                                list.find('.item:eq(' + item + ')').addClass('bg-red')
                                this.totalSellStatic++;
                            }
                        }
                        if (i > 79 && i < 100) {
                            if (sta[i] == 'buy') {
                                list.find('.item:eq(' + item + ')').addClass('bg-green')
                                this.totalBuyStatic++;
                            } else if (sta[i] == 'sell') {
                                list.find('.item:eq(' + item + ')').addClass('bg-red')
                                this.totalSellStatic++;
                            }
                        }
                    }

                }
            }.bind(this);

            this.connection.onclose = () => {
                // xóa notice = 0
                getData.Notify = 0;
                this.betOpen.l.bet[0].items = [];
                localStorage.removeItem('stateOpen');
            }

            //window.addEventListener("load", this.onWindowLoad);

        } else {
            //this.sendMessage({type: 'getListData'});
            this.$router.go(this.$router.currentRoute);

        }


    },
    mounted() {
        this.addSound();
        window.addEventListener("resize", this.setChartHeight)
        //window.addEventListener("load", this.setChartHeight);

        this.setChartHeight();

        // this.isMounted = true;

        // const chart = this.$children[1].$refs.highcharts
        // console.log(chart);
        //setTimeout(() => {

        // let chart = this.$refs.chartOs.chart
        // if (chart.series) { // the chart may be destroyed
        //     timer = setInterval(() => {
        //         var left = chart.series[0].points[0],
        //             //right = chart.series[1].points[0],
        //             leftVal,
        //             //rightVal,
        //             inc = (Math.random() * 200) - 85;

        //         leftVal = left.y + inc;
        //         //console.log(left.y)
        //         //rightVal = leftVal + inc / 3;
        //         if (leftVal < -85 || leftVal > 85) {
        //             leftVal = left.y - inc;
        //         }
        //         // if (rightVal < -20 || rightVal > 6) {
        //         //     rightVal = leftVal;
        //         // }
        //         //console.log(leftVal)
        //         left.update(leftVal, false);
        //         //right.update(rightVal, false);
        //         chart.redraw();
        //     }, 3000)
        // }


        //}, 3000)


    },
    destroyed() {

        //window.removeEventListener("resize", this.setChartHeight);

        if (timer) {
            clearInterval(timer)
        }
    },
}
</script>


<style scoped>
.mbTextCountdown {
    width: 150px;
    top: -35px;
    left: -50px;
    text-align: center;
    border: 1px solid #0f2f54;
    border-radius: 5px;
    box-shadow: 0px 5px 6px #15181c;
}

.overviewInfo {
    font-weight: 700;
    font-size: 16px;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
}

.overviewInfo .badgeItem {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);
}

.titleChartCandle {
    position: absolute;
    top: 10px;
    left: 0;
    padding: 7px 10px;
    border-radius: 5px;
    background-color: rgba(39, 49, 62, 0.3);
}

.titleChartCandle .iconBTC {
    display: inline-flex;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAABHNCSVQICAgIfAhkiAAABQtJREFUWIXVmV1sFFUUx393Zvaj7QJFILbQUgopKBIBGykRaEsiiobESPRBEoxRjIkJUR81ELaxj2pieFLUB40kfgQjiYkxwVYsAYmEWhSBSGlLwfLRb2j38x4fZna7UyrdnTbpcl9+OzNn5/zv2XPvOTOrcEZ8f0l9EvYpUWuUoYpFBKUUM0mEAVHSakKDb3dPM4ACGN1fEjaU2oc4Z/KQGmko2N0TVqP7S+oVqgkRUIp8pig2G4iERQSAfCciYUtrWa0MeyKo/KRSoAVEZLUBFM905CajTkVYUWwI7pP5TBHBEJn5CGZPsEAQUYDG3kPymTgRdtJi2hiYTdGuNoJPfwyBOZPYq+wpYOewOLkyTbTK61ChUqzKLejIIGbpOgpfOklwy4cT2OusKQiGiEwpoqqoBGvFs6jQwvR5s3wDAInLvwKCubgWo7gSY94DU/vlRLDE/uS5alpLn6Tg8fftGw5fJXH1BNai9Y7gY7aTxXXpCaSLgIchgJUSS6rhUCqnTd2YXZa+oZq1EN+K7enjYN27BNa9gQoUAxDvarF9eY2OCKrvvbnep5wxgjVvUbBx711t9MAlom2fEzl9ABIjnvzYOTwN+2Si+/g4ce3EO5vQw91jzoorKajdx+wdP6IKF3jyY4yVPz0lmotqXIIjZ79i+Jvt9H+0iqGDT5C8cSZ9zVywilnPHQJl5uTHFpyegZoSfeWbXILjXS3p6/ErJxk4+BQy2psh+iF8Vdty80MqJQDRegpU+MoeG1ObjBK/fNxtFx0m2d/umpRRdD8izvUsiAiGXZrFWfXeaJasBSs4prf/IubcSpedVVaDVVrtEpzouwjkkMMIlr2TCVo7facHFpRvdAkx569k7q5TJHsvoEeuo8yALVYZY2Kv/0ns0k9j/W4WfgAswW5+Uk2yF1pOZRs/zHnLMectH3dWiF/5jcHDL+fsx650U46wwp8pWCe4+dl6jNBCCle/SGDZVpQ/lJHfMUZOf0pi8HLO/tIRdkqdt92hdK1LUPzf30ncPAe954l1/AxWgFmb9lJU86YT9gBzth0AZTB65stxFXZyGqnSnMtqzaSvzJ0O0c6j7t0hHmGoaQ+R89+77EIb3s55NyKz+VFOxLJhoGoboerXiHafoHDl8y4hsc6WCb8X6z5BcMUzY/ldXJG1vzTtXcJ+06JFZ83Qo6/jX1yLf8nmOxaaliRYQXR8NG1vhkooXPuKyy7R949jn71fO4cz2r2s9kMzgI4OIfERlK/wDsHzd/wAySixa39AIgqGD3/pI2D63anT0eSpl1BdjUFRXlo9w0+gYhMFy7YSqn4VzMAd4v93JKP0HFhHou9CTn4FnEXnHOTEZIxI+xEGmsPp6A0ceYfbbV/cXayOc+PbF0j0XiD142ZL16LzOoJL6gCFxG4xdPwD/KXVFD28E4Cbh3Zi3bcUZfgAIX79LyIdv6Aj/envS460UvU+tQpzZbCiHoBI51H7eEktAPFrbdw++7Xn+05IO8KCEoVGo8idt859hySjRHtaQSBQYQse7WgGAbuXmx6San5QTuUid0a7jhHtaiG1MoZPfUK8r52R84c93e+uFFDtDZZ4fCKcAXLvvVvLeKbLfzpvfvTgZMYzH1mHWg8aIrSCOOImpuQLhVZD3UP/cSiRsFHVSLNoaRCdenrOUyZ1Q1UjzQpn/L2HehRhJaxBMWem/1RUSiFaBkXRihB+sJFmgP8A0ZjYaQV3l3UAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.titleChartCandle .textPrice {
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
}

.popupCongratulation {
    display: none;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
}

.popupCongratulation .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
}

.popupCongratulation .popupCongratulationContent {
    display: block;
    overflow: unset;
    border-radius: 8px;
    width: 450px;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.winLive .wrapNotify {
    border-radius: unset !important;
    background-color: unset !important;
    height: 210px !important;
    width: 368px;
    background-image: url('~@/assets/images/sky/notify.png');
    background-repeat: no-repeat;
    background-size: 100% 215px;
}

.wrapNotify.congratulation {
    background-color: red;
}

.winLive .wrapNotify .iconWin {
    position: absolute;
    left: 49%;
    bottom: 89%;
    -webkit-transform: translate(-50%, 30%);
    -ms-transform: translate(-50%, 30%);
    -moz-transform: translate(-50%, 30%);
    transform: translate(-50%, 30%);
    width: 257px;
}

.winLive .wrapNotify .badgeDemo {
    position: absolute;
    top: 34px;
    right: 57px;
    color: #fff;
    font-weight: bold;
    background: #2177FF;
    border-radius: 4px;
    padding: 0 8px;
}

.winLive .wrapNotify .titleWin {
    font-size: 1.95rem;
    font-weight: bold;
    margin: 15px 0;
    color: #fff;
}

.winLive .wrapNotify .message {
    color: #31BAA0;
}

.winLive .wrapNotify .iconClose {
    color: #fff;
    position: absolute;
    right: -30px;
    top: 15px;
}

.winDemo .wrapNotify {
    border-radius: 5px;
    background-color: #12013E;
    height: 340px !important;
    width: 400px;
}

.winDemo .wrapNotify .iconWin {
    position: absolute;
    top: -25px;
    left: 50%;
    -webkit-transform: translate(-50%, 30%);
    -ms-transform: translate(-50%, 30%);
    -moz-transform: translate(-50%, 30%);
    transform: translate(-50%, 30%);
    width: 120px;
    height: 120px;
}

.boxContent .message_money {
    color: #0b996e;
}

.winDemo .wrapNotify .boxContent {
    padding: 0;
}

.boxContent {
    margin-top: 4.5rem !important;
}

.winDemo .wrapNotify .boxContent .contentPopup {
    margin-top: 140px;
}

.winDemo .wrapNotify .boxContent .titleWin {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;
    line-height: 1.5;
}

.winDemo .wrapNotify .boxContent .message {
    color: #1EBF75;
    font-size: 2.2rem !important;
    line-height: 1;
}

.winDemo .wrapNotify .boxContent .btnDeposit {
    max-width: 340px;
    width: 100%;
    padding: 10px 0;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
    background-color: #1EBF75;
}

.winDemo .wrapNotify .iconClose {
    color: #fff;
    position: absolute;
    right: -30px;
    top: 0;
}

.analysis-wrapper {
    height: 10rem;
}


.analysis-wrapper .wrap-gauge-meter.active,
.analysis-wrapper #historyBox.active {
    opacity: 1;
    z-index: 1;
}

.wrap-gauge-meter {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding-top: 40px;
}

.wrap-gauge-meter-inner {
    height: 100%;
}

.historyBox .item {
    width: 1.5rem;
    height: 1.5rem;
    margin: 1px !important;
}

.sidebarMobile {
    display: none;
}


.list1,
.list2,
.list3,
.list4,
.list5 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row dense;
    grid-gap: 0.1rem;
}

.gridcs-1 {
    grid-column-start: 1;
}

.gridcs-2 {
    grid-column-start: 2;
}

.gridcs-3 {
    grid-column-start: 3;
}

.gridcs-4 {
    grid-column-start: 4;
}

.gridcs-5 {
    grid-column-start: 5;
}

@media (max-width: 1024.98px) {

    .sidebarPC {
        display: none;
    }

    .sidebarMobile {
        display: block;
        position: absolute;
        top: 60px;
        left: 0;
        width: 50px;
    }

    .sidebarMobile .slidercontent {
        height: 100%;
        position: relative;
        width: 50px;
    }

    .sidebarMobile .slidercontent .backgroundOverlay {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 50px;
    }

    .sidebarMobile .slidercontent span {
        width: 50px;
        line-height: 1;
    }

    .zIndex99 {
        z-index: 99;
    }

    .sidebarMobile .slidercontent .progress {
        -webkit-transform: translateX(-48%) rotate(270deg);
        transform: translateX(-48%) rotate(270deg);
        height: .4rem !important;
        overflow: unset !important;
    }
}

@media screen and (max-width: 1300px) {
    .wrap-gauge-meter-inner {
        height: auto;
        overflow: initial;
    }
}

@media screen and (max-width: 1023px) and (min-width: 991px) {
    .wrap-gauge-meter-inner {
        padding-bottom: 65px;
    }
}

@media screen and (max-width: 1023px) and (min-width: 991px) and (orientation: landscape) {
    .wrap-gauge-meter-inner {
        padding-bottom: 65px !important;
    }
}

@media screen and (max-width: 1023px) and (orientation: landscape) {
    .wrap-gauge-meter {
        padding-top: 36px;
    }
}

.gauge-meter {
    width: 900px;
    height: 135px;
    position: relative;
    margin: 0 auto;
    top: 15px;
}

@media screen and (max-width: 1500px) {
    .gauge-meter {
        width: 700px;
    }
}

@media screen and (max-width: 1300px) {
    .gauge-meter {
        width: 600px;
        height: 64px;
        top: auto;
        transform: none;
        margin-top: 20px;
    }
}

@media screen and (max-width: 1200px) {
    .gauge-meter {
        margin-top: 15px;
    }
}

@media screen and (max-width: 1024px) {
    .gauge-meter {
        margin-top: 10px;
    }
}

@media screen and (max-width: 1000px) and (orientation: landscape) {
    .gauge-meter {
        margin-top: 5px;
        width: 350px;
    }
}

@media screen and (max-width: 767px) {
    .gauge-meter {
        width: 350px;
        margin-top: 15px;
    }

    .boxContent {
        margin-top: 3.2rem !important;
    }
}

@media screen and (max-width: 575px) {
    .gauge-meter {
        margin-top: 35px;
    }
}

@media screen and (max-width: 420px) {
    .gauge-meter {
        margin-top: 10px;
        width: 320px;
    }
}

@media screen and (max-width: 400px) {
    .gauge-meter {
        margin-top: 10px;
        width: 260px;
    }
}

.gauge-meter.is-show-transaction {
    width: 90%;
}

.gauge-meter-sub {
    width: 176px;
    height: 100%;
    position: absolute;
    bottom: 0;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-sub {
        width: 88px;
    }
}

.gauge-meter--os {
    left: 0;
    width: 140px;
}

@media screen and (max-width: 1300px) {
    .gauge-meter--os {
        width: 70px;
    }
}

.gauge-meter--su {
    left: 50%;
    transform: translateX(-50%);
}

.gauge-meter--ma {
    width: 140px;
    left: auto;
    right: 0;
}

@media screen and (max-width: 1300px) {
    .gauge-meter--ma {
        width: 70px;
    }
}

.gauge-meter-title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    z-index: 4;
    margin-bottom: 0;
    white-space: nowrap;
    display: flex;
    position: relative;
    color: #fff;
    cursor: pointer;
}

.gauge-meter-title:hover {
    text-decoration: underline;
}

.gauge-meter-title-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
}

.gauge-meter-title-icon svg {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-title-icon {
        width: 12px;
        height: 12px;
        right: -14px;
    }
}

@media screen and (max-width: 1300px) {
    .gauge-meter-title {
        font-size: 10px;
    }
}

.gauge-meter-sub-title {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    margin-bottom: 0;
    white-space: nowrap;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-sub-title {
        font-size: 10px;
        bottom: -12px;
    }
}

.gauge-meter-border {
    width: 100%;
    height: 88px;
    position: absolute;
    bottom: 0;
    left: 0;
}

.gauge-meter-border:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 3;
    background-size: cover;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjE1NTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgODYgNDMiPgogIDxnIGlkPSJQYXRoXzM1MzYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjI1OSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzNzMiIGRhdGEtbmFtZT0iUGF0aCAzNTM3MyIgZD0iTTk0My4yNjIsMTE4Ni40MmEuODM0LjgzNCwwLDAsMS0uODY4LS44MjQsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNi0yMy41Ni44NjguODY4LDAsMSwxLDEuMzg4LDEuMDQyLDM5LjEzNywzOS4xMzcsMCwwLDAtNy4yODksMjIuNDc1Ljg0NC44NDQsMCwwLDEtLjg2OC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQyLjM5MSAtMTE2MS42NzkpIiBmaWxsPSIjZWY1NDUwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni43ODkgMTguMjE1KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NCIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc0IiBkPSJNMTEyOC42MTksMTE4Ni4zNjNoMGEuODguODgsMCwwLDEtLjg2OC0uOTExLDM5LjUyNSwzOS41MjUsMCwwLDAtNy4yODktMjIuNDc1Ljg2OC44NjgsMCwxLDEsMS4zODgtMS4wNDEsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNiwyMy41NkEuODY5Ljg2OSwwLDAsMSwxMTI4LjYxOSwxMTg2LjM2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIwLjI3OSAtMTE2MS41NzkpIiBmaWxsPSIjMzFiYWEwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjgzIDIuNjgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc1IiBkYXRhLW5hbWU9IlBhdGggMzUzNzUiIGQ9Ik05NjMuNjM0LDExNDAuNjYzYS45NTMuOTUzLDAsMCwxLS41NjQtLjE3My44NDYuODQ2LDAsMCwxLS4xMy0xLjIxNSw1Mi40NTcsNTIuNDU3LDAsMCwxLDUuODU4LTUuOTQ0YzQuNzczLTQuMjA5LDkuMzcyLTYuOSwxMy43MTEtOC4wN2EuODUyLjg1MiwwLDEsMSwuNDM0LDEuNjQ5Yy05LjcxOSwyLjU2LTE4LjU3LDEzLjMyLTE4LjY1NywxMy40NTFBLjg0OC44NDgsMCwwLDEsOTYzLjYzNCwxMTQwLjY2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NjIuNzQxIC0xMTI1LjIzKSIgZmlsbD0iI2Y1OTg5NiIvPgogIDwvZz4KICA8ZyBpZD0iUGF0aF8zNTM2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMjQxIDIuNjc3KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NiIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc2IiBkPSJNMTA5Mi45MTUsMTE0MC42NmExLjAyNSwxLjAyNSwwLDAsMS0uNjk0LS4zYy0uMDg3LS4wODctOC45MzgtMTAuODQ3LTE4LjY1Ny0xMy40NWEuODUzLjg1MywwLDEsMSwuNDM0LTEuNjQ5YzQuMzM5LDEuMTI4LDguOTM4LDMuODYyLDEzLjcxMSw4LjA3YTYyLjMzMiw2Mi4zMzIsMCwwLDEsNS44NTcsNS45NDQuODQyLjg0MiwwLDAsMS0uMTMsMS4yMTVBLjkyOS45MjksMCwwLDEsMTA5Mi45MTUsMTE0MC42NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcyLjkyMyAtMTEyNS4yMjMpIiBmaWxsPSIjOGZmMGNiIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4yMTEpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc3IiBkYXRhLW5hbWU9IlBhdGggMzUzNzciIGQ9Ik0xMDM3LjMsMTEyMi42NzVhLjczOC43MzgsMCwwLDEtLjMtLjA0M2MtMTEuMTA4LTQuMDc4LTIzLjI1Ni0uMDQzLTIzLjM4NywwYS44MjkuODI5LDAsMCwxLTEuMDg1LS41NjQuODM4LjgzOCwwLDAsMSwuNTIxLTEuMDg1Yy41MjEtLjE3MywxMi44NDMtNC4yNTIsMjQuNTU4LDBhLjg3Mi44NzIsMCwwLDEtLjMsMS42OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxMi40NzUgLTExMTkuMDU0KSIgZmlsbD0iI2QxZDRkYyIvPgogIDwvZz4KPC9zdmc+Cg==");
}

@media screen and (max-width: 1300px) {
    .gauge-meter-border {
        height: 44px;
    }
}

.gauge-meter--os .gauge-meter-border,
.gauge-meter--ma .gauge-meter-border {
    height: 70px;
}

@media screen and (max-width: 1300px) {

    .gauge-meter--os .gauge-meter-border,
    .gauge-meter--ma .gauge-meter-border {
        height: 35px;
    }
}

.gauge-meter-background {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-size: cover;
    transition: all 0.3s;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-1 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZjU0NTAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzk2NzY3IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MCIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0MzkiIGRhdGEtbmFtZT0iUGF0aCAzNTQzOSIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-2 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI5OCIgeDI9IjAuNTA3IiB5Mj0iMC40OTQiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQ5MjkxIiBzdG9wLW9wYWNpdHk9IjAuOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNTk4OTYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjIxIiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMjM5IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjIzOSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
}

.gauge-meter-background.rank-3 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-4 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE1MiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE1MiIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4ZmYwY2IiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjQ1IiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMzIxIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjMyMSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
}

.gauge-meter-background.rank-5 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMWJhYTAiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzYyMSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzODIiIGRhdGEtbmFtZT0iUGF0aCAzNTM4MiIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuODAyIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICA8L2c+Cjwvc3ZnPgo=");
}

.gauge-meter-pane {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
}

@media screen and (max-width: 768.98px) {

    .w-18 {
        max-width: 110px !important;
    }

    .historyBox .item {
        width: 1rem;
        height: 1rem;
    }

    #tradePage {
        padding-top: 20px;
    }

}

@media screen and (max-width: 576px) {

    .w-18 {
        max-width: 130px !important;
    }

    .historyBox .item {
        width: 1.2rem;
        height: 1.2rem;
    }

    .historyBox .list5,
    .historyBox .list4 {
        display: none;
    }
}

@media screen and (max-width: 414px) {

    .w-18 {
        max-width: 110px !important;
    }

    .historyBox .item {
        width: 1rem;
        height: 1rem;
    }

    .popupCongratulation .popupCongratulationContent {
        width: auto;
    }

    .winLive .wrapNotify {
        width: 320px;
        background-size: 320px;
    }

    .winLive .wrapNotify .iconWin {
        left: 50%;
    }

    .winLive .wrapNotify .badgeDemo {
        right: 50px;
    }
}

@media screen and (max-width: 376px) {

    .w-18 {
        max-width: 115px !important;
    }

    .historyBox .item {
        width: 1rem;
        height: 1rem;
    }


}

@media screen and (max-width: 359px) {

    .w-18 {
        max-width: 100px !important;
    }

    .historyBox .item {
        width: .8rem;
        height: .8rem;
    }

    .popupCongratulation {
        zoom: 0.8;
    }
}

@media screen and (max-width: 1300px) {
    .gauge-meter-label-list {
        display: none;
    }
}

.gauge-meter-label-item {
    font-size: 10px;
    color: #8383a1;
    text-align: center;
    position: absolute;
    line-height: 1.2;
    text-transform: uppercase;
    transition: all 0.3s;
}

.gauge-meter-label-item.active {
    color: #fff;
}

.gauge-meter-label-item--strong-sell {
    top: 45px;
    left: -42px;
}

.gauge-meter--os .gauge-meter-label-item--strong-sell,
.gauge-meter--ma .gauge-meter-label-item--strong-sell {
    top: 40px;
    left: -40px;
}

.gauge-meter-label-item--sell {
    top: 5px;
    left: 5px;
}

.gauge-meter--os .gauge-meter-label-item--sell,
.gauge-meter--ma .gauge-meter-label-item--sell {
    top: 8px;
    left: -2px;
}

.gauge-meter-label-item--neutral {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.gauge-meter--os .gauge-meter-label-item--neutral,
.gauge-meter--ma .gauge-meter-label-item--neutral {
    top: -15px;
}

.gauge-meter-label-item--buy {
    top: 5px;
    right: 7px;
}

.gauge-meter--os .gauge-meter-label-item--buy,
.gauge-meter--ma .gauge-meter-label-item--buy {
    top: 8px;
    right: 0px;
}

.gauge-meter-label-item--strong-buy {
    top: 45px;
    right: -42px;
}

.gauge-meter--os .gauge-meter-label-item--strong-buy,
.gauge-meter--ma .gauge-meter-label-item--strong-buy {
    top: 40px;
    right: -40px;
}

.gauge-meter-status-list {
    position: absolute;
    width: 100%;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-status-list {
        bottom: -55px;
    }
}

@media screen and (max-width: 1023px) and (orientation: landscape) {
    .gauge-meter-status-list {
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .gauge-meter-status-list {
        display: none;
    }
}

.gauge-meter-status-item {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-status-item {
        padding: 0 5px;
        font-size: 12px;
    }
}

.gauge-meter-status-value {
    color: #fff;
    text-align: center;
    font-weight: bold;
}

.gauge-meter-status-value--sell {
    color: #ef5450;
}

.gauge-meter-status-value--buy {
    color: #31baa0;
}

.gauge-meter-status-value--neutral {
    color: #ffffff;
}

.gauge-meter-status-text {
    color: #8383a1;
}

.gauge-meter-popover {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.gauge-meter--os .gauge-meter-popover,
.gauge-meter--ma .gauge-meter-popover {
    top: 23px;
}

@media screen and (max-width: 1300px) {

    .gauge-meter--os .gauge-meter-popover,
    .gauge-meter--ma .gauge-meter-popover {
        top: 10px;
    }
}


.keyboard.hiddenKey {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
}

.vs-button-primary.vs-button-border,
.vs-button-primary.vs-button-flat {
    border: 1px solid #4e4e4e;
    color: #fff;
}

.keyboard-input-wrap.active .numKeyboardInput {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.5);
}

.keyboard td {
    text-align: center;
    width: 25%;
    border: 1px solid #ddd;
}

.keyboard table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.keyboard {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    font-size: .48rem;
    line-height: .48rem;
    background: #ffffff;
    color: #ffffff;
    width: 100%;
    height: 4.4rem;
    user-select: none;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition-property: transform visibility;
    transition-duration: .2s;
    font-weight: normal;
    border-top: 1px solid #e5e5e5;
}


.keyboard-input-wrap .keyboard {
    height: 460px;
    font-size: 1.2em;
    color: #fff;
    border: none;
}



.amountWrapper {
    height: 160px;
    background-color: #111;
}

.amountWrapper .headerAmount {
    padding: 1.25rem;
    background-color: #111;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}


.groupButtonMobile {
    margin: 1.25rem 0.5rem;
}

.keyboard-input-wrap .suggestion {
    background: #142C37;
    width: 100%;
    font-size: 1.2em;
    font-weight: normal;
}


.keyboard td:nth-of-type(-n+3) {
    font-weight: normal;
}

.keyboard td:first-child {
    border-left: none;
}
</style>

<style>
@media screen and (min-width: 768.98px) {

    #tradePage,
    .rightBar {
        height: calc(100vh - 77px);
        border-left: 2px solid #000;
    }

    .vs-navbar.navbar-skelton {
        border-bottom: 2px solid #000;
    }
}

.vs-input-primary .vs-input--input:focus {
    border: 1px solid #4e4e4e !important
}

.vs-input-primary.isFocus .vs-input--label,
.vs-input-primary .vs-input--input:focus~.icon-inputx,
.vs-input-primary .vs-input--input:focus~.vs-placeholder-label {
    color: #4e4e4e
}

@media (max-width: 1024.98px) and (min-width: 576px) {
    table tbody .suggestion td {
        font-size: 20.16px;
    }
}

.keyboard-input-wrap .keyboard table tbody tr td {
    border-color: #060017;
    background: #262527;
}

.keyboard-input-wrap .keyboard table tbody tr.suggestion td {
    background-color: #4e4e4e;
}




#tradePage .chartBox {
    height: calc(100vh - 400px);
    overflow: hidden;
    padding-top: 20px;
}

@media screen and (max-width: 1300px) {
    #tradePage .chartBox {
        height: calc(100vh - 270px);
    }
}

@media screen and (max-width: 1200px) {
    #tradePage .chartBox {
        height: calc(100vh - 250px);
    }
}

@media screen and (max-width: 1024px) {
    #tradePage .pc {
        display: none !important;
    }

    #tradePage .mobile {
        display: block !important;
    }

    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 1000px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 768px) {
    .navbar-floating .router-content {
        margin-top: 3rem;
    }

    #tradePage .chartBox {
        height: calc(100vh - 480px);
    }

    body {
        overflow-x: hidden;
        overflow-y: auto;
    }

    /*#tradePage{
        padding-top: 75px !important;
    }*/
}

@media screen and (max-width: 767px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 575px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 540px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 460px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 420px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

.bpF {
    border-radius: 5px;
    display: inline-block;
    background-color: #1d233b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.color-light-blue {
    color: #12e6d4 !important;
}

.color-green {
    color: #12e6d4 !important;
}

.color-red {
    color: #e23636 !important;
}

.bg-green {
    background: #12e6d4 !important;
}

.bg-red {
    background: #e23636 !important;
}

.empty {
    background: #ffffff;
}

.minutes-set {
    float: left;
    margin-right: 28px;
}

.betInput input {
    background: #1d233b !important;
    color: #fff;
}

.seconds-set {
    float: right;
}

.controlls {
    position: absolute;
    text-align: center;
    left: 40%;
    top: 40%;
    margin-left: -17px;
    width: 45px;
    margin-top: -5px;
}

.display-remain-time {
    font-size: 14px;
    color: #82868b;
    /*position: relative;top: 14px;*/
}

.w-18 {
    max-width: 145px !important;
}


.e-c-base {
    fill: none;
    stroke: #B6B6B6;
    stroke-width: 12px
}

.red .e-c-progress {
    fill: none;
    stroke: #ff0000;
    stroke-width: 12px;
    transition: stroke-dashoffset 0.7s;
}

.green .e-c-progress {
    fill: none;
    stroke: #31baa0;
    stroke-width: 12px;
    transition: stroke-dashoffset 0.7s;
}

.red .e-c-progress {
    fill: none;
    stroke: #ff0000;
    stroke-width: 10px;
    transition: stroke-dashoffset 0.7s;
}

.red .e-c-pointer {
    fill: #FFF;
    stroke: #ff0000;
    stroke-width: 10px;
}

.green .e-c-progress {
    fill: none;
    stroke: #31baa0;
    stroke-width: 10px;
    transition: stroke-dashoffset 0.7s;
}

.green .e-c-pointer {
    fill: #FFF;
    stroke: #31baa0;
    stroke-width: 10px;
}

#e-pointer {
    transition: transform 0.7s;
}

.hide-sm {
    display: none !important;
}

.hide-xs {
    display: block;
}

.box-btn-buy-sell {
    position: relative;
}

.box-btn-buy-sell .col-2 {
    position: static;
}

.circle {
    position: relative;
    left: 0px;
    height: 45px;
    /*top: 10px;*/
}

.plotlineChart .price {
    display: inline-block;
    background-color: #00b6ff;
    margin-bottom: 2px;
    padding: 2px 5px;
}

.plotlineChart .time {
    display: inline-block;
    background-color: #00b6ff;
    padding: 2px 5px;
}
</style>
<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydnz
========================================================================================== -->

<template>
    <div id="tradePage" class="trade-container">
        <div class="vx-row m-0">
            <div class="w-full">
            </div>
            <div class="vx-col w-full xl:w-10/12 relative">
                <div class="h-full">
                    <div class="relative chartBox">
                        <highcharts ref="chartStock" class="wap-chart" :constructor-type="'stockChart'"
                            :options="chartOptionsStock"></highcharts>
                        <div class="titleChartCandle flex items-center">
                            <span class="iconBTC"></span>
                            <span class="textPrice">BTC/USDT</span>
                        </div>
                        <div class="slider sidebarMobile" style="height: 180px;">
                            <div class="slidercontent">
                                <div class="backgroundOverlay"
                                    :style="`background-image: url(${require('@/assets/images/sky/overlay_left.svg')});`">
                                </div>
                                <div class="flex flex-col justify-between " style="height: 172px; margin-left: 10px;">
                                    <span class="font-12 zIndex99" style="color: rgb(252, 95, 95);">{{ CSSELL }}%</span>
                                    <vs-progress style="width: 130px;" class="bg-red progress" :height="4" :percent="CSBUY"
                                        color="success"></vs-progress>
                                    <span class="font-12 zIndex99" style="color: rgb(13, 247, 204);">{{ CSBUY }}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="analysis-wrapper" class="analysis-wrapper relative">
                        <vs-tabs>
                            <vs-tab label="INDICATORS" @click="activeGau = true, activeHis = true">
                            </vs-tab>
                            <vs-tab label="LAST RESULTS" @click="activeGau = true, activeHis = false">
                            </vs-tab>
                        </vs-tabs>

                        <div class="wrap-gauge-meter" :class="{ active: activeGau, hidden: !activeHis }">
                            <div class="wrap-gauge-meter-inner">
                                <div class="gauge-meter">
                                    <div class="gauge-meter-sub gauge-meter--os">
                                        <div class="v-popover gauge-meter-popover">
                                            <div class="trigger inline-block">
                                                <h3 class="gauge-meter-title">Oscillators
                                                    <span class="gauge-meter-title-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                            viewBox="0 0 22 22">
                                                            <g id="c-question" transform="translate(3.068 -8.774)">
                                                                <g id="Ellipse_1825" data-name="Ellipse 1825"
                                                                    transform="translate(-2.068 9.774)" fill="none"
                                                                    stroke="#fefefe" stroke-linecap="square"
                                                                    stroke-miterlimit="10" stroke-width="1">
                                                                    <circle cx="10" cy="10" r="10" stroke="none"></circle>
                                                                    <circle cx="10" cy="10" r="10.5" fill="none"></circle>
                                                                </g>
                                                                <g id="question" transform="translate(3.497 13.43)">
                                                                    <path id="Path_30768" data-name="Path 30768"
                                                                        d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                                                        transform="translate(-5.694 -1)" fill="#fefefe">
                                                                    </path>
                                                                    <ellipse id="Ellipse_1827" data-name="Ellipse 1827"
                                                                        cx="1.363" cy="1.284" rx="1.363" ry="1.284"
                                                                        transform="translate(2.252 11.56)" fill="#fefefe">
                                                                    </ellipse>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                        <h4 class="gauge-meter-sub-title">{{ textTitleOs }}</h4>
                                        <div class="gauge-meter-border">
                                            <div class="gauge-meter-background rank-2"></div>
                                            <ul class="gauge-meter-label-list">
                                                <li class="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                                                    strong<br>sell
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--sell active">
                                                    sell
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--neutral">
                                                    neutral
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--buy">
                                                    buy
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                                                    strong<br>buy
                                                </li>
                                            </ul>
                                            <ul class="gauge-meter-status-list">
                                                <li class="gauge-meter-status-item">
                                                    <span class="gauge-meter-status-value gauge-meter-status-value--sell">{{
                                                        NumOscSELL }}</span>
                                                    <span class="gauge-meter-status-text">Sell</span>
                                                </li>
                                                <li class="gauge-meter-status-item">
                                                    <span
                                                        class="gauge-meter-status-value gauge-meter-status-value--neutral">{{
                                                            NumOscNeutral }}</span>
                                                    <span class="gauge-meter-status-text">Neutral</span>
                                                </li>
                                                <li class="gauge-meter-status-item">
                                                    <span class="gauge-meter-status-value gauge-meter-status-value--buy">{{
                                                        NumOscBUY }}</span>
                                                    <span class="gauge-meter-status-text">Buy</span>
                                                </li>
                                            </ul>
                                            <highcharts ref="chartOs" class="gauge-meter-pane" :options="optionsOs">
                                            </highcharts>
                                        </div>
                                    </div>
                                    <div class="gauge-meter-sub gauge-meter--su">
                                        <div class="v-popover gauge-meter-popover">
                                            <div class="trigger" style="display: inline-block;">
                                                <h3 class="gauge-meter-title">
                                                    Summary
                                                    <span class="gauge-meter-title-icon"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                            viewBox="0 0 22 22">
                                                            <g id="c-question" transform="translate(3.068 -8.774)">
                                                                <g id="Ellipse_1825" data-name="Ellipse 1825"
                                                                    transform="translate(-2.068 9.774)" fill="none"
                                                                    stroke="#fefefe" stroke-linecap="square"
                                                                    stroke-miterlimit="10" stroke-width="1">
                                                                    <circle cx="10" cy="10" r="10" stroke="none"></circle>
                                                                    <circle cx="10" cy="10" r="10.5" fill="none"></circle>
                                                                </g>
                                                                <g id="question" transform="translate(3.497 13.43)">
                                                                    <path id="Path_30768" data-name="Path 30768"
                                                                        d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                                                        transform="translate(-5.694 -1)" fill="#fefefe">
                                                                    </path>
                                                                    <ellipse id="Ellipse_1827" data-name="Ellipse 1827"
                                                                        cx="1.363" cy="1.284" rx="1.363" ry="1.284"
                                                                        transform="translate(2.252 11.56)" fill="#fefefe">
                                                                    </ellipse>
                                                                </g>
                                                            </g>
                                                        </svg></span>
                                                </h3>
                                            </div>
                                        </div>
                                        <h4 class="gauge-meter-sub-title">{{ textTitleSu }}</h4>
                                        <div class="gauge-meter-border">
                                            <div class="gauge-meter-background rank-3"></div>
                                            <ul class="gauge-meter-label-list">
                                                <li class="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                                                    strong
                                                    <br>sell
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--sell">
                                                    sell
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--neutral active">
                                                    neutral
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--buy">
                                                    buy
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                                                    strong
                                                    <br>buy
                                                </li>
                                            </ul>
                                            <ul class="gauge-meter-status-list">
                                                <li class="gauge-meter-status-item">
                                                    <span class="gauge-meter-status-value gauge-meter-status-value--sell">{{
                                                        NumSumSELL }}</span>
                                                    <span class="gauge-meter-status-text">Sell</span>
                                                </li>
                                                <li class="gauge-meter-status-item">
                                                    <span
                                                        class="gauge-meter-status-value gauge-meter-status-value--neutral">{{
                                                            NumSumNeutral }}</span>
                                                    <span class="gauge-meter-status-text">Neutral</span>
                                                </li>
                                                <li class="gauge-meter-status-item">
                                                    <span class="gauge-meter-status-value gauge-meter-status-value--buy">{{
                                                        NumSumBUY }}</span>
                                                    <span class="gauge-meter-status-text">Buy</span>
                                                </li>
                                            </ul>
                                            <!--  -->
                                            <highcharts class="gauge-meter-pane" :options="optionsSu" ref="chartSu">
                                            </highcharts>
                                            <!--  -->
                                        </div>
                                    </div>
                                    <div class="gauge-meter-sub gauge-meter--ma">
                                        <div class="v-popover gauge-meter-popover">
                                            <div class="trigger" style="display: inline-block;">
                                                <h3 class="gauge-meter-title">
                                                    Moving Averages
                                                    <span class="gauge-meter-title-icon"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                            viewBox="0 0 22 22">
                                                            <g id="c-question" transform="translate(3.068 -8.774)">
                                                                <g id="Ellipse_1825" data-name="Ellipse 1825"
                                                                    transform="translate(-2.068 9.774)" fill="none"
                                                                    stroke="#fefefe" stroke-linecap="square"
                                                                    stroke-miterlimit="10" stroke-width="1">
                                                                    <circle cx="10" cy="10" r="10" stroke="none"></circle>
                                                                    <circle cx="10" cy="10" r="10.5" fill="none"></circle>
                                                                </g>
                                                                <g id="question" transform="translate(3.497 13.43)">
                                                                    <path id="Path_30768" data-name="Path 30768"
                                                                        d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                                                        transform="translate(-5.694 -1)" fill="#fefefe">
                                                                    </path>
                                                                    <ellipse id="Ellipse_1827" data-name="Ellipse 1827"
                                                                        cx="1.363" cy="1.284" rx="1.363" ry="1.284"
                                                                        transform="translate(2.252 11.56)" fill="#fefefe">
                                                                    </ellipse>
                                                                </g>
                                                            </g>
                                                        </svg></span>
                                                </h3>
                                            </div>
                                        </div>
                                        <h4 class="gauge-meter-sub-title">{{ textTitleMa }}</h4>
                                        <div class="gauge-meter-border">
                                            <div class="gauge-meter-background rank-3"></div>
                                            <ul class="gauge-meter-label-list">
                                                <li class="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                                                    strong
                                                    <br>sell
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--sell">
                                                    sell
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--neutral active">
                                                    neutral
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--buy">
                                                    buy
                                                </li>
                                                <li class="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                                                    strong
                                                    <br>buy
                                                </li>
                                            </ul>
                                            <ul class="gauge-meter-status-list">
                                                <li class="gauge-meter-status-item">
                                                    <span class="gauge-meter-status-value gauge-meter-status-value--sell">{{
                                                        NumMovSELL }}</span>
                                                    <span class="gauge-meter-status-text">Sell</span>
                                                </li>
                                                <li class="gauge-meter-status-item">
                                                    <span
                                                        class="gauge-meter-status-value gauge-meter-status-value--neutral">{{
                                                            NumMovNeutral }}</span> <span
                                                        class="gauge-meter-status-text">Neutral</span>
                                                </li>
                                                <li class="gauge-meter-status-item">
                                                    <span class="gauge-meter-status-value gauge-meter-status-value--buy">{{
                                                        NumMovBUY }}</span>
                                                    <span class="gauge-meter-status-text">Buy</span>
                                                </li>
                                            </ul>
                                            <highcharts class="gauge-meter-pane" :options="optionsMa" ref="chartMa">
                                            </highcharts>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="historyBox" :class="{ active: !activeGau, hidden: activeHis }">
                            <div class="overviewInfo flex items-center">
                                <span class="badgeItem">
                                    <span class="color-green uppercase font-bold">Mua</span>
                                    <span> {{ totalBuyStatic }}</span>
                                </span>
                                <span class="badgeItem ml-2">
                                    <span class="color-red uppercase font-bold">Bán</span>
                                    <span> {{ totalSellStatic }}</span>
                                </span>
                            </div>
                            <div class="ct flex justify-center">
                                <div class="vx-row">
                                    <div class="vx-col w-18 list1">
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    </div>
                                    <div class="vx-col w-18 list2">
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    </div>
                                    <div class="vx-col w-18 list3">
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    </div>
                                    <div class="vx-col w-18 list4">
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    </div>
                                    <div class="vx-col w-18 list5">
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                        <span class="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="vx-col w-full xl:w-2/12 rightBar">
                <div class="pc block">
                    <div class="mb-6">
                        <div class="mt-2 mb-2">
                            Tiền cược
                        </div>
                        <div class="relative">
                            <vs-input @keyup="nhapBetAmount" class="w-full betInput" icon-pack="feather"
                                icon="icon-dollar-sign" placeholder="10" v-model="betAmount" icon-no-border />
                            <feather-icon @click="clearBAmount()" style="right: 5px;top: 7px; position: absolute !important"
                                class="cursor-pointer" icon="XCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                        </div>
                        <div class="vx-row m-0 mt-2">
                            <div class="vx-col md:w-6/12 w-full text-center mt-2 p-1">
                                <span class="w-full bpF cursor-pointer h-8" @click="truBetAmount">-</span>
                            </div>
                            <div class="vx-col md:w-6/12 w-full text-center mt-2 p-1">
                                <span class="w-full bpF cursor-pointer h-8" @click="congBetAmount">+</span>
                            </div>
                            <div class="vx-col md:w-4/12 w-full text-center mt-2 p-1">
                                <span class="w-full bpF cursor-pointer h-8" @click="clickCT(50)">+50</span>
                            </div>
                            <div class="vx-col md:w-4/12 w-full text-center mt-2 p-1">
                                <span class="w-full bpF cursor-pointer h-8" @click="clickCT(100)">+100</span>
                            </div>
                            <div class="vx-col md:w-4/12 w-full text-center mt-2 p-1">
                                <span class="w-full bpF cursor-pointer h-8" @click="clickCT(0)">All</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:relative mb-10">
                        <div class="mt-2 mb-2 text-center">
                            Lợi nhuận
                        </div>
                        <div class="text-center">
                            <span class="profitPercent color-light-blue mb-2">95%</span>
                            <span class="profitValue color-green text-3xl font-bold">+${{ loiNhuan }}</span>
                        </div>
                    </div>
                    <div class="lg:relative mb-10 text-center">
                        <div class="text-center">
                            Chỉ báo tâm lý
                        </div>
                        <vs-progress class="bg-red" :height="4" :percent="CSBUY" color="success"></vs-progress>
                        <div class="block">
                            <span class="color-green float-left">
                                {{ CSBUY }}%
                            </span>
                            <span class="color-red float-right">
                                {{ CSSELL }}%
                            </span>
                        </div>
                    </div>

                    <div class="lg:relative mb-5 mt-10">
                        <div class="pb-1 col-md-12 col-4 bet-box-time"
                            style="border: 1px solid #fa2843;border-radius: 4px;background-color: #1d233b;">
                            <a class="btn btn-trade-time btnTransparent w-100 flex flex-col justify-center items-center"
                                style="height: 37px; color: #fff">
                                <p class="font-14 mb-0" style="line-height: normal;" :class="{ 'text-danger': !isBet }">{{
                                    textTimeDown }}:
                                    <span class="mb-0 font-bold ml-1 timer_counter second" style="line-height: normal;">{{
                                        seconDown }}s</span>
                                </p>
                            </a>
                        </div>
                        <div class="h-6"></div>
                        <vs-button @click="BetBuySell('buy')" :disabled="!isBet" class="w-full h-16 font-bold mb-3"
                            color="success" type="relief">
                            MUA
                            <feather-icon style="top: 5px;" icon="TrendingUpIcon" svgClasses="w-6 h-6"></feather-icon>
                        </vs-button>
                        <vs-button @click="BetBuySell('sell')" :disabled="!isBet" class="w-full h-16 font-bold"
                            color="danger" type="relief">
                            BÁN
                            <feather-icon style="top: 5px;" icon="TrendingDownIcon" svgClasses="w-6 h-6"></feather-icon>
                        </vs-button>
                        <!--<vs-button @click="clickMin" class="w-full h-16 font-bold" color="danger" type="relief">
                                                                                                                                                  TEST
                                                                                                                                                      <feather-icon style="top: 5px;" icon="TrendingDownIcon" svgClasses="w-6 h-6"></feather-icon>
                                                                                                                                                  </vs-button> -->
                    </div>
                </div>
                <div class="mobile hidden">
                    <div class="sidebarPC relative">
                        <vs-progress class="bg-red" :height="4" :percent="CSBUY" color="success"></vs-progress>
                        <div class="block">
                            <span class="color-green float-left">
                                {{ CSBUY }}%
                            </span>
                            <span class="color-red float-right">
                                {{ CSSELL }}%
                            </span>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="mt-2 mb-2 text-center">
                            Lợi nhuận
                            <span class="profitPercent color-light-blue mb-2">95%</span>
                            <span class="profitValue color-green text-3xl font-bold">+${{ loiNhuan }}</span>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="flex">
                            <div class="flex w-full mr-2">
                                <vs-button @click="truBetAmount" class="w-full" type="border" icon-pack="feather"
                                    icon="icon-minus"></vs-button>
                            </div>
                            <div class="flex relative" style="width: 55rem;">
                                <vs-input readonly="readonly" @click.stop="showMobileMenu = !showMobileMenu"
                                    class="w-full betInput" icon-pack="feather" icon="icon-dollar-sign" placeholder="10"
                                    v-model="betAmount" icon-no-border />
                                <feather-icon @click="clearBAmount()"
                                    style="right: 5px;top: 7px;position: absolute !important" class="cursor-pointer"
                                    icon="XCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                            </div>
                            <div class="flex w-full ml-2">
                                <vs-button @click="congBetAmount" class="w-full" type="border" icon-pack="feather"
                                    icon="icon-plus"></vs-button>
                            </div>
                        </div>
                    </div>
                    <div class="relative mb-5 mt-10">
                        <div class="flex">
                            <vs-button @click="BetBuySell('sell')" :disabled="!isBet" class="w-full h-16 font-bold"
                                color="danger" type="relief">
                                BÁN
                                <feather-icon style="top: 5px;" icon="TrendingDownIcon" svgClasses="w-6 h-6"></feather-icon>
                            </vs-button>
                            <div class="m-2 flex">
                                <div class="relative" style="margin: 0 auto;">
                                    <div class="absolute mbTextCountdown" :class="{ 'text-danger': !isBet }">
                                        {{ textTimeDown }}
                                    </div>
                                    <div class="circle red">
                                        <svg width="45" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                            <g transform="translate(110,110)">
                                                <circle r="100" class="e-c-base"></circle>
                                                <g transform="rotate(-90)">
                                                    <circle r="100" class="e-c-progress" style="stroke-dasharray: 628.319;">
                                                    </circle>
                                                    <g id="e-pointer">
                                                        <circle cx="100" cy="0" r="8" class="e-c-pointer"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="controlls">
                                        <div class="display-remain-time timer_counter second">{{ seconDown }}</div>
                                    </div>
                                </div>
                            </div>
                            <vs-button @click="BetBuySell('buy')" :disabled="!isBet" class="w-full h-16 font-bold"
                                color="success" type="relief">
                                MUA
                                <feather-icon style="top: 5px;" icon="TrendingUpIcon" svgClasses="w-6 h-6"></feather-icon>
                            </vs-button>
                        </div>
                    </div>
                    <div class="keyboard-input-wrap" :class="{ active: showMobileMenu }">
                        <div class="numKeyboardInput" @click="showMobileMenu = !showMobileMenu"></div>
                        <div class="keyboard" :class="{ hiddenKey: !showMobileMenu }">
                            <div id="amountWrapper" class="amountWrapper">
                                <div class="headerAmount">
                                    <span>Khối lượng giao dịch</span>
                                </div>
                                <div class="groupButtonMobile flex">
                                    <div class="flex w-full mr-2">
                                        <vs-button @click="truBetAmount" class="w-full" type="border" icon-pack="feather"
                                            icon="icon-minus"></vs-button>
                                    </div>
                                    <div class="flex relative" style="width: 55rem;">
                                        <vs-input readonly="readonly" @keyup="nhapBetAmount" class="w-full betInput"
                                            icon-pack="feather" icon="icon-dollar-sign" placeholder="10" v-model="betAmount"
                                            icon-no-border />
                                        <feather-icon @click="clearBAmount()"
                                            style="right: 5px;top: 7px;position: absolute !important;"
                                            class="cursor-pointer" icon="XCircleIcon"
                                            svgClasses="w-6 h-6 text-grey"></feather-icon>
                                    </div>
                                    <div class="flex w-full ml-2">
                                        <vs-button @click="congBetAmount" class="w-full" type="border" icon-pack="feather"
                                            icon="icon-plus"></vs-button>
                                    </div>
                                </div>
                                <div class="relative">
                                    <div class="mt-2 mb-2 text-center">
                                        Lợi nhuận
                                        <span class="profitPercent color-light-blue mb-2">95%</span>
                                        <span class="profitValue color-green text-3xl font-bold">+${{ loiNhuan }}</span>
                                    </div>
                                </div>
                            </div>
                            <table id="keyboardLandscape" style="height: calc(100% - 160px);">
                                <tbody>
                                    <tr class="suggestion">
                                        <td @click="clickCT(5)">+5</td>
                                        <td @click="clickCT(10)">+10</td>
                                        <td @click="clickCT(50)">+50</td>
                                        <td @click="clickCT(100)">+100</td>
                                    </tr>
                                    <tr>
                                        <td @click="writeBetAmountKey(1)">1</td>
                                        <td @click="writeBetAmountKey(2)">2</td>
                                        <td @click="writeBetAmountKey(3)">3</td>
                                        <td rowspan="2" @click="clickCT(0)"><span>Tất cả</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td @click="writeBetAmountKey(4)">4</td>
                                        <td @click="writeBetAmountKey(5)">5</td>
                                        <td @click="writeBetAmountKey(6)">6</td>
                                    </tr>
                                    <tr>
                                        <td @click="writeBetAmountKey(7)">7</td>
                                        <td @click="writeBetAmountKey(8)">8</td>
                                        <td @click="writeBetAmountKey(9)">9</td>
                                        <td rowspan="2" @click="showMobileMenu = !showMobileMenu">Hoàn tất</td>
                                    </tr>
                                    <tr>
                                        <td @click="writeBetAmountKey('.')">.</td>
                                        <td @click="writeBetAmountKey(0)">0</td>
                                        <td @click="deleteString">
                                            <feather-icon class="cursor-pointer" icon="DeleteIcon"
                                                svgClasses="w-6 h-6 text-grey"></feather-icon>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="popupCongratulation" :class="{ 'block': isWinPop }">
            <div class="mask"></div>
            <div class="popupCongratulationContent">
                <div class="winLive flex justify-center">
                    <div class="wrapNotify congratulation h-100 ">
                        <div class="boxNotify">
                            <img :src="require('@/assets/images/sky/icon_win_live.svg')" alt="" class="iconWin">
                            <div class="badgeDemo">{{ blObj.isAccount ? 'LIVE' : 'DEMO' }}</div>
                            <div class="boxContent flex justify-center items-center flex-col">
                                <div class="flex items-center">
                                    <!---->
                                </div>
                                <p class="titleWin">Xin chúc mừng!</p> <span class="message_money text-4xl font-bold">+{{
                                    moneyWin }}$</span>
                            </div>
                            <span class="cursor-pointer pointer"><i class="iconClose" data-feather='x'></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  
  import { Chart } from 'highcharts-vue'
  import Highcharts from 'highcharts'
  import More from 'highcharts/highcharts-more'
  import stockInit from 'highcharts/modules/stock'
  import loadIndicatorsAll from 'highcharts/indicators/indicators'
  import { isMobile, isTablet } from 'mobile-device-detect'
  import getData from '@/pages/trade/navbar/components/data.json'
  import SETTINGS from '../../../settings.json'
  import AuthenticationService from '@/services/AuthenticationService'
  
  More(Highcharts)
  stockInit(Highcharts)
  loadIndicatorsAll(Highcharts)
  
  
  let timer = null
  
  function convertTextValueMeter(t) {
      return t >= -90 && t <= -54 ? {cl: 'rank-1', text: "Strong sell", index: 1} : t > -54 && t <= -18 ? {cl: 'rank-2', text: "Sell", index: 2} : t > -18 && t <= 17 ? {cl: 'rank-3', text: "Neutral", index: 3} : t > 17 && t <= 53 ? {cl: 'rank-4', text: "Buy", index: 4} : t > 53 ? {cl: 'rank-5', text: "Strong Buy", index: 5} : void 0
  }
  
  var UP_COLOR = "#31BAA0",  DOWN_COLOR = "#FC5F5F", deviceVersion = 'pc'
  
  var progressBar = $('.e-c-progress')
  var lengthp = Math.PI * 2 * 100;
  progressBar.css('stroke-dasharray', lengthp)
  
  //circle ends
  //let wholeTime = 30; // manage this to set the whole time
  
  
  if(isMobile){
      deviceVersion = 'mobile'
  }else if(isTablet){
      deviceVersion = 'tablet';
  }
  
  
  var listData = [], ohlcStock = [], volumeStock = [];
  
  var chartGet = '', connected = false;
  
  const stockChart = {
      chart: {
          panning: false,
          followTouchMove: false,
          height: (9 / 16 * 100) + '%', // 16:9 ratio
          zoomType: "",
          backgroundColor: "transparent",
          plotBackgroundImage: require('@/assets/images/sky/world_map.svg'),
          marginRight: "pc" !== deviceVersion ? 70 : 80,
          marginBottom: "pc" !== deviceVersion ? 25 : 30,
  
          events: {
              load() {}
          }
      },
      rangeSelector: {
          enabled: false,
          selected: 4
      },
      credits: {
          enabled: false
      },
      scrollbar: {
          enabled: false
      },
      navigator: {
          enabled: false
      },
  
      stockTools: {
          gui: {
              enabled: false
          }
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
          candlestick: {
              lineColor: DOWN_COLOR,
              upLineColor: UP_COLOR,
              pointWidth: "pc" !== deviceVersion ? 9 : 10,
              maxPointWidth: "pc" !== deviceVersion ? 9 : 10
          },
          column: {
              minPointLength: 2,
              pointWidth: "pc" !== deviceVersion ? 11.2 : 11,
              maxPointWidth: "pc" !== deviceVersion ? 11.2 : 11,
              borderWidth: 0,
              pointPadding: 0,
              groupPadding: 0
          },
          series: {
              zIndex: 2,
  
              states: {
                  inactive: {
                      opacity: 1
                  }
              },
              allowPointSelect: false,
              point: {
                  events: {
                      click() {}
                  }
              }
          }
      },
      tooltip: {
          split: false,
          enabled: true,
          label: false,
          animation: false,
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          shadow: false,
          stroke: "transparent",
          useHTML: true,
          style: {
              color: "#fff",
              fontSize: "12px",
              stroke: "transparent"
          },
          formatter() {
              return "BTC/USDT" === this.series.name ? '\n<span style="margin-right: 10px;"><b>O</b>: ' + this.point.open + '</span>\n<span style="margin-right: 10px;"><b>C</b>: ' + this.point.close + '</span>\n<span>&nbsp;</span>\n<br/>\n<span style="margin-right: 10px;"><b>H</b>: ' + this.point.high + '</span>\n<span style="margin-right: 10px;"><b>L</b>: ' + this.point.low + "</span>\n<span><b>Vol</b>: " + this.point.vol + "</span>" : "Volume" === this.series.name ? "<b>Vol</b>: " + this.y : ""
          },
          positioner() {
              var t = 20,
                  e = "pc" !== deviceVersion ? 0 : 60;
              return {
                  x: t,
                  y: e
              }
          }
      },
      xAxis: {
          //minRange:30 * 24,
          type: "datetime",
          labels: {
              enabled: true,
              formatter() {
                  return Highcharts.dateFormat('%M:%S', this.value);
              },
              style: {
                  fontSize: 10,
                  color: "#707070"
              }
          },
          plotLines: [{
              value: 0,
              color: "#ffffff",
              width: .75,
              id: "current-pricex",
              zIndex: 1e3,
              dashStyle: "LongDash"
          }],
          lineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: "transparent",
          minorTickLength: 0,
          tickLength: 0
      },
      yAxis: [{
          gridLineColor: "#35275B",
          labels: {
              align: "right",
              x: "pc" !== deviceVersion ? 45 : 50,
              style: {
                  color: "#fff",
                  fontSize: "11px"
              }
          },
          height: "85%",
          top: 0,
          plotLines: [{
              value: 0,
              color: "#ffffff",
              width: .75,
              id: "current-price",
              zIndex: 100,
              label: {
                  useHTML: true,
                  text: 0,
                  x: "pc" !== deviceVersion ? 60 : 70,
                  align: "right",
                  style: {
                      color: "#fff",
                      fontSize: "11px",
                      background: "transparent",
                      borderRadius: "4px"
                  }
              }
          }],
          lineWidth: 0,
          resize: {
              enabled: true
          }
      }, {
          gridLineColor: "",
          visible: false,
          title: {
              align: "high",
              text: null,
              rotation: 0,
              y: 0,
              useHTML: true
          },
          top: "pc" == deviceVersion ? "83.4%" : "85%",
          height: "15%",
          lineWidth: 0,
          offset: 0
      }],
      series: [{
          id: "aapl",
          type: "candlestick",
          name: "BTC/USDT",
          color: DOWN_COLOR,
          upColor: UP_COLOR,
          data: ohlcStock
      }, {
          type: "column",
          name: "Volume",
          data: volumeStock,
          yAxis: 1
      },
      {
          name: "sma1",
          id: "sma1",
          type: "sma",
          linkedTo: "aapl",
          color: "#2177FF",
          lineWidth: 0,
          marker: false ,
          zIndex: 3,
          visible: true,
          enableMouseTracking: false,
          params: {
              index: "0",
              period: 10
          },
          allowPointSelect: false,
          point: {
              events: {
                  // click: function(t) {
                  //     setTimeout(function() {}, 500)
                  // }
              },
              tooltip: {
                  enabled: false
              }
          }
      },
      {
          name: "sma2",
          id: "sma2",
          type: "sma",
          linkedTo: "aapl",
          color: "#E22A67",
          lineWidth: 0,
          marker: false,
          zIndex: 3,
          visible: true,
          enableMouseTracking: false,
          params: {
          index: "1",
              period: 5
          },
          allowPointSelect: false,
          point: {
              events: {
                  // click: function(t) {
                  //     setTimeout(function() {}, 500)
                  // }
              },
              tooltip: {
                  enabled: false
              }
          }
      }
      ]
  }
  
  const gaugeMeterOs = {
    chart: {
          type: "gauge",
          plotBorderWidth: null,
          backgroundColor: "rgba(0,0,0,0)",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          height: 70,
          spacingBottom: 0,
          spacingTop: 0,
          spacingLeft: 0,
          spacingRight: 0,
          events: {
              render(t) {
                  let td = t.target.series[0].points[0].y
                  let n = convertTextValueMeter(td)
                  $(".gauge-meter--os .gauge-meter-background").removeClass("rank-1 rank-2 rank-3 rank-4 rank-5").addClass(n.cl)
                  $(".gauge-meter--os .gauge-meter-label-item").removeClass("active")
                  $(".gauge-meter--os .gauge-meter-label-item:nth-child(" + n.index + ")").addClass("active")
              }
          },
          animation: {
              duration: 1500,
              easing: "easeOutBounce"
          },
  
      },
  
      title: {
          text: ''
      },
  
      pane: [{
          startAngle: -90,
          endAngle: 90,
          background: null,
          center: ["50%", "105%"],
          size: 140
      }],
  
      credits: {
          enabled: false
      },
  
      exporting: {
          enabled: false
      },
  
      tooltip: {
          enabled: false
      },
  
      yAxis: [{
          min: -90,
          max: 90,
          minorTickPosition: "outside",
          tickPosition: "outside",
          labels: {
              rotation: "auto",
              distance: 0,
              style: {
                  color: "rgba(0,0,0,0)"
              }
          },
          pane: 0,
          title: "",
          minorTickColor: "rgba(0,0,0,0)",
          lineColor: "rgba(0,0,0,0)",
          tickColor: "rgba(0,0,0,0)"
      }],
  
  
      plotOptions: {
          gauge: {
              dataLabels: {
                  enabled: false
              },
              dial: {
                  radius: "85%",
                  baseLength: "1%",
                  rearLength: 0,
                  backgroundColor: {
                      linearGradient: {
                          x1: 1,
                          y1: 0,
                          x2: 0,
                          y2: 0
                      },
                      stops: [
                          [0, "#fff"],
                          [1, "#000"]
                      ]
                  },
                  baseWidth: 6,
                  topWidth: 3
              }
          }
      },
  
      series: [{
          name: "Oscillator",
          data: [10],
          yAxis: 0
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 71
              },
              chartOptions: {
                  chart: {
                      height: 35
                  },
                  pane: [{
                      size: 70
                  }]
              }
          }]
      }
  }
  
  const gaugeMeterSu = {
    chart: {
          type: "gauge",
          plotBorderWidth: null,
          backgroundColor: "rgba(0,0,0,0)",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          height: 88,
          spacingBottom: 0,
          spacingTop: 0,
          spacingLeft: 0,
          spacingRight: 0,
          events: {
              render(t) {
                  let td = t.target.series[0].points[0].y
                  let n = convertTextValueMeter(td)
                  $(".gauge-meter--su .gauge-meter-background").removeClass("rank-1 rank-2 rank-3 rank-4 rank-5").addClass(n.cl)
                  $(".gauge-meter--su .gauge-meter-label-item").removeClass("active")
                  $(".gauge-meter--su .gauge-meter-label-item:nth-child(" + n.index + ")").addClass("active")
  
              }
          },
          animation: {
              duration: 1500,
              easing: "easeOutBounce"
          },
  
      },
  
      title: {
          text: ''
      },
  
      pane: [{
          startAngle: -90,
          endAngle: 90,
          background: null,
          center: ["50%", "105%"],
          size: 176
      }],
  
      credits: {
          enabled: false
      },
  
      exporting: {
          enabled: false
      },
  
      tooltip: {
          enabled: false
      },
  
      yAxis: [{
          min: -90,
          max: 90,
          minorTickPosition: "outside",
          tickPosition: "outside",
          labels: {
              rotation: "auto",
              distance: 0,
              style: {
                  color: "rgba(0,0,0,0)"
              }
          },
          pane: 0,
          title: "",
          minorTickColor: "rgba(0,0,0,0)",
          lineColor: "rgba(0,0,0,0)",
          tickColor: "rgba(0,0,0,0)"
      }],
  
  
      plotOptions: {
          gauge: {
              dataLabels: {
                  enabled: false
              },
              dial: {
                  radius: "85%",
                  baseLength: "1%",
                  rearLength: 0,
                  backgroundColor: {
                      linearGradient: {
                          x1: 1,
                          y1: 0,
                          x2: 0,
                          y2: 0
                      },
                      stops: [
                          [0, "#fff"],
                          [1, "#000"]
                      ]
                  },
                  baseWidth: 6,
                  topWidth: 3
              }
          }
      },
  
      series: [{
          name: "Summary",
          data: [10],
          yAxis: 0
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 89
              },
              chartOptions: {
                  chart: {
                      height: 44
                  },
                  pane: [{
                      size: 88
                  }]
              }
          }]
      }
  }
  
  const gaugeMeterMa = {
    chart: {
          type: "gauge",
          plotBorderWidth: null,
          backgroundColor: "rgba(0,0,0,0)",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          height: 70,
          spacingBottom: 0,
          spacingTop: 0,
          spacingLeft: 0,
          spacingRight: 0,
          events: {
              render(t) {
                  let td = t.target.series[0].points[0].y
                  let n = convertTextValueMeter(td)
                  $(".gauge-meter--ma .gauge-meter-background").removeClass("rank-1 rank-2 rank-3 rank-4 rank-5").addClass(n.cl)
                  $(".gauge-meter--ma .gauge-meter-label-item").removeClass("active")
                  $(".gauge-meter--ma .gauge-meter-label-item:nth-child(" + n.index + ")").addClass("active")
              }
          },
          animation: {
              duration: 1500,
              easing: "easeOutBounce"
          },
  
      },
  
      title: {
          text: ''
      },
  
      pane: [{
          startAngle: -90,
          endAngle: 90,
          background: null,
          center: ["50%", "105%"],
          size: 140
      }],
  
      credits: {
          enabled: false
      },
  
      exporting: {
          enabled: false
      },
  
      tooltip: {
          enabled: false
      },
  
      yAxis: [{
          min: -90,
          max: 90,
          minorTickPosition: "outside",
          tickPosition: "outside",
          labels: {
              rotation: "auto",
              distance: 0,
              style: {
                  color: "rgba(0,0,0,0)"
              }
          },
          pane: 0,
          title: "",
          minorTickColor: "rgba(0,0,0,0)",
          lineColor: "rgba(0,0,0,0)",
          tickColor: "rgba(0,0,0,0)"
      }],
  
  
      plotOptions: {
          gauge: {
              dataLabels: {
                  enabled: false
              },
              dial: {
                  radius: "85%",
                  baseLength: "1%",
                  rearLength: 0,
                  backgroundColor: {
                      linearGradient: {
                          x1: 1,
                          y1: 0,
                          x2: 0,
                          y2: 0
                      },
                      stops: [
                          [0, "#fff"],
                          [1, "#000"]
                      ]
                  },
                  baseWidth: 6,
                  topWidth: 3
              }
          }
      },
  
      series: [{
          name: "ma",
          data: [10],
          yAxis: 0
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 71
              },
              chartOptions: {
                  chart: {
                      height: 35
                  },
                  pane: [{
                      size: 70
                  }]
              }
          }]
      }
  }
  
  export default {
    components: {
      highcharts: Chart
    },
    data() {
      return {
  
          thisIDPlayer: 0,
          totalBuyStatic: 0,
          totalSellStatic: 0,
  
          //Moving
          NumMovBUY: 0,
          NumMovSELL: 0,
          NumMovNeutral: 0,
          textTitleMa: 'NEUTRAL',
  
          //Oscillators
          NumOscBUY: 0,
          NumOscSELL: 0,
          NumOscNeutral: 0,
          textTitleOs: 'NEUTRAL',
  
          //Summary
          NumSumBUY: 0,
          NumSumSELL: 0,
          NumSumNeutral: 0,
          textTitleSu: 'NEUTRAL',
  
          moneyWin: 0,
          isWinPop: false,
          blObj: getData,
          isBet: true,
          CSBUY: 0,
          CSSELL: 0,
          isOrder: true,
          activeGau: false,
          activeHis: true,
          balanceForuser: 0,
          showMobileMenu: false,
          betAmount: 10,
          loiNhuan: 19.50,
          optionsOs: gaugeMeterOs,
          optionsSu: gaugeMeterSu,
          optionsMa: gaugeMeterMa,
          // chartOptions: {
          //     series: [{
          //         data: [1,2,3] // sample data
          //         }]
          // }
          chartOptionsStock: stockChart,
          betOpen: {
              "s": 0,
              "l": {
                  "bet": [
                      {
                          "items": []
                      }
                  ]
              },
          }
      }
    },
    computed: {
        seconDown(){
            return getData.countDown;
        },
        textTimeDown(){
            return getData.textTimeDown;
        }
    },
    watch: {
      "oscillators.meter.numberValue": function() {
          this.redrawGaugeMeter("oscillators"), this.redrawGaugeMeter("summary")
      },
      "movingAverages.meter.numberValue": function() {
          this.redrawGaugeMeter("movingAverages"), this.redrawGaugeMeter("summary")
      },
  },
    methods: {
  
  
      disabledBet(){
          return this.isBet = !this.isBet ? true : false
      },
      // redrawGaugeMeter: function(t) {
      //     var e = void 0;
      //     (e = "oscillators" === t ? this.gaugeMeterOs : "movingAverages" === t ? this.gaugeMeterMa : this.gaugeMeterSu) && e.series && (e.series[0].points[0].update(this[t].meter.numberValue, !1), e.redraw())
      // },
      sendMessage(message) {
        if(message.type) {
          message.token = `${localStorage.getItem('tokenUser')}`
          this.connection.send(JSON.stringify(message));
        }
      },
  
      // convertTextState(t) {
      //     switch (t) {
      //         case "buy":
      //             return h;
      //         case "sell":
      //             return u;
      //         case "neutral":
      //             return p
      //     }
      // },
  
      replaceAll(str, find, replace) {
          return Number(str.replace(new RegExp(find, 'g'), replace));
      },
  
      changeBlance(v){
          if(getData.isAccount){
              getData.blLive = getData.blLive - v
          }else{
              getData.blDemo = getData.blDemo - v
          }
  
          this.balanceForuser = getData.blDemo
  
      },
  
      checkBet(v){
          // lấy tổng số dư của tài khoản
          let sodu = getData.isAccount ? getData.blLive : getData.blDemo
  
          this.balanceForuser = sodu
  
          if(sodu < v) return true
      },
  
      BetBuySell(v){
          this.playAudio('order');
  
          if(getData.countDown <= 1){
              return this.$vs.notify({
                  text:'Vui lòng đợi phiên sau!',
                  color:'danger',
                  position:'top-right',
                  iconPack: 'feather',
                  icon:'icon-x-circle'})
          }
          //this.isBet = false
  
          let gAmount = this.betAmount.toString()
          gAmount = this.replaceAll(gAmount, ',', '')
  
  
          if(this.checkBet(gAmount)){
              return this.$vs.notify({
                  text:'Số dư của bạn không đủ',
                  color:'danger',
                  position:'top-right',
                  iconPack: 'feather',
                  icon:'icon-x-circle'})
          }
  
  
          let email = getData.email
          let typeAccount = getData.isAccount
          let uidLive  = getData.uidLive
          let uidDemo = getData.uidDemo
          let uidAcc = 0
  
          this.changeBlance(gAmount)
  
  
          if(typeAccount == 1){
              uidAcc = uidLive;
          }else{
              uidAcc = uidDemo;
          }
  
          let obj = {
              email: email,
              uid: uidAcc,
              ref: getData.ref,
              UpId: getData.upid,
              typeAccount: typeAccount, // 0: demo: 0 , 1: live
              betAmount: gAmount,
              type: v,
              mkt: getData.mkt
              //idPlayer: this.thisIDPlayer
          }
  
  
          this.sendMessage({type: 'bet', data: obj})
  
  
          let ss = this.$store.session
          let timeGet = new Date().getTime();
  
          this.betOpen.s = ss
          let itp = {
                  "ss": ss,
                  "time": timeGet,
                  "amt": gAmount,
                  "type": v,
                  "acc_type": typeAccount,
                  "currencyType": "BTC/USD",
                  "classIcon": "iconBitcoin"
              }
  
          this.betOpen.l.bet[0].items.push(itp);
  
          localStorage.setItem('stateOpen', JSON.stringify(this.betOpen))
  
          getData.Notify = this.betOpen.l.bet[0].items.length
  
          this.clearBAmount();
  
  
          // if(v === 'buy'){
  
          // }else{
  
  
          //     return this.$vs.notify({
          //         text:'Đặt lệnh thành công',
          //         color:'success',
          //         position:'top-right',
          //         iconPack: 'feather',
          //         icon:'icon-check'});
          // }
      },
  
      deleteString(){
          let getAmount = this.betAmount.toString();
          let total  = getAmount.slice(0,-1);
          let sl = total.split(".")
          let check = sl.length-1
          if(check == 1){
              let g =  this.replaceAll(total, ',', '')
              //console.log(g)
              this.betAmount =  this.formatPrice(g, sl[1].length)
              this.tinhloinhuan(g)
              return
          }
          let g =  this.getOnlyNumberInString(total, ',', '')
          this.betAmount =  this.formatPrice(g, 0)
          this.tinhloinhuan(g)
      },
  
      writeBetAmountKey(v){
  
          let getAmount = this.betAmount.toString() + v
          let sl = getAmount.split(".")
          let check = sl.length-1
          if(v == '.'){
              this.betAmount =  getAmount
              return
          }
          if(check > 1) return
          if(check == 1){
              let g =  this.replaceAll(getAmount, ',', '')
              this.betAmount =  this.formatPrice(g, sl[1].length)
              this.tinhloinhuan(g)
              return
          }
          let a = this.getOnlyNumberInString(getAmount)
          this.betAmount =  this.formatPrice(a, 0)
          this.tinhloinhuan(a)
      },
  
      congBetAmount(){
          let getAmount = this.betAmount.toString()
          let sl = getAmount.split(".")
          let check = sl.length-1
          if(check > 1) return
          let tt = 0
          if(check == 1){
              tt =  this.replaceAll(getAmount, ',', '')
              let kq = tt * 2
              this.betAmount =  this.formatPrice(kq, sl[1].length)
              this.tinhloinhuan(kq)
              return
          }
          let a = this.getOnlyNumberInString(getAmount)
          tt = a * 2
          this.tinhloinhuan(tt)
          this.betAmount = this.formatPrice(tt, 0)
      },
  
      truBetAmount(){
          let getAmount = this.betAmount.toString()
          let sl = getAmount.split(".")
          let check = sl.length-1
          if(check > 1) return
          let tt = 0
          if(check == 1){
              tt =  this.replaceAll(getAmount, ',', '')
              let kq = tt / 2
              this.betAmount =  this.formatPrice(kq, sl[1].length)
              this.tinhloinhuan(kq)
              return
          }
          let a = this.getOnlyNumberInString(getAmount)
          tt = a / 2
          this.tinhloinhuan(tt)
          this.betAmount = this.formatPrice(tt, 0)
      },
  
      nhapBetAmount(e){
          let g = e.target.value
          let check = g.split(".").length-1
          if(check > 1) return
  
          if(check == 1){
              g = this.replaceAll(g, ',', '')
              this.tinhloinhuan(g)
              return
          }
          g = this.getOnlyNumberInString(g)
          this.betAmount = this.formatPrice(g, 0)
          this.tinhloinhuan(g)
      },
  
      formatPrice(value, minimum) {
          var formatter = new Intl.NumberFormat('en-US', {
              //style: 'currency',
              //currency: '',
              minimumFractionDigits: minimum
          });
          return formatter.format(value);
      },
  
      tinhloinhuan(m){
          let lb = Number(m)
          lb = lb + (lb * 95 / 100)
          // tính lợi nhuận 95%
          this.loiNhuan = this.formatPrice(lb, 2)
      },
  
      getOnlyNumberInString(t) {
  
          let e = t.match(/\d+/g)
  
          return e ? Number(e.join("")) : 0
      },
  
      clearBAmount(){
          this.tinhloinhuan(10)
          this.betAmount = 10;
      },
  
      clickCT(amount){
          let getAmount = this.betAmount.toString();
          getAmount = this.betAmount.toString();
  
          if(amount == 0){
              getAmount = getData.isAccount ? getData.blLive.toString() : getData.blDemo.toString()
          }
  
          let check = getAmount.split(".").length-1
          if(check > 1) return
  
          if(check == 1){
              getAmount = this.replaceAll(getAmount, ',', '')
              let tt = getAmount + amount;
              this.tinhloinhuan(tt)
              this.betAmount = this.formatPrice(tt, 2);
              return
          }
          let aB = this.getOnlyNumberInString(getAmount);
          let tt = aB + amount;
          this.betAmount = this.formatPrice(tt, 0);
          this.tinhloinhuan(tt)
  
      },
  
      editUser() {
  
        //this.sidebarData = data
        this.toggleDataSidebar(true)
  
      },
  
      toggleDataSidebar(val=false) {
        this.addNewDataSidebar = val
      },
  
      updateBarChart(boPrice) {
  
          var chartInstance = chartGet;
          try{
              var lastCandle = chartInstance.series[1].points[chartInstance.series[1].points.length - 1]
              var color = this.getColor(boPrice.open, boPrice.close);
  
              if(lastCandle.x === boPrice.date) {
                  lastCandle.update({
                      x: boPrice.date,
                      y: boPrice.volume,
                      color: color
                  }, true);
              } else {
                  chartInstance.series[1].addPoint({
                      x: boPrice.date,
                      y: boPrice.volume,
                      color: color
                  }, true, true);
              }
          }
          catch{}
  
  
      },
  
  
          updateCandleStickChart(boPrice) {
  
                  var chartInstance = chartGet;
                  try{
  
                      var lastCandle = chartInstance.series[0].points[chartInstance.series[0].points.length - 1];
                      var color = this.getColor(boPrice.open, boPrice.close);
  
                      var counter = Number(boPrice.candleClose)
                      
  
                      // var o = {
                      //     x: boPrice.date,
                      //     open: boPrice.open.toFixed(2) * 1,
                      //     close: boPrice.close.toFixed(2) * 1,
                      //     high: boPrice.high.toFixed(2) * 1,
                      //     low: boPrice.low.toFixed(2) * 1,
                      //     vol: boPrice.volume.toFixed(2) * 1,
                      //     color: color
                      // };
                      var o = {             
                          x: boPrice.date,
                          open: boPrice.open.toFixed(2) * 1,
                          close: boPrice.close.toFixed(2) * 1,
                          high: boPrice.open.toFixed(2) * 1,
                          low: boPrice.open.toFixed(2) * 1,
                          vol: boPrice.volume.toFixed(2) * 1,
                          color: color
                      };
                      
                      if(lastCandle.x === boPrice.date) {
                          if (counter < 1) {
                              var o = {
                                  x: boPrice.date,
                                  open: boPrice.open.toFixed(2) * 1,
                                  close: boPrice.close.toFixed(2) * 1,
                                  high: boPrice.high.toFixed(2) * 1,
                                  low: boPrice.low.toFixed(2) * 1,
                                  vol: boPrice.volume.toFixed(2) * 1,
                                  color: color
                              };
                              setTimeout(() => {
                                  lastCandle.update(o, true);
                              }, 1000);
                          } else {
                              var o = {             
                                  x: boPrice.date,
                                  open: boPrice.open.toFixed(2) * 1,
                                  close: boPrice.close.toFixed(2) * 1,
                                  high: boPrice.open.toFixed(2) * 1,
                                  low: boPrice.open.toFixed(2) * 1,
                                  vol: boPrice.volume.toFixed(2) * 1,
                                  color: color
                              };
                              lastCandle.update(o, true);
                          }
                      } else {
                          chartInstance.series[0].addPoint(o, true, true);
                          // if(listData.length >= 200){
                          //     listData.shift();
                          // }
                          listData.push(boPrice);
                          let begin = 0;
  
                          const { dataMax } = chartInstance.xAxis[0].getExtremes();
                          if(deviceVersion !== 'pc') {
                              begin = this.setSizeStock(listData);
                              chartGet.xAxis[0].setExtremes(listData[begin+10].date, dataMax, false);
                              chartGet.redraw();
                          }else{''
                              let c = listData.length;
                              chartGet.xAxis[0].setExtremes(listData[c-90]['date'], dataMax, false);
                              chartGet.redraw();
                          }
  
                      }
                      chartInstance.xAxis[0].options.plotLines[0].value = boPrice.date;
                      chartInstance.yAxis[0].options.plotLines[0].value = boPrice.close;
  
                      let f = chartInstance.yAxis[0].plotLinesAndBands[0];
  
                      f.label && f.label.attr({
                          text : '<div class="plotlineChart flex flex-col"><span class="price">' + boPrice.close + '</span><span class="time self-end">00:' + (counter > 9 ? counter : "0" + counter) + '</span></div>'
                      });
  
                      if(boPrice.type === 'order'){
                          this.isOrder = true
                          this.isBet = true
                          getData.textTimeDown = 'Hãy đặt lệnh'
  
                      }else{
                          this.isOrder = false
                          this.isBet = false
                          getData.textTimeDown = 'Chờ kết quả'
  
                      }
  
                      getData.countDown = (counter > 9 ? counter : "0" + counter)
  
                  }
                  catch{
  
                  }
  
                  //let offset = -lengthp - lengthp * counter / (wholeTime);
                  //let progressBar = $('.e-c-progress')
                  //let pointer = $('#e-pointer')
                  //progressBar.css('stroke-dashoffset', offset)
                  //pointer.css("transform", `rotate(${360 * counter / (wholeTime)}deg)`)
  
  
      }, 
  
      getColor(openPrice, closePrice) {
          return openPrice < closePrice ? UP_COLOR : DOWN_COLOR
      },
  
      onReceiveSocketData(boPrice) {
          this.updateCandleStickChart(boPrice);
          this.updateBarChart(boPrice);
      },
  
      clickMin(){
          let ob = {
                  "date": 1633237083670,
                  "open": 47901.39,
                  "high": 47902.77,
                  "low": 47867.95,
                  "close": 47870.84,
                  "volume": 9.24,
                  "candleClose": "05",
                  "type": "watting"
              }
           const { dataMax } = chartGet.xAxis[0].getExtremes(); //dataMin
           console.log(chartGet.xAxis[0]);
           chartGet.xAxis[0].setExtremes(listData[110]['date'], dataMax, false);
           chartGet.redraw();
      },
  
  
      StaOscillators(e){
  
          try{
              let chart = this.$refs.chartOs.chart
  
              let left = chart.series[0].points[0], leftVal
              //Oscillators
              this.NumOscBUY = e.b
              this.NumOscSELL = e.s
              this.NumOscNeutral = e.m
  
              if(e.m > e.s && e.m > e.b || e.m === e.s &&  e.m === e.b){
                  this.textTitleOs = 'NEUTRAL'
                  left.update(0, true);
                  chart.redraw();
              }
              if(e.s > e.b){
                  leftVal = -35
                  this.textTitleOs = 'SELL'
                  if(e.s >= 5) leftVal = -70, this.textTitleOs = 'STRONG SELL'
                  left.update(leftVal, true);
                  chart.redraw();
              }else if(e.s < e.b){
                  leftVal = 35
                  this.textTitleOs = 'BUY'
                  if(e.b >= 5) leftVal = 70, this.textTitleOs = 'STRONG BUY'
                  left.update(leftVal, true);
                  chart.redraw();
              }
          }catch{}
  
  
      },
  
      StaSummary(e){
  
          try{
              let chart = this.$refs.chartSu.chart
  
              let left = chart.series[0].points[0], leftVal
  
              //Summary
              this.NumSumBUY = e.b
              this.NumSumSELL = e.s
              this.NumSumNeutral = e.m
  
              if(e.m > e.s && e.m > e.b || e.m === e.s &&  e.m === e.b){
                  this.textTitleSu = 'NEUTRAL'
                  left.update(0, true);
                  chart.redraw();
                  return
              }
              if(e.s > e.b){
                  leftVal = -35
                  this.textTitleSu = 'SELL'
                  if(e.s >= 5) leftVal = -70, this.textTitleSu = 'STRONG SELL'
                  left.update(leftVal, true);
                  chart.redraw();
              }else if(e.s < e.b){
                  leftVal = 35
                  this.textTitleSu = 'BUY'
                  if(e.b >= 5) leftVal = 70, this.textTitleSu = 'STRONG BUY'
                  left.update(leftVal, true);
                  chart.redraw();
              }
          }catch{}
  
      },
  
      StaMovingAverages(e){
  
          try
          {
              let chart = this.$refs.chartMa.chart
              let left = chart.series[0].points[0], leftVal
              //Moving
  
              this.NumMovBUY = e.b
              this.NumMovSELL = e.s
              this.NumMovNeutral = e.m
  
              if(e.m > e.s && e.m > e.b || e.m === e.s &&  e.m === e.b){
                  this.textTitleMa = 'NEUTRAL'
                  left.update(0, true);
                  chart.redraw();
                  return
              }
              if(e.s > e.b){
                  leftVal = -35
                  this.textTitleMa = 'SELL'
                  if(e.s >= 5) leftVal = -70, this.textTitleMa = 'STRONG SELL'
                  left.update(leftVal, true);
                  chart.redraw();
              }else if(e.s < e.b){
                  leftVal = 35
                  this.textTitleMa = 'BUY'
                  if(e.b >= 5) leftVal = 70, this.textTitleMa = 'STRONG BUY'
                  left.update(leftVal, true);
                  chart.redraw();
              }
          }catch{}
  
      },
  
      setSizeStock(data){
          var chartWidth = parseInt($('.chartBox').width());
  
          let numBar = Math.floor((chartWidth - 90) / 19.44); //90 17.44 13.44
          if(numBar < data.length) {
              return data.length - numBar - 10;
          }
  
      },
  
      getDataDefaultGet(get){
  
          let data = get;
          ohlcStock = [], volumeStock = [];
  
          var begin = 0;
  
          if(deviceVersion !== 'pc') {
              begin = this.setSizeStock(data);
          }else{
              let getWidth = parseInt($('body').width());
              if(getWidth >= 1260 && getWidth <= 1500){
                  begin = 55;
              }
              if(getWidth >= 1500 && getWidth <= 1600){
                  begin = 45;
              }
              if(getWidth >= 820 &&  getWidth <= 1260){
                  begin = 75;
              }
          }
  
          for (var i = begin; i < data.length; i++) {
                  var _o = {
                      x: data[i].date, // the date
                      open: data[i].open, // open
                      high: data[i].high, // high
                      low: data[i].low, // low
                      close: data[i].close, // close
                      vol: data[i].volume // volume
                  };
                  ohlcStock.push(_o);
  
                  volumeStock.push({
                      x: data[i].date, // the date
                      y: data[i].volume, // the volume
                      color: data[i].open < data[i].close ? UP_COLOR : DOWN_COLOR
                  });
  
          }
  
  
  
          stockChart.series[0].data = ohlcStock;
          stockChart.series[1].data = volumeStock;
          this.chartOptionsStock = stockChart;
  
          let ao = setInterval(() => {
              if(chartGet != ''){
                  clearInterval(ao);
                  const { dataMax } = chartGet.xAxis[0].getExtremes(); //dataMin
  
                  if(deviceVersion !== 'pc') {
                      chartGet.xAxis[0].setExtremes(data[begin+40]['date'], dataMax, false);
                      chartGet.redraw();
                  }else{
                      let c = data.length;
                      chartGet.xAxis[0].setExtremes(data[c-90]['date'], dataMax, false);
                      chartGet.redraw();
                  }
  
              }
          }, 100);
  
      },
  
      setChartHeight() {
  
  
          if(window.innerWidth > 768){
              deviceVersion = 'pc'
          }else{
              deviceVersion = 'mobile'
          }
  
          //$('.w-18').css('max-width', $('#analysis-wrapper').width() / 4)
          let setS = setInterval(() => {
              let w = $('.chartBox').width();
              let h = $('.chartBox').height();
              if(!!w && !!h){
                  let cH = this.$refs.chartStock.chart.chartHeight;
                  if(cH !== h){
                      let chartInstance = this.$refs.chartStock.chart;
                      chartInstance.setSize($('.chartBox').width(), $('.chartBox').height(), true);
                      chartGet = chartInstance
                  }else{
                      clearInterval(setS);
                  }
              }
          }, 600);
  
  
          //this.$forceUpdate();
      },
  
      onWindowLoad(){
  
          let uidLive  = getData.uidLive
          let uidDemo = getData.uidDemo
          let uidAcc = 0
  
          let acc = localStorage.getItem('BO_BALANCE_TYPE')
          if(acc == 'LIVE'){
              getData.isAccount = 1
          }else{
              getData.isAccount = 0
          }
  
          getData.isAccount ? uidAcc = uidLive : uidAcc = uidDemo
  
          this.sendMessage({type: 'accountDetail', data: {uid: uidAcc, email: getData.email}});
  
          let notify = JSON.parse(localStorage.getItem('stateOpen'));
          if(notify){
               getData.Notify = notify.l.bet[0].items.length
          }
  
      },
  
      addSound(){
          createjs.Sound.alternateExtensions = ["mp3"];
          createjs.Sound.registerSounds([
              {
                  id: "win",
                  src: require('@/assets/sounds/win-n.mp3')
              }, {
                  id: "lose",
                  src: require('@/assets/sounds/lose-n.mp3')
              }, {
                  id: "order",
                  src: require('@/assets/sounds/order-n.mp3')
              }
          ]);
      },
  
  
      playAudio(v){
          let checkSound = localStorage.getItem('SOUND');
          if(checkSound === 'false') return;
          createjs.Sound.play(v);
  
          // let sound;
          // if(v == 'win'){
          //    // sound = require('@/assets/sounds/win-n.mp3');
          // }else if(v == 'lose'){
          //   //  sound = require('@/assets/sounds/lose-n.mp3');
          // }else if(v == 'order'){
          //    // sound = require('@/assets/sounds/order-n.mp3');
          // }
          // var audio = new Audio(sound);
          // audio.play();
      },
  
      getUserInfo(){
          AuthenticationService.getInfoUser()
          .then((res) => {
  
              if(res.data.success == 1){
  
                  let gData = res.data.data
  
                  getData.uid= gData.id,
                  getData.email= gData.email,
                  getData.profile_image= gData.profile_image,
                  getData.displayName= gData.nick_name,
                  getData.uidLive= gData.order[1].u_id,
                  getData.uidDemo= gData.order[0].u_id,
                  getData.vip= gData.vip,
                  getData.vip_lv= gData.level_vip,
                  getData.pen_commiss= gData.pending_commission,
                  getData.ref= gData.ref,
                  getData.c2fa= gData.fa2,
                  getData.id_front= gData.id_front,
                  getData.id_back= gData.id_back,
                  getData.first_name= gData.first_name,
                  getData.last_name= gData.last_name,
                  getData.verify= gData.verify,
                  getData.num_secu= gData.num_secury,
                  getData.country= gData.c,
                  getData.blLive = gData.order[1].balance
                  getData.blDemo = gData.order[0].balance
                  getData.balance = gData.balance,
                  getData.mkt = gData.mkt
  
  
  
                  localStorage.setItem('INFO', JSON.stringify(gData))
              }else{
                  window.location.href = window.location.origin + '/login'
              }
          });
      }
  
    },
    created() {
  
      //let token = localStorage.getItem('token')
      //this.$store.dispatch('setToken', token)
  
  
      let acc = localStorage.getItem('BO_BALANCE_TYPE')
      if(acc == 'LIVE'){
        getData.isAccount = 1
      }else{
        getData.isAccount = 0
      }
  
      // lấy tổng số dư của tài khoản
      this.balanceForuser = getData.isAccount ? getData.blLive : getData.blDemo
  
      if(!connected){
          connected = true; 
          this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET); 
  
          //this.$store.connected = this.connection
  
          this.connection.onopen = function() {
              this.onWindowLoad();
              this.getUserInfo();
          }.bind(this);
  
          this.connection.onmessage = function(event) {
              let data = JSON.parse(event.data)
  
              let dl = data.data;
  
  
              if(data.type === 'getListDauTien'){
  
                  if(!!dl){
                      listData = dl;
                      this.getDataDefaultGet(dl);
                  }
  
              }
              if(data.type === 'getidPlayer'){
                  this.thisIDPlayer = data.data;
              }
              if(data.type === 'allData'){
                  this.onReceiveSocketData(dl);
              }
              if(data.type === 'transVolum'){
                  if(dl.nbuy){
                      this.CSBUY = dl.ptbuy
                      this.CSSELL = dl.ptsell
                  }
              }
              if(data.type === 'checkBet'){
                  this.isBet = true
                  return this.$vs.notify({
                      text:'Đặt lệnh thành công',
                      color:'success',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-check'});
              }
              if(data.type === 'kq'){
                  if(dl.kq == 'win'){
                      let mn = dl.money
  
                      this.playAudio('win');
  
                      if(getData.isAccount){
                          getData.blLive = getData.blLive + mn
                      }else{
                          getData.blDemo = getData.blDemo + mn
                      }
  
                      this.moneyWin = this.formatPrice(mn, 2)
                      this.isWinPop = true
                      setTimeout(() => {
                          this.isWinPop = false
                      }, 3000)
                  }else{
                      this.playAudio('lose');
                  }
                  // xóa notice = 0
                  getData.Notify = 0;
                  this.betOpen.l.bet[0].items = [];
                  localStorage.removeItem('stateOpen');
              }
              if(data.type === 'mess'){
                  if(dl.type == 'bet'){
                      return this.$vs.notify({
                          text: dl.mess,
                          color: dl.style,
                          position:'top-right',
                          iconPack: 'feather',
                          icon:'icon-x-circle'})
                  }
  
                  if(dl.type  === 'disAccount'){
                      // đăng xuất tài khoản
                      setTimeout(() => {
                          localStorage.removeItem('tokenUser');
                          localStorage.removeItem('INFO');
                          getData.Notify = 0;
                          localStorage.removeItem('stateOpen');
                          window.location.href = window.location.origin + '/login';
                      }, 3000);
                      return this.$vs.notify({
                              text: dl.mess,
                              color: dl.style,
                              position:'top-right',
                              iconPack: 'feather',
                              icon:'icon-x-circle'});
                  }
  
                  if(dl.type  === 'reloadAccount'){
                      location.reload();
                  }
              }
              if(data.type === 'static'){
  
                  let indicato = data.load
  
                  this.StaOscillators(indicato.Oscillators)
                  this.StaSummary(indicato.Summary)
                  this.StaMovingAverages(indicato.Moving)
  
                  //this.totalBuyStatic = dl.cbuy;
                  //this.totalSellStatic = dl.csell;
  
                  let sta = dl.static
  
                  let stl = sta.length
                  let istart = 0;
                  let csl = 40;
                  this.totalBuyStatic = this.totalSellStatic = 0;
                  //if(isMobile){ // rs lại tổng số
                  //    this.totalBuyStatic = this.totalSellStatic = 0;
                  //}
                  if(isMobile && stl > 60){
                      //let sl = stl - csl;
                      let sl = 0;
                      if(stl > 60 && stl <= 80){
                          sl = 20;
                      }else if(stl > 80){
                          sl = 40;
                      }
                      for(let x = 0; x < sl; x++){
                         sta.shift();
                      }
                      stl = sta.length;
                  }
                  let list = $('.historyBox');
                  $('.historyBox .item').removeClass('bg-green bg-red');
                  for(let i = istart; i < stl; i++){
                      let item = i;
                      // let l1 = $('.historyBox .list1')
                      // let l2 = $('.historyBox .list2')
                      // let l3 = $('.historyBox .list3')
                      // let l4 = $('.historyBox .list4')
                      // let l5 = $('.historyBox .list5')
                      if(i < 20){
                          if(sta[i] == 'buy'){
                              list.find('.item:eq('+item+')').addClass('bg-green')
                              this.totalBuyStatic++;
                          }else if(sta[i] == 'sell'){
                              list.find('.item:eq('+item+')').addClass('bg-red')
                              this.totalSellStatic++;
                          }
                      }
                      if(i > 19 && i < 40){
                          if(sta[i] == 'buy'){
                              list.find('.item:eq('+item+')').addClass('bg-green')
                              this.totalBuyStatic++;
                          }else if(sta[i] == 'sell'){
                              list.find('.item:eq('+item+')').addClass('bg-red')
                              this.totalSellStatic++;
                          }
                      }
                      if(i > 39 && i < 60){
                          if(sta[i] == 'buy'){
                              list.find('.item:eq('+item+')').addClass('bg-green')
                              this.totalBuyStatic++;
                          }else if(sta[i] == 'sell'){
                              list.find('.item:eq('+item+')').addClass('bg-red')
                              this.totalSellStatic++;
                          }
                      }
                      if(i > 59 && i < 80){
                          if(sta[i] == 'buy'){
                              list.find('.item:eq('+item+')').addClass('bg-green')
                              this.totalBuyStatic++;
                          }else if(sta[i] == 'sell'){
                              list.find('.item:eq('+item+')').addClass('bg-red')
                              this.totalSellStatic++;
                          }
                      }
                      if(i > 79 && i < 100){
                          if(sta[i] == 'buy'){
                              list.find('.item:eq('+item+')').addClass('bg-green')
                              this.totalBuyStatic++;
                          }else if(sta[i] == 'sell'){
                              list.find('.item:eq('+item+')').addClass('bg-red')
                              this.totalSellStatic++;
                          }
                      }
                  }
  
              }
          }.bind(this);
  
          this.connection.onclose = () => {
              // xóa notice = 0
              getData.Notify = 0;
              this.betOpen.l.bet[0].items = [];
              localStorage.removeItem('stateOpen');
          }

          this.connection.onerror = function(event) {
              alert(`connect to server caught error`)
          }

  
          //window.addEventListener("load", this.onWindowLoad);
  
      }else{
          //this.sendMessage({type: 'getListData'});
          this.$router.go(this.$router.currentRoute);
      }
    },
    mounted() {
      this.addSound();
      window.addEventListener("resize", this.setChartHeight)
      //window.addEventListener("load", this.setChartHeight);
  
      this.setChartHeight();
  
      // this.isMounted = true;
  
      // const chart = this.$children[1].$refs.highcharts
      // console.log(chart);
      //setTimeout(() => {
  
              // let chart = this.$refs.chartOs.chart
              // if (chart.series) { // the chart may be destroyed
              //     timer = setInterval(() => {
              //         var left = chart.series[0].points[0],
              //             //right = chart.series[1].points[0],
              //             leftVal,
              //             //rightVal,
              //             inc = (Math.random() * 200) - 85;
  
              //         leftVal = left.y + inc;
              //         //console.log(left.y)
              //         //rightVal = leftVal + inc / 3;
              //         if (leftVal < -85 || leftVal > 85) {
              //             leftVal = left.y - inc;
              //         }
              //         // if (rightVal < -20 || rightVal > 6) {
              //         //     rightVal = leftVal;
              //         // }
              //         //console.log(leftVal)
              //         left.update(leftVal, false);
              //         //right.update(rightVal, false);
              //         chart.redraw();
              //     }, 3000)
              // }
  
  
      //}, 3000)
  
  
    },
    destroyed() {
  
      //window.removeEventListener("resize", this.setChartHeight);
  
      if (timer) {
        clearInterval(timer)
      }
    },
  }
  </script>
  
  
<style scoped>
.mbTextCountdown {
    width: 150px;
    top: -35px;
    left: -50px;
    text-align: center;
    border: 1px solid #0f2f54;
    border-radius: 5px;
    box-shadow: 0px 5px 6px #15181c;
}

.overviewInfo {
    font-weight: 700;
    font-size: 16px;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
}

.overviewInfo .badgeItem {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);
}

.titleChartCandle {
    position: absolute;
    top: 10px;
    left: 0;
    padding: 7px 10px;
    border-radius: 5px;
    background-color: rgba(39, 49, 62, 0.3);
}

.titleChartCandle .iconBTC {
    display: inline-flex;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAABHNCSVQICAgIfAhkiAAABQtJREFUWIXVmV1sFFUUx393Zvaj7QJFILbQUgopKBIBGykRaEsiiobESPRBEoxRjIkJUR81ELaxj2pieFLUB40kfgQjiYkxwVYsAYmEWhSBSGlLwfLRb2j38x4fZna7UyrdnTbpcl9+OzNn5/zv2XPvOTOrcEZ8f0l9EvYpUWuUoYpFBKUUM0mEAVHSakKDb3dPM4ACGN1fEjaU2oc4Z/KQGmko2N0TVqP7S+oVqgkRUIp8pig2G4iERQSAfCciYUtrWa0MeyKo/KRSoAVEZLUBFM905CajTkVYUWwI7pP5TBHBEJn5CGZPsEAQUYDG3kPymTgRdtJi2hiYTdGuNoJPfwyBOZPYq+wpYOewOLkyTbTK61ChUqzKLejIIGbpOgpfOklwy4cT2OusKQiGiEwpoqqoBGvFs6jQwvR5s3wDAInLvwKCubgWo7gSY94DU/vlRLDE/uS5alpLn6Tg8fftGw5fJXH1BNai9Y7gY7aTxXXpCaSLgIchgJUSS6rhUCqnTd2YXZa+oZq1EN+K7enjYN27BNa9gQoUAxDvarF9eY2OCKrvvbnep5wxgjVvUbBx711t9MAlom2fEzl9ABIjnvzYOTwN+2Si+/g4ce3EO5vQw91jzoorKajdx+wdP6IKF3jyY4yVPz0lmotqXIIjZ79i+Jvt9H+0iqGDT5C8cSZ9zVywilnPHQJl5uTHFpyegZoSfeWbXILjXS3p6/ErJxk4+BQy2psh+iF8Vdty80MqJQDRegpU+MoeG1ObjBK/fNxtFx0m2d/umpRRdD8izvUsiAiGXZrFWfXeaJasBSs4prf/IubcSpedVVaDVVrtEpzouwjkkMMIlr2TCVo7facHFpRvdAkx569k7q5TJHsvoEeuo8yALVYZY2Kv/0ns0k9j/W4WfgAswW5+Uk2yF1pOZRs/zHnLMectH3dWiF/5jcHDL+fsx650U46wwp8pWCe4+dl6jNBCCle/SGDZVpQ/lJHfMUZOf0pi8HLO/tIRdkqdt92hdK1LUPzf30ncPAe954l1/AxWgFmb9lJU86YT9gBzth0AZTB65stxFXZyGqnSnMtqzaSvzJ0O0c6j7t0hHmGoaQ+R89+77EIb3s55NyKz+VFOxLJhoGoboerXiHafoHDl8y4hsc6WCb8X6z5BcMUzY/ldXJG1vzTtXcJ+06JFZ83Qo6/jX1yLf8nmOxaaliRYQXR8NG1vhkooXPuKyy7R949jn71fO4cz2r2s9kMzgI4OIfERlK/wDsHzd/wAySixa39AIgqGD3/pI2D63anT0eSpl1BdjUFRXlo9w0+gYhMFy7YSqn4VzMAd4v93JKP0HFhHou9CTn4FnEXnHOTEZIxI+xEGmsPp6A0ceYfbbV/cXayOc+PbF0j0XiD142ZL16LzOoJL6gCFxG4xdPwD/KXVFD28E4Cbh3Zi3bcUZfgAIX79LyIdv6Aj/envS460UvU+tQpzZbCiHoBI51H7eEktAPFrbdw++7Xn+05IO8KCEoVGo8idt859hySjRHtaQSBQYQse7WgGAbuXmx6San5QTuUid0a7jhHtaiG1MoZPfUK8r52R84c93e+uFFDtDZZ4fCKcAXLvvVvLeKbLfzpvfvTgZMYzH1mHWg8aIrSCOOImpuQLhVZD3UP/cSiRsFHVSLNoaRCdenrOUyZ1Q1UjzQpn/L2HehRhJaxBMWem/1RUSiFaBkXRihB+sJFmgP8A0ZjYaQV3l3UAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.titleChartCandle .textPrice {
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
}

.popupCongratulation {
    display: none;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
}

.popupCongratulation .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
}

.popupCongratulation .popupCongratulationContent {
    display: block;
    overflow: unset;
    border-radius: 8px;
    width: 450px;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.winLive .wrapNotify {
    border-radius: unset !important;
    background-color: unset !important;
    height: 210px !important;
    width: 368px;
    background-image: url('~@/assets/images/sky/notify.png');
    background-repeat: no-repeat;
    background-size: 100% 215px;
}

.wrapNotify.congratulation {
    background-color: red;
}

.winLive .wrapNotify .iconWin {
    position: absolute;
    left: 49%;
    bottom: 89%;
    -webkit-transform: translate(-50%, 30%);
    -ms-transform: translate(-50%, 30%);
    -moz-transform: translate(-50%, 30%);
    transform: translate(-50%, 30%);
    width: 257px;
}

.winLive .wrapNotify .badgeDemo {
    position: absolute;
    top: 34px;
    right: 57px;
    color: #fff;
    font-weight: bold;
    background: #2177FF;
    border-radius: 4px;
    padding: 0 8px;
}

.winLive .wrapNotify .titleWin {
    font-size: 1.95rem;
    font-weight: bold;
    margin: 15px 0;
    color: #fff;
}

.winLive .wrapNotify .message {
    color: #31BAA0;
}

.winLive .wrapNotify .iconClose {
    color: #fff;
    position: absolute;
    right: -30px;
    top: 15px;
}

.winDemo .wrapNotify {
    border-radius: 5px;
    background-color: #12013E;
    height: 340px !important;
    width: 400px;
}

.winDemo .wrapNotify .iconWin {
    position: absolute;
    top: -25px;
    left: 50%;
    -webkit-transform: translate(-50%, 30%);
    -ms-transform: translate(-50%, 30%);
    -moz-transform: translate(-50%, 30%);
    transform: translate(-50%, 30%);
    width: 120px;
    height: 120px;
}

.boxContent .message_money {
    color: #00c48c;
}

.winDemo .wrapNotify .boxContent {
    padding: 0;
}

.boxContent {
    margin-top: 4.5rem !important;
}

.winDemo .wrapNotify .boxContent .contentPopup {
    margin-top: 140px;
}

.winDemo .wrapNotify .boxContent .titleWin {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;
    line-height: 1.5;
}

.winDemo .wrapNotify .boxContent .message {
    color: #1EBF75;
    font-size: 2.2rem !important;
    line-height: 1;
}

.winDemo .wrapNotify .boxContent .btnDeposit {
    max-width: 340px;
    width: 100%;
    padding: 10px 0;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
    background-color: #1EBF75;
}

.winDemo .wrapNotify .iconClose {
    color: #fff;
    position: absolute;
    right: -30px;
    top: 0;
}

.analysis-wrapper {
    height: 10rem;
}


.analysis-wrapper .wrap-gauge-meter.active,
.analysis-wrapper #historyBox.active {
    opacity: 1;
    z-index: 1;
}

.wrap-gauge-meter {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding-top: 40px;
}

.wrap-gauge-meter-inner {
    height: 100%;
}

.historyBox .item {
    width: 1.5rem;
    height: 1.5rem;
    margin: 1px !important;
}

.sidebarMobile {
    display: none;
}


.list1,
.list2,
.list3,
.list4,
.list5 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row dense;
    grid-gap: 0.1rem;
}

.gridcs-1 {
    grid-column-start: 1;
}

.gridcs-2 {
    grid-column-start: 2;
}

.gridcs-3 {
    grid-column-start: 3;
}

.gridcs-4 {
    grid-column-start: 4;
}

.gridcs-5 {
    grid-column-start: 5;
}

@media (max-width: 1024.98px) {

    .sidebarPC {
        display: none;
    }

    .sidebarMobile {
        display: block;
        position: absolute;
        top: 60px;
        left: 0;
        width: 50px;
    }

    .sidebarMobile .slidercontent {
        height: 100%;
        position: relative;
        width: 50px;
    }

    .sidebarMobile .slidercontent .backgroundOverlay {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 50px;
    }

    .sidebarMobile .slidercontent span {
        width: 50px;
        line-height: 1;
    }

    .zIndex99 {
        z-index: 99;
    }

    .sidebarMobile .slidercontent .progress {
        -webkit-transform: translateX(-48%) rotate(270deg);
        transform: translateX(-48%) rotate(270deg);
        height: .4rem !important;
        overflow: unset !important;
    }
}

@media screen and (max-width: 1300px) {
    .wrap-gauge-meter-inner {
        height: auto;
        overflow: initial;
    }
}

@media screen and (max-width: 1023px) and (min-width: 991px) {
    .wrap-gauge-meter-inner {
        padding-bottom: 65px;
    }
}

@media screen and (max-width: 1023px) and (min-width: 991px) and (orientation: landscape) {
    .wrap-gauge-meter-inner {
        padding-bottom: 65px !important;
    }
}

@media screen and (max-width: 1023px) and (orientation: landscape) {
    .wrap-gauge-meter {
        padding-top: 36px;
    }
}

.gauge-meter {
    width: 900px;
    height: 135px;
    position: relative;
    margin: 0 auto;
    top: 15px;
}

@media screen and (max-width: 1500px) {
    .gauge-meter {
        width: 700px;
    }
}

@media screen and (max-width: 1300px) {
    .gauge-meter {
        width: 600px;
        height: 64px;
        top: auto;
        transform: none;
        margin-top: 20px;
    }
}

@media screen and (max-width: 1200px) {
    .gauge-meter {
        margin-top: 15px;
    }
}

@media screen and (max-width: 1024px) {
    .gauge-meter {
        margin-top: 10px;
    }
}

@media screen and (max-width: 1000px) and (orientation: landscape) {
    .gauge-meter {
        margin-top: 5px;
        width: 350px;
    }
}

@media screen and (max-width: 767px) {
    .gauge-meter {
        width: 350px;
        margin-top: 15px;
    }

    .boxContent {
        margin-top: 3.2rem !important;
    }
}

@media screen and (max-width: 575px) {
    .gauge-meter {
        margin-top: 35px;
    }
}

@media screen and (max-width: 420px) {
    .gauge-meter {
        margin-top: 10px;
        width: 320px;
    }
}

@media screen and (max-width: 400px) {
    .gauge-meter {
        margin-top: 10px;
        width: 260px;
    }
}

.gauge-meter.is-show-transaction {
    width: 90%;
}

.gauge-meter-sub {
    width: 176px;
    height: 100%;
    position: absolute;
    bottom: 0;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-sub {
        width: 88px;
    }
}

.gauge-meter--os {
    left: 0;
    width: 140px;
}

@media screen and (max-width: 1300px) {
    .gauge-meter--os {
        width: 70px;
    }
}

.gauge-meter--su {
    left: 50%;
    transform: translateX(-50%);
}

.gauge-meter--ma {
    width: 140px;
    left: auto;
    right: 0;
}

@media screen and (max-width: 1300px) {
    .gauge-meter--ma {
        width: 70px;
    }
}

.gauge-meter-title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    z-index: 4;
    margin-bottom: 0;
    white-space: nowrap;
    display: flex;
    position: relative;
    color: #fff;
    cursor: pointer;
}

.gauge-meter-title:hover {
    text-decoration: underline;
}

.gauge-meter-title-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
}

.gauge-meter-title-icon svg {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-title-icon {
        width: 12px;
        height: 12px;
        right: -14px;
    }
}

@media screen and (max-width: 1300px) {
    .gauge-meter-title {
        font-size: 10px;
    }
}

.gauge-meter-sub-title {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    margin-bottom: 0;
    white-space: nowrap;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-sub-title {
        font-size: 10px;
        bottom: -12px;
    }
}

.gauge-meter-border {
    width: 100%;
    height: 88px;
    position: absolute;
    bottom: 0;
    left: 0;
}

.gauge-meter-border:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 3;
    background-size: cover;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjE1NTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgODYgNDMiPgogIDxnIGlkPSJQYXRoXzM1MzYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjI1OSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzNzMiIGRhdGEtbmFtZT0iUGF0aCAzNTM3MyIgZD0iTTk0My4yNjIsMTE4Ni40MmEuODM0LjgzNCwwLDAsMS0uODY4LS44MjQsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNi0yMy41Ni44NjguODY4LDAsMSwxLDEuMzg4LDEuMDQyLDM5LjEzNywzOS4xMzcsMCwwLDAtNy4yODksMjIuNDc1Ljg0NC44NDQsMCwwLDEtLjg2OC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQyLjM5MSAtMTE2MS42NzkpIiBmaWxsPSIjZWY1NDUwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni43ODkgMTguMjE1KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NCIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc0IiBkPSJNMTEyOC42MTksMTE4Ni4zNjNoMGEuODguODgsMCwwLDEtLjg2OC0uOTExLDM5LjUyNSwzOS41MjUsMCwwLDAtNy4yODktMjIuNDc1Ljg2OC44NjgsMCwxLDEsMS4zODgtMS4wNDEsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNiwyMy41NkEuODY5Ljg2OSwwLDAsMSwxMTI4LjYxOSwxMTg2LjM2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIwLjI3OSAtMTE2MS41NzkpIiBmaWxsPSIjMzFiYWEwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjgzIDIuNjgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc1IiBkYXRhLW5hbWU9IlBhdGggMzUzNzUiIGQ9Ik05NjMuNjM0LDExNDAuNjYzYS45NTMuOTUzLDAsMCwxLS41NjQtLjE3My44NDYuODQ2LDAsMCwxLS4xMy0xLjIxNSw1Mi40NTcsNTIuNDU3LDAsMCwxLDUuODU4LTUuOTQ0YzQuNzczLTQuMjA5LDkuMzcyLTYuOSwxMy43MTEtOC4wN2EuODUyLjg1MiwwLDEsMSwuNDM0LDEuNjQ5Yy05LjcxOSwyLjU2LTE4LjU3LDEzLjMyLTE4LjY1NywxMy40NTFBLjg0OC44NDgsMCwwLDEsOTYzLjYzNCwxMTQwLjY2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NjIuNzQxIC0xMTI1LjIzKSIgZmlsbD0iI2Y1OTg5NiIvPgogIDwvZz4KICA8ZyBpZD0iUGF0aF8zNTM2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMjQxIDIuNjc3KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NiIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc2IiBkPSJNMTA5Mi45MTUsMTE0MC42NmExLjAyNSwxLjAyNSwwLDAsMS0uNjk0LS4zYy0uMDg3LS4wODctOC45MzgtMTAuODQ3LTE4LjY1Ny0xMy40NWEuODUzLjg1MywwLDEsMSwuNDM0LTEuNjQ5YzQuMzM5LDEuMTI4LDguOTM4LDMuODYyLDEzLjcxMSw4LjA3YTYyLjMzMiw2Mi4zMzIsMCwwLDEsNS44NTcsNS45NDQuODQyLjg0MiwwLDAsMS0uMTMsMS4yMTVBLjkyOS45MjksMCwwLDEsMTA5Mi45MTUsMTE0MC42NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcyLjkyMyAtMTEyNS4yMjMpIiBmaWxsPSIjOGZmMGNiIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4yMTEpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc3IiBkYXRhLW5hbWU9IlBhdGggMzUzNzciIGQ9Ik0xMDM3LjMsMTEyMi42NzVhLjczOC43MzgsMCwwLDEtLjMtLjA0M2MtMTEuMTA4LTQuMDc4LTIzLjI1Ni0uMDQzLTIzLjM4NywwYS44MjkuODI5LDAsMCwxLTEuMDg1LS41NjQuODM4LjgzOCwwLDAsMSwuNTIxLTEuMDg1Yy41MjEtLjE3MywxMi44NDMtNC4yNTIsMjQuNTU4LDBhLjg3Mi44NzIsMCwwLDEtLjMsMS42OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxMi40NzUgLTExMTkuMDU0KSIgZmlsbD0iI2QxZDRkYyIvPgogIDwvZz4KPC9zdmc+Cg==");
}

@media screen and (max-width: 1300px) {
    .gauge-meter-border {
        height: 44px;
    }
}

.gauge-meter--os .gauge-meter-border,
.gauge-meter--ma .gauge-meter-border {
    height: 70px;
}

@media screen and (max-width: 1300px) {

    .gauge-meter--os .gauge-meter-border,
    .gauge-meter--ma .gauge-meter-border {
        height: 35px;
    }
}

.gauge-meter-background {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-size: cover;
    transition: all 0.3s;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-1 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZjU0NTAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzk2NzY3IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MCIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0MzkiIGRhdGEtbmFtZT0iUGF0aCAzNTQzOSIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-2 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI5OCIgeDI9IjAuNTA3IiB5Mj0iMC40OTQiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQ5MjkxIiBzdG9wLW9wYWNpdHk9IjAuOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNTk4OTYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjIxIiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMjM5IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjIzOSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
}

.gauge-meter-background.rank-3 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}

.gauge-meter-background.rank-4 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE1MiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE1MiIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4ZmYwY2IiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjQ1IiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMzIxIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjMyMSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
}

.gauge-meter-background.rank-5 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMWJhYTAiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzYyMSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzODIiIGRhdGEtbmFtZT0iUGF0aCAzNTM4MiIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuODAyIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICA8L2c+Cjwvc3ZnPgo=");
}

.gauge-meter-pane {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
}

@media screen and (max-width: 768.98px) {

    .w-18 {
        max-width: 110px !important;
    }

    .historyBox .item {
        width: 1rem;
        height: 1rem;
    }

    #tradePage {
        padding-top: 20px;
    }

}

@media screen and (max-width: 576px) {

    .w-18 {
        max-width: 130px !important;
    }

    .historyBox .item {
        width: 1.2rem;
        height: 1.2rem;
    }

    .historyBox .list5,
    .historyBox .list4 {
        display: none;
    }
}

@media screen and (max-width: 414px) {

    .w-18 {
        max-width: 110px !important;
    }

    .historyBox .item {
        width: 1rem;
        height: 1rem;
    }

    .popupCongratulation .popupCongratulationContent {
        width: auto;
    }

    .winLive .wrapNotify {
        width: 320px;
        background-size: 320px;
    }

    .winLive .wrapNotify .iconWin {
        left: 50%;
    }

    .winLive .wrapNotify .badgeDemo {
        right: 50px;
    }
}

@media screen and (max-width: 376px) {

    .w-18 {
        max-width: 115px !important;
    }

    .historyBox .item {
        width: 1rem;
        height: 1rem;
    }


}

@media screen and (max-width: 359px) {

    .w-18 {
        max-width: 100px !important;
    }

    .historyBox .item {
        width: .8rem;
        height: .8rem;
    }

    .popupCongratulation {
        zoom: 0.8;
    }
}

@media screen and (max-width: 1300px) {
    .gauge-meter-label-list {
        display: none;
    }
}

.gauge-meter-label-item {
    font-size: 10px;
    color: #8383a1;
    text-align: center;
    position: absolute;
    line-height: 1.2;
    text-transform: uppercase;
    transition: all 0.3s;
}

.gauge-meter-label-item.active {
    color: #fff;
}

.gauge-meter-label-item--strong-sell {
    top: 45px;
    left: -42px;
}

.gauge-meter--os .gauge-meter-label-item--strong-sell,
.gauge-meter--ma .gauge-meter-label-item--strong-sell {
    top: 40px;
    left: -40px;
}

.gauge-meter-label-item--sell {
    top: 5px;
    left: 5px;
}

.gauge-meter--os .gauge-meter-label-item--sell,
.gauge-meter--ma .gauge-meter-label-item--sell {
    top: 8px;
    left: -2px;
}

.gauge-meter-label-item--neutral {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.gauge-meter--os .gauge-meter-label-item--neutral,
.gauge-meter--ma .gauge-meter-label-item--neutral {
    top: -15px;
}

.gauge-meter-label-item--buy {
    top: 5px;
    right: 7px;
}

.gauge-meter--os .gauge-meter-label-item--buy,
.gauge-meter--ma .gauge-meter-label-item--buy {
    top: 8px;
    right: 0px;
}

.gauge-meter-label-item--strong-buy {
    top: 45px;
    right: -42px;
}

.gauge-meter--os .gauge-meter-label-item--strong-buy,
.gauge-meter--ma .gauge-meter-label-item--strong-buy {
    top: 40px;
    right: -40px;
}

.gauge-meter-status-list {
    position: absolute;
    width: 100%;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-status-list {
        bottom: -55px;
    }
}

@media screen and (max-width: 1023px) and (orientation: landscape) {
    .gauge-meter-status-list {
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .gauge-meter-status-list {
        display: none;
    }
}

.gauge-meter-status-item {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}

@media screen and (max-width: 1300px) {
    .gauge-meter-status-item {
        padding: 0 5px;
        font-size: 12px;
    }
}

.gauge-meter-status-value {
    color: #fff;
    text-align: center;
    font-weight: bold;
}

.gauge-meter-status-value--sell {
    color: #ef5450;
}

.gauge-meter-status-value--buy {
    color: #31baa0;
}

.gauge-meter-status-value--neutral {
    color: #d1d4dc;
}

.gauge-meter-status-text {
    color: #8383a1;
}

.gauge-meter-popover {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.gauge-meter--os .gauge-meter-popover,
.gauge-meter--ma .gauge-meter-popover {
    top: 23px;
}

@media screen and (max-width: 1300px) {

    .gauge-meter--os .gauge-meter-popover,
    .gauge-meter--ma .gauge-meter-popover {
        top: 10px;
    }
}


.keyboard.hiddenKey {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
}

.vs-button-primary.vs-button-border,
.vs-button-primary.vs-button-flat {
    border: 1px solid #4e4e4e;
    color: #fff;
}

.keyboard-input-wrap.active .numKeyboardInput {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.5);
}

.keyboard td {
    text-align: center;
    width: 25%;
    border: 1px solid #ddd;
}

.keyboard table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.keyboard {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    font-size: .48rem;
    line-height: .48rem;
    background: #ffffff;
    color: #4a4a4a;
    width: 100%;
    height: 4.4rem;
    user-select: none;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition-property: transform visibility;
    transition-duration: .2s;
    font-weight: normal;
    border-top: 1px solid #e5e5e5;
}


.keyboard-input-wrap .keyboard {
    height: 460px;
    font-size: 1.2em;
    color: #fff;
    border: none;
}



.amountWrapper {
    height: 160px;
    background-color: #111;
}

.amountWrapper .headerAmount {
    padding: 1.25rem;
    background-color: #111;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}


.groupButtonMobile {
    margin: 1.25rem 0.5rem;
}

.keyboard-input-wrap .suggestion {
    background: #142C37;
    width: 100%;
    font-size: 1.2em;
    font-weight: normal;
}


.keyboard td:nth-of-type(-n+3) {
    font-weight: normal;
}

.keyboard td:first-child {
    border-left: none;
}
</style>
  
<style>
@media screen and (min-width: 768.98px) {

    #tradePage,
    .rightBar {
        height: calc(100vh - 77px);
        border-left: 2px solid #000;
    }

    .vs-navbar.navbar-skelton {
        border-bottom: 2px solid #000;
    }
}

.vs-input-primary .vs-input--input:focus {
    border: 1px solid #4e4e4e !important
}

.vs-input-primary.isFocus .vs-input--label,
.vs-input-primary .vs-input--input:focus~.icon-inputx,
.vs-input-primary .vs-input--input:focus~.vs-placeholder-label {
    color: #4e4e4e
}

@media (max-width: 1024.98px) and (min-width: 576px) {
    table tbody .suggestion td {
        font-size: 20.16px;
    }
}

.keyboard-input-wrap .keyboard table tbody tr td {
    border-color: #060017;
    background: #262527;
}

.keyboard-input-wrap .keyboard table tbody tr.suggestion td {
    background-color: #4e4e4e;
}




#tradePage .chartBox {
    height: calc(100vh - 400px);
    overflow: hidden;
    padding-top: 20px;
}

@media screen and (max-width: 1300px) {
    #tradePage .chartBox {
        height: calc(100vh - 270px);
    }
}

@media screen and (max-width: 1200px) {
    #tradePage .chartBox {
        height: calc(100vh - 250px);
    }
}

@media screen and (max-width: 1024px) {
    #tradePage .pc {
        display: none !important;
    }

    #tradePage .mobile {
        display: block !important;
    }

    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 1000px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 768px) {
    .navbar-floating .router-content {
        margin-top: 3rem;
    }

    #tradePage .chartBox {
        height: calc(100vh - 480px);
    }

    body {
        overflow-x: hidden;
        overflow-y: auto;
    }

    /*#tradePage{
          padding-top: 75px !important;
      }*/
}

@media screen and (max-width: 767px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 575px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 540px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 460px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

@media screen and (max-width: 420px) {
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}

.bpF {
    border-radius: 5px;
    display: inline-block;
    background-color: #1d233b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.color-light-blue {
    color: #00cebe !important;
}

.color-green {
    color: #31baa0 !important;
}

.color-red {
    color: #ea5455 !important;
}

.bg-green {
    background: #31baa0 !important;
}

.bg-red {
    background: #ea5455 !important;
}

.empty {
    background: #637284;
}

.minutes-set {
    float: left;
    margin-right: 28px;
}

.betInput input {
    background: #1d233b !important;
    color: #fff;
}

.seconds-set {
    float: right;
}

.controlls {
    position: absolute;
    text-align: center;
    left: 40%;
    top: 40%;
    margin-left: -17px;
    width: 45px;
    margin-top: -5px;
}

.display-remain-time {
    font-size: 14px;
    color: #82868b;
    /*position: relative;top: 14px;*/
}

.w-18 {
    max-width: 145px !important;
}


.e-c-base {
    fill: none;
    stroke: #B6B6B6;
    stroke-width: 12px
}

.red .e-c-progress {
    fill: none;
    stroke: #ff0000;
    stroke-width: 12px;
    transition: stroke-dashoffset 0.7s;
}

.green .e-c-progress {
    fill: none;
    stroke: #31baa0;
    stroke-width: 12px;
    transition: stroke-dashoffset 0.7s;
}

.red .e-c-progress {
    fill: none;
    stroke: #ff0000;
    stroke-width: 10px;
    transition: stroke-dashoffset 0.7s;
}

.red .e-c-pointer {
    fill: #FFF;
    stroke: #ff0000;
    stroke-width: 10px;
}

.green .e-c-progress {
    fill: none;
    stroke: #31baa0;
    stroke-width: 10px;
    transition: stroke-dashoffset 0.7s;
}

.green .e-c-pointer {
    fill: #FFF;
    stroke: #31baa0;
    stroke-width: 10px;
}

#e-pointer {
    transition: transform 0.7s;
}

.hide-sm {
    display: none !important;
}

.hide-xs {
    display: block;
}

.box-btn-buy-sell {
    position: relative;
}

.box-btn-buy-sell .col-2 {
    position: static;
}

.circle {
    position: relative;
    left: 0px;
    height: 45px;
    /*top: 10px;*/
}

.plotlineChart .price {
    display: inline-block;
    background-color: #00b6ff;
    margin-bottom: 2px;
    padding: 2px 5px;
}

.plotlineChart .time {
    display: inline-block;
    background-color: #00b6ff;
    padding: 2px 5px;
}
</style>
  