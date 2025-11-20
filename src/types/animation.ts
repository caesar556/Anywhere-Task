import type { RefObject } from "react";

export type BannerGsapProps = {
  bannerRef: RefObject<HTMLDivElement>;
  titleRef: RefObject<HTMLElement>;
  descRef: RefObject<HTMLElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  imageRef: RefObject<HTMLImageElement>;
};

export type HeroGsapProps = {
  titleRef: RefObject<HTMLElement>;
  subtitleRef: RefObject<HTMLElement>;
  buttonsRef: RefObject<HTMLElement>;
};
