const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Trusted Healthcare • Professional Care • Modern Technology
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Smart Clinic Management
            <span className="block text-blue-400 mt-2">
              For Better Patient Care
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Streamline appointments, manage patient records, monitor
            doctor schedules, and simplify daily clinic operations through
            one secure and user-friendly platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
              Book Appointment
            </button>

            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 transition px-8 py-3 rounded-lg font-semibold">
              Explore Services
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-300 text-sm mt-1">
                Expert Doctors
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="text-gray-300 text-sm mt-1">
                Happy Patients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-gray-300 text-sm mt-1">
                Emergency Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-gray-300 text-sm mt-1">
                Medical Departments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;