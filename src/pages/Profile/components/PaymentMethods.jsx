import { Box, Typography } from "@material-ui/core";
import { Payment } from "@material-ui/icons";
import Style from "../../../style/components/PaymentMethods.module.scss";
export default function PaymentMethods(params) {
    return (
        <Box className={Style.header}>
            <Payment />
            <Typography variant="h2">Payment Methods</Typography>
        </Box>
    )
};
