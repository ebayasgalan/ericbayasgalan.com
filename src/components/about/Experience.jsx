import Image from "next/image";
import experienceContent from "../../data/experience";

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <Image
              width={19}
              height={19}
              src="/img/about/briefcase.png"
              alt="icon"
            />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            {val?.compnayName ? <span className="place open-sans-font">{val.compnayName}</span> : null}
          </h5>
          {val.details.map(detail => <p>{detail}</p>)}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
