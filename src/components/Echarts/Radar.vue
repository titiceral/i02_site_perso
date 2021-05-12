<template>
  <div ref="canvas">
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
  name: "radar",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "vintage",
  },

  props: {
    unit: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    indicatorsNames: {
      type: Array,
      required: true,
    },
    staticValues: {
      type: Array,
      default: undefined,
      required: false,
    },
    scaleTranslation: {
      // key: pair (value, translated)
      type: Object,
      default: undefined,
      required: false,
    },
  },
  data() {
    return {
      /* indicators: [
        {
          text: "t",
        },
      ],*/
      option: {
        color: ["#183051"],
        backgroundColor: "rgba(255,238,255,0)",
        title: {
          text: this.title,
          left: "center",
        },
        tooltip: {
          transitionDuration: 0,
          formatter: function () {
            return "<div style='visibility: hidden;'> </div>";
          },
          position: this.cbToolTipPosition,
        },
        //  scale: "true",

        radar: [
          {
            indicator: [
              {
                text: "t",
              },
            ],
            axisLabel: {
              fontSize: 12,
            },

            radius: 120,
            startAngle: 90,
            splitNumber: 3,
            shape: "circle",
            name: {
              formatter: "【{value}】",
              textStyle: {
                color: "#183051",
              },
              fontWeight: "bold",
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
            splitArea: {
              areaStyle: {
                color: ["#ff8e8e", "#fef7f7"],
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
            /* emphasis: {
              focus: "self",
              lineStyle: {
                width: 5,
              },
            },*/

            showSymbol: true,
            hoverAnimation: true,

            animation: true,
            tooltip: {
              show: true,
              trigger: "item",
            },

            data: [
              {
                value: [4, 2, 0.4, 1, 2],
                name: "Data A",
                symbolSize: 8,
              },
            ],
          },
        ],
      },
    };
  },
  /*beforeCreate() {
    this.indicators = [{ text: "toto" }];
  },*/
  mounted() {
    var indicators = new Array();

    var i = 0;
    for (var indicatorName in this.indicatorsNames) {
      indicators.push({
        text: this.indicatorsNames[indicatorName],
        max: this.max,
        axisLabel: {
          show: i++ == 0,
          formatter: this.cbAxisLabelFormatter,
        },
      });
    }
    // set data to radar
    this.option.radar[0].indicator = indicators;
    this.option.series[0].data[0].value = this.staticValues;
  },

  methods: {
    cbAxisLabelFormatter(value) {
      // translate scale axis if required (if dictinnary is transmited as parameters)

      if (this.scaleTranslation != undefined) {
        var translatedObj = this.scaleTranslation[value];
        if (translatedObj != undefined) {
          return translatedObj;
        } else {
          return "-";
        }
      } else {
        return value;
      }
    },
    cbToolTipPosition(mousePoint, params, dom, rectIn) {
      var canvas = this.$refs.canvas;
      var rect = canvas.childNodes[0].getBoundingClientRect();
      let position = document
        .querySelector("#RadarMousePosRef")
        .getBoundingClientRect();

      // mouse in on radar Item
      if (rectIn.width == rectIn.height) {
        var centerX = position.x + rect.width * 0.5;
        //  var centerY = position.y + rect.height * 0.5;

        // compute angle from mouse position and center of figure
        // get angle -pi:pi
        var angle =
          Math.atan2(
            mousePoint[0] - centerX,
            rect.height * 0.5 - mousePoint[1]
          ) * -1;

        // Translate to 0 pi
        if (angle < 0) {
          angle += Math.PI * 2;
        }
        // convert angle to index in array of data
        var seriesLength = this.indicatorsNames.length;
        var index =
          Math.round((angle / (Math.PI * 2)) * seriesLength) % seriesLength;

        // displayValue
        if (this.scaleTranslation == undefined) {
          dom.textContent =
            params.value[index] +
            (params.value[index] == this.max ? "+ " : " ") +
            this.unit;
        } else {
          dom.textContent =
            ((params.value[index] / this.max) * 100).toFixed(0) + "%";
        }
      } // mouse in on line
      else {
        dom.style.visibility = "hidden";
      }

      return { left: rectIn.x, top: rectIn.y - 32 };
    },
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
  margin: auto;
}
</style>
