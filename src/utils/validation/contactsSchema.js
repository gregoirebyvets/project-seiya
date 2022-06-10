import * as Yup from "yup";

export const ContactsValidationSchema = Yup.object().shape(
  {
    firstname: Yup.string()
      .min(2, "Trop court!")
      .max(50, "Trop long!")
      .required("Requis"),
    lastname: Yup.string()
      .min(2, "Trop court!")
      .max(50, "Trop long!")
      .required("Requis"),
    email: Yup.string()
      .email()
      .when("phone", {
        is: (phone) => !phone || phone.length === 0,
        then: Yup.string().email("Adresse email incorrecte").required("Requis"),
        otherwise: Yup.string(),
      }),
    phone: Yup.string().when("email", {
      is: (email) => !email || email.length === 0,
      then: Yup.string()
        .matches(
          /(^\+(32|33|35)|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{8,10}$|[0-9\-\s]{10}$)/,
          "N° de téléphone incorrect"
        )
        .required("Requis"),
      otherwise: Yup.string(),
    }),
    message: Yup.string().required("Requis"),
    rgpd: Yup.bool().oneOf(
      [true],
      "Vous devez accepter la Politique de Protection Vie Privée pour poursuivre."
    ),
  },
  [["email", "phone"]]
);
