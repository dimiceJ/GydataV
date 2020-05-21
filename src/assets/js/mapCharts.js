import echarts from "echarts";
import "echarts/map/js/china";
import {
  bus
} from "@/utils/bus"

const mapCharts = {
  init: (domID, allData, mapName) => {
    return mapCharts.render_echart(domID, allData, mapName)
  },
  opt: (allData, mapName) => {
    var toolBoxFlag = mapName == 'china' ? false : true;

    if (allData.length > 0) {
      var minVal = allData[0].value,
        maxVal = allData[0].value;
      for (let i = 0; i < allData.length - 1; i++) {
        maxVal = maxVal < allData[i + 1].value ? allData[i + 1].value : maxVal;
        minVal = minVal < allData[i + 1].value ? minVal : allData[i + 1].value;
      }
    }

    let mapData = {

      toolbox: {
        show: toolBoxFlag,
        showTitle: false,
        top: 20,
        left: 20,
        feature: {
          myTool1: {
            show: true,
            icon: 'path://M682.424996 911.667585c-8.490372 0-17.041118-2.841721-24.091698-8.685823L199.142038 522.585079c-8.662287-7.185656-13.682627-17.853623-13.682627-29.112038s5.02034-21.926382 13.682627-29.111015L658.333298 83.941807c16.068977-13.325493 39.902802-11.06194 53.228295 4.995781 13.313214 16.081257 11.073196 39.901779-4.995781 53.228295L282.502607 493.473041 706.565812 844.756663c16.068977 13.326517 18.308995 37.147038 4.995781 53.228295C704.080202 907.004379 693.301717 911.667585 682.424996 911.667585z',
            onclick: function () {
              bus.$emit("backChina", 100000);
            },
          }
        },
        iconStyle: {
          color: '#14B2FC',
          borderColor: '#14B2FC'
        }
      },
      tooltip: {
        show: true,
        formatter: function (params) {
          if (params.data) return params.name + "：" + params.data["value"];
        }
      },
      visualMap: {
        show: true,
        type: "continuous",
        text: ["高", "低"],
        showLabel: true,
        left: "20",
        min: minVal,
        max: maxVal,
        inRange: {
          color: ["#363fff","#1fa9f8", "#6030cc", "#e743ff" ]
        },
        splitNumber: 0,
        textStyle: {
          color: "#7B93A7"
        }
      },

      series: [{
        data: allData,
        scaleLimit: {
          min: 1,
          max: 1
        },
        // name: self.pieName, // 默认名字，tooltip的title
        type: "map",
        roam: false,
        map: mapName, // 这里要跟registerMap方法中第一个参数对应
        // 文本位置修正
        textFixed: {
          // Alaska: [40, -20]
        },
        itemStyle: {
          color: "#000",
          areaColor: "#11164b",
          borderColor: "blue",
          borderWidth: 0.5
        },
        label: {
          normal: {
            show: true,
            formatter: function (val) {
              val.value = val.value ? val.value : '';
              var area_content =
                "{a|" + val.name + "}" + "-" + "{b|" + val.value + "}";
              return area_content.split("-").join("\n");
            }, //让series 中的文字进行换行
            rich: {
              a: {
                color: '#fff'
              },
              b: {
                color: "#fff",
                fontFamily: "Microsoft YaHei",
                fontSize: 14
              }
            } //富文本样式,就是上面的formatter中'{a|'和'{b|'
          },
          emphasis: {
            show: false
          }
        } //地图中文字内容及样式控制
      }]
    };
    return mapData
  },
  render_echart: (domID, allData, mapName) => {

    let myChart = echarts.init(
      document.getElementById(domID),
      "light"
    );
    var opt = mapCharts.opt(allData, mapName);
    if (mapName == 'guangdong') {
      echarts.registerMap(
        "guangdong",
        require("../../../static/chinaMap/440000.json")
      );

    } else if (mapName == 'hubei') {
      echarts.registerMap(
        "hubei",
        require("../../../static/chinaMap/420000.json")
      );
    } else if (typeof mapName != 'string') {
      opt = allData
    }

    myChart.setOption(opt);

    myChart.on("click", params => {
      if (params.name != '湖北' && params.name != '广东') {
        return
      } else {
        var _regionNo;
        if (params.name == '湖北') {
          _regionNo = 420000
        } else {
          _regionNo = 440000
        }
        bus.$emit("backChina", _regionNo);
      }
    });

    return myChart
  }
}


export default mapCharts
