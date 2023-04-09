<template>
  <div class="register">
    <div class="first-row">
      <h3>欢迎注册</h3>
    </div>
    <div class="second-row">
      <span>已有账号？ </span>
      <span @click="changeForm">登录</span>
    </div>
    <el-form
      :model="registerForm"
      ref="registerForm"
      class="register-form"
      label-width="60px"
      :rules="registerRules"
    >
      <el-form-item label="用户名" prop="account">
        <el-input
          placeholder="请设置用户名"
          v-model="registerForm.account"
          @blur="checkRegisterRules"
        />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input
          placeholder="可用于登录和找回密码"
          v-model="registerForm.tel"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请设置登陆密码"
          v-model="registerForm.password"
          show-password
          @blur="checkRegisterRules"
        />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input placeholder="请输入验证码" v-model="registerForm.code" />
        <button
          type="button"
          class="code-btn"
          :class="{ 'is-disabled': isDisabled }"
          @click="handleLaunchCode"
          :disabled="isDisabled"
        >
          {{ codeText }}
        </button>
      </el-form-item>
      <el-form-item label-width="0">
        <!-- 为了解决提示框的显示问题，复制了一个按钮 -->
        <el-tooltip
          v-if="!passRegisterVerify"
          effect="dark"
          content="只需要输入用户名和密码，并勾选协议就可以完成注册啦😆"
          placement="top"
        >
          <el-button
            class="register-btn"
            :class="{ 'pass-btn': passRegisterVerify }"
            >注册</el-button
          >
        </el-tooltip>
        <el-button
          v-else
          class="register-btn"
          :class="{ 'pass-btn': passRegisterVerify }"
          @click="handleRegister"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 协议行 -->
    <div class="agreement-row">
      <el-checkbox v-model="checked" @change="checkRegisterRules"
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
      checked: false,
      // 注册表单
      registerForm: {
        account: "",
        tel: "",
        password: "",
        code: "",
      },
      // 注册表单验证
      registerRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "长度在 3 个字符以上", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, message: "长度在 3 个字符以上", trigger: "blur" },
        ],
      },
      // 注册表单验证通过
      passRegisterVerify: false,
      // 验证码字段
      codeText: "获取验证码",
      isDisabled: false,
      countDown: 0,
    };
  },
  methods: {
    // 切换表单
    changeForm() {
      this.$emit("changeForm");
    },
    // 额外验证，当任意表单项失焦后触发
    checkRegisterRules() {
      this.$refs.registerForm.validate((valid) => {
        this.passRegisterVerify = valid && this.checked ? true : false;
      });
    },
    // 发送验证码
    handleLaunchCode() {
      this.$message({
        message: "假装向你的手机发送了验证码<(￣︶￣)↗",
        type: "success",
      });
      this.countDown = 60;
      this.codeText = "重发验证（" + this.countDown + "s）";
      this.isDisabled = true;
      setTimeout(this.calcTime, 1000);
    },
    calcTime() {
      if (this.countDown > 0) {
        this.countDown = this.countDown - 1;
        this.codeText = "重发验证（" + this.countDown + "s）";
        setTimeout(this.calcTime, 1000);
      } else {
        this.codeText = "获取验证码";
        this.isDisabled = false;
      }
    },
    // 点击注册
    handleRegister() {
      // 先排除账号重复情况
      let userList = JSON.parse(localStorage.getItem("userList"));
      let repeat = !userList.every((item) => {
        return item.account !== this.registerForm.account;
      });
      if (repeat) {
        this.$message({
          message: "抱歉，该用户名已被注册，请您换个试试",
          type: "warning",
        });
        return;
      }
      // 确认没有重复的帐号后
      let user = {
        account: this.registerForm.account,
        passWord: this.registerForm.password,
        headPortrait: "",
        name: "",
      };
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
      this.$message({
        message: "注册账号成功",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  margin: 30px 39px 32px;
}
.register {
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
/deep/ .register-form {
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
  .el-form-item:nth-child(2) .el-input,
  .el-form-item:nth-child(3) .el-input {
    width: 321px;
  }
  .el-form-item:nth-child(4) .el-input {
    width: 184px;
    margin-right: 10px;
  }
  .code-btn {
    width: 126px;
    height: 40px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #e0e0e0;
    font-size: 12px;
    color: #333;
    cursor: pointer;
  }
  /* 禁止按钮默认为淡色，可以自定义修改 */
  .is-disabled {
    cursor: not-allowed;
    color: #c0c4cc;
  }
  .el-form-item:nth-child(5) {
    margin-top: 40px;
  }
  .register-btn {
    background: #bdcefc;
    border-radius: 25px;
    width: 399px;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, "宋体";
    color: #fff;
    cursor: not-allowed;
    border: none;
  }
  .register-btn.pass-btn {
    background-color: #3f89ec;
    cursor: pointer;
    &:hover {
      border: 1px solid #dcdfe6;
    }
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
