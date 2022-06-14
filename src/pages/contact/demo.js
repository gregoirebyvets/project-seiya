import React from "react";
import { useFormik, FormikProvider } from "formik";
import ValidationError from "../../components/forms/ValidationError";

import Layout from "../../components/layout/index";
import { ContactsValidationSchema } from "../../utils/validation/contactsSchema";
import { Link } from "gatsby";
import ContentButton from "../../components/buttons/ContentButton";

import Seo from "../../components/seo";
import axios from "axios";
import toast from "react-hot-toast";

const ContactDemoPage = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "Je souhaite assister à une démo. Mes disponibilités sont : ",
      address2: "",
      rgpd: false,
    },
    validationSchema: ContactsValidationSchema,
    onSubmit: values => {
      if (values.address2 === "") {
        axios
          .post(process.env.BACKEND_API_URL + "/mail/contact", {
            firstname: formik.values.firstname,
            lastname: formik.values.lastname,
            phone: formik.values.phone,
            email: formik.values.email,
            message: formik.values.message,
          })
          .then(function (response) {
            toast.success("Message envoyé", {
              position: "bottom-center",
            });
          })
          .catch(function (error) {
            toast.error("Erreur. Veuillez recommencer.", {
              position: "bottom-center",
            });
          });
      }
    },
  });

  return (
    <Layout>
      <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
      />

      <section className="mb-36">
        <h3 className="text-midnight-blue-500 sm:text-center text-3xl sm:text-4xl font-semibold mb-11">
          Demande de démo
        </h3>
        <div className="w-full sm:w-7/12 sm:mx-auto">
          <FormikProvider value={formik}>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col sm:flex-row flex-wrap "
            >
              <div className="w-full sm:w-1/2 sm:pr-2 mb-6">
                <label
                  htmlFor="firstname"
                  className="block text-xs text-midnight-blue-500 font-medium pl-2"
                >
                  Prénom
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                />
                {formik.errors.firstname && formik.touched.firstname ? (
                  <ValidationError>{formik.errors.firstname}</ValidationError>
                ) : null}
              </div>
              <div className="w-full sm:w-1/2 sm:pl-2 mb-6">
                <label
                  htmlFor="lastname"
                  className="block text-xs text-midnight-blue-500 font-medium sm:pl-2"
                >
                  Nom
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                />
                {formik.errors.lastname && formik.touched.lastname ? (
                  <ValidationError>{formik.errors.lastname}</ValidationError>
                ) : null}
              </div>
              <div className="w-full sm:w-1/2 sm:pl-2 mb-6 hidden">
                <label
                  htmlFor="adress2"
                  className="block text-xs text-midnight-blue-500 font-medium sm:pl-2"
                >
                  Adresse
                </label>
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address2}
                  className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                />
                {formik.errors.address2 && formik.touched.address2 ? (
                  <ValidationError>{formik.errors.address2}</ValidationError>
                ) : null}
              </div>
              <div className=" w-full sm:w-1/2 sm:pr-2 mb-6">
                <label
                  htmlFor="email"
                  className="block text-xs text-midnight-blue-500 font-medium sm:pl-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                />
                {formik.errors.email && formik.touched.email ? (
                  <ValidationError>{formik.errors.email}</ValidationError>
                ) : null}
              </div>
              <div className="w-full sm:w-1/2 sm:pl-2 mb-6">
                <label
                  htmlFor="phone"
                  className="block text-xs text-midnight-blue-500 font-medium sm:pl-2"
                >
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <ValidationError>{formik.errors.phone}</ValidationError>
                ) : null}
              </div>
              <div className="w-full  mb-6">
                <label
                  htmlFor="phone"
                  className="block text-xs text-midnight-blue-500 font-medium pl-2"
                >
                  Questions, remarques, disponibilités
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4 h-32"
                />
                {formik.errors.message && formik.touched.message ? (
                  <ValidationError>{formik.errors.message}</ValidationError>
                ) : null}
              </div>
              <div className="flex  text-midnight-blue-500 mb-9">
                <label className="control control-checkbox w-11/12 ">
                  J'ai pris connaissance de la{" "}
                  <Link to="/">Politique de Protection Vie Privée (RGDP)</Link>{" "}
                  et j'accepte que mes données soient traitées en lien avec ma
                  demande.
                  <input
                    type="checkbox"
                    name="rgpd"
                    id="rgpd"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rgpd}
                  />
                  {formik.errors.rgpd && formik.touched.rgpd ? (
                    <div className="-ml-2 mt-2">
                      <ValidationError>{formik.errors.rgpd}</ValidationError>
                    </div>
                  ) : null}
                  <div className="control_indicator"></div>
                </label>
              </div>
              <div className="text-center w-full">
                <ContentButton type="submit">Envoyer</ContentButton>
              </div>
            </form>
          </FormikProvider>
        </div>
      </section>
    </Layout>
  );
};

export default ContactDemoPage;
