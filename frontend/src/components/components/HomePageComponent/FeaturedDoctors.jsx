const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "12 Years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
  },
  {
    name: "Dr. Michael Lee",
    specialization: "Neurologist",
    experience: "10 Years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
  },
  {
    name: "Dr. Emily Brown",
    specialization: "Pediatrician",
    experience: "8 Years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500",
  },
];

const FeaturedDoctors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Featured Doctors
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Meet our experienced medical professionals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300"
            >

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {doctor.specialization}
                </p>

                <p className="text-gray-500 mt-2">
                  Experience: {doctor.experience}
                </p>

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                  Book Appointment
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedDoctors;