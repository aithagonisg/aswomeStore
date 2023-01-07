import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { overAllData } from "./dataSource";
import { Typography } from "@material-ui/core";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: "100%",
  height: 400,
  dataFormat: "json",
  dataSource: overAllData,
};

export default function StatusAllOver() {
  return (
    <>
      <Typography variant="h4">Sales across overseas</Typography>
      <ReactFC {...chartConfigs} />
    </>
  );
}
