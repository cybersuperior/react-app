import { LocationSearching } from "@mui/icons-material"
import { Card, Paper, Typography } from "@mui/material"

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
    <Card
      sx={{
        padding: "15px",
        maxWidth: maxWidth || 250,
        height: height || 100,
        textAlign: "center",
        backgroundColor: "#171823",
        borderRadius: "6px"
      }}
    >
      <Typography sx={{ fontSize: "28px" }}>
 {value}
      </Typography>
      <Typography
        sx={{ color: metric?.color || "black", fontSize: "18px" }}
      >
            <LocationSearching/>   {metric?.name}
      </Typography>
    </Card>
  )
}
