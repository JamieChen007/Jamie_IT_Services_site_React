import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ChooseReasons from "../../components/ChooseReasons/ChooseReasons";
import Survey from "../../components/Survey/Survey";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import WorkWithReasons from "../../components/WorkWithReasons/WorkWithReasons";
import ContactSlogan from "../../components/ContactSlogan";
import { SUPPORT_CONTENT } from "../../constants/ServicesPage/SupportPage.Const";

const SupportPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={SUPPORT_CONTENT.picContainerContent} />
      <ChooseReasons content={SUPPORT_CONTENT.chooseReasonsContent} />
      <Survey content={SUPPORT_CONTENT.surveyContent} />
      <ContentDescBlock content={SUPPORT_CONTENT.contentDescBlockContent1} />
      <ContentPic content={SUPPORT_CONTENT.contentPicClass} />
      <ContentDescBlock content={SUPPORT_CONTENT.contentDescBlockContent2} />
      <WorkWithReasons content={SUPPORT_CONTENT.workWithReasonsContent} />
      <ContactSlogan />
    </main>
  );
};

export default SupportPage;
