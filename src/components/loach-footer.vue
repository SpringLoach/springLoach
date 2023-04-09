<template>
  <div class="footer">
    <div class="footer-wrap">
      <span class="wrap-left">
        Copyright © 2023
        <a href="javascript:;">共沐春鳅有限公司</a>
        版权所有[粤A1-00001223-12]
      </span>
      <span class="wrap-right">
        <a href="https://github.com/SpringLoach/power" target="_blank">
          <span class="github icon"></span>
        </a>
        <span class="zhihu icon"></span>
        <span class="weixin icon"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.footer {
  height: 100%;
  background: #262626;
  .footer-wrap {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    align-items: center;
    margin: auto;
  }
}
.wrap-left {
  color: #8b8e94;
  a {
    color: rgba(255, 255, 255, 0.2);
  }
  a:hover {
    color: #fff;
  }
}
.wrap-right {
  .icon {
    margin-left: 18px;
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: contain;
    vertical-align: middle;
    cursor: pointer;
  }
  .github {
    background-image: url("../assets/img/footer/github.svg");
    &:hover {
      background-image: url("../assets/img/footer/github-active.svg");
    }
  }
  .zhihu {
    background-image: url("../assets/img/footer/zhihu.svg");
    &:hover {
      background-image: url("../assets/img/footer/zhihu-active.svg");
    }
  }
  .weixin {
    background-image: url("../assets/img/footer/weixin.svg");
    &:hover {
      background-image: url("../assets/img/footer/weixin-active.svg");
    }
  }
}
</style>
