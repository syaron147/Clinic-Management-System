import {
  CalendarCheck,
  ShieldCheck,
  Stethoscope,
  Files,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Easy Appointment Scheduling",
    desc: "Book, reschedule, or cancel appointments quickly with a streamlined scheduling system designed for patients and staff.",
  },
  {
    icon: Files,
    title: "Digital Medical Records",
    desc: "Securely manage patient histories, prescriptions, reports, and treatment records in one centralized platform.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Healthcare Professionals",
    desc: "Connect with qualified doctors and specialists committed to delivering accurate diagnoses and personalized care.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Platform",
    desc: "Protect sensitive patient information with modern security standards while ensuring reliable access whenever needed.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Our System
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Smarter Healthcare,
            <span className="text-blue-600"> Better Patient Experience</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            Our Clinic Management System combines modern technology with
            healthcare expertise to simplify clinic operations, improve patient
            experiences, and support healthcare professionals every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;