import {Button, Icon, Modal} from "semantic-ui-react";
import {useState} from "react";
import BookForm from "./BookForm";

const AddBookModal = ({addBook, trigger}) => {
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState({
        title: "",
        author: "",
        categories: "",
        published: "",
        publisher: "",
        isbn: "",
        image: "",
        pageCount: "",
        description: "",
        loan: "",
        location: "",
        wasRead: false,
        rate: 0
    })

    const changeField = (field, value) => {
        setBook({
            ...book,
            [field]: value
        })
    }

    const clearAllFields = () => {
        setBook({
            title: "",
            author: "",
            categories: "",
            published: "",
            publisher: "",
            isbn: "",
            image: "",
            pageCount: "",
            description: "",
            location: "",
            loan: "",
            wasRead: false,
            rate: 0
        })
    }

    const saveBookAndClose = () => {
        addBook(book)
        clearAllFields()
        setOpen(false)
    }

    return <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={trigger}
        size="small"
        closeIcon
    >
        <Modal.Header>Dodaj książkę</Modal.Header>
        <Modal.Content>
            <BookForm book={book} changeField={changeField} />
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => saveBookAndClose()} primary>
                <Icon name='check'/> Dodaj
            </Button>
        </Modal.Actions>
    </Modal>
}

export default AddBookModal