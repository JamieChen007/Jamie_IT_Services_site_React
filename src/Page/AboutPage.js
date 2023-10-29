import PicContainer from "../components/PicContainer";
import AboutUsInfo from "../components/AboutUsInfo";
import TeamMembers from "../components/TeamMembers/TeamMembers";
import { ABOUT_CONTENT } from "../constants/aboutPage.Const";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title =
      "Jamie IT Services - About Us | Reliable IT Company - Free Quote";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Jamie IT always focus on providing expert on-site and remote technology assistance, to our clients"
      );
  }, []);

  return (
    <main className="mainContent">
      <PicContainer content={ABOUT_CONTENT.picContainerContent} />
      <AboutUsInfo />
      <TeamMembers content={ABOUT_CONTENT.memberInfo} />
    </main>
  );
};

export default AboutPage;
