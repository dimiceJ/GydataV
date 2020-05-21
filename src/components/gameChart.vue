<template>
  <div class="xpanel-wrapper xpanel-wrapper-33">
    <div class="xpanel xpanel-l-b box-wrapper">
      <div class="title">近一年游戏完成次数统计</div>
      <div id="game-line"></div>
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
          // 认知训练
          trainList: [23, 33, 14],
          // 趣味测试
          funList: [20, 30,8],
          // 情绪放松
          emotionList: [9, 5, 2]
        }
      }
    };
  },
  methods: {
    echartInit() {
       cLine = echarts.init(document.getElementById("game-line"));
      var that = this;

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
          data: ["认知训练", "趣味测试", "情绪放松"],
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
          }
        },
        xAxis: {
          data: this.lines.gameLine.nameList,

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
            name: "次数/次",
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
        series: [
          {
            name: "认知训练",
            data: this.lines.gameLine.trainList,
            itemStyle: {
              color: "#2ddbb5"
            },
            lineStyle: {
              color: "#2ddbb5",
              name: "认知训练"
            },
            smooth: true,
            symbol: "circle",
            symbolSize: 10,
            type: "line"
          },
          {
            name: "趣味测试",
            data: this.lines.gameLine.funList,
            itemStyle: {
              color: "#0096f3"
            },
            lineStyle: {
              color: "#0096f3",
              name: "趣味测试"
            },
            smooth: true,
            symbol: "circle",
            symbolSize: 10,
            type: "line"
          },
          {
            name: "情绪放松",
            data: this.lines.gameLine.emotionList,
            itemStyle: {
              color: "#d0a00e"
            },
            lineStyle: {
              color: "#d0a00e",
              name: "情绪放松"
            },
            smooth: true,
            symbol: "circle",
            symbolSize: 10,
            type: "line"
          }
        ]
      };
      cLine.setOption(option, true);
    }
  },
  mounted() {
    this.echartInit();
    window.addEventListener("resize", function() {
      cLine.resize();
    });
  }
};
</script>

<style scoped>
#game-line {
  flex: 1;
}
.box-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
