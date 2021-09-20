import { Box, Container, Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import { pagePath } from "../../utils/constants/pagePath";
import MyOrder from "./components/MyOrder";
import MyProfile from "../../containers/MyProfile";
import MyWishlist from '../../containers/MyWishlist';
import SupportTickets from './components/SupportTickets';
import MyAddresses from './components/MyAddresses';
import PaymentMethods from './components/PaymentMethods';
import Style from '../../style/page/Profile.module.scss';

export default function Profile(params) {
    return (
        <Container>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Menu />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box className={Style.boxContent}>
                            <Switch>
                                <Route path={pagePath.profileOrder} component={MyOrder} />
                                <Route path={pagePath.profileWishlist} component={MyWishlist} />
                                <Route path={pagePath.profileSupportTickets} component={SupportTickets} />
                                <Route path={pagePath.profileInfo} component={MyProfile} />
                                <Route path={pagePath.profileAddresses} component={MyAddresses} />
                                <Route path={pagePath.profilePayment} component={PaymentMethods} />
                            </Switch>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};
