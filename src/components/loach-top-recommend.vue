<template>
  <div class="recommend-box">
    <h3>休闲会所</h3>
    <div class="recommend-list">
      <div
        class="recommend-item"
        v-for="item in recommendList"
        :key="item.title"
      >
        <a :href="item.link" :target="item.target">
          <img :src="item.imgUrl" alt="" />
          <span class="item-title">{{ item.title }}</span>
          <span v-if="item.badge" class="hot">{{ item.badge }}</span></a
        >
        <div class="tooltip">{{ item.tip }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {
          imgUrl: require("@/assets/img/recommend/birthday.svg"),
          title: "猪儿生快",
          tip: "琴瑟愿鱼，共沐春鳅。祝妞儿生日快乐😘",
          // link: "/birthday",
          link: "./index.html#/birthday", // 临时解决打包后路径不正确的问题
          target: "_self",
          badge: "new",
        },
        {
          imgUrl: require("@/assets/img/recommend/bilibili.jpg"),
          title: "bilibili",
          tip: "二次元的集结地，除了番剧，还拥有大量优秀的二创作品",
          link: "https://www.bilibili.com/",
          target: "_blank",
          //   target: "_self"
        },
        {
          imgUrl: require("@/assets/img/recommend/chinese-color.svg"),
          title: "中国色",
          tip: "有着中国风的各种色谱，妈妈再也不用担心我的审美",
          link: "http://zhongguose.com/",
          target: "_blank",
        },
        {
          imgUrl: require("@/assets/img/recommend/news.svg"),
          title: "今日热榜",
          tip: "没有比它更齐全的新闻榜单了，总有一款会适合你",
          link: "https://tophub.today/",
          target: "_blank",
        },
        {
          imgUrl: require("@/assets/img/recommend/dmzj.jpg"),
          title: "动漫之家",
          tip: "相比起其它的漫画平台，它提供的漫画数量更多，质量更佳",
          link: "https://manhua.dmzj.com/",
          target: "_blank",
        },
        {
          imgUrl: require("@/assets/img/recommend/game.svg"),
          title: "小霸王",
          tip: "怀旧游戏库，愿我们找回童年的快乐",
          link: "https://www.yikm.net/",
          target: "_blank",
        },
        {
          imgUrl: require("@/assets/img/recommend/img.svg"),
          title: "unsplash",
          tip: "著名的高清图片素材下载网站，而且它还是免费的",
          link: "https://unsplash.com/",
          target: "_blank",
        },
        {
          imgUrl: require("@/assets/img/recommend/rice.svg"),
          title: "eat",
          tip: "它能解决你这一生中最大的难题：午餐/晚餐吃什么",
          // link: "/eat",
          link: "./index.html#/eat",
          target: "_blank",
          badge: "hot",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
/******标志*******/
@keyframes hot {
  0% {
    top: -10px;
  }
  100% {
    top: -9px;
  }
}
.hot {
  position: absolute;
  top: -10px;
  right: -16px;
  height: 14px;
  background: #f64d36;
  border-radius: 4px;
  color: #fff;
  padding: 0px 3px;
  line-height: 14px;
  font-size: 10px;
  font-weight: 900;
  animation: hot 0.7s linear infinite;
  -webkit-animation: hot 0.7s linear infinite;
}
/*************/
.recommend-box {
  display: none;
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 9;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
  width: 320px;
  padding: 16px 16px 24px;
  color: #000;
  cursor: default;
  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.88);
    margin-bottom: 40px;
  }
  .recommend-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .recommend-item {
    position: relative;
    padding: 16px 8px 20px;
    border-radius: 8px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    width: 33.33%;
    a {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
    img {
      width: 48px;
      height: 48px;
      border-radius: 8px;
    }
    .item-title {
      text-transform: none;
      margin-top: 5px;
      font-size: 12px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.64);
      text-align: center;
    }
  }
}
.recommend-item:hover .tooltip {
  display: block;
}
.tooltip {
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  pointer-events: none;
  width: 200px;
  padding: 6px 8px;
  border-radius: 5px;
  color: #fff;
  text-transform: none;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.85);
  &::after {
    position: absolute;
    right: 50%;
    top: 100%;
    transform: translate(50%, 0);
    content: "";
    border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;
    border-style: solid;
    border-width: 6px;
  }
}
</style>
