import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  ArrowLeft,
  Car,
  Target,
  Brain,
  Baby,
  Gamepad2,
  Star,
  Clock,
  Zap,
} from "lucide-react";

interface GameCategory {
  id: string;
  name: string;
  emoji: string;
  icon: React.ReactNode;
  description: string;
  gradient: string;
  bgColor: string;
}

export default function Page3() {
  const [loadingCategoryId, setLoadingCategoryId] = useState<string | null>(
    null,
  );
  const [countdown, setCountdown] = useState(10);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Get selected country from localStorage
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(JSON.parse(storedCountry));
    }
  }, []);

  const gameCategories: GameCategory[] = [
    {
      id: "racing",
      name: "Car Racing",
      emoji: "🚗",
      icon: <Car className="w-8 h-8" />,
      description: "Speed & adrenaline meets earning",
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
    },
    {
      id: "shooter",
      name: "Action Shooter",
      emoji: "🔫",
      icon: <Target className="w-8 h-8" />,
      description: "Aim, shoot, earn rewards",
      gradient: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
    },
    {
      id: "puzzle",
      name: "Puzzle & Brain Games",
      emoji: "🧠",
      icon: <Brain className="w-8 h-8" />,
      description: "Think smart, earn smarter",
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "casual",
      name: "Casual Kids",
      emoji: "👶",
      icon: <Baby className="w-8 h-8" />,
      description: "Fun games for everyone",
      gradient: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      id: "arcade",
      name: "Arcade & Classic",
      emoji: "🕹️",
      icon: <Gamepad2 className="w-8 h-8" />,
      description: "Retro games, modern rewards",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
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
    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % withdrawalMessages.length,
      );
    }, 5000); // 4s pause + 1s transition

    return () => clearInterval(interval);
  }, [withdrawalMessages.length]);

  const handleCategorySelect = (category: GameCategory) => {
    if (loadingCategoryId) return;

    setLoadingCategoryId(category.id);
    setCountdown(10);

    // Store selected category in localStorage (exclude icon to avoid circular reference)
    const serializableCategory = {
      id: category.id,
      name: category.name,
      emoji: category.emoji,
      description: category.description,
      gradient: category.gradient,
      bgColor: category.bgColor,
    };
    localStorage.setItem(
      "selectedGameCategory",
      JSON.stringify(serializableCategory),
    );

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to page 4
          window.location.href = "/page-4.html";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 font-poppins">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">
                Play & Earn Hub
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Home
              </Link>
              <a
                href="#rewards"
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Rewards
              </a>
              <a
                href="#help"
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Help
              </a>
            </nav>

            {/* Language & Navigation */}
            <div className="flex items-center space-x-4">
              {selectedCountry && (
                <div className="flex items-center space-x-2 bg-slate-100 px-3 py-2 rounded-lg">
                  <span className="text-sm">{selectedCountry.flag}</span>
                  <span className="text-xs font-medium text-slate-700">
                    {selectedCountry.name}
                  </span>
                </div>
              )}

              <Link
                to="/page-2.html"
                className="flex items-center space-x-2 text-slate-600 hover:text-orange-600 transition-colors"
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

      {/* Main Section - Game Categories */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bungee font-bold text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Choose a Game Category
              </span>
              <br />
              <span className="text-slate-700">to Start Earning</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Select one to begin your reward journey and start earning real
              money while having fun!
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-orange-500" />
                <span>Instant Rewards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Quick Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-500" />
                <span>Real Money</span>
              </div>
            </div>
          </div>

          {/* Game Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {gameCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className={`${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group ${
                  loadingCategoryId && loadingCategoryId !== category.id
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <div className="text-center">
                  {loadingCategoryId === category.id ? (
                    <>
                      <div className="text-4xl mb-4">{category.emoji}</div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Loading your reward...
                      </h3>
                      <p className="text-orange-600 font-bold text-sm mb-4">
                        {countdown}s left
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000`}
                          style={{
                            width: `${((10 - countdown) / 10) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.emoji}
                      </div>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 text-xs mb-4">
                        {category.description}
                      </p>
                      <button
                        className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-lg text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 text-sm`}
                      >
                        Play & Earn
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Popular Games Banner */}
          <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-6 mb-16 border border-orange-200">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl">🏆</span>
                <span className="text-2xl">🎮</span>
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Most Popular Categories
              </h3>
              <p className="text-slate-600 text-sm">
                Car Racing and Puzzle Games have the highest earning potential
                this week!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* SEO Article Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Best Mobile Game Apps That Pay Real Money
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                  Mobile Games That Pay via JazzCash, UPI & Paytm
                </h3>
                <p className="text-slate-700 mb-4">
                  The mobile gaming industry has revolutionized how people in
                  Pakistan and India can earn money from their smartphones. With
                  popular payment methods like JazzCash in Pakistan and UPI &
                  Paytm in India, withdrawing your gaming earnings has never
                  been easier or more convenient.
                </p>
                <p className="text-slate-700 mb-4">
                  Our platform integrates seamlessly with these trusted payment
                  systems, ensuring that your hard-earned rewards are
                  transferred directly to your mobile wallet or bank account
                  within minutes. Whether you're playing during your commute or
                  relaxing at home, every game session can contribute to your
                  monthly income.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Top Payment Methods by Country:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Pakistan:</strong> JazzCash, Easypaisa, Bank
                    Transfer, Mobile Top-up
                  </li>
                  <li>
                    • <strong>India:</strong> UPI (PhonePe, Google Pay, Paytm),
                    Bank Transfer, Paytm Wallet
                  </li>
                  <li>
                    • <strong>Global:</strong> PayPal, Crypto, International
                    Wire Transfer
                  </li>
                  <li>
                    • <strong>Minimum Withdrawal:</strong> Just ₹100 or PKR 200
                    to cash out
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  Real Earning Apps in Pakistan & India: Are They Legit?
                </h3>
                <p className="text-slate-700 mb-4">
                  This is the most common question we receive: "Is it really
                  possible to earn money by playing games?" The answer is a
                  resounding YES! The key is choosing legitimate platforms that
                  have transparent earning mechanisms and proven payout
                  histories.
                </p>
                <p className="text-slate-700 mb-4">
                  Our gaming platform has already paid out over ₹5 crores to
                  players across Pakistan and India. We maintain complete
                  transparency with live leaderboards, public payout records,
                  and regular community updates about earnings and withdrawals.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  How to Identify Legitimate Gaming Apps:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Transparent Payout System:</strong> Clear rules on
                    how earnings are calculated
                  </li>
                  <li>
                    • <strong>User Reviews:</strong> Positive feedback from real
                    users in your country
                  </li>
                  <li>
                    • <strong>Low Minimum Withdrawal:</strong> Reasonable
                    cashout thresholds
                  </li>
                  <li>
                    • <strong>Multiple Payment Options:</strong> Support for
                    local payment methods
                  </li>
                  <li>
                    • <strong>Active Community:</strong> Engaged user base and
                    regular tournaments
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Best Gaming Apps in 2025: Categories That Pay the Most
                </h3>
                <p className="text-slate-700 mb-4">
                  Different game categories offer varying earning potentials.
                  Based on our data from thousands of players across Pakistan
                  and India, here are the most profitable game types for
                  consistent earnings.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Highest Earning Game Categories:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Car Racing Games:</strong> ₹500-2,000 daily for
                    skilled players
                  </li>
                  <li>
                    • <strong>Puzzle & Brain Games:</strong> ₹300-1,500 daily,
                    great for beginners
                  </li>
                  <li>
                    • <strong>Action Shooter:</strong> ₹400-1,800 daily,
                    tournament bonuses available
                  </li>
                  <li>
                    • <strong>Arcade & Classic:</strong> ₹200-1,000 daily,
                    consistent earnings
                  </li>
                  <li>
                    • <strong>Casual Kids Games:</strong> ₹150-800 daily,
                    perfect for family gaming
                  </li>
                </ul>
                <p className="text-slate-700 mb-4">
                  The earning potential increases significantly when you
                  participate in daily tournaments, weekly challenges, and
                  special events. Many of our top earners combine multiple game
                  categories to maximize their daily income.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                  Getting Started: Your Path to Mobile Game Earnings
                </h3>
                <p className="text-slate-700 mb-4">
                  Starting your mobile gaming earning journey is simple and
                  requires no upfront investment. Our platform is designed to be
                  accessible to players of all skill levels, from complete
                  beginners to gaming experts.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Step-by-Step Earning Process:
                </h4>
                <ol className="text-slate-700 space-y-2 mb-4">
                  <li>
                    1. <strong>Choose Your Category:</strong> Select the game
                    type that interests you most
                  </li>
                  <li>
                    2. <strong>Practice Mode:</strong> Learn the games with
                    free-to-play practice rounds
                  </li>
                  <li>
                    3. <strong>Start Earning:</strong> Join paid tournaments and
                    challenges
                  </li>
                  <li>
                    4. <strong>Daily Bonuses:</strong> Complete daily tasks for
                    guaranteed rewards
                  </li>
                  <li>
                    5. <strong>Cash Out:</strong> Withdraw your earnings
                    instantly to your preferred payment method
                  </li>
                </ol>
                <p className="text-slate-700">
                  Remember, consistency is key to maximizing your mobile game
                  earnings. Set aside dedicated gaming time each day, focus on
                  improving your skills, and take advantage of all available
                  earning opportunities. With dedication and practice, mobile
                  gaming can become a reliable source of supplementary income.
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
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Play & Earn Hub
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                The ultimate gaming platform where your skills turn into real
                money rewards.
              </p>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">
                Game Categories
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-slate-600">🚗 Car Racing</span>
                </li>
                <li>
                  <span className="text-slate-600">🔫 Action Shooter</span>
                </li>
                <li>
                  <span className="text-slate-600">🧠 Puzzle Games</span>
                </li>
                <li>
                  <span className="text-slate-600">👶 Casual Kids</span>
                </li>
                <li>
                  <span className="text-slate-600">🕹️ Arcade Classic</span>
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
                        ? "bg-orange-500 text-white"
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
              reserved. Turn your gaming passion into profit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
