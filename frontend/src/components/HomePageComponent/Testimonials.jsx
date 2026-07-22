import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Patient",
    review:
      "The online appointment system made booking incredibly simple. The doctors were professional, and I received excellent care throughout my visit.",
  },
  {
    name: "David Wilson",
    role: "Patient",
    review:
      "Accessing my medical records and prescriptions online saved me a lot of time. The entire clinic staff was welcoming and supportive.",
  },
  {
    name: "Emily Carter",
    role: "Patient",
    review:
      "From registration to consultation, everything was organized and efficient. I highly recommend this clinic for its modern healthcare services.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Patient Reviews
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            We are committed to delivering exceptional healthcare services with
            compassion, professionalism, and modern medical technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Quote
                className="text-blue-600 mb-5"
                size={36}
              />

              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-blue-600 text-sm font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;