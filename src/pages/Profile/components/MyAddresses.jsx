import { Box, Typography } from "@material-ui/core";
import { Room } from "@material-ui/icons";
import Style from "../../../style/components/MyAddress.module.scss"

export default function MyAddresses(params) {
    return (
        <Box className={Style.header}>
            <Room />
            <Typography variant="h2">My Addresses</Typography>
        </Box>
    )
};
