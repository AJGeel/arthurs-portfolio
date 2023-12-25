export type BlogBentoProps = {
  type: "Blog";
  title: string;
  description: string;
  date: string;
  href: string;
};

export type IconBentoProps = {
  type: "Icon";
  imageUrl: string;
  label: string;
  bgColor: string;
  href: string;
};

export type ImageBentoProps = {
  type: "Image";
  imageUrl: string;
  label: string;
  href: string;
  className?: string;
};
