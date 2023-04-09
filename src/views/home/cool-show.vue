<template>
  <div class="cool-show" v-if="firstShow">
    <span>{{coolText}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 展示动画
      firstShow: true,
      coolTextList: [
        '做想做的事，做能做的事',
        '解决得了的事情，不必担忧；解决不了的问题，担忧也没有用',
        '表达热情，最重要的就是心里有热情',
        '赢得别人注意的最好方法，是不要去在担心事情的结果如何，也不要在意别人是否喜欢我们，只要努力去做必须完成的事项即可',
        '面对困难，不逃避，不退缩',
        '声音清朗，步伐稳健，面带笑容，兴趣广泛，都是令人喜爱的个性'
      ]
    };
  },
  computed: {
    coolText() {
      return this.coolTextList[Math.floor(Math.random() * this.coolTextList.length)];
    }
  },
  methods: {
    // 处理动画
    handleFirstShow() {
      let isShow = sessionStorage.getItem("firstShow");
      if (isShow === "true") {
        this.firstShow = false;
      }
      setTimeout(() => {
        this.firstShow = false;
        sessionStorage.setItem("firstShow", "true");
      }, 2000);
    },
  },
  mounted() {
    this.handleFirstShow();
  },
};
</script>

<style lang="less" scoped>
@keyframes cool {
  0% {
    color: rgba(255, 255, 255, 1);
    transform: scale(1);
  }
  100% {
    color: rgba(255, 255, 255, 0);
    transform: scale(1.02);
  }
}
.cool-show {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #231e1f;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: inline-block;
    padding: 0 150px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-size: 30px;
    // 保持在最后的动作，防止页面周期过慢，文字又显现
    animation: cool 2s forwards;
    -webkit-animation: cool 2s forwards;
  }
}
</style>