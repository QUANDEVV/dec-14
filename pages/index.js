import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Analytics from "../components/Analytics";
import Capability from "../components/capability";
import Request from "../components/Request";
import Reports from "../components/Reports/Report";
import InternalNav from "../components/InternalNav";

const Home = () => {
  const { theme } = useTheme();

  const [hideButtons, setHideButtons] = useState(false);

  const scrollRef = useRef(null);

  const parentRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // check if scrollRef container is overfilling its parentRef container
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth)
      return setHideButtons(false);
    return setHideButtons(true);
  };

  // if window is resized
  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);

    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });

  return (
    <div className="">
      <Hero />
      <Features />
      <Services />
      <Analytics />
      <Reports />
      <InternalNav />
      <Capability />
      <Request />
    </div>
  );
};

export default Home;
