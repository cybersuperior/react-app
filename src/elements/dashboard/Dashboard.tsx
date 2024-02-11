import { Grid } from "@mui/material"
import { CustomBarChart } from "../../components/analytics/charts/CustomBarChart"
import { CustomLineChart } from "../../components/analytics/charts/CustomLineChart"
import { CustomPieChart } from "../../components/analytics/charts/CustomPieChart"
import { CustomChartCard } from "../../components/analytics/cards/CustomChartCard"
import { CustomSingleValueAnalyticsCard} from "../../components/analytics/cards/CustomSingleValueAnalyticsCard"


export const Dashboard = () => {
  return (
    <Grid container spacing={2}>
       <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"300"}
              metric={{
                name: "Tracked Plants",
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"300"}
              metric={{
                name: "Tracked Plants",
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"300"}
              metric={{
                name: "Tracked Plants",
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
       <CustomSingleValueAnalyticsCard
              value={"300"}
              metric={{
                name: "Tracked Plants",
              }}
            />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CustomChartCard title={"Bar Chart Example"} chart={<CustomBarChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <CustomChartCard title={"Line Chart Example"} chart={<CustomLineChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CustomChartCard title={"Pie Chart Example"} chart={<CustomPieChart />} />
      </Grid>
    </Grid>)
}