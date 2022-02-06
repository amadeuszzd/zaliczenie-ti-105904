import {Button, Icon, Image, Modal, Table, Header, Rating} from "semantic-ui-react";
import {useState} from "react";
import EditBookModal from "./EditBookModal";
import DeleteBookModal from "./DeleteBookModal";


const BookModal = ({book, editBook, deleteBook, trigger}) => {
    const [open, setOpen] = useState(false);

    return <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={trigger}
        closeIcon
    >
        <Modal.Header>Informacje o książce</Modal.Header>
        <Modal.Content image scrolling>
            <Image size='medium' src={book?.image} wrapped/>

            <Modal.Description>
                <Table basic='very' celled collapsing>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Tytuł
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.title}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Autor
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.author}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Kategoria
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.categories}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Wydawca
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.publisher}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Rok wydania
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.published}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Ilość stron
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.pageCount}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        ISBN
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{book?.isbn}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Lokalizacja
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{
                                book?.loan ? "Pożyczona" : book?.location
                            }</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Przeczytana
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                {
                                    book?.wasRead ? <Icon name="check" color="green"/> :
                                        <Icon name="cancel" color="red"/>
                                }
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Ocena
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell><Rating rating={book?.rate} maxRating={5} disabled/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        Czy pożyczona? (Komu?)
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{
                                book?.loan ? <><Icon name="check" color="green"/> ({book?.loan})</>:
                                    <Icon name="cancel" color="red"/>
                            }</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <DeleteBookModal book={book} deleteBook={deleteBook}/>
            <EditBookModal bookObject={book} editBook={editBook}
                           trigger={<Button primary><Icon name='pencil'/> Edytuj</Button>}/>
        </Modal.Actions>
    </Modal>
}

export default BookModal