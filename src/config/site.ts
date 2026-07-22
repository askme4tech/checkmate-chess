export const siteConfig = {
  academyName: "CHECK MATE School of Chess",
  tagline: "Beginners to Advance Level",
  contact: {
    phones: ["+91 96776 21073", "+91 88704 06066"],
    whatsapp: "919677621073", // For floating button
    email: "checkmatechess16@gmail.com",
    address: "80, Maniyam Vellpan Street,\nK.K. Pudur,\nCoimbatore – 641038",
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
  integrations: {
    googlePhotosAlbumUrl: "#", // Add your Google Photos shared album URL here
    youtubeChannelUrl: "#", // Add your YouTube Channel URL here
    googleFormEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd_example_form/viewform?embedded=true", // Example placeholder
    googleBusinessReviewEmbed: "#", // URL or iframe for Google Reviews
  },
  seo: {
    defaultTitle: "CHECK MATE School of Chess | Beginners to Advance Level",
    defaultDescription: "Join CHECK MATE School of Chess in Coimbatore. We offer regular, weekend, and online chess classes for beginners to advanced players.",
    keywords: "chess academy, chess classes, coimbatore chess, online chess classes, learn chess, CHECK MATE school of chess",
    url: "https://checkmatechess.com", // Replace with actual domain or GH pages URL
  },
  branches: [
    {
      id: "main-branch",
      name: "Main Branch",
      address: "80, Maniyam Vellpan Street, K.K. Pudur, Coimbatore – 641038",
      googleMapsUrl: "https://maps.app.goo.gl/placeholder", // Replace with real maps URL
      phone: "+91 96776 21073",
      timings: "Mon-Sat: 4:00 PM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  courses: [
    {
      id: "foundation",
      title: "Foundation",
      description: "Introduction to Chess fundamentals and building a strong foundation. We cover Board Basics, Pieces Movement, Basic Tactics, and Rules & Regulations.",
      duration: "3 Months",
      ageGroup: "5+ Years",
      fees: "Contact for details",
      chapters: [
        { title: "01 Introduction to Chess", topics: ["What is Chess?", "History of Chess", "Chess Legends and World Champions", "Benefits of Learning Chess"] },
        { title: "02 The Chessboard", topics: ["Understanding the Chessboard", "Setting Up the Board Correctly", "Files, Ranks and Coordinates", "Naming Squares", "Diagonals", "Setting Up the Pieces", "Who Moves First?"] },
        { title: "03 The Pieces", topics: ["The Rook", "The Bishop", "The Queen", "The King", "The Knight", "The Pawn", "Piece Values"] },
        { title: "04 Protecting Your Pieces", topics: ["Attacked or Safe?", "Move to Safety", "Protecting a Piece", "Capturing the Attacker", "Blocking the Attack", "Clearing the Way for Defenders", "Smart Defending and Smart Trades"] }
      ]
    },
    {
      id: "beginner",
      title: "Beginner",
      description: "Building on the foundation with intermediate tactics, checkmate patterns, special moves, and basic strategies.",
      duration: "3-6 Months",
      ageGroup: "All Ages",
      fees: "Contact for details",
      chapters: [
        { title: "05 Check & Escaping Check", topics: ["Understanding Check", "Escaping Check by Moving the King", "Escaping Check by Capturing", "Escaping Check by Blocking", "Illegal King Moves", "Choosing the Best Escape"] },
        { title: "06 Understanding Checkmate", topics: ["Check vs Checkmate", "No Escape!", "Controlling Escape Squares", "Teamwork in Checkmate", "Trapped by Your Own Army", "Checkmate with Different Pieces", "Finding the Winning Move", "The End of the Game"] },
        { title: "07 Mate in One", topics: ["Finding Mate in One", "Mate in One with the Queen", "Mate in One with the Rook", "Mate in One with the Bishop", "Mate in One with the Knight", "Mate in One with the Pawn", "Choosing Mate, Not Just Check"] },
        { title: "08 Special Moves", topics: ["Understanding Castling", "Kingside and Queenside Castling", "When Castling Is Not Allowed", "Common Castling Mistakes", "Understanding En Passant", "Performing En Passant"] },
        { title: "09 Smart Exchanges", topics: ["Understanding Piece Values", "Equal Exchanges", "Profitable Exchanges", "Understanding Recaptures", "The Exchange", "Major Piece Exchanges", "Choosing the Best Exchange"] },
        { title: "10 Double Pressure", topics: ["Understanding Double Pressure", "Counting Attackers and Defenders", "Winning Material with Double Pressure", "Capturing in the Correct Order", "Understanding Recaptures", "When Double Pressure Fails", "Advanced Double Pressure"] },
        { title: "11 Understanding Draw", topics: ["What Is a Draw?", "Understanding Stalemate", "When Checkmate Is Impossible", "Full-Board Stalemate", "Avoiding Stalemate", "Common Draw Mistakes"] },
        { title: "12 Chess Move Notation", topics: ["Introduction to Chess Notation", "Recording Moves and Captures", "Recording Pawn Moves", "Recording Special Moves", "Recording Promotion", "Recording Check and Checkmate", "Ambiguous Moves", "Writing a Scoresheet", "Playing Through a Recorded Game"] }
      ]
    },
    {
      id: "intermediate",
      title: "Intermediate",
      description: "Transitioning to tactical thinking, basic planning, positional play, and complex endgames.",
      duration: "6 Months",
      ageGroup: "All Ages",
      fees: "Contact for details",
      chapters: [
        { title: "01 Advanced Tactics", topics: ["Pins", "Skewers", "Forks", "Discovered Attacks"] },
        { title: "02 Basic Openings", topics: ["Italian Game", "Ruy Lopez", "Sicilian Defense Basics"] },
        { title: "03 Simple Endgames", topics: ["King and Pawn Endgames", "Opposition", "Rule of the Square"] },
        { title: "04 Positional Play", topics: ["Outposts", "Weak Squares", "Pawn Structures", "Space Advantage"] },
        { title: "05 Middle Game Planning", topics: ["Evaluating the Position", "Creating a Plan", "Prophylaxis"] },
        { title: "06 Advanced Endgames", topics: ["Rook Endgames", "Lucena Position", "Philidor Position"] }
      ]
    },
    {
      id: "advanced",
      title: "Advanced",
      description: "Refining skills for competitive play and high-level tournament performance. Covers Grandmaster Games Analysis, Advanced Calculation, Specialized Openings, and Tournament Preparation.",
      duration: "Ongoing",
      ageGroup: "Rated Players",
      fees: "Contact for details",
      chapters: []
    },
    {
      id: "master",
      title: "Master",
      description: "Expert-level training for rated players aiming for mastery. Includes Tailored Coaching, Psychological Resilience, Deep Opening Preparation, and Complex Endgame Analysis.",
      duration: "Flexible",
      ageGroup: "Rated Players",
      fees: "Contact for details",
      chapters: []
    },
    {
      id: "champion",
      title: "Champion",
      description: "Elite level coaching for national and international level champions. Customized intensive training with Grandmasters.",
      duration: "Flexible",
      ageGroup: "Professional Players",
      fees: "Contact for details",
      chapters: []
    }
  ],
  benefits: [
    "Memory", "Concentration", "Problem Solving", "Discipline", "Confidence", "Critical Thinking"
  ]
};
