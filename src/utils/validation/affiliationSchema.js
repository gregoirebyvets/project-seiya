import * as Yup from "yup";

Yup.addMethod(Yup.string, "tvaNumber", function (errorMessage) {
  return this.test(`test-tva-number`, errorMessage, function (value) {
    const { path, createError } = this;

    const checkTva = async (value) => {
      if (value === undefined || value === "En attente") {
        return true;
      }
      if (value) {
        // function split(str, index) {
        //   const result = [str.slice(0, index), str.slice(index)];

        //   return result;
        // }

        // const [countryCode, vatNumber] = split(value, 2);

        // const response = await axios.post(
        //   "http://localhost:8000/api/subscriptions/checktva",
        //   {
        //     countryCode,
        //     vatNumber,
        //   }
        // );
        // console.log("tva res:", response.data.success);
        // return response.data.success;

        // let tva = value.replace(/[^a-zA-Z0-9]/g, "");
        // let isValid = false;
        // let prefix = tva.substr(0, 2).toUpperCase();
        // let tvaString = tva.substr(2, tva.length);
        // let regex = null;
        // let found = null;

        // if (prefix === "CH") {
        //   if (tva.length > 2) {
        //     prefix = "CHE";
        //     tvaString = value
        //       .replace(/[^a-zA-Z0-9]/g, "")
        //       .substr(3, tva.length);
        //   }
        // }
        // switch (prefix) {
        //   case "BE":
        //     const startTva = parseInt(
        //       tvaString.substr(0, tvaString.length - 2)
        //     );
        //     const endTva = parseInt(
        //       tvaString.substr(tvaString.length - 2, tvaString.length)
        //     );
        //     const result = 97 - (startTva % 97);
        //     if (result === endTva) {
        //       isValid = true;
        //     }
        //     break;
        //   case "FR":
        //     regex = /^\w{2}\d{9}$/;
        //     found = tvaString.match(regex);
        //     if (found) {
        //       isValid = true;
        //     }
        //     break;
        //   case "DE":
        //     regex = /^\d{9}$/;
        //     found = tvaString.match(regex);
        //     if (found) {
        //       isValid = true;
        //     }
        //     break;
        //   case "LU":
        //     regex = /^\d{8}$/;
        //     found = tvaString.match(regex);
        //     if (found) {
        //       isValid = true;
        //     }
        //     break;
        //   case "CHE":
        //     regex = /^\d{9}(?:tva||TVA)?$/;
        //     found = tvaString.match(regex);
        //     if (found) {
        //       isValid = true;
        //     }
        //     break;

        //   default:
        //     isValid = true;
        // }

        // return isValid;
        return true;
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
