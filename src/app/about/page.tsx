import { Paragraph } from "@/components/Typography";
import { cn } from "@/utils/cn";

import { youngSerif } from "../layout";

export default function Page() {
  return (
    <div>
      <h1 className={cn(youngSerif.className, "text-4xl")}>About me</h1>
      <Paragraph>
        Hi there, I&apos;m Arthur! I studied Industrial Design at the{" "}
        <a href="https://www.tue.nl/en/education/graduate-school/master-industrial-design">
          Eindhoven University of Technology
        </a>
      </Paragraph>
    </div>
  );
}
