import PicContainer from "../components/PicContainer";
import AboutUsInfo from "../components/AboutUsInfo";
import TeamMembers from "../components/TeamMembers/TeamMembers";
import { ABOUT_CONTENT } from "../constants/aboutPage.Const";

const AboutPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={ABOUT_CONTENT.picContainerContent} />
      <AboutUsInfo />
      <TeamMembers content={ABOUT_CONTENT.memberInfo} />
    </main>
  );
};

export default AboutPage;
