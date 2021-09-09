import { Box, Typography } from "@material-ui/core";
import { HeadsetMic } from "@material-ui/icons";
import Style from "../../../style/components/SupportTickets.module.scss";

export default function SupportTickets(params) {
    return (
        <Box className={Style.header}>
            <HeadsetMic />
            <Typography variant="h2">Support Tickets</Typography>
        </Box>
    )
};
