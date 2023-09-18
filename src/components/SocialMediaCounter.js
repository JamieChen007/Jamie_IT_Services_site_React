import { useEffect, useRef, useState } from "react";

const SocialMediaCounter = () => {
  const socialMediaRef = useRef();

  const [twitterFollowers, setTwitterFollowers] = useState(1);
  const [youtubeFollowers, setYoutubeFollowers] = useState(1);
  const [facebookFollowers, setFacebookFollowers] = useState(1);

  const count = (currNum, target, el) => {
    let interval = setInterval(() => {
      currNum++;
      switch (el) {
        case "twitterFollowers":
          setTwitterFollowers(currNum);
          break;
        case "youtubeFollowers":
          setYoutubeFollowers(currNum);
          break;
        case "facebookFollowers":
          setFacebookFollowers(currNum);
          break;
      }
      if (currNum === target) {
        clearInterval(interval);
      }
    }, 1);
  };

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1],
    };

    let io = new IntersectionObserver(() => {
      count(10465, 12000, "twitterFollowers");
      count(3254, 5000, "youtubeFollowers");
      count(5423, 7500, "facebookFollowers");
    }, options);

    io.observe(socialMediaRef.current);
  }, []);

  return (
    <section className="socialMedia" ref={socialMediaRef}>
      <div className="twitter">
        <div className="twitterlogo">
          <i className="fab fa-twitter fa-3x"></i>
        </div>
        <span className="twitterFollowers">{twitterFollowers}</span>
        <span className="twitterDes">Twitter Followers</span>
      </div>
      <div className="youtube">
        <div className="youtubelogo">
          <i className="fab fa-youtube fa-3x"></i>
        </div>
        <span className="youtubeFollowers">{youtubeFollowers}</span>
        <span className="youtubeDes">Youtube Subscribers</span>
      </div>
      <div className="facebook">
        <div className="facebooklogo">
          <i className="fab fa-facebook fa-3x"></i>
        </div>
        <span className="facebookFollowers">{facebookFollowers}</span>
        <span className="facebookDes">Facebook Fans</span>
      </div>
    </section>
  );
};

export default SocialMediaCounter;
