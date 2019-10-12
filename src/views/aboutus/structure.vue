/* 组织架构 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <!-- <div id="myChart" :style="{width: '840px', height: '1000px'}"></div> -->
    <div class="img_box" align="center">
      <img src="../../assets/auction/details/zuzhi.png" alt />
    </div>
  </div>
</template>
<script>
import Top from "@/components/line";
export default {
  components: {
    Top
  },
  data() {
    return {
      title: {
        name: "ORGANIZATION",
        desc: "组织架构"
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "手机品牌",
          subtext: "线、节点样式"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: false,

        series: [
          {
            name: "树图",
            type: "tree",
            orient: "horizontal", // vertical horizontal
            rootLocation: { x: 100, y: "60%" }, // 根节点位置  {x: 'center',y: 10}
            nodePadding: 20,
            symbol: "circle",
            symbolSize: 40,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "inside",
                  textStyle: {
                    color: "#cc9999",
                    fontSize: 15,
                    fontWeight: "bolder"
                  }
                },
                lineStyle: {
                  color: "#000",
                  width: 1,
                  type: "broken" // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
            data: [
              {
                name: "手机",
                value: 6,
                symbolSize: [90, 70],
                symbol:
                  "image://http://www.iconpng.com/png/ecommerce-business/iphone.png",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    }
                  }
                },
                children: [
                  {
                    name: "小米",
                    value: 4,
                    symbol:
                      "image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg",
                    itemStyle: {
                      normal: {
                        label: {
                          show: false
                        }
                      }
                    },
                    symbolSize: [60, 60],
                    children: [
                      {
                        name: "小米1",
                        symbol: "circle",
                        symbolSize: 20,
                        value: 4,
                        itemStyle: {
                          normal: {
                            color: "#fa6900",
                            label: {
                              show: true,
                              position: "right"
                            }
                          },
                          emphasis: {
                            label: {
                              show: false
                            },
                            borderWidth: 0
                          }
                        }
                      },
                      {
                        name: "小米2",
                        value: 4,
                        symbol: "circle",
                        symbolSize: 20,
                        itemStyle: {
                          normal: {
                            label: {
                              show: true,
                              position: "right",
                              formatter: "{b}"
                            },
                            color: "#fa6900",
                            borderWidth: 2,
                            borderColor: "#cc66ff"
                          },
                          emphasis: {
                            borderWidth: 0
                          }
                        }
                      },
                      {
                        name: "小米3",
                        value: 2,
                        symbol: "circle",
                        symbolSize: 20,
                        itemStyle: {
                          normal: {
                            label: {
                              position: "right"
                            },
                            color: "#fa6900",
                            brushType: "stroke",
                            borderWidth: 1,
                            borderColor: "#999966"
                          },
                          emphasis: {
                            borderWidth: 0
                          }
                        }
                      }
                    ]
                  },
                  {
                    name: "苹果",
                    symbol:
                      "image://http://www.viastreaming.com/images/apple_logo2.png",
                    symbolSize: [60, 60],
                    itemStyle: {
                      normal: {
                        label: {
                          show: false
                        }
                      }
                    },
                    value: 4
                  },
                  {
                    name: "华为",
                    symbol:
                      "image://http://market.huawei.com/hwgg/logo_cn/download/logo.jpg",
                    symbolSize: [60, 60],
                    itemStyle: {
                      normal: {
                        label: {
                          show: false
                        }
                      }
                    },
                    value: 2
                  },
                  {
                    name: "联想",
                    symbol:
                      "image://http://www.lenovo.com.cn/HomeUpload/Home001/6d94ee9a20140714.jpg",
                    symbolSize: [100, 40],
                    itemStyle: {
                      normal: {
                        label: {
                          show: false
                        }
                      }
                    },
                    value: 2
                  }
                ]
              }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  height: 704px;
  .img_box {
    width: 86.2565%;
    margin: auto;
    margin-top: 2.875rem;
  }
}
</style>