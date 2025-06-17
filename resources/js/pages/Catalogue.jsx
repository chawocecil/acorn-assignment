import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import CatalogueCard from "../components/CatalogueCard";
import CatalogueModal from "../components/CatalogueModal";
import CataloguePage from "../components/NewCatalogue/NewCatalogu

export default function Catalogue() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpen = (item) => setSelectedItem(item);
    const handleClose = () => setSelectedItem(null);

    useEffect(() => {
        fetch("/api/catalogues")
            .then((res) => res.json())
            .then(setItems);
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 2 }}>
            <Grid container spacing={2} padding={2}>
                {items
                    .filter((item) => item.isActive)
                    .map((item, index) => (
                        <CatalogueCard
                            data={item}
                            key={index}
                            onClick={handleOpen}
                        />
                    ))}
            </Grid>
            {selectedItem && (
                <CatalogueModal
                    isOpen={!!selectedItem}
                    data={selectedItem}
                    onClose={handleClose}
                />
            )}
        </Container>
    );
}
