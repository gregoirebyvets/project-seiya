import React from "react";
import { useFormik, FormikProvider } from "formik";
import { Link } from "gatsby";
import axios from "axios";
import toast from "react-hot-toast";

import ValidationError from "../components/forms/ValidationError";
import Layout from "../components/layout/index";
import ContentButton from "../components/buttons/ContentButton";
import Seo from "../components/seo";

import headerImg from "../images/page_contacts_header.png";
import imgFrancois from "../images/photos/administrateurs/francois.png";
import imgPierre from "../images/photos/administrateurs/pierre.png";
import imgAlain from "../images/photos/administrateurs/alain.png";
import imgCarine from "../images/photos/administrateurs/carine.png";
import imgGael from "../images/photos/dev/gael.png";
import imgGregoire from "../images/photos/dev/gregoire.png";

import { ContactsValidationSchema } from "../utils/validation/contactsSchema";

const ContactsPage = () => {
  let regEx = new RegExp(
    "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
  );
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      address2: "",
      rgpd: false,
    },
    validationSchema: ContactsValidationSchema,
    onSubmit: (values) => {
      if (regEx.test(formik.values.message)) {
        toast.error(
          "Les urls ne sont pas autorisées dans le contenu du message",
          { position: "bottom-center" }
        );
      } else {
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
      }
    },
  });
  const admins = [
    {
      img: imgFrancois,
      firstname: "François",
      lastname: "Van Lerberghe",
      role: "Président",
      desc1: "Pratique rurale",
      desc2: "à Marchin",
      phone: "+32 476 40 54 88",
      mail: "francois.vanlerberghe@byvets.be",
    },
    {
      img: imgPierre,
      firstname: "Pierre",
      lastname: "Paindaveine",
      role: "Vice-Président",
      desc1: "Pratique équine",
      desc2: "à St Gérard",
      phone: "+32 476 45 96 01",
      mail: "pierre@paindaveine.vet",
    },
    {
      img: imgAlain,
      firstname: "Alain",
      lastname: "de Gottal",
      role: "Secrétaire",
      desc1: "Pratique an.",
      desc2: "compagnie à Huy",
      phone: "+32 495 24 41 27",
      mail: "alain.degottal@byvets.be",
    },
    {
      img: imgCarine,
      firstname: "Carine",
      lastname: "Vandenhove",
      role: "Trésorière",
      desc1: "Pratique an.",
      desc2: "compagnie à Clavier",
      phone: "+32 85 41 01 41",
      mail: "carinevdh@scarlet.be",
    },
  ];

  const devs = [
    {
      firstname: "Gaël",
      lastname: "Fontenelle",
      img: imgGael,
      role: "Développeur Back-end",
      mail: "gael.fontenelle@byvets.be",
    },
    {
      firstname: "François",
      lastname: "Van Lerberghe",
      img: imgFrancois,
      role: "Développeur",
      mail: "francois.vanlerberghe@byvets.be",
    },
    {
      firstname: "Grégoire",
      lastname: "Cartuyvels",
      img: imgGregoire,
      role: "Développeur Front-end",
      mail: "gregoire.catuyvels@byvets.be",
    },
  ];
  return (
    <Layout>
      <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
      />
      <section className="flex mb-24">
        <div className="w-full sm:w-1/2 tracking-byvets font-light ">
          <h2 className=" text-3xl  sm:text-4xl font-semibold text-midnight-blue-500 mb-9">
            L'équipe de ByVets
            <br /> est à votre disposition
          </h2>
          <div className=" flex items-center bg-orangish-500 rounded-3xl mb-4">
            <div className="flex items-center justify-center py-6 px-5 sm:px-7">
              <svg
                width="40"
                height="51"
                viewBox="0 0 45 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 sm:w-auto"
              >
                <path
                  d="M27.1318 1.64648C30.5603 2.98896 33.518 5.31064 35.6361 8.3223C37.7273 11.2916 38.8555 14.8316 38.8678 18.4634C38.8714 20.1769 39.2464 21.8693 39.9665 23.4242L43.2335 30.5111L41.242 31.1561C40.5612 31.3703 39.9641 31.7916 39.5339 32.3611C39.1161 32.9223 38.8903 33.6033 38.8893 34.303V41.39C38.8889 41.5701 38.8528 41.7485 38.783 41.9145C38.7072 42.0791 38.6012 42.2275 38.4709 42.3533C38.341 42.4851 38.1838 42.5874 38.0103 42.6516C37.8394 42.7218 37.6566 42.7575 37.4719 42.7575H27.4723L25.3463 49.9648L3.92947 44.0614L7.47292 32.0136L6.52339 31.0641C4.61409 29.1463 3.16081 26.8236 2.27124 24.2679C1.38566 21.7339 1.09455 19.03 1.42067 16.3657C1.75218 13.6946 2.68512 11.1339 4.1492 8.87527C5.63458 6.57919 7.61235 4.64252 9.93916 3.20574"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.3087 32.7865C27.8812 32.456 28.5437 32.3151 29.2013 32.383C29.8574 32.4434 30.4762 32.7143 30.9657 33.1554C31.4488 33.5815 31.7752 34.1573 31.8921 34.7908C32.009 35.4242 31.9099 36.0785 31.6108 36.649C31.2975 37.2317 30.7987 37.6936 30.1934 37.9605C29.5939 38.2365 28.9228 38.3161 28.2752 38.1889C27.6277 38.0617 27.0367 37.7341 26.5862 37.2518C26.1483 36.7806 25.879 36.1775 25.8208 35.5368C23.3617 34.0959 21.3483 32.0038 20.0024 29.4915C18.4492 29.7683 16.8477 29.5189 15.4523 28.7828C14.0768 28.0663 12.9905 26.8974 12.3766 25.4732C11.7746 24.0693 11.6893 22.4978 12.1358 21.0369C12.5998 19.5624 13.5586 18.293 14.8501 17.4436C14.857 12.1502 15.2191 6.86322 15.9343 1.61836C16.9018 1.41637 17.8823 1.28117 18.8684 1.21418C19.3535 1.16686 19.841 1.14787 20.3284 1.15743C21.3096 1.15977 22.2895 1.22625 23.2621 1.35606C22.4749 6.5685 22.0724 11.8316 22.0575 17.1031C23.0518 17.628 23.9011 18.3898 24.5307 19.3212C25.1505 20.24 25.5236 21.3034 25.6142 22.408C25.7048 23.5125 25.5098 24.6214 25.048 25.6289C24.5757 26.6449 23.8573 27.5268 22.9576 28.1945C23.967 30.0714 25.4595 31.6444 27.2807 32.7512L27.3087 32.7865Z"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-midnight-blue-500 text-sm sm:text-base">
                Support Pégase :{" "}
                <span className="text-trinidad-500">
                  <a href="tel:+32476252536">+ 32 476 25 25 36</a>
                </span>
              </p>
            </div>
          </div>
          <div className=" flex items-center bg-orangish-500 rounded-3xl mb-4">
            <div className="flex items-center justify-center py-6 px-5 sm:px-7">
              <svg
                width="40"
                height="40"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 sm:w-auto"
              >
                <path
                  d="M41.1072 31.2941V37.3534C41.1095 37.9159 40.9956 38.4727 40.773 38.9881C40.5503 39.5035 40.2237 39.9662 39.8142 40.3464C39.4046 40.7267 38.9211 41.0162 38.3946 41.1964C37.868 41.3767 37.3101 41.4436 36.7566 41.393C30.6154 40.7176 24.7163 38.5938 19.5334 35.1923C14.7114 32.0912 10.6232 27.9538 7.55909 23.0736C4.18627 17.8045 2.0873 11.8053 1.43221 5.56223C1.38234 5.0037 1.44793 4.44077 1.6248 3.9093C1.80167 3.37783 2.08596 2.88945 2.45955 2.47526C2.83314 2.06107 3.28785 1.73014 3.79474 1.50355C4.30162 1.27695 4.84958 1.15966 5.40371 1.15913H11.3909C12.3594 1.14948 13.2984 1.49659 14.0328 2.13576C14.7671 2.77492 15.2468 3.66253 15.3823 4.63314C15.635 6.57225 16.1037 8.47621 16.7793 10.3087C17.0479 11.0316 17.106 11.8173 16.9468 12.5726C16.7876 13.3279 16.4178 14.0213 15.8813 14.5704L13.3467 17.1355C16.1877 22.1921 20.3247 26.3789 25.3211 29.2541L27.8556 26.689C28.3982 26.146 29.0833 25.7717 29.8296 25.6107C30.576 25.4496 31.3523 25.5084 32.0666 25.7801C33.8773 26.4639 35.7586 26.9382 37.6746 27.194C38.6441 27.3324 39.5294 27.8266 40.1623 28.5826C40.7952 29.3385 41.1315 30.3036 41.1072 31.2941Z"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-midnight-blue-500 text-sm sm:text-base">
                Tél. général ByVets :{" "}
                <span className="text-trinidad-500">
                  <a href="tel:+3285250825">+ 32 85 25 08 25</a>
                </span>
              </p>
            </div>
          </div>
          <div className=" flex items-center bg-orangish-500 rounded-3xl mb-4">
            <div className="flex items-center justify-center py-6 px-5 sm:px-7">
              <svg
                width="40"
                height="40"
                viewBox="0 0 43 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 sm:w-auto"
              >
                <path
                  d="M5.2627 1.38452H37.2627C39.4627 1.38452 41.2627 3.18872 41.2627 5.39386V29.4499C41.2627 31.655 39.4627 33.4592 37.2627 33.4592H5.2627C3.0627 33.4592 1.2627 31.655 1.2627 29.4499V5.39386C1.2627 3.18872 3.0627 1.38452 5.2627 1.38452Z"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.2627 5.3938L21.2627 19.4265L1.2627 5.3938"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-midnight-blue-500 text-sm sm:text-base">
                Logiciel Pégase :{" "}
                <span className="text-trinidad-500">
                  <a href="mailto:pegase@byvets.be">pegase@byvets.be</a>
                </span>
              </p>
              <p className="text-midnight-blue-500 text-sm sm:text-base">
                Administration :{" "}
                <span className="text-trinidad-500">
                  <a href="mailto:administration@byvets.be">
                    administration@byvets.be
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className=" flex items-center bg-orangish-500 rounded-3xl mb-4">
            <div className="flex items-center justify-center py-6 px-5 sm:px-7">
              <svg
                width="36"
                height="43"
                viewBox="0 0 36 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 sm:w-auto"
              >
                <path
                  d="M34.6267 18.0614C34.6267 30.7887 18.2631 41.6978 18.2631 41.6978C18.2631 41.6978 1.89941 30.7887 1.89941 18.0614C1.89941 13.7215 3.62344 9.55933 6.69221 6.49055C9.76099 3.42177 13.9231 1.69775 18.2631 1.69775C22.603 1.69775 26.7651 3.42177 29.8339 6.49055C32.9027 9.55933 34.6267 13.7215 34.6267 18.0614Z"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2631 23.516C21.2756 23.516 23.7177 21.0739 23.7177 18.0615C23.7177 15.049 21.2756 12.6069 18.2631 12.6069C15.2507 12.6069 12.8086 15.049 12.8086 18.0615C12.8086 21.0739 15.2507 23.516 18.2631 23.516Z"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-midnight-blue-500 text-sm sm:text-base">
                ByVets SC{" "}
                <span className="text-trinidad-500">
                  67, Rue Joseph Wauters
                </span>
              </p>
              <p className="text-midnight-blue-500 text-base">
                <span className="text-trinidad-500">
                  B-4500 Huy - BE 0753 452 052
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/2">
          {" "}
          <img src={headerImg} alt="Contacts" />
        </div>
      </section>
      <section className="mb-36">
        <h3 className="text-midnight-blue-500 sm:text-center text-3xl sm:text-4xl font-semibold mb-11">
          Contactez-nous !
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
                  <Link to="/politique-vie-privee">
                    Politique de Protection Vie Privée (RGDP)
                  </Link>{" "}
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
      <section className="mb-36">
        <h3 className="text-midnight-blue-500 text-center text-3xl sm:text-4xl font-semibold mb-11">
          Les Administrateurs délégués
        </h3>
        <div className="flex flex-col flex-wrap sm:flex-row sm: justify-center lg:justify-around">
          {admins.map((admin) => {
            return (
              <div className="flex sm:flex-col w-full sm:w-1/2 lg:w-1/4 text-midnight-blue-500 sm:text-center mb-8 line">
                <div className="w-4/12 sm:w-full">
                  <img src={admin.img} className="mx-auto" alt="" />
                </div>
                <div className="w-8/12 sm:w-full">
                  <div className="text-lg font-normal mt-1 sm:-mt-8">
                    <p className="inline-block sm:block">{admin.firstname} </p>{" "}
                    <p className="inline-block sm:block">{admin.lastname}</p>
                  </div>
                  <p className="text-sm font-semibold">{admin.role}</p>
                  <p className="inline-block sm:block text-sm font-light">
                    {admin.desc1}
                  </p>{" "}
                  <p className="inline-block sm:block text-sm font-light ">
                    {admin.desc2}
                  </p>
                  <p className="text-sm font-light">{admin.phone}</p>
                  <p className="text-sm font-light break-words">{admin.mail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mb-24">
        <h3 className="text-midnight-blue-500 text-center text-3xl sm:text-4xl font-semibold mb-11">
          L’équipe de développement
        </h3>

        <div
          style={{ backgroundColor: "#BFDAFF" }}
          className="flex flex-col sm:flex-row justify-around rounded-3xl px-1 sm:px-4 py-12"
        >
          {devs.map((dev) => {
            return (
              <div className="flex sm:flex-col  text-midnight-blue-500 sm:text-center mb-8 line">
                <div className="w-4/12 sm:w-full">
                  <img src={dev.img} className="mx-auto" alt="" />
                </div>
                <div className="w-8/12 sm:w-full">
                  <div className="text-lg font-normal mt-1 sm:-mt-8">
                    <p className="inline-block sm:block">{dev.firstname} </p>{" "}
                    <p className="inline-block sm:block">{dev.lastname}</p>
                  </div>
                  <p className="text-sm font-semibold">{dev.role}</p>

                  <p className="text-sm font-light break-words">{dev.mail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ContactsPage;
