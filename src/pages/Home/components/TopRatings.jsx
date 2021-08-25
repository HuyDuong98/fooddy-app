import { Card, CardContent, Grid } from "@material-ui/core";
import TopRatingsItem from "./TopRatingsItem";
import Style from "../../../style/components/CardStyle.module.scss"

export default function TopRatings(params) {
    return (
        <Card className={Style.cardPaper}>
            <CardContent className={Style.cardContent}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={3}>
                        <TopRatingsItem key={1}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TopRatingsItem  key={2}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TopRatingsItem key={3}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TopRatingsItem  key={4}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};
