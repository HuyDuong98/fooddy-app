import { Container,MenuList,MenuItem } from "@material-ui/core";
import DropdownList from '../customComponents/DropdownList';
import useStyles from "../style/useStyle";

export default function Menu(params) {
    const classes = useStyles();
    return (
        <Container className={`${classes.boxdflex} zindex-10`}>
            <DropdownList />
            <MenuList className={`${classes.boxdflex} ${classes.textDefaultColor}`}>
                <MenuItem>Home</MenuItem>
                <MenuItem>Pages</MenuItem>
                <MenuItem>User Account</MenuItem>
                <MenuItem>Vendor Account</MenuItem>
                <MenuItem>Contact Us</MenuItem>
            </MenuList>
        </Container>
    )
};
