import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
          <BallCanvas size={112} icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
