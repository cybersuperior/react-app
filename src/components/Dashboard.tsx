import { Card, CardContent, Grid, Typography } from "@mui/material"

export const Dashboard = () => {
    return (
    <Grid container spacing={8}>
        <Grid item xs={6}>
            
    <Card sx={{ boxShadow: 3 }} >
        <CardContent>

        <Typography variant={"h6"}>This is the left side of the page in an h6 header</Typography> 
        </CardContent>
           </Card>
        </Grid>
        <Grid item xs={6}>
        <Typography variant={"h5"}> This is the right side of the page in an h5 header</Typography>
        </Grid>
    </Grid>)
}