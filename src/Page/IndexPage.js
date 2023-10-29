import PicContainer from "../components/PicContainer";
import ChooseReasons from "../components/ChooseReasons/ChooseReasons";
import Survey from "../components/Survey/Survey";
import Article from "../components/Article";
import WorkWithReasons from "../components/WorkWithReasons/WorkWithReasons";
import SocialMediaCounter from "../components/SocialMediaCounter";
import ContactSlogan from "../components/ContactSlogan";
import { INDEX_CONTENT } from "../constants/indexPage.Const";
import { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    document.title =
      "Jamie IT Services - Home | Reliable IT Company - Free Quote";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Jamie IT Services offers high-quality IT Services in Sydney. Our IT company offers a wide range of IT services to assist your business."
      );
  }, []);

  return (
    <main className="mainContent">
      <PicContainer content={INDEX_CONTENT.picContainerContent} />
      <ChooseReasons content={INDEX_CONTENT.chooseReasonsContent} />
      <Survey content={INDEX_CONTENT.surveyContent} />
      <Article content={INDEX_CONTENT.articleContent[0]} />
      <Article content={INDEX_CONTENT.articleContent[1]} />
      <WorkWithReasons content={INDEX_CONTENT.workWithReasonsContent} />
      <SocialMediaCounter />
      <ContactSlogan />
    </main>
  );
};

export default IndexPage;
