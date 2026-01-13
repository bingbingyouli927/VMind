import { ChartType } from '../../../types';

const chartTypeMap: { [chartName: string]: string } = {
  [ChartType.BarChart.toUpperCase()]: 'bar',
  [ChartType.LineChart.toUpperCase()]: 'line',
  [ChartType.AreaChart.toUpperCase()]: 'area',
  [ChartType.PieChart.toUpperCase()]: 'pie',
  [ChartType.WordCloud.toUpperCase()]: 'wordCloud',
  [ChartType.ScatterPlot.toUpperCase()]: 'scatter',
  [ChartType.DynamicBarChart.toUpperCase()]: 'bar',
  [ChartType.FunnelChart.toUpperCase()]: 'funnel',
  [ChartType.DualAxisChart.toUpperCase()]: 'common',
  [ChartType.RoseChart.toUpperCase()]: 'rose',
  [ChartType.RadarChart.toUpperCase()]: 'radar',
  [ChartType.SankeyChart.toUpperCase()]: 'sankey',
  [ChartType.WaterFallChart.toUpperCase()]: 'waterfall',
  [ChartType.BoxPlot.toUpperCase()]: 'boxPlot',
  [ChartType.LiquidChart.toUpperCase()]: 'liquid',
  [ChartType.LinearProgress.toUpperCase()]: 'linearProgress',
  [ChartType.CircularProgress.toUpperCase()]: 'circularProgress',
  [ChartType.BubbleCirclePacking.toUpperCase()]: 'circlePacking',
  [ChartType.MapChart.toUpperCase()]: 'map',
  [ChartType.RangeColumnChart.toUpperCase()]: 'rangeColumn',
  [ChartType.SunburstChart.toUpperCase()]: 'sunburst',
  [ChartType.TreemapChart.toUpperCase()]: 'treemap',
  [ChartType.Gauge.toUpperCase()]: 'gauge',
  [ChartType.BasicHeatMap.toUpperCase()]: 'heatmap',
  [ChartType.VennChart.toUpperCase()]: 'venn'
};

/**
 * 将大模型返回的图表类型转化成vchart图表类型
 * @param type
 * @returns
 */
export const getVChartTypeByVmind = (type: string) => {
  const upperType = String(type).toUpperCase();
  // 如果图形出现小写，则会报错。需要转换为大写
  if (chartTypeMap[upperType]) {
    return chartTypeMap[upperType];
  }

  return null;
};

export const formatTypeToVMind = (type: string) => {
  return Object.values(ChartType).find(vmindType => chartTypeMap[vmindType.toUpperCase()] === type) ?? type;
};

/**
 * 维护一个类型映射：
 *
 * {
 *   'LINEAR PROGRESS CHART' : 'Linear Progress chart'
 * }
 */
export const llmChartTypeMap: Record<string, ChartType> = Object.keys(ChartType).reduce((prev: any, cur: string) => {
  const value = (ChartType as Record<string, string>)[cur];
  prev[value.toUpperCase()] = value;
  return prev;
}, {});
