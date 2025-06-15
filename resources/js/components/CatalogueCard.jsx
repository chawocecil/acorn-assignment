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
import { LiveTv, LocalLibrary } from "@mui/icons-material";

const StatusChip = ({ label, color }) => (
    <Chip
        label={label}
        color={color}
        size="small"
        sx={{ position: "absolute", top: 8, right: 8 }}
    />
);

export default function CatalogueCard({ data }) {
    return (
        <Grid size={{ xs: 12, md: 4, sm: 6 }}>
            <Card>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.image}
                        alt={data.title}
                    />
                    <StatusChip color="primary" label={data.status} />
                </Box>
                <CardContent>
                    <Typography variant="h6" noWrap>
                        {data.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {data.type === "Course" ? <LocalLibrary /> : <LiveTv />}
                </CardActions>
            </Card>
        </Grid>
    );
}
