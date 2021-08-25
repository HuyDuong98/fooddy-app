import { Box, Card, CardContent, Chip, Grid } from "@material-ui/core";
import Style from "../../../style/components/CardCategory.module.scss";

export default function CardCategory({ tag_name, num_order, image }) {
    return (
        <Card className={Style.cardCategory}>
            <CardContent className={Style.content}>
                <Grid container justifyContent="space-between">
                    <Chip color="secondary" size="small" label={tag_name} className={Style.chipTitle} />
                    <Chip className={Style.chipInfo} size="small" label={num_order} />
                </Grid>
                <img src={image} alt="" />
            </CardContent>
        </Card>
    )
};
