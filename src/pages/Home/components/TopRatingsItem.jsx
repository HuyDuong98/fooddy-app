import { Box, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import Style from "../../../style/components/CardStyle.module.scss"

export default function TopRatingsItem(params) {
    return (
        <Link to="#" className={Style.link}>
            <Box textAlign="center" className={Style.cardRatings}>
                <Box className={Style.image}>
                    <img src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=3840&q=75" alt="" />
                </Box>
                <Grid container justifyContent="center" alignItems="center">
                    <Rating name="rating" value={4} readOnly size="small" className={Style.rating} />
                    <Typography component="small">(49)</Typography>
                </Grid>
                <Box component="h5" className={Style.name}>Camera</Box>
                <Box><Typography color="primary" className={Style.price}>$3.300</Typography></Box>
            </Box>
        </Link>
    )
};
