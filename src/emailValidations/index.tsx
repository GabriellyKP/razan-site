import { string } from "yup";

const nameInputId = "name";
const nameInputLabel = "Nome";

const contactReasonInputId = "contact_reason";
const contactReasonInputLabel = "Razão do contato";

const phoneInputId = "phone";
const phoneInputLabel = "Telefone";

const messageInputId = "message";
const messageInputLabel = "Mensagem";

const emailInputId = "email";
const emailInputLabel = "E-mail";

const nameValidation = string().required("O nome não pode ficar em branco");

const contactReasonValidation = string().required(
  "A razão do contato não pode ficar em branco"
);

const messageValidation = string().required(
  "A mensagem não pode ficar em branco"
);

const emailValidation = string()
  .email("Este não é um e-mail válido")
  .required("O email não pode ficar em branco");

export {
  nameInputId,
  nameInputLabel,
  nameValidation,
  contactReasonInputId,
  contactReasonInputLabel,
  contactReasonValidation,
  messageInputId,
  messageInputLabel,
  messageValidation,
  phoneInputId,
  phoneInputLabel,
  emailInputId,
  emailInputLabel,
  emailValidation,
};
