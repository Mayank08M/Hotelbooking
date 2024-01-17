'use client';
import { useState } from "react";
import Navbar from "../components/TempNav.js";
import Frames from "../components/Frames.js";

import droplogo from "../public/droplogo.svg";
import Mobile from "../public/Mobile.svg";
import Cross from "../public/Cross.svg";
import QRCode from "../public/QR-Code.svg";
import BGimage from '../public/BGimage.svg'

import styled from "styled-components";

function App() {
  const [selectedOption, setSelectedOption] = useState("For Couples");
  const [showBarcode, setShowBarcode] = useState(false);
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDownloadClick = () => {
    setShowBarcode(!showBarcode);
  };
  return (
    <>
      <div>
        <BackgroundCointain>
          <NavDiv>
            <Navbar />
          </NavDiv>
        </BackgroundCointain>
        <MiddleContainer>
          <RadioContainer>
            <Labels>
              <input
                style={{
                  marginRight: "1rem",
                  paddingTop: "4px",
                  width: "29.33px",
                  height: "29.33px",
                }}
                type="radio"
                name="checkGroup"
                value="For Couples"
                checked={selectedOption === "For Couples"}
                onChange={handleOptionChange}
              />
              For Couples
            </Labels>

            <Labels>
              <input
                style={{
                  marginRight: "1rem",
                  paddingTop: "4px",
                  width: "29.33px",
                  height: "29.33px",
                }}
                type="radio"
                name="checkGroup"
                value="For Group"
                checked={selectedOption === "For Group"}
                onChange={handleOptionChange}
              />
              For Group
            </Labels>

            <Labels>
              <input
                style={{
                  marginRight: "1rem",
                  paddingTop: "4px",
                  width: "29.33px",
                  height: "29.33px",
                }}
                type="radio"
                name="checkGroup"
                value="For One"
                checked={selectedOption === "For One"}
                onChange={handleOptionChange}
              />
              For One
            </Labels>
          </RadioContainer>
          <ContentHeading>
            <div>
              <TopHeading1>Book Hourly And Save Money!</TopHeading1>
              <TopHeading2>
                Choose hotels from all major cities in India
              </TopHeading2>
            </div>
          </ContentHeading>
          <TableContainer>
            <TableContentContainer>
              <div
                style={{
                  width: "30%",
                  borderRight: "1px solid #78787840",
                  padding: "15px",
                }}
              >
                <Content1p1>City, Area or Landmark</Content1p1>
                <Content1p2>Mumbai</Content1p2>
                <Content1p3>India</Content1p3>
              </div>
              <div
                style={{
                  width: "20%",
                  borderRight: "1px solid #78787840",
                  padding: "15px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Content2p1>Check-In Date</Content2p1>
                  <img src={droplogo.src} alt="dropdown" />
                </div>
                <div style={{ display: "flex" }}>
                  <Content2p2>09 </Content2p2>
                  <Content2p3>Dec’23</Content2p3>
                </div>
                <Content1p3>Monday</Content1p3>
              </div>
              <div
                style={{
                  width: "20%",
                  borderRight: "1px solid #78787840",
                  padding: "15px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Content2p1>Check-In Time</Content2p1>
                  <img src={droplogo.src} alt="dropdown" />
                </div>
                <div style={{ display: "flex" }}>
                  <Content2p2>2:00</Content2p2>
                  <Content2p3> PM</Content2p3>
                </div>
              </div>
              <div style={{ width: "30%", padding: "15px" }}>
                <div style={{ display: "flex" }}>
                  <Content2p1>Rooms & Guests</Content2p1>
                  <img src={droplogo.src} alt="dropdown" />
                </div>
                <div style={{ display: "flex" }}>
                  <Content2p2>1</Content2p2>
                  <Content2p3>Room</Content2p3>
                  <Content2p2>2</Content2p2>
                  <Content2p3> Adults</Content2p3>
                </div>
              </div>
            </TableContentContainer>
          </TableContainer>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <SearchDiv href="/login">
              <Search>Search</Search>
            </SearchDiv>
          </div>
        </MiddleContainer>
      </div>

      <Section2>
        <S2HeadingContainer>
          <S2HeadingH1>Explore By Popular Cities</S2HeadingH1>
        </S2HeadingContainer>
        <Frames />
      </Section2>

      <div>
        <StickyButton onClick={handleDownloadClick}>
          <img src={Mobile.src} alt="Mobile" style={{ width: "15%" }} />
          <DownloadApp>Download the App</DownloadApp>
        </StickyButton>
        {showBarcode && (
          <BarcodeSection>
            <BrcdTop>
              <img
                src={Cross.src}
                alt="X"
                onClick={handleDownloadClick}
                style={{ cursor: "pointer" }}
              />
              <BrcdTopHeading>Save Up to 25% booking in App!</BrcdTopHeading>
            </BrcdTop>
            <ScanParagraph>Scan the QR Code to download</ScanParagraph>
            <QRContainer>
              <img src={QRCode.src} alt="QR Code" style={{ width: "100%" }} />
            </QRContainer>
          </BarcodeSection>
        )}
      </div>
    </>
  );
}

export default App;

const BackgroundCointain = styled.div({
  position: "absolute",
  width: "100%",
  backgroundImage:`url(${BGimage.src})`,
  minHeight: "677px",
  backgroundSize: "cover",
});
const NavDiv = styled.div({
  width: "87%",
  margin: "auto",
  marginTop: "4%",
  backgroundColor: "white",
  borderRadius: "31.75px",
  padding: "0 2rem",
});
const MiddleContainer = styled.div({
  position: "relative",
  width: "70%",
  borderRadius: "22px",
  backgroundColor: "white",
  top: "536px",
  left: "15%",
  paddingTop: "4rem",
  border: "1px solid #78787840",
  boxShadow: "0px 4.8px 4.8px 0px #00000040",
});
const RadioContainer = styled.div({
  position: "relative",
  left: "3%",
  width: "60%",
});
const Labels = styled.label({
  marginRight: "1rem",
  fontSize: "23px",
  fontWeight: "600",
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "center",
});
const ContentHeading = styled.div({
  position: "absolute",
  top: "-95px",
  left: "15%",
  backgroundColor: "white",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "132px",
  boxShadow: "0px 4.8px 4.8px 0px #00000040",
  borderRadius: "24px",
});
const TopHeading1 = styled.p({
  fontSize: "35px",
  fontWeight: "600",
  lineHeight: "60px",
  letterSpacing: "0em",
  textAlign: "center",
});
const TopHeading2 = styled.p({
  fontSize: "25px",
  fontWeight: "400",
  lineHeight: "47px",
  letterSpacing: "0em",
  textAlign: "center",
});
const TableContainer = styled.div({
  width: "94%",
  marginTop: "1rem",
  marginBottom: "3rem",
  height: "187px",
  position: "relative",
  left: "3%",
  backgroundColor: "white",
  border: "1.13px solid #78787840",
  borderRadius: "11.28px",
});
const TableContentContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  height: "100%",
  border: "1.13px solid #78787840",
  borderRadius: "11.28px",
});
const Content1p1 = styled.p({
  fontSize: "22px",
  fontWeight: "400",
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
});
const Content1p2 = styled.p({
  fontSize: "32px",
  fontWeight: "500",
  textAlign: "left",
  lineHeight: "68px",
  letterSpacing: "0em",
});
const Content1p3 = styled.p({
  fontSize: "21px",
  fontWeight: "400",
  textAlign: "left",
  lineHeight: "34px",
  letterSpacing: "0em",
});
const Content2p1 = styled.p({
  fontSize: "22px",
  fontWeight: "400",
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  marginRight: "1rem",
});
const Content2p2 = styled.p({
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "68px",
  letterSpacing: "0em",
  textAlign: "left",
});
const Content2p3 = styled.p({
  fontSize: "27px",
  fontWeight: "400",
  lineHeight: "51px",
  letterSpacing: "0em",
  textAlign: "left",
  padding: "7px",
});
const SearchDiv = styled.a`
  position: absolute;
  padding: 2vh;
  bottom: -40px;
  background-color: #ff6803;
  width: 21%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4.8px 4.8px 0px #00000040;
  border-radius: 30px;
  text-decoration: none
`;
const Search = styled.p`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`;
const Section2 = styled.div`
  position: relative;
  top: 640px;
  width: 100%;
`;
const S2HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const S2HeadingH1 = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0em;
  text-align: left;
`;
const StickyButton = styled.div({
  position: "fixed",
  width: "23%",
  bottom: "5%",
  right: "2%",
  backgroundColor: "#fff",
  border: "1px solid #ff6803",
  padding: "10px 50px",
  borderRadius: "30px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const DownloadApp = styled.p`
  font-size: 21px;
  font-weight: 600;
  text-align: left;
  color: #ff6803;
`;
const BarcodeSection = styled.div`
  position: fixed;
  width: 20%;
  bottom: 11.4%;
  right: 3.5%;
  background-color: #fff;
  border: 1px solid #ff6803;
  border-bottom: 0;
  padding: 20px 20px 0 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1440px) {
    bottom: 14.6%;
  }
`;
const BrcdTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const BrcdTopHeading = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
`;
const ScanParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: #787878;
`;
const QRContainer = styled.div`
  border: 18px solid #ff6803;
  border-bottom: 0;
  border-radius: 45px 45px 0 0;
  margin: 20px 20px 0 20px;
  padding: 8% 2% 1% 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    margin: 0;
  }
`;