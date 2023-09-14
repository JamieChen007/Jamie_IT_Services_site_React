import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";

const SUPPORT_CONTENT = {
  picContainerContent: {
    picClass: "homePic",
    h1Content: "Small Business IT Support Sydney",
    h2Content: "Professional IT Services to Support Your Small Business",
    pContent:
      "Jamie IT s a leading provider of Small Business IT Support in Sydney. If you are looking for an experienced company to manage your IT needs, look no further.",
    btnContent: "Get a Quick Quote",
    showContactMethod: true,
  },
  ContentPicClass: "supportContentPic",
};

const SupportPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={SUPPORT_CONTENT.picContainerContent} />
      <ContentPic content={SUPPORT_CONTENT.ContentPicClass} />
    </main>
  );
};

export default SupportPage;
