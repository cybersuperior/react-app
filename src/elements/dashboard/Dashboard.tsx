import { Grid, useTheme } from "@mui/material"
import { blue, deepOrange, green, purple } from "@mui/material/colors"
import { AddCircleRounded, HomeWorkRounded, LockRounded, ScheduleRounded } from "@mui/icons-material"
import { CustomHorizontalBarChart } from "../../components/analytics/charts/CustomHorizontalBarChart"
import { CustomLineChart } from "../../components/analytics/charts/CustomLineChart"
import { CustomPieChart } from "../../components/analytics/charts/CustomPieChart"
import { CustomChartCard } from "../../components/analytics/cards/CustomChartCard"
import { CustomSingleValueAnalyticsCard } from "../../components/analytics/cards/CustomSingleValueAnalyticsCard"
import { CustomVerticalBarChart } from "../../components/analytics/charts/CustomVerticalBarChart"
import { CustomDenseTable } from "../../components/analytics/charts/CustomDenseTable"

export const Dashboard = () => {
  const theme = useTheme()
  const chartColors = theme.palette.charts

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"1,000"}
          metric={{
            name: "Condos",
            color: chartColors.purple.main
          }}
          Icon={HomeWorkRounded}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"210"}
          metric={{
            name: "Available",
            color: chartColors.deepOrange.main
          }}
          Icon={AddCircleRounded}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"790"}
          metric={{
            name: "Leased",
            color: chartColors.blue.main
          }}
          Icon={LockRounded}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"85"}
          metric={{
            name: "Expiring",
            color: chartColors.green.main
          }}
          Icon={ScheduleRounded}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard
          title={"Building Breakdown"}
          height="36vh"
          chart={<CustomVerticalBarChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard
          title={"Total Rent Collected"}
          height="36vh"
          chart={<CustomLineChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard
          title={"Number Of Upcoming Lease Expirations"}
          height="35vh"
          chart={<CustomHorizontalBarChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomChartCard
          title={"Available vs Leased"}
          height="35vh"
          chart={<CustomPieChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomChartCard
          title={"Expirations By Building"}
          height="35vh"
          chart={<CustomDenseTable />} />
      </Grid>
    </Grid>)
}