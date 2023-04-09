<template>
  <div class="home-about-text">
    <main>
      <h1 class="sub-title">Wantsay</h1>
      <h3 class="main-title">关于网站</h3>
      <span class="seperator">***</span>
      <div class="content">
        <p>是什么时候开始有了写自己网站的想法呢，这想法是随风儿来的吧。</p>
        <p>
          总之，作为开发者，可以有一个属于自己的网站，并且可根据自己的想法，任意去diy它，实在是太酷了！
          该网站仅用于个人学习，在设计上参考了许多国内外优秀的网站，希望能在巨人的肩膀上站稳。
        </p>
      </div>
      <p class="cool-move"><span>一起学习</span></p>
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
    color: #ffa33e;
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