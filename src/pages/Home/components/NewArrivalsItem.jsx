import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Style from "../../../style/components/CardStyle.module.scss";

export default function NewArrivalsItem(params) {
    return(
        <Link to="#" className={Style.link}>
            <Box className={Style.cardRatings}>
                <Box className={Style.image}>
                    <img src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=3840&q=75" alt="" />
                </Box>
                <Box component="h5" className={Style.name}>Camera</Box>
                <Box><Typography color="primary" className={Style.price}>$3.300</Typography></Box>
            </Box>
        </Link>
    )
};
