<template>
  <div class="home-bg-text">
    <div class="text-wrap">
      <h1 class="primary-heading">SpringLoach</h1>
      <h3 class="secondary-heading">for Dream</h3>
      <p class="sub-heading">
        To love oneself is the beginning of a lifelong romance.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 处理动画
    handleFirstShow() {
      let isShow = sessionStorage.getItem("firstShow");
      let el = document.querySelector(".text-wrap");
      if (isShow === "true") {
        el.style.animation = "fadeInUp 2s forwards";
      } else {
        el.style.animation = "fadeInUp 2s forwards 2s";
      }
    },
  },
  mounted() {
    this.handleFirstShow();
  },
};
</script>

<style lang="less" scoped>
.home-bg-text {
  position: relative;
  pointer-events: none;
  height: 100%;
  .text-wrap {
    position: absolute;
    top: 45%;
    left: 32%;
    // transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
  }
}
.primary-heading {
  position: absolute;
  z-index: -1;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Pinyon Script", serif;
  color: #ffa33e;
  font-size: 80px;
  font-weight: 300;
}
.secondary-heading {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 50px;
  font-weight: 700;
}
.sub-heading {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}
</style>