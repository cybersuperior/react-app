import { Paper, Typography } from "@mui/material"

type CustomSingleValueAnalyticsCardProps = {
  maxWidth?: number
  height?: number
  value: number | string
  metric: CustomSingleValueAnalyticsCardMetric
}

type CustomSingleValueAnalyticsCardMetric = {
  name: string
  color?: string
}

export const CustomSingleValueAnalyticsCard = ({
  maxWidth,
  height,
  value,
  metric
}: CustomSingleValueAnalyticsCardProps) => {
  return (
    <Paper
      elevation={8}
      sx={{
        padding: "15px",
        maxWidth: maxWidth || 250,
        height: height || 100,
        textAlign: "center",
        backgroundColor: "#27293d"
      }}
    >
      <Typography sx={{ fontSize: "40px" }}>
        {value}
      </Typography>
      <Typography
        variant={"h5"}
        sx={{ fontWeight: 600, color: metric?.color || "black" }}
      >
        {metric?.name}
      </Typography>
    </Paper>
  )
}
