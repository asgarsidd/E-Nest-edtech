 "use client"
// import React, { useState } from 'react';

// export default function FrequentlyQuestions() {
//   // State to track which accordion is open
//   const [openAccordion, setOpenAccordion] = useState(null);

//   // Function to handle accordion toggle
//   const handleToggle = (index:any) => {
//     setOpenAccordion(openAccordion === index ? null : index);
//   };

//   return (
//     <div id="accordion-collapse" data-accordion="collapse" className='px-12 py-2'>
//       <h2 id="accordion-collapse-heading-1">
//         <button 
//           type="button" 
//           className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  gap-3" 
//           aria-expanded={openAccordion === 1} 
//           onClick={() => handleToggle(1)}
//         >
//           <span>What is Flowbite?</span>
//           <svg 
//             data-accordion-icon 
//             className={`w-3 h-3 ${openAccordion === 1 ? 'rotate-180' : ''} shrink-0`} 
//             aria-hidden="true" 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 10 6"
//           >
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//           </svg>
//         </button>
//       </h2>
//       <div 
//         id="accordion-collapse-body-1" 
//         className={`${openAccordion === 1 ? '' : 'hidden'}`} 
//         aria-labelledby="accordion-collapse-heading-1"
//       >
//         <div className="p-5 border ">
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
//           </p>
//         </div>
//       </div>
      
//       <h2 id="accordion-collapse-heading-2">
//         <button 
//           type="button" 
//           className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  gap-3" 
//           aria-expanded={openAccordion === 2} 
//           onClick={() => handleToggle(2)}
//         >
//           <span>Is there a Figma file available?</span>
//           <svg 
//             data-accordion-icon 
//             className={`w-3 h-3 ${openAccordion === 2 ? 'rotate-180' : ''} shrink-0`} 
//             aria-hidden="true" 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 10 6"
//           >
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//           </svg>
//         </button>
//       </h2>
//       <div 
//         id="accordion-collapse-body-2" 
//         className={`${openAccordion === 2 ? '' : 'hidden'}`} 
//         aria-labelledby="accordion-collapse-heading-2"
//       >
//         <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.
//           </p>
//         </div>
//       </div>

//       <h2 id="accordion-collapse-heading-3">
//         <button 
//           type="button" 
//           className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
//           aria-expanded={openAccordion === 3} 
//           onClick={() => handleToggle(3)}
//         >
//           <span>What are the differences between Flowbite and Tailwind UI?</span>
//           <svg 
//             data-accordion-icon 
//             className={`w-3 h-3 ${openAccordion === 3 ? 'rotate-180' : ''} shrink-0`} 
//             aria-hidden="true" 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 10 6"
//           >
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//           </svg>
//         </button>
//       </h2>
//       <div 
//         id="accordion-collapse-body-3" 
//         className={`${openAccordion === 3 ? '' : 'hidden'}`} 
//         aria-labelledby="accordion-collapse-heading-3"
//       >
//         <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Learn more about these technologies:
//           </p>
//           <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
//             <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
//             <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="max-w-xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Frequently Asked Question</h2>

      <div className="bg-white border border-gray-200 rounded-md">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-black">{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
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

