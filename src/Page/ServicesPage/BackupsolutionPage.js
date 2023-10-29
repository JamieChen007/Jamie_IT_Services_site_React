import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import Article from "../../components/Article";
import ContactSlogan from "../../components/ContactSlogan";
import { BACKUPSOLUTION_CONTENT } from "../../constants/ServicesPage/BackupsolutionPage.Const";
import { useEffect } from "react";

const BackupsolutionPage = () => {
  useEffect(() => {
    document.title =
      "Jamie IT Services - IT Backup Solutions | Reliable IT Company - Free Quote";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "We offer a wide range of customised IT backup solutions to meet the requirements of small and large businesses."
      );
  }, []);

  return (
    <main className="mainContent">
      <PicContainer content={BACKUPSOLUTION_CONTENT.picContainerContent} />
      <ContentDescBlock
        content={BACKUPSOLUTION_CONTENT.contentDescBlockContent1}
      />
      <ContentPic content={BACKUPSOLUTION_CONTENT.contentPicClass} />
      <Article content={BACKUPSOLUTION_CONTENT.articleContent[0]} />
      <Article content={BACKUPSOLUTION_CONTENT.articleContent[1]} />
      <Article content={BACKUPSOLUTION_CONTENT.articleContent[2]} />
      <ContactSlogan />
    </main>
  );
};

export default BackupsolutionPage;
