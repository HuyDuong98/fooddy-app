import { Container, MenuList, MenuItem, Paper } from "@material-ui/core";
import DropdownList from '../customComponents/DropdownList';
import useStyles from "../style/useStyle";
import Style from "../style/components/Header.module.scss";

export default function Menu(params) {
    const classes = useStyles();
    return (
        <Paper elevation={3} rounded={0} className={Style.paperSubHeader}>
            <Container className={Style.subHeader}>
                <DropdownList />
                <MenuList className={Style.menuList}>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Pages</MenuItem>
                    <MenuItem>User Account</MenuItem>
                    <MenuItem>Vendor Account</MenuItem>
                    <MenuItem>Contact Us</MenuItem>
                </MenuList>
            </Container>
        </Paper>
    )
};
