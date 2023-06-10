import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { pxToRem } from "../../../styles/MuiTheme";
import {
  IconEthic,
  IconHonesty,
  IconInovation,
  IconResponsibility,
} from "../../icons";

export default function AboutUs() {
  const isSmall = useMediaQuery("(max-width: 800px)");

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={pxToRem(48)}
      >
        {!isSmall && (
          <Box>
            <img src="robo.png" />
          </Box>
        )}
        <Box
          width={pxToRem(350)}
          sx={{
            bgcolor: "primary.main",
            p: pxToRem(24),
            borderRadius: pxToRem(4),
            marginLeft: { xs: 0, md: pxToRem(-100) },
            mb:pxToRem(5),
            height: "fit-content",
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Sobre nós
          </Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            sx={{ color: "white", pb: pxToRem(5) }}
          >
            Nossa missão é fornecer soluções inovadoras e estratégicas para
            impulsionar os negócios de nossos clientes, garantindo maior
            rentabilidade e competitividade no mercado. Acreditamos em fazer
            isso de maneira sustentável, sempre respeitando o meio ambiente e a
            segurança de todos.
          </Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            sx={{ color: "white" }}
          >
            Nossa visão é sermos reconhecidos como referência no setor de
            inovação para a indústria. Trabalhamos com produtos e serviços de
            alta qualidade e excelência, além de contarmos com um corpo de
            colaboradores altamente qualificado e uma administração eficiente.
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          bgcolor: "#F6F8F7",
          py: pxToRem(24),
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box display="flex" flexDirection="column">
          <Card
            elevation={2}
            sx={{
              display: "flex",
              width: pxToRem(300),
              p: pxToRem(16),
              mb: pxToRem(16),
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h2">Ética</Typography>
              <Typography
                variant="body1"
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  pl: pxToRem(8),
                  ml: pxToRem(10),
                  mt: pxToRem(10),
                }}
              >
                Satisfação do Cliente
              </Typography>
            </Box>
            <IconEthic />
          </Card>

          <Card
            elevation={2}
            sx={{
              display: "flex",
              width: pxToRem(300),
              p: pxToRem(16),
              mb: pxToRem(16),
              ml: { xs: 0, md: pxToRem(-100) },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h2">Inovação</Typography>
              <Typography
                variant="body1"
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  pl: pxToRem(8),
                  ml: pxToRem(10),
                  mt: pxToRem(10),
                }}
              >
                Qualidade, Organização
              </Typography>
            </Box>
            <IconInovation />
          </Card>

          <Card
            elevation={2}
            sx={{
              display: "flex",
              width: pxToRem(300),
              p: pxToRem(16),
              mb: pxToRem(16),
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h2">Honestidade</Typography>
              <Typography
                variant="body1"
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  pl: pxToRem(8),
                  ml: pxToRem(10),
                  mt: pxToRem(10),
                }}
              >
                Transparência, Disciplina
              </Typography>
            </Box>
            <IconHonesty />
          </Card>

          <Card
            elevation={2}
            sx={{
              display: "flex",
              width: pxToRem(300),
              p: pxToRem(16),
              ml: { xs: 0, md: pxToRem(-100) },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h2">Responsabilidade</Typography>
              <Typography
                variant="body1"
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  pl: pxToRem(8),
                  ml: pxToRem(10),
                  mt: pxToRem(10),
                }}
              >
                Social, Ambiental
              </Typography>
            </Box>
            <IconResponsibility />
          </Card>
        </Box>

        <Box
          sx={{
            mt: { xs: pxToRem(24), md: 0 },
            px: { xs: pxToRem(24), md: 0 },
            textAlign: "center",
          }}
        >
          <Typography variant="h1" sx={{ color: "secondary.main" }}>
            5 Anos de Mercado
          </Typography>
          <Typography variant="h3">Seguindo nossos valores!</Typography>
        </Box>
      </Box>
    </Box>
  );
}
