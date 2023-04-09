<template>
  <div class="home-about-text">
    <main>
      <h1 class="sub-title">Mr.Fan</h1>
      <h3 class="main-title">共沐春鳅</h3>
      <span class="seperator">***</span>
      <div class="content">
        <p>喜欢看有趣和脑洞大开的漫画，看主角们在不同的世界观下进行冒险、解除危机，那是一种享受。喜欢的食物有鱼、老火靓汤、炒河粉、肠粉、烧骨粥等。</p>
        <p>
          想要去做的事情有很多，跳舞、作曲翻唱、临摹、健身、研究菜谱、玩游戏、看小说、旅游、带家人胡吃海喝，办派对、看烟花、学摄影、学视频剪辑...要是人能分身成十个就好了。
        </p>
        <p>有的时候会像只懒猫，这不关心，那不想理，只想趴着，与世无争。但是对于自己感兴趣地东西，会想着系统地去学习，争取学得更多更好。</p>
        <p>早睡身体好，晚起人会飘。人生不是百米冲刺，它是一场马拉松，坚持到最后，那才是胜利，我们能做且唯一能做的，应该是即不急于一时也不怠惰， 要脚踏实地，走好当下的每一步。</p>
      </div>
      <!-- <p class="cool-move"><span>一起学习</span></p> -->
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
main {
  text-align: center;
  .sub-title {
    font-family: serif;
    color: #4b719f;
    font-size: 80px;
    font-style: oblique;
    font-weight: 300;
    letter-spacing: -8px;
  }
  .main-title {
    letter-spacing: 0.05em;
    font-size: 40px;
    position: relative;
    top: -30px;
    font-weight: 700;
    line-height: 40px;
  }
  .seperator {
    margin: 0 auto 10px;
    color: #ccc;
    font-weight: 300;
  }
  .content {
    text-align: left;
    text-indent: 30px;
    margin-bottom: 30px;
    color: #8b8e94;
    line-height: 24px;
    font-size: 15px;
    font-family: Arial, sans-serif;
  }
  .cool-move {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    span {
      position: relative;
      border-bottom: 3px solid #000;
      cursor: pointer;
      padding-bottom: 5px;
      &::after {
        position: absolute;
        left: 0;
        bottom: -3px;
        content: "";
        display: inline-block;
        height: 3px;
        width: 0;
        background: #ffa33e;
        -webkit-transition: 0.3s all;
        transition: 0.3s all;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
}
</style>