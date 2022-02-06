import {Container} from "semantic-ui-react";
import Home from "./Page/Home";
import SiteHeader from "./Component/SiteHeader";
import SiteFooter from "./Component/SiteFooter";

function App() {
    return (
        <Container>
            <SiteHeader/>
            <Home />
            <SiteFooter/>
        </Container>
    );
}

export default App;
