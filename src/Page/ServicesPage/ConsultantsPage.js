import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import Survey from "../../components/Survey/Survey";
import WorkWithReasons from "../../components/WorkWithReasons/WorkWithReasons";
import ContactSlogan from "../../components/ContactSlogan";

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
  surveyContent: {
    h2Content: "For a custom IT quote, simply fill out this form",
    h4Content:
      "Delivering High Quality, Reliable IT Services, Sydney & Surrounds",
    surveyQuestions: [
      {
        surveyQuestionDetail:
          "What problem(s) are you experiencing with your current IT support company?",
        type: "checkbox",
        answerOptions: [
          "They're slow to respond",
          "Consistently unavailable",
          "Poor execution",
          "They charge too much",
        ],
      },
      {
        surveyQuestionDetail:
          "What features would you like from your new IT support team?",
        type: "checkbox",
        answerOptions: [
          "Quick communication",
          "Transparent pricing",
          "Support on demand",
          "A hassle-free experience",
        ],
      },
      {
        surveyQuestionDetail: "How many staff are at your organisation?",
        type: "radio",
        answerOptions: ["1-9", "10-19", "20-49", "50-99", "100-199", "200+"],
        name: "staffQty",
      },
      {
        surveyQuestionDetail: "What cities do you operate in?",
        type: "checkbox",
        answerOptions: [
          "Melbourne",
          "Sydney",
          "Brisbane",
          "Adelaide",
          "Perth",
          "Other",
        ],
      },
      {
        surveyQuestionDetail: "Which IT Services Do You Require?",
        type: "checkbox",
        answerOptions: [
          "Managed IT Support",
          "IT & Cyber Security",
          "Helpdesk Support",
          "Data Backups",
          "Disaster Recovery Planning",
          "Cloud Services",
          "Remote Tech Support",
          "Microsoft 365, Sharepoint & OneDrive Support",
        ],
      },
    ],
  },
  contentPicClass: "consultantContentPic",
  //ContentDescBlock
  contentDescBlockContent2: {
    h2Content: "IT Consulting Firms Sydney",
    h3Content:
      "Jamie IT Services provides IT consulting services to help your business thrive with the right technology.",
    contentDescDetails1: {
      contentDescDetails: [
        {
          h4Content: "",
          pContentDescDetail: [
            "Jamie IT Services team of consultants provide a comprehensive range of IT consulting services. Our consulting projects are delivered to an agreed scope via a fixed-price engagement or variable terms based on time and materials. We can tailor our consulting solutions for your business needs and work with any 3rd party vendors to deliver a solution to your Sydney business.",
            "Our engineers, IT consultants and project managers combine technical, interpersonal, and management skills with a thorough understanding of business processes to consistently deliver quality outcomes.",
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
          h4Content: "",
          pContentDescDetail: [
            "Once implemented, we can optionally provide a range of managed IT services that add further value to our solution portfolio and provide ongoing resiliency for your business.",
            "Jamie IT Services is based in the Sydney and works with small to medium sized businesses in the Sydney Metropolitan area. Our years of experience ensure that you and your business receive the best computer consulting available.",
          ],
          ulContentDescDetail: [],
        },
      ],
      isContactBtnShow: true,
    },
  },
  workWithReasonsContent: {
    h2Content: "Friendly and Professional IT Services",
    h4Content: "Why Work With Jamie IT Services?",
    workWithReasons: [
      {
        iconClass: "fas fa-award",
        h2Content: "24/7 Peace of Mind",
        pContent:
          "Because our friendly team members are always contactable, you can rest assured that IT glitches will be acted upon in a timely fashion, no matter what time of the day or night. Many problems can be resolved remotely, but we'll deploy a technician to pay a visit straight away if we're needed onsite.",
      },
      {
        iconClass: "fas fa-file-invoice-dollar",
        h2Content: "Transparent Billing",
        pContent:
          "At the start of every project, we'll outline exactly what's involved, the associated costs and what you can expect for your money so there will be no nasty surprises! All invoices are fully itemised, and our team is happy to answer billing-related enquiries if any details are unclear.",
      },
      {
        iconClass: "fas fa-hands-helping",
        h2Content: "Sydney Based Team",
        pContent:
          "Jamie IT services Sydney-based small and medium businesses, as well as working with companies throughout Australia. All our experts are based on Aussie soil, so you can be sure whoever you speak to will thoroughly understand the local IT landscape.",
      },
    ],
  },
};

const ConsultantsPage = () => {
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
