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
          <Typography sx={{ fontSize: 14, marginTop: '14px', marginLeft: '20px', marginBottom: '0px' }} color="#F5F5F5" gutterBottom>
            {title}
          </Typography>
        }
        {chart}
      </>
    </Card>
  )
}