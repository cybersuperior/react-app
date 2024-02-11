import { Card,  Typography } from "@mui/material"

type CustomChartCardProps = {
  chart: React.ReactNode;
  title?: string
}

export const CustomChartCard = ({
  chart,
  title
}: CustomChartCardProps) => {
  return (
    <Card sx={{ backgroundColor: '#27293d', borderRadius: '8px', height: '180px' }} >
      <>
      
      {title &&
          <Typography sx={{ fontSize: 14, marginTop: '12px', marginLeft: '12px', marginBottom: '0px' }} color="text.primary" gutterBottom>
            {title}
          </Typography>
        }
        {chart}
      </>
    </Card>
  )
}