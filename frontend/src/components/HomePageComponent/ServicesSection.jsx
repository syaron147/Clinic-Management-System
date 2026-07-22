import {
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Smile,
  Stethoscope,
} from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Cardiology" },
  { icon: Brain, title: "Neurology" },
  { icon: Bone, title: "Orthopedics" },
  { icon: Baby, title: "Pediatrics" },
  { icon: Smile, title: "Dental Care" },
  { icon: Stethoscope, title: "General Checkup" },
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300"
              >
                <Icon
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />

                <h3 className="font-semibold text-xl">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  Quality healthcare from experienced professionals.
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;