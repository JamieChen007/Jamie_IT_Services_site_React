import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import ChooseReasons from "../../components/ChooseReasons/ChooseReasons";
import Survey from "../../components/Survey/Survey";
import WorkWithReasons from "../../components/WorkWithReasons/WorkWithReasons";
import ContactSlogan from "../../components/ContactSlogan";
import { MANAGEDIT_CONTENT } from "../../constants/ServicesPage/ManageditPage.Const";
import { useEffect } from "react";

const ManageditPage = () => {
  useEffect(() => {
    document.title =
      "Jamie IT Services - Managed IT Services | Reliable IT Company - Free Quote";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Stay on the cutting edge with Jamie IT's managed IT services. Discover the power of seamless IT support for your Sydney business. Free Quotes."
      );
  }, []);

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
