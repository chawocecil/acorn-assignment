import {
    Chip,
    Box,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { TypeIcon } from "./Icons";

const sanitizeContent = (content = "") => content.replace(/<\/?script>/g, "");

const CatalogueModal = ({ isOpen, data, onClose }) => {
    const {
        type,
        title,
        summary,
        bgColor,
        tags,
        image,
        category,
        duration,
        cost,
    } = data;

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle sx={{ backgroundColor: bgColor, color: "white" }}>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center" gap={1}>
                            <TypeIcon type={type} />
                            <Typography sx={{ ml: 1 }}>{title}</Typography>
                        </Box>
                        <IconButton onClick={onClose} sx={{ color: "white" }}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Box>
                        {tags.map((tag, i) => (
                            <Chip
                                key={i}
                                label={tag}
                                size="small"
                                sx={{ mr: 0.5, mb: 0.5, color: "white", bgcolor: "blue" }}
                                disabled
                            />
                        ))}
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                {image && (
                    <img
                        src={image}
                        alt={title}
                        style={{ width: "100%", marginBottom: 16 }}
                    />
                )}
                <DialogContentText component="div">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: sanitizeContent(summary),
                        }}
                    />
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Type:</strong> {type}
                        <br />
                        <strong>Category:</strong> {category}
                        <br />
                        {duration && (
                            <>
                                <strong>Duration:</strong> {duration}
                                <br />
                            </>
                        )}
                        <strong>Cost:</strong> {cost === 0 ? "Free" : `$${(cost / 100).toFixed(2)}`}
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default CatalogueModal;
