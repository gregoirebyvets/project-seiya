import React, { useRef, useState } from "react";
import Select from "react-select";
import * as SelectRadix from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  CheckIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { violet, mauve } from "@radix-ui/colors";
import { styled } from "@stitches/react";

import ValidationError from "../ValidationError";

const StyledTrigger = styled(SelectRadix.SelectTrigger, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.75rem 0 0 0.75rem",
  padding: "0 3px 0 15px",
  fontSize: 16,
  lineHeight: 1,
  fontWeight: 300,
  height: 35,
  gap: 5,
  backgroundColor: "transparent",
  position: "absolute",
  "&:focus": {
    outline: "#007aff auto 1px",
  },
});

const StyledContent = styled(SelectRadix.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const StyledViewport = styled(SelectRadix.Viewport, {
  padding: 5,
});

const StyledItem = styled(SelectRadix.Item, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "#002e6d",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "#e65300",
    color: "#fff",
  },
});

const StyledLabel = styled(SelectRadix.Label, {
  padding: "0 25px",
  fontSize: 12,
  lineHeight: "25px",
  color: "#002e6d",
  "&:focus": {
    color: "#fff",
  },
});

const StyledSeparator = styled(SelectRadix.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(SelectRadix.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: violet.violet11,
  cursor: "default",
};

const StyledScrollUpButton = styled(
  SelectRadix.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectRadix.ScrollDownButton,
  scrollButtonStyles
);

// Exports
export const MySelect = SelectRadix.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectRadix.Value;
export const SelectIcon = SelectRadix.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectRadix.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectRadix.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "#E65300",
    backgroundColor: state.isSelected
      ? "#E65300"
      : state.isFocused
      ? "#FFEBD9"
      : "white",
    padding: "1rem",
    borderRadius: "0.75rem",
    fontWeight: state.isSelected ? "600" : "400",
  }),
  menu: (provided, state) => ({
    ...provided,

    padding: "0.5rem",
    borderRadius: "0.75rem",
  }),
  control: (provided, state) => ({
    display: "flex",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    padding: ".25rem 1rem",
    border: "1px solid rgba(230, 83, 0, 1)",
    borderRadius: "0.75rem",
    color: "rgba(0, 46, 109, 1)",
    maxHeight: "34px",
    outline: state.isFocused ? "#007aff auto 1px" : "none",
    zIndex: "50",
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided) => ({}),
  input: (provided) => ({
    ...provided,
    maxHeight: "1.5rem",
    marginTop: "-3px",
  }),
  valueContainer: () => ({
    display: "grid",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    maxHeight: "26px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#002e6d",
    fontWeight: 400,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#002e6d",
    fontWeight: 400,
  }),
};

