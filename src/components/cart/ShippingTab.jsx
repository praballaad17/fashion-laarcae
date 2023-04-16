import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

export default function ShippingTab() {
  const [countryCode, setCountryCode] = useState();
  const [stateCode, setStateCode] = useState();

  const [cities, setCitites] = useState();
  const [states, setSates] = useState();
  const contries = Country.getAllCountries();

  useEffect(() => {
    setSates(State.getStatesOfCountry(countryCode));
  }, [countryCode]);

  useEffect(() => {
    setCitites(City.getCitiesOfState(countryCode, stateCode));
  }, [countryCode, stateCode]);

  return (
    <div>
      <div className="top-shopping4">
        <p className="shop9">Shipping Local Pickup (Free)</p>
        <p className="down-shop">
          Enter your destination to get a shipping estimate
        </p>
      </div>
      <form action="#" className="woocommerce-shipping-calculator">
        <p className="form-row form-row-wide">
          <label>
            Country
            <span className="required">*</span>
          </label>
          <select
            onChange={(e) => setCountryCode(e.target.value)}
            className="email s-email s-wid"
          >
            {contries &&
              contries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
          </select>
        </p>
        <p className="form-row form-row-wide">
          <label>
            State
            <span className="required">*</span>
          </label>
          <select
            onChange={(e) => setStateCode(e.target.value)}
            className="email s-email s-wid"
          >
            {states &&
              states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
          </select>
        </p>
        <p className="form-row form-row-wide">
          <label>
            City
            <span className="required">*</span>
          </label>
          <select className="email s-email s-wid">
            {cities &&
              cities.map((city) => (
                <option key={city.isoCode} value={city.isoCode}>
                  {city.name}
                </option>
              ))}
          </select>
        </p>
        <p className="form-row form-row-wide">
          <label>
            Post Code
            <span className="required">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            required=""
            placeholder="1234567"
          />
        </p>
        <p className="checkout-coupon two">
          <input type="submit" value="Get Quotes" />
        </p>
      </form>
    </div>
  );
}
