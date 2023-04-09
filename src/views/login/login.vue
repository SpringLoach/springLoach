<template>
  <div class="login">
    <div class="login-bg"></div>
    <header>
      <img src="@/assets/img/bg/Fish.svg" />
      <span>共沐春鳅</span>
    </header>
    <main class="form-box">
      <register-form
        v-if="showRegister"
        @changeForm="showRegister = !showRegister"
      />
      <login-form v-else @changeForm="showRegister = !showRegister" />
    </main>
    <footer>
      <a href="javascript:;" @click="toCreate">创造乐园</a>
      <span class="col-line"></span>
      <img src="@/assets/img/bg/music-entry.svg" @click="toMusic" />
      <span class="copy-right">2021 ©Springloach</span>
    </footer>
  </div>
</template>

<script>
import registerForm from "./register-form.vue";
import loginForm from "./login-form.vue";

export default {
  components: {
    registerForm,
    loginForm,
  },
  data() {
    return {
      // 展示注册表单
      showRegister: false,
    };
  },
  methods: {
    toMusic() {
      this.$router.push("/music");
    },
    toCreate() {
      this.$router.push("/create");
    },
  },
  created() {
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    let defaultUser = {
      account: "wmqwmq",
      passWord: "19971129",
      headPortrait: "",
      name: "妞",
    };
    let publicUser = {
      account: "admin",
      passWord: "123456",
      headPortrait: "",
      name: "体验用户",
    };
    let noExist = userList.every((item) => {
      return item.account !== defaultUser.account;
    });
    if (noExist) {
      userList.push(defaultUser);
      userList.push(publicUser);
      localStorage.setItem("userList", JSON.stringify(userList));
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
}
.login-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("http://springloach.oss-cn-shenzhen.aliyuncs.com/images/springloach/bg/sea-home.jpg")
    no-repeat;
  background-size: cover;
  background-position: right 80%;
}
header {
  position: absolute;
  left: 70px;
  top: 60px;
  z-index: 1;
  width: 100px;
  text-align: center;
  img {
    width: 80%;
  }
  span {
    display: inline-block;
    color: #fff;
    font-size: 24px;
    font-family: sans-serif;
  }
}
footer {
  position: absolute;
  left: 70px;
  bottom: 57px;
  z-index: 1;
  color: #fff;
  height: 20px;
  line-height: 20px;
  a {
    opacity: 0.8;
    vertical-align: middle;
    &:hover {
      opacity: 1;
    }
  }
  .col-line {
    display: inline-block;
    width: 2px;
    height: 12px;
    opacity: 0.78;
    margin: 0 12px 0 13px;
    background: #fff;
    vertical-align: middle;
  }
  img {
    height: 20px;
    vertical-align: middle;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .copy-right {
    opacity: 0.54;
    font-size: 12px;
    color: #fff;
    display: inline-block;
    padding-left: 30px;
  }
}
.form-box {
  position: absolute;
  z-index: 1;
  right: 139px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
}
</style>
