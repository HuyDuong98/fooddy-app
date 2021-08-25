import { Card, CardContent, Grid } from "@material-ui/core";
import FeaturedBrandsItem from "./FeaturedBrandsItem";
import Style from "../../../style/components/CardStyle.module.scss"

export default function FeaturedBrands(params) {
    return (
        <Card className={Style.cardPaper}>
            <CardContent className={Style.cardContent}>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <FeaturedBrandsItem />
                    </Grid>
                    <Grid item md={6}>
                        <FeaturedBrandsItem />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};
