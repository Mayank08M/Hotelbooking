import React from "react";

import { FaArrowRight } from "react-icons/fa";

const ListYourProperty = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "#003580",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "40rem",
        }}
      >
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  marginBottom: "2px",
                  color: "white",
                  fontFamily: " Rethink Sans, sans-serif",
                }}
              >
                Booking.com
              </p>
              <p
                style={{
                  backgroundColor: "green",
                  marginTop: "0px",
                  color: "white",
                }}
              >
                Join 29,369,760 other listings already on Booking.com
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "32%",
              }}
            >
              <div style={{ marginTop: "14px" }}>
                <img
                  style={{ borderRadius: "50%", width: "40px", height: "34px" }}
                  src="https://q-xx.bstatic.com/backend_static/common/flags/new/48/gb.png"
                ></img>
              </div>
              <div>
                <p style={{ color: "white", marginTop: "20px" }}>
                  Already a partner?
                </p>
              </div>
              <div style={{ paddingTop: "15px" }}>
                <button
                  style={{
                    backgroundColor: "darkblue",
                    color: "white",
                    padding: "8px",
                    border: "1px solid white",
                  }}
                >
                  Sign in
                </button>
              </div>
              <div style={{ paddingTop: "15px" }}>
                <button
                  style={{
                    backgroundColor: "	#00BFFF",
                    color: "white",
                    padding: "8px",
                  }}
                >
                  Help
                </button>
              </div>
            </div>
          </div>

          {/* second section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <div style={{ fontFamily: "sans-serif", marginTop: "120px" }}>
              {" "}
              <div style={{ color: "white" }}>
                <b style={{ fontSize: "45px" }}>List your</b> <br></br>
                <b style={{ fontSize: "45px", color: "#00BFFF" }}>Anything</b>
                <br></br>
                <b style={{ fontSize: "45px" }}>on Hourly web</b>
                <br></br>
                <p style={{ textDecoration: "bolder" }}>
                  Whether hosting is your side passion or full-time job,
                  register your holiday rental on Booking.com to reach
                  travellers worldwide
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "3px",
                width: "50%",
                height: "27rem",
              }}
            >
              <div style={{}}>
                <h4>Earn more with consistent booking</h4>
                <ul style={{ listStyleType: "none" }}>
                  <li
                    style={{
                      position: "relative",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <span style={{ position: "absolute", left: "0" }}>
                      &#10004;
                    </span>
                    45% of partners get their first booking within a week
                  </li>
                  <li
                    style={{
                      position: "relative",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <span style={{ position: "absolute", left: "0" }}>
                      &#10004;
                    </span>
                    More than 1,1 billion holiday rental guests since 2010
                  </li>
                  <li
                    style={{
                      position: "relative",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <span style={{ position: "absolute", left: "0" }}>
                      &#10004;
                    </span>
                    Full control over your property and finances
                  </li>
                  <li
                    style={{
                      position: "relative",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <span style={{ position: "absolute", left: "0" }}>
                      &#10004;
                    </span>
                    Registration is free and takes 15 minutes
                  </li>
                  <li
                    style={{
                      position: "relative",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <span style={{ position: "absolute", left: "0" }}>
                      &#10004;
                    </span>
                    Registration is free and takes 15 minutes
                  </li>
                </ul>
                <div style={{ marginBottom: "5rem" }}></div>
                <hr></hr>
                <div
                  style={{
                    backgroundColor: "#1E90FF",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "-42px",
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      padding: "12px",
                    }}
                  >
                    Get started now
                    <span style={{ paddingLeft: "10px", marginTop: "30px" }}>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
                <hr></hr>
                <div style={{ marginTop: "50px" }}>
                  <p>
                    <b style={{ marginTop: "350px" }}>
                      Already started a registration?
                    </b>
                  </p>
                  <a
                    style={{ color: "blue" }}
                    href="https://account.booking.com/sign-in?op_token=EgVvYXV0aCLSAgoUNlo3Mm9IT2QzNk5uN3prM3BpcmgSCWF1dGhvcml6ZRolaHR0cHM6Ly9qb2luLmJvb2tpbmcuY29tL2FjY291bnQuaHRtbCqBAnsicGFnZSI6Ii9yZWRpcmVjdC10by1qb2luYXBwLWxwP2xhbmc9ZW4mb3JpZ2luPWxwJnV0bV9tZWRpdW09ZnJvbnRlbmQmdXRtX3NvdXJjZT10b3BiYXImbmV3X2FjY291bnQ9MSZsYWJlbD1nZW4xNzNuci0xQkNBRW9nZ0k0NkFkSU0xZ0VhR3lJQVFHWUFRbTRBUm5JQVF6WUFRSG9BUUdJQWdHb0FnTzRBc19maEt3R3dBSUIwZ0lrWVRsbFpUYzFNbVF0WW1aak5pMDBNVFprTFRsaU9ETXROV1JpTVRJNFkyTXdOR0l6MkFJRjRBSUImYWlkPTMwNDE0MiJ9QgRjb2RlKhYQAjD9gNPkr9wmOgBCAFjZ7YWsBmAB"
                  >
                    continue Registration
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ListYourProperty;
