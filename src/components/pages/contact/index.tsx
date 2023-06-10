import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { pxToRem } from "../../../styles/MuiTheme";
import { IconInstagram, IconLinkedin } from "../../icons";
import emailjs from "@emailjs/browser";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object } from "yup";
import {
  contactReasonInputId,
  contactReasonInputLabel,
  contactReasonValidation,
  emailInputId,
  emailInputLabel,
  emailValidation,
  messageInputId,
  messageInputLabel,
  messageValidation,
  nameInputId,
  nameInputLabel,
  nameValidation,
  phoneInputId,
  phoneInputLabel,
} from "../../../emailValidations";
import { Input } from "../../common/Input";
import { useState } from "react";

export default function Contact() {
  const usersValidationSchema = object({
    [nameInputId]: nameValidation,
    [emailInputId]: emailValidation,
    [contactReasonInputId]: contactReasonValidation,
    [messageInputId]: messageValidation,
  });
  const useFormMethods = useForm({
    resolver: yupResolver(usersValidationSchema),
  });
  const { handleSubmit } = useFormMethods;

  const currencyDate = new Date();
  const currencyYear = currencyDate.getFullYear();

  const [showAlert, setShowAlert] = useState(false);

  const handleOpenLinkedin = () => {
    const linkedinUrl =
      "https://www.linkedin.com/company/razan-soluções-empresariais-e-industriais";
    window.open(linkedinUrl, "_blank");
  };

  const handleOpenInstagram = () => {
    const instagramUrl = "https://www.instagram.com/razan.ind.br";
    window.open(instagramUrl, "_blank");
  };

  const onSubmit = async () => {
    setShowAlert(false);
    try {
      await emailjs
        .sendForm(
          "service_32qfx3a",
          "template_8w38ofj",
          "#contactForm",
          "0umUJ-l22XStREVjp"
        )
        .then(
          () => {
            setShowAlert(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showAlert && (
        <Snackbar open={showAlert} autoHideDuration={6000} onClose={() => setShowAlert(false)} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Sucesso</AlertTitle>
          E-mail enviado com sucesso!
        </Alert>
        </Snackbar>
      )}
      <Box mt={pxToRem(48)}>
        <FormProvider {...useFormMethods}>
          <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ bgcolor: "#F6F8F7", py: pxToRem(48) }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "secondary.main",
                  px: pxToRem(16),
                  textAlign: "center",
                }}
              >
                Como podemos ajudar você?
              </Typography>
              <Typography variant="body1" px={pxToRem(16)} textAlign="justify">
                Temos expertise em soluções empresariais e estamos prontos para
                impulsionar seu negócio rumo ao sucesso!
              </Typography>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={pxToRem(24)}
                sx={{ width: { xs: "90%", md: "60%" } }}
              >
                <Grid container spacing={2}>
                  <Grid item md={6} width={"100%"}>
                    <Input
                      name={nameInputId}
                      inputId={nameInputId}
                      inputLabel={nameInputLabel}
                      required
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={6} width={"100%"}>
                    <Input
                      name={emailInputId}
                      inputId={emailInputId}
                      inputLabel={emailInputLabel}
                      required
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={6} width={"100%"}>
                    <Input
                      name={contactReasonInputId}
                      inputId={contactReasonInputId}
                      inputLabel={contactReasonInputLabel}
                      required
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={6} width={"100%"}>
                    <Input
                      name={phoneInputId}
                      inputId={phoneInputId}
                      inputLabel={phoneInputLabel}
                      mask="(99) 9 9999-9999"
                      required
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={12} width={"100%"}>
                    <Input
                      name={messageInputId}
                      inputId={messageInputId}
                      inputLabel={messageInputLabel}
                      multiline
                      rows={4}
                      required
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{ mt: pxToRem(24), width: pxToRem(100) }}
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </form>
        </FormProvider>

        <Box my={pxToRem(48)} sx={{ px: { xs: pxToRem(16), md: pxToRem(90) } }}>
          <Box display="flex">
            <Typography variant="h5" mr={pxToRem(8)}>
              Endereço:
            </Typography>
            <Typography variant="body1">
              R. Dr. Manoel Linhares de Lacerda, 830 - Capão Raso, Curitiba - PR
              / CEP: 81110-100
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h5" mr={pxToRem(8)}>
              Telefone:
            </Typography>
            <Typography variant="body1">(41) 3227-1798</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h5" mr={pxToRem(8)}>
              Whatsapp:
            </Typography>
            <Typography variant="body1">(41) 99539-3843</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h5" mr={pxToRem(8)}>
              E-mail:
            </Typography>
            <Typography variant="body1">contato@razan.ind.br</Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            my={pxToRem(24)}
          >
            <img src="logo.svg" style={{ width: pxToRem(70) }} />
            <Box>
              <IconButton onClick={() => handleOpenLinkedin()}>
                <IconLinkedin />
              </IconButton>
              <IconButton onClick={() => handleOpenInstagram()}>
                <IconInstagram />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "primary.main",
          px: { xs: pxToRem(16), md: pxToRem(90) },
          py: pxToRem(24),
        }}
      >
        <Typography variant="body1" sx={{ color: "white" }}>
          {`razan.ind.br © ${currencyYear}. All Rights Reserved`}
        </Typography>
      </Box>
    </>
  );
}
