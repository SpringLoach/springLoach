<template>
  <div ref="main" class="main" @scroll="handleScroll">
    <el-header v-show="showHeader">
      <loach-top />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer v-show="showFooter">
      <loachFooter />
    </el-footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import loachTop from "@/components/loach-top.vue";
import loachFooter from "@/components/loach-footer.vue";

export default {
  components: {
    loachTop,
    loachFooter,
  },
  computed: {
    showHeader() {
      const { path } = this.$route;
      const extraPaths = ["/loach/arder"];
      return !extraPaths.includes(path);
    },
    showFooter() {
      const { path } = this.$route;
      const extraPaths = ["/loach/eat", "/loach/arder"];
      return !extraPaths.includes(path);
    },
  },
  methods: {
    ...mapMutations(["updateTopState"]),
    // 根据路由控制顶部栏状态
    handleScroll(e) {
      let topInstance = document.documentElement.scrollTop;
      let viewHeight = document.documentElement.clientHeight;
      const { path } = this.$route;
      const map = {
        "/loach/home": viewHeight,
        "/loach/comics": 162,
      };
      if (topInstance + 60 > map[path]) {
        this.updateTopState(true);
      } else {
        this.updateTopState(false);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
.el-header {
  position: absolute;
  top: 0;
}
.el-main {
  min-height: calc(100vh - 60px);
}
</style>
