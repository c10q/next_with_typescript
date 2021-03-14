import '../styles/globals.css'
import {AppProps} from "next/app";
import Menu from "../components/menu/menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Menu/>
        <Container className="align-items-center p-3">
            <Component {...pageProps} />
        </Container>
    </>
}

export default MyApp
