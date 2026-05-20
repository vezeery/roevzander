import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PortofolioItem from "../components/portofolioitem";
import "../globals.css";


export default function Portofolio() {
    return (
        <div>
            <Navbar />
            <PortofolioItem />
            <Footer />
        </div>
    );
}