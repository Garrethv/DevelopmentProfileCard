import "./styles.css";

function Avatar() {
  return <img className="avatar" src="/img/avatar.jpg" alt="Profile" />;
}

function Intro() {
  return (
    <p>
      Full Stack web developer, enjoy cooking and spending time with my kids,
      enjoy creating things
    </p>
  );
}

function SkillList() {
  return (
    <ul className="skill_list">
      <Skill skill="React" emoji="Smile" />
      <Skill skill="react" emoji="Smile" />
      <Skill skill="react" emoji="Smile" />
      <Skill skill="react" emoji="Smile" />
      <Skill skill="react" emoji="Smile" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </li>
  );
}

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <h1>Garreth Visser</h1>
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
