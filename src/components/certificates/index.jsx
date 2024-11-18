"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Certificates() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        (<div className="w-full h-full py-20">
            <h2
                className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Certificates
            </h2>
            <Carousel items={cards} />
        </div>)
    );
}

const DummyContent = ({ pdfSrc }) => {
    // Add parameters to hide side panel and toolbar
    const pdfURL = `${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&zoom=92`;

    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg[#F5F5F7] p-8 rounded-3xl mb-4">
                    <iframe
                        src={pdfURL}
                        width="100%"
                        height="1050px"
                        className="rounded-lg"
                        title="PDF Content"
                    />
                    <div className="text-center mt-4">
                        <a
                            href={pdfSrc}
                            download
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Download PDF
                        </a>
                    </div>
                </div>)
            );
        })}
    </>);
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "/assets/a.webp",
        content: <DummyContent pdfSrc="/pdfs/a.pdf" />,
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },

    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "iOS",
        title: "Photography just got better.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
];
