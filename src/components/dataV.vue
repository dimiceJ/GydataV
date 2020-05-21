<template>
  <div class="index">
    <div class="header">
      <h1 class="header-title">心灵广雅使用统计</h1>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="col col-l">
          <div class="xpanel-wrapper xpanel-wrapper-40">
            <div class="xpanel xpanel-l-t box-wrapper">
              <div class="title">各年级交互式课程学习</div>
              <ul class="course">
                <li
                  v-for="(item,index) in courseData"
                  :key="index"
                  :class="item.act?'act':''"
                  @click="toggleClassNum(index)"
                >
                  <span>{{item.grade}}</span>
                  <span class="num">{{item.num}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-60">
            <div class="xpanel xpanel-l-b box-wrapper">
              <div class="title">{{leftBTitle}}年级各课程学习次数统计</div>
              <pie-Chart></pie-Chart>
            </div>
          </div>
        </div>
        <div class="col col-m">
          <div class="xpanel-wrapper xpanel-wrapper-33">
            <div class="xpanel xpanel-l-b box-wrapper">
              <div class="title">课程/游戏完成统计</div>
              <div class="icon-wrap">
                <div class="icon-item" v-for="(item,index) in iconData" :key="index">
                  <div class="icon-div">
                    <img :src="item.icon" alt />
                    <span>{{item.title}}</span>
                  </div>
                  <p>{{item.num}}</p>
                </div>
              </div>
            </div>
          </div>
          <line-Chart></line-Chart>
          <game-Chart></game-Chart>
        </div>
        <div class="col col-l">
          <game-scroll :dataList="rzList" :title="scrollType[0].title" :color="scrollType[0].color"></game-scroll>
          <game-scroll :dataList="qwList" :title="scrollType[1].title" :color="scrollType[1].color"></game-scroll>
          <game-scroll :dataList="qxList" :title="scrollType[2].title" :color="scrollType[2].color"></game-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from "./pieChart";
import lineChart from "./lineChart";
import gameChart from "./gameChart";
import gameScroll from "./gameScroll";

export default {
  data() {
    return {
      rzList: [
        {
          name: "Lagoon West-sourse to seeLagoon West-sourse ",
          apply: "124",
          count: 4545
        },
        {
          name: "迁徙日记",
          apply: "124",
          count: 55
        },
        {
          name: "疯狂打地鼠",
          apply: "1",
          count: 33
        },
        {
          name: "Lagoon West-sourse to seeLagoon West-sourse ",
          apply: "124",
          count: 4545
        },
        {
          name: "迁徙日记",
          apply: "124",
          count: 55
        },
        {
          name: "疯狂打地鼠",
          apply: "1",
          count: 33
        },
        {
          name: "数字谜题",
          apply: "24",
          count: 38
        }
      ],
      qwList: [
        {
          name: "eLagoon West-sourse ",
          apply: "124",
          count: 4545
        },
        {
          name: "迁日记徙",
          apply: "124",
          count: 55
        },
        {
          name: "个梵蒂冈",
          apply: "1",
          count: 33
        },
        {
          name: "狗肉馆人跟人",
          apply: "124",
          count: 4545
        },
        {
          name: "轟",
          apply: "124",
          count: 55
        },
        {
          name: "而非无法",
          apply: "1",
          count: 33
        },
        {
          name: "欢迎欢迎教育课",
          apply: "24",
          count: 38
        }
      ],
      qxList: [
        {
          name: "Lagoon West-sourse to seeLagoon West-sourse ",
          apply: "124",
          count: 4545
        },
        {
          name: "迁徙日记",
          apply: "124",
          count: 55
        },
        {
          name: "疯狂打地鼠",
          apply: "1",
          count: 33
        },
        {
          name: "Lagoon West-sourse to seeLagoon West-sourse ",
          apply: "124",
          count: 4545
        },
        {
          name: "迁徙日记",
          apply: "124",
          count: 55
        },
        {
          name: "疯狂打地鼠",
          apply: "1",
          count: 33
        },
        {
          name: "数字谜题",
          apply: "24",
          count: 38
        }
      ],
      scrollType: [
        {
          title: "认知训练",
          color: "#fea71a"
        },
        {
          title: "趣味测试",
          color: "#e835b3"
        },
        {
          title: "情绪放松",
          color: "#f95522"
        }
      ],
      schoolType: "primary",
      schoolMiddle: "middle",

      courseData: [
        { grade: "一年级", num: "10210", act: true },
        { grade: "二年级", num: "109", act: false },
        { grade: "三年级", num: "45", act: false },
        { grade: "四年级", num: "69", act: false },
        { grade: "五年级", num: "89", act: false },
        { grade: "六年级", num: "156", act: false },
        { grade: "七年级", num: "205", act: false },
        { grade: "八年级", num: "209", act: false },
        { grade: "九年级", num: "36", act: false }
      ],
      iconData: [
        {
          icon: require("../assets/img/course.png"),
          title: "课程学习",
          num: 459
        },
        {
          icon: require("../assets/img/perceive.png"),
          title: "认知训练",
          num: 121
        },
        {
          icon: require("../assets/img/test.png"),
          title: "趣味测试",
          num: 2922
        },
        {
          icon: require("../assets/img/relax.png"),
          title: "情绪放松",
          num: 11222
        }
      ]
    };
  },
  computed: {
    leftBTitle() {
      let nowIndex = this.courseData.findIndex(item => item.act);
      let classString = this.courseData[nowIndex].grade.slice(0, 1);
      return classString;
    }
  },
  components: {
    pieChart,
    lineChart,
    gameChart,
    gameScroll
  },
  methods: {
    toggleClassNum(_index) {
      let nowIndex = this.courseData.findIndex(item => item.act);
      this.courseData[nowIndex].act = false;
      this.courseData[_index].act = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datav-r-t {
  background-color: red;
}
.xpanel-wrapper-33 {
  height: 33.33333%;
}
.col-m {
  width: 40%;
  padding-top: 20px;
  height: 100%;
}
.course {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.box-wrapper {
  display: flex;
  flex-direction: column;
}
.course li {
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-right: 3%;
  border: 1px solid rgba(83, 113, 187, 1);
  box-sizing: border-box;
  height: 90px;
  align-items: center;
  padding: 0 10px;
  color: #b8bcd8;
  transition: all 0.3s;
}
.course li:hover {
  cursor: pointer;
}
.act {
  background-color: #1939ff;
}
.num {
  font-weight: bold;
}
.course li span {
  font-size: 16px; /*no*/
}
.icon-wrap {
  flex: 1;
  padding: 30px;
}
.icon-wrap {
  display: flex;
  flex-wrap: wrap;
}
.icon-item {
  box-sizing: border-box;
  width: 50%;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
}
.icon-div {
  display: flex;
  align-items: center;
  font-size: 24px;
}
.icon-div img {
  width: 60px;
  height: 60px;
}
.icon-item p {
  font-size: 26px;
  font-weight: bold;
}
.icon-div span {
  margin-left: 18px;
}
.icon-item:first-of-type {
  color: #1599ff;
  border-right: 1px solid #5371bb;
  border-bottom: 1px solid #5371bb;
}
.icon-item:nth-of-type(2) {
  color: #fea71a;
  border-bottom: 1px solid #5371bb;
}
.icon-item:nth-of-type(3) {
  color: #e835b3;
  border-right: 1px solid #5371bb;
}
.icon-item:nth-of-type(4) {
  color: #f95522;
}

@media all and (max-width: 1320px) {
  .course li {
    width: 44%;
    height: 50px;
  }
  .course li span {
    font-size: 12px; /*no*/
  }

  .icon-div {
    font-size: 18px;
  }
  .icon-item p {
    font-size: 18px;
  }
  .icon-wrap {
    padding: 20px;
  }
  .icon-item {
    padding: 0 6px;
  }
}
@media all and (max-height: 900px) {
  .course li {
    height: 50px;
  }
}
</style>
