import {Button, Icon, Modal} from "semantic-ui-react";
import {useState} from "react";
import BookForm from "./BookForm";

const EditBookModal = ({bookObject, editBook, trigger}) => {
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState(bookObject)

    const changeField = (field, value) => {
        setBook({
            ...book,
            [field]: value
        })
    }

    const saveBookAndClose = () => {
        editBook(book)
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
        <Modal.Header>Edytuj książkę</Modal.Header>
        <Modal.Content>
            <BookForm book={book} changeField={changeField}/>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => saveBookAndClose()} primary>
                <Icon name='save'/> Zapisz
            </Button>
        </Modal.Actions>
    </Modal>
}

export default EditBookModal
