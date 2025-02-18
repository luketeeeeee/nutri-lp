"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { containScroll: false, axis: "x" },
    [],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex justify-center w-[400px] xs:w-[430px] lg:w-[520px] gap-2 mx-auto">
      <button className="flex self-center" onClick={scrollPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon w-8 h-8 lg:w-12 lg:h-12 icon-tabler icons-tabler-outline icon-tabler-circle-chevron-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 15l-3 -3l3 -3" />
          <path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" />
        </svg>
      </button>

      <div className="min-w-0 overflow-hidden embla" ref={emblaRef}>
        <div className="flex gap-10 xs:gap-6 embla__container">
          {[
            "https://www.instagram.com/reel/DFbK5WlPDj4/",
            "https://www.instagram.com/reel/DF2xcnKuU4l/",
            "https://www.instagram.com/reel/DFd0yiKPShD/",
          ].map((link) => (
            <div
              key={link}
              className="flex-none w-[300px] h-[510px] xs:w-[330px] md:w-[400px] md:h-[600px]"
            >
              <blockquote
                className="instagram-media pointer-events-none w-full h-full"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
              ></blockquote>
            </div>
          ))}
        </div>
      </div>

      <button className="flex self-center" onClick={scrollNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon w-8 h-8 lg:w-12 lg:h-12 icon-tabler icons-tabler-outline icon-tabler-circle-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 9l3 3l-3 3" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" />
        </svg>
      </button>
    </section>
  );
}
