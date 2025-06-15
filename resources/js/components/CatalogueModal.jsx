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
    const { type, title, status, summary, recommenedLevels } = data;

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle
                sx={{ backgroundColor: "primary.light", color: "white" }}
            >
                <Box display="flex" flexDirection="column">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <TypeIcon type={type} />
                            <Typography>{type}</Typography>
                            <Chip
                                label={status.label}
                                color="primary"
                                size="small"
                            />
                        </Box>
                        <IconButton onClick={onClose} sx={{ color: "white" }}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Typography variant="h6">{title}</Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText component="div">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: sanitizeContent(summary),
                        }}
                    />

                    <Box mt={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Recommended Levels
                        </Typography>

                        {recommenedLevels.map((level, index) => (
                            <Typography key={index} variant="body2">
                                • {level}
                            </Typography>
                        ))}
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default CatalogueModal;
