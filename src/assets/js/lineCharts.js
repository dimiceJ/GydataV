
export default function lineCharts(timeArr, testData, prodData) {
  var option = {
    title: {
      text: "近一年安装情况",
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "normal"
      },
      top: "3%",
      left: "13%"
    },
    grid: {
      top: "50px",
      left: "50px",
      right: "15px",
      bottom: "50px"
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
      data: ["正式部署", "试点学校"],
      top: "2%",
      textStyle: {
        color: "#B8BCD8"
      }
    },
    xAxis: {
      data: timeArr,
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
    yAxis: [{
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
    series: [{
        name: "正式部署",
        type: "line",
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 10, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: "#1542FF"
        },
        lineStyle: {
          color: "#1542FF"
        },
        areaStyle: {
          color: "rgba(5,140,255, 0.2)"
        },
        data: prodData
      },
      {
        name: "试点学校",
        type: "line",
        smooth: true, //平滑曲线显示
        barWidth: 15,
        symbol: "circle", //标记的图形为实心圆
        itemStyle: {
          color: "#902DFF"
        },
        lineStyle: {
          color: "#902DFF"
        },
        data: testData
      }
    ]
  };
  return option
}
