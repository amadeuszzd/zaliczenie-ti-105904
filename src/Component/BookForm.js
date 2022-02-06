import {Input, Label, Radio, Rating} from "semantic-ui-react";

const input = [
    {
        label: "Tytuł",
        field: "title"
    },
    {
        label: "Autor",
        field: "author"
    },
    {
        label: "Opis",
        field: "description"
    },
    {
        label: "Kategorie",
        field: "categories"
    },
    {
        label: "Rok wydania",
        field: "published"
    },
    {
        label: "Wydawca",
        field: "publisher"
    },
    {
        label: "ISBN",
        field: "isbn"
    },
    {
        label: "Ilość stron",
        field: "pageCount"
    },
    {
        label: "Zdjęcie okładki (URL)",
        field: "image"
    },
    {
        label: "Lokalizacja",
        field: "location"
    },
    {
        label: "Pożyczona",
        field: "loan"
    }
]

const BookForm = ({book, changeField}) => {
        return <>
            {
            input.map((el, inx) => (
                <div key={inx}><Input fluid label={el.label} value={book[el.field]} style={{marginBottom: "2px"}}
                         onChange={e => changeField(el.field, e.target.value)}/><br/></div>
            ))
        }
    <Label size="large">Ocena <Rating size="large" maxRating={5} rating={book.rate} onRate={(e,{rating}) => changeField("rate", rating)}/></Label>
    <Label style={{float: "right"}} size="medium"><Radio toggle label={"Przeczytana"} checked={book.wasRead}
                                                         onChange={() => changeField("wasRead", !book.wasRead)}/></Label>
            </>
}

export default BookForm