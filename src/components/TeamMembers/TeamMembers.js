import TeamMember from "./TeamMember/TeamMember";

const TeamMembers = (props) => {
  return (
    <section className="teamMembers">
      {props.content.map((teamMember) => {
        return <TeamMember key={teamMember.name} content={teamMember} />;
      })}
    </section>
  );
};

export default TeamMembers;
