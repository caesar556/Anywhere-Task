import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import type { HeroGsapProps } from "../../../types/animation";

gsap.registerPlugin(SplitText);


export const useHeroGsap = ({
  titleRef,
  subtitleRef,
  buttonsRef,
}: HeroGsapProps): void => {
  useGSAP(() => {
    const splitHero = new SplitText(titleRef.current, { type: "chars, words" });
    const splitSubtitle = new SplitText(subtitleRef.current, {
      type: "lines, words",
    });

    const tl = gsap.timeline({ delay: 0.4 });

    tl.from(
      splitHero.chars,
      {
        x: 120,
        opacity: 0,
        duration: 1.6,
        ease: "power4.out",
        stagger: 0.08,
      },
      "-=0.3",
    );

    tl.from(
      splitSubtitle.lines,
      {
        y: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.2",
    );

    tl.from(
      buttonsRef.current?.children,
      {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.1",
    );

    return () => {
      tl.kill();
      splitHero.revert();
      splitSubtitle.revert();
    };
  }, []);
};