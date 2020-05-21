<template>
  <div class="xpanel-wrapper xpanel-wrapper-33">
    <div class="xpanel xpanel-l-b box-wrapper">
      <div class="title">
        <span
          class="toggle-span"
          :class="lineCType=='primary'?'toggle-act':''"
          @click="lineCType='primary'"
        >小学</span>
        <span class="lc-diagonal">/</span>
        <span
          class="toggle-span middle-toggle-span"
          :class="lineCType=='primary'?'':'toggle-act'"
          @click="lineCType='middle'"
        >初中</span>
        各年级课程学习次数统计
      </div>
      <div id="primary-line"></div>
    </div>
  </div>
</template>

<script>
var cLine;
import echarts from "echarts";
export default {
  props: ["schoolType"],
  data() {
    return {
      lineCType: "primary",
      lines: {
        primaryCourseLine: {
          nameList: ["2019-1", "2019-2", "2019-3"],
          grade1List: [5, 8, 4],
          grade2List: [2, 25, 15],
          grade3List: [25, 8, 12],
          grade4List: [45, 41, 36],
          grade5List: [25, 0, 12],
          grade6List: [87, 13, 33]
        },
        middleCourseLine: {
          nameList: ["2019-4", "2019-5", "2019-6"],
          grade7List: [0, 1, 2],
          grade8List: [3, 4, 5],
          grade9List: [6, 7, 8]
        },
        gameLine: {
          nameList: ["2019-7", "2019-8", "2019-9"],
          trainList: [23, 33, 14],
          funList: [23, 33, 14],
          emotionList: [23, 33, 14]
        }
      },
      nowOpt: {},
      primaryOpt: {
        name: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
        color: [
          "#2ddbb5",
          "#0096f3",
          "#d0a00e",
          "#b934da",
          "#d0570e",
          "#2a9c2d"
        ],
        propString: [
          "grade1List",
          "grade2List",
          "grade3List",
          "grade4List",
          "grade5List",
          "grade6List"
        ]
      },
      middleOpt: {
        name: ["七年级", "八年级", "九年级"],
        color: ["#2ddbb5", "#0096f3", "#d0a00e"],
        propString: ["grade7List", "grade8List", "grade9List"]
      },
      seriesArr: []
    };
  },
  methods: {
    echartInit() {
      cLine = echarts.init(document.getElementById("primary-line"));
      var that = this;
      var type = this.lineCType;
      this.nowOpt = type == "primary" ? this.primaryOpt : this.middleOpt;

      if (type == "primary") {
        this.nowOpt = Object.assign(this.nowOpt, this.lines.primaryCourseLine);
      } else if (type == "middle") {
        this.nowOpt = Object.assign(this.nowOpt, this.lines.middleCourseLine);
      }

      this.seriesArr = seriesFn(this.nowOpt);

      function seriesFn(obj) {
        var seriesArr = [];
        var len = obj.name.length;

        for (let i = 0; i < len; i++) {
          var serieItem = {
            name: obj.name[i],
            type: "line",
            smooth: true, //平滑曲线显示
            // showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: obj.color[i]
            },
            lineStyle: {
              color: obj.color[i]
            },
            data: obj[obj.propString[i]]
          };
          seriesArr.push(serieItem);
        }
        return seriesArr;
      }

      var option = {
        grid: {
          top: "40px",
          left: "50px",
          right: "20px",
          bottom: "30px"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        legend: {
          data: this.nowOpt.name,
          type: "scroll",
          orient: "horizontal",
          width: "70%",
          zlevel: 99,
          top: "4%",
          right: "10",
          padding: "10",
          textStyle: {
            color: "#B8BCD8",
            fontSize: "14"
          },

          pageTextStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          data: this.nowOpt.nameList,

          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#B8BCD8" //X轴文字颜色
            }
          },
          axisLine: {
            lineStyle: {
              color: "#B8BCD8"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "学校/所",
            nameTextStyle: {
              color: "#7C809C"
            },
            splitLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#B8BCD8"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#B8BCD8"
              }
            }
          },
          {
            type: "value",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
              }
            }
          }
        ],
        series: this.seriesArr
      };

      cLine.setOption(option, true);
    }
  },
  mounted() {

    this.echartInit();
    window.addEventListener("resize", function() {
      console.log(`cLine`)
      cLine.resize();
    });
  },
  watch: {
    lineCType(nVal, oVal) {
      this.echartInit();
    }
  }
};
</script>

<style scoped>
#primary-line {
  flex: 1;
}
.box-wrapper {
  display: flex;
  flex-direction: column;
}
.toggle-span {
  font-size: 14px; /*no*/
  text-decoration: underline;
  transition: all 0.3s;
  width: 40px; /*no*/
  display: inline-block;
  text-align: center;
}
.toggle-span:hover {
  cursor: pointer;
}
.lc-diagonal {
  margin-left: 5px;
  margin-right: 5px;
}

.middle-toggle-span {
  margin-right: 20px;
}
.toggle-act {
  font-size: 24px;
  color: #23a4ff;
}
</style>
