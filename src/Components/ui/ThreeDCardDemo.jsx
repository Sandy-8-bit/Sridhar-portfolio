
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  const cards = [
    {
      title: "Make things float in air",
      description: "Hover over this card to unleash the power of CSS perspective",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "Design Beyond Limits",
      description: "Interactive 3D design with smooth hover effects",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "Hover-Driven Delight",
      description: "Use perspective to capture user attention",
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    },
  ];

  return (
    <div className="flex flex-col items-start  px-4 py-12 gap-10">
      {/* Section Title */}
       <h2 className="text-3xl text-white font-bold">Recent Work</h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[18rem] md:w-[20rem] lg:w-[22rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white">
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={card.img}
                  alt="thumbnail"
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-start mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Check it out →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
