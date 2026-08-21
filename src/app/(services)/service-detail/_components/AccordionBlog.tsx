"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  key?: string;
}

export default function AccordionBlog({ faqs }: { faqs?: FAQItem[] }) {
  // Nothing to render
  if (!faqs || faqs.length === 0) return null;

  // Track which item is open (null = none)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion dz-accordion" id="customFaqAccordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`faqHeading${index}`}>
              <button
                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faqCollapse${index}`}
                style={{
                  color: "#333",
                  backgroundColor: "#f8f9fa",
                  fontWeight: 500,
                }}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`faqCollapse${index}`}
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
              aria-labelledby={`faqHeading${index}`}
            >
              <div
                className="accordion-body"
                style={{ color: "#555", lineHeight: 1.7 }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}