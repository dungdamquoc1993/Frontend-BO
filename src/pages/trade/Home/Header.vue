<template>
  <div class="wrapper-desktop h-header-custom">
    <div class="header">
      <img src="/landing/img/logo_panazic.png" />

      <div class="btns">
        <div class="register" @click="RegisterUrl">Join now</div>
        <div class="login" @click="LoginUrl">Login</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-desktop {
  padding: 7px 90px;
  background: transparent;
  z-index: 3;
  position: fixed;
  width: 100%;
  top: 10px;
}
.wrapper-header {
  padding: 7px 90px;
  position: sticky;
  top: 0;
  background: #080d1f;
  z-index: 3;
}

.header {
  display: flex;
  justify-content: space-between;

  img {
    font-style: italic;
    vertical-align: middle;
    width: 170px;
    object-fit: cover;
  }

  .btns {
    display: flex;
    margin-right: 0.5rem;

    .register,
    .login {
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 1.3rem;
      color: #fff;
      cursor: pointer;
    }

    .register {
      background-color: #fa2843;
      margin-right: 0.5rem;
    }

    .login {
      background-color: #2f3342;
    }
  }
}

@media (max-width: 576px) {
  .wrapper-header,
  .wrapper-desktop {
    padding: 15px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 120px;
        height: 100%;
        object-fit: cover;
      }

      .btns {
        .register,
        .login {
          padding: 5px 10px;
          font-size: 1rem;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  methods: {
    LoginUrl() {
      this.$router.push({ path: "/login" });
    },
    RegisterUrl() {
      this.$router.push({ path: "/register" });
    }
  },
  created() {
    window.addEventListener("scroll", function() {
      if ($(this).scrollTop() !== 0) {
        $(".h-header-custom").addClass("wrapper-header");
        $(".h-header-custom").removeClass("wrapper-desktop");
      } else {
        $(".h-header-custom").addClass("wrapper-desktop");
        $(".h-header-custom").removeClass("wrapper-header");
      }
    });
  }
};
</script>
