import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Style from "../../../style/components/CardStyle.module.scss"


export default function FeaturedBrandsItem(params) {
    return(
        <Link to="#" className={Style.link}>
            <Box className={Style.cardRatings}>
                <Box className={Style.image}>
                    <img src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=3840&q=75" alt="" />
                </Box>
                <Box component="h5" className={Style.name}>London Britches</Box>
            </Box>
        </Link>
    )
};
