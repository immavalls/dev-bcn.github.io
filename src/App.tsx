import { Link, Route, Routes } from "react-router-dom";
import {
  ROUTE_2023_ATTENDEE,
  ROUTE_2023_CFP,
  ROUTE_2023_COMMUNITIES,
  ROUTE_2023_DIVERSITY,
  ROUTE_2023_HOME,
  ROUTE_2023_JOB_OFFERS,
  ROUTE_2023_SCHEDULE,
  ROUTE_2023_SESSION_FEEDBACK,
  ROUTE_2023_SPEAKER_DETAIL_PLAIN,
  ROUTE_2023_SPEAKER_INFO,
  ROUTE_2023_SPEAKERS,
  ROUTE_2023_TALK_DETAIL_PLAIN,
  ROUTE_2023_TALKS,
  ROUTE_2023_WORKSHOPS,
  ROUTE_ABOUT_US,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_CONDITIONS,
  ROUTE_COOKIES,
  ROUTE_HOME,
  ROUTE_KCD,
  ROUTE_MEETING_DETAIL_PLAIN,
  ROUTE_SPEAKER_DETAIL_PLAIN,
  ROUTE_SPEAKER_INFO,
  ROUTE_SPEAKERS,
  ROUTE_SPONSORSHIP,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
} from "./constants/routes";

import Footer from "./components/Footer/Footer";
import { HomeWrapper } from "./views/Home/HomeWrapper";
import MeetingDetailContainer from "./views/MeetingDetail/MeetingDetailContainer";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpeakerDetailContainer from "./views/SpeakerDetail/SpeakerDetailContainer";
import styled from "styled-components";
import React, { FC } from "react";
import { CookieConsent } from "react-cookie-consent";
import { Color } from "./styles/colors";
import Loading from "./components/Loading/Loading";
import { QueryClient, QueryClientProvider } from "react-query";
import Talks from "./views/Talks/Talks";
import Conditions from "./views/Conditions/Conditions";
import Cookies from "./views/Cookies/Cookies";
import Speakers from "./views/Speakers/Speakers";
import SpeakerInformation from "./views/Speakers/SpeakerInformation";
import About from "./views/About/About";
import Travel from "./views/Travel/Travel";
import NotFoundError from "./components/NotFoundError/NotFoundError";
import { Home2023Wrapper } from "./2023/Home/Home2023Wrapper";
import Speakers2023 from "./2023/Speakers/Speakers2023";
import SpeakerDetailContainer2023 from "./2023/SpeakerDetail/SpeakerDetailContainer2023";
import Talks2023 from "./2023/Talks/Talks2023";
import TalkDetailContainer2023 from "./2023/TalkDetail/TalkDetailContainer2023";
import AttendeeInformation2023 from "./2023/Attendee/AttendeeInformation2023";
import SpeakerInformation2023 from "./2023/Speakers/SpeakerInformation2023";
import Communities2023 from "./2023/Communities/Communities2023";
import CfpSection2023 from "./2023/Cfp/CfpSection2023";
import SessionFeedback2023 from "./2023/SessionFeedback/SessionFeedback2023";
import Kcd from "./views/kcd/Kcd";
import Schedule2023 from "./2023/Schedule/Schedule2023";
import Workshops2023 from "./2023/Workshops/Workshops2023";
import JobOffers2023 from "./2023/JobOffers/JobOffers2023";
import Sponsorship from "./views/sponsorship/Sponsorship";
import Diversity2023 from "./2023/Diversity/Diversity2023";
import CfpSection from "./views/Cfp/CfpSection";
import { CodeOfConduct } from "./views/CodeOfConduct/CodeOfConduct";

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const isDevBcnCookieSet = document.cookie
  .split("; ")
  .some((row) => row.startsWith("DevBcnCookie="));

