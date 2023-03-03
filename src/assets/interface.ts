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
