import { Card, Typography, useTheme } from "@mui/material"

type CustomChartCardProps = {
  chart: React.ReactNode;
  title?: string
  height: string
}

export const CustomChartCard = ({
  chart,
  title,
  height
}: CustomChartCardProps) => {
  const theme = useTheme()

  return (
    <Card sx={{ backgroundColor: '#171823', borderRadius: '8px', height: height }} >
      <>
        {title &&
          <Typography
            sx={{
              fontSize: 14,
              marginTop: '14px',
              marginLeft: '20px',
              marginBottom: '0px'
            }}
            color={theme.palette.charts.titleColor}
            gutterBottom>
            {title}
          </Typography>
        }
        {chart}
      </>
    </Card>
  )
}