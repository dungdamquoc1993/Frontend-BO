<template>
  <div>
    <vs-input
        v-validate="'required|username|min:3'"
        data-vv-validate-on="blur"
        name="text"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Tài khoản"
        v-model="username"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:10'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Mật khẩu"
        v-model="password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Ghi nhớ</vs-checkbox>
        <!-- <router-link to="/pages/forgot-password">Quên mật khẩu?</router-link> -->
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <!--<vs-button  type="border" @click="registerUser">Register</vs-button>-->
      <vs-button :disabled="!validateForm" @click="loginJWT">Đăng nhập</vs-button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      username: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm() {
      return this.username != '' && this.password != '';
    },
  },
  methods: {

    async loginJWT() {

      // Loading
      this.$vs.loading()
        //checkbox_remember_me = this.checkbox_remember_me;
        let userDetails = {
          username: this.username,
          password: this.password
        };
        const response = await AuthenticationService.loginAdmin(userDetails)
        this.$vs.loading.close()

        if(response.data.success){
          localStorage.setItem('token', response.data.token);
          //localStorage.setItem('name', response.data.nick_name);
          this.$store.dispatch('setToken', response.data.token)
          //this.$store.dispatch('setUser', response.data.email)
          this.$router.push('/analytics').catch(() => {})
        }else{
          this.$vs.notify({
            title: 'Error',
            text: response.data.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
    },
    // registerUser() {
    //   if (!this.checkLogin()) return
    //   
    // }
  }
}

</script>

