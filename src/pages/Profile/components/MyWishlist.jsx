import { Box, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import Style from '../../../style/components/MyWishlist.module.scss'

export default function MyWishlist(params) {
    return (
        <Box className={Style.header}>
            <Favorite />
            <Typography variant="h2">My Wish List</Typography>
        </Box>
    )
};
