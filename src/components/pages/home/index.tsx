import { Box, Grid, Typography } from "@mui/material";
import { pxToRem } from "../../../styles/MuiTheme";
import { ReputationCard } from "./ReputationCard";
import { IconHeadset, IconSolutions, IconTeam } from "../../icons";

export default function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url("fundo1.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          mt: pxToRem(64),
          height: pxToRem(530),
          display: "flex",
        }}
      >
        <img src="logo.svg" style={{ width: pxToRem(300) }} />
      </Box>
      <Box my={pxToRem(48)} display="flex" justifyContent="center">
        <Typography variant="h2">Nossa Reputação</Typography>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
        spacing={5}
        px={pxToRem(48)}
      >
        <Grid item md={4}>
          <ReputationCard
            title="Nossos Serviços"
            text="Oferecemos serviços para atender suas necessidades empresariais alavancando o seu sucesso."
            icon={<IconHeadset />}
          />
        </Grid>
        <Grid item md={4}>
          <ReputationCard
            title="Nossa Equipe"
            text="Temos uma equipe qualificada para impulsionar seu negócio ao próximo nível."
            icon={<IconTeam width={pxToRem(40)} />}
          />
        </Grid>
        <Grid item md={4}>
          <ReputationCard
            title="Nossas Soluções"
            text="Encontre as soluções mais inovadoras e eficazes para sua empresa
          crescer e se destacar, contando com a nossa experiência e know-how."
            icon={<IconSolutions />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
