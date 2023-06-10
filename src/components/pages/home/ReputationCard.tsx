import { Card, Typography } from "@mui/material";
import { pxToRem } from "../../../styles/MuiTheme";

interface ReputationCardProps {
  title: string;
  text: string;
  icon: JSX.Element;
}

export const ReputationCard = ({ title, text, icon }: ReputationCardProps) => {
  return (
    <Card
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: pxToRem(4),
        p: pxToRem(16),
      }}
    >
      {icon}
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2" textAlign="justify">
        {text}
      </Typography>
    </Card>
  );
};
