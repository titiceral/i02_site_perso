<template>
  <div ref="canvas" id="centeredDiv">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "vintage",
  },

  data() {
    return {
      option: {
        color: ["#183051"],
        backgroundColor: "rgba(255,238,255,1)",
        title: {
          text: "Années d'Expérience",
          left: "center",
        },
        tooltip: {
          transitionDuration: 0,
          formatter: function () {
            return "<div style='visibility: hidden;'> toto</div>";
          },
          position: this.toto,
        },
        scale: "true",

        radar: [
          {
            indicator: [
              {
                text: "Qt",
                axisLabel: {
                  show: true,
                },
              },
              { text: "C++" },
              { text: "C#" },
            ],

            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            name: {
              formatter: "【{value}】",
              textStyle: {
                color: "#428BD4",
              },
            },

            axisLine: {
              lineStyle: {
                color: "#183051",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
          },
        ],
        series: [
          {
            name: "xp",
            type: "radar",
            lineStyle: {
              width: 4,
            },
            emphasis: {
              focus: "self",
              lineStyle: {
                width: 5,
              },
            },
            itemStyle: {
              color: "rgba(255, 0, 0, 1)",
              borderWidth: 6.5,
              borderColor: "rgba(0, 0, 0, 1)",
            },
            tooltip: {
              show: true,
              trigger: "item",
            },

            data: [
              {
                value: [100, 8, 0.4],
                name: "Data A",
                symbolSize: 18,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    toto(mousePoint, params, dom, rectIn) {
      var canvas = this.$refs.canvas;
      var rect = canvas.childNodes[0].getBoundingClientRect();
      let position = document
        .querySelector("#centeredDiv")
        .getBoundingClientRect();

      // mouse in on radar Item
      if (rectIn.width == rectIn.height) {
        var centerX = position.x + rect.width * 0.5;
        //  var centerY = position.y + rect.height * 0.5;

        // compute angle from mouse position and center of figure
        // get angle -pi:pi
        var angle = Math.atan2(
          mousePoint[0] - centerX,
          rect.height * 0.5 - mousePoint[1]
        );

        // Translate to 0 pi
        if (angle < 0) {
          angle += Math.PI * 2;
        }
        // convert angle to index in array of data
        var seriesLength = 3;
        var index =
          Math.round((angle / (Math.PI * 2)) * seriesLength) % seriesLength;

        // displayValue
        dom.textContent = params.value[index];
        return { left: rectIn.x, top: rectIn.y };
      } // mouse in on line
      else {
        dom.style.visibility = "hidden";
        return { left: rectIn.x, top: rectIn.y };
      }
    },
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
