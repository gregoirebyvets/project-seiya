import * as Yup from "yup";

export const NewsletterValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Veuillez entrer une adresse email valide")
    .required("Requis"),
});
