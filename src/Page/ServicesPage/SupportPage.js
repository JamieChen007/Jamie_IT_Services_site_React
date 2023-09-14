import PicContainer from "../../components/PicContainer";
import ContentPic from "../../components/ContentPic";
import ChooseReasons from "../../components/ChooseReasons/ChooseReasons";
import Survey from "../../components/Survey/Survey";
import ContentDescBlock from "../../components/ContentDescBlock/ContentDescBlock";
import WorkWithReasons from "../../components/WorkWithReasons/WorkWithReasons";
import ContactSlogan from "../../components/ContactSlogan";

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
  chooseReasonsContent: {
    chooseReasons: [
      {
        iconClass: "fas fa-shield-alt",
        h2Content: "Future-Proof Your Business",
        pContent:
          "Optimise your network infrastructure and improve how your business operates by accessing our leading IT equipment and software solutions that evolve as technology does.",
      },
      {
        iconClass: "fas fa-funnel-dollar",
        h2Content: "Eliminate Unnecessary Expenses",
        pContent:
          "Reduce your operating costs and make more from your budget with comprehensive managed IT services all under one roof.",
      },
      {
        iconClass: "fas fa-grin",
        h2Content: "Enjoy Peace of Mind",
        pContent:
          "Trust that your critical business data and infrastructure is safe and secure with comprehensive network monitoring around the clock, backups and disaster recovery.",
      },
    ],
  },

  surveyContent: {
    h2Content: "For a custom IT quote, simply fill out this form",
    h4Content: "IT Support Designed Just For You",
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
  contentDescBlockContent1: {
    h2Content: "",
    h3Content: "How IT can Solutions help your small business?",
    contentDescDetails1: {
      contentDescDetails: [
        {
          h4Content: "Expert IT Support for Small Businesses Sydney",
          pContentDescDetail: [
            "We understand small businesses. We understand the importance of having a reliable IT provider and how it affects you. That is why you can have complete trust in Jamie IT to be your first choice IT system provider.",
            "We take the time to tailor our service to your business because we know no two small businesses are the same.",
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
          h4Content: "Key Benefits",
          pContentDescDetail: [],
          ulContentDescDetail: [
            "Customised quality IT support",
            "Reduced operating costs",
            "Cost-effective access to enterprise-level supportMinimised downtime",
            "Allows the focus to be on running the business, and not the technology",
            "Peace of mind from knowing that the network is monitored 24/7/365 days a year",
          ],
        },
      ],
      isContactBtnShow: true,
    },
  },
  contentPicClass: "supportContentPic",
  contentDescBlockContent2: {
    h2Content: "",
    h3Content: "",
    contentDescDetails1: {
      contentDescDetails: [
        {
          h4Content:
            "Jamie IT Services cares for your business like it is one of our own.",
          pContentDescDetail: [
            "With Jamie IT Services, you always have access to cutting edge hardware and software to help run your business.",
            "In addition to this, you have technical support from Microsoft certified experts to address and resolve issues efficiently, providing allowing you to focus on your business.",
            "We make sure that your system performance is running optimally to best support your operations, putting our focus on preventing technical issues from arising, hence strengthening your business.",
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
          h4Content: "Improve & Optimise your IT systems",
          pContentDescDetail: [
            "Our experienced team can help improve your IT infrastructure and optimise performance so your business can increase productivity. In addition, our IT systems engineers can advise on any queries you may have regarding your IT system and offer solutions to prevent problems from arising.",
            "Due to the nature of technology, issues may unexpectedly arise. With Essential IT, your problem becomes our problem. We perform repairs efficiently and urgently to ensure that downtime is kept to a minimum allowing your staff to continue working without disruption. We offer remote support and onsite support to assist your business promptly.",
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

const SupportPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={SUPPORT_CONTENT.picContainerContent} />
      <ChooseReasons content={SUPPORT_CONTENT.chooseReasonsContent} />
      <Survey content={SUPPORT_CONTENT.surveyContent} />
      <ContentDescBlock content={SUPPORT_CONTENT.contentDescBlockContent1} />
      <ContentPic content={SUPPORT_CONTENT.contentPicClass} />
      <ContentDescBlock content={SUPPORT_CONTENT.contentDescBlockContent2} />
      <WorkWithReasons content={SUPPORT_CONTENT.workWithReasonsContent} />
      <ContactSlogan />
    </main>
  );
};

export default SupportPage;
