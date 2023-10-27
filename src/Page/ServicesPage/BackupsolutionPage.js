import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import Article from "../../components/Article";
import ContactSlogan from "../../components/ContactSlogan";
import { BACKUPSOLUTION_CONTENT } from "../../constants/ServicesPage/BackupsolutionPage.Const";

const BackupsolutionPage = () => {
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
