<template>
  <div class="loach-top" :class="{ 'sub-loach-top': useSubTop }">
    <div class="top-wrap">
      <div class="top-left">Master</div>
      <div class="top-right">
        <span @click="toTheme('home')">Life</span>
        <span @click="toTheme('comics')">Comics</span>
        <span @click="toTheme('eat')">Eat</span>
        <span @click="toTheme('arder')">Music</span>
        <span @click="toTheme('create')">Diary</span>
        <span class="recommend"
          ><span>Recommend</span>
          <loachTopRecommend class="loach-top-recommend" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import loachTopRecommend from "./loach-top-recommend.vue";

export default {
  components: {
    loachTopRecommend,
  },
  computed: {
    ...mapState(["subTop"]),
    useSubTop() {
      const { path } = this.$route;
      // return this.subTop && path === "/loach/home";
      return this.subTop;
    },
  },
  methods: {
    toTheme(theme) {
      this.$router.replace("/loach/" + theme);
    },
  },
};
</script>

<style lang="less" scoped>
.loach-top {
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 20px;
  .top-wrap {
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.top-left {
  border: 2.5px solid #fff;
  padding: 0 10px;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  cursor: default;
}
.top-right > span {
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  margin: 0 15px;
  transition: 0.3s all;
  cursor: pointer;
  &:not(.recommend):hover {
    opacity: 0.8;
  }
}
.recommend > span:hover {
  opacity: 0.8;
}
.recommend {
  position: relative;
  // 为了能移动到悬停元素上
  padding-bottom: 10px;
}
.recommend:hover .loach-top-recommend {
  display: block;
}
/* 整体-第二状态 */
.sub-loach-top {
  top: 0;
  background: #fff;
  // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  z-index: 100;
  .top-left,
  .top-right > span {
    color: rgb(9, 91, 116);
    border-color: rgb(9, 91, 116);
  }
  .top-right > span {
    color: #000;
  }
}
</style>
