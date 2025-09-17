import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, website_link, source_code_link, onClick }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;