<template>
  <div class="home-about-text">
    <main>
      <h1 class="sub-title">Ms.Wang</h1>
      <h3 class="main-title">妞</h3>
      <span class="seperator">***</span>
      <div class="content">
        <p>喜欢运动，耐力很强故而擅长跑步，对爬山情有独钟，喜欢去征服不同的山。有趣的是尽管在海边长大，却不会游泳。</p>
        <p>
          胆子不大，却特别爱看恐怖片，因为一个人看不过瘾，所以会拉上胆子更小的男朋友去看。后来由于接触了魔道祖师爷的小说，喜欢上了磕cp，男男的那种，觉醒了不得了的属性。待朋友真诚热情，会很均匀地分配食物：“你一个，我一个，他一个，我一个，然后再给我一个”。
        </p>
        <p>作为资深吃货，唯一不能放过的就是美食，爱吃的东西不限于板栗、锅盔、臭豆腐、鸭肠、雪糕这些小吃，还爱吃水果、烧烤、火锅，尤其迷恋江湾校区的煎饼。即便如此，却非常地挑食，不爱吃海鲜外的肉类，吃叉烧包或粽子时，会先把中间的有肉的部分挖掉，也不爱吃坚果和烧腊。遇到心情不好的时候，会靠吃东西来安慰自己。虽然对辣度的接受能力有限，但每次进食都不满足于微辣，会去催老板多加辣椒，然后辣哭自己。</p>
        <p>在对待学习和工作上，责任心强，同时有很强的执行力，能够静下心去长时间钻研，甚至于废寝忘食。冰雪聪明加上勤奋努力，使她在每次考试中都能拿下年级前几，收获不少奖学金。当然，这并不影响她不会背诵乘法口诀的情况。</p>
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
    color: #ec2c64;
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