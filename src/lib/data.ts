export const subjects = [
  { id: "english", name: "English Language", icon: "📖", desc: "Master grammar, comprehension, essay writing, and oral English.", color: "#3B82F6", progress: 45, lessons: 72, questions: 500 },
  { id: "mathematics", name: "Mathematics", icon: "🔢", desc: "Algebra, geometry, trigonometry, statistics, and calculus for SS3.", color: "#8B5CF6", progress: 60, lessons: 85, questions: 750 },
  { id: "physics", name: "Physics", icon: "⚡", desc: "Mechanics, waves, electricity, magnetism, modern physics.", color: "#EF4444", progress: 35, lessons: 76, questions: 600 },
  { id: "chemistry", name: "Chemistry", icon: "🧪", desc: "Organic, inorganic, physical chemistry, and practical analysis.", color: "#10B981", progress: 50, lessons: 80, questions: 650 },
  { id: "biology", name: "Biology", icon: "🧬", desc: "Genetics, ecology, evolution, human anatomy, plant biology.", color: "#F59E0B", progress: 42, lessons: 70, questions: 550 },
  { id: "economics", name: "Economics", icon: "📊", desc: "Microeconomics, macroeconomics, international trade.", color: "#EC4899", progress: 30, lessons: 60, questions: 450 },
  { id: "government", name: "Government", icon: "🏛️", desc: "Political systems, Nigerian government, constitutional development.", color: "#6366F1", progress: 25, lessons: 56, questions: 400 },
  { id: "civic", name: "Civic Education", icon: "🤝", desc: "Citizenship, human rights, democracy, rule of law.", color: "#14B8A6", progress: 55, lessons: 48, questions: 350 },
  { id: "literature", name: "Literature in English", icon: "📚", desc: "Prose, poetry, drama, literary analysis.", color: "#A855F7", progress: 38, lessons: 52, questions: 300 },
  { id: "agric", name: "Agricultural Science", icon: "🌾", desc: "Crop production, animal husbandry, agricultural economics.", color: "#84CC16", progress: 20, lessons: 64, questions: 400 },
  { id: "geography", name: "Geography", icon: "🌍", desc: "Physical geography, human geography, map reading.", color: "#06B6D4", progress: 28, lessons: 60, questions: 380 },
  { id: "ict", name: "Computer Studies / ICT", icon: "💻", desc: "Computer systems, programming, data processing, networking.", color: "#0EA5E9", progress: 65, lessons: 56, questions: 420 },
  { id: "data-processing", name: "Data Processing", icon: "🗄️", desc: "Database management, spreadsheet analysis, data entry.", color: "#7C3AED", progress: 15, lessons: 48, questions: 300 },
  { id: "accounting", name: "Financial Accounting", icon: "💼", desc: "Bookkeeping, financial statements, partnership accounts.", color: "#0891B2", progress: 32, lessons: 60, questions: 450 },
  { id: "commerce", name: "Commerce", icon: "🏪", desc: "Trade, business organizations, marketing, finance.", color: "#D946EF", progress: 40, lessons: 56, questions: 380 },
  { id: "crs", name: "CRS", icon: "✝️", desc: "Christian Religious Studies.", color: "#F43F5E", progress: 48, lessons: 52, questions: 350 },
  { id: "irs", name: "IRS", icon: "☪️", desc: "Islamic Religious Studies.", color: "#059669", progress: 10, lessons: 52, questions: 350 },
  { id: "further-math", name: "Further Mathematics", icon: "📐", desc: "Advanced mathematics, complex numbers, matrices.", color: "#DC2626", progress: 18, lessons: 68, questions: 500 }
];

const weekTopics = [
  ["Introduction to the Subject", "Fundamental Concepts", "Core Topic 1", "Core Topic 2", "Practical Session 1", "Mid-Term Review", "Advanced Topic 1", "Advanced Topic 2", "Practical Session 2", "Integration", "Revision Week", "Examination"],
  ["Second Term Introduction", "New Topic 1", "New Topic 2", "New Topic 3", "Practical Application", "Mid-Term Assessment", "Advanced Concept 1", "Advanced Concept 2", "Group Project", "WAEC/NECO Focus", "Revision and Practice", "Second Term Examination"],
  ["Third Term Overview", "Final Topics 1", "Final Topics 2", "Final Topics 3", "WAEC Preparation", "NECO Preparation", "Comprehensive Revision 1", "Comprehensive Revision 2", "Comprehensive Revision 3", "Mock WAEC Exam", "Final Revision", "Final Examination"]
];

export function getTerms(sid) {
  return [1, 2, 3].map(function (tn) {
    return {
      id: sid + "-term-" + tn,
      subjectId: sid,
      name: tn === 1 ? "First Term" : tn === 2 ? "Second Term" : "Third Term",
      number: tn,
      weeks: weekTopics[tn - 1].map(function (topic, i) {
        return {
          id: sid + "-term-" + tn + "-week-" + (i + 1),
          termId: sid + "-term-" + tn,
          number: i + 1,
          topic: topic,
          subtopics: ["Overview", "Key concepts", "Practice"],
          duration: 45 + " mins",
          difficulty: i % 3 === 0 ? "Easy" : i % 3 === 1 ? "Medium" : "Hard",
          status: i === 0 ? "Completed" : i === 1 ? "In Progress" : "Not Started",
          progress: i === 0 ? 100 : i === 1 ? 65 : 0
        };
      })
    };
  });
}

