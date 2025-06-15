import React, { useEffect, useState } from "react";
import {
    Grid,
    Card,
    Chip,
    Box,
    CardMedia,
    CardContent,
    Typography,
    Container,
} from "@mui/material";

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
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <Box sx={{ position: "relative" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <Chip
                                    label={item.status}
                                    color="primary"
                                    size="small"
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant="h6" noWrap>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
