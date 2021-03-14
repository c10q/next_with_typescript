import * as React from "react";
import Link from "next/link";

import Welcome from '../components/welcome/welcome'
import {Container} from "react-bootstrap";

const Index: React.FunctionComponent = () => {
    return (
        <Container>
            <Welcome />
        </Container>
    );
};

export default Index;