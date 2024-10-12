import React, { ReactNode } from "react";

import IconGrid from "@/components/IconGrid";
import { designGridItems, devGridItems } from "@/components/IconGrid/config";
import Me from "@/components/Me";
import { H1, H3, Paragraph, StyledLink } from "@/components/Typography";

const HR = () => (
  <div className="py-6">
    <div className="h-px bg-black/10" />
  </div>
);

const Section = ({
  title,
  paragraph,
  children,
}: {
  title: string;
  paragraph: string;
  children: ReactNode;
}) => (
  <>
    <HR />
    <H3>{title}</H3>
    <Paragraph>{paragraph}</Paragraph>
    {children}
  </>
);

const AboutPage = () => (
  <div className="mx-auto w-full max-w-2xl items-start gap-6 sm:flex">
    <Me className="top-10 mb-10 size-20 shrink-0 shadow-lg outline outline-1 outline-black/10 sm:sticky sm:mb-0" />
    <div className="space-y-4">
      <H1>About me</H1>
      <Paragraph>
        Hi there, my name is Arthur. I am a designer/developer based in
        Amersfoort, currently working at{" "}
        <StyledLink href="https://enrise.com">Enrise</StyledLink>.
      </Paragraph>
      <Paragraph>
        I hold a MSc. in Industrial Design from the{" "}
        <StyledLink href="https://www.tue.nl/en/education/graduate-school/master-industrial-design">
          Eindhoven University of Technology
        </StyledLink>
        , which grants me the authority to call myself an ingenieur (ir.).
        Sweet!
      </Paragraph>
      <Section
        title="Development 🔧"
        paragraph="Here are a few key technologies and concepts I like working with when
        developing digital products and other stuff."
      >
        <IconGrid items={devGridItems} />
      </Section>
      <Section
        title="Design 🧙"
        paragraph="Similarly, here are areas of design that I like and tools I enjoy
        working with."
      >
        <IconGrid className="pb-12" items={designGridItems} />
      </Section>
    </div>
  </div>
);

export default AboutPage;
