import React from "react";
import styled from "../styles/header.module.css";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

const ListYourProperty = () => {
  const router = useRouter();
  // function handleroute() {
  //   router.push("/listyourproperty");
  // }
  return (
    <>
      <header className={styled.header}>
        <div className={styled.wid}>
          <div className={styled.dis}>
            <div>
              <p className={styled.mainpara}>Booking.com</p>
              <p
                style={{
                  backgroundColor: "green",
                  marginTop: "0px",
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                Join 29,369,760 other listings already on Booking.com
              </p>
            </div>
            <div className={styled.join}>
              <div className={styled.pddtop}>
                <img
                  style={{ borderRadius: "50%", width: "40px", height: "34px" }}
                  src="https://q-xx.bstatic.com/backend_static/common/flags/new/48/gb.png"
                ></img>
              </div>
              <div className={styled.pddtop}>
                <p style={{ color: "white", marginTop: "10px" }}>
                  Already a partner?
                </p>
              </div>
              <div className={styled.pddtop}>
                <button
                  style={{
                    backgroundColor: "darkblue",
                    color: "white",
                    padding: "8px",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </button>
              </div>
              <div className={styled.pddtop}>
                <button
                  style={{
                    backgroundColor: "	#00BFFF",
                    color: "white",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  Help
                </button>
              </div>
            </div>
          </div>

          {/* second section */}
          <div className={styled.second}>
            <div className={styled.ff}>
              {" "}
              <div style={{ color: "white" }} className={styled.wht}>
                <b style={{ fontSize: "45px" }}>List your</b> <br></br>
                <b style={{ fontSize: "45px", color: "#00BFFF" }}>Anything</b>
                <br></br>
                <b style={{ fontSize: "45px" }}>on Hourly web</b>
                <br></br>
                <p
                  style={{
                    textDecoration: "bolder",
                    marginTop: "1rem",
                  }}
                >
                  Whether hosting is your side passion or full-time job,
                  register your holiday rental on Booking.com to reach
                  travellers worldwide
                </p>
              </div>
            </div>
            <div className={styled.bg}>
              <div style={{}}>
                <p>Earn more with consistent booking</p>
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
                <div className={styled.regis}>
                  <a
                    onClick={() => router.push("/listyourproperty")}
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
                <hr />
                <div className={styled.we}>
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