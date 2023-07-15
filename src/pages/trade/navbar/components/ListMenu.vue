<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Sky Soft
    Author URL: https://skysoft.pw
========================================================================================== -->

<template>
    <div id="leftSidebar" class="contentSidebar flex flex-col">
        <div class="topSidebar">
            <div class=" nav-item">
                <router-link to="/trading" class="nav-link cursor-pointer">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="19.776" height="20.801" viewBox="0 0 19.776 20.801"
                            class="non-active">
                            <g id="bracket-arrow" transform="translate(0 21.189) rotate(-90)">
                                <g id="Path_30752" data-name="Path 30752" transform="translate(2.447 0)" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9.5,13.385l3.226-3.5L9.5,6.391V1.5l7.743,8.388L9.5,18.276Z" stroke="none">
                                    </path>
                                    <path
                                        d="M 9.499995231628418 18.2755241394043 L 17.24255561828613 9.887763977050781 L 9.499995231628418 1.500003933906555 L 9.499995231628418 6.390714168548584 L 12.72606468200684 9.887763977050781 L 9.499995231628418 13.38481426239014 L 9.499995231628418 18.2755241394043 M 9.499653816223145 19.77558326721191 C 9.316328048706055 19.77558326721191 9.131294250488281 19.74194717407227 8.953784942626953 19.67254447937012 C 8.378564834594727 19.44763374328613 7.99999475479126 18.89314460754395 7.99999475479126 18.2755241394043 L 7.99999475479126 13.38481426239014 C 7.99999475479126 13.00788402557373 8.141904830932617 12.64477443695068 8.397475242614746 12.3677339553833 L 10.68527698516846 9.887763977050781 L 8.397475242614746 7.407793998718262 C 8.141904830932617 7.130753993988037 7.99999475479126 6.767643928527832 7.99999475479126 6.390714168548584 L 7.99999475479126 1.500003933906555 C 7.99999475479126 0.8823840022087097 8.378564834594727 0.3278939723968506 8.953784942626953 0.1029839739203453 C 9.131258964538574 0.03359496966004372 9.316363334655762 -5.543701263377443e-05 9.499653816223145 -5.543701263377443e-05 C 9.910433769226074 -5.543701263377443e-05 10.31252574920654 0.1687753796577454 10.60219478607178 0.4825839698314667 L 18.34475517272949 8.870344161987305 C 18.87515449523926 9.444933891296387 18.87515449523926 10.33059406280518 18.34475517272949 10.90518379211426 L 10.60219478607178 19.29294395446777 C 10.31255149841309 19.60672569274902 9.910395622253418 19.77558326721191 9.499653816223145 19.77558326721191 Z"
                                        stroke="none" fill="#fff" class="fill-color"></path>
                                </g>
                                <g id="Path_30753" data-name="Path 30753" transform="translate(1.389 1.685)" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M6.687,14.905.5,8.2,6.687,1.5V5.408L4.109,8.2,6.687,11Z" stroke="none"></path>
                                    <path
                                        d="M 6.686956405639648 14.90506172180176 L 6.686956405639648 10.99697208404541 L 4.10905647277832 8.202531814575195 L 6.686956405639648 5.408092021942139 L 6.686956405639648 1.500001788139343 L 0.4999963045120239 8.202531814575195 L 6.686956405639648 14.90506172180176 M 6.687297821044922 16.40512084960938 C 6.276517391204834 16.40512084960938 5.874425888061523 16.23628997802734 5.584756374359131 15.92248153686523 L -0.6022037267684937 9.219951629638672 C -1.132603645324707 8.64536190032959 -1.132603645324707 7.759701728820801 -0.6022037267684937 7.185111999511719 L 5.584756374359131 0.4825818240642548 C 5.87440013885498 0.1688009202480316 6.276555061340332 -5.759948908234946e-05 6.687297821044922 -5.759948908234946e-05 C 6.870623588562012 -5.759948908234946e-05 7.055656909942627 0.03357908129692078 7.233166217803955 0.1029818132519722 C 7.808386325836182 0.3278918266296387 8.186956405639648 0.882381796836853 8.186956405639648 1.500001788139343 L 8.186956405639648 5.408092021942139 C 8.186956405639648 5.785021781921387 8.045045852661133 6.148131847381592 7.78947639465332 6.425171852111816 L 6.149843215942383 8.202531814575195 L 7.78947639465332 9.979891777038574 C 8.045045852661133 10.25693225860596 8.186956405639648 10.620041847229 8.186956405639648 10.99697208404541 L 8.186956405639648 14.90506172180176 C 8.186956405639648 15.52268218994141 7.808386325836182 16.07717132568359 7.233166217803955 16.30208206176758 C 7.055692195892334 16.3714714050293 6.870587825775146 16.40512084960938 6.687297821044922 16.40512084960938 Z"
                                        stroke="none" fill="#fff" class="fill-color"></path>
                                </g>
                            </g>
                        </svg></span>
                    <span class="textLink">{{ $t('Trade') || 'Trade' }}</span>
                </router-link>
            </div>
            <!-- <div class=" nav-item">
                <router-link to="/" class="nav-link cursor-pointer">
                    <span class="position-relative mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.981" height="20.266" viewBox="0 0 18.981 20.266" class="non-active"><g id="trophy" transform="translate(-1.5 -0.5)"><path id="Path_31718" data-name="Path 31718" d="M5.211,6.78H4.569A2.569,2.569,0,0,1,2,4.211V1H5.211" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><path id="Path_31719" data-name="Path 31719" d="M25,6.78h.642a2.569,2.569,0,0,0,2.569-2.569V1H25" transform="translate(-8.23)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><line id="Line_1501" data-name="Line 1501" y1="4" transform="translate(11 12.571)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></line><path id="Path_31720" data-name="Path 31720" d="M12.78,13.2h0A5.78,5.78,0,0,1,7,7.422V1H18.559V7.422a5.78,5.78,0,0,1-5.78,5.78Z" transform="translate(-1.789)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><path id="Path_31721" data-name="Path 31721" d="M17.991,29.211H9A3.211,3.211,0,0,1,12.211,26H14.78A3.211,3.211,0,0,1,17.991,29.211Z" transform="translate(-2.505 -8.945)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path></g></svg>
                        <span class="iconLive pc"><span class="live"><svg xmlns="http://www.w3.org/2000/svg" width="24.441" height="11.052" viewBox="0 0 24.441 11.052"><g id="_1246264" data-name="1246264" transform="translate(8.061)"><path id="Path_34924" data-name="Path 34924" d="M.07,43.94c.02.667.767,1.2,1.682,1.2H22.823c.931,0,1.686-.55,1.686-1.228V35.449Zm0,0" transform="translate(-8.128 -34.089)" fill="#ff3051"></path><path id="Path_34925" data-name="Path 34925" d="M24.441,1.228C24.441.55,23.686,0,22.756,0H1.686C.755,0,0,.55,0,1.228v8.6c0,.009,0,.018,0,.027L24.441,1.36Zm0,0" transform="translate(-8.061)" fill="#ff4764"></path><g id="Group_21085" data-name="Group 21085" transform="translate(-1.217 2.985)"><path id="Path_34926" data-name="Path 34926" d="M59.16,76.383H56.7V72.274a.362.362,0,0,0-.7,0v4.383a.32.32,0,0,0,.351.274H59.16a.282.282,0,1,0,0-.548Zm0,0" transform="translate(-56 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34927" data-name="Path 34927" d="M331.16,72.548a.282.282,0,1,0,0-.548h-2.809a.32.32,0,0,0-.351.274v4.383a.32.32,0,0,0,.351.274h2.809a.282.282,0,1,0,0-.548H328.7V74.739h1.755a.282.282,0,1,0,0-.548H328.7V72.548Zm0,0" transform="translate(-316.063 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34928" data-name="Path 34928" d="M160.351,72a.32.32,0,0,0-.351.274v4.383a.362.362,0,0,0,.7,0V72.274A.32.32,0,0,0,160.351,72Zm0,0" transform="translate(-155.436 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34929" data-name="Path 34929" d="M204.326,72.007a.443.443,0,0,0-.269.007.315.315,0,0,0-.183.153L202.127,75.8l-1.45-3.622a.378.378,0,0,0-.441-.18c-.185.045-.288.2-.23.344l1.755,4.383a.35.35,0,0,0,.326.192h.01a.359.359,0,0,0,.329-.178l2.107-4.383a.219.219,0,0,0-.009-.21A.331.331,0,0,0,204.326,72.007Zm0,0" transform="translate(-193.67 -71.99)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path></g><circle id="Ellipse_2017" data-name="Ellipse 2017" cx="1.5" cy="1.5" r="1.5" transform="translate(-6.619 3.969)" fill="#fff" class="fill-color"></circle></g></svg></span></span>
                    </span>
                <span class="textLink">{{ $t('Challenge') || 'Challenge' }}</span>
                </router-link>
            </div> -->
            <div class=" nav-item">
                <router-link to="/user/affiliate/general" class="nav-link cursor-pointer">
                    <span class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="21" height="23" viewBox="0 0 21 23" class="non-active">
                            <defs>
                                <clipPath id="aff-clip-path">
                                    <rect width="21" height="23" fill="none"></rect>
                                </clipPath>
                            </defs>
                            <g id="aff" clip-path="url(#aff-clip-path)">
                                <g id="aff-2" data-name="aff" transform="translate(-0.1 0.5)">
                                    <line id="Line_1252" data-name="Line 1252" y1="3.29" x2="5.265"
                                        transform="translate(7.968 5.855)" fill="none" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                                        class="stroke-color"></line>
                                    <line id="Line_1253" data-name="Line 1253" x2="5.265" y2="3.29"
                                        transform="translate(7.968 12.855)" fill="none" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                                        class="stroke-color"></line>
                                    <circle id="Ellipse_1366" data-name="Ellipse 1366" cx="3.5" cy="3.5" r="3.5"
                                        transform="translate(13.1 0.5)" stroke-width="2" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"
                                        class="stroke-color"></circle>
                                    <circle id="Ellipse_1367" data-name="Ellipse 1367" cx="3.5" cy="3.5" r="3.5"
                                        transform="translate(13.1 14.5)" stroke-width="2" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"
                                        class="stroke-color"></circle>
                                    <circle id="Ellipse_1368" data-name="Ellipse 1368" cx="3.5" cy="3.5" r="3.5"
                                        transform="translate(1.1 7.5)" stroke-width="2" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color">
                                    </circle>
                                </g>
                            </g>
                        </svg></span>
                    <span class="textLink">{{ $t('Vip') || 'Vip' }}</span>
                </router-link>
            </div>
            <!--<div class=" nav-item">
                <router-link to="/" class="nav-link new cursor-pointer">
                    <span class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="21.597" height="28.337" viewBox="0 0 21.597 28.337" class="svgToken"><g id="Group_22170" data-name="Group 22170" transform="translate(-24.357 -313.104)"><g id="gift-box" transform="translate(9.771 313.104)"><g id="Group_22167" data-name="Group 22167" transform="translate(14.586 0)"><g id="Group_22163" data-name="Group 22163" transform="translate(6.033 0)"><g id="Group_22153" data-name="Group 22153" transform="translate(4.243)"><g id="Group_22152" data-name="Group 22152"><g id="Group_22151" data-name="Group 22151"><path id="Path_67112" data-name="Path 67112" d="M246.635,7.043a2.119,2.119,0,0,1-.728-.127,2.452,2.452,0,0,1-1.5-1.854,4.455,4.455,0,0,1,.206-2.459A4.455,4.455,0,0,1,246.041.586a2.452,2.452,0,0,1,2.337-.459c1.416.515,1.982,2.41,1.289,4.313a4.455,4.455,0,0,1-1.423,2.016A2.671,2.671,0,0,1,246.635,7.043Zm1.011-4.977a.674.674,0,0,0-.352.164,2.413,2.413,0,0,0-.735,1.08,2.413,2.413,0,0,0-.131,1.3c.055.245.149.352.186.366s.178-.008.378-.16a2.413,2.413,0,0,0,.735-1.08c.341-.938.091-1.612-.055-1.665a.077.077,0,0,0-.025,0Z" transform="translate(-244.323 0)" fill="#ff993a"></path></g></g></g><g id="Group_22155" data-name="Group 22155" transform="translate(4.243 1.164)"><g id="Group_22154" data-name="Group 22154"><path id="Path_67113" data-name="Path 67113" d="M249.666,29.306a4.455,4.455,0,0,1-1.423,2.016,2.672,2.672,0,0,1-1.609.586,2.119,2.119,0,0,1-.728-.127,2.452,2.452,0,0,1-1.495-1.854,4.084,4.084,0,0,1-.046-1.458,3.549,3.549,0,0,0,1.7.429q.169,0,.334-.016a1.907,1.907,0,0,0,.03.592c.055.245.149.352.186.365s.178-.008.378-.161a2.415,2.415,0,0,0,.734-1.08c.017-.047.032-.092.046-.137a3.57,3.57,0,0,0,1.79-2.432A4,4,0,0,1,249.666,29.306Z" transform="translate(-244.322 -26.03)" fill="#f97c15"></path></g></g><g id="Group_22158" data-name="Group 22158" transform="translate(0 0.007)"><g id="Group_22157" data-name="Group 22157"><g id="Group_22156" data-name="Group 22156"><path id="Path_67114" data-name="Path 67114" d="M151.182,6.619A4.455,4.455,0,0,1,149.759,4.6c-.693-1.9-.126-3.8,1.289-4.313a2.452,2.452,0,0,1,2.337.459,4.455,4.455,0,0,1,1.423,2.016,4.455,4.455,0,0,1,.206,2.459,2.452,2.452,0,0,1-1.5,1.854,2.119,2.119,0,0,1-.728.127,2.671,2.671,0,0,1-1.609-.586Zm.573-4.388c-.145.053-.4.728-.055,1.665a2.413,2.413,0,0,0,.735,1.08c.2.152.34.174.378.16s.131-.12.186-.366a2.413,2.413,0,0,0-.131-1.3,2.413,2.413,0,0,0-.735-1.08.674.674,0,0,0-.352-.164.078.078,0,0,0-.025,0Z" transform="translate(-149.464 -0.163)" fill="#ffaf40"></path></g></g></g><g id="Group_22160" data-name="Group 22160" transform="translate(0 0.007)"><g id="Group_22159" data-name="Group 22159"><path id="Path_67115" data-name="Path 67115" d="M154.093,1.45a3.883,3.883,0,0,0-.7-.7,2.452,2.452,0,0,0-2.337-.459,2.7,2.7,0,0,0-1.584,2.692,1.02,1.02,0,0,0,1.3.974l.02-.006a1.026,1.026,0,0,0,.745-.983c0-.429.135-.7.225-.736a.077.077,0,0,1,.025,0,.674.674,0,0,1,.352.164,1.817,1.817,0,0,1,.323.325,1.018,1.018,0,0,0,1.183.312l.019-.008a1.022,1.022,0,0,0,.429-1.573Z" transform="translate(-149.472 -0.164)" fill="#ffc751"></path></g></g><g id="Group_22162" data-name="Group 22162" transform="translate(0 1.307)"><g id="Group_22161" data-name="Group 22161"><path id="Path_67116" data-name="Path 67116" d="M149.534,30.058a3.88,3.88,0,0,0-.061.68,1.014,1.014,0,0,0,1.288.985l.031-.009a1.026,1.026,0,0,0,.746-.983,1.906,1.906,0,0,1,.023-.285,1.039,1.039,0,0,0-.149-.734l-.011-.018A1.024,1.024,0,0,0,149.534,30.058Z" transform="translate(-149.473 -29.225)" fill="#ffe059"></path></g></g></g><g id="Group_22166" data-name="Group 22166" transform="translate(0 4.602)"><g id="Group_22165" data-name="Group 22165" transform="translate(0.694 1.455)"><path id="Path_67117" data-name="Path 67117" d="M49.635,152.266H30.8a.684.684,0,0,1-.684-.684v-16.16H50.319v16.16A.684.684,0,0,1,49.635,152.266Z" transform="translate(-30.111 -135.422)" fill="#12adb5"></path><g id="Group_22164" data-name="Group 22164"><path id="Path_67118" data-name="Path 67118" d="M30.111,135.422H50.319v3.941H30.111Z" transform="translate(-30.111 -135.422)" fill="#0d8ba0"></path><path id="Path_67119" data-name="Path 67119" d="M50.318,135.42v16.16a.684.684,0,0,1-.684.684H30.794a.684.684,0,0,1-.684-.684V148.6A11.917,11.917,0,0,0,48.182,135.42Z" transform="translate(-30.11 -135.42)" fill="#0d8ba0"></path></g></g><path id="Path_67120" data-name="Path 67120" d="M35.5,107.127H15.27a.684.684,0,0,1-.684-.684v-2.864a.684.684,0,0,1,.684-.684H35.5a.684.684,0,0,1,.684.684v2.864A.684.684,0,0,1,35.5,107.127Z" transform="translate(-14.586 -102.894)" fill="#3cd3d3"></path><path id="Path_67121" data-name="Path 67121" d="M93.172,102.894H81.665a1.055,1.055,0,1,0,0,2.11H93.172a1.055,1.055,0,1,0,0-2.11Z" transform="translate(-77.657 -102.894)" fill="#57eae6"></path><path id="Path_67122" data-name="Path 67122" d="M116,102.894h-1.478a1.055,1.055,0,1,0,0,2.11H116a1.055,1.055,0,1,0,0-2.11Z" transform="translate(-109.047 -102.894)" fill="#a5f9f3"></path><path id="Path_67123" data-name="Path 67123" d="M207.45,135.42h4.343v16.845H207.45Z" transform="translate(-198.823 -133.965)" fill="#ffaf40"></path><path id="Path_67124" data-name="Path 67124" d="M207.454,135.422H211.8v3.941h-4.343Z" transform="translate(-198.827 -133.967)" fill="#ff993a"></path><path id="Path_67125" data-name="Path 67125" d="M204.816,102.894h4.579v4.233h-4.579Z" transform="translate(-196.307 -102.894)" fill="#ffc751"></path></g></g><g id="Group_22168" data-name="Group 22168" transform="translate(15.28 10.968)"><path id="Path_67126" data-name="Path 67126" d="M209.632,259.29v-5.518a1.089,1.089,0,1,0-2.178,0v5.518a1.089,1.089,0,0,0,2.178,0Z" transform="translate(-199.521 -252.348)" fill="#ffc751"></path><path id="Path_67127" data-name="Path 67127" d="M209.632,286.377V284.5a1.089,1.089,0,0,0-2.178,0v1.876a1.089,1.089,0,1,0,2.178,0Z" transform="translate(-199.521 -281.703)" fill="#ffe059"></path><path id="Path_67128" data-name="Path 67128" d="M32.288,249.5v-3.218a1.089,1.089,0,0,0-2.178,0V249.5a1.089,1.089,0,1,0,2.178,0Z" transform="translate(-30.11 -245.197)" fill="#3cd3d3"></path><path id="Path_67129" data-name="Path 67129" d="M32.288,268.683v-.48a1.089,1.089,0,0,0-2.178,0v.48a1.089,1.089,0,1,0,2.178,0Z" transform="translate(-30.11 -266.134)" fill="#57eae6"></path></g><path id="Path_67130" data-name="Path 67130" d="M204.816,102.894h4.579v2.116h-4.579Z" transform="translate(-181.721 -98.291)" fill="#ffe059"></path><path id="Path_67131" data-name="Path 67131" d="M211.793,442.87v3.092H207.45v-1.736A11.826,11.826,0,0,0,211.793,442.87Z" transform="translate(-184.237 -423.06)" fill="#ff993a"></path><path id="Path_67132" data-name="Path 67132" d="M323.927,290.88v9.206a.684.684,0,0,1-.684.684H316.53C321.116,299.555,323.275,295.67,323.927,290.88Z" transform="translate(-288.438 -277.869)" fill="#02718c"></path></g><g id="Group_22169" data-name="Group 22169" transform="translate(4.539 -74.461)"><g id="Group_22142" data-name="Group 22142" transform="translate(23.371 400.371)"><g id="Group_22067" data-name="Group 22067" transform="translate(0 0)"><g id="Group_4697" data-name="Group 4697" transform="translate(0 0)"><circle id="Ellipse_2225" data-name="Ellipse 2225" cx="7.5" cy="7.5" r="7.5" transform="translate(0.09 0.09)" fill="#0045ff"></circle></g></g><g id="_ffffffff" data-name="#ffffffff" transform="translate(1.739 1.701)"><path id="Path_67106" data-name="Path 67106" d="M72.45,31.2a5.884,5.884,0,0,1,4.449-1.58c.283.052.6-.006.837.192.086.535-.408.945-.867,1.1a7.376,7.376,0,0,0-.841.069,9.791,9.791,0,0,0-3.158.617c-.116.01-.272.051-.349-.063C72.421,31.456,72.467,31.315,72.45,31.2Z" transform="translate(-70.569 -29.608)" fill="#fff"></path><path id="Path_67107" data-name="Path 67107" d="M52.766,40.466c.132,0,.281-.045.4.035a4.8,4.8,0,0,1,.668.455.328.328,0,0,1,.026.393,3.962,3.962,0,0,1-2.026,2.034,4.89,4.89,0,0,1-1.24.334c-.3.021-.6,0-.9.012a7.935,7.935,0,0,0-4.825,2.1.491.491,0,0,1-.465.116c-.16-.114-.075-.34-.1-.506.031-.389-.064-.886.283-1.161a9.246,9.246,0,0,1,4-1.76c.585-.13,1.187-.1,1.776-.178a2.363,2.363,0,0,0,1.677-.707A3.235,3.235,0,0,0,52.766,40.466Z" transform="translate(-44.3 -39.728)" fill="#fff"></path><path id="Path_67108" data-name="Path 67108" d="M62.025,68.511c.086,0,.172,0,.259,0a3.486,3.486,0,0,1,.51.813.466.466,0,0,1-.064.521,6.555,6.555,0,0,1-4.853,2.675,5.333,5.333,0,0,0-.883.042,5.252,5.252,0,0,0-3.422,1.634c-.3.3-.506.676-.775,1-.109,0-.219-.006-.327-.009-.231-.367-.569-.759-.449-1.225a6.6,6.6,0,0,1,5.591-2.774,5.291,5.291,0,0,0,3.633-1.676C61.541,69.208,61.753,68.836,62.025,68.511Z" transform="translate(-51.48 -65.911)" fill="#fff"></path><path id="Path_67109" data-name="Path 67109" d="M87.378,114.239c.163-.037.4.033.374.239a4.209,4.209,0,0,1-.09,1.177.788.788,0,0,1-.344.386,9.292,9.292,0,0,1-4.551,1.754c-.425.012-.847.063-1.272.06a2.654,2.654,0,0,0-1.905,1.252c-.118.19-.19.4-.3.594a.538.538,0,0,1-.521-.065,2.07,2.07,0,0,1-.584-.449.9.9,0,0,1,.016-.361,4.011,4.011,0,0,1,1.776-1.881,4.629,4.629,0,0,1,1.144-.4c.327-.045.658-.013.986-.047a5.784,5.784,0,0,1,.672-.059,7.934,7.934,0,0,0,3.779-1.522C86.846,114.713,87.079,114.433,87.378,114.239Z" transform="translate(-75.905 -108.575)" fill="#fff"></path><path id="Path_67110" data-name="Path 67110" d="M115.543,178.879a10.423,10.423,0,0,0,3.489-.592,1.788,1.788,0,0,1,.482-.013c.082.153.122.371-.051.48a5.915,5.915,0,0,1-5.035,1.372c-.18-.083-.124-.313-.109-.471A1.345,1.345,0,0,1,115.543,178.879Z" transform="translate(-109.622 -168.331)" fill="#fff"></path></g></g></g><g id="Group_22272" data-name="Group 22272" transform="translate(-1492 -574.636)"><rect id="Rectangle_1" data-name="Rectangle 1" width="15" height="15" rx="7.5" transform="translate(1520 901.076)" fill="#3b52ff"></rect><g id="Group_23" data-name="Group 23" transform="translate(1523.464 904.522)"><g id="Screen_Shot_2021-06-17_at_23" data-name="Screen Shot 2021-06-17 at 23" transform="translate(0)"><g id="_e9374dff" data-name="#e9374dff"><path id="Path_2" data-name="Path 2" d="M82.547,71.5a.8.8,0,0,1,.884.347q1.653,2.848,3.29,5.7a.783.783,0,0,1-.552,1.151.775.775,0,0,1-.811-.369c-.662-1.13-1.307-2.27-1.971-3.4a.77.77,0,0,0-1.249,0c-.689,1.144-1.33,2.319-2.019,3.463a.789.789,0,0,1-1.411-.378c-.045-.512.4-.9.587-1.34.737-1.278,1.48-2.553,2.208-3.835C81.845,72.4,81.969,71.7,82.547,71.5Z" transform="translate(-78.705 -71.475)" fill="#fff"></path><path id="Path_3" data-name="Path 3" d="M206.286,275.638a.807.807,0,0,1,.887.413c.172.372.509.7.5,1.13a.806.806,0,0,1-.818.773c-.3,0-.6,0-.9,0a.822.822,0,0,1-.733-.8c.007-.379.291-.672.453-.995A.859.859,0,0,1,206.286,275.638Z" transform="translate(-202.399 -271.051)" fill="#fff"></path></g></g></g></g></g></svg></span>
                <span class="textLink">{{ $t('Token Airdrop') || 'Token Airdrop' }}</span>
                </router-link>
            </div> -->
            <div class=" nav-item">
                <router-link to="/user/balance" class="nav-link cursor-pointer">
                    <span class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="19.815" height="16.846"
                            viewBox="0 0 19.815 16.846" class="non-active iconWallet">
                            <g id="_000000ff" data-name="#000000ff" transform="translate(-42.663 -106.619)">
                                <path id="Path_30756" data-name="Path 30756"
                                    d="M45.072,106.675a3.344,3.344,0,0,1,.674-.054H58.933a5.487,5.487,0,0,1,1.171.061,2.972,2.972,0,0,1,2.374,2.926q0,5.458,0,10.916a2.985,2.985,0,0,1-2.939,2.94H46.391a5.837,5.837,0,0,1-1.532-.1,3,3,0,0,1-2.11-2.16,3.184,3.184,0,0,1-.085-.815q0-5.389,0-10.777a2.946,2.946,0,0,1,.652-1.866,2.985,2.985,0,0,1,1.756-1.066m-.426,2.89q0,5.454,0,10.908a1,1,0,0,0,1.007,1.008H59.49a1,1,0,0,0,1-.96c0-.671.008-1.343,0-2.014-1.494,0-2.988,0-4.482,0a3.467,3.467,0,0,1,.048-6.934H60.5q0-1,0-2.01a.99.99,0,0,0-.957-.961q-6.944,0-13.887,0a1,1,0,0,0-1,.963m9.934,5.193a1.5,1.5,0,0,0,.825,1.627,2.538,2.538,0,0,0,1.159.143c1.311,0,2.622,0,3.933,0,0-.99,0-1.98,0-2.97-1.5,0-2.994,0-4.491,0A1.492,1.492,0,0,0,54.58,114.758Z"
                                    fill="#fff" class="fill-color"></path>
                            </g>
                        </svg></span>
                    <span class="textLink">{{ $t('Wallet') || 'Wallet' }}</span>
                </router-link>
            </div>
            <!--<div class=" nav-item">
                <router-link to="/user/exchange" class="nav-link cursor-pointer">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.904" height="15.292" viewBox="0 0 18.904 15.292" class="non-active"><g id="shuffle" transform="translate(0 -18.343)"><path id="Path_30758" data-name="Path 30758" d="M6.468,42.882l.876,1.751.881-1.761-.347-.695A3.917,3.917,0,0,0,4.354,40H0v1.575H4.354a2.35,2.35,0,0,1,2.114,1.306Z" transform="translate(0 -19.524)" fill="#fff" class="fill-color"></path> <path id="Path_30759" data-name="Path 30759" d="M99.678,105.869l-1.114,1.114L99.582,108h-3.24a2.35,2.35,0,0,1-2.114-1.306l-.876-1.751-.881,1.761.347.695a3.917,3.917,0,0,0,3.523,2.177h3.24L98.564,110.6l1.114,1.114,2.363-2.363a.788.788,0,0,0,0-1.114Z" transform="translate(-83.367 -78.074)" fill="#fff" class="fill-color"></path> <path id="Path_30760" data-name="Path 30760" d="M18.674,20.706l-2.363-2.363L15.2,19.457l1.018,1.018h-3.24a3.917,3.917,0,0,0-3.523,2.177L6.468,28.621a2.35,2.35,0,0,1-2.114,1.306H0V31.5H4.354a3.917,3.917,0,0,0,3.523-2.177l2.984-5.969a2.35,2.35,0,0,1,2.114-1.306h3.24L15.2,23.069l1.114,1.114,2.363-2.363a.788.788,0,0,0,0-1.114Z" transform="translate(0)" fill="#fff" class="fill-color"></path><path id="Path_30762" data-name="Path 30762" d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z" fill="#fff" class="fill-color"></path></g></svg>
                    </span>
                    <span class="textLink">{{ $t('Exchange') || 'Exchange' }}</span>
                </router-link>
            </div> -->
            <div class=" nav-item">
                <router-link to="/user/trade/history" class="nav-link cursor-pointer">
                    <span class="mb-2"><svg id="speedometer" xmlns="http://www.w3.org/2000/svg" width="17.809"
                            height="17.809" viewBox="0 0 17.809 17.809" class="non-active">
                            <path id="Path_30761" data-name="Path 30761"
                                d="M9.995,9.995a2.226,2.226,0,0,0,0-3.149C9.125,5.978,1,1,1,1S5.978,9.125,6.846,9.995A2.226,2.226,0,0,0,9.995,9.995Z"
                                transform="translate(0.484 0.484)" fill="#fff" class="fill-color"></path>
                            <path id="Path_30762" data-name="Path 30762"
                                d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z"
                                fill="#fff" class="fill-color"></path>
                        </svg></span>
                    <span class="textLink">{{ $t('Dashboard') || 'Dashboard' }}</span>
                </router-link>
            </div>

            <div class=" nav-item">
                <a href.prevent @click.stop="viewHisOrder()" class="nav-link cursor-pointer">
                    <span class="mb-2">
                        <span class="noticeCmdN">{{ blObj.Notify }}</span>
                        <svg style="color: #fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-terminal">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                        </svg>
                    </span>
                    <span class="textLink">{{ $t('Command') || 'Command' }}</span>

                </a>
            </div>

            <div class=" nav-item">
                <a href="https://t.me/MrRogerBCR" target="_blank" class="nav-link cursor-pointer">
                    <span class="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path style="fill: #fff"
                                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                        </svg>
                    </span>
                    <span class="textLink">{{ $t('Hỗ trợ') || 'Support' }}</span>
                </a>
            </div>

            <div class="mobileA nav-item">
                <a href.prevent @click="popupActiveCaiDat = true" class="nav-link cursor-pointer">
                    <span class="mb-2">
                        <feather-icon style="color: #fff;" icon="SettingsIcon" svgClasses="w-5 h-5"
                            class="block text-center h-5 " /></span>
                    <span class="textLink">{{ $t('Settings') || 'Settings' }}</span>
                </a>
            </div>
            <div class="mobileA nav-item">
                <a href.prevent @click.stop="viewHoSo()" class="nav-link cursor-pointer">
                    <span class="mb-2">
                        <feather-icon style="color: #fff;" icon="UserIcon" svgClasses="w-5 h-5"
                            class="block text-center h-5" />
                    </span>
                    <span class="textLink">{{ $t('Profile') || 'Profile' }}</span>
                </a>
            </div>

        </div>
        <div class="bottomSidebar">
            <div class=" nav-item">
                <a href.prevent @click="logOut()" class="nav-link cursor-pointer">
                    <span class="mb-2"><feather-icon style="color: #fff;" icon="LogOutIcon" svgClasses="w-5 h-5"
                            class="block text-center h-5" /></span>
                    <span class="textLink">{{ $t('Logout') || 'Logout' }}</span>
                </a>
            </div>
        </div>

        <vs-popup class="setting" title="Cài Đặt" :active.sync="popupActiveCaiDat">
            <div class="wrap flex flex-col relative">
                <div class="line mb-3 line-language-pc line-pc flex align-center">
                    <div class="type flex-1 flex align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                            <g id="globe" transform="translate(-0.324 -0.324)" opacity="0.5">
                                <line id="Line_1450" data-name="Line 1450" y2="18" transform="translate(9.824 0.824)"
                                    fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                                <line id="Line_1451" data-name="Line 1451" x2="18" transform="translate(0.824 9.824)"
                                    fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                                <ellipse id="Ellipse_1795" data-name="Ellipse 1795" cx="5.042" cy="8.824" rx="5.042"
                                    ry="8.824" transform="translate(4.782 1)" fill="none" stroke="#fff"
                                    stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></ellipse>
                                <line id="Line_1452" data-name="Line 1452" x2="14.931" transform="translate(2.359 5.118)"
                                    fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                                <line id="Line_1453" data-name="Line 1453" x2="14.931" transform="translate(2.359 14.53)"
                                    fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                                <circle id="Ellipse_1796" data-name="Ellipse 1796" cx="9" cy="9" r="9"
                                    transform="translate(0.824 0.824)" fill="none" stroke="#fff" stroke-linecap="square"
                                    stroke-miterlimit="10" stroke-width="1"></circle>
                            </g>
                        </svg> <span class="white">Ngôn ngữ</span>
                    </div>
                    <div class="control flex-1 flex align-center">
                        <i18n />
                    </div>
                </div>
                <div class="line mb-3 flex align-center">
                    <div class="type flex-1 flex align-center">
                        <svg version="1.1" width="19" height="19" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 19"
                            xml:space="preserve">
                            <g id="sound" transform="translate(0.5 -0.5)">
                                <g id="Path_30736" fill="#887F9E">
                                    <path
                                        d="M13.7,19.3c-0.2,0-0.4-0.1-0.6-0.2l-6.9-4.6H0.5c-0.6,0-1-0.4-1-1V6.3c0-0.6,0.4-1,1-1h5.7l6.9-4.6c0.3-0.2,0.7-0.2,1,0c0.3,0.2,0.5,0.5,0.5,0.9v16.8c0,0.4-0.2,0.7-0.5,0.9C14,19.3,13.9,19.3,13.7,19.3z M1.5,12.5h5c0.2,0,0.4,0.1,0.6,0.2l5.6,3.8V3.4L7.1,7.1C6.9,7.2,6.7,7.3,6.5,7.3h-5V12.5z"
                                        class="st0"></path>
                                </g>
                                <g id="Path_30737" fill="#887F9E">
                                    <path
                                        d="M16.8,15.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c1.9-2,1.9-5.1-0.1-7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c2.8,2.7,2.8,7.1,0.1,9.9c0,0-0.1,0.1-0.1,0.1C17.2,15,17,15.1,16.8,15.1z"
                                        class="st0">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span class="white">Âm thanh</span>
                    </div>
                    <div class="control flex-1 flex align-center">
                        <div class="toggleButtonWrapper flex">
                            <span class="white uppercase">Off</span>
                            <vs-switch color="success" style="border: 1px solid #4e4e4e;min-width: 60px;"
                                v-model="switchAmThanh" @change="OnOffSound" />
                            <span class="white uppercase">On</span>
                        </div>
                    </div>
                </div>
            </div>
        </vs-popup>

        <ho-so-user-info :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
        <his-order-bet :isSidebarActive="addSidebarHisOrder" @closeSidebar="toggleDataSidebarHisOrder" />

    </div>
