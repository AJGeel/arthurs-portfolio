import {
  ArthurBentoItem,
  BlogBentoItem,
  IconBentoItem,
  ImageBentoItem,
} from "@/components/Bento";

const HomePage = () => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    <ArthurBentoItem />
    <BlogBentoItem
      title="A few words about this site"
      description="I'm excited to ship this site! I like portfolios that are minimalist with personality. In this blog post I talk about the design and the tech stack that powers this site."
      date="Oct 5, 2024"
      href="/"
    />
    <IconBentoItem
      imageUrl="/images/enrise-logo.png"
      label="Enrise.com"
      bgColor="#EFE4CA"
      href="https://enrise.com"
    />
    <IconBentoItem
      imageUrl="/images/uptab-logo.png"
      label="UpTab App"
      bgColor="#DBE9F5"
      href="https://uptab.vercel.app"
      isExternal
    />
    <ImageBentoItem
      imageUrl="/images/retrofuturism.jpg"
      label="placeholder"
      href="/"
      className="row-span-2"
    />
    <ImageBentoItem
      imageUrl="/images/compooter.jpg"
      label="placeholder"
      href="/"
    />
    <BlogBentoItem
      title="Brouwerij Geel: Recipes"
      description="Ever get tired of just drinking beer? Here's a collection of easy and delicious recipes that incorporate various beer styles. "
      date="Oct 5, 2024"
      href="/"
    />
    <IconBentoItem
      imageUrl="/images/taakjes-logo.png"
      label="Taakjes App"
      bgColor="#EFD3E4"
      href="https://taakjes.vercel.app"
      isExternal
    />
  </div>
);

export default HomePage;
