export interface LineData {
  label: string;
  value: number;
}
export interface ChartData {
  yrange: number,
  lineData: LineData[]
}
export interface HeatMapData {
  group: string,
  variable: string,
  value: number
}
export interface SankeyData {
  nodes: { node: number, name: string }[],
  links: { source: number, target: number, value: number, }[]
}
