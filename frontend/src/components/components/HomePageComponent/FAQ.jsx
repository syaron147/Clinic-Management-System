import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "Patients can book appointments online or contact our reception desk during working hours.",
  },
  {
    question: "Can I access my medical records online?",
    answer:
      "Yes. Patients can securely view prescriptions, reports, and appointment history through the patient portal.",
  },
  {
    question: "What healthcare services are available?",
    answer:
      "We provide general consultations, specialist care, diagnostics, laboratory services, and emergency treatment.",
  },
  {
    question: "Is my health information secure?",
    answer:
      "Yes. All patient records are encrypted and stored securely following healthcare privacy standards.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. Appointments can be modified or cancelled through the online appointment system.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Support Center
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5">
            Everything you need to know about appointments, healthcare services,
            and our clinic management system.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-slate-50 transition"
              >

                <span className="font-semibold text-left text-lg">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="text-blue-600" />
                ) : (
                  <Plus className="text-blue-600" />
                )}

              </button>

              {openIndex === index && (

                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;