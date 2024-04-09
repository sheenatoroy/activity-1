// books.js (Vuex store)
import { createStore } from 'vuex'

export default createStore({
    name: 'store', // Removed the space after 'store'
    state: {
        books: [
            { 
                title: 'After You', 
                author: 'Jojo Moyes', 
                description: 'It continues the story of Louisa Clark after Will\'s death. She is trying to move on.', 
                price: 100,
                imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/718ReYbwlFL.jpg'
            },
            { 
                title: 'Big Magic', 
                author: 'Elizabeth Gilbert', 
                description: 'Readers of all ages and walks of life have drawn inspiration from Elizabeth Gilbert\'s books.', 
                price: 200,
                imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91JxVjINNsL.jpg'
            },
            { 
                title: 'A Tale for the Time Being', 
                author: 'Ruth Ozeki', 
                description: 'In Tokyo, sixteen-year-old Nao has decided there\'s only one escape from her aching loneliness.', 
                price: 300,
                imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/9129dzchsGL.jpg'
            },
            { 
                title: 'The Great Gatsby', 
                author: 'F. Scott Fitzgerald', 
                description: 'The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King.', 
                price: 400,
                imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg'
            }
        ],
    },
    getters: {
        salesBooks: state => {
            return state.books.map(book => {
                return {
                    title: book.title,
                    author: book.author,
                    description: book.description,
                    price: book.price,
                    imgUrl: book.imgUrl
                }
            })
        },
    },
});
