import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '60px',
        boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
        transition: 'all 250ms ease-in-out 0s',
        alignItems: "center"
    },
    boxdflex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "space-between"
    },
    navbarRoot: {
        paddingTop: "1rem !important",
        paddingBottom: "1rem !important",
        "&.show":{
            position:"fixed",
            width:"100%",
            zIndex:"1000",
            boxShadow:"rgb(43 52 69 / 10%) 0px 4px 16px",
            transition:"all 350ms ease-in-out 0s",
            animation:"400ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal none running animation-1lit4vl"
        }
    },
    bgWhite: {
        backgroundColor: "#fff"
    },
    searchNavbar: {
        border: "1px solid rgba(0, 0, 0, 0.23)"
    },
    buttonMenuDropdown: {
        width: "278px",
        backgroundColor: "#F6F9FC",
        color: "#2b3445"
    },
    buttonMenuDropdown_Text: {
        fontWeight: "600",
        textAlign: "left",
        flex: "1 1 0px",
        marginLeft: "10px",
        textTransform: "capitalize",
        color: "rgb(125, 135, 156)"
    },
    popperDropdown: {
        width: "100%",
        top: "14px !important",
        zIndex: 10
    },
    relative: {
        position: "relative"
    },
    textDefaultColor: {
        color: "#2B3445",
    },
    bannerMain: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "calc(100% - 24px)",
        paddingLeft:"150px",
        paddingRight:"150px",
        userSelect: "none" 
    },
    title:{
        fontSize:"50px",
        color:"#99a7c1",
        marginTop:"0",
        marginBottom:"1.35rem",
        lineHeight:"1.2",
        fontWeight:"bold",
        fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
    },
    cardProduct:{
        position:"relative"
    },
    subHeader:{
        marginTop:"60px",
        marginBottom:"24px"
    },
    btnNextArrow:{
        position:"absolute",
        top:"36%",
        right:"-20px",
        zIndex:"10",
        backgroundColor:"rgba(0, 0, 0, 0.04)"
    },
    btnPrevArrow:{
        position:"absolute",
        top:"36%",
        left:"-20px",
        zIndex:"10",
        backgroundColor:"rgba(0, 0, 0, 0.04)"
    }
}));
export default useStyles;