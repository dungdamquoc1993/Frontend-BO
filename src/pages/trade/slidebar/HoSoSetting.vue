<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Đức Nguyễn
  Author URL: 
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <feather-icon icon="ArrowLeftIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <!-- <vs-divider class="mb-0"></vs-divider> -->

    <VuePerfectScrollbar style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px);" class="scroll-area--data-list-add-new">

      <div class="p-6">
            <h4>Xác minh tài khoản</h4>
           <!-- NICKNAME -->
           <div class="vx-row">
                <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" backButtonText="Quay lại" nextButtonText="Tiếp" :finishButtonText="`${!verify ? 'Xong' : 'Thay đổi'}`" @on-complete="formSubmitted">
                  <tab-content class="mb-5">
                      <!-- tab 1 content -->
                      <div class="vx-row">
                          <p class="d-flex w-full">Thông tin cá nhân</p>
                          <div class="vx-col md:w-1/2 w-full mt-5">
                              <vs-input label="Họ" v-model="first_n" class="w-full" />
                          </div>
                          <div class="vx-col md:w-1/2 w-full mt-5">
                              <vs-input label="Tên" v-model="last_n"  class="w-full" />
                          </div>
                          <div class="vx-col w-full mt-5">
                              <vs-input label="Số CMND / Hộ chiếu" v-model="smcnn" class="w-full" />
                          </div>
                          <div class="vx-col w-full mt-5">
                              <vs-select v-model="country" class="w-full select-large" label="Quốc gia">
                                  <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                              </vs-select>
                          </div>
                      </div>
                  </tab-content>

                  <!-- tab 2 content -->
                  <tab-content class="mb-5 upl">
                      <p class="d-flex w-full">Xác thực danh tính</p>
                      <small>1. Hãy đảm bảo rằng ảnh chụp toàn vẹn và rõ ràng, có định dạng JPG, PNG, JPEG.</small>
                      <small>2. Hãy chụp ảnh Chứng minh thư/Hộ chiếu của bạn. Ảnh cần sáng và rõ ràng, không bị mất góc.</small>
                      <div class="vx-row m-0 mb-3">
                        <div class="w-full pt-2 pb-2">
                            <label>-Mặt trước Chứng minh thư/Hộ chiếu</label>
                        </div>
                        <div class="w-1/2 mb-2">
                            <label class="sample cursor-pointer" :style="`background: url(${urlPassFront}) center center no-repeat;`">
                                <span class="iconUpload"></span>
                                <input type="file" ref="imgFront" @change="successUploadFront($event.target.files)" class="hidden" accept="image/png, image/jpg, image/jpeg">
                            </label>
                        </div>
                        <div class="w-1/2 mb-2">
                            <div class="front sample"></div>
                        </div>
                        <div class="w-1/2 mb-2">
                            <!---->
                        </div>
                    </div>
                    <div class="vx-row m-0 mb-3">
                        <div class="w-full pt-2 pb-2">
                            <label>-Mặt sau Chứng minh thư/Hộ chiếu</label>
                        </div>
                        <div class="w-1/2 mb-2">
                            <label class="sample cursor-pointer" :style="`background: url(${urlPassBack}) center center no-repeat;`">
                                <span class="iconUpload"></span>
                                <input type="file" ref="imgBack" @change="successUploadBack($event.target.files)" class="hidden" accept="image/png, image/jpg, image/jpeg">
                            </label>
                        </div>
                        <div class="w-1/2 mb-2">
                            <div class="back sample"></div>
                        </div>
                        <div class="w-1/2 mb-2">
                            <!---->
                        </div> 
                    </div>
                  </tab-content>

                  <!-- tab 3 content -->
                  <tab-content class="mb-5">
                      <div class="vx-row">
                          <p class="d-flex w-full">Xem xét</p>
                          <div class="vx-col w-full">
                              <p class="text-center" v-if="!verify">Nhấn Xong để hoàn thành. Chúng tôi sẽ xem xét thông tin của bạn!</p>
                              <p class="text-center" v-if="verify">Tài khoản cả bạn đã được xác minh!</p>
                          </div>
                      </div>
                  </tab-content>
              </form-wizard>
            </div>
            
      </div>
       
        
    </VuePerfectScrollbar>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AuthenticationService from '@/services/AuthenticationService'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import getData from '@/pages/trade/navbar/components/data.json'
import SETTINGS from '../../../../settings.json'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    // data: {
    //   type: Object,
    //   default: () => {},
    // }
  },
  watch: {
    // isSidebarActive(val) {
    //   if(!val) return
    //   if(Object.entries(this.data).length === 0) {
    //     this.$validator.reset()
    //   }else {
    //     let { phone, nickName, first_name, last_name } = JSON.parse(JSON.stringify(this.data))
    //     this.dataPhone = phone
    //     this.dataNick = nickName
    //     this.dataFN = first_name
    //     this.dataLN = last_name
    //   }
    //   // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    // }
  },
  data() {
    return {
        dm: SETTINGS.BASE_URL,
        filesFront: '',
        filesBack: '',
        smcnn: '',
        first_n: '',
        last_n: '',
        verify: false,
        disUpAvatar: true,
        dataFN: '',
        dataLN: '',
        dataNick: '',
        dataPhone: '',
        settings: { // perfectscrollbar settings
            maxScrollbarLength: 60,
            wheelSpeed: .60,
        },
        firstName: "",
        lastName: "",
        email: "",
        country: 999,
        proposalTitle: "",
        jobTitle: "",
        textarea: "",
        eventName: "",
        eventLocation: "san-francisco",
        status: "plannning",
        cityOptions: [
          {text: "Chọn quốc gia", value:999},
          {text: "Afghanistan", value:1},
          {text: "Albania", value:2},
          {text: "Algeria", value:3},
          {text: "Andorra", value:4},
          {text: "Angola", value:5},
          {text: "Anguilla", value:6},
          {text: "Antigua and Barbuda", value:7},
          {text: "Argentina", value:8},
          {text: "Armenia", value:9},
          {text: "Aruba", value:10},
          {text: "Australia", value:11},
          {text: "Austria", value:12},
          {text: "Azerbaijan", value:13},
          {text: "Bahamas", value:14},
          {text: "Bahrain", value:17},
          {text: "Bangladesh", value:16},
          {text: "Barbados", value:17},
          {text: "Belarus", value:18},
          {text: "Belgium", value:19},
          {text: "Belize", value:20},
          {text: "Benin", value:21},
          {text: "Bermuda", value:22},
          {text: "Bhutan", value:23},
          {text: "Bosnia and Herzegovina", value:24},
          {text: "Botswana", value:25},
          {text: "Bouvet Island", value:26},
          {text: "Brazil", value:27},
          {text: "British Indian Ocean Territory", value:28},
          {text: "Brunei Darussalam", value:29},
          {text: "Bulgaria", value:30},
          {text: "Burkina Faso", value:31},
          {text: "Burundi", value:32},
          {text: "Cambodia", value:33},
          {text: "Cameroon", value:34},
          {text: "Canada", value:35},
          {text: "Cape Verde", value:36},
          {text: "Cayman Islands", value:37},
          {text: "Central African Republic", value:38},
          {text: "Chad", value:39},
          {text: "Chile", value:40},
          {text: "China", value:41},
          {text: "Christmas Island", value:42},
          {text: "Cocos (Keeling) Islands", value:43},
          {text: "Colombia", value:44},
          {text: "Comoros", value:45},
          {text: "Congo", value:46},
          {text: "Cook Islands", value:47},
          {text: "Costa Rica", value:48},
          {text: "Croatia", value:49},
          {text: "Cuba", value:50},
          {text: "Cyprus", value:51},
          {text: "Czech Republic", value:52},
          {text: "Denmark", value:53},
          {text: "Djibouti", value:54},
          {text: "Dominica", value:55},
          {text: "Dominican Republic", value:56},
          {text: "Ecuador", value:57},
          {text: "Egypt", value:58},
          {text: "El Salvador", value:59},
          {text: "Equatorial Guinea", value:60},
          {text: "Eritrea", value:61},
          {text: "Estonia", value:62},
          {text: "Ethiopia", value:63},
          {text: "Falkland Islands (Malvinas)", value:64},
          {text: "Faroe Islands", value:65},
          {text: "Fiji", value:66},
          {text: "Finland", value:67},
          {text: "France", value:68},
          {text: "French Guiana", value:69},
          {text: "French Polynesia", value:70},
          {text: "Gabon", value:71},
          {text: "Gambia", value:72},
          {text: "Georgia", value:73},
          {text: "Germany", value:74},
          {text: "Ghana", value:75},
          {text: "Gibraltar", value:76},
          {text: "Greece", value:77},
          {text: "Greenland", value:78},
          {text: "Grenada", value:79},
          {text: "Guadeloupe", value:80},
          {text: "Guam", value:81},
          {text: "Guatemala", value:82},
          {text: "Guernsey", value:83},
          {text: "Guinea", value:84},
          {text: "Guinea-Bissau", value:85},
          {text: "Guyana", value:86},
          {text: "Haiti", value:87},
          {text: "Heard Island and McDonald Islands", value:88},
          {text: "Holy See (Vatican City State)", value:89},
          {text: "Honduras", value:90},
          {text: "Hong Kong", value:91},
          {text: "Hungary", value:92},
          {text: "Iceland", value:93},
          {text: "India", value:94},
          {text: "Indonesia", value:95},
          {text: "Iran", value:96},
          {text: "Iraq", value:97},
          {text: "Ireland", value:98},
          {text: "Isle of Man", value:99},
          {text: "Israel", value:100},
          {text: "Italy", value:101},
          {text: "Jamaica", value:102},
          {text: "Japan", value:103},
          {text: "Jersey", value:104},
          {text: "Jordan", value:105},
          {text: "Kazakhstan", value:106},
          {text: "Kenya", value:107},
          {text: "Kiribati", value:108},
          {text: "Kuwait", value:109},
          {text: "Kyrgyzstan", value:110},
          {text: "Lao People's Democratic Republic", value:111},
          {text: "Latvia", value:112},
          {text: "Lebanon", value:113},
          {text: "Lesotho", value:114},
          {text: "Liberia", value:115},
          {text: "Liechtenstein", value:116},
          {text: "Lithuania", value:117},
          {text: "Luxembourg", value:118},
          {text: "Macao", value:119},
          {text: "Madagascar", value:120},
          {text: "Malawi", value:121},
          {text: "Malaysia", value:122},
          {text: "Maldives", value:123},
          {text: "Mali", value:124},
          {text: "Malta", value:125},
          {text: "Marshall Islands", value:126},
          {text: "Martinique", value:127},
          {text: "Mauritania", value:128},
          {text: "Mauritius", value:129},
          {text: "Mayotte", value:130},
          {text: "Mexico", value:131},
          {text: "Monaco", value:132},
          {text: "Mongolia", value:133},
          {text: "Montenegro", value:134},
          {text: "Sarabun", value:135},
          {text: "Morocco", value:136},
          {text: "Mozambique", value:137},
          {text: "Myanmar", value:138},
          {text: "Namibia", value:139},
          {text: "Nauru", value:140},
          {text: "Nepal", value:141},
          {text: "Netherlands", value:142},
          {text: "New Caledonia", value:143},
          {text: "New Zealand", value:144},
          {text: "Nicaragua", value:145},
          {text: "Niger", value:146},
          {text: "Nigeria", value:147},
          {text: "Niue", value:148},
          {text: "Norfolk Island", value:149},
          {text: "Northern Mariana Islands", value:150},
          {text: "Norway", value:151},
          {text: "North Korea", value:152},
          {text: "Oman", value:153},
          {text: "Pakistan", value:154},
          {text: "Palau", value:155},
          {text: "Panama", value:156},
          {text: "Papua New Guinea", value:157},
          {text: "Paraguay", value:158},
          {text: "Peru", value:159},
          {text: "Philippines", value:160},
          {text: "Pitcairn", value:161},
          {text: "Poland", value:162},
          {text: "Portugal", value:163},
          {text: "Puerto Rico", value:164},
          {text: "Qatar", value:165},
          {text: "Réunion", value:166},
          {text: "Romania", value:167},
          {text: "Rwanda", value:168},
          {text: "Saint Kitts and Nevis", value:169},
          {text: "Saint Lucia", value:170},
          {text: "Saint Pierre and Miquelon", value:171},
          {text: "Saint Vincent and the Grenadines", value:172},
          {text: "Samoa", value:173},
          {text: "San Marino", value:174},
          {text: "Sao Tome and Principe", value:175},
          {text: "Saudi Arabia", value:176},
          {text: "Senegal", value:177},
          {text: "Serbia", value:178},
          {text: "Seychelles", value:179},
          {text: "Sierra Leone", value:180},
          {text: "Singapore", value:181},
          {text: "Slovakia", value:182},
          {text: "Slovenia", value:183},
          {text: "Solomon Islands", value:184},
          {text: "Somalia", value:185},
          {text: "South Africa", value:186},
          {text: "South Georgia and the South Sandwich Islands", value:187},
          {text: "South Korea", value:188},
          {text: "Spain", value:189},
          {text: "Sri Lanka", value:190},
          {text: "Sudan", value:191},
          {text: "Suriname", value:192},
          {text: "Swaziland", value:193},
          {text: "Sweden", value:194},
          {text: "Switzerland", value:195},
          {text: "Syrian Arab Republic", value:196},
          {text: "Taiwan", value:197},
          {text: "Tajikistan", value:198},
          {text: "Thailand", value:199},
          {text: "Timor-Leste", value:200},
          {text: "Togo", value:201},
          {text: "Tokelau", value:202},
          {text: "Tonga", value:203},
          {text: "Trinidad and Tobago", value:204},
          {text: "Tunisia", value:205},
          {text: "Turkey", value:206},
          {text: "Turkmenistan", value:207},
          {text: "Turks and Caicos Islands", value:208},
          {text: "Tuvalu", value:209},
          {text: "Uganda", value:210},
          {text: "Ukraine", value:211},
          {text: "United Arab Emirates", value:212},
          {text: "United Kingdom", value:213},
          {text: "United States", value:214},
          {text: "United States Minor Outlying Islands", value:215},
          {text: "Uruguay", value:216},
          {text: "Uzbekistan", value:217},
          {text: "Vanuatu", value:218},
          {text: "Viet Nam", value:219},
          {text: "Wallis and Futuna", value:220},
          {text: "Yemen", value:221},
          {text: "Zambia", value:222},
          {text: "Zimbabwe", value:223},
        ],

        urlPassFront: null,
        urlPassBack: null,

        forFront: null,
        forBack: null
    }
      
  },

  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
  },
  methods: {
      successUploadFront(file){

        //this.url_avatar = URL.createObjectURL(file[0]);
        var reader = new FileReader();
        reader.onload = (e) => {
            this.urlPassFront = e.target.result             
        };
        reader.readAsDataURL(file[0])
        
        const formData = new FormData();
        formData.append("image", file[0])
        formData.append("nick", getData.displayName)

        this.forFront = formData
        
        //this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
      },

      successUploadBack(file){
        var reader = new FileReader();
        reader.onload = (e) => {
            this.urlPassBack = e.target.result             
        };
        reader.readAsDataURL(file[0])
        
        const formData = new FormData();
        formData.append("image", file[0])
        formData.append("nick", getData.displayName)

        this.forBack = formData
        
        
      },
      

      formSubmitted() {

        if(this.first_n == '' || this.last_n == '' || this.country == 999 || this.smcnn == '' || this.forFront == null || this.forBack == null){
            return this.$vs.notify({
                  text: 'Các trường không được rỗng.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  position:'top-right',
                  color: 'danger'
              });
        }

        let obj = {
            email: getData.email,
            first_name: this.first_n,
            last_name: this.last_n,
            country: this.country,
            cmnd: this.smcnn
        }
        

        AuthenticationService.uploadPassportFront(this.forFront)
        AuthenticationService.uploadPassportBack(this.forBack)

        AuthenticationService.updateXacMinhTK(obj)
        .then((res) => {
          if(res.data.success){

            this.forBack = null
            this.forFront = null
            
            getData.verify = 2
            this.isSidebarActiveLocal = false

            return this.$vs.notify({
                  text: 'Đã cập nhật thành công.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  position:'top-right',
                  color: 'success'
              });
          }else{
            return this.$vs.notify({
                  text: 'Cập nhật thất bại.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  position:'top-right',
                  color: 'danger'
              });
          }
        })
      },
      openLoadingContained(){
        this.disUpAvatar = false
        this.$vs.loading({
            background: this.backgroundLoading,
            color: this.colorLoading,
            container: "#button-with-loading",
            scale: 0.45
        })
        setTimeout( ()=> {
            this.disUpAvatar = true
            this.$vs.loading.close("#button-with-loading > .con-vs-loading")
        }, 3000);
    },
 
    submitDataUpdateMoney(){
        const obj = {
            id: this.dataId,
            money_btc: this.addDataMoneyBTC,
            money_eth: this.addDataMoneyETH,
            money_usdt: this.addDataMoneyETH, 
            money_vn:  this.addDataMoneyVN,
          }
        AuthenticationService.updatePriceMember(obj)
        .then((resp) => {
            if(resp.data.success){
              return this.$vs.notify({
                  text:'Đã cộng tiền thành công cho '+ this.dataNick,
                  color:'success',
                  iconPack: 'feather',
                  position:'top-right',
                  icon:'icon-check'});
              }else{
                if(!resp.data.l){
                  return this.$vs.notify({
                    text: 'Thời gian đăng nhập đã hết, vui lòng đăng nhập lại để sử dụng',
                    color:'danger',
                    iconPack: 'feather',
                    position:'top-right',
                    icon:'icon-alert-circle'});
                }
                return this.$vs.notify({
                  text: resp.data.message,
                  color:'danger',
                  iconPack: 'feather',
                  position:'top-right',
                  icon:'icon-alert-circle'});
              }
        })
    },
    submitDataUpdateUser() {
      this.$validator.validateAll().then(result => {
        if (result) {
            const obj = {
              id: this.dataId,
              nick_name: this.dataNick,
              first_name: this.dataFirstName,
              last_name: this.dataLastName,
              email: this.dataEmail,
              super_user: this.dataPermission
            }
            if(this.dataPassword != ''){
              obj['password'] = this.dataPassword
            }
            // thêm mới tài khoản
            if(Object.entries(this.data).length == 0){
                AuthenticationService.checkEmail(this.dataEmail)
                .then((resp) => {
                  if(resp.data.success){
                      return this.$vs.notify({
                        text: 'Email này đã tồn tại',
                        color:'danger',
                        iconPack: 'feather',
                        position:'top-right',
                        icon:'icon-alert-circle'});
                  }else{
                     AuthenticationService.createUser(obj)
                        .then((resp) => {
                          if(resp.data.success){
                            return this.$vs.notify({
                                title: this.dataEmail,
                                text:'Bạn đã tạo thành công',
                                color:'success',
                                iconPack: 'feather',
                                position:'top-right',
                                icon:'icon-check'});
                            }else{
                              return this.$vs.notify({
                                text: resp.data.message,
                                color:'danger',
                                iconPack: 'feather',
                                position:'top-right',
                                icon:'icon-alert-circle'});
                            }
                      })
                  }
                });
               
            }else{ // cập nhật tài khoản
                AuthenticationService.updateMember(obj)
                .then((resp) => {
                  if(resp.data.success){
                    return this.$vs.notify({
                        text:'Đã cập nhập thông tin thành công cho '+ this.dataNick,
                        color:'success',
                        iconPack: 'feather',
                        position:'top-right',
                        icon:'icon-check'});
                    }else{
                      return this.$vs.notify({
                        text: resp.data.message,
                        color:'danger',
                        iconPack: 'feather',
                        position:'top-right',
                        icon:'icon-alert-circle'});
                    }
              })
            }
            
        }
          
      })
      
    //   this.$validator.validateAll().then(result => {
    //       if (result) {
    //         const obj = {
    //           id: this.dataId,
    //           name: this.dataName,
    //           img: this.dataImg,
    //           category: this.dataCategory,
    //           order_status: this.dataOrder_status,
    //           price: this.dataPrice
    //         }

    //         if(this.dataId !== null && this.dataId >= 0) {
    //           this.$store.dispatch("dataList/updateItem", obj).catch(err => { console.error(err) })
    //         }else{
    //           delete obj.id
    //           obj.popularity = 0
    //           this.$store.dispatch("dataList/addItem", obj).catch(err => { console.error(err) })
    //         }

    //         this.$emit('closeSidebar')
    //         this.initValues()
    //       }
    //   })
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  },
  created() {

    this.first_n = getData.first_name
    this.last_n = getData.last_name

    this.verify = getData.verify

    this.country = getData.country
    this.smcnn = getData.so_cmnd

  },
  components: {
    VuePerfectScrollbar,
    FormWizard,
    TabContent
  }
}
</script>

<style scoped>
.upl .sample {
    border: 1px solid #414141;
    overflow: hidden;
    border-radius: 5px;
    display: block;
    width: 90%;
    height: 150px;
    margin: 0 auto;
    position: relative;
    background-size: 90%!important;
    background-color: #fff!important;
}

.upl .sample .iconUpload {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: url('~@/assets/images/sky/Upload.svg') no-repeat 50%;
}

.upl .sample.front {
    background: url('~@/assets/images/sky/id_front.svg') no-repeat 50%;
}

.upl .sample.back {
    background: url('~@/assets/images/sky/id_back.svg') no-repeat 50%;
}

</style>

<style lang="scss" scoped>
.vs-sidebar--background{
    background: rgba(0, 0, 0, 0.5);
}
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>

<style>
.con-upload .con-input-upload, .vs-sidebar .img-upload{
    width: 300px;
}
.vue-form-wizard .wizard-btn{
  background-color: transparent !important;
  border-color: #3d4d5f !important;
}
</style>