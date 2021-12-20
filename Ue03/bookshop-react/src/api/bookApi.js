// const books = [
//     { id: 1, title: 'Book1', author: 'Author1', year: 2018, price: 12.1, description: 'abstract1' },
//     { id: 2, title: 'Book2', author: 'Author2', year: 2019, price: 12.1, description: 'abstract2' },
//     { id: 3, title: 'Book3', author: 'Author3', year: 2020, price: 12.1, description: 'abstract3' },
//     { id: 4, title: 'Book4', author: 'Author4', year: 2021, price: 12.1, description: 'abstract4' },
// ];

export const baseUrl = 'http://localhost:3000'

export function getBooks() {
    return fetch(`${baseUrl}/bookshop-rest-service/api/books`)
                .then(response => response.json());
}

export function getBookById(id) {
    return fetch(`${baseUrl}/bookshop-rest-service/api/book/${id}`)
                .then(response => response.json());
}