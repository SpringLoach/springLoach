<template>
  <div class="temporary" @dblclick="toBack">
    <div class="temporary-content">
      <img src="../../assets/img/temporary.png" />
      <div class="tip">该页面还在开发中，敬请期待</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.temporary {
  width: 100%;
  height: calc(100vh - 60px);
  background: #7a7374;
}
.temporary-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.tip {
  color: #fff;
}
</style>