export function getLesson(sid, wid) {
  var s = subjects.find(function (x) { return x.id === sid; });
  return {
    id: "lesson-" + wid,
    subjectId: sid,
    termId: wid.split("-week-")[0],
    weekId: wid,
    topic: "Understanding the Core Concepts",
    difficulty: "Medium",
    duration: "45 minutes",
    objectives: ["Understand fundamental concepts", "Apply concepts to solve problems", "Identify exam questions", "Build confidence for WAEC and NECO"],
    intro: "Welcome to this lesson on " + (s ? s.name : "SS3") + ". This topic is crucial for your examinations.",
    simple: "This topic can be broken into simple, easy-to-understand parts.",
    detailed: "WAEC and NECO frequently test this topic. Spend 2-3 hours across multiple study sessions.",
    definitions: [{ term: "Concept", def: "An abstract idea representing building blocks." }, { term: "Application", def: "Using theoretical knowledge to solve problems." }],
    concepts: ["Foundational principles", "Recognizing patterns", "Applying knowledge"],
    examples: [{ title: "Basic Example", content: "Start with a simple scenario." }],
    worked: [{ q: "A typical WAEC question.", s: "Identify concepts, explain, apply." }],
    formulas: [{ f: "Result = Understanding × Practice", e: "Success requires both understanding and practice." }],
    mistakes: ["Rushing without understanding", "Memorizing without understanding"],
    examTips: ["Read carefully", "Show working steps", "Manage time"],
    waecTips: ["WAEC asks 2-3 questions from this area", "Practice past questions"],
    summary: ["Essential concepts", "Regular practice is key"],
    related: ["Related Topic 1", "Related Topic 2"]
  };
}

export function getSampleQuestions(sid, cnt) {
  cnt = cnt || 10;
  var qs = [];
  for (var i = 0; i < cnt; i++) {
    qs.push({
      id: "q-" + sid + "-" + (i + 1),
      subjectId: sid,
      topic: "Topic " + ((i % 5) + 1),
      difficulty: i % 3 === 0 ? "Easy" : i % 3 === 1 ? "Medium" : "Hard",
      type: "multiple_choice",
      examType: ["WAEC", "NECO", "School", "Practice"][i % 4],
      year: 2020 + (i % 5),
      question: "Sample question " + (i + 1) + ". Which is correct?",
      options: [{ label: "A", text: "Option A" }, { label: "B", text: "Option B" }, { label: "C", text: "Option C" }, { label: "D", text: "Option D" }],
      answer: "A",
      explanation: "The correct answer is A.",
      timeLimit: 60
    });
  }
  return qs;
}

export const achievements = [
  { id: "first-lesson", name: "First Step", desc: "Complete your first lesson", icon: "🎓" },
  { id: "first-quiz", name: "Quiz Master", desc: "Complete your first quiz", icon: "📝" },
  { id: "first-a", name: "Excellence", desc: "Score 90%+ in CBT", icon: "⭐" },
  { id: "100-questions", name: "Centurion", desc: "Answer 100 questions", icon: "💯" },
  { id: "500-questions", name: "Scholar", desc: "Answer 500 questions", icon: "📚" },
  { id: "7-streak", name: "Weekly Warrior", desc: "7-day streak", icon: "🔥" },
  { id: "30-streak", name: "Monthly Master", desc: "30-day streak", icon: "💪" },
  { id: "subject-master", name: "Subject Master", desc: "Complete a subject", icon: "👑" }
];

export function getFlashcards(sid) {
  var cards = [];
  for (var i = 0; i < 6; i++) {
    cards.push({ id: "fc-" + sid + "-" + (i + 1), subjectId: sid, topic: "Topic " + ((i % 3) + 1), front: "What is concept " + (i + 1) + "?", back: "Concept " + (i + 1) + " is a fundamental principle.", difficulty: "Easy" });
  }
  return cards;
}

export const formulas = [
  { subject: "Mathematics", items: [{ f: "x = (−b ± √(b²−4ac)) / 2a", name: "Quadratic Formula" }, { f: "A = πr²", name: "Area of Circle" }] },
  { subject: "Physics", items: [{ f: "F = ma", name: "Newton's Second Law" }, { f: "V = IR", name: "Ohm's Law" }] },
  { subject: "Chemistry", items: [{ f: "n = m/M", name: "Number of Moles" }, { f: "pH = −log[H⁺]", name: "pH Calculation" }] }
];

export const dictionary = [
  { term: "Photosynthesis", pron: "/ˌfəʊtəʊˈsɪnθəsɪs/", def: "Process by which plants use sunlight to make nutrients.", example: "Photosynthesis occurs in chloroplasts.", related: ["Chlorophyll"] },
  { term: "Quadratic Equation", pron: "/kwɒˈdrætɪk/", def: "Second-degree polynomial: ax² + bx + c = 0.", example: "x² − 5x + 6 = 0.", related: ["Polynomial"] },
  { term: "Velocity", pron: "/vəˈlɒsɪti/", def: "Rate of change of displacement.", example: "A car moving north at 60 km/h.", related: ["Speed"] }
];
