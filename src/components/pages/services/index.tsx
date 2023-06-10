import { Box, Grid, Typography } from "@mui/material";
import { IconOrderItem } from "../../icons";
import { pxToRem } from "../../../styles/MuiTheme";

const servicesFirstColumn = [
  "Indústria 4.0",
  "Automação e Integrações",
  "Braços Robóticos",
  "Projetos Especiais",
  "Controle e Aumento de Produção",
  "Projetos Segurança NR12",
  "Projetos Elétricos NR10",
  "Painéis Elétricos",
  "Linha Pneumática",
  "Linhas IHM e CLP",
  "Sistema de Visão",
  "Servos",
  "Fusos",
];

const servicesMediumColumn = [
  "Movimentação Linear",
  "Guias Linear e Patins",
  "Linhas de Redutores",
  "Motores Elétricos",
  "Esteiras Transportadoras",
  "Flow Rack",
  "Perfil em Alumínio",
  "Estruturas em Perfil Alumínio ",
  "Bancadas em Perfil Alumínio ",
  "Células Robóticas",
  "Esteiras Passa-Cabos",
  "Sistema de Cortes de Precisão",
  "Facas e Contra Facas",
];

const servicesLastColumn = [
  "Ferramentaria",
  "Ferramentas Especiais",
  "Usinagem",
  "Usinagem Especiais",
  "Retrofit Geral",
  "Projetos Elétricos Estrutural",
  "Climatização",
  "Exaustores",
  "Painéis Solares",
  "Prevenção de Incêndios",
  "Contador Eletrônico Industrial",
  "Impressora 3D",
  "Assistência Técnica",
];

export default function Services() {
  return (
    <Box
      id="services"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" my={pxToRem(48)}>
        Serviços
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={pxToRem(48)}
      >
        <Grid item md={4}>
          {servicesFirstColumn.map((service) => (
            <Box key={service} display="flex">
              <IconOrderItem />
              <Typography variant="body1">{service}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item md={4}>
          {servicesMediumColumn.map((service) => (
            <Box key={service} display="flex">
              <IconOrderItem />
              <Typography variant="body1">{service}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item md={4}>
          {servicesLastColumn.map((service) => (
            <Box key={service} display="flex">
              <IconOrderItem />
              <Typography variant="body1">{service}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
