import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import Survey from "../../components/Survey/Survey";
//wsaeada

const CONSULTANTS_CONTENT = {
  picContainerContent: {
    picClass: "consultantsPic",
    h1Content: "IT Consultants Sydney",
    h2Content: "",
    pContent:
      "Jamie IT is a leading provider of business IT consulting services in Sydney. Our team of experts is here to help with your every need, from    IT strategy and planning to implementation and support. Call us today!",
    btnContent: "Free IT Consultants Quote",
    showContactMethod: true,
  },
  //ContentDescBlock
  contentDescBlockContent1: {
    h2Content: "IT Consultants Sydney",
    h3Content: "How can an expert IT Consultant improve my business?",
    contentDescDetails1: {
      contentDescDetails: [
        {
          h4Content:
            "IT Consulting Services personalised to your Sydney business",
          pContentDescDetail: [
            "Jamie IT Services use business insights to help overcome challenges and achieve your business Information technology goals.",
            "Discover the gaps and growth opportunities in your business today!",
            "Jamie IT Services strives to be your trusted partner for all your IT Consulting needs. Our Sutherland Shire based consultants work closely with your Sydney business to assist in delivering technology to help grow your business.",
          ],
          ulContentDescDetail: [],
        },
      ],
      isContactBtnShow: false,
    },

    //2
    contentDescDetails2: {
      contentDescDetails: [
        {
          h4Content: "How Can Jamie IT Help?",
          pContentDescDetail: [
            "We offer a complete portfolio of consultancy, project management and implementation services.",
            "We can help develop:",
          ],
          ulContentDescDetail: [
            "IT strategy & BCP",
            "Documentation and expert consultative reports",
            "Advanced networking solutions for next-generation networks",
            "Manage the roll-out and installation of new systems",
            "Virtualisation and storage consulting",
            "Data centre, SaaS and cloud migration planning",
          ],
        },
      ],
      isContactBtnShow: false,
    },
  },
  contentPicClass: "consultantContentPic",
};

const ConsultantsPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={CONSULTANTS_CONTENT.picContainerContent} />
      <ContentDescBlock
        content={CONSULTANTS_CONTENT.contentDescBlockContent1}
      />
      <ContentPic content={CONSULTANTS_CONTENT.contentPicClass} />
    </main>
  );
};

export default ConsultantsPage;
