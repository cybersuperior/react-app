import { Grid } from "@mui/material"
import { CustomHorizontalBarChart } from "../../components/analytics/charts/CustomHorizontalBarChart"
import { CustomLineChart } from "../../components/analytics/charts/CustomLineChart"
import { CustomPieChart } from "../../components/analytics/charts/CustomPieChart"
import { CustomChartCard } from "../../components/analytics/cards/CustomChartCard"
import { CustomSingleValueAnalyticsCard } from "../../components/analytics/cards/CustomSingleValueAnalyticsCard"
import { blue, deepOrange, green, purple } from "@mui/material/colors"
import { AddCircleRounded, AddHomeWorkRounded, AddRounded, HomeWorkRounded, LockRounded, ScheduleRounded } from "@mui/icons-material"
import { CustomVerticalBarChart } from "../../components/analytics/charts/CustomVerticalBarChart"
import { CustomDenseTable } from "../../components/analytics/charts/CustomDenseTable"


export const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"12,000"}
          metric={{
            name: "Condos",
            color: purple[300]
          }}
          Icon={HomeWorkRounded}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"2,500"}
          metric={{
            name: "Available",
            color: deepOrange[300]
          }}
          Icon={AddCircleRounded}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"9,500"}
          metric={{
            name: "Leased",
            color: blue[300]
          }}
          Icon={LockRounded}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomSingleValueAnalyticsCard
          value={"400"}
          metric={{
            name: "Expiring",
            color: green["A400"]
          }}
          Icon={ScheduleRounded}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard
          title={"Building Breakdown"}
          height="220px"
          chart={<CustomVerticalBarChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard
          title={"Total Rent Collected"}
          height="220px"
          chart={<CustomLineChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CustomChartCard
          title={"Number Of Upcoming Lease Expirations"}
          height="200px"
          chart={<CustomHorizontalBarChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomChartCard
          title={"Available vs Leased"}
          height="200px"
          chart={<CustomPieChart />} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomChartCard
          title={"Expirations By Building"}
          height="200px"
          chart={<CustomDenseTable />} />
      </Grid>
    </Grid>)
}