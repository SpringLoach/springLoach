<template>
  <div class="home-show">
    <h2 class="show-title">生活记录集</h2>
    <span class="row-divider"></span>
    <p class="show-subtitle">
      五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
    </p>
    <div class="show-list">
      <div
        ref="showItem"
        class="show-item"
        v-for="item in showList"
        :key="item.title"
      >
        <img :src="item.imgSrc" @click="openView(item.imgSrc)" />
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-text">{{ item.text }}</p>
      </div>
    </div>
    <div v-if="showSrc" class="shade-wrap" @click.stop="cleanShowSrc">
      <img :src="showSrc" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: [
        {
          imgSrc:
            "https://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Clife%5C%E9%95%BF%E6%B2%99-%E4%B8%89%E7%8E%8B%E8%A1%97.jpg",
          title: "长沙-三王街",
          text: `春日上芳洲，经春兰杜幽。
            此时寻橘岸，昨日在城楼。
            鹭立青枫杪，沙沈白浪头。
            渔家好生计，檐底系扁舟。`,
        },
        {
          imgSrc:
            "https://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Clife%5C%E4%BD%9B%E5%B1%B1.jpg",
          title: "佛山-老巷",
          text: `一座充满古韵的城市，在这里，生活节奏缓慢，却不乏美食和风景。
            东方广场、岭南新天地、中山公园、千灯湖，每一个地方都是快乐。`,
        },
        {
          imgSrc:
            "http://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Clife%5C%E4%B8%9C%E8%8E%9E-%E6%B0%B4%E6%BF%82%E5%B1%B1.jpg",
          title: "东莞-水濂山",
          text: `东莞不缺山和公园，是个亲近自然的城市。这座城市正在不断努力，快速发展，不停地更新自己的面貌。
            总的来说，是个兼容性很高的城市。`,
        },
        {
          imgSrc:
            "https://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Clife%5C%E6%96%B9-%E9%95%BF%E6%B2%99-%E8%8C%B6%E9%A2%9C%E6%82%A6%E8%89%B2.png",
          title: "茶颜悦色",
          text: `作为最著名的旅游城市，长沙可以指出来的的特色食物实在是太多了。
            小吃有臭豆腐、糍粑、卤味，硬菜有小炒黄牛肉、辣椒炒肉，就算不爱吃辣，
            也一定要吃上一碗当地正宗的嗦面。`,
        },
        {
          imgSrc:
            "https://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Clife%5C%E6%96%B9-%E6%B8%AF%E9%A3%9F-%E4%BD%9B%E5%B1%B1.jpg",
          title: "港食",
          text: `佛山不缺美食，佛山不缺实惠的美食。在市中心，小吃店挨着长，一天吃一家，一个月可以不带重，
            并且只需几块钱，就能买到好喝的奶茶。除此之外，顺德双皮奶、赵记传承、西关肠粉、粥城等店组成的
            包围圈，完全能够令人沦陷其中。`,
        },
        {
          imgSrc:
            "https://springloach.oss-cn-shenzhen.aliyuncs.com/images%5Cspringloach%5Clife%5C%E6%96%B9-%E8%87%AD%E8%B1%86%E8%85%90-%E4%B8%9C%E8%8E%9E.jpg",
          title: "某人最爱",
          text: `东莞的美食是隐蔽而又聚集的，不熟悉当地的人，走到哪里都是工厂、道路，但一旦发现了好吃的，
            往往那就是一条小食街，而且其隔壁往往就是购物中心，里面会有许多的 “网红”
            会做着直播然后让老铁们关注一波。`,
        },
      ],
      showSrc: "",
    };
  },
  methods: {
    /* 动态，触顶时添加动画 */
    setAnimation(el) {
      document.addEventListener("scroll", addAnimate);
      console.log("--", el.getBoundingClientRect().top);
      console.log("--", window.innerHeight);
      console.log(el.getBoundingClientRect().top - window.innerHeight < 0);
      function addAnimate() {
        if (el.getBoundingClientRect().top - window.innerHeight < 0) {
          el.style.animation = "fadeInUp 2s forwards";
          // 移除监听程序、帮助释放内存
          document.removeEventListener("scroll", addAnimate);
          el = null;
        }
      }
    },
    openView(src) {
      this.showSrc = src;
    },
    cleanShowSrc() {
      this.showSrc = "";
    },
  },
  mounted() {
    for (let i = 0; i < this.$refs.showItem.length; i++) {
      this.setAnimation(this.$refs.showItem[i]);
    }
  },
};
</script>

<style lang="less" scoped>
.home-show {
  padding: 105px 0;
  background: rgb(234, 237, 243);
  text-align: center;
  .show-title {
  }
  .row-divider {
    background-color: #31ddb7;
    display: block;
    height: 2px;
    margin: 20px auto 0;
    width: 80px;
  }
  .show-subtitle {
    font-size: 16px;
    letter-spacing: 0.3px;
    color: #6b7c93;
    margin: 20px auto 0;
  }
}
.show-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  .show-item {
    width: 30%;
    min-height: 80px;
    margin: 50px 5% 0 0;
  }
  .show-item:nth-child(3n + 3) {
    margin-right: 0;
  }
}
.show-item {
  img {
    width: 100%;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .item-title {
    font-size: 21px;
    margin: 5px 0 10px;
    color: #19232d;
  }
  .item-text {
    color: #6b7c93;
    font-size: 14px;
  }
}
/* 遮罩 */
.shade-wrap {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: auto;
    border: 1px solid #fff;
    background: #fff;
    padding: 4px;
  }
}
</style>
