import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.subheading} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextLink field={slice.primary.button_link}>
        {slice.primary.button_text}
      </PrismicNextLink>
      <PrismicNextImage field={slice.primary.cans_image} />
      <PrismicRichText field={slice.primary.second_heading} />
      <PrismicRichText field={slice.primary.second_body} />
    </section>
  );
};

export default Hero;
