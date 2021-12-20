import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="ui container">
            <h1>Home</h1>
            <p>Willkommen im WEA5 BookShop.</p>

            <Link className="ui red button" to="/books">
                Buchliste ansehen
                <i className="right arrow icon"></i>
            </Link>
        </div>
    );
}