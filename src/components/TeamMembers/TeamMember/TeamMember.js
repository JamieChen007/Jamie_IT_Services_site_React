import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const TeamMember = (props) => {
  const teamMemberRef = useRef();

  const [isTeamMemberShow, setIsTeamMemberShow] = useState(false);

  const moduleShow = () => {
    const triggerBottom = (window.innerHeight / 4) * 3;

    if (!teamMemberRef.current) {
      return;
    }
    const moduleTop = teamMemberRef.current.getBoundingClientRect().top;

    if (moduleTop < triggerBottom) {
      setIsTeamMemberShow(true);
    } else {
      setIsTeamMemberShow(false);
    }
  };

  window.addEventListener("scroll", moduleShow);

  useEffect(() => {
    moduleShow();
  }, []);

  return (
    <div
      className={isTeamMemberShow ? "teamMember show" : "teamMember"}
      ref={teamMemberRef}
    >
      <img
        src={props.content.avaUrl}
        alt={props.content.name}
        className="avatar"
      />
      <div className="teamMemberInfo">
        <div className="teamMemberName">
          <span>{props.content.name}</span>
        </div>
        <div className="teamMemberTitle">
          <span>{props.content.title}</span>
        </div>
        <div className="teamMemberLink">
          <Link
            to={props.content.linkedinUrl}
            className="teamMemberLinkedin"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            to={props.content.githubUrl}
            className="teamMemberGithub"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            to={props.content.blogUrl}
            className="teamMemberBlog"
            target="_blank"
          >
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
