import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { pxToRem } from "../../styles/MuiTheme";
import { IconWhatsapp } from "../../components/icons";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = [
  { name: "Ínicio", url: "#home" },
  { name: "Quem Somos", url: "#about_us" },
  { name: "Serviços", url: "#services" },
  { name: "Projetos", url: "#projects" },
  { name: "Contato", url: "#contact" },
];

export default function MenuBar() {
  const isSmall = useMediaQuery("(max-width: 600px)");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const phoneNumber = "5541995393843";

  const handleOpenWhatsapp = () => {
    const message = "Olá!"; // Mensagem que você deseja enviar (opcional)

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {isSmall ? (
                <IconButton disableRipple onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  {pages.map((page) => (
                    <Link
                      underline="none"
                      key={page.name}
                      href={page.url}
                      sx={{ cursor: "pointer", mr: pxToRem(48) }}
                    >
                      <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                          color:
                            page.name === "Contato"
                              ? "secondary.main"
                              : "primary.main",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  ))}

                  <IconButton
                    disableRipple
                    onClick={() => handleOpenWhatsapp()}
                  >
                    <IconWhatsapp />
                  </IconButton>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isSmall && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} onClick={toggleDrawer}>
                <Link
                  underline="none"
                  href={page.url}
                  sx={{ cursor: "pointer", mr: pxToRem(48) }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                          color:
                            page.name === "Contato"
                              ? "secondary.main"
                              : "primary.main",
                        }}
                      >
                        {page.name}
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
            ))}
            <IconButton
              disableRipple
              onClick={() => handleOpenWhatsapp()}
              sx={{ ml: pxToRem(10) }}
            >
              <IconWhatsapp />
            </IconButton>
          </List>
        </Drawer>
      )}
    </>
  );
}
