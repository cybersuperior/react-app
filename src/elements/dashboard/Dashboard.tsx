import { Card, CardContent, Grid } from "@mui/material"
import { CustomBarChart } from "../../components/charts/CustomBarChart"
import { CustomLineChart } from "../../components/charts/CustomLineChart"
import { CustomPieChart } from "../../components/charts/CustomPieChart"


export const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card sx={{ boxShadow: 3 }} >
          <CardContent>
            <CustomBarChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card sx={{ boxShadow: 3 }} >
          <CardContent>
            <CustomLineChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card sx={{ boxShadow: 3 }} >
          <CardContent>
            <CustomPieChart />
          </CardContent>
        </Card>
      </Grid>
    </Grid>)
}