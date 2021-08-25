import { Card, CardContent, Grid } from "@material-ui/core";
import Style from "../../../style/components/CardStyle.module.scss"
import NewArrivalsItem from "./NewArrivalsItem";

export default function NewArrivals(params) {
    return(
        <Card className={Style.cardPaper}>
            <CardContent className={Style.cardContent}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={2}>
                        <NewArrivalsItem key={1}/>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <NewArrivalsItem key={2}/>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <NewArrivalsItem key={3}/>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <NewArrivalsItem key={4}/>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <NewArrivalsItem key={5}/>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <NewArrivalsItem key={6}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};
