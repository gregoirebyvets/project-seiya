import * as Yup from "yup";

export const SupportFormValidationSchema = Yup.object().shape({
  title: Yup.string().required("Requis"),
  message: Yup.string()
    .required("Requis")
    .min(20, "Votre message doit contenir au moins 20 caractères"),
});
