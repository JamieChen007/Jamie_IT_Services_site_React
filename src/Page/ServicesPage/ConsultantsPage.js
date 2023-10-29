import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import Survey from "../../components/Survey/Survey";
import WorkWithReasons from "../../components/WorkWithReasons/WorkWithReasons";
import ContactSlogan from "../../components/ContactSlogan";
import { CONSULTANTS_CONTENT } from "../../constants/ServicesPage/ConsultantsPage.Const";
import { useEffect } from "react";

const ConsultantsPage = () => {
  useEffect(() => {
    document.title =
      "Jamie IT Services - IT Consultants | Reliable IT Company - Free Quote";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Expert IT consultants in Sydney. Our team is here to help, from strategy & planning to implementation & support. Call us today for a free consult!"
      );
  }, []);

  return (
    <main className="mainContent">
      <PicContainer content={CONSULTANTS_CONTENT.picContainerContent} />
      <ContentDescBlock
        content={CONSULTANTS_CONTENT.contentDescBlockContent1}
      />
      <Survey content={CONSULTANTS_CONTENT.surveyContent} />
      <ContentPic content={CONSULTANTS_CONTENT.contentPicClass} />
      <ContentDescBlock
        content={CONSULTANTS_CONTENT.contentDescBlockContent2}
      />
      <WorkWithReasons content={CONSULTANTS_CONTENT.workWithReasonsContent} />
      <ContactSlogan />
    </main>
  );
};

export default ConsultantsPage;
