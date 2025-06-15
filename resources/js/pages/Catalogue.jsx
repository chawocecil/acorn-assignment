import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import CatalogueCard from "../components/CatalogueCard";

export default function Catalogue() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/catalogues")
            .then((res) => res.json())
            .then(setItems);
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 2 }}>
            <Grid container spacing={2} padding={2}>
                {items.map((item, index) => (
                    <CatalogueCard data={item} key={index} />
                ))}
            </Grid>
        </Container>
    );
}
