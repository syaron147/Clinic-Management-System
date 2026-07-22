import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              CarePlus Clinic
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Providing trusted healthcare services through experienced
              professionals, modern technology, and compassionate patient care.
            </p>

            <div className="flex gap-4 mt-6">

              <Facebook className="cursor-pointer hover:text-blue-500 transition" />

              <Instagram className="cursor-pointer hover:text-pink-500 transition" />

              <Linkedin className="cursor-pointer hover:text-blue-400 transition" />

              <Twitter className="cursor-pointer hover:text-sky-400 transition" />

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>General Consultation</li>
              <li>Emergency Care</li>
              <li>Laboratory Services</li>
              <li>Health Checkups</li>
              <li>Online Appointments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone className="text-blue-500" size={18} />
                <span>+977 9800000000</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-500" size={18} />
                <span>info@careplusclinic.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-500" size={18} />
                <span>Kathmandu, Nepal</span>
              </div>

            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Working Hours
            </h3>

            <div className="space-y-3">

              <div className="flex gap-3">
                <Clock className="text-blue-500" size={18} />
                <span>Mon - Fri : 8:00 AM - 8:00 PM</span>
              </div>

              <div className="flex gap-3">
                <Clock className="text-blue-500" size={18} />
                <span>Saturday : 9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex gap-3">
                <Clock className="text-blue-500" size={18} />
                <span>Emergency : 24/7 Available</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-gray-500 text-sm">
        © 2026 CarePlus Clinic Management System. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;