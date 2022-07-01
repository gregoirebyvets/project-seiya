import React from "react";
import Select from "react-select";
const Step1 = (props) => {
  const serverOptions = [
    { value: 0, label: "Aucun" },
    {
      value: 5,
      label: `Jusqu'à <span style="color: #e65300">5</span> utilisateurs`,
    },
    {
      value: 10,
      label: `Jusqu'à <span style="color: #e65300">10</span> utilisateurs`,
    },
  ];
  const migrationOptions = [
    { value: "none", label: "Aucune" },
    { value: "vetesys", label: "Vetesys" },
    { value: "epivet", label: "Epivet" },
    { value: "fuga", label: "Fuga" },
    { value: "cinnaber", label: "Cinnaber" },
    { value: "other", label: "Autre" },
  ];

  const date50percent = new Date(2022, 6, 1, 0, 0, 0);

  const handleMigrationChange = (item) => {
    props.formik.setFieldValue("appToMigrate", item.value);
  };
  const handleServerChange = (item) => {
    props.formik.setFieldValue("serverUser", item.value);
  };

  const colourStyles = {
    control: (provided, state) => ({
      ...provided,
      marginTop: "-4px",
      marginLeft: "1em",
      color: "#002E6D",
      fontWeight: "500",
      borderColor: state.isFocused
        ? "white"
        : state.isSelected
        ? "white"
        : state.isActived
        ? "white"
        : "#002E6D",
      backgroundColor: "white",
      borderRadius: "7px",
      maxWidth: "220px",
      width: "220px",
      boxShadow: state.isFocused
        ? " 0px 7px 15px rgba(20, 43, 50, 0.1)"
        : "none",
      "&:hover": {
        boxShadow: " 0px 7px 15px rgba(20, 43, 50, 0.1)",
        borderColor: "white",
      },
      zIndex: "20",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontWeight: "500",
        padding: "0.5em 0.5em 0.5em 1.5em",
        backgroundColor: isDisabled
          ? "red"
          : isFocused
          ? "#FFEBD9"
          : isSelected
          ? "white"
          : "white",
        color: "#002E6D",
        cursor: isDisabled ? "not-allowed" : "default",
        borderRadius: "7px",
        "&:hover": {
          backgroundColor: "#FFEBD9",
        },
        "&:before": {
          content: isSelected ? '"✓"' : '""',
          marginRight: isSelected ? "10px" : "0",
          color: "#E65300",
          position: "absolute",
          left: "0.5em",
        },
      };
    },

    menuList: (provided, state) => ({
      padding: "0.25em",
      boxShadow: " 0px 7px 15px rgba(20, 43, 50, 0.1)",
      borderColor: "red",
      width: "220px",
    }),
    menu: (provided, state) => ({
      ...provided,
      paddingTop: "3em",
      marginTop: "-3em",
      boxShadow: " 0px 7px 15px rgba(20, 43, 50, 0.1)",
      width: "220px",

      borderColor: state.isFocused
        ? "white"
        : state.isActive
        ? "white"
        : "white",
    }),
    menuPortal: (provided, state) => ({
      ...provided,
      borderColor: "white",
    }),
    indicatorSeparator: (provided, state) => ({
      display: "hidden",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#E65300",
      "&:hover": {
        color: "#E65300",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#002E6D",
    }),
  };
  return (
    <div>
      <h2 className="text-midnight-blue-500 font-semibold text-3xl mb-3">
        Je choisis ma souscription
      </h2>
      <div className="border border-midnight-blue-500 sm:mr-4 rounded-3xl p-6 text-sm leading-relaxed">
        <div className="flex items-center mb-5">
          <div className="flex-auto text-xl font-semibold">
            <h3>Souscription annuelle</h3>
          </div>
          <div className="text-right text-xl sm:text-2xl">
            {new Date().getTime() <= new Date(date50percent).getTime()
              ? "595,00 € HTVA"
              : "297,5 € HTVA"}
          </div>
        </div>
        <div>
          <div>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>
                1 licence d’utilisation du logiciel Pégase par n° de dépôt de
                médicaments, quelque soit le nombre de vétérinaires ou
                d’ordinateurs
                <br />
                <button
                  className="cursor-pointer"
                  onClick={() => props.setIsLicenseOpen(true)}
                >
                  <span className="font-semibold ">Consultez ici</span> la
                  Licence et les conditions d’utilisation du logiciel Pégase
                </button>
              </li>
              <li>toutes les mises à jour du logiciel</li>
              <li>support (télephone, mail, forum, ...)</li>
              <li>
                utilisation de tous les services associés (accès au forum,
                formations, réductions obtenues, ...)
              </li>
              <li>
                2 demi-journées de formation sont offertes pour tout nouvel
                utilisateur
              </li>
            </ul>
            Un engagement initial de 3 ans minimum est demandé.
          </div>
        </div>
      </div>

      <h2 className="text-midnight-blue-500 font-semibold text-3xl mb-3 mt-8 ">
        Options
      </h2>
      {/*  TODO Responsive */}
      <div className="border  border-midnight-blue-500 sm:mr-4 rounded-3xl text-sm py-4 px-3 mb-8">
        <div className="flex affiliation-dropdown-height  sm:items-center mb-8">
          <div className="w-10/12  flex flex-col sm:flex-row">
            <div className="text-xl font-semibold">Version serveur</div>
            <div className="flex-1 self-start mt-3 sm:mt-0">
              {/* <ServerDropdown formik={props.formik} /> */}
              <Select
                options={serverOptions}
                styles={colourStyles}
                isSearchable={false}
                formatOptionLabel={function (data) {
                  return (
                    <span dangerouslySetInnerHTML={{ __html: data.label }} />
                  );
                }}
                onChange={handleServerChange}
                placeholder={"Choisir une option"}
              />
            </div>
          </div>

          <div className="w-2/12 text-right text-xl sm:text-2xl">
            {props.formik.values.serverUser === 0 && <span>0 €</span>}
            {props.formik.values.serverUser === 5 &&
              props.formik.values.serverUser > 0 && <span>400 €</span>}
            {props.formik.values.serverUser === 10 &&
              props.formik.values.serverUser > 0 && <span>650 €</span>}
          </div>
        </div>
        <ul className="list-disc ml-6 space-y-1 mb-8">
          <li>payable une fois à l'installation</li>
          <li>adapté à une installation fixe</li>
        </ul>
      </div>
      <div className="border border-midnight-blue-500 sm:mr-4 rounded-3xl py-4 px-3 lg:mb-24 text-sm">
        <div className="flex affiliation-dropdown-height sm:items-center mb-8">
          <div className=" w-9/12 flex flex-col sm:flex-row">
            <div className=" text-xl font-semibold">Reprises de données</div>
            <div className="flex-1 self-start mt-3 sm:mt-0">
              <Select
                options={migrationOptions}
                styles={colourStyles}
                isSearchable={false}
                onChange={handleMigrationChange}
                placeholder={"Aucune"}
              />
            </div>
          </div>
          <div className="w-3/12 text-right text-xl sm:text-2xl">
            {!!props.formik.values.appToMigrate && (
              <span>
                {props.formik.values.appToMigrate === "other"
                  ? "Sur devis"
                  : props.formik.values.appToMigrate === "none"
                  ? "0 €"
                  : "450 €"}
              </span>
            )}
          </div>
        </div>
        <ul className="list-disc ml-6 space-y-1 mb-8">
          <li>
            Coût forfaitaire pour les logiciels suivants : VETESYS, EPIVET, FUGA
            et CINNABER. Pour tout autre logiciel, demander un devis.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Step1;
