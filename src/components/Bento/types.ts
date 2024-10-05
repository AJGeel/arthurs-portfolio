type BaseProps = {
  href: string;
  isExternal?: boolean;
};

export type BlogBentoProps = BaseProps & {
  type: "Blog";
  title: string;
  description: string;
  date: string;
};

export type IconBentoProps = BaseProps & {
  type: "Icon";
  imageUrl: string;
  label: string;
  bgColor: string;
};

export type ImageBentoProps = BaseProps & {
  type: "Image";
  imageUrl: string;
  label: string;
  className?: string;
};