const Step2 = (props) => {
  const [hasSelectedCountryOnce, setHasSelectedCountryOnce] = useState(false);
  const [selectedPrefix, setSelectedPrefix] = useState("+32");
  const prefixRef = useRef(null);
  const countries = [
    {
      value: "Allemagne",
      label: "Allemagne",
      countryCode: "DE",
      phonePrefix: "+49",
    },
    {
      value: "Belgique",
      label: "Belgique",
      countryCode: "BE",
      phonePrefix: "+32",
    },
    { value: "France", label: "France", countryCode: "FR", phonePrefix: "+33" },
    {
      value: "Luxembourg",
      label: "Luxembourg",
      countryCode: "LU",
      phonePrefix: "+352",
    },
    { value: "Suisse", label: "Suisse", countryCode: "CH", phonePrefix: "+41" },
  ];

  const handleCountryBlur = () => {
    props.formik.setFieldTouched("country", true);
  };
  return (
    <div className=" transition-all">
      <h2 className="inline text-midnight-blue-500 font-semibold text-2xl mb-4">
        Mes coordonnées
      </h2>
      <span className="text-xs ml-2">
        <span className="text-trinidad-500">*</span>Champs obligatoires
      </span>
      <div className="flex flex-col sm:flex-row flex-wrap sm:pr-4 text-xs mt-2">
        <div className="flex-2 sm:pr-2 mb-6 transition-all">
          <label
            htmlFor="firstname"
            className="block ml-2 mb-0.5 label-required"
          >
            Prénom
          </label>

          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsFirstname", e.target.value);
            }}
            tabIndex={0}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.firstname}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.firstname && props.formik.touched.firstname ? (
            <ValidationError>{props.formik.errors.firstname}</ValidationError>
          ) : null}
        </div>
        <div className="flex-2 sm:pr-2  mb-6">
          <label
            htmlFor="lastname"
            className="block ml-2 mb-0.5 label-required"
          >
            Nom
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            tabIndex={0}
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsLastname", e.target.value);
            }}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.lastname}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.lastname && props.formik.touched.lastname ? (
            <ValidationError>{props.formik.errors.lastname}</ValidationError>
          ) : null}
        </div>
        <div className=" flex-1  mb-6">
          <label htmlFor="omv" className="block ml-2 mb-0.5 label-required">
            OMV
          </label>
          <input
            tabIndex={0}
            id="omv"
            name="omv"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsOmv", e.target.value);
            }}
            value={props.formik.values.omv}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.omv && props.formik.touched.omv ? (
            <ValidationError>{props.formik.errors.omv}</ValidationError>
          ) : null}
        </div>
        <div className="w-full mb-6">
          <label htmlFor="company" className="block ml-2 mb-0.5">
            Société
          </label>
          <input
            tabIndex={0}
            id="company"
            name="company"
            type="text"
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsCompany", e.target.value);
            }}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.company}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.company && props.formik.touched.company ? (
            <ValidationError>{props.formik.errors.company}</ValidationError>
          ) : null}
        </div>
        <div className="w-full mb-6">
          <label htmlFor="address" className="block ml-2 mb-0.5 label-required">
            Adresse
          </label>
          <input
            tabIndex={0}
            id="address"
            name="address"
            type="text"
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsAddress", e.target.value);
            }}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.address}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.address && props.formik.touched.address ? (
            <ValidationError>{props.formik.errors.address}</ValidationError>
          ) : null}
        </div>
        <div className="flex-2 sm:pr-2  mb-6">
          <label htmlFor="country" className="block ml-2 mb-0.5 label-required">
            Pays
          </label>

          <Select
            options={countries}
            styles={customStyles}
            tabIndex={0}
            onBlur={handleCountryBlur}
            onChange={(e) => {
              props.formik.setFieldValue("country", e.value);
              if (!hasSelectedCountryOnce) {
                setHasSelectedCountryOnce(true);
                setSelectedPrefix(e.phonePrefix);
              }
            }}
            placeholder={props.formik.values.country}
            noOptionsMessage={() => "Aucun résultat"}
          />
          <input
            type="text"
            tabIndex={-1}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline hidden"
            id="country"
            name="country"
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsCountry", e.target.value);
            }}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.country}
          />
          {props.formik.errors.country && props.formik.touched.country ? (
            <ValidationError>{props.formik.errors.country}</ValidationError>
          ) : null}
        </div>
        <div className="flex-2 sm:pr-2  mb-6">
          <label htmlFor="city" className="block ml-2 mb-0.5 label-required">
            Localité
          </label>
          <input
            tabIndex={0}
            id="city"
            name="city"
            type="text"
            onChange={(e) => {
              props.formik.handleChange(e);
            }}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.city}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.city && props.formik.touched.city ? (
            <ValidationError>{props.formik.errors.city}</ValidationError>
          ) : null}
        </div>
        <div className="flex-1 mb-6">
          <label htmlFor="zipcode" className="block ml-2 mb-0.5 label-required">
            Code postal
          </label>
          <input
            tabIndex={0}
            id="zipcode"
            name="zipcode"
            type="text"
            onChange={(e) => {
              props.formik.handleChange(e);
              // sessionStorage.setItem("byvetsZipcode", e.target.value);
            }}
            onBlur={props.formik.handleBlur}
            value={props.formik.values.zipcode}
            className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
          />
          {props.formik.errors.zipcode && props.formik.touched.zipcode ? (
            <ValidationError>{props.formik.errors.zipcode}</ValidationError>
          ) : null}
        </div>
        <div className="flex  flex-col sm:flex-row  w-full  mb-6">
          <div className="sm:w-[253px] sm:pr-2 mb-6 sm:mb-0">
            <label htmlFor="phone" className="block ml-2 mb-0.5 label-required">
              Téléphone
            </label>
            <div className="relative flex">
              <MySelect defaultValue="+32" value={selectedPrefix}>
                <SelectTrigger
                  aria-label="Préfixe téléphone"
                  tabIndex={0}
                  ref={prefixRef}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectScrollUpButton>
                    <ChevronUpIcon />
                  </SelectScrollUpButton>
                  <SelectViewport>
                    <SelectGroup>
                      {countries.map((country) => {
                        return (
                          <SelectItem value={country.phonePrefix}>
                            <SelectItemText>
                              <div className="flex items-center gap-x-1 font-normal text-midnight-blue-500">
                                <img
                                  src={`https://cdn.ipregistry.co/flags/twemoji/${country.countryCode.toLowerCase()}.svg`}
                                  height="20"
                                  style={{
                                    height: "18px",
                                  }}
                                  alt={country.label}
                                />
                                <div className="select-separator">
                                  <ChevronDownIcon />
                                </div>
                                <div>{country.phonePrefix}</div>
                              </div>
                            </SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectViewport>
                  <SelectScrollDownButton>
                    <ChevronDownIcon />
                  </SelectScrollDownButton>
                </SelectContent>
              </MySelect>
              <input
                tabIndex={0}
                id="phone"
                name="phone"
                type="text"
                onChange={(e) => {
                  props.formik.handleChange(e);
                  // sessionStorage.setItem("byvetsPhone", e.target.value);
                }}
                onBlur={props.formik.handleBlur}
                value={props.formik.values.phone}
                className="border border-trinidad-500 w-full rounded-xl text-base pl-[92px] py-1 pr-4 my-outline"
              />
            </div>

            {props.formik.errors.phone && props.formik.touched.phone ? (
              <ValidationError>{props.formik.errors.phone}</ValidationError>
            ) : null}
          </div>
          <div className="flex-2 ">
            <label htmlFor="email" className="block ml-2 mb-0.5 label-required">
              Email
            </label>
            <input
              tabIndex={0}
              id="email"
              name="email"
              type="email"
              onChange={(e) => {
                props.formik.handleChange(e);
                // sessionStorage.setItem("byvetsEmail", e.target.value);
              }}
              onBlur={props.formik.handleBlur}
              value={props.formik.values.email}
              className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
            />
            {props.formik.errors.email && props.formik.touched.email ? (
              <ValidationError>{props.formik.errors.email}</ValidationError>
            ) : null}
          </div>
        </div>

        <div className="flex  flex-col sm:flex-row  w-full">
          <div className="sm:w-[253px] sm:pr-2  mb-6 sm:mb-0">
            <label htmlFor="tva" className="block ml-2 mb-0.5 label-required">
              TVA
            </label>
            <input
              tabIndex={0}
              id="tva"
              name="tva"
              type="text"
              onChange={(e) => {
                props.formik.handleChange(e);
                // sessionStorage.setItem("byvetsTva", e.target.value);
              }}
              onBlur={props.formik.handleBlur}
              value={props.formik.values.tva}
              className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
            />
            {props.formik.errors.tva && props.formik.touched.tva ? (
              <ValidationError>{props.formik.errors.tva}</ValidationError>
            ) : null}
          </div>
          <div className="flex-2 ">
            <label
              htmlFor="deposit"
              className="block ml-2 mb-0.5 label-required"
            >
              N° de dépôt
            </label>
            <input
              tabIndex={0}
              id="deposit"
              name="deposit"
              type="text"
              onChange={(e) => {
                props.formik.handleChange(e);
                // sessionStorage.setItem("byvetsDeposit", e.target.value);
              }}
              value={props.formik.values.deposit}
              onBlur={props.formik.handleBlur}
              className="border border-trinidad-500 w-full rounded-xl text-base py-1 px-4 my-outline"
            />
            {props.formik.errors.deposit && props.formik.touched.deposit ? (
              <ValidationError>{props.formik.errors.deposit}</ValidationError>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
