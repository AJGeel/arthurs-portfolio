import { Paragraph } from "@/components/Typography";
import { cn } from "@/utils";
import { ReactNode } from "react";

const PlaceholderItem = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "p-8 py-16 rounded-md outline outline-1 outline-black/10 shadow-sm grow flex items-center justify-center bg-yellow-700",
      className
    )}
  >
    <Paragraph className="align-middle">{children}</Paragraph>
  </div>
);

const Placeholder = () => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    <PlaceholderItem className="col-span-1">
      Arthur used &quot;Placeholder&quot;!
    </PlaceholderItem>
    <PlaceholderItem className="lg:row-span-2">...</PlaceholderItem>
    <PlaceholderItem className="col-span-2">...</PlaceholderItem>
    <PlaceholderItem className="col-span-1">...</PlaceholderItem>
    <PlaceholderItem className="lg:row-span-2">...</PlaceholderItem>
    <PlaceholderItem className="col-span-1">...</PlaceholderItem>
    <PlaceholderItem className="lg:col-span-2">...</PlaceholderItem>
    <PlaceholderItem className="lg:col-span-1">
      It was not very effective.
    </PlaceholderItem>
  </div>
);

const PostsPage = () => <Placeholder />;

export default PostsPage;
