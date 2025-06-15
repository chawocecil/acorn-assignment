import { Typography } from "@mui/material";
import { LiveTv, LocalLibrary } from "@mui/icons-material";

export const TypeIcon = ({ type, duration, color }) =>
    type === "Course" ? (
        <>
            <LocalLibrary color={color}/>
            {duration ? (
                <Typography variant="body2">{duration}</Typography>
            ) : null}
        </>
    ) : (
        <LiveTv color={color}/>
    );
