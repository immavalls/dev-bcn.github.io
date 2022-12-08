import { FC } from "react";
import venue from "../../assets/images/la-farga.png";
import GoogleMapReact from "google-map-react";
import "./map.css";
import Logo from "../../assets/images/logo.png";
import FGC from "../../assets/images/fgc.png";
import styled from "styled-components";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { Color } from "../../styles/colors";
import {
  BIG_BREAKPOINT,
  MAX_WIDTH,
  MOBILE_BREAKPOINT,
} from "../../constants/BreakPoints";
import LessThanBlue from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import MoreThanBlue from "../../assets/images/LessThanBlueWhiteIcon.svg";
import { useWindowSize } from "react-use";

const StyledVenue = styled.div`
   {
    padding-top: 100px;
    text-align: left;
    max-width: ${MAX_WIDTH}px;
    margin: 0 auto;
    padding-bottom: 50px;
  }

  .image {
    img.venue {
      width: 95%;
      margin: 0 2.5%;
      text-align: center;
    }

    a,
    p {
      padding-left: 10px;
    }

    a {
      text-decoration: none;
      color: ${Color.DARK_BLUE};
      font-weight: bold;
    }
  }

  section.venue {
    display: flex;
    @media (max-width: ${BIG_BREAKPOINT}px) {
      flex-direction: column;
    }
  }

  h4 {
    margin: 15px 0 3px 10px;
  }

  .image,
  .map {
    width: 50%;
    @media (max-width: ${BIG_BREAKPOINT}px) {
      width: 100%;
    }
  }
`;

const StyledTrainLine = styled.span`
  background-color: #00f200;
  font-weight: bold;
  padding: 1px 2px;
  font-family: sans-serif;
  font-size: 12px;
`;
export const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 5rem;
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
  }
`;
export const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
  }
`;

interface LocationProps {
  lat: number;
  lng: number;
  text: string;
}

const LocationPin: FC = () => {
  return (
    <div>
      <img src={Logo} alt="DevBCN" width="100" />
    </div>
  );
};
export const Venue: FC = () => {
  const { width } = useWindowSize();
  const location: LocationProps = {
    text: "La Farga Gestió d'Equipaments Municipals",
    lat: 41.362,
    lng: 2.1044,
  };
  const key = process.env.REACT_APP_MAP_API_KEY || "";

  return (
    <StyledVenue>
      <TitleSection
        title={"Venue"}
        subtitle={"La Farga"}
        color={Color.DARK_BLUE}
      />
      {width > MOBILE_BREAKPOINT && (
        <>
          <StyledLessIcon src={LessThanBlue} />
          <StyledMoreIcon src={MoreThanBlue} />
        </>
      )}
      <section className="venue">
        <div className="image">
          <img src={venue} alt="La Farga" className="venue" />
          <a
            href="https://www.lafarga.com/corporatiu/lafarga-hospitalet//"
            rel="noreferrer"
            target="_blank"
            title="La Farga"
          >
            La Farga Centre d'Activitats
          </a>
          <p>
            carrer Barcelona, 2. 08901 L'Hospitalet de Llobregat Telf. 932615200
          </p>
          <h4>
            Access by <strong>public transportation:</strong>{" "}
          </h4>
          <p>
            🚝 <StyledTrainLine>R3</StyledTrainLine> Cercanías: Estación
            Hospitalet de Llobregat
          </p>
          <p>🚇 Metro: Parada Rambla Just Oliveras Autobús: Líneas L12 – LH2</p>
          <p>
            🚝 <img src={FGC} alt="FGC" width="20" /> FGC: Estación Sant Josep
          </p>
          <p>🚌 Bus: Line L12 - LH2</p>
          <p>
            🚙 Access by <strong>car:</strong> via C-31 (20 minutes)
          </p>
          <h4>Paid parking options</h4>
          <p>
            <a
              href="https://centrolafarga.com/"
              rel="noreferrer"
              target="_blank"
            >
              La Farga Centre Comercial
            </a>
          </p>
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={location}
            defaultZoom={16}
          >
            <LocationPin />
          </GoogleMapReact>
        </div>
      </section>
    </StyledVenue>
  );
};