import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.jpg";

// TODO: Write everything as configurable as possible here and create my own Github repo

export const title = "Pikachu | Portfolio";
export const description =
  "Pikachu is a full-stack developer with 1 year of experience.";

export const aboutText =
  "Greetings! I'm Pikachu, a passionate Pokémon developer with a background in battling and a degree in Pokémon Studies. After mastering my Electric-type moves, I decided to spark a new journey in the world of coding. Transitioning from Thunderbolt to TypeScript, I completed an intensive coding bootcamp, specializing in full-stack web development using React, Node.js, and MongoDB.";

export function HeroText() {
  return (
    <>
      <span className="font-bold">Hello, I'm Pikachu.</span> I'm a{" "}
      <span className="font-bold">full-stack developer</span> with{" "}
      <span className="font-bold">1 year</span> of experience. I enjoy building{" "}
      <span className="italic">sites & apps</span>. My focus is{" "}
      <span className="underline">Next.js</span>.
    </>
  );
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const projectsData = [
  {
    title: "ThunderSpark",
    description:
      "As the lead developer, I powered up the ThunderSpark project for 2 years. Trainers can provide public feedback to Pokémon Centers and Battle Arenas.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: project1,
  },
  {
    title: "RemotePokeJobs",
    description:
      "Job board for remote Pokémon developer positions. I served as the front-end developer, implementing features like type filtering, sorting, and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: project2,
  },
  {
    title: "WordShock Analytics",
    description:
      "An electrifying web app for quick analytics on text. It reveals word count, character count, and social media post limits for Pokémon communication.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
