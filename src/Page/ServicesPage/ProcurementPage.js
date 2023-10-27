import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import Article from "../../components/Article";
import ContactSlogan from "../../components/ContactSlogan";
import { PROCUREMENT_CONTENT } from "../../constants/ServicesPage/ProcurementPage.Const";

const ProcurementPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={PROCUREMENT_CONTENT.picContainerContent} />
      <ContentDescBlock
        content={PROCUREMENT_CONTENT.contentDescBlockContent1}
      />
      <ContentPic content={PROCUREMENT_CONTENT.ContentPicClass} />
      <Article content={PROCUREMENT_CONTENT.articleContent[0]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[1]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[2]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[3]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[4]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[5]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[6]} />
      <Article content={PROCUREMENT_CONTENT.articleContent[7]} />
      <ContactSlogan />
    </main>
  );
};

export default ProcurementPage;
