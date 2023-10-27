import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import ChooseReasons from "../../components/ChooseReasons/ChooseReasons";
import Survey from "../../components/Survey/Survey";
import WorkWithReasons from "../../components/WorkWithReasons/WorkWithReasons";
import ContactSlogan from "../../components/ContactSlogan";
import { MANAGEDIT_CONTENT } from "../../constants/ServicesPage/ManageditPage.Const";

const ManageditPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={MANAGEDIT_CONTENT.picContainerContent} />
      <ChooseReasons content={MANAGEDIT_CONTENT.chooseReasonsContent} />
      <Survey content={MANAGEDIT_CONTENT.surveyContent} />
      <ContentDescBlock content={MANAGEDIT_CONTENT.contentDescBlockContent1} />
      <ContentPic content={MANAGEDIT_CONTENT.contentPicClass} />
      <ContentDescBlock content={MANAGEDIT_CONTENT.contentDescBlockContent2} />
      <WorkWithReasons content={MANAGEDIT_CONTENT.workWithReasonsContent} />
      <ContentDescBlock content={MANAGEDIT_CONTENT.contentDescBlockContent3} />
      <ContactSlogan />
    </main>
  );
};

export default ManageditPage;
