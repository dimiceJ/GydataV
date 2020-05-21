
<template>
  <div class="xpanel-wrapper xpanel-wrapper-33 game-scroll">
    <div class="xpanel xpanel-l-t game-scroll-xpanlel">
      <div class="title">
        <div class="title-left" :style="{'color':color}">{{title}}</div>
        <div class="title-desc">
          <div class="title-desc-item" v-for="(item,index) in descData" :key="index">
            <span class="title-desc-span">{{item.desc}}</span>
            <span class="desc-block" :style="{ backgroundColor: item.blockBGC }"></span>
          </div>
        </div>
      </div>
      <vue-seamless-scroll
        :class-option="classOption"
        :data="dataList"
        style=" overflow: hidden;"
        v-if="isRouterAlive"
        class="seamless-scroll-box"
      >
        <ul class="scroll-wrap">
          <li class="scroll-content-item" v-for="(item,index) in dataList" :key="index">
            <div class="scroll-item-left">
              <span class="item-left-name">{{item.name}}</span>
              <div class="item-left-wrap">
                <div
                  class="item-left-type"
                  v-for="(classItem,classIndex) in item.apply"
                  :key="classIndex"
                >
                  <span class="primary-type-small" v-if="classItem==1"></span>
                  <span class="primary-type-middle" v-if="classItem==2"></span>
                  <span class="middle-type" v-if="classItem==4"></span>
                </div>
              </div>
            </div>
            <div class="scroll-item-right">{{item.count}}</div>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataList", "title", "color"],
  data() {
    return {
      descData: [
        {
          desc: "小学低年级",
          blockBGC: "#ee5efb"
        },
        {
          desc: "小学高年级",
          blockBGC: "#5efb83"
        },
        {
          desc: "初中",
          blockBGC: "#ffaf31"
        }
      ],

      isRouterAlive: true
    };
  },
  computed: {
    classOption() {
      return {
        step: 0.3,
        limitMoveNum: 5
      };
    }
  },
  methods: {
    classType(oldValue) {
      this.dataList.forEach((val, index, arr) => {
        val.apply = val.apply.toString().split("");
      });
    }
  },
  mounted() {
    console.log(this.color)
    this.classType(this.dataList);
    let that = this;
    window.addEventListener("resize", function() {
      that.isRouterAlive = false;
      that.$nextTick(() => (that.isRouterAlive = true));
    });
  }
};
</script>

<style scoped>
.game-scroll-xpanlel {
  display: flex;
  flex-direction: column;
}
.game-scroll .title {
  color: #fea71a;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.title .desc-block {
  width: 10px; /*no*/
  height: 10px; /*no*/
  display: inline-block;
  margin-left: 8px;
  border-radius: 50%;
}
.title-left {
  white-space: nowrap;
}
.title-desc-item {
  display: flex;
  align-items: center;
}
.title-desc-span {
  font-size: 17px; /*no*/
}
.title-desc {
  display: flex;
  font-weight: normal;
  margin-right: 14.1%;
  color: #b8bcd8;
  flex-wrap: wrap;
}
.title-desc-item + .title-desc-item {
  margin-left: 18px;
}

.scroll-wrap {
  flex: 1;
}
.scroll-content-item {
  display: flex;
  color: #b8bcd8;
  font-size: 18px; /*no*/
  justify-content: space-between;
  margin-bottom: 13px;
}
.item-left-name {
  word-break: break-all;
  font-size: 14px; /*no*/
}
.scroll-item-left {
  display: flex;
  justify-content: flex-start;
  width: calc(100% - 80px);
  align-items: center;
}
.item-left-type {
  display: flex;
  align-items: center;
}
.item-left-type span {
  color: #0a0e34;
  font-size: 12px; /*no*/
  white-space: nowrap;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  font-weight: bold;
}

.primary-type-small,
.primary-type-middle {
  margin-right: 6px;
}
.item-left-type .primary-type-small {
  background-color: #ee5efb;
}
.item-left-type .primary-type-middle {
  background-color: #5efb83;
}
.item-left-type .middle-type {
  background-color: #ffaf31;
}
.item-left-wrap {
  display: flex;
  margin-left: 20px;
  align-items: center;
  height: 100%;
}
.scroll-item-right {
  width: 80px;
  text-align: right;
}
.scroll-item-right {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.seamless-scroll-box {
  padding: 30px;
}
@media (min-width: 1510px) and (max-width: 1800px) {
  .title-desc-span {
    font-size: 12px;
  }
}
@media all and (max-width: 1510px) {
  .title-desc-span {
    font-size: 12px;
    display: inline-block;
    line-height: normal;
  }
  .title-desc {
    margin-right: 0;
    align-items: center;
  }

  .title-left {
    font-size: 12px; /*no*/
    margin-right: 10px; /*no*/
  }
  .title-desc-item + .title-desc-item {
    margin-left: 6px;
  }
  .title-desc-item:last-of-type {
    margin-right: 6px;
  }
}

@media all and (max-width: 1200px) {
  .title-desc-item + .title-desc-item {
    margin-left: 0;
  }
  .title-desc-item:first-of-type {
    margin-right: 10px;
  }
  .title-desc-item .title-desc-item:last-of-type {
    margin-left: 0;
  }
}
/* @media (min-width: 1510px) and (max-width: 1510px) */
</style>
