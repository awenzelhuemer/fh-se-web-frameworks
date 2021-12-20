import { baseUrl } from "../api/bookApi";

export default function BookListItem(props) {
    return (
        <>
            <img className="ui tiny image"
                src={`${baseUrl}/${props.book.picture}`}
                alt="book cover" />

            <div className="content">
                <div className="header">{props.book.title}</div>
                <div className="description">{props.book.author}</div>
                <div className="extra">{props.book.year}</div>
            </div>
        </>
    );
}