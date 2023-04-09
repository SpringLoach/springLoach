<template>
  <div class="comics">
    <header>
      <div class="animated-banner">
        <!-- 预留的图片，防止视频加载导致闪烁 -->
        <div class="cool-bilibili-bg"></div>
        <video
          v-show="videoReady"
          loop
          src="@/assets/img/comics/cool-bilibili.webm"
          autoplay
          width="1728"
          height="162"
          @canplay="onVideoReady"
          style="
            object-fit: cover;
            transform: scale(1) translate(0px, 0px) rotate(0deg);
          "
        ></video>
      </div>
    </header>
    <main class="main">
      <comics-banner />
      <a class="ad" href="https://www.mkzhan.com/215623/" target="_blank">
        <img
          src="https://oss.mkzcdn.com/image/20201202/5fc6f1b6ab1ee-1500x140.jpg!banner-1500"
        />
      </a>
      <comics-dm />
    </main>
  </div>
</template>

<script>
import comicsBanner from "./comics-banner.vue";
import comicsDm from "./comics-dm.vue";

export default {
  components: {
    comicsBanner,
    comicsDm,
  },
  data() {
    return {
      videoReady: false,
    };
  },
  methods: {
    onVideoReady() {
      let video = document.querySelector("video");
      video.style.animation = "appear 2s forwards";
      this.videoReady = true;
    },
  },
};
</script>

<style scoped lang="less">
.animated-banner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  .cool-bilibili-bg {
    position: absolute;
    width: 100%;
    z-index: 1;
    background-image: url(./../../assets/img/comics/cool-bilibili.png);
    background-position: center;
    height: 162px;
  }

  video {
    position: absolute;
    z-index: 2;
    width: 100%;
  }
}

.main {
  width: 1200px;
  margin: auto;
  margin-top: 162px;
}

.ad {
  display: block;
  padding-top: 30px;
  max-width: 1200px;
  height: 142px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
</style>
