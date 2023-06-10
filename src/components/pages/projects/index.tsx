import { Box, Card, Grid, Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { pxToRem } from "../../../styles/MuiTheme";

export default function Projects() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center", my: pxToRem(48) }}
      >
        Projetos
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        px={pxToRem(48)}
      >
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="automacao.png"
            title="Automação Industrial e Empresarial"
            text="Criamos soluções para manuseios e processos"
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="esteiras.png"
            title="Esteiras Transportadoras"
            text="Facilitam a movimentação de matérias primas, produtos prontos ou insumos"
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="celulas.png"
            title="Células Robóticas"
            text="Projetos com integrações de braços Robóticos"
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="projetos.png"
            title="Projetos Especiais"
            text="Criamos máquinas e equipamentos para atender produção em linha ou específica"
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="ferramentas.png"
            title="Ferramentas Especiais"
            text="Construímos Berços, Gabaritos, Ferramentas Especiais e adequando ou retificando fusos e guias linear"
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="solucoes.png"
            title="Soluções Especiais"
            text="Sistema PICK-TO-LIGHT é uma solução de picking do tipo “operador para materiais”"
          />
        </Grid>
      </Grid>

      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", textAlign:'center', my: pxToRem(48), px:pxToRem(16) }}
      >
        Insumos Serigráficos e Tampográficos
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        px={pxToRem(48)}
      >
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="tintas.png"
            title="Fabricação de Tintas e Serigrafia"
            text="Nós somos especializados na fabricação de tintas Serigráficas e Tampográficas de alta qualidade e cobertura. 
            Com uma escala pantone exclusiva de mais de 720 opções de cores para tintas Serigráficas e Tampográficas. 
            Desenvolvemos gravações de telas para Serigrafia em qualquer modelo desejado. 
            Nossas telas são confeccionadas com alto padrão de qualidade."
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="tampografia.png"
            title="Tampografia"
            text="Tampões de alta qualidade. Cada tampão produzido passa por um controle de qualidade rigoroso, que inclui a inserção de um número de Shore em sua base. Isso garante a qualidade do produto final.
            Temos em nosso estoque mais de 3.000 formas diferentes de tampões.
            Dispositivos de berços e gabaritos são fabricados conforme a necessidade do cliente"
          />
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <ProjectCard
            imageURL="servicos.png"
            title="Serviços"
            text="Serviço de impressão internalizados, com estrutura para receber de pequenos a grandes lotes de peças.
            Como nosso treinamento técnico, capacitamos operadores e técnicos em tampografia, serigrafia e gravação a laser.
            Automação em linhas tampográficas. 
            Locação de máquinas tampográficas.
            Manutenção em máquinas tampográficas e adequação de NR10 e NR12 dos equipamentos."
          />
        </Grid>
      </Grid>
    </Box>
  );
}
