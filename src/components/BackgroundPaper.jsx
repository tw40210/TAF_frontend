import { Paper, useTheme } from "@mui/material";
import { tokens } from "../contexts/theme";




const BackgroundPaper = ({ children  }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Paper
            elevation={3}
            sx={{
            width: '100%',
            padding: 3,
            borderRadius: 2,
            border: `3px solid ${colors.blueAccent[600]}`,
            outline: `2px solid ${colors.blueAccent[400]}`,
            backgroundColor: colors.blueAccent[900], // Light beige for a paper-like look
            }}
        >
        {children }
        </Paper>
    )
}

export default BackgroundPaper;