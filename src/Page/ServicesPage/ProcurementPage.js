import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";

const PROCUREMENT_CONTENT = {
  picContainerContent: {
    picClass: "itProcumentPic",
    h1Content: "IT Procurement",
    h2Content: "",
    pContent: "",
    btnContent: "",
    showContactMethod: false,
  },
  ContentPicClass: "procurementContentPic",
};

const ProcurementPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={PROCUREMENT_CONTENT.picContainerContent} />
      <ContentPic content={PROCUREMENT_CONTENT.ContentPicClass} />
    </main>
  );
};

export default ProcurementPage;