</template>

<script>

import getData from '@/pages/trade/navbar/components/data.json';
import HoSoUserInfo from '@/pages/trade/slidebar/HoSoUser';
import I18n from "./i18n";
import HisOrderBet from '@/pages/trade/slidebar/HisOrderBet.vue';

export default {
    components: {
        I18n,
        HoSoUserInfo,
        HisOrderBet
    },
    data() {
        return {
            blObj: getData,
            switchAmThanh: true,
            popupActiveCaiDat: false,
            addSidebarHisOrder: false,
            // Data Sidebar
            addNewDataSidebar: false,
            sidebarData: {},
        }
    },

    methods: {
        logOut() {
            localStorage.removeItem('tokenUser');
            localStorage.removeItem('INFO');
            // xóa notice = 0
            getData.Notify = 0;
            localStorage.removeItem('stateOpen');
            // This is just for demo Purpose. If user clicks on logout -> redirect
            //this.$router.push('/login').catch(() => {})   
            window.location.href = window.location.origin + '/login'
        },

        viewHoSo() {
            this.toggleDataSidebar(true)
        },

        toggleDataSidebar(val = false) {
            this.addNewDataSidebar = val
        },

        OnOffSound() {
            if (this.switchAmThanh) {
                localStorage.setItem('SOUND', true);
            } else {
                localStorage.setItem('SOUND', false);
            }
        },

        viewHisOrder() {
            this.toggleDataSidebarHisOrder(true)
        },

        toggleDataSidebarHisOrder(val = false) {
            this.addSidebarHisOrder = val
        },
    },

}
</script>

