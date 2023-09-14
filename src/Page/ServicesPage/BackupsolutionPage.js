import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";

const BACKUPSOLUTION_CONTENT = {
  picContainerContent: {
    picClass: "backUpSolutionsPic",
    h1Content: "IT Backup Solutions",
    h2Content: "",
    pContent: "",
    btnContent: "",
    showContactMethod: false,
  },
  ContentPicClass: "backupContentPic",
};

const BackupsolutionPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={BACKUPSOLUTION_CONTENT.picContainerContent} />
      <ContentPic content={BACKUPSOLUTION_CONTENT.ContentPicClass} />
    </main>
  );
};

export default BackupsolutionPage;
