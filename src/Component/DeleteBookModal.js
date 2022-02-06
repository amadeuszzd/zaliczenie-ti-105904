import {Button, Confirm, Icon} from "semantic-ui-react";
import {useState} from "react";


const DeleteBookModal = ({book, deleteBook}) => {
    const [open, setOpen] = useState(false)

    const deleteBookAndClose = () => {
        deleteBook(book)
        setOpen(false)
    }

    return <>
        <Button color="red" onClick={() => setOpen(true)}><Icon name="trash"/> Usuń</Button>
        <Confirm
            header={`Usuwanie książki - ${book.title}`}
            content="Jesteś pewny?"
            open={open}
            confirmButton="Tak, potwierdzam"
            cancelButton="Nie, anuluj"
            onConfirm={() => deleteBookAndClose()}
            onCancel={() => setOpen(false)}/>
    </>
}

export default DeleteBookModal