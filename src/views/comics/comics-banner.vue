<template>
  <div class="comics-banner">
    <div class="outer">
      <div class="banner-wrapper" ref="bannerWrapperRef">
        <div
          class="banner-item"
          v-for="(item, index) in target"
          :key="index"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut"
        >
          <!-- <div class=""></div> -->
          <a class="img-wrap" :href="item.link" target="_blank">
            <img class="item-img" :src="item.src" alt="" />
            <div class="type">
              <span
                class="type-item"
                v-for="t in item.type.split('/')"
                :key="t"
              >
                {{ t }}
              </span>
            </div>
          </a>
          <a class="title" :href="item.link" target="_blank">{{
            item.title
          }}</a>
          <div class="introduce" :title="item.introduce">
            {{ item.introduce }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewForm",
  props: {},
  data() {
    return {
      bannerList: [
        {
          src: "https://mhfm7yd.cdndm5.com/78/77018/20220412112144_450x600_122.jpg",
          link: "https://www.dm5.com/manhua-golden-spiral/",
          title: "GOLDEN SPIRAL",
          introduce: "为了拯救土地和资源都有限的“人类最后的国家”擂缽之国",
          type: "冒险/奇幻",
        },
        {
          src: "https://mhfm1yd.cdndm5.com/47/46160/20200204213322_450x600_121.jpg",
          link: "https://www.dm5.com/manhua-shaonvnidiandehanzidaolee/",
          title: "和喜欢游戏的朋友各种轶事",
          introduce: "少女你点的汉子到了哦漫画 ，其实是男孩子哦！",
          type: "恋爱",
        },
        {
          src: "https://mhfm8yd.cdndm5.com/79/78494/20220607224613_450x600_114.jpg",
          link: "https://www.dm5.com/manhua-she-is-beautiful/",
          title: "She is beautiful",
          introduce:
            "近未来，胡桃等年幼的孩子都生活在名为箱庭的设施中，这天她终于迎来了自己的10岁生日",
          type: "奇幻",
        },
        {
          src: "https://mhfm7yd.cdndm5.com/42/41626/20200914100756_450x600_86.jpg",
          link: "https://www.dm5.com/manhua-xiongxiongyongchenyishijie/",
          title: "熊熊勇闯异世界",
          introduce: "家里蹲游戏玩家优奈像往常一样登陆幻想RPG游戏！",
          type: "冒险/科幻",
        },
        {
          src: "https://mhfm6yd.cdndm5.com/40/39295/20210715212830_450x600_123.jpeg",
          link: "https://www.dm5.com/manhua-tushuguandedamofashi/",
          title: "图书馆的大魔法师",
          introduce: "这是一个孑然一身的少年与书一同 闯入未知的世界",
          type: "冒险/奇幻",
        },
        {
          src: "https://mhfm2yd.cdndm5.com/58/57825/20200227135257_450x600_137.jpg",
          link: "https://www.dm5.com/manhua-wulimofashimaxiu/",
          title: "物理魔法使马修",
          introduce: "等等，一般来说只是锻炼肌肉会强到这种程度吗？",
          type: "魔法",
        },
        {
          src: "https://mhfm9yd.cdndm5.com/55/54031/20191015212421_450x600_103.jpg",
          link: "https://www.dm5.com/manhua-tiancaiwangzidechiziguojiazhenxingshu/",
          title: "天才王子的赤字国家振兴术",
          introduce: "满是意外的弱小国家运营谭、在此开幕！",
          type: "搞笑",
        },
        {
          src: "https://mhfm8yd.cdndm5.com/67/66186/20210123140945_450x600_123.jpg",
          link: "https://www.dm5.com/manhua-shaozhuliudekuai/",
          title: "少主溜得快",
          introduce: "在历史的夹缝中,有一位至今无人提及的,善于逃跑的英雄",
          type: "冒险/悬疑",
        },
        {
          src: "https://mhfm7yd.cdndm5.com/59/58810/20200423110730_450x600_126.jpg",
          link: "https://www.dm5.com/manhua-wodantuidenvhai/",
          title: "我推的孩子",
          introduce:
            "与《辉夜大小姐想让我告白》同时连载，从现在还未有的角度切入，描写“演艺圈”的故事。",
          type: "奇幻/悬疑",
        },
        {
          src: "https://mhfm9yd.cdndm5.com/39/38247/20191016124904_450x600_125.jpg",
          link: "https://www.dm5.com/manhua-shigewendezuijiangxianzhe-shijiezuijiangdexianzheweilebiandegengqiangerzhuanshengle/",
          title: "失格纹的最强贤者",
          introduce:
            "为了获得『最适合魔法战斗的纹章』成为最强魔法使，此人将自身灵魂封入魔法之中转生至未来",
          type: "热血/冒险",
        },
      ],
      timer: null,
      timer2: null,
      offset: -2400,
    };
  },
  filters: {},
  mounted() {
    this.initBanner();
  },
  computed: {
    target() {
      return [...this.bannerList, ...this.bannerList, ...this.bannerList];
    },
  },
  watch: {},
  methods: {
    initBanner() {
      const el = this.$refs.bannerWrapperRef;
      this.timer = setInterval(() => {
        if (this.offset === -4800 - 960) {
          this.offset -= 240;
          this.timer2 = setTimeout(() => {
            el.style.transition = `none`;
            this.offset = -1200;
            // !!!
            el.style.transform = `translateX(${this.offset}px)`;
          }, 200); // 不要小于动画的执行时间，否则在视觉上卡顿
        } else {
          el.style.transition = `all 0.2s`;
          this.offset -= 240;
        }
        el.style.transform = `translateX(${this.offset}px)`;
      }, 2000);
    },
    /* 鼠标移入移出 */
    handleMouseOver() {
      clearInterval(this.timer);
      clearTimeout(this.timer2);
    },
    handleMouseOut() {
      this.initBanner();
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearTimeout(this.timer2);
  },
};
</script>

<style scoped lang="less">
.comics-banner {
  display: block;
  padding-top: 30px;
  max-width: 1200px;
  height: 390px;
  margin: auto;
}
.outer {
  // border: 1px solid #eee;
  // border-radius: 4px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.banner-wrapper {
  width: 7200px;
  transform: translateX(-2400px);
  transition: all 0.2s;
}
.banner-item {
  display: inline-block;
  width: 240px;
  // height: 315px;
  height: 100%;
  text-align: center;
}
.banner-item {
  padding: 12px;
  text-align: left;
}
.img-wrap {
  position: relative;
}
.item-img {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 8px #aaa;
  }
}
.type {
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 200px;
  color: #000;
  .type-item {
    margin-right: 4px;
    padding: 2px 6px;
    font-size: 12px;
    line-height: 18px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    color: #ffffff;
  }
}
.title {
  display: inline-block;
  color: #333;
  font-weight: 600;
  margin: 2px 0;
  &:hover {
    color: #ff620e;
  }
}
.introduce {
  font-size: 13px;
  height: 20px;
  line-height: 20px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
