import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};
