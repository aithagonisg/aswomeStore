import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { productSales } from "./dataSource";
import { Typography } from "@material-ui/core";

// Resolves charts dependancy
charts(FusionCharts);

export default function StatusAllProducts() {
  return (
    <div>
      <Typography variant="h4">Sales of Products</Typography>
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={productSales}
      />
    </div>
  );
}
