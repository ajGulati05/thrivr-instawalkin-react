import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";
import Geocode from "react-geocode";
import Filter from "bad-words";
import PInput from "../../../components/PInput";
import PTextArea from "../../../components/PTextArea";
import AddressInput from "../../../components/AddressInput";
import PPhoneNumInput from "../../../components/PPhoneNumInput";
import PButton from "../../../components/PButton";
import PButtonSecondary from "../../../components/PButtonSecondary";
import pNotification from "../../../components/PNotification";
import { Container, AddressSection, FormControl, FormControlBtn } from "./styled";
import { extractUnitNumberFromAddress } from "../../../utils/addressHelper";
import { validatePhoneNumberMask } from "../../../utils/phoneNumberHelper";
import { updateTherapistBioReqAction } from "../../../store/actions/profile";

const filter = new Filter();

const BiographicalForm = ({ userData }) => {
  const dispatch = useDispatch();
  const addressValues = userData && extractUnitNumberFromAddress(userData?.therapist_bio?.address);
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    address: "",
    unitNumber: "",
    latitude: null,
    longitude: null,
    city: "",
    province: "",
    postal_code: "",
    phone: "",
    direct_billing: false,
    parking: false,
    address_description: "",
    parking_description: "",
    tag_line: "",
    about: ""
  });
  const [errValues, setErrValues] = useState({
    address: false,
    unitNumber: false,
    latitude: false,
    longitude: false,
    city: false,
    province: false,
    postal_code: false,
    phone: false,
    direct_billing: false,
    parking: false,
    address_description: false,
    parking_description: false,
    tag_line: false,
    about: false
  });

  const loading = values && !values.address ? true : false;

  const handleAddressChange = result => {
    const newAddress =
      userData && (result === "" || !result) ? addressValues.finalAddress : result.structured_formatting.main_text;
    let city = "";
    let province = "";
    let postalCode = "";

    // This sets the city and province depending on when these values are in Google's API response
    // The response array indexes are inconsistent, hence why I check for the lengths here
    if (result.terms.length === 4) {
      city = result.terms[1].value;
      province = result.terms[2].value;
    } else if (result.terms.length === 5) {
      city = result.terms[2].value;
      province = result.terms[3].value;
    }
    geocodeByPlaceId(result.place_id)
      .then(results => {
        postalCode = results[0].address_components[results[0].address_components.length - 1].long_name.replace(" ", "");
        return getLatLng(results[0]);
      })
      .then(({ lat, lng }) => {
        setValues({
          ...values,
          address: newAddress,
          city: city,
          province: province,
          latitude: lat,
          longitude: lng,
          postal_code: postalCode
        });
      });
  };

  const handlePhoneNumberChange = phoneNumberText => {
    const formattedPhoneNumber = phoneNumberText.replace(" ", "-");
    setValues({ ...values, phone: formattedPhoneNumber });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(
      produce(values, draft => {
        draft[name] = value;
      })
    );

    setErrValues(
      produce(errValues, draft => {
        if (value) {
          if (firstValidation) draft[name] = false;
        } else {
          if (firstValidation) draft[name] = true;
        }
      })
    );
  };

  const handleDirectBillingChange = value => {
    if (value) {
      setValues({ ...values, direct_billing: true });
    } else if (!value) {
      setValues({ ...values, direct_billing: false });
    }
  };

  const handleParkingChange = value => {
    if (value) {
      setValues({ ...values, parking: true });
    } else if (!value) {
      setValues({ ...values, parking: false });
    }
  };

  const validation = () => {
    const errAddress = values.address === "";
    const errPhone = values.phone === "";
    const errCity = values.city === "";
    const errProvice = values.province === "";
    const errUnitNumber = values.unitNumber === "";
    const errPostalCode = values.postal_code === "";
    const errLatitude = values.latitude === "";
    const errLongitude = values.longitude === "";
    const errParking = values.parking === "";
    const errDirectBilling = values.direct_billing === "";
    const errAddressDescription =
      !values.address_description || values.address_description === ""
        ? false
        : values.address_description.length >= 5 && values.address_description.length < 400
        ? false
        : true;
    const errParkingDescription =
      !values.parking_description || values.parking_description === ""
        ? false
        : values.parking_description.length >= 5 && values.parking_description.length < 400
        ? false
        : true;
    const errTagline =
      values.tag_line === "" ? true : values.tag_line.length > 10 && values.tag_line.length < 100 ? false : true;
    const errAbout = values.about === "" ? true : values.about.length > 20 && values.about.length < 600 ? false : true;

    setErrValues(
      produce(errValues, draft => {
        draft.address = errAddress;
        draft.phone = errPhone;
        draft.city = errCity;
        draft.province = errProvice;
        draft.unitNumber = errUnitNumber;
        draft.postal_code = errPostalCode;
        draft.latitude = errLatitude;
        draft.longitude = errLongitude;
        draft.parking = errParking;
        draft.direct_billing = errDirectBilling;
        draft.address_description = errAddressDescription;
        draft.parking_description = errParkingDescription;
        draft.tag_line = errTagline;
        draft.about = errAbout;
      })
    );
    return (
      !errAddress &&
      !errPhone &&
      !errCity &&
      !errProvice &&
      !errUnitNumber &&
      !errPostalCode &&
      !errLatitude &&
      !errLongitude &&
      !errParking &&
      !errDirectBilling &&
      !errAddressDescription &&
      !errParkingDescription &&
      !errTagline &&
      !errAbout
    );
  };

  const handleFormSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      if (
        filter.isProfane(values.tagline) ||
        filter.isProfane(values.about) ||
        filter.isProfane(values.addressDescription) ||
        filter.isProfane(values.parkingDescription)
      ) {
        pNotification({
          type: "error",
          message: "Validation Error!",
          description: "Please Remove All Profanity"
        });
      } else {
        const bioValues = {
          address: values.unitNumber ? values.unitNumber + " - " + values.address : values.address,
          phone: values.phone,
          city: values.city,
          province: values.province,
          postal_code: values.postal_code,
          tag_line: values.tag_line,
          parking: values.parking ? 1 : 0,
          direct_billing: values.direct_billing ? 1 : 0,
          about: values.about,
          latitude: values.latitude,
          longitude: values.longitude,
          ...(values.parking_description &&
            values.parking_description.length > 0 && {
              parking_description: values.parking_description
            }),
          ...(values.address_description &&
            values.address_description.length > 0 && {
              address_description: values.address_description
            })
        };

        dispatch(updateTherapistBioReqAction(bioValues));
        // TODO: case for creating profile
        // createProfile
        //   ? createProfile(profileValues.therapist_bio)
        //   : dispatch(updateTherapistBioReqAction(profileValues));
      }
    }
  };

  // The backend does not return the coordinares for the user's location,
  // so this useEffect fill in these values if they are undefined on first load
  useEffect(() => {
    if (values?.address && (!values.latitude || !values.longitude)) {
      const getCoordinates = async () => {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_ADDRESS_AUTO_COMPLETE_KEY);
        let response = await Geocode.fromAddress(
          addressValues?.finalAddress + ", " + userData?.therapist_bio?.city + ", " + userData?.therapist_bio?.province
        );
        const { lat, lng } = response.results[0].geometry.location;
        setValues(
          produce(values, draft => {
            draft.longitude = lng;
            draft.latitude = lat;
          })
        );
      };

      getCoordinates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values?.address]);

  useEffect(() => {
    if (userData) {
      setValues(
        produce(values, draft => {
          draft.address = addressValues?.finalAddress;
          draft.unitNumber = addressValues?.finalUnitNumber;
          draft.latitude = null;
          draft.longitude = null;
          draft.city = userData.therapist_bio?.city;
          draft.province = userData.therapist_bio?.province;
          draft.postal_code = userData.therapist_bio?.postal_code;
          draft.phone = validatePhoneNumberMask(userData.therapist_bio?.phone);
          draft.direct_billing = userData.therapist_bio?.direct_billing;
          draft.parking = userData.therapist_bio?.parking;
          draft.address_description = userData.therapist_bio?.address_description;
          draft.parking_description = userData.therapist_bio?.parking_description;
          draft.tag_line = userData.therapist_bio?.tag_line;
          draft.about = userData.therapist_bio?.about;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Container>
      {!loading && (
        <>
          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={8} md={8}>
              <AddressSection>
                <FormControl>
                  <AddressInput
                    label="Address"
                    address={values.address}
                    handleAddressChange={handleAddressChange}
                    error={errValues.address}
                  />
                </FormControl>
                <FormControl>
                  <PInput
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    errorStas={errValues.city}
                    helperMessage={errValues.city ? "The city is required!" : ""}
                  />
                </FormControl>
                <FormControl>
                  <PInput
                    name="province"
                    label="Province"
                    value={values.province}
                    onChange={handleChange}
                    errorStas={errValues.province}
                    helperMessage={errValues.province ? "The province is required!" : ""}
                  />
                </FormControl>
                <FormControl>
                  <PInput
                    name="unitNumber"
                    label="Unit Number"
                    value={values.unitNumber}
                    onChange={handleChange}
                    errorStas={errValues.unitNumber}
                    helperMessage={errValues.unitNumber ? "The unitNumber is required!" : ""}
                  />
                </FormControl>
                <FormControl>
                  <PInput
                    name="postal_code"
                    label="Postal Code"
                    value={values.postal_code}
                    onChange={handleChange}
                    errorStas={errValues.postal_code}
                    helperMessage={errValues.postal_code ? "The postal code is required!" : ""}
                  />
                </FormControl>
                <FormControl>
                  <PPhoneNumInput
                    label="Phone"
                    phoneNumber={values.phone}
                    onPhoneNumberChange={handlePhoneNumberChange}
                    width="100%"
                    errorStas={errValues.phone}
                    helperMessage={errValues.phone ? "The phone number is required!" : ""}
                  />
                </FormControl>
                <FormControl>
                  <PButtonSecondary
                    ptype="default"
                    pname="Direct Billing"
                    psecondaryAlign="left"
                    pwithCheck={true}
                    pchecked={values.direct_billing}
                    onChange={handleDirectBillingChange}
                  />
                </FormControl>
                <FormControl>
                  <PButtonSecondary
                    ptype="default"
                    pname="Free Parking On-Site"
                    psecondaryAlign="left"
                    pwithCheck={true}
                    pchecked={values.parking}
                    onChange={handleParkingChange}
                  />
                </FormControl>
              </AddressSection>
            </Col>
            <Col className="gutter-row" xs={24} sm={16} md={16}>
              <FormControl>
                <PTextArea
                  name="address_description"
                  label="Address Description (min. length of 5)"
                  value={values.address_description}
                  onChange={handleChange}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  maxLength={400}
                  errorStas={errValues.address_description}
                  helperMessage={errValues.address_description ? "Min. length of 5 and Max. length of 400!" : ""}
                />
              </FormControl>
              <FormControl>
                <PTextArea
                  name="parking_description"
                  label="Parking Description (min. length of 5)"
                  value={values.parking_description}
                  onChange={handleChange}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  maxLength={400}
                  errorStas={errValues.parking_description}
                  helperMessage={errValues.parking_description ? "Min. length of 5 and Max. length of 400!" : ""}
                />
              </FormControl>
              <FormControl>
                <PTextArea
                  name="tag_line"
                  label="Tagline (min. length of 10)"
                  value={values.tag_line}
                  onChange={handleChange}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  maxLength={100}
                  errorStas={errValues.tag_line}
                  helperMessage={errValues.tag_line ? "Min. length of 10 and Max. length of 100!" : ""}
                />
              </FormControl>
              <FormControl>
                <PTextArea
                  name="about"
                  label="About (min. length of 20)"
                  value={values.about}
                  onChange={handleChange}
                  autoSize={{ minRows: 5, maxRows: 10 }}
                  maxLength={600}
                  errorStas={errValues.about}
                  helperMessage={errValues.about ? "Min. length of 20 and Max. length of 600!" : ""}
                />
              </FormControl>
            </Col>
          </Row>
          <FormControlBtn>
            <PButton pname="SAVE" ptype="save" onClick={handleFormSubmit} width="30%" />
          </FormControlBtn>
        </>
      )}
    </Container>
  );
};

export default BiographicalForm;

BiographicalForm.propTypes = {
  userData: PropTypes.object
};
