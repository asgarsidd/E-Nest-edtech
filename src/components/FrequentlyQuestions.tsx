 "use client"

import { useState } from 'react';

export default function FrequentlyQuestions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What Can I learn on E-Nest?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How to enroll in a course?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'What are the types of courses that you offer?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Where can I find my enrolled courses?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Can I download video sessions or study material from the course?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Can I pay for the courses using EMI option?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  const toggleAccordion = (index:any) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className=" mx-auto my-10 w-full px-12">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Frequently Asked Question</h2>

      <div className="bg-white border border-gray-200 rounded-md">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-black">{faq.question}</span>
              <span className='text-black'>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3">
                <p className='text-black'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

