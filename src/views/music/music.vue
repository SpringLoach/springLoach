<template>
  <div class="home" :class="{ home2: text }" @dblclick="toLogin">
    <div class="main">
      <div class="music-box">
        <audio class="music" id="0" @play="switchM('0')" @ended="handleEnd(0)">
          <source
            src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5C%E9%83%91%E4%BC%8A%E5%81%A5%20-%20%E7%94%98%E5%BF%83%E6%9B%BF%E4%BB%A3%E4%BD%A0%20(BonusTrack).mp3"
            type="audio/mp3"
          />
        </audio>
        <div class="music-control" @click="changeMState(0)">
          <i
            class="el-icon-ice-cream-round"
            :class="{ active: activeList[0] }"
          />甘心替代你
        </div>
      </div>
      <div class="music-box">
        <audio class="music" id="1" @play="switchM('1')" @ended="handleEnd(1)">
          <source
            src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5C%E9%83%91%E4%BC%8A%E5%81%A5%20-%20%E6%88%91%E6%84%BF%E4%BD%A0%E7%9F%A5%E9%81%93.mp3 "
            type="audio/mp3"
          />
        </audio>
        <div class="music-control" @click="changeMState(1)">
          <i
            class="el-icon-ice-cream-round"
            :class="{ active: activeList[1] }"
          />我愿你知道
        </div>
      </div>
      <div class="music-box">
        <audio class="music" id="2" @play="switchM('2')" @ended="handleEnd(2)">
          <source
            src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5C%E4%B8%89%E6%B5%A6%E9%80%8F%E5%AD%90%20-%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%20(Movie%20edit).mp3"
            type="audio/mp3"
          />
        </audio>
        <div class="music-control" @click="changeMState(2)">
          <i
            class="el-icon-ice-cream-round"
            :class="{ active: activeList[2] }"
          />グランドエスケープ
        </div>
      </div>
      <div class="music-box">
        <audio class="music" id="3" @play="switchM('3')" @ended="handleEnd(3)">
          <source
            src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5CJin%E3%80%81%E5%A4%A7%E6%9F%AF%20-%20%E7%9D%80%E8%BF%B7.mp3"
            type="audio/mp3"
          />
        </audio>
        <div class="music-control" @click="changeMState(3)">
          <i
            class="el-icon-ice-cream-round"
            :class="{ active: activeList[3] }"
          />着迷
        </div>
      </div>
    </div>
    <footer @click="text = !text">
      <i class="el-icon-sunrise-1" :class="{ 'active-icon': text }" />
    </footer>
    <music-operate v-if="$route.path === '/loach/arder'" @treat="backToHome" />
  </div>
</template>

<script>
import musicOperate from "./music-operate.vue";

export default {
  name: "music",
  components: {
    musicOperate,
  },
  data() {
    return {
      activeList: [false, false, false, false],
      text: false,
    };
  },
  methods: {
    // 播放音乐时，暂停其他播放状态的音乐，并将其进度调为0
    switchM(id) {
      let els = document.getElementsByClassName("music");
      // 元素集合无法使用 forEach
      for (let i = 0; i < els.length; i++) {
        let iid = els[i].id;
        if (iid !== id) {
          if (!els[i].paused) {
            // 临时 暂停旋转
            this.activeList[i] = false;
            /* vue 无法直接侦听数组元素的改变来动态化，需要辅助 */
            this.activeList = [...this.activeList];
            els[i].pause();
            els[i].currentTime = 0;
          }
        }
      }
    },
    // 手动播放/暂停音乐，播放时会触发 play 事件
    changeMState(id) {
      let el = document.getElementById(id);
      this.activeList[id] = !this.activeList[id];
      /* vue 无法直接侦听数组元素的改变来动态化，需要辅助 */
      this.activeList = [...this.activeList];
      if (el.paused) {
        el.play();
      } else {
        el.pause();
      }
    },
    // 当音乐结束时，切换对应的动画状态
    handleEnd(id) {
      this.activeList[id] = !this.activeList[id];
      this.activeList = [...this.activeList];
    },
    // 双击返回登录页
    toLogin() {
      if (this.$route.path === "/loach/arder") {
        return;
      }
      this.$router.replace("/loach/login");
    },
    backToHome() {
      this.$router.replace("/loach/home");
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  background: url(http://springloach.oss-cn-shenzhen.aliyuncs.com/images/springloach/music/84907990_p0.jpg);
  background-size: cover;
  padding-top: 150px;
  min-height: 100vh;
  transition: all 0.8s;
  // 预加载
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: url(http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Cmusic%5C%E9%BB%91%E5%B4%8E%E4%B8%80%E6%8A%A4.jpg) no-repeat -10000px -1000px;
    width: 0;
    height: 0;
  }
}
.home2 {
  background: url(http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Cmusic%5C%E9%BB%91%E5%B4%8E%E4%B8%80%E6%8A%A4.jpg) !important;
  background-size: cover !important;
}

.main {
  width: 600px;
  margin: auto;
  text-align: center;
  .music-box {
    margin-bottom: 15px;
    .music-control {
      cursor: pointer;
    }
    .music-control i {
      font-size: 30px;
      color: rgb(13, 73, 168);
    }
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.active {
  animation: rotate 3s linear infinite;
  color: pink !important;
}
footer {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  i {
    color: skyblue;
    font-size: 30px;
    cursor: pointer;
  }
  i.active-icon {
    color: pink;
  }
}
</style>
