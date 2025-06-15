import {
    Grid,
    Card,
    Chip,
    Box,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import { TypeIcon } from "./Icons";

const StatusChip = ({ label, color }) => (
    <Chip
        label={label}
        color={color}
        size="small"
        sx={{ position: "absolute", top: 8, right: 8 }}
    />
);

export default function CatalogueCard({ data, onClick }) {
    const { image, title, status, type: contentType, duration } = data;
    return (
        <Grid size={{ xs: 12, md: 4, sm: 6 }}>
            <Card onClick={() => onClick(data)}>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={title}
                    />
                    <StatusChip color={status.color} label={status.label} />
                </Box>
                <CardContent>
                    <Typography variant="h6" noWrap>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <TypeIcon
                        type={contentType}
                        duration={duration}
                        color={status.color}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
}
