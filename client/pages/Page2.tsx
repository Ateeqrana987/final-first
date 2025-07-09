import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  ArrowLeft,
  Globe,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

interface Country {
  id: string;
  name: string;
  flag: string;
  code: string;
  description: string;
}

export default function Page2() {
  const [loadingCountryId, setLoadingCountryId] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(15);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const countries: Country[] = [
    {
      id: "pk",
      name: "Pakistan",
      flag: "🇵🇰",
      code: "PK",
      description: "Earn in PKR and international currencies",
    },
    {
      id: "in",
      name: "India",
      flag: "🇮🇳",
      code: "IN",
      description: "Earn in INR and global opportunities",
    },
    {
      id: "us",
      name: "United States",
      flag: "🇺🇸",
      code: "US",
      description: "Premium USD earning opportunities",
    },
    {
      id: "other",
      name: "Other Countries",
      flag: "🌍",
      code: "WW",
      description: "Global earning opportunities available",
    },
  ];

  const languages = [
    { code: "EN", label: "English", flag: "🇺🇸" },
    { code: "UR", label: "اردو", flag: "🇵🇰" },
    { code: "HI", label: "हिन��दी", flag: "🇮🇳" },
  ];

  const withdrawalMessages = [
    "💰 Ahmed from Lahore earned ₹1,200",
    "💰 Priya from Mumbai withdrew ₹850",
    "💰 John from Berlin earned €5.00",
    "💰 Zeeshan from Karachi won Rs. 300",
    "💰 Aisha from Delhi earned ₹450",
    "💰 Sara from London earned £3.50",
    "💰 Hassan from Multan won Rs. 700",
    "💰 David from New York earned $4.00",
    "💰 Meena from Chennai earned ₹560",
    "💰 Farhan from Islamabad earned Rs. 320",
    "💰 Jenny from Rome earned €4.80",
    "💰 Arjun from Bangalore earned ₹780",
    "💰 Saima from Faisalabad won Rs. 610",
    "💰 Alex from Toronto earned $3.20",
    "💰 Reema from Hyderabad earned ₹930",
    "💰 Kabir from Kolkata won ₹860",
    "💰 Noor from Dubai earned 25 AED",
    "💰 Vishal from Surat earned ₹399",
    "💰 Maria from Lahore earned Rs. 520",
    "💰 Steve from London earned £4.50",
    "💰 Yasir from Peshawar earned Rs. 670",
    "💰 Emily from Melbourne earned A$6.00",
    "💰 Tanya from Rawalpindi earned Rs. 730",
    "💰 Anas from Karachi won Rs. 890",
    "💰 Divya from Pune earned ₹720",
  ];

  // Auto-rotate withdrawal messages: pause 4s + transition 1s = 5s total per message
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % withdrawalMessages.length,
      );
    }, 5000); // 4s pause + 1s transition

    return () => clearInterval(interval);
  }, [withdrawalMessages.length]);

  const handleCountrySelect = (country: Country) => {
    if (loadingCountryId) return;

    setLoadingCountryId(country.id);
    setCountdown(15);

    // Store selected country in localStorage
    localStorage.setItem("selectedCountry", JSON.stringify(country));

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to page 3
          window.location.href = "/page-3";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 font-poppins">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">
                Play & Earn Hub
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <a
                href="#games"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Games
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Language Dropdown */}
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Link>

              <div className="relative">
                <button
                  className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg text-slate-700 transition-colors"
                  onClick={() => {
                    const dropdown =
                      document.getElementById("language-dropdown");
                    dropdown?.classList.toggle("hidden");
                  }}
                >
                  <span>
                    {
                      languages.find((lang) => lang.code === selectedLanguage)
                        ?.flag
                    }
                  </span>
                  <span className="text-sm">{selectedLanguage}</span>
                </button>
                <div
                  id="language-dropdown"
                  className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-32 z-50 border border-gray-200"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.code);
                        document
                          .getElementById("language-dropdown")
                          ?.classList.add("hidden");
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Auto-Rotating Withdrawal Slider */}
      <div className="w-full bg-gradient-to-r from-yellow-50 to-green-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentMessageIndex * 100}%)`,
                width: `${withdrawalMessages.length * 100}%`,
              }}
            >
              {withdrawalMessages.map((message, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 py-3"
                  style={{ width: `${100 / withdrawalMessages.length}%` }}
                >
                  <div className="bg-gradient-to-r from-yellow-100 to-green-100 rounded-lg shadow-sm mx-2 md:mx-8">
                    <div className="px-4 py-3 text-center">
                      <span className="text-slate-800 font-medium text-sm md:text-base font-poppins">
                        {message}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Section - Country Selector */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Select Your Country to Continue
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Choose your location to get personalized earning opportunities and
              payment methods tailored for your region.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Localized Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Instant Setup</span>
              </div>
            </div>
          </div>

          {/* Country Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {countries.map((country) => (
              <div
                key={country.id}
                onClick={() => handleCountrySelect(country)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-300 group ${
                  loadingCountryId && loadingCountryId !== country.id
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <div className="text-center">
                  {loadingCountryId === country.id ? (
                    <>
                      <div className="text-4xl mb-4">{country.flag}</div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Checking eligibility...
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-4">
                        {countdown} seconds remaining
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${((15 - countdown) / 15) * 100}%` }}
                        ></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {country.flag}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {country.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6">
                        {country.description}
                      </p>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105">
                        Continue
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Popular Choice Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-16 border border-blue-200">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                <span className="text-2xl">🇵🇰</span>
                <span className="text-2xl">🇮🇳</span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">
                  Most Popular Choices
                </h3>
                <p className="text-slate-600 text-sm">
                  85% of our users are from Pakistan and India
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SEO Article Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Top Online Jobs in Your Country
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Remote Work from Pakistan: Unlocking Global Opportunities
                </h3>
                <p className="text-slate-700 mb-4">
                  Pakistan has emerged as a leading destination for remote work
                  and freelancing, with thousands of professionals earning in
                  USD from the comfort of their homes. The digital economy boom
                  has created unprecedented opportunities for Pakistani
                  freelancers to access global markets and compete
                  internationally.
                </p>
                <p className="text-slate-700 mb-4">
                  Popular remote work categories for Pakistani professionals
                  include software development, digital marketing, content
                  writing, graphic design, and virtual assistance. With the
                  growing acceptance of remote work globally, Pakistani talent
                  is increasingly sought after by international companies
                  seeking cost-effective, skilled professionals.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Best Online Income Ideas in 2025 for Pakistan:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Gaming & Esports:</strong> Professional gaming,
                    streaming, and tournament participation
                  </li>
                  <li>
                    • <strong>Freelance Development:</strong> Web development,
                    mobile apps, and software engineering
                  </li>
                  <li>
                    • <strong>Digital Marketing:</strong> Social media
                    management, SEO, and content marketing
                  </li>
                  <li>
                    • <strong>Online Tutoring:</strong> Teaching English,
                    mathematics, and technical subjects
                  </li>
                  <li>
                    • <strong>E-commerce:</strong> Dropshipping, Amazon FBA, and
                    online retail
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  Freelance Jobs for Indians: The Global Talent Hub
                </h3>
                <p className="text-slate-700 mb-4">
                  India continues to dominate the global freelancing market,
                  with millions of professionals providing services to clients
                  worldwide. The country's strong educational system, English
                  proficiency, and technical expertise make Indian freelancers
                  highly competitive in the international market.
                </p>
                <p className="text-slate-700 mb-4">
                  The Indian freelancing ecosystem has evolved significantly,
                  with professionals now commanding premium rates for
                  specialized skills. From IT services to creative industries,
                  Indian freelancers are establishing themselves as leaders in
                  quality and innovation.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Top Earning Sectors for Indian Freelancers:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Technology Services:</strong> Full-stack
                    development, AI/ML, and cloud computing
                  </li>
                  <li>
                    • <strong>Content Creation:</strong> Technical writing,
                    copywriting, and video production
                  </li>
                  <li>
                    • <strong>Design Services:</strong> UI/UX design, branding,
                    and digital illustration
                  </li>
                  <li>
                    • <strong>Business Services:</strong> Virtual assistance,
                    data analysis, and consulting
                  </li>
                  <li>
                    • <strong>Gaming Industry:</strong> Game development,
                    testing, and competitive gaming
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Earn in USD from Home: Global Income Opportunities
                </h3>
                <p className="text-slate-700 mb-4">
                  The ability to earn in USD while living in Pakistan or India
                  provides significant purchasing power advantages. Many
                  professionals are now focusing on building skills that allow
                  them to access higher-paying international markets and
                  clients.
                </p>
                <p className="text-slate-700 mb-4">
                  Gaming platforms, in particular, have become a lucrative
                  source of USD income. Professional gamers, streamers, and
                  content creators from South Asia are earning substantial
                  amounts through sponsorships, tournament winnings, and
                  platform monetization.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Strategies to Maximize USD Earnings:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Skill Specialization:</strong> Focus on
                    high-demand, niche skills
                  </li>
                  <li>
                    • <strong>Portfolio Building:</strong> Create impressive
                    showcases of your work
                  </li>
                  <li>
                    • <strong>Network Development:</strong> Build relationships
                    with international clients
                  </li>
                  <li>
                    • <strong>Platform Diversification:</strong> Use multiple
                    income sources and platforms
                  </li>
                  <li>
                    • <strong>Continuous Learning:</strong> Stay updated with
                    industry trends and technologies
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  The Future of Online Earning: Gaming & Beyond
                </h3>
                <p className="text-slate-700 mb-4">
                  As we move into 2025, the landscape of online earning
                  continues to evolve. Gaming platforms are becoming
                  increasingly sophisticated, offering multiple revenue streams
                  including play-to-earn mechanics, NFT gaming, and
                  blockchain-based rewards systems.
                </p>
                <p className="text-slate-700 mb-4">
                  For users in Pakistan and India, these platforms represent an
                  opportunity to participate in the global digital economy
                  without traditional barriers. Whether through competitive
                  gaming, content creation, or skill-based challenges, the
                  earning potential continues to grow.
                </p>
                <p className="text-slate-700">
                  The key to success in this new economy is adaptability,
                  continuous learning, and leveraging the unique advantages that
                  come with being part of these dynamic, growing markets. Start
                  your journey today by selecting your country above and
                  exploring the opportunities available to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Play & Earn Hub
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                Connecting talented individuals with global earning
                opportunities through gaming and skills.
              </p>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Countries</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-slate-600">🇵🇰 Pakistan</span>
                </li>
                <li>
                  <span className="text-slate-600">🇮🇳 India</span>
                </li>
                <li>
                  <span className="text-slate-600">🇺🇸 United States</span>
                </li>
                <li>
                  <span className="text-slate-600">🌍 Global</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      selectedLanguage === lang.code
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    {lang.flag} {lang.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Play & Earn Hub. All rights
              reserved. Empowering global talent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
