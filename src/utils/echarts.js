/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-06 10:23:29
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-06 10:24:18
 * @FilePath: /vue-vite-element-admin/src/utils/echarts.js
 * @Description: echarts配置
 */
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use(
    [TitleComponent, PieChart, LegendComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);

export default echarts