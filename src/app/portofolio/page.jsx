import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PortofolioItem from "../components/portofolioitem";
import "../globals.css";


export default function Portofolio() {
    return (
        <div>
            <Navbar />
            <div className="px-4 py-16 md:px-8">
                <PortofolioItem />
            </div>
            <Footer />
        </div>
    );
}