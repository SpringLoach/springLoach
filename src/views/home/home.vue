<template>
  <div class="home">
    <!-- 动画 -->
    <coolShow />
    <!-- 正文内容 -->
    <header>
      <div class="bg">
        <home-bg-text />
      </div>
    </header>
    <main>
      <!-- 网站介绍 -->
      <home-about :imgUrl="homeAboutImg[0]">
        <home-about-text />
      </home-about>
      <!-- 展示列表 -->
      <home-show />
      <!-- 主角介绍 -->
      <home-about
        :imgUrl="homeAboutImg[1]"
        :reverse="true"
        style="background: #e6d2d5"
      >
        <home-about-female />
      </home-about>
      <home-about :imgUrl="homeAboutImg[2]" style="background: #c3d7df">
        <home-about-male />
      </home-about>
    </main>
  </div>
</template>

<script>
import coolShow from "./cool-show.vue";
import homeBgText from "./home-bg-text.vue";
import homeAbout from "./home-about.vue";
import homeAboutText from "./home-about-text.vue";
import homeAboutFemale from "./home-about-female.vue";
import homeAboutMale from "./home-about-male.vue";
import homeShow from "./home-show.vue";

export default {
  components: {
    coolShow,
    homeBgText,
    homeAbout,
    homeAboutText,
    homeAboutFemale,
    homeAboutMale,
    homeShow,
  },
  data() {
    return {
      homeAboutImg: [
        "http://springloach.oss-cn-shenzhen.aliyuncs.com/images/springloach/life/light2.jpg",
        "http://springloach.oss-cn-shenzhen.aliyuncs.com/images/springloach/life/wmq.jpg",
        "http://springloach.oss-cn-shenzhen.aliyuncs.com/images/springloach/life/fhd.jpg",
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.home {
  // width: 100%;
}
header {
  // width: 100%;
  .bg {
    width: 100%;
    height: 100vh;
    background: url("http://springloach.oss-cn-shenzhen.aliyuncs.com/images/springloach/bg/shenzhen.jpg")
      no-repeat;
    background-size: cover;
    background-position: right 80%;
  }
}
</style>
