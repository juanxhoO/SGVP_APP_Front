import * as React from 'react';

import Container from '@mui/material/Container';

import CustomizedTables from '../components/DataTable/Table';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Catalogs() {

    return (
        <Container component="main">
            <CustomizedTables></CustomizedTables>

        </Container>
    );
}