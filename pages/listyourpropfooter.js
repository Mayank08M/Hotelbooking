import { useState } from "react";
import React from "react";

const Listproperty = () => {
  const [hover, setHover] = useState(false);

  const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: hover ? "#006bb8" : "#0071c2",
  };

  return (
    <>
      {/* first section */}
      <div style={{fontFamily:"sans-serif"}}>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "60%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginRight: "41rem",
                marginBottom: "2rem",
              }}
            >
              <h1>Manage your property with ease</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-partner-thumbnails/BasicSetupEmptyState.png"></img>
                <h2> Quick registration</h2>
                <p>Set up your property listing in 15 minutes</p>
              </div>
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-partner-thumbnails/Websites.png"></img>
                <h2> Easy property import</h2>
                <p>
                  Quickly import your property information from other travel
                  sites
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-partner-thumbnails/CustomerSupport.png"></img>
                <h2> Robust support</h2>
                <p>
                  We offer customer support in 45 languages and provide partners
                  with Pulse, our booking management app
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-partner-thumbnails/BoardChartUp.png"></img>
                <h2> Secure growth</h2>
                <p>
                  Get guaranteed payouts and fraud protection with{" "}
                  <a
                    href="https://partner.booking.com/en-gb/solutions/online-payments-1?utm_source=joinapp&medium=landing_page"
                    style={{ color: "#0071c2" }}
                  >
                    Online Payments by Booking.com
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-partner-thumbnails/ChannelManager.png"></img>
                <h2> Streamlined work</h2>
                <p>
                  Manage your property efficiently by working with one of our{" "}
                  <a
                    href="https://partner.booking.com/en-gb/hospitality-technology-solutions-homes?utm_source=joinapp&medium=landing_page"
                    style={{ color: "#0071c2" }}
                  >
                    600+ trusted Connectivity providers
                  </a>
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-partner-thumbnails/Document.png"></img>
                <h2> Transparent commission</h2>
                <p>
                  Understand what and whom you're paying with the{" "}
                  <a
                    href="https://partner.booking.com/en-gb/node/2369?utm_source=joinapp&medium=landing_page"
                    style={{ color: "#0071c2" }}
                  >
                    transparent commission
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div
        style={{
          backgroundColor: "whitesmoke",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
          fontFamily: "sans-serif",
          padding:"3rem"
        }}
      >
        <div style={{ width: "60%" }}>
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <h1>Meet Patricia</h1>
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>
                See why she loves renting out her property on Booking.com
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "white",
                  border: "1px solid grey",
                  height: "auto",
                  marginBottom: "4rem",
                  marginTop: "2rem",
                }}
              >
                <div style={{}}>
                  <img
                    style={{ width: "19rem", height: "22rem" }}
                    src="https://r-xx.bstatic.com/cdata/joinapp/meet_patricia.jpg"
                  ></img>
                </div>
                <div style={{ margin:"auto", padding:"2rem" }}>
                  <h1>
                    Hourlyroom.com is one of the platforms that help us maintain
                    a high occupancy level. This is mainly due to the instant
                    booking model and the ability to resell cancelled rooms more
                    easily.”
                  </h1>
                  <h3 style={{ marginTop: "4rem" }}>Patricia González</h3>
                  <h4 style={{ color: "GrayText", marginTop: "1rem" }}>
                    Alterhome, Madrid
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily:"sans-serif"
        }}
      >
        <div style={{ width: "60%", padding: "72px 16px" }}>
          <div>
            <h1>Your questions answered</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2rem",
            }}
          >
            <div style={{ marginRight: "50px" }}>
              <hr></hr>
              <div>
                <h3 style={{ margin: "1rem 0" }}>
                  What happens if my property is damaged by a guest?
                </h3>
                <p style={{ margin: "1rem 0" }}>
                  Property owners can request damage deposits from guests.
                  Deposits help cover any potential damage caused by a guest,
                  offering some reassurance that your property will be treated
                  respectfully. If anything goes wrong, it can be reported to
                  our team through our misconduct reporting feature.
                </p>
              </div>
              <hr></hr>
            </div>
            <div>
              <hr></hr>
              <div>
                <h3 style={{ margin: "1rem 0" }}>
                  When will my property go online?
                </h3>
                <p style={{ margin: "1rem 0" }}>
                  Once you've finished creating your listing, you can open your
                  property for bookings on our site. We may ask you to verify
                  your property before you can start accepting bookings, but you
                  can use this time to get familiar with our extranet and get
                  prepared for your first guests.
                </p>
              </div>
              <hr></hr>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2rem",
            }}
          >
            <h4 style={{ fontSize: "20px" }}>
              Still have questions? Find answers to all your questions on our.
            </h4>
            <h4>
              <a
                style={{ color: "#0071c2", padding: "6px", fontSize: "20px" }}
                href="https://join.booking.com/faq.html?aid=304142&continue=0&label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4ARnIAQzYAQHoAQGIAgGoAgO4AreG9qsGwAIB0gIkMTUzMWE1NjAtYjdkYi00MWFiLWFjYzAtODA5YjgwNDhjNTRh2AIF4AIB&test=0"
              >
                FAQ
              </a>
            </h4>
          </div>
        </div>
      </div>
      {/* footer section */}
      <footer style={{ backgroundColor: "#003580", fontFamily:"sans-serif" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "34px",
          }}
        >
          <div style={{ width: "60%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom:"3rem"
              }}
            >
              <div style={{ justifyContent: "center", paddingTop: "70px" }}>
                <h1 style={{ color: "white", fontSize: "35px" }}>
                  Sign up and start welcoming guests today!
                </h1>
              </div>
              <div>
                <div
                  style={{
                    marginLeft: "80px",
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "3px",
                    height: "auto",
                  }}
                >
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "19px",
                      fontWeight: "bold",
                    }}
                  >
                    Earn more with consistent bookings
                  </p>
                  <ul style={{ margin: "30px 0 30px 20px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      45% of partners get their first booking within a week
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      More than 1,1 billion holiday rental guests since 2010
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Full control over your property and finances
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Registration is free and takes 15 minutes
                    </li>
                  </ul>
                  <hr style={{ margin: "1rem 0" }}></hr>
                  <div
                    style={defaultStyle}
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                  >
                    <a
                      href="https://account.booking.com/oauth2/authorize?redirect_uri=https%3A%2F%2Fjoin.booking.com%2Faccount.html&client_id=6Z72oHOd36Nn7zk3pirh&response_type=code&prompt=register&variant=2&hapcw=1&dt=1702725475&state=%7B%22page%22%3A%22%2Fredirect-to-joinapp-lp%3Flang%3Den%26new_account%3D1%26label%3Dgen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4ARnIAQzYAQHoAQGIAgGoAgO4AreG9qsGwAIB0gIkMTUzMWE1NjAtYjdkYi00MWFiLWFjYzAtODA5YjgwNDhjNTRh2AIF4AIB%26origin%3Dlp%26aid%3D304142%22%7D&lang=en"
                      style={{ color: "white", padding: "12px" }}
                    >
                      Get started now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  paddingRight: "13px",
                }}
              >
                <h3>Discover</h3>
                <div style={{ marginBottom: "16px" }}></div>
                <a
                  href="https://join.booking.com/trust"
                  style={{
                    textDecoration: "underline",
                    marginBottom: "10px",
                    color: "powderblue",
                  }}
                >
                  Trust and Safety
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    marginLeft: "300px",
                  }}
                >
                  <h3>Useful links</h3>
                  <div style={{ marginBottom: "16px" }}></div>
                  <a
                    href="https://admin.booking.com/?lang=en&utm_source=joinapp&utm_medium=joinapp-seo-pages"
                    style={{
                      textDecoration: "underline",
                      marginBottom: "10px",
                      color: "powderblue",
                    }}
                  >
                    Extranet
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.booking.hotelmanager&hl=en"
                    style={{
                      textDecoration: "underline",
                      marginBottom: "10px",
                      color: "powderblue",
                    }}
                  >
                    Pulse for Android
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/pulse-for-booking-com-partners/id992795726"
                    style={{
                      textDecoration: "underline",
                      marginBottom: "10px",
                      color: "powderblue",
                    }}
                  >
                    Pulse for iOS
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    marginLeft: "300px",
                  }}
                >
                  <h3>Help and communities</h3>
                  <div style={{ marginBottom: "16px" }}></div>
                  <a
                    href="https://partner.booking.com/en-gb/node/19/?utm_content=19&utm_medium=footer&utm_source=joinapp"
                    style={{
                      textDecoration: "underline",
                      marginBottom: "10px",
                      color: "powderblue",
                    }}
                  >
                    Partner Help
                  </a>
                  <a
                    href="https://partner.booking.com/en-gb/node/27/?utm_content=27&utm_medium=footer&utm_source=joinapp"
                    style={{
                      textDecoration: "underline",
                      marginBottom: "10px",
                      color: "powderblue",
                    }}
                  >
                    Partner Community
                  </a>
                  <a
                    href="https://www.youtube.com/user/bookingpartners/videos"
                    style={{
                      textDecoration: "underline",
                      marginBottom: "10px",
                      color: "powderblue",
                    }}
                  >
                    How-to videos
                  </a>
                </div>
              </div>
            </div>
            <hr style={{ margin: "2rem 0" }}></hr>
            <div style={{ marginBottom: "32px" }}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "powderblue",cursor:"pointer" }}>
                <p>
                  <a style={{ textDecoration: "underline" }}>About us</a> |
                  <a
                    style={{ textDecoration: "underline", paddingLeft: "5px" }}
                  >
                    Privacy and Cookie Statement
                  </a>
                </p>
              </div>
              <div style={{ color: "powderblue",cursor:"pointer" }}>
                <p>
                  &copy; Copyright{" "}
                  <a style={{ textDecoration: "underline" }}>hourlyroom.com</a>{" "}
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Listproperty;
