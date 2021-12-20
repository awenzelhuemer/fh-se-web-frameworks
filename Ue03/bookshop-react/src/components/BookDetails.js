import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl, getBookById } from "../api/bookApi";

export default function BookDetails(props) {

    const params = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(undefined);

    useEffect(() => {
        getBookById(params.bookId).then(data => setBook(data.book));
    }, [params.bookId]);

    function onBackClick() {
        navigate('/books');
    }

    if (!book) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <div className="ui grid">

                <div className="four wide column">
                    <img className="ui large image"
                        src={`${baseUrl}/${book.picture}`}
                        alt="book cover" />
                </div>

                <div className="eight wide column">
                    <h1 className="ui header">{book.title}</h1>
                    <h3 className="ui header">{book.author}</h3>
                    <div className="ui divider"></div>
                    <div className="ui grid">
                        <div className="four wide column">
                            <h4 className="ui header">Preis</h4>
                            {book.price}
                        </div>
                        <div className="four wide column">
                            <h4 className="ui header">Erschienen</h4>
                            {book.year}
                        </div>
                    </div>
                </div>
                <div className="sixteen wide column">
                    <h3 className="ui header">Beschreibung</h3>
                    {book.description}
                </div>
            </div>
            <button className="ui red button" onClick={onBackClick}>Zurück zur Buchliste</button>
        </div>
    );
}