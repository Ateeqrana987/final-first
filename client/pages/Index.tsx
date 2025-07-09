import { useState, useEffect } from "react";
import { ChevronDown, Play, Star, Trophy, Gift } from "lucide-react";

export default function Index() {
  const [loadingTileId, setLoadingTileId] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(10);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const startCountdown = (tileId: number) => {
    if (loadingTileId) return;

    setLoadingTileId(tileId);
    setCountdown(10);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to page 2
          window.location.href = "/page-2";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const playTiles = [
    {
      id: 1,
      title: "Earn Playing",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b7e5?w=400&h=300&fit=crop&auto=format",
      alt: "Play with beautiful characters",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 2,
      title: "Win Money",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&auto=format",
      alt: "Earn real money",
      gradient: "from-earn-gold to-yellow-500",
    },
    {
      id: 3,
      title: "Luxury Cars",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop&auto=format",
      alt: "Win luxury cars",
      gradient: "from-earn-blue to-blue-600",
    },
  ];

  const languages = [
    { code: "EN", label: "English", flag: "🇺🇸" },
    { code: "UR", label: "اردو", flag: "🇵🇰" },
    { code: "HI", label: "हिन्दी", flag: "🇮🇳" },
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
    let timeoutId;

    const rotateMessage = () => {
      // Optional: add transition class here if needed
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % withdrawalMessages.length,
      );

      // Wait 6 seconds before showing the next one (5s visible + 1s transition buffer)
      timeoutId = setTimeout(rotateMessage, 6000);
    };

    // Start the loop
    timeoutId = setTimeout(rotateMessage, 6000);

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, [withdrawalMessages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-poppins">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-earn-gold to-yellow-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Play & Earn Hub</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6"></nav>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-white transition-colors"
                onClick={() => {
                  const dropdown = document.getElementById("language-dropdown");
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
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                id="language-dropdown"
                className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-32 z-50"
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
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.label}</span>
                  </button>
                ))}
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
              className="flex transition-transform duration-[2500ms] ease-in-out"
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

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bungee font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-earn-gold via-yellow-400 to-earn-gold bg-clip-text text-transparent">
              Play and Earn
            </span>
            <br />
            <span className="text-white">Instantly</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Join millions of players in Pakistan and India who are earning real
            money through gaming!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-earn-gold fill-current" />
              <span>No Investment Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-earn-gold" />
              <span>Instant Rewards</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5 text-earn-gold" />
              <span>Daily Bonuses</span>
            </div>
          </div>
        </div>

        {/* Play Tiles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {playTiles.map((tile) => (
            <div
              key={tile.id}
              className={`group transition-all duration-300 ${
                loadingTileId && loadingTileId !== tile.id
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={() => startCountdown(tile.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-earn-gold transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={tile.image}
                    alt={tile.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${tile.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {tile.title}
                  </h3>
                  <div className="text-center">
                    {loadingTileId === tile.id ? (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-6 h-6 border-2 border-earn-gold border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <p className="text-earn-gold font-medium mb-4">
                          Starting your game...
                        </p>
                        <p className="text-white font-bold mb-4">
                          {countdown} seconds remaining
                        </p>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-earn-gold to-yellow-500 h-2 rounded-full transition-all duration-1000"
                            style={{
                              width: `${((10 - countdown) / 10) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-earn-gold font-medium mb-4">
                          Play Now & Win
                        </p>
                        <button className="w-full bg-gradient-to-r from-earn-gold to-yellow-500 hover:from-yellow-500 hover:to-earn-gold text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                          <Play className="w-5 h-5" />
                          <span>Start Playing</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-earn-gold mb-2">1M+</div>
              <div className="text-slate-300">Active Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-earn-gold mb-2">
                ₹50L+
              </div>
              <div className="text-slate-300">Rewards Paid</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-earn-gold mb-2">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-earn-gold mb-2">100%</div>
              <div className="text-slate-300">Safe & Secure</div>
            </div>
          </div>
        </div>
      </main>

      {/* SEO Article Section */}
      <section id="how-it-works" className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              How to Earn Online in Pakistan & India
            </h2>

            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-earn-gold mb-4">
                  Can You Really Earn Playing Games?
                </h3>
                <p className="text-slate-300 mb-4">
                  Absolutely! The online gaming industry has revolutionized how
                  people in Pakistan and India can earn money from home. With
                  the rise of mobile earning apps and online job opportunities,
                  millions are discovering legitimate ways to generate income
                  through gaming platforms.
                </p>
                <p className="text-slate-300 mb-4">
                  Our platform offers genuine opportunities for players to earn
                  real money through skill-based games, tournaments, and daily
                  challenges. Whether you're a student looking for part-time
                  income or someone seeking alternative earning methods, gaming
                  can provide substantial rewards.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-earn-gold mb-4">
                  How Much Can You Earn?
                </h3>
                <p className="text-slate-300 mb-4">
                  Earnings vary based on your skill level and time investment.
                  Here's what our players typically earn:
                </p>
                <ul className="text-slate-300 space-y-2 mb-4">
                  <li>
                    • <strong>Beginners:</strong> ₹500-2,000 per month
                  </li>
                  <li>
                    • <strong>Regular Players:</strong> ₹2,000-10,000 per month
                  </li>
                  <li>
                    • <strong>Expert Players:</strong> ₹10,000-50,000+ per month
                  </li>
                  <li>
                    • <strong>Tournament Winners:</strong> ₹1,00,000+ prizes
                  </li>
                </ul>
                <p className="text-slate-300">
                  The key is consistency and improving your gaming skills. Many
                  of our top earners started as casual players and gradually
                  increased their earnings as they became more experienced.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-earn-gold mb-4">
                  Best Mobile Earning Apps in Pakistan & India
                </h3>
                <p className="text-slate-300 mb-4">
                  The mobile gaming industry has exploded in South Asia, with
                  Pakistan and India leading in mobile game adoption. Our
                  platform represents the new generation of legitimate earning
                  apps that provide real value to players.
                </p>
                <p className="text-slate-300 mb-4">
                  Unlike traditional freelance work in Pakistan or India job
                  opportunities that require specific skills, gaming apps offer
                  accessible earning methods for people of all backgrounds.
                  Whether you're in Karachi, Lahore, Mumbai, or Delhi, you can
                  start earning immediately.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-earn-gold mb-4">
                  Getting Started: Your Path to Online Success
                </h3>
                <p className="text-slate-300 mb-4">
                  Starting your journey in online earning through gaming is
                  simple:
                </p>
                <ol className="text-slate-300 space-y-2 mb-4">
                  <li>
                    1. <strong>Sign Up:</strong> Create your free account in
                    under 2 minutes
                  </li>
                  <li>
                    2. <strong>Choose Your Game:</strong> Select from our
                    variety of earning games
                  </li>
                  <li>
                    3. <strong>Start Playing:</strong> Begin with practice
                    rounds to improve your skills
                  </li>
                  <li>
                    4. <strong>Earn Rewards:</strong> Win real money through
                    tournaments and challenges
                  </li>
                  <li>
                    5. <strong>Withdraw:</strong> Cash out your earnings to your
                    bank account or mobile wallet
                  </li>
                </ol>
                <p className="text-slate-300">
                  Join the thousands of successful players who have transformed
                  their gaming passion into a reliable income source. With
                  proper strategy and dedication, online gaming can become your
                  primary or supplementary income stream.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-earn-gold to-yellow-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Play & Earn Hub
                </h3>
              </div>
              <p className="text-slate-400 text-sm">
                The premier gaming platform for earning real money in Pakistan
                and India.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    Tournaments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-earn-gold transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      selectedLanguage === lang.code
                        ? "bg-earn-gold text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {lang.flag} {lang.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Play & Earn Hub. All rights
              reserved. Made with ❤️ for Pakistan & India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
