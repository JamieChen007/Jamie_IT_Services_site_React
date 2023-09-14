import PicContainer from "../components/PicContainer";
import ChooseReasons from "../components/ChooseReasons/ChooseReasons";
import Survey from "../components/Survey/Survey";
import Article from "../components/Article";
import WorkWithReasons from "../components/WorkWithReasons/WorkWithReasons";
import SocialMediaCounter from "../components/SocialMediaCounter";
import ContactSlogan from "../components/ContactSlogan";

const INDEX_CONTENT = {
  picContainerContent: {
    picClass: "homePic",
    h1Content: "IT Services Sydney",
    h2Content: "Expert IT Services For Your Sydney Business",
    pContent:
      "Jamie IT Services offers a full range of IT services for your Sydney business, from operations to support, so you can focus more on what matters most.",
    btnContent: "Free IT Support Quote",
    showContactMethod: true,
  },
  chooseReasonsContent: {
    chooseReasons: [
      {
        iconClass: "fas fa-shield-alt",
        h2Content: "Drive Effective Growth",
        pContent:
          "Stop wasting your time and effort trying to solve your own IT issues. We take care of it all for you, so you can focus on running your business.",
      },
      {
        iconClass: "fas fa-funnel-dollar",
        h2Content: "Improve Business Efficiency",
        pContent:
          "Optimise your IT infrastructure and streamline your performance with a managed services solution that brings all your tech needs under one roof.",
      },
      {
        iconClass: "fas fa-chart-bar",
        h2Content: "Gain Complete Peace of Mind",
        pContent:
          "Reduce costly downtime and gain absolute confidence that your critical business services are secure and monitored 24/7/365.",
      },
    ],
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
  articleContent: [
    {
      h2Content:
        "IT services for Sydney businesses – Your network and data are in safe hands",
      pContent:
        "Our team prides itself on offering the most informed and current advice, from identifying tools for remote collaboration to boosting security, recommending server upgrades, and anything in between. Together we have a varied range of skills, experience and expertise covering the entire spectrum of IT matters. We take a proactive approach to managing problems as they arise and will make sure your network is set up for optimum performance. Enterprise-level support, hardware and software are readily available thanks to the strength of our internal team and external network of partners and suppliers. Essential IT customers, therefore, enjoy the benefits of cutting-edge solutions and the latest technologies, all at cost-effective prices.",
    },
    {
      h2Content: "Providing trustworthy IT services that you can count on",
      pContent:
        "Jamie IT Services is Sydney’s trusted business IT services company. We’ve been around since 2023, and during that time, we have seen and done it all! Our people have witnessed IT trends come and go, technologies develop exponentially, and the IT landscape evolves at an ever-increasing pace. Throughout, we have been trusted by clients to support them in getting the best out of their networks. We’re proud that many businesses see us as a vital extension of their team. We are renowned for our responsiveness and ability to deliver high-quality results on deadline every time. In addition, our certifications from the       likes of Microsoft and other credible names in the technology world offer further reassurance that you can put your trust in us!",
    },
  ],
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

const IndexPage = () => {
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
