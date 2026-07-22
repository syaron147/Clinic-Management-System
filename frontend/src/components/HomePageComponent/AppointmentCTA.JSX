const AppointmentCTA = () => {
  return (
    <section className="py-24 bg-linear-to-r from-blue-600 to-cyan-500">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Need Medical Assistance?
        </h2>

        <p className="text-blue-100 mt-5 text-lg max-w-2xl mx-auto">
          Schedule an appointment with our experienced doctors and receive
          personalized healthcare tailored to your needs.
        </p>

        <button className="mt-10 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
          Book Appointment
        </button>

      </div>
    </section>
  );
};

export default AppointmentCTA;