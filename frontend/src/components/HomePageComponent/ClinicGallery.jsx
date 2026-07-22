const images = [
  {
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80",
    title: "Modern Reception",
  },
  {
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80",
    title: "Patient Consultation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    title: "Medical Examination",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    title: "Advanced Laboratory",
  },
  {
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  title: "Healthcare Team",
},
  {
  image:
    "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80",
  title: "Emergency Care",
},
];

const ClinicGallery = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Explore Our Healthcare Facilities
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Take a glimpse of our modern infrastructure, advanced medical
            equipment, comfortable patient spaces, and dedicated healthcare
            professionals committed to delivering quality care.
          </p>

        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ClinicGallery;