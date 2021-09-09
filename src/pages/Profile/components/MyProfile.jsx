import { Avatar, Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import Style from '../../../style/components/MyProfile.module.scss'

export default function MyProfile({ auth }) {
    const { user } = auth
    return (
        <>
            <Box className={Style.header}>
                <Person />
                <Typography variant="h2">My Profile</Typography>
            </Box>
            <Box className={Style.spacingLine}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>

                                <Box className={Style.boxAvatar}>
                                    <Box className={Style.boxAvatar}>
                                        <Avatar src={user.avatar} className={Style.avatar} />
                                        <Box>
                                            <Typography variant="h5">{user.firstName + " " + user.lastName}</Typography>
                                            <Typography variant="body2">Balance:
                                                <Typography variant="span" color="primary"> ${user.balance}</Typography>
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography className={Style.rank}>{user.rank}</Typography>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Box className={Style.boxNumber}>
                                            <Typography className={Style.number}>16</Typography>
                                            <Typography>All</Typography>
                                            <Typography>Orders</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Box className={Style.boxNumber}>
                                            <Typography className={Style.number}>02</Typography>
                                            <Typography>Awaiting </Typography>
                                            <Typography>Payments</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Box className={Style.boxNumber}>
                                            <Typography className={Style.number}>00</Typography>
                                            <Typography>Awaiting </Typography>
                                            <Typography>Shipment</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Box className={Style.boxNumber}>
                                            <Typography className={Style.number}>01</Typography>
                                            <Typography>Awaiting </Typography>
                                            <Typography>Delivery</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Card>
                <CardContent>
                    <Box className={Style.gridView}>
                        <Box className={Style.item}>
                            <Typography component="small">First Name</Typography>
                            <Typography>{user.firstName}</Typography>
                        </Box>
                        <Box className={Style.item}>
                            <Typography component="small">Last Name</Typography>
                            <Typography>{user.lastName}</Typography>
                        </Box>
                        <Box className={Style.item}>
                            <Typography component="small">Email</Typography>
                            <Typography>{user.email}</Typography>
                        </Box>
                        <Box className={Style.item}>
                            <Typography component="small">Phone</Typography>
                            <Typography>{user.phoneNumber}</Typography>
                        </Box>
                        <Box className={Style.item}>
                            <Typography component="small">Birth date</Typography>
                            <Typography>{user.birthDate}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
};
