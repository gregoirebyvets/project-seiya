import * as Yup from "yup";

Yup.addMethod(Yup.string, "tvaNumber", function (errorMessage) {
  return this.test(`test-tva-number`, errorMessage, function (value) {
    const { path, createError } = this;

    const checkTva = async (value) => {
      if (value === undefined || value === "En attente") {
        return true;
      }
      if (value) {
        function split(str, index) {
          const result = [str.slice(0, index), str.slice(index)];

          return result;
        }

        const [countryCode, vatNumber] = split(value, 2);

        const response = await axios.post(
          process.env.BACKEND_API_URL + "/subscriptions/checktva",
          {
            countryCode,
            vatNumber,
          }
        );
        return response.data.success;
      }
    };

    return checkTva(value) || createError({ path, message: errorMessage });
  });
});

export const AffiliationValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),
  lastname: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),
  address: Yup.string().required("Requis"),
  country: Yup.string().required("Requis"),
  city: Yup.string().required("Requis"),
  zipcode: Yup.number().typeError("Chiffres uniquement").required("Requis"),
  phone: Yup.string().required("Requis"),
  email: Yup.string()
    .email("Veuillez entrer une adresse email valide")
    .required("Requis"),
  tva: Yup.string().tvaNumber("Numéro TVA invalide"),
  deposit: Yup.string().required("Requis"),
});
