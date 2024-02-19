import { Card, Typography } from "@mui/material"

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
            color="#F5F5F5"
            gutterBottom>
            {title}
          </Typography>
        }
        {chart}
      </>
    </Card>
  )
}