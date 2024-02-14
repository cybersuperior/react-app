import { Grid } from "@mui/material"
import { CustomBarChart } from "../../components/analytics/charts/CustomBarChart"
import { CustomLineChart } from "../../components/analytics/charts/CustomLineChart"
import { CustomPieChart } from "../../components/analytics/charts/CustomPieChart"
import { CustomChartCard } from "../../components/analytics/cards/CustomChartCard"
import { CustomSingleValueAnalyticsCard} from "../../components/analytics/cards/CustomSingleValueAnalyticsCard"
import { blue, cyan, green, purple } from "@mui/material/colors"


export const Dashboard = () => {
  return (
    <Grid container spacing={2}>
       <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"12,000"}
              metric={{
                name: "Assets Tracked",
                color: purple[300]
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"3,000"}
              metric={{
                name: "On-Premises",
                color: blue[300]
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"9,000"}
              metric={{
                name: "Off-Premises",
                color: cyan[300]
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"1,000"}
              metric={{
                name: "Transfers Today",
                color: green[300]
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard title={"Top Transfer Locations"} chart={<CustomBarChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard title={"Daily Transfers"} chart={<CustomLineChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CustomChartCard title={"On-Premises vs Off-Premises"} chart={<CustomPieChart />} />
      </Grid>
    </Grid>)
}