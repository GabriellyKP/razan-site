import { Box, Card, Typography } from "@mui/material";
import { pxToRem } from "../../../styles/MuiTheme";

interface ProjectCardProps {
  title: string;
  text: string;
  imageURL: string;
}

export const ProjectCard = ({ title, text, imageURL }: ProjectCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: pxToRem(4),
      }}
    >
      <Box display="flex" justifyContent="center" p={pxToRem(16)}>
        <img src={imageURL} />
      </Box>
      <Box sx={{ bgcolor: "primary.main", p: pxToRem(16) }}>
        <Typography variant="body1" sx={{ color: "white" }}>
          {title}
        </Typography>
        <Typography variant="body2" textAlign="justify" sx={{ color: "white" }}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
};
