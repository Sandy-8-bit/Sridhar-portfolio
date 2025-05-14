import React from "react";
import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full ">
      <div className="rounded-md flex flex-col antialiased  items-start justify-center relative overflow-hidden py-8">
        {/* Heading aligned to top-left */}
        <h2 className=" text-white font-bold mb-4 self-start" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.25rem)' }}>
          Client Review
        </h2>

        {/* Infinite Card Scroll */}
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {

    quote:
      "It is a truth universally acknowledged, that a single man in possession...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
