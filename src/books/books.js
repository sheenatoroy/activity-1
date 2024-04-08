import { createStore } from 'vuex'

export default createStore({
    name: 'store',
    state: {
        books: [
            { title: 'After You', author: 'Jojo Myoes', 
            description: 'It continues the story of Louisa Clark after Wills death. She is trying to move on.', price: 100 },
            
            { title: 'Big Magic', author: 'Elizabeth Gilbert', 
            description: 'Readers of all ages and walks of life have drawn inspiration from Elizabeth Gilberts books.', price: 200  },
            
            { title: 'A Tale for the Time Being', author: 'F. Scott Fitzgerald', 
            description: 'In Tokyo, sixteen-year-old Nao has decided theres only one escape from her aching loneliness', price: 300  },

            { title: 'The Great Gatsby', author: 'Author 4', 
            description: 'The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King', price: 400  }
        ],
    },
    getters: {
        salesBooks: state => {
            var salesBooks = state.books.map(book => {
                return {
                    name: book.name,
                   
                }
            })
            return salesBooks
        },
    },
});