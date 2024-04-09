<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="search-bar">
        <input type="text" placeholder="Search books..." v-model="searchQuery">
        <button @click="searchBooks">Search</button>
       
    </div>

    <main style="margin-top: 10%;">
        <div v-for="(book, index) in filteredBooks" :key="index" class="books"> <!-- Use filteredBooks -->
            <div >
                <img :src="book.imgUrl" alt="" class="book-img">
            </div>
            <div class="descp">
                <h3>{{ book.title }}</h3>
                <p> <span style="font-weight: bold; color:white;">Author: </span> {{ book.author }}</p>
                <p style="margin-bottom: 2%; color:white; font-size: 18px;"> <span style="font-weight: bold; text-align: justify; color:white;">Description: </span>{{ book.description }}</p>
                <p style="margin-bottom: 2%; color:white; font-size: 18px;"><span style="font-weight: bold; color:white;">Price:</span> ${{ book.price }}</p>
                <!--Button for add to cart-->
                <!--Once the button triggered it must be display on CartBooks.vue-->
                <button type="button" @click="addToCart(book)">Add to Cart</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ''
        };
    },
    computed: {
        books() {
            if (this.$store && this.$store.getters && this.$store.getters.salesBooks) {
                return this.$store.getters.salesBooks;
            } else {
                return [];
            }
        },
        filteredBooks() {
            if (!this.searchQuery) {
                return this.books;
            }
            return this.books.filter(book => {
                return book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                       book.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                       book.description.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    },
    methods: {
        addToCart(book) {
            console.log("Added to cart:", book);
            // Dispatch an action to add the book to the cart if needed
        },
        searchBooks() {
            console.log("Search query:", this.searchQuery);
        },
        clearSearch() {
            this.searchQuery = ''; // Clear search query
        }
    }
}
</script>


<style scoped>

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}

@media(max-width: 900px){
    main{
        margin-top: 50px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .books{
        display: flex;
        flex-direction: row;
        background-color: #cbb5e2;
        border-radius: 10px;
        margin-bottom: 3em;
        margin-top: 50%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        width: 100%;
    }
    .books:nth-of-type(2){
        background-color: #fbadaf;
    }
    .books:nth-of-type(3){
        background-color: #a4e0eb;
    }
    .books:nth-of-type(4){
        background-color: #fdca95;
    }
    .book-img{
        width: 100%;
        max-width: 1000px;
        margin: 1.5em;
        border-radius: 3px;
        transition: transform 1s;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    .book-img:hover{
        transform: scale(1.05);
    }
    .descp{
        margin: 1.5em;
        padding: 1em;
    }
    
    .descp button{
        margin-top: 1em;
        background: none;
        border: none;
        color: #cbb5e2;
        background-color: white;
        padding: 0.6em 1.5em;
        font-size: 1em;
        border-radius: 20px;
        font-weight: bolder;
        cursor: pointer;
    }
    .descp button:hover{
        color: #a790f2;
    }
    #b1{
        color: #fbadaf;
    }
    #b1:hover{
        color: #ff6e9f;
    }
    #b2{
        color: #a4e0eb;
    }
    #b2:hover{
        color: #62cdec;
    }
    #b3{
        color: #fdca95;
    }
    #b3:hover{
        color: #fb9124;
    }

}


/*--------------------------------------------------------------- fOR PC AND LAPTOPS -------------------------------------------- */
@media(min-width: 900px){

    /* ------------------- MAIN BOOKS ---------------------------------- */
    main{
        margin-top: 1em;
        font-family: 'Noto Sans JP', sans-serif;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
    .books{
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 600px;
        justify-content: space-evenly;
        background-color: #cbb5e2;
        border-radius: 10px;
        margin-bottom: 3em;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        height: 70vh;
    }
    .books:nth-of-type(2){
        background-color: #fbadaf;
    }
    .books:nth-of-type(3){
        background-color: #a4e0eb;
    }
    .books:nth-of-type(4){
        background-color: #fdca95;
    }
    .books:nth-of-type(5){
        background-color: #fbadaf;
    }
    .books:nth-of-type(6){
        background-color: #a4e0eb;
    }
    .book-img{
        width: 100%;
        max-width: 500px;
        border-radius: 3px;
        transition: transform 1s;
        margin: 1.5em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    .book-img:hover{
        transform: scale(1.05);
    }
    .descp{
        margin: 1.5em;
        padding: 1em;
    }

    .descp p{
        margin-bottom: 2%; 
        color:white; 
        font-size: 18px;
    }

    .descp h3{
        font-size: 30px; 
        font-weight: bold;
        margin-bottom: 2%; 
        color:white;
    }
    .descp button{
        margin-top: 1em;
        background: none;
        border: none;
        color: #cbb5e2;
        background-color: white;
        padding: 0.6em 1.5em;
        font-size: 1em;
        border-radius: 20px;
        font-weight: bolder;
        cursor: pointer;
    }
    .descp button:hover{
        color: #a790f2;
    }
    #b1{
        color: #fbadaf;
    }
    #b1:hover{
        color: #ff6e9f;
    }
    #b2{
        color: #a4e0eb;
    }
    #b2:hover{
        color: #62cdec;
    }
    #b3{
        color: #fdca95;
    }
    #b3:hover{
        color: #fb9124;
    }
}

.search-bar {
        display: flex;
        align-items: center;
        margin-top: 10%;
        margin-left: 2%;
}

.search-bar input {
    padding: 20px;
    width: 90%;
    margin-right: 10px;
    border: 1px solid #ccc; /* Add border */
}

.search-bar button {
    padding: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;

}

.search-bar button:hover {
    background-color: #45a049;
}
</style>
    