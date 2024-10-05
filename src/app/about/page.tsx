import Image from "next/image";

import Me from "@/components/Me";
import { H1, H3, Paragraph, StyledLink } from "@/components/Typography";

const HR = () => (
  <div className="py-6">
    <div className="h-px bg-black/10" />
  </div>
);

const GridItem = ({ name, img, bgColor }: GridItem) => (
  <div className="group relative flex items-center gap-2.5 overflow-hidden rounded-md bg-gradient-to-b from-white/80 to-white/30 p-3 shadow-sm outline outline-1 outline-black/10 duration-500 hover:shadow-md">
    <div
      style={{ backgroundColor: bgColor || "#0000001A" }}
      className="pointer-events-none absolute left-0 top-0 h-full w-1/2 translate-x-[220%] skew-x-[40deg] opacity-0 bg-blend-screen blur-md duration-500 group-hover:translate-x-[-60%] group-hover:opacity-100"
    />
    {img && (
      <Image
        className="h-6 w-6 shrink-0 rounded-sm opacity-50 saturate-0 duration-500 group-hover:opacity-100 group-hover:saturate-100"
        width={80}
        height={80}
        src={img}
        alt={name}
      />
    )}
    <Paragraph className="grow truncate">{name}</Paragraph>
  </div>
);

type GridItem = {
  name: string;
  img?: string;
  bgColor?: string;
};

const devGrid: GridItem[] = [
  {
    name: "Typescript",
    img: "/images/icons/typescript.png",
    bgColor: "#007ACC33",
  },
  {
    name: "React",
    img: "/images/icons/react.png",
    bgColor: "#00D8FF33",
  },
  {
    name: "React Native",
    img: "/images/icons/react-native.png",
  },
  {
    name: "Tailwind",
    img: "/images/icons/tailwind.png",
    bgColor: "#44A8B333",
  },
  {
    name: "NextJS",
    img: "/images/icons/nextjs.png",
  },
  {
    name: "Node",
    img: "/images/icons/nodejs.png",
    bgColor: "#8CC84B33",
  },
  {
    name: "Testing",
    img: "/images/icons/testing.png",
    bgColor: "#15C21333",
  },
  {
    name: "CI/CD",
    img: "/images/icons/cicd.png",
    bgColor: "#007ACC33",
  },
];

const designGrid: GridItem[] = [
  {
    name: "UX Design",
    img: "/images/icons/ux-design.png",
  },
  {
    name: "UX Research",
    img: "/images/icons/ux-research.png",
  },
  {
    name: "UI Design",
    img: "/images/icons/ui-design.png",
  },
  {
    name: "Figma",
    img: "/images/icons/figma.png",
    bgColor: "#A259FF33",
  },
  {
    name: "Illustrator",
    img: "/images/icons/illustrator.png",
    bgColor: "#FF9A0033",
  },
  {
    name: "Photoshop",
    img: "/images/icons/photoshop.png",
    bgColor: "#31A8FF33",
  },
  {
    name: "After Effects",
    img: "/images/icons/after-effects.png",
    bgColor: "#9999FF33",
  },
  {
    name: "InDesign",
    img: "/images/icons/indesign.png",
    bgColor: "#FF336633",
  },
];

const AboutPage = () => (
  <div className="mx-auto w-full max-w-2xl items-start gap-6 sm:flex">
    <div className="smb:mb-0 top-10 mb-10 h-20 w-20 shrink-0 sm:sticky">
      <Me className="shadow-lg outline outline-1 outline-black/10" />
    </div>
    <div className="space-y-4">
      <H1>About me</H1>
      <Paragraph className="leading-relaxed">
        Hi there, my name is Arthur. I am a designer/developer based in
        Amersfoort, currently working at{" "}
        <StyledLink href="https://enrise.com">Enrise</StyledLink>.
      </Paragraph>
      <Paragraph className="leading-relaxed">
        I hold a MSc. in Industrial Design from the{" "}
        <StyledLink href="https://www.tue.nl/en/education/graduate-school/master-industrial-design">
          Eindhoven University of Technology
        </StyledLink>
        , which grants me the authority to call myself an ingenieur (ir.).
        Sweet!
      </Paragraph>
      {/* <Paragraph className="leading-relaxed">
        I have a multidisciplinary approach to creating digital products:
        considering Human-Centered Design,
      </Paragraph> */}
      <HR />
      <H3>Development 🔧</H3>
      <Paragraph className="leading-relaxed">
        Here are a few key technologies and concepts I like working with when
        developing digital products and other stuff.
      </Paragraph>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {devGrid.map((item) => (
          <GridItem key={item.name} {...item} />
        ))}
      </div>
      <HR />
      <H3>Design 🧙</H3>
      <Paragraph className="leading-relaxed">
        Similarly, here are areas of design that I like and tools I am
        proficient in.
      </Paragraph>
      <div className="grid grid-cols-2 gap-2 pb-12 sm:grid-cols-3">
        {designGrid.map((item) => (
          <GridItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
