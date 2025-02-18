"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import instagramPosts from "./instagram-posts.json";
import Image from "next/image";
import Link from "next/link";

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
    console.log(instagramPosts);
  }, []);

  return (
    <section className="flex justify-center w-[300px] xs:w-[430px] lg:w-[520px] gap-2 mx-auto">
      <button className="hidden xs:flex self-center" onClick={scrollPrev}>
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
          {instagramPosts.map((post) => (
            <section key={post.postUrl} className="flex-none w-full h-full">
              <div className="w-full flex items-center justify-center">
                <Link
                  href={post.postUrl}
                  target="_blank"
                  prefetch={false}
                  className="flex justify-between font-semibold w-[300px] mb-4 bg-primary transition duration-500 hover:bg-opacity-65 px-5 py-2 rounded-lg items-center"
                >
                  Conheça essa história{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 stroke-white icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M16.5 7.5v.01" />
                  </svg>
                </Link>
              </div>
              <Image
                alt="test"
                src={post.postThumbnailUrl}
                width="500"
                height="500"
              />
            </section>
          ))}
        </div>
      </div>

      <button className="hidden xs:flex self-center" onClick={scrollNext}>
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
