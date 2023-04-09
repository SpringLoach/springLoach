<template>
  <div class="home-about">
    <div ref="aboutWrap" class="home-about-wrap">
      <div class="text-wrap">
        <slot></slot>
      </div>
      <div ref="imgWrap" class="img-wrap">
        <img :src="imgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    imgUrl: {
      type: String,       // 图片路径
    },
    reverse: {            // 布局
      type: Boolean,
      default: false
    },
  },
  methods: {
    /* 控制整体及图片的布局方式 */
    setLayout() {
      console.log(1, this.reverse);
      if(this.reverse) {
        let wrap = this.$refs.aboutWrap;
        wrap.style.flexDirection = 'row-reverse';   
        let imgWrap = this.$refs.imgWrap;
        imgWrap.style.flexDirection = 'row';     
      }
    }
  },
  mounted() {
    this.setLayout();
  }
};
</script>

<style lang="less" scoped>
.home-about {
  padding: 105px 0;
}
.home-about-wrap {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}
.img-wrap {
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  img {
    width: 90%;
    height: auto;
    vertical-align: middle;
  }
}
.text-wrap {
  width: 45%;
}
</style>