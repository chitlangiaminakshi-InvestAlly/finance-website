"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { slugify } from "@/lib/utils";
import type { PortableTextBlock } from "@/lib/sanity.types";

type Heading = { id: string; text: string; level: number; style: string };

interface TOCProps {
    content: PortableTextBlock[];
    isMobile?: boolean;
}

export default function TableOfContents({ content, isMobile = false }: TOCProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLElement>(null);

    // Extract headings from content
    const counts: Record<string, number> = {};
    const headings = content
        .map((block) => {
            const blockStyle = block.style;
            if (block._type === "block" && blockStyle && ["h1", "h2", "h3", "h4"].includes(blockStyle)) {
                const text = block.children?.map((child) => child.text || "").join("") || "";
                const slug = slugify(text);
                const count = counts[slug] || 0;
                counts[slug] = count + 1;
                const id = count > 0 ? `${slug}-${count}` : slug;

                return {
                    id,
                    text,
                    level: parseInt(blockStyle.replace("h", "")),
                    style: blockStyle,
                };
            }
            return null;
        })
        .filter((heading): heading is Heading => Boolean(heading && (heading.style === "h2" || heading.style === "h3") && heading.text.length > 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    useEffect(() => {
        if (!activeId || (isMobile && !isOpen)) return;

        const activeElement = document.getElementById(`toc-${isMobile ? 'mobile-' : ''}${activeId}`);
        const scrollContainer = scrollContainerRef.current;

        if (activeElement && scrollContainer) {
            const { offsetTop, offsetHeight } = activeElement;
            const { offsetHeight: containerHeight } = scrollContainer;

            // Calculate the position to center the active element
            const targetScroll = offsetTop - (containerHeight / 2) + (offsetHeight / 2);

            scrollContainer.scrollTo({
                top: targetScroll,
                behavior: "smooth"
            });
        }
    }, [activeId, isMobile, isOpen]);

    if (headings.length === 0) return null;

    if (isMobile) {
        const activeHeading = headings.find(h => h.id === activeId);

        return (
            <div className="lg:hidden sticky top-16 z-40 mb-8 -mx-4 sm:-mx-6 px-4 sm:px-6 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full py-3 flex items-center justify-between text-left"
                >
                    <div className="flex items-center overflow-hidden">
                        <List className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-800 truncate">
                            {activeHeading ? activeHeading.text : "Table of Contents"}
                        </span>
                    </div>
                    {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-slate-500 ml-2 flex-shrink-0" />
                    ) : (
                        <ChevronDown className="h-4 w-4 text-slate-500 ml-2 flex-shrink-0" />
                    )}
                </button>

                {isOpen && (
                    <div
                        ref={scrollContainerRef as React.RefObject<HTMLDivElement>}
                        className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg max-h-[60vh] overflow-y-auto z-50"
                    >
                        <nav className="p-4 space-y-1">
                            {headings.map((heading) => (
                                <Link
                                    key={heading.id}
                                    id={`toc-mobile-${heading.id}`}
                                    href={`#${heading.id}`}
                                    className={`block py-2 text-sm transition-colors duration-200 ${activeId === heading.id
                                        ? "text-teal-600 font-bold bg-teal-50 rounded-lg pl-3"
                                        : "text-slate-600 hover:text-teal-600 pl-3"
                                        }`}
                                    style={{ paddingLeft: `${heading.level === 2 ? 12 : (heading.level - 1) * 12 + 12}px` }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(heading.id)?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        setActiveId(heading.id);
                                        setIsOpen(false);
                                    }}
                                >
                                    {heading.text}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        );
    }

    // Desktop View
    return (
        <div className="hidden lg:block bg-slate-50 rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <List className="h-5 w-5 text-teal-600 mr-2" />
                Table of Contents
            </h3>
            <nav
                ref={scrollContainerRef}
                className="relative space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
            >
                {headings.map((heading) => (
                    <Link
                        key={heading.id}
                        id={`toc-${heading.id}`}
                        href={`#${heading.id}`}
                        className={`block py-1.5 text-sm transition-colors duration-200 ${activeId === heading.id
                            ? "text-teal-600 font-bold border-l-2 border-teal-600 pl-3"
                            : "text-slate-600 hover:text-teal-600 pl-3 border-l-2 border-transparent"
                            }`}
                        style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(heading.id)?.scrollIntoView({
                                behavior: "smooth",
                            });
                            setActiveId(heading.id);
                        }}
                    >
                        {heading.text}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
