<template>
  <div class="pie-chart" id="pie-wrapper"></div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var option = {
      // backgroundColor: "#0e2147",
      grid: {
        left: "11%",
        top: "8%",
        right: "11%",
        bottom: "8%",
        containLabel: true
      },
      xAxis: [
        {
          show: false
        }
      ],
      yAxis: [
        {
          axisTick: "none",
          axisLine: "none",
          offset: "10",
          axisLabel: {
            textStyle: {
              color: "#b8bcd8",
              fontSize: "16"
            }
          },
          data: [
            "校园文化节朗诵比赛 1",
            "校园文化节朗诵比赛 2",
            "校园文化节朗诵比赛 3",
            "校园文化节朗诵比赛 4",
            "校园文化节朗诵比赛 5",
            "校园文化节朗诵比赛 6",
            "校园文化节朗诵比赛 7",
            "校园文化节朗诵比赛 8",
            "校园文化节朗诵比赛 9",
            "校园文化节朗诵比赛 10",
          ]
        },

        {
          nameGap: "50",
          nameTextStyle: {
            color: "#ffffff",
            fontSize: "16"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          data: []
        }
      ],
      series: [
        {
          name: "条",
          type: "bar",
          yAxisIndex: 0,
          data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
          label: {
            normal: {
              show: true,
              position: "right",
              textStyle: {
                color: "#b8bcd8",
                fontSize: "16"
              }
            }
          },
          barWidth: 12,
          itemStyle: {
            normal: {
              color: "#1599ff"
            }
          },
          z: 2
        },
      ]
    };

    let myChart = echarts.init(document.getElementById("pie-wrapper"), "light");
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  }
};
</script>

<style scoped>
.pie-chart {
  flex: 1;
}
</style>
