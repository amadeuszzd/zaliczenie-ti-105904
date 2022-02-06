import {Button, Icon, Item, Label} from "semantic-ui-react";
import BookModal from "./BookModal";

const BookItem = ({book, editBook, deleteBook}) => {
    return <>
        <Item>
            <Item.Image size="tiny" src={book.image} />
            <Item.Content>
                <Item.Header as='a'>{book.title}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{book.author}, {book.published ?? null}</span>
                </Item.Meta>
                <Item.Description>{book.description}</Item.Description>
                <Item.Extra>
                    <BookModal book={book} editBook={editBook} deleteBook={deleteBook} trigger={<Button secondary floated='right'>Szczegóły<Icon name='right chevron'/></Button>}/>
                    {book.wasRead ? <Label><Icon name="check" color="green"/>Przeczytana</Label> : null}
                    {book.rate ? <Label><Icon name="star" />{book.rate}</Label> : null}
                    {book.loan ? <Label><Icon name="user" />{book.loan}</Label> : null}
                </Item.Extra>
            </Item.Content>
        </Item>
        <BookModal/>
    </>
}

export default BookItem