const RenderCookie = () => (
  <>
    {!isDevBcnCookieSet && (
      <CookieConsent
        debug={true}
        enableDeclineButton={true}
        cookieName="DevBcnCookie"
        style={{ backgroundColor: Color.DARK_BLUE }}
        buttonStyle={{
          backgroundColor: Color.LIGHT_BLUE,
          color: Color.WHITE,
          fontWeight: "bold",
        }}
        declineButtonStyle={{
          fontWeight: "bold",
          backgroundColor: Color.MAGENTA,
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <Link to={ROUTE_COOKIES} style={{ color: "white", fontWeight: "bold" }}>
          Read here
        </Link>
      </CookieConsent>
    )}
  </>
);

const App: FC<React.PropsWithChildren<unknown>> = () => {
  const queryClient = new QueryClient();
  return (
    <StyledAppWrapper className="AppWrapperAll">
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route
            path={ROUTE_TALKS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Talks />
              </React.Suspense>
            }
          />
          {/*<Route path={ROUTE_SESSION_FEEDBACK} element={<React.Suspense fallback={<Loading />}>
                <SessionFeedback />
              </React.Suspense>} />*/}
          <Route
            path={ROUTE_CODE_OF_CONDUCT}
            element={
              <React.Suspense fallback={<Loading />}>
                <CodeOfConduct />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_CONDITIONS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Conditions />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_COOKIES}
            element={
              <React.Suspense fallback={<Loading />}>
                <Cookies />
              </React.Suspense>
            }
          />
          {/*<Route path={ROUTE_DIVERSITY} element={<React.Suspense fallback={<Loading />}>
                <Diversity />
              </React.Suspense>} />*/}
          {/*<Route path={ROUTE_JOB_OFFERS} element={<React.Suspense fallback={<Loading />}>
                <JobOffers />
              </React.Suspense>} />*/}
          {/*<Route path={ROUTE_SCHEDULE} element={<React.Suspense fallback={<Loading />}>
                <Schedule />
              </React.Suspense>} />*/}
          <Route
            path={ROUTE_SPEAKERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Speakers />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_SPEAKER_INFO}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerInformation />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_ABOUT_US}
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_CFP}
            element={
              <React.Suspense fallback={<Loading />}>
                <CfpSection />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_TRAVEL}
            element={
              <React.Suspense fallback={<Loading />}>
                <Travel />
              </React.Suspense>
            }
          />
          {/*<Route path={ROUTE_COMMUNITIES} element={<React.Suspense fallback={<Loading />}>
                <Communities />
              </React.Suspense>} />*/}
          {/*<Route path={ROUTE_ATTENDEE} element={<React.Suspense fallback={<Loading />}>
                <AttendeeInformation />
              </React.Suspense>} />*/}
          <Route
            path={ROUTE_KCD}
            element={
              <React.Suspense fallback={<Loading />}>
                <Kcd />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_MEETING_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <MeetingDetailContainer />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_SPEAKER_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerDetailContainer />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_SPONSORSHIP}
            element={
              <React.Suspense fallback={<Loading />}>
                <Sponsorship />
              </React.Suspense>
            }
          />
          <Route
            path="/:year"
            element={
              <React.Suspense fallback={<Loading />}>
                <HomeWrapper />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_HOME}
            element={
              <React.Suspense fallback={<Loading />}>
                <HomeWrapper />
              </React.Suspense>
            }
          />
          {/* 2023 Edition */}
          <Route
            path={ROUTE_2023_HOME}
            element={
              <React.Suspense fallback={<Loading />}>
                <Home2023Wrapper />
              </React.Suspense>
            }
          />
          {
            <Route
              path={ROUTE_2023_DIVERSITY}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Diversity2023 />
                </React.Suspense>
              }
            />
          }
          <Route
            path={ROUTE_2023_SCHEDULE}
            element={
              <React.Suspense fallback={<Loading />}>
                <Schedule2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_WORKSHOPS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Workshops2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_JOB_OFFERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <JobOffers2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SESSION_FEEDBACK}
            element={
              <React.Suspense fallback={<Loading />}>
                <SessionFeedback2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_CFP}
            element={
              <React.Suspense fallback={<Loading />}>
                <CfpSection2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_ATTENDEE}
            element={
              <React.Suspense fallback={<Loading />}>
                <AttendeeInformation2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_COMMUNITIES}
            element={
              <React.Suspense fallback={<Loading />}>
                <Communities2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SPEAKER_INFO}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerInformation2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SPEAKERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Speakers2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SPEAKER_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerDetailContainer2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_TALKS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Talks2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_TALK_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <TalkDetailContainer2023 />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <NotFoundError />
              </React.Suspense>
            }
          />
        </Routes>
        <RenderCookie />
        <Footer />
      </QueryClientProvider>
    </StyledAppWrapper>
  );
};

export default App;
