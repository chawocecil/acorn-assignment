import {
    Grid,
    Card,
    Box,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import { TypeIcon } from "./Icons";

export default function CatalogueCard({ data, onClick }) {
    const { image, title, type, bgColor, category, duration, cost } = data;
    return (
        <Grid size={{ xs: 12, md: 4, sm: 6 }}>
            <Card
                onClick={() => onClick(data)}
                sx={{
                    cursor: "pointer",
                    flexGrow: 1,
                    maxWidth: 300,
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: bgColor,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                        zIndex: 1,
                        boxShadow: 6,
                    },
                }}
                variant="outlined"
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        sx={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                        }}
                    >
                        {title}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                        <TypeIcon type={type} />
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            display="block"
                            mb={0}
                        >
                            {type} | {category} |{duration && `${duration} | `}
                            {cost === 0
                                ? "Free"
                                : `$${(cost / 100).toFixed(2)}`}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}
