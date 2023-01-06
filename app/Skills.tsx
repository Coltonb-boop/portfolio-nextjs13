"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs,
  SiTailwindcss, 
  SiReact, 
  SiHtml5, 
  SiCsharp, 
  SiPostgresql,
  SiGithub,
} from 'react-icons/si';

type Props = {};

function Skills({}: Props) {
  const skills = [
    'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png',
    'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-512.png',
    'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-css-style-develop-layout-language-256.png',
    ''
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center justify-center items-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill url='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png' />
      </div>
    </motion.div>
  );
}

export default Skills;

