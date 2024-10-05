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
      title="Pixel Pioneering: From Blank Canvas to Digital Masterpiece"
      description="Join me on an artistic expedition, exploring the evolution of my visual creativity and the magic that unfolds when design meets imagination."
      date="Feb 21, 2024"
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
      label="UpTab.app"
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
      title="Design Diaries: Crafting Aesthetic Alchemy"
      description="Explore the aesthetic evolution of my design journey, from humble beginnings to the fusion of creativity and structure in the pursuit of visual excellence."
      date="Dec 16, 2023"
      href="/"
    />
    <IconBentoItem
      imageUrl="/images/taakjes-logo.png"
      label="Taakjes.app"
      bgColor="#EFD3E4"
      href="https://taakjes.vercel.app"
      isExternal
    />
  </div>
);

export default HomePage;
