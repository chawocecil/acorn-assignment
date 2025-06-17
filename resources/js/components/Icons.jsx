import { LiveTv, School, VideoLibrary, MenuBook } from "@mui/icons-material";

export const TypeIcon = ({ type, color }) => {
    switch (type) {
        case "Live Learning":
            return <LiveTv fontSize="small" />;
        case "Course":
            return <School fontSize="small" />;
        case "Video":
            return <VideoLibrary fontSize="small" />;
        case "Resource":
            return <MenuBook fontSize="small" />;
        default:
            return null;
    }
};
