import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Home from './components/Home';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <div className="ui container">
        <div className="ui two item tabs menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/books">Bücher</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
      </Routes>
      
      </div>
    </Router>
  );
}

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       selectedBook: undefined
//     }
//   }

//   showDetails(book) {
//     this.setState({
//       selectedBook: book
//     });
//   }

//   render() {
//     let content;
//     if(!this.state.selectedBook) {
//       content = <BookList onBookClick={this.showDetails.bind(this)} />;
//     } else {
//       content = <BookDetails book={this.state.selectedBook} onBackClick={this.showList.bind(this)} />;
//     }

//     return (
//       <div className="ui container">
//         {content}
//       </div>
//     );
//   }

//   showList() {
//     this.setState({
//       selectedBook: undefined
//     });
//   }
// }

export default App;