<style scoped>
.noticeCmdN {
    position: absolute;
    margin-left: 15px;
    margin-top: -5px;
    border-radius: 50%;
    background: #e22a67;
    width: 20px;
    height: 20px;
    color: #fff;
}

@media screen and (min-width: 600px) {
    .mobileA {
        display: none;
    }
}


.nav-item .nav-link {
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
}

.v-nav-menu .feather-icon {
    margin-right: 0;
}

.v-nav-menu a {
    padding: 10px;
}

.v-nav-menu .router-link-active .textLink {
    background: transparent;
    box-shadow: none;
    color: #fa2843 !important;
}

.v-nav-menu .router-link-active .fill-color {
    fill: #fa2843
}

.v-nav-menu .router-link-active .stroke-color {
    stroke: #fa2843
}

#leftSidebar {
    position: fixed !important;
    height: calc(100% - 80px);
    width: 105px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    z-index: 99999999;
}

@media screen and (max-width: 689px) {
    #leftSidebar {
        zoom: .9;
    }
}

#leftSidebar .nav-link {
    position: relative;
}

#leftSidebar .nav-link.new:before {
    position: absolute;
    top: 0;
    right: 15px;
    background: url('~@/assets/images/sky/icon-new.svg');
    display: block;
    overflow: hidden;
    width: 25px;
    height: 21px;
    content: "";
    background-size: 100% 100%;
}

.iconLive {
    position: absolute;
    top: 18px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -ms-flex-item-align: center;
    align-self: center;
}

.textLink {
    color: #fff;
    text-transform: unset;
    word-wrap: break-word;
    /* IE 5.5-7 */
    white-space: -moz-pre-wrap;
    /* Firefox 1.0-2.0 */
    white-space: pre-wrap;
    /* current browsers */
}

.topSidebar {
    height: calc(100% - 65px);
    width: 105px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    z-index: 99;
}
</style>
<style>
.v-nav-menu a span {
    font-size: 13px !important;
}

.v-nav-menu a .truncate {
    white-space: initial !important;
}
</style>