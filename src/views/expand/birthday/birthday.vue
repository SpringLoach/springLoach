<template>
  <div class="birthday">
    <!-- 音乐 -->
    <audio class="music" ref="music3">
      <source
        src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5CJin%E3%80%81%E5%A4%A7%E6%9F%AF%20-%20%E7%9D%80%E8%BF%B7.mp3"
        type="audio/mp3"
      />
    </audio>
    <audio class="music" ref="music5">
      <source
        src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5C%E4%B8%89%E6%B5%A6%E9%80%8F%E5%AD%90%20-%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%20(Movie%20edit).mp3"
        type="audio/mp3"
      />
    </audio>
    <audio class="music" ref="music7">
      <source
        src="http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cmp3%5C%E4%B8%80%E5%8F%A3%E7%94%9C%20-%20%E9%BA%8B%E9%B9%BF%E6%A3%AE%E6%9E%97.mp3 "
        type="audio/mp3"
      />
    </audio>
    <!-- 背景、气球、礼物 -->
    <div class="birthday-bg"></div>
    <img class="icon-balloon" src="@/assets/img/expand/birthday/balloon.svg" />
    <img
      class="icon-hutao"
      src="@/assets/img/expand/birthday/a.gif"
      @click="autoAlbum"
    />
    <img
      class="icon-present"
      src="@/assets/img/expand/birthday/present.svg"
      @click="changeMState"
    />
    <img
      class="icon-cloud"
      src="@/assets/img/expand/birthday/cloud.svg"
      @click="toBack"
    />
    <!-- 首页内容 -->
    <div class="main-contain" v-if="!showAlbum">
      <img class="text-bg" src="@/assets/img/expand/birthday/t4.png" alt="" />
      <img
        class="text-bg-inner"
        src="@/assets/img/expand/birthday/t4.png"
        alt=""
      />
      <h3 class="title">Happy Birthday!</h3>
      <span class="sub-title">祝猪儿生日快乐</span>
      <div class="blessing-text">
        <div class="text-item">
          生辰快乐，祝地表最强认真敬业小仙女在新年万事胜意，收获更多美好滋味。
        </div>
        <div class="text-item">
          总有一份思念萦绕心头，总有一个回忆心间绽放，总有一个梦想展翅飞翔，总有一股愿望正在期待，总有一个日子真的等待。今天，音乐和美酒为你而摇动，祝你生日快乐!
        </div>
        <div class="text-item">
          新的一年里，煎饼鸭肠、海底捞、烧烤、蛙来哒，祝妞经常与美食相伴，多吃不胖。
        </div>
        <div class="text-item">
          天生我材必有用。祝你接下来的实验顺利，学业有成，待你暴富时，我就可以抱紧大腿安心养头发啦~
        </div>
      </div>
      <img
        class="cheers"
        src="@/assets/img/expand/birthday/cheers3.svg"
        @click="changeMode"
      />
    </div>
    <!-- 相册展示 -->
    <div class="album-contain" v-if="showAlbum">
      <div class="album-box">
        <img
          :class="[currentAlbum.type === 'y' ? 'album-y' : 'album-x']"
          :src="currentAlbum.url"
        />
      </div>
      <div class="control-img-group">
        <img src="@/assets/img/expand/birthday/left.svg" @click="toOldAlbum" />
        <img
          src="@/assets/img/expand/birthday/right.svg"
          @click="toNextAlbum"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlbum: false, // 控制内容展示
      albumList: [
        {
          url: "https://images.idmzj.com/webpic/7/linlaiif20200626.jpg",
          type: "y",
        },
        {
          url: "https://images.idmzj.com/webpic/14/wodetianshilinglai.jpg",
          type: "y",
        },
        {
          url: "https://images.idmzj.com/webpic/13/jiatenghuibujujuekeai.jpg",
          type: "y",
        },
        {
          url: "https://images.dmzj.com/webpic/7/manyannaxinxiaokeaibuyidingshinvhaizi.jpg",
          type: "y",
        },
      ],
      currentAlbum: "", // 当前图片
      currentIndex: 0, // 当前图片索引
      timer: null, // 自动播放图片
      forbidManual: false, // 禁止手动播放图片,控轴
    };
  },
  methods: {
    /* 返回 */
    toBack() {
      this.$router.go(-1);
    },
    /* 随机播放音乐 */
    changeMState() {
      let musicRefsArr = ["music3", "music5", "music7"];
      // 如果在播放，暂停并将其进度设置为0
      musicRefsArr.forEach((music) => {
        if (!this.$refs[music].paused) {
          this.$refs[music].pause();
          this.$refs[music].currentTime = 0;
        }
      });
      // 随机抽一个幸运儿播放
      let randomRef =
        musicRefsArr[Math.floor(Math.random() * musicRefsArr.length)];
      this.$refs[randomRef].play();
    },
    /* 上一张 */
    toOldAlbum() {
      // 避免对循环播放的干扰
      if (this.forbidManual === true) {
        return;
      }
      if (this.currentIndex === 0) {
        this.currentIndex = this.albumList.length - 1;
      } else {
        this.currentIndex--;
      }
      this.currentAlbum = this.albumList[this.currentIndex];
    },
    /* 下一张 */
    toNextAlbum() {
      if (this.forbidManual === true) {
        return;
      }
      if (this.currentIndex + 1 === this.albumList.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.currentAlbum = this.albumList[this.currentIndex];
    },
    /* 自动播放至最后一张 */
    autoAlbum() {
      this.forbidManual = true;
      if (!this.showAlbum) {
        return;
      }
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        // this.toNextAlbum()
        if (this.currentIndex + 1 !== this.albumList.length) {
          this.currentIndex++;
        } else {
          clearInterval(this.timer);
          this.forbidManual = false;
        }
        this.currentAlbum = this.albumList[this.currentIndex];
      }, 1800);
    },
    changeMode() {
      this.$message.info("照片不方便展示，就用些其它图片替代啦~");
      this.showAlbum = true;
    },
  },
  created() {
    this.currentAlbum = this.albumList[0];
  },
  mounted() {
    this.changeMState();
  },
};
</script>

<style lang="less" scoped>
.birthday {
  height: 100%;
  .birthday-bg {
    position: absolute;
    z-index: -1;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../assets/img/expand/birthday/t1.jpg");
    background-size: contain;
    filter: opacity(60%);
  }
  .icon-balloon {
    position: absolute;
    z-index: 10;
    animation: upAndDown 2s ease-out infinite, specialFadeInUp 4s;
    top: 10vh;
    right: 8vw;
  }
  .icon-hutao {
    position: absolute;
    z-index: 10;
    animation: upAndDown 2s ease-out infinite, specialFadeInUp 4s;
    width: 60px;
    top: 25vh;
    right: 9vw;
    border-radius: 50%;
    cursor: pointer;
  }
  .icon-present {
    position: absolute;
    z-index: 10;
    animation: zoom 2s infinite, specialFadeInUp 6s;
    bottom: 10vh;
    left: 8vw;
    cursor: pointer;
  }
  .icon-cloud {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    // transform: rotate(180deg);
  }
  .main-contain {
    position: relative;
    width: 900px;
    height: 80vh;
    margin: auto;
    padding-top: 40px;
    text-align: center;
  }
}
.text-bg {
  left: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  animation: rotateY 0.6s linear;
}
.text-bg-inner {
  left: 20px;
  right: 0;
  position: absolute;
  height: 80vh;
  width: calc(100% - 40px);
  transform: matrix(1, 0, 0, 0.963434, 0, 0);
  animation: rotateY 0.6s linear;
}
.title {
  // display: inline-block;
  margin-top: 25px;
  font-family: "Pinyon Script", serif;
  font-size: 60px;
  font-weight: 600;
  animation: specialFadeInUp 3s;
  // color: #fff;
}
.sub-title {
  display: inline-block;
  font-size: 38px;
  animation: specialFadeInUp 3.5s;
}
.blessing-text {
  height: calc(100% - 250px);
  animation: specialFadeInUp 4s;
  // position: absolute;
  // bottom: 90px;
  margin: 24px 60px 0;
  text-align: left;
  .text-item {
    text-indent: 30px;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.65);
  }
  .text-item:nth-child(1) {
    margin-top: 64px;
  }
}
.cheers {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: specialUpAndX 3.5s;
  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
}
.album-contain {
  position: relative;
  width: 900px;
  // height: 80vh;
  margin: auto;
  padding-top: 40px;
  text-align: center;
}
.album-y {
  // width: 450px;
  height: 80vh;
  animation: fadeIn 0.8s;
}
/******** 根据高度来决定宽度的，emm，临时办法 *******/
.album-x {
  // height: 600px;
  width: 107vh;
}
.control-img-group {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 600px;
  bottom: -20px;
  img {
    animation: keepRotate 2s linear infinite;
    cursor: pointer;
  }
}
</style>
