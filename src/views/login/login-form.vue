<template>
  <div class="login">
    <div class="first-row">
      <h3>欢迎登录</h3>
    </div>
    <div class="second-row">
      <span>没有账号？ </span>
      <span @click="changeForm">注册</span>
    </div>
    <el-form
      :model="loginForm"
      ref="loginForm"
      class="login-form"
      label-width="60px"
      :rules="loginRules"
    >
      <el-form-item label="用户名" prop="account">
        <el-input placeholder="请输入用户名" v-model="loginForm.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请输入登陆密码"
          v-model="loginForm.password"
          show-password
          @keyup.enter.native="handlelogin"
        />
      </el-form-item>
      <el-form-item label-width="0">
        <el-button class="login-btn" @click="handlelogin">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- 协议行 -->
    <div class="agreement-row">
      <el-checkbox v-model="checked" @change="handleAgreementChange"
        >阅读并接受</el-checkbox
      >
      <span>
        <span class="agreement-link">《共沐用户协议》</span>及<span
          class="privacy-link"
          >《春鳅隐私权保护声明》</span
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 协议复选框
      checked: true,
      // 注册表单
      loginForm: {
        account: "admin",
        password: "123456",
      },
      // 注册表单验证
      loginRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "长度在 3 个字符以上", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, message: "长度在 3 个字符以上", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 切换表单
    changeForm() {
      this.$emit("changeForm");
    },
    // 处理勾选协议
    handleAgreementChange() {
      this.checked = true;
      this.$message({
        message: "你不得不同意作者的协议",
        type: "warning",
      });
    },
    // 点击登录
    handlelogin() {
      // 先检查账号注册情况
      let realUser = {};
      let userList = JSON.parse(localStorage.getItem("userList"));
      let noExist = userList.every((item) => {
        if (item.account !== this.loginForm.account) {
          return true;
        }
        realUser = item;
        return false;
      });
      if (noExist) {
        this.$message({
          message: "尚未注册的用户名",
          type: "warning",
        });
        return;
      }
      // 密码错误
      if (realUser.passWord !== this.loginForm.password) {
        this.$message({
          message: "密码错误",
          type: "warning",
        });
        return;
      }
      // 将当前用户单独添加到缓存并登录
      localStorage.setItem("user", JSON.stringify(realUser));
      this.$router.replace("/loach/home");
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  margin: 30px 39px 32px;
}
.login {
  .first-row h3 {
    font-size: 36px;
    color: #000;
    padding-bottom: 4px;
  }
  .second-row {
    font-size: 14px;
    span:nth-child(1) {
      color: #9b9b9b;
    }
    span:nth-child(2) {
      color: #2e58ff;
      cursor: pointer;
      &:hover {
        color: #0f3cf2;
      }
    }
  }
}
/deep/ .login-form {
  margin-top: 40px;
  .el-form-item__label {
    display: inline-block;
    text-align: justify;
    text-align-last: justify;
    &:before {
      display: none;
    }
  }
  .el-form-item:nth-child(1) .el-input,
  .el-form-item:nth-child(2) .el-input {
    width: 321px;
  }
  .el-form-item:nth-child(2) {
    margin: 30px 0;
  }
  .login-btn {
    background: #bdcefc;
    border-radius: 25px;
    width: 399px;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, "宋体";
    color: #fff;
    background-color: #3f89ec;
    cursor: pointer;
  }
}
/deep/ .agreement-row {
  margin-left: 41px;
  color: #666;
  font-size: 12px;
  .el-checkbox {
    .el-checkbox__label {
      color: #666;
      font-size: 12px;
      cursor: default;
    }
  }
  .agreement-link,
  .privacy-link {
    color: #2e58ff;
    cursor: pointer;
    &:hover {
      color: #00c;
      text-decoration: underline;
    }
  }
}
</style>
