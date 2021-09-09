import { Box, Typography } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Style from '../../../style/components/Menu.module.scss';
import { pagePath } from "../../../utils/constants/pagePath";

const DynamicFaIcon = ({ name }) => {
    const IconComponent = Icons[name];

    if (!IconComponent) { // Return a default one
        return <Icons.SentimentSatisfiedAlt />;
    }

    return <IconComponent />;
};


export default function Menu({ name, icon, titleItem, count }) {
    return (
        <Box className={Style.boxMenu}>
            <Typography className={Style.header}>DASHBOARD</Typography>
            <NavLink to={pagePath.profileOrder} className={Style.linkItem} activeClassName={Style.active}>
                <Box className={Style.name}>
                    <DynamicFaIcon name="ShoppingCartOutlined" />
                    <Typography>Orders</Typography>
                </Box>
                <Box>
                    <Typography>5</Typography>
                </Box>
            </NavLink>
            <NavLink to={pagePath.profileWishlist} className={Style.linkItem} activeClassName={Style.active}>
                <Box className={Style.name}>
                    <DynamicFaIcon name="FavoriteBorderOutlined" />
                    <Typography>Wishlist</Typography>
                </Box>
                <Box>
                    <Typography>5</Typography>
                </Box>
            </NavLink>
            <NavLink to={pagePath.profileSupportTickets} className={Style.linkItem} activeClassName={Style.active}>
                <Box className={Style.name}>
                    <DynamicFaIcon name="HeadsetMicOutlined" />
                    <Typography>Support Tickets</Typography>
                </Box>
                <Box>
                    <Typography>5</Typography>
                </Box>
            </NavLink>
            <Typography className={Style.header}>ACCOUNT SETTINGS</Typography>
            <NavLink to={ pagePath.profileInfo} className={Style.linkItem} activeClassName={Style.active}>
                <Box className={Style.name}>
                    <DynamicFaIcon name="PermIdentity" />
                    <Typography>Profile Info</Typography>
                </Box>
                <Box>
                    <Typography>5</Typography>
                </Box>
            </NavLink>
            <NavLink to={pagePath.profileAddresses} className={Style.linkItem} activeClassName={Style.active}>
                <Box className={Style.name}>
                    <DynamicFaIcon name="RoomOutlined" />
                    <Typography>Addresses</Typography>
                </Box>
                <Box>
                    <Typography>5</Typography>
                </Box>
            </NavLink>
            <NavLink to={pagePath.profilePayment} className={Style.linkItem} activeClassName={Style.active}>
                <Box className={Style.name}>
                    <DynamicFaIcon name="Payment" />
                    <Typography>Payment Methods</Typography>
                </Box>
                <Box>
                    <Typography>5</Typography>
                </Box>
            </NavLink>
        </Box>
    )
};
