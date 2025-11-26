import React, { useState } from "react";

const faqs = [
  {
    question: "Mahsulotni qaytarish mumkinmi?",
    answer:
      "Ha, mahsulotni 30 kun ichida qadoq bilan qaytarishingiz mumkin. Barcha shartlar saytimizda keltirilgan.",
  },
  {
    question: "Yetkazib berish qancha davom etadi?",
    answer:
      "Odatda yetkazib berish 3-7 ish kunini tashkil etadi, hududga qarab farq qilishi mumkin.",
  },
  {
    question: "To'lov usullari qaysilar?",
    answer:
      "Siz kredit/debit kartalari, Payme, Click, yoki cash on delivery orqali to'lov qilishingiz mumkin.",
  },
  {
    question: "Mahsulot kafolatga ega mi?",
    answer:
      "Ha, barcha mahsulotlar ishlab chiqaruvchi kafolati bilan ta'minlangan. Tafsilotlar mahsulot sahifasida ko'rsatilgan.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">FAQ - Savol va Javoblar</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
