<template>
  <div class="comics-dm">
    <div
      class="item-row"
      :class="{ 'bg-item-row': index % 2 !== 0 }"
      v-for="(list, index) in FormatComicsList"
      :key="index"
    >
      <div class="item" v-for="(item, indez) in list" :key="indez">
        <a class="left" :href="item.link" target="_blank">
          <img :src="item.src" alt="" />
        </a>
        <div class="right">
          <a
            class="title"
            :href="item.link"
            target="_blank"
            :title="item.title"
            >{{ item.title }}</a
          >
          <div class="author" :title="item.author">
            作者：<span class="value gray">{{ item.author }}</span>
          </div>
          <div class="type" :title="item.type">
            分类：<span class="value">{{ item.type }}</span>
          </div>
          <div class="new">
            更新：<a class="new-link" :href="item.newLink" target="_blank">{{
              item.new
            }}</a>
          </div>
          <div class="state">状态：{{ item.state }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comicsList: [
        {
          src: "https://images.dmzj.com/webpic/11/0210yitiaogoufml.jpg",
          link: "http://www.idmzj.com/info/yitiaogou.html",
          newLink: "https://www.dmzj.com/view/yitiaogou/46442.html",
          title: "一条狗",
          author: "使徒子",
          type: "搞笑",
          new: "特别篇",
          state: "已完结",
          time: "2016-02-07 00:00",
        },
        {
          src: "http://images.idmzj.com/webpic/13/zhuoyandexiana22222.jpg",
          link: "http://manhua.idmzj.com/zhuoyandexiana/",
          newLink: "http://manhua.idmzj.com/zhuoyandexiana/24501.shtml#@page=1",
          title: "灼眼的夏娜",
          author: "高桥弥七郎",
          type: "冒险/魔法",
          new: "第10卷",
          state: "已完结",
          time: "2013-10-10 00:00",
        },
        {
          src: "http://images.idmzj.com/webpic/19/fdyly190222.jpg",
          link: "http://manhua.idmzj.com/ftdyly/",
          newLink: "http://manhua.idmzj.com/ftdyly/127977.shtml#@page=1",
          title: "绯弹的亚里亚",
          author: "赤松中学/こよかよしの",
          type: "冒险/轻小说",
          new: "紫电魔女46",
          state: "连载中",
          time: "2022-11-02 00:00",
        },
        {
          src: "http://images.idmzj.com/webpic/14/0515lurennvzhufml.jpg",
          link: "http://manhua.idmzj.com/lrlzdycff/",
          newLink: "http://manhua.idmzj.com/lrlzdycff/79627.shtml",
          title: "路人女主的养成方法",
          author: "守姬武士/丸户史明",
          type: "爱情/宅系/轻小说",
          new: "剧场版视觉图",
          state: "已完结",
          time: "2018-12-24 00:00",
        },
        {
          src: "http://images.idmzj.com/webpic/8/160131banbenfml.jpg",
          link: "http://manhua.idmzj.com/wojiaobanbenwozuidiao/",
          newLink: "http://manhua.idmzj.com/wojiaobanbenwozuidiao/108715.shtml",
          title: "我叫坂本我最屌",
          author: "佐野菜见",
          type: "校园/搞笑",
          new: "8823番外",
          state: "已完结",
          time: "2021-01-28 00:00",
        },
        {
          src: "https://images.dmzj.com/webpic/2/bendanceshizhaohuanshou20110422.jpg",
          link: "http://manhua.idmzj.com/bendanceshizhaohuanshou/",
          newLink:
            "http://manhua.idmzj.com/bendanceshizhaohuanshou/77401.shtml",
          title: "笨蛋测验召唤兽",
          author: "井上坚二/まったくモー助",
          type: "欢乐向/秀吉",
          new: "第58问",
          state: "已完结",
          time: "2019-10-15 00:00",
        },
        {
          src: "https://images.dmzj.com/webpic/4/qiheidezidan.jpg",
          link: "http://manhua.idmzj.com/qiheidezidan/",
          newLink: "http://manhua.idmzj.com/qiheidezidan/36182.shtml",
          title: "漆黑的子弹",
          author: "もリのほん",
          type: "冒险/热血",
          new: "番外篇第06话",
          state: "已完结",
          time: "2015-04-11 00:00",
        },
        {
          src: "https://images.dmzj.com/webpic/8/160202jiqiaoshaonvfml.jpg",
          link: "http://manhua.idmzj.com/jiqiaoshaonv/",
          newLink: "http://manhua.idmzj.com/jiqiaoshaonv/95131.shtml",
          title: "机巧少女",
          author: "高城计/海冬レイジ",
          type: "冒险/魔法/轻小说",
          new: "第50话",
          state: "已完结",
          time: "2019-11-24 00:00",
        },
        {
          src: "https://images.dmzj.com/webpic/0/cwnh.jpg",
          link: "http://manhua.dmzj.com/yzdcwny/",
          newLink: "http://manhua.dmzj.com/yzdcwny/49487.shtml",
          title: "樱庄的宠物女友",
          author: "草野ほうき/鸭志田一",
          type: "欢乐向/轻小说",
          new: "第47话",
          state: "已完结",
          time: "2021-02-02 00:00",
        },
        {
          src: "https://images.dmzj.com/webpic/15/meihaoshijiebaoyan20190223.jpg",
          link: "http://manhua.dmzj.com/weizhemeihaodeshijiexianshangbaoyan/",
          newLink:
            "http://manhua.dmzj.com/weizhemeihaodeshijiexianshangbaoyan/107373.shtml",
          title: "为这个美好的世界献上爆炎！",
          author: "三嶋くろね/晓なつめ/森野カスミ",
          type: "冒险/魔法/轻小说",
          new: "续25话",
          state: "已完结",
          time: "2020-09-17 00:00",
        },
        {
          src: "https://images.dmzj.com/webpic/11/rylcxsd.jpg",
          link: "https://manhua.dmzj.com/rongyilouchuxinshengdenvpuxiaojiedaowojialaile/",
          newLink:
            "https://manhua.dmzj.com/rongyilouchuxinshengdenvpuxiaojiedaowojialaile/141924.shtml",
          title: "容易漏出心声的女仆小姐到我家来了",
          author: "ぎんもく",
          type: "欢乐向/职场",
          new: "第59话",
          state: "连载中",
          time: "2023-04-09 11:45",
        },
        {
          src: "https://images.dmzj.com/webpic/17/%E5%B0%8F%E4%BC%BD%E6%A4%B0%202%E5%8D%B7%E5%B0%81%E9%9D%A2.jpg",
          link: "https://manhua.dmzj.com/xiaojiayebingbukepa/",
          newLink: "https://manhua.dmzj.com/xiaojiayebingbukepa/135451.shtml",
          title: "小伽椰并不可怕",
          author: "百合太郎",
          type: "惊悚",
          new: "第06话",
          state: "连载中",
          time: "2023-04-09 11:52",
        },
        {
          src: "https://images.dmzj.com/webpic/15/nvpengyoubzzlbghkxsyok.jpg",
          link: "https://manhua.dmzj.com/nvpengyoubzzlbghkxsyok/",
          newLink:
            "https://manhua.dmzj.com/nvpengyoubzzlbghkxsyok/135449.shtml",
          title: "被女友诅咒了不过很开心所以OK",
          author: "平田トウエイ",
          type: "爱情/神鬼",
          new: "第55话",
          state: "连载中",
          time: "2023-04-09 11:43",
        },
        {
          src: "https://images.dmzj.com/webpic/10/bhddxylrbddysj200523.jpg",
          link: "https://manhua.dmzj.com/beihaidaodexianyilierenbeidiudaoyishijie/",
          newLink:
            "https://manhua.dmzj.com/beihaidaodexianyilierenbeidiudaoyishijie/140120.shtml",
          title: "北海道的现役猎人被丢到异世界",
          author: "カルトマ/ジュピタ一スタジオ",
          type: "冒险/爱情/轻小说 ",
          new: "第12.1话",
          state: "连载中",
          time: "2023-04-09 11:40",
        },
        {
          src: "https://images.dmzj.com/webpic/17/wfnasjdasx51554157.jpg",
          link: "https://manhua.dmzj.com/boyuanxiaojiexiantanbaiyiqie/",
          newLink:
            "https://manhua.dmzj.com/boyuanxiaojiexiantanbaiyiqie/140103.shtml",
          title: "波原小姐想坦白一切！",
          author: "にられば",
          type: "欢乐向/职场",
          new: "第14话",
          state: "连载中",
          time: "2023-04-08 14:29",
        },
        {
          src: "https://images.dmzj.com/webpic/7/201127tztxdmxz.jpg",
          link: "https://manhua.dmzj.com/tizaotuixiudemaoxianzhexiangyaoyouxianshenghuo/",
          newLink:
            "https://manhua.dmzj.com/tizaotuixiudemaoxianzhexiangyaoyouxianshenghuo/135427.shtml",
          title: "提早退休的冒险者想要悠闲生活",
          author: "糸濑ねめ/久櫛绿",
          type: "冒险/奇幻/轻小说",
          new: "第09话",
          state: "连载中",
          time: "2023-04-08 12:52",
        },
        {
          src: "https://images.dmzj.com/webpic/15/211227yuzhe.jpg",
          link: "https://manhua.dmzj.com/yuzhezhiye/",
          newLink: "https://manhua.dmzj.com/yuzhezhiye/140091.shtml",
          title: "愚者之夜",
          author: "安田佳澄",
          type: "科幻/颜艺",
          new: "第53话",
          state: "连载中",
          time: "2023-04-07 23:41",
        },
      ],
    };
  },
  computed: {
    FormatComicsList() {
      const arr = [];
      let i = 0;
      let num = 0;
      this.comicsList.forEach((item) => {
        if (num === 0) {
          arr[i] = [item];
        } else {
          arr[i].push(item);
        }
        num++;
        if (num === 5) {
          num = 0;
          i++;
        }
      });
      console.log(arr);
      return arr;
    },
  },
  methods: {},
};
</script>

<style scoped lang="less">
.comics-dm {
  margin: auto;
  margin-top: 30px;
  max-width: 1200px;
}

.item-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding: 12px 5px 20px;
}
.bg-item-row {
  background: #f5fdff;
  border-bottom: 1px dotted #c7eff0;
  border-top: 1px dotted #c7eff0;
}
.item {
  display: flex;
  width: 20%;
  .left {
    padding: 2px;
    border: 1px solid #cccccc;
    img {
      /* 去除底部3像素 */
      vertical-align: middle;
      width: 110px;
      height: 152px;
    }
  }
  .right {
    margin-left: 8px;
    font-size: 12px;
    // line-height: 21px;
    line-height: 26px;
    .title {
      color: #0187c5;
      font-weight: bold;
      max-width: 100px;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
      &:hover {
        color: #ff5901;
        text-decoration: underline;
      }
    }
    .author,
    .type {
      display: flex;
    }
    .gray {
      color: #666;
    }
    .value {
      flex: 1;
      max-width: 70px;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
    }
    .new-link {
      color: #0187c5;
      &:hover {
        text-decoration: underline;
      }
    }
    .time {
      color: #f30;
    }
  }
}
</style>
