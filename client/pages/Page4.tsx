import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  ArrowLeft,
  Search,
  Star,
  Download,
  Gamepad2,
  ShoppingBag,
  Brain,
  Car,
  Gift,
  Briefcase,
  Clock,
  Zap,
} from "lucide-react";

interface GameOffer {
  id: string;
  title: string;
  description: string;
  reward: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function Page4() {
  const [countdown, setCountdown] = useState(30);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Get stored data
    const storedCountry = localStorage.getItem("selectedCountry");
    const storedCategory = localStorage.getItem("selectedGameCategory");

    if (storedCountry) setSelectedCountry(JSON.parse(storedCountry));
    if (storedCategory) setSelectedCategory(JSON.parse(storedCategory));

    // Start 30-second countdown on page load
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to external offer
          window.location.href = "https://crtu.online";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const gameOffers: GameOffer[] = [
    {
      id: "racing",
      title: "Racing Champions",
      description: "Play & Earn ₹250",
      reward: "₹250",
      category: "Racing Game",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&auto=format",
      icon: <Car className="w-5 h-5" />,
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: "puzzle",
      title: "Brain Puzzle Pro",
      description: "Install & Get Reward",
      reward: "₹180",
      category: "Puzzle App",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=200&fit=crop&auto=format",
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: "shopping",
      title: "Shop & Earn Rewards",
      description: "Cashback on Every Purchase",
      reward: "₹300",
      category: "Shopping App",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop&auto=format",
      icon: <ShoppingBag className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "trivia",
      title: "Quiz Master",
      description: "Answer & Win Money",
      reward: "₹200",
      category: "Trivia Game",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&auto=format",
      icon: <Star className="w-5 h-5" />,
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      id: "casual",
      title: "Candy Blast Fun",
      description: "Casual Gaming Rewards",
      reward: "₹150",
      category: "Casual Game",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&auto=format",
      icon: <Gamepad2 className="w-5 h-5" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: "jobs",
      title: "Online Jobs Hub",
      description: "Freelance & Remote Work",
      reward: "₹500",
      category: "Job Platform",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&auto=format",
      icon: <Briefcase className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-yellow-50 font-poppins">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">
                Play & Earn Hub
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-slate-600 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
              <a
                href="#offers"
                className="text-slate-600 hover:text-green-600 transition-colors"
              >
                Offers
              </a>
              <a
                href="#help"
                className="text-slate-600 hover:text-green-600 transition-colors"
              >
                Help
              </a>
            </nav>

            {/* User Selections & Language */}
            <div className="flex items-center space-x-2">
              {selectedCountry && (
                <div className="hidden sm:flex items-center space-x-1 bg-slate-100 px-2 py-1 rounded-md">
                  <span className="text-xs">{selectedCountry.flag}</span>
                  <span className="text-xs font-medium text-slate-700">
                    {selectedCountry.name}
                  </span>
                </div>
              )}

              {selectedCategory && (
                <div className="hidden sm:flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-md">
                  <span className="text-xs">{selectedCategory.emoji}</span>
                  <span className="text-xs font-medium text-green-700">
                    {selectedCategory.name}
                  </span>
                </div>
              )}

              <Link
                to="/page-3.html"
                className="flex items-center space-x-1 text-slate-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Back</span>
              </Link>

              <div className="relative">
                <button
                  className="flex items-center space-x-1 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md text-slate-700 transition-colors"
                  onClick={() => {
                    const dropdown =
                      document.getElementById("language-dropdown");
                    dropdown?.classList.toggle("hidden");
                  }}
                >
                  <span className="text-sm">
                    {
                      languages.find((lang) => lang.code === selectedLanguage)
                        ?.flag
                    }
                  </span>
                  <span className="text-xs">{selectedLanguage}</span>
                </button>
                <div
                  id="language-dropdown"
                  className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-24 z-50 border border-gray-200"
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
                      className="w-full px-3 py-1 text-left hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="text-xs">{lang.label}</span>
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

      {/* Main Section - Finding Best Options */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Countdown */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Search className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bungee font-bold text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
                Finding the Best Game
              </span>
              <br />
              <span className="text-slate-700">or Job for You...</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Please wait while we check the latest opportunities and match them
              with your preferences
            </p>

            {/* Large Countdown Display */}
            <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-2xl p-8 mb-8 border border-green-200 max-w-lg mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Clock className="w-8 h-8 text-green-600" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-1">
                    {countdown}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    seconds left
                  </div>
                </div>
                <Zap className="w-8 h-8 text-purple-600" />
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-gradient-to-r from-green-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${((30 - countdown) / 30) * 100}%` }}
                ></div>
              </div>

              <p className="text-sm text-slate-600 text-center">
                Analyzing your selections to find the perfect match...
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>High Rewards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4 text-green-500" />
                <span>Bonus Offers</span>
              </div>
            </div>
          </div>

          {/* Game/App Offer Cards */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Available Opportunities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${offer.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}
                    ></div>
                    <div className="absolute top-3 left-3">
                      <div
                        className={`bg-gradient-to-r ${offer.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}
                      >
                        {offer.icon}
                        <span>{offer.category}</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 text-slate-800 px-2 py-1 rounded-full text-sm font-bold">
                        {offer.reward}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {offer.description}
                    </p>
                    <button
                      className={`w-full bg-gradient-to-r ${offer.gradient} hover:shadow-lg text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <Download className="w-4 h-4" />
                      <span>Claim Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Banner */}
          <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-2xl p-6 mb-16 border border-green-200">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl">🎯</span>
                <span className="text-2xl">💰</span>
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Perfect Matches Found!
              </h3>
              <p className="text-slate-600 text-sm">
                Based on your country ({selectedCountry?.name || "selection"})
                and interest in {selectedCategory?.name || "selected category"},
                we've found the best earning opportunities for you.
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
              Mobile Games and Apps That Actually Pay
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  Apps That Pay via JazzCash, UPI & Digital Wallets
                </h3>
                <p className="text-slate-700 mb-4">
                  The mobile app ecosystem has evolved to offer genuine earning
                  opportunities through various payment platforms. In Pakistan,
                  JazzCash and Easypaisa dominate the mobile payment landscape,
                  while India relies heavily on UPI-based solutions like
                  PhonePe, Google Pay, and Paytm. These payment integrations
                  have made it incredibly easy for users to receive their
                  earnings instantly.
                </p>
                <p className="text-slate-700 mb-4">
                  What sets legitimate earning apps apart is their seamless
                  integration with these local payment systems. Users can
                  withdraw their earnings directly to their mobile wallets or
                  bank accounts without the hassle of international payment
                  processors or lengthy verification processes.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Top Payment Methods by Region:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Pakistan:</strong> JazzCash (instant transfer),
                    Easypaisa, Bank Transfer, Mobile Balance Top-up
                  </li>
                  <li>
                    • <strong>India:</strong> UPI (PhonePe, Google Pay, Paytm),
                    Direct Bank Transfer, Paytm Wallet
                  </li>
                  <li>
                    • <strong>International:</strong> PayPal, Cryptocurrency
                    (Bitcoin, USDT), Wire Transfer
                  </li>
                  <li>
                    • <strong>Minimum Withdrawal:</strong> As low as ₹50 in
                    India and PKR 100 in Pakistan
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                  Earn Money by Installing and Playing: How It Actually Works
                </h3>
                <p className="text-slate-700 mb-4">
                  The concept of earning money by installing and playing apps is
                  based on a legitimate advertising model where app developers
                  pay for user acquisition. When you install and engage with an
                  app, developers receive valuable user data and potential
                  long-term customers, making it worthwhile for them to pay for
                  these actions.
                </p>
                <p className="text-slate-700 mb-4">
                  Gaming apps particularly offer high rewards because engaged
                  users often make in-app purchases, watch advertisements, or
                  become long-term players. This creates a win-win situation
                  where users earn money for trying new apps, and developers
                  gain new customers.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Most Profitable App Categories for Earning:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Mobile Games:</strong> ₹100-500 per game
                    installation and 30-minute play session
                  </li>
                  <li>
                    • <strong>Shopping Apps:</strong> ₹50-200 plus cashback on
                    first purchase
                  </li>
                  <li>
                    • <strong>Financial Apps:</strong> ₹200-1000 for completing
                    KYC and making a transaction
                  </li>
                  <li>
                    • <strong>Entertainment Apps:</strong> ₹30-150 for watching
                    videos or completing tutorials
                  </li>
                  <li>
                    • <strong>Productivity Apps:</strong> ₹75-300 for trial
                    subscriptions and usage
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                  Online Earning Opportunities for Students in 2025
                </h3>
                <p className="text-slate-700 mb-4">
                  Students in Pakistan and India are increasingly turning to
                  mobile apps and online platforms to supplement their income.
                  With flexible schedules and the need for financial
                  independence, students represent one of the largest user bases
                  for earning apps.
                </p>
                <p className="text-slate-700 mb-4">
                  The key advantage for students is that most earning apps
                  require no upfront investment, special skills, or long-term
                  commitments. Students can earn money during their free time
                  between classes, during commutes, or while relaxing at home.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Best Earning Strategies for Students:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>
                    • <strong>Morning Routine:</strong> Complete daily app tasks
                    before classes (30-45 minutes, ₹100-200)
                  </li>
                  <li>
                    • <strong>Commute Time:</strong> Play mobile games or take
                    surveys during travel (₹50-150 per trip)
                  </li>
                  <li>
                    • <strong>Study Breaks:</strong> Quick 5-10 minute app tasks
                    between study sessions (₹20-50 each)
                  </li>
                  <li>
                    • <strong>Weekend Sessions:</strong> Dedicated 2-3 hour
                    earning sessions (₹500-1500 per weekend)
                  </li>
                  <li>
                    • <strong>Referral Programs:</strong> Share apps with
                    friends for bonus earnings (₹100-500 per referral)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  How to Identify Legitimate vs. Scam Earning Apps
                </h3>
                <p className="text-slate-700 mb-4">
                  With the popularity of earning apps, many scam applications
                  have emerged to exploit users. It's crucial to identify
                  legitimate platforms to avoid wasting time and potentially
                  compromising personal information.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Red Flags of Scam Apps:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>• Promises of unrealistic earnings (₹5000+ per day)</li>
                  <li>
                    • Requires upfront payment or investment to start earning
                  </li>
                  <li>• No clear business model or revenue source explained</li>
                  <li>• Extremely high minimum withdrawal amounts</li>
                  <li>• Poor user reviews or no reviews at all</li>
                  <li>• Requests excessive personal information upfront</li>
                </ul>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Signs of Legitimate Earning Apps:
                </h4>
                <ul className="text-slate-700 space-y-2 mb-4">
                  <li>• Transparent payment proof and user testimonials</li>
                  <li>• Low minimum withdrawal thresholds (₹50-200)</li>
                  <li>• Clear terms of service and privacy policy</li>
                  <li>• Active customer support and community</li>
                  <li>• Integration with trusted payment platforms</li>
                  <li>• Realistic earning expectations and timelines</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Maximizing Your Mobile App Earnings: Pro Tips
                </h3>
                <p className="text-slate-700 mb-4">
                  To maximize earnings from mobile apps and games, consistency
                  and strategy are key. Top earners don't just randomly install
                  apps; they follow proven methods to optimize their time and
                  maximize rewards.
                </p>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Advanced Earning Techniques:
                </h4>
                <ol className="text-slate-700 space-y-2 mb-4">
                  <li>
                    1. <strong>Multi-Platform Strategy:</strong> Use 3-5
                    different earning apps simultaneously to diversify income
                    streams
                  </li>
                  <li>
                    2. <strong>Peak Time Optimization:</strong> Complete high-
                    paying tasks during peak hours when more offers are
                    available
                  </li>
                  <li>
                    3. <strong>Referral Maximization:</strong> Build a network
                    of friends and family to earn from referral bonuses
                  </li>
                  <li>
                    4. <strong>Daily Consistency:</strong> Maintain daily
                    streaks for bonus multipliers and loyalty rewards
                  </li>
                  <li>
                    5. <strong>Task Prioritization:</strong> Focus on
                    high-reward, low-time tasks first, then move to longer
                    activities
                  </li>
                </ol>
                <p className="text-slate-700">
                  Remember, earning from mobile apps should be viewed as
                  supplementary income rather than a primary source. With the
                  right approach and realistic expectations, you can easily earn
                  ₹3,000-10,000 per month through consistent engagement with
                  legitimate earning platforms.
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
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Play & Earn Hub
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                Your gateway to legitimate mobile earning opportunities. Turn
                your time into money.
              </p>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Top Offers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-slate-600">🚗 Racing Games - ₹250</span>
                </li>
                <li>
                  <span className="text-slate-600">🧠 Puzzle Apps - ₹180</span>
                </li>
                <li>
                  <span className="text-slate-600">
                    🛒 Shopping Apps - ₹300
                  </span>
                </li>
                <li>
                  <span className="text-slate-600">💼 Job Apps - ₹500</span>
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
                        ? "bg-green-500 text-white"
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
              reserved. Your time is valuable - make it profitable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
