import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../components/DataTable/Table';
import { Link } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Stocks() {

    return (
        <Container component="main" >
            <CustomizedTables></CustomizedTables>
            <Link to='123'>stocks</Link>
        </Container>
    );
}