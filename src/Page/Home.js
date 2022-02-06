import {Button, Divider, Header, Icon, Input, Item, Message} from "semantic-ui-react"
import BookItem from "../Component/BookItem";
import useStickyState from "../Hook/stickyState";
import {v4 as uuidv4} from 'uuid';
import AddBookModal from "../Component/AddBookModal";
import {useEffect, useState} from "react";

const Home = () => {
    const [books, setBooks] = useStickyState([], "books")
    const [search, setSearch] = useState("")
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        if (search !== "") {
            let searchedBooks = []
            books.forEach(el => {
                if (
                    el.title.toLowerCase().includes(search.toLowerCase().trim()) ||
                    el.author.toLowerCase().includes(search.toLowerCase().trim()) ||
                    el.categories.toLowerCase().includes(search.toLowerCase().trim()) ||
                    el.isbn.includes(search.trim()) ||
                    el.location.toLowerCase().includes(search.toLowerCase().trim())
                ) {
                    searchedBooks = [...searchedBooks, el]
                }
            })
            setFilteredBooks(searchedBooks)
        } else {
            setFilteredBooks(books)
        }
    }, [search, books])

    const addBook = book => {
        book.id = uuidv4()
        setBooks([...books, book])
    }

    const editBook = book => {
        let tmpBooks = [...books]
        const index = books.findIndex(el => {
            return el.id === book.id
        })

        if (index !== -1) {
            tmpBooks[index] = book
            setBooks([...tmpBooks])
        }
    }

    const deleteBook = book => {
        let tmpBooks = [...books]
        const index = books.findIndex(el => {
            return el.id === book.id
        })

        if (index !== -1) {
            tmpBooks.splice(index, 1)
            setBooks([...tmpBooks])
        }
    }

    return <>
        <AddBookModal addBook={addBook}
                      trigger={<Button floated='right' color="green"><Icon name="plus"/>Dodaj</Button>}/>
        <Header as="h3">Twoje książki</Header>
        <Input
            focus
            fluid
            placeholder='Szukaj po nazwie, autorze, kategorii, ISBN lub lokalizacji...'
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <Divider/>
        <Item.Group divided>
            {
                filteredBooks.length ? filteredBooks.map((el, inx) => (
                    <BookItem book={el} key={inx} editBook={editBook} deleteBook={deleteBook}/>
                )) : <Message info>Brak książek do wyświetlenia...</Message>
            }

        </Item.Group>
    </>
}

export default Home