<template>
  <div class="wrapper container">
    <div id="loading-corners" class="vs-con-loading__container">
      <div class="title">
        Thông báo
        <svg
          data-v-221cd0d8=""
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="21"
          viewBox="0 0 38 21"
          class="icon-svg-notification"
        >
          <g
            data-v-221cd0d8=""
            id="Group_21335"
            data-name="Group 21335"
            transform="translate(-917 -81)"
          >
            <rect
              data-v-221cd0d8=""
              id="Rectangle_4940"
              data-name="Rectangle 4940"
              width="38"
              height="21"
              rx="3"
              transform="translate(917 81)"
              fill="#E5B000"
            ></rect>
            <g
              data-v-221cd0d8=""
              id="check-all"
              transform="translate(924.785 83.931)"
            >
              <path
                data-v-221cd0d8=""
                id="Path_35112"
                data-name="Path 35112"
                d="M4.773,18.9,0,14.123l1.3-1.3,3.91,2.607L14.336,5l1.3.652L6.757,18.727a1.3,1.3,0,0,1-1.985.168Z"
                transform="translate(0 -5)"
                fill="#fefefe"
              ></path>
              <path
                data-v-221cd0d8=""
                id="Path_35113"
                data-name="Path 35113"
                d="M28.91,10.3H25.652a.652.652,0,1,1,0-1.3H28.91a.652.652,0,1,1,0,1.3Z"
                transform="translate(-8.709 -6.393)"
                fill="#fefefe"
              ></path>
              <path
                data-v-221cd0d8=""
                id="Path_35114"
                data-name="Path 35114"
                d="M27.516,17.3H21.652a.652.652,0,0,1,0-1.3h5.865a.652.652,0,1,1,0,1.3Z"
                transform="translate(-7.316 -8.832)"
                fill="#fefefe"
              ></path>
              <path
                data-v-221cd0d8=""
                id="Path_35115"
                data-name="Path 35115"
                d="M25.774,24.3H16.652a.652.652,0,0,1,0-1.3h9.123a.652.652,0,0,1,0,1.3Z"
                transform="translate(-5.574 -11.271)"
                fill="#fefefe"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div class="wrapper-list-noti">
        <div class="content" v-for="item in unreadNotifications" :key="item.id">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.016"
              height="30.284"
              viewBox="0 0 33.016 30.284"
            >
              <g
                id="_000000ff"
                data-name="#000000ff"
                transform="translate(-26.902 -33.003)"
              >
                <path
                  id="Path_35579"
                  data-name="Path 35579"
                  d="M33.929,37.792a15.017,15.017,0,0,1,16.414-3.763,15.16,15.16,0,1,1-20.7,13.829,15.5,15.5,0,0,1-1.663,1.584c-.653.33-1.419-.6-.913-1.15.915-.963,1.869-1.889,2.809-2.825a.812.812,0,0,1,1.238.05c.942.958,1.941,1.871,2.834,2.875.375.624-.441,1.381-1.042,1.024a17.62,17.62,0,0,1-1.623-1.587,13.905,13.905,0,0,0,3.3,9.142A13.589,13.589,0,1,0,45.925,34.589a13.421,13.421,0,0,0-10.694,4.018C34.7,39.317,33.56,38.56,33.929,37.792Z"
                  transform="translate(0 0)"
                  fill="#fefefe"
                ></path>
                <path
                  id="Path_35580"
                  data-name="Path 35580"
                  d="M78.428,72.655a3.029,3.029,0,1,1-1.737,3.415,3.019,3.019,0,0,1,1.737-3.415m.72,1.408a1.4,1.4,0,1,0,1.769,1.753A1.429,1.429,0,0,0,79.149,74.063Z"
                  transform="translate(-38.736 -30.74)"
                  fill="#3381f9"
                ></path>
                <path
                  id="Path_35581"
                  data-name="Path 35581"
                  d="M90.456,74.756a.794.794,0,0,1,1.34.582c.014.326-.251.549-.448.77-3.419,3.4-6.812,6.824-10.234,10.218a.816.816,0,0,1-1.406-.422c-.059-.408.282-.683.528-.946C83.653,81.566,87.034,78.14,90.456,74.756Z"
                  transform="translate(-41.094 -32.359)"
                  fill="#2077fc"
                ></path>
                <path
                  id="Path_35582"
                  data-name="Path 35582"
                  d="M112.2,102.056a3.031,3.031,0,1,1-2.093,3.623,3.07,3.07,0,0,1,2.093-3.623m.232,1.622a1.4,1.4,0,1,0,1.969,1.514A1.407,1.407,0,0,0,112.433,103.678Z"
                  transform="translate(-64.299 -53.342)"
                  fill="#2077fc"
                ></path>
              </g>
            </svg>
          </div>

          <div class="body">
            <div class="tit">{{ item.title }}</div>
            <div class="des" v-html="item.msg"></div>
            <div class="time">{{ item.time }}</div>
            <div class="dot" v-if="item.views === 0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 30px;
}

.title {
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  padding-bottom: 18px;
  border-bottom: 1px solid #011022;
  margin-bottom: 0;
}

.wrapper-list-noti {
  .content {
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    transition: .3s;
    border-radius: 5px;

    &:hover {
      background: #1f2f43;
    }

    .body {
      position: relative;
      flex: 1;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }
      width: 32px;
      height: 32px;
      border-radius: 32px;
      background: #1f2f43;

      margin-right: 10px;
    }

    .tit {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      color: #fff;
      margin-bottom: 5px;
    }

    .des {
      font-size: 12px;
      color: #8b8d96;
      line-height: 16px;
      margin-bottom: 8px;
    }

    .time {
      background: rgba(58,63,101,.4);
      border-radius: 3px;
      display: inline-block;
      height: 24px;
      padding: 0 8px;
      font-size: 12px;
      line-height: 24px;
      color: hsla(0,0%,100%,.44);
    }

    .dot {
      position: absolute;
      top: 0%;
      right: 0;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: #e5b000;
    }
  }
}
</style>

<script>
import getData from "@/pages/trade/navbar/components/data.json";
import AuthenticationService from "@/services/AuthenticationService";
import moment from "moment";

export default {
  data() {
    return {
      unreadNotifications: []
    };
  },
  methods: {
    getHMS(value) {
      if (value) {
        let now = moment(value).fromNow();
        return now;
      }
    }
  },
  mounted() {
    let obj = {
      e: getData.email
    };

    AuthenticationService.getListNotifi(obj).then(res => {
      this.$vs.loading.close("#loading-corners > .con-vs-loading");
      if (res.data.success) {
        let dataN = res.data.data;
        for (let i = 0; i < dataN.length; i++) {
          let json = {
            index: i,
            title: dataN[i].title,
            msg: dataN[i].content,
            views: dataN[i].views,
            time: this.getHMS(dataN[i].created_at)
          };
          this.unreadNotifications.push(json);
        }
      }
    });
  }
};
</script>
