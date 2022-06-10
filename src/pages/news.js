import { useFormik, FormikProvider } from "formik";
import ValidationError from "../components/forms/ValidationError";

import React from "react";
import Layout from "../components/layout";
import { NewsletterValidationSchema } from "../utils/validation/newsletterSchema";
import { Link } from "gatsby";
import Seo from "../components/seo";

const NewsPage = () => {
  const posts = [
    {
      title: "Trucs & astuces pour mieux exploiter Pégase",
      author: "François Van Lerberghe",
      date: "7 octobre 2021",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    },
    {
      title: "Dernières adaptations légales pour les médicaments",
      author: "Alain de Gottal",
      date: "7 octobre 2021",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit lacinia lacus sed posuere. Cras molestie commodo augue, non euismod orci eleifend sed. Sed neque massa, porta vestibulum consequat quis, faucibus quis lectus.",
    },
    {
      title: "La pratique vétérinaire en 2022 : réflexions",
      author: "Pierre Paindaveine",
      date: "5 septembre 2021",
      excerpt:
        "Praesent feugiat efficitur lectus ut feugiat. Praesent ultricies euismod bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pellentesque dapibus mi non porttitor. Duis dictum ante enim.",
    },
    {
      title: "Matériel médical : tendances, trucs & astuces",
      author: "Carine Vandenhove",
      date: "10 août 2021",
      excerpt:
        "Nullam sed enim eget lacus ullamcorper congue in non urna. Suspendisse quis neque imperdiet, ornare nulla eu, sagittis odio. Nunc vitae est nisl. Sed tortor dui, sagittis sit amet facilisis ut, varius sed justo. Nulla tincidunt neque in volutpat.",
    },
    {
      title: "COVID-19 et pratique vétérinaire : à savoir",
      author: "Jean-Christophe Marchin",
      date: "20 décembre 2020",
      excerpt:
        "Sed pulvinar luctus metus scelerisque pretium. Donec non fringilla metus. Vestibulum semper blandit ex, vitae gravida ligula rhoncus sed. Suspendisse ut egestas felis, vitae commodo purus. Ut pellentesque, velit eu vestibulum.",
    },
  ];
  const categories = [
    "Tous",
    "Pégase",
    "Matériel IT",
    "Admin",
    "Facturation",
    "Autre",
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: NewsletterValidationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const searchFormik = useFormik({
    initialValues: {
      query: "",
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Layout>
      <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
      />
      <section className="flex mb-11  sm:mb-24">
        <div className="sm:w-1/2 ">
          <h2 className="text-midnight-blue-500 font-semibold text-3xl sm:text-4xl mb-8">
            Découvrez les dernières nouvelles de ByVets !
          </h2>
          {/* <p className=" text-blue-gray-500 font-light text-lg mb-8 tracking-wide">
            Souscrivez à notre Newsletter pour recevoir chaque semaine nos
            dernières publications et articles.
          </p> */}
          {/* <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="flex flex-wrap ">
              <div className="w-full">
                <div className="w-full">
                  <input
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="   border border-blue-gray-500 max-w-100 w-full  rounded-2xl text-base py-1 pl-4 pr-32"
                    style={{ height: "50px" }}
                  />
                  <button
                    className="btn-orange-shadow text-sm inline bg-trinidad-500 px-4  rounded-full text-white"
                    style={{
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      marginLeft: "-118px",
                    }}
                    type="submit"
                  >
                    M'abonner
                  </button>
                </div>

                {formik.errors.email && formik.touched.email ? (
                  <ValidationError>{formik.errors.email}</ValidationError>
                ) : null}
              </div>
            </form>
          </FormikProvider> */}
          <h3 className="w-full text-midnight-blue-500 font-semibold text-3xl sm:text-4xl mb-8 mt-6 sm:mt-0">
            {/* Nos derniers articles */}
          </h3>
          {posts.map(post => {
            return (
              <div className="mb-20">
                <h4 className=" text-xl text-midnight-blue-500 font-semibold mb-2">
                  {post.title}
                </h4>
                <p className="text-blue-gray-500 text-sm mb-4">
                  <span className="italic font-semibold">
                    par {post.author}
                  </span>{" "}
                  {post.date}
                </p>
                <p className="text-midnight-blue-500 font-light text-sm mb-10 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-center sm:text-left">
                  <Link
                    className="btn-orange-shadow text-base text-white rounded-full px-6 py-3 bg-trinidad-500"
                    to={post.title}
                  >
                    Lire la suite
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden sm:block sm:w-1/2 mx-auto ">
          <svg
            width="269"
            height="201"
            viewBox="0 0 269 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-8"
          >
            <path
              d="M102.879 100.418H37.0508V166.246H102.879V100.418Z"
              stroke="#E65300"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.0508 44.8499H189.571"
              stroke="#E65300"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.0508 74.9751H189.571"
              stroke="#E65300"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M120.23 100.418H189.57"
              stroke="#E65300"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M120.23 133.332H189.57"
              stroke="#E65300"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M120.23 166.281H189.57"
              stroke="#E65300"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M257.844 65.4038H223.415V6.87466C223.415 5.73327 222.961 4.63863 222.154 3.83155C221.347 3.02446 220.253 2.57104 219.111 2.57104H7.16689C6.0255 2.57104 4.93086 3.02446 4.12378 3.83155C3.3167 4.63863 2.86328 5.73327 2.86328 6.87466V193.996C2.86328 195.137 3.3167 196.232 4.12378 197.039C4.93086 197.846 6.0255 198.299 7.16689 198.299H241.559C244.754 198.304 247.918 197.678 250.871 196.459C253.824 195.239 256.508 193.45 258.769 191.192C261.029 188.935 262.823 186.254 264.046 183.302C265.27 180.351 265.9 177.187 265.9 173.993V73.4601C265.9 71.3234 265.051 69.2743 263.54 67.7634C262.03 66.2526 259.98 65.4038 257.844 65.4038Z"
              stroke="#E65300"
              strokeWidth="5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M223.483 65.4038V198.334"
              stroke="#E65300"
              strokeWidth="5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="sm:w-5/6 sm:mx-auto ">
            <div className="mb-2 sm:pl-2">
              {categories.map(cat => {
                return (
                  <button
                    disabled={cat === "Tous"}
                    className="text-midnight-blue-500 border border-midnight-blue-500 rounded-full py-2 px-3 m-1 disabled:cursor-not-allowed disabled:bg-orangish-500 disabled:border-orangish-500"
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <div>
              <FormikProvider value={searchFormik}>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-wrap "
                >
                  <div className="">
                    <div className="">
                      <input
                        id="query"
                        placeholder="Ma recherche"
                        name="query"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.query}
                        className="border border-blue-gray-500 w-full rounded-2xl text-base py-1 pl-4 pr-32"
                        style={{ height: "50px" }}
                      />

                      <svg
                        style={{
                          marginLeft: "-48px",
                          display: "inline",
                        }}
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.1931 23.9355C19.1764 23.9355 24.0268 19.0851 24.0268 13.1018C24.0268 7.11848 19.1764 2.26807 13.1931 2.26807C7.20979 2.26807 2.35938 7.11848 2.35938 13.1018C2.35938 19.0851 7.20979 23.9355 13.1931 23.9355Z"
                          stroke="#E65300"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.7346 26.644L20.8438 20.7532"
                          stroke="#E65300"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {formik.errors.query && formik.touched.query ? (
                      <ValidationError>{formik.errors.query}</ValidationError>
                    ) : null}
                  </div>
                </form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse sm:flex-row  flex-wrap">
        <div className="sm:w-7/12"></div>
        <div className="sm:w-1/3 "></div>
      </section>
    </Layout>
  );
};

export default NewsPage;
