import {
  Users,
  Stethoscope,
  Building2,
  CalendarCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10,000+",
    title: "Patients Served",
  },
  {
    icon: Stethoscope,
    number: "80+",
    title: "Medical Specialists",
  },
  {
    icon: Building2,
    number: "20+",
    title: "Departments",
  },
  {
    icon: CalendarCheck,
    number: "25+",
    title: "Years of Excellence",
  },
];

const Statistics = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Trusted by Thousands of Patients
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            We continue to deliver exceptional healthcare through experienced
            professionals, advanced medical technology, and patient-centered
            services.
          </p>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-4xl font-bold text-gray-900">
                  {stat.number}
                </h3>

                <p className="text-gray-600 mt-3 text-lg">
                  {stat.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Statistics;