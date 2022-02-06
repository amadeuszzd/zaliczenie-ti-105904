import {Header, Icon, Segment} from "semantic-ui-react";


const SiteHeader = () => {
    return <Segment style={{marginTop: "10px"}}>
        <Header as="h1"><Icon name="book" />Domowa biblioteczka</Header>
    </Segment>
}

export default SiteHeader