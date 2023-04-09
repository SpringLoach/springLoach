<template>
  <div ref="eat" class="eat" @dblclick="toBack">
    <h3>{{ title }}</h3>
    <p>{{ target }}</p>
    <button class="extract-btn" @click="handleClick">
      {{ buttonText }}
    </button>
    <!-- diy表单 -->
    <el-dialog :visible.sync="diyFormView" width="700px" :show-close="false">
      <h3 class="title">自定义菜单</h3>
      <el-input
        type="textarea"
        v-model="diyList"
        placeholder="菜名间以空格作为分隔，如：番茄炒蛋 腐竹炒肉 鱼香肉丝"
      />
      <div class="img-btn">
        <el-tooltip content="想不出来" placement="top">
          <img src="@/assets/img/expand/not-diy.jpg" @click="handleCancelDiy" />
        </el-tooltip>
        <el-tooltip content="决定好了(●ˇ∀ˇ●)" placement="top">
          <img src="@/assets/img/expand/sure-diy.jpg" @click="handleSureDiy" />
        </el-tooltip>
      </div>
    </el-dialog>
    <eat-operate @treat="showDiyForm" />
  </div>
</template>

<script>
import eatOperate from "./eat-operate.vue";

export default {
  components: {
    eatOperate,
  },
  data() {
    return {
      buttonText: "随机抽取",
      // 目标食物
      target: "",
      foodList: [
        "麻辣烫",
        "海底捞",
        "虾蟹煲",
        "红烧牛肉面",
        "兰州拉面",
        "桂林米粉",
        "炒河粉",
        "泡面",
        "鸡公煲",
        "火锅",
        "烧烤",
        "沙县小吃",
        "猪脚饭",
        "木桶饭",
        "烧腊",
        "喝粥",
        "披萨",
      ],
      // 开始抽取
      isBegin: true,
      // 抽取次数
      count: 0,
      // 展示表单
      diyFormView: false,
      // 自定义菜单
      diyList: "",
    };
  },
  computed: {
    title() {
      let title;
      let h = new Date().getHours;
      if (h <= 16) {
        title = "今天中午吃什么好？";
      } else {
        title = "晚餐时间到，就决定吃你了";
      }

      return title;
    },
  },
  methods: {
    handleClick() {
      this.handleButtonText();
      if (this.isBegin) {
        this.showFood();
        this.isBegin = false;
        this.interSelect = setInterval(this.selectTarget, 50);
      } else {
        clearInterval(this.interShowFood);
        clearInterval(this.interSelect);
        this.isBegin = true;
      }
    },
    /* 处理按钮文字 */
    handleButtonText() {
      this.count++;

      if (this.count % 2 !== 0) {
        this.buttonText = "暂停";
        return;
      } else {
        this.buttonText = "再次抽取";
      }
    },
    /* 随机抽取食物 */
    selectTarget() {
      let food =
        this.foodList[Math.floor(Math.random() * this.foodList.length)];
      this.target = food;
    },
    /* 循环展示食物 */
    showFood() {
      this.interShowFood = setInterval(this.showFoodItem, 100);
    },
    /* 展示单个食物 */
    showFoodItem() {
      let x = Math.floor(Math.random() * 100 - 5) + "%";
      let y = Math.floor(Math.random() * 100 - 5) + "%";
      let food =
        this.foodList[Math.floor(Math.random() * this.foodList.length)];

      const span = document.createElement("span");
      span.innerHTML = food;
      span.style.position = "fixed";
      span.style.top = x;
      span.style.left = y;
      span.style.animation = "flash 2s forwards";
      span.style.fontSize = "20px";
      span.style.cursor = "default";

      let parentNode = this.$refs.eat;

      parentNode.appendChild(span);
      setTimeout(() => {
        parentNode.removeChild(span);
      }, 2000);
    },
    /* 唤出自定义菜单 */
    showDiyForm() {
      // 如果正在抽取，暂停
      if (!this.isBegin) {
        this.handleClick();
      }
      this.diyFormView = true;
    },
    /* 取消修改 */
    handleCancelDiy() {
      this.diyFormView = false;
    },
    /* 确认修改 */
    handleSureDiy() {
      this.foodList = this.diyList.split(" ");
      this.diyFormView = false;
    },
    /* 随机背景颜色 */
    initBackground() {
      let el = document.querySelector(".eat");
      console.log(el);
      let colorList = [
        "#f1939c",
        "#7a7374",
        "#c4cbcf",
        "#eeb8c3",
        "#3e3841",
        "#93b5cf",
        "#69a794",
        "#f7cfba",
      ];
      let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
      el.style.backgroundColor = randomColor;
    },
    /* 返回 */
    toBack() {
      // this.$router.go(-1);
    },
  },
  mounted() {
    this.initBackground();
  },
  beforeDestroy() {
    clearInterval(this.interShowFood);
    clearInterval(this.interSelect);
  },
};
</script>

<style lang="less" scoped>
.eat {
  background-color: rgb(196, 203, 207);
  width: 100%;
  height: 100%;
  // height: calc(100vh - 60px);
  height: 100vh;
  background-image: url("../../../assets/img/expand/texture.png");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 40px;
  }
  p {
    margin-top: 30px;
    height: 45px;
    font-size: 40px;
    color: rgb(238, 158, 10);
  }
  .extract-btn {
    position: relative;
    z-index: 1;
    margin-top: 30px;
    padding: 8px 30px;
    font-size: 20px;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    background: transparent;
    overflow: hidden;
    outline: none;
    &::after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 10;
    }
    &:hover::after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}
/deep/ .el-dialog__header {
  padding: 0;
}
/deep/ .el-dialog__body {
  // padding: 0;
  height: 430px;
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    cursor: default;
  }
  textarea {
    height: 200px;
    resize: none;
  }
  .img-btn {
    margin-top: 20px;
    display: flex;
    height: 120px;
    padding: 0 60px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100px;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 3px rgba(233, 111, 157, 0.08);
        border-radius: 50%;
      }
    }
  }
}
</style>
