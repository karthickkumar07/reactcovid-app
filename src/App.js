import React, { useState } from "react";
import { ApiCall } from "./ApiCall";
import "./App.css";
import Covid from "./Components/Covid";
import Footer from "./Components/Footer";
import Death from "./Components/Death";
const App = () => {
  const [cityName, setCityName] = useState("CITY");
  const [active, setActive] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const getDetails = () => {
    ApiCall().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setActive(data["Tamil Nadu"].districtData[`${cityName}`].active);
        setConfirmed(data["Tamil Nadu"].districtData[`${cityName}`].confirmed);
        setRecovered(data["Tamil Nadu"].districtData[`${cityName}`].recovered);
        console.log({ active });
      }
    });
  };

  const cities = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "The Nilgiris",
    "Theni",
    "Thiruvallur",
    "Thiruvarur",
    "Thoothukkudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvannamalai",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  return (
    <div>
      <Covid cityName={cityName} />
      <div className="container1">
        <div className="center1">
          <select
            onChange={(e) => (
              setCityName(e.target.value), console.log(cityName)
            )}
            className="select"
          >
            <option value="">Select District</option>
            {cities.map((city, c) => (
              <option key={c} value={city}>
                {city}
              </option>
            ))}
          </select>
          <br></br>
          <button onClick={getDetails}>GET DETAILS</button>{" "}
        </div>
      </div>
      <br />

      <div className="container ">
        <div className="row">
          <div className=" col-sm-4">
            <div className="card text-center ">
              <div className="card-body">
                <div className="card-title">
                  <h4>Active Cases</h4>
                </div>
                <div className="card-text">Count of active cases.</div>
                <a href="#" className="btn btn-warning">
                  {active}
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-title">
                  <h4>Confirmed Cases</h4>
                </div>
                <div className="card-text">Count of Confirmed cases.</div>
                <a href="#" className="btn btn-danger">
                  {confirmed}
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-title">
                  <h4>Recovered Cases</h4>
                </div>
                <div className="card-text">Count of Recovered cases.</div>
                <a href="#" className="btn btn-success">
                  {recovered}
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <Death active={active} confirmed={confirmed} recovered={recovered} />
      <Footer />
    </div>
  );
};

export default App;
