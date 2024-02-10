import { Card, CardContent } from "@mui/material"

type CustomChartCardProps = {
    chart: React.ReactNode;
}

export const CustomChartCard = ({ 
    chart
}: CustomChartCardProps) => {
    return (
        <Card sx={{ boxShadow: 3, backgroundColor: '#27293d' }} >
          <CardContent>
            {chart}
          </CardContent>
        </Card>
    )
}