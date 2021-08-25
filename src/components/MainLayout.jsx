import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "../containers/Header";
import BottomNavigate from "./BottomNavigate";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <BottomNavigate />
        </>
    )
};
