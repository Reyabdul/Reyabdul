import Navigation from "./Navigation";

import "../../../globals.css";
import "./Header.css";

export default function Header() {
    return (
        <header className="header flex" id="header">
            <Navigation />
        </header>
    )
}