import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectAbout, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {projectAbout}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div key={`project-${index}`} onClick={() => handleProjectClick(project)}>
            <ProjectCard
              index={index}
              {...project}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectSlider 
          project={selectedProject} 
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

export default SectionWrapper(Works, "projects");