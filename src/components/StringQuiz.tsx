import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RotateCcw } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: "level",
    question: "Quel est votre niveau de jeu ?",
    options: [
      { label: "Débutant", value: "beginner" },
      { label: "Intermédiaire", value: "intermediate" },
      { label: "Avancé / Compétition", value: "advanced" },
    ],
  },
  {
    id: "style",
    question: "Quel est votre style de jeu ?",
    options: [
      { label: "Fond de court — Lifté", value: "topspin" },
      { label: "Tout en puissance — À plat", value: "power" },
      { label: "Toucher et finesse — Slice / Volée", value: "touch" },
      { label: "Polyvalent — Un peu de tout", value: "allround" },
    ],
  },
  {
    id: "breakFrequency",
    question: "À quelle fréquence cassez-vous vos cordes ?",
    options: [
      { label: "Très souvent (plusieurs fois par semaine)", value: "often" },
      { label: "De temps en temps (1x par mois)", value: "sometimes" },
      { label: "Rarement (cordes usées avant de casser)", value: "rarely" },
    ],
  },
  {
    id: "armHealth",
    question: "Avez-vous des douleurs au bras ou au coude ?",
    options: [
      { label: "Oui, régulièrement", value: "pain" },
      { label: "Parfois après un long match", value: "sometimes" },
      { label: "Non, aucune douleur", value: "none" },
    ],
  },
  {
    id: "priority",
    question: "Quelle est votre priorité principale ?",
    options: [
      { label: "Spin maximum", value: "spin" },
      { label: "Puissance et profondeur", value: "power" },
      { label: "Confort et protection du bras", value: "comfort" },
      { label: "Contrôle et précision", value: "control" },
      { label: "Durabilité avant tout", value: "durability" },
    ],
  },
];

interface Recommendation {
  stringType: string;
  stringDetail: string;
  gauge: string;
  gaugeDetail: string;
  tension: string;
  tensionDetail: string;
  proTip: string;
  color: string;
}

function getRecommendation(answers: Record<string, string>): Recommendation {
  const { level, style, breakFrequency, armHealth, priority } = answers;

  // Default to balanced
  let stringType = "Multifilament";
  let stringDetail = "Confortable et polyvalent, idéal pour la plupart des joueurs.";
  let gauge = "16 (1.30mm)";
  let gaugeDetail = "La jauge standard, bon équilibre entre durabilité et toucher.";
  let tension = "52-55 lbs";
  let tensionDetail = "Plage équilibrée entre puissance et contrôle.";
  let proTip = "Faites corder votre raquette régulièrement, même si les cordes ne cassent pas — elles perdent leur élasticité avec le temps.";
  let color = "border-primary";

  // Arm pain overrides everything
  if (armHealth === "pain") {
    stringType = "Multifilament / Boyau Naturel";
    stringDetail = "Priorité absolue : le confort de votre bras. Un multifilament souple ou un boyau naturel absorbe les vibrations.";
    gauge = "16 (1.30mm)";
    gaugeDetail = "Jauge standard pour un bon confort sans sacrifier trop de durabilité.";
    tension = "46-50 lbs";
    tensionDetail = "Tension basse pour maximiser le confort et réduire le choc d'impact.";
    proTip = "Consultez un médecin du sport si la douleur persiste. Le cordage seul ne suffit pas à guérir le tennis elbow.";
    color = "border-accent";
    return { stringType, stringDetail, gauge, gaugeDetail, tension, tensionDetail, proTip, color };
  }

  // Advanced spin player
  if (level === "advanced" && (style === "topspin" || priority === "spin")) {
    stringType = "Monofilament (Polyester)";
    stringDetail = "Le poly cofilé ou texturé offre un accrochage maximum sur la balle pour générer du spin.";
    gauge = breakFrequency === "often" ? "16 (1.30mm)" : "17 (1.25mm)";
    gaugeDetail = breakFrequency === "often"
      ? "Jauge plus épaisse pour compenser la casse fréquente."
      : "Jauge fine pour maximiser le mordant et le spin.";
    tension = "50-54 lbs";
    tensionDetail = "Tension moyenne pour un bon compromis spin/contrôle. Les pros jouent souvent plus bas qu'on ne le pense.";
    proTip = "Pensez à recorder toutes les 10-15 heures de jeu — le poly perd sa tension et son snapback très vite.";
    color = "border-clay";
  }
  // Power player
  else if (style === "power" || priority === "power") {
    stringType = level === "advanced" ? "Monofilament (Polyester)" : "Multifilament";
    stringDetail = level === "advanced"
      ? "Un poly souple vous donnera de la puissance contrôlée avec vos grands gestes."
      : "Le multifilament amplifie naturellement la puissance grâce à son effet trampoline.";
    gauge = "17 (1.25mm)";
    gaugeDetail = "Jauge fine pour maximiser l'effet trampoline et la puissance.";
    tension = "48-52 lbs";
    tensionDetail = "Tension légèrement basse pour plus de puissance et de profondeur.";
    proTip = "Si vous envoyez trop long, montez la tension de 1-2 lbs plutôt que de changer de corde.";
    color = "border-primary";
  }
  // Touch / slice player
  else if (style === "touch" || priority === "control") {
    stringType = level === "advanced" ? "Hybride (Poly + Multi)" : "Multifilament";
    stringDetail = level === "advanced"
      ? "Un hybride poly en montants / multi en travers combine contrôle et toucher."
      : "Le multifilament offre un excellent toucher et un retour d'information sur chaque frappe.";
    gauge = "17 (1.25mm)";
    gaugeDetail = "Jauge fine pour un maximum de sensation et de connexion avec la balle.";
    tension = "54-58 lbs";
    tensionDetail = "Tension plus haute pour un contrôle et une précision accrus.";
    proTip = "Le boyau naturel reste le roi du toucher, mais son prix est élevé. Un bon multifilament est un excellent compromis.";
    color = "border-purple";
  }
  // Comfort priority
  else if (priority === "comfort" || armHealth === "sometimes") {
    stringType = "Multifilament";
    stringDetail = "Souple et confortable, le multifilament est votre meilleur allié pour protéger votre bras.";
    gauge = "16 (1.30mm)";
    gaugeDetail = "Bon équilibre entre durabilité et confort.";
    tension = "48-52 lbs";
    tensionDetail = "Tension moyenne-basse pour plus de confort sans sacrifier le contrôle.";
    proTip = "Ajoutez un anti-vibrateur sur votre raquette en complément pour réduire encore les vibrations.";
    color = "border-accent";
  }
  // Durability priority
  else if (priority === "durability" || breakFrequency === "often") {
    stringType = "Monofilament (Polyester)";
    stringDetail = "Le polyester est de loin la corde la plus durable. Choisissez un jauge épaisse.";
    gauge = "15L (1.35mm)";
    gaugeDetail = "Jauge épaisse pour une durabilité maximale.";
    tension = "50-54 lbs";
    tensionDetail = "Tension standard pour un polyester, bon compromis durée de vie / jouabilité.";
    proTip = "Si vous cassez en 15L, envisagez un cordage kevlar en montants — c'est quasi incassable.";
    color = "border-clay";
  }
  // Beginner / allround default
  else {
    stringType = "Multifilament";
    stringDetail = "Parfait pour découvrir le tennis avec confort. Pas besoin de poly quand on débute.";
    gauge = "16 (1.30mm)";
    gaugeDetail = "La jauge la plus polyvalente, idéale pour commencer.";
    tension = "52-55 lbs";
    tensionDetail = "Plage médiane recommandée par la plupart des cordeurs.";
    proTip = "Concentrez-vous sur votre technique avant d'optimiser votre cordage — c'est le meilleur investissement !";
    color = "border-primary";
  }

  return { stringType, stringDetail, gauge, gaugeDetail, tension, tensionDetail, proTip, color };
}

const StringQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 200);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
  };

  const progress = ((Object.keys(answers).length) / questions.length) * 100;
  const recommendation = showResult ? getRecommendation(answers) : null;

  return (
    <section id="quiz" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-clay/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-clay">
            Recommandation
          </span>
          <h2 className="text-display text-3xl font-black text-foreground sm:text-4xl">
            Trouvez Votre Cordage Idéal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Répondez à 5 questions rapides et recevez une recommandation
            personnalisée de corde, jauge et tension.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-xs font-medium text-muted-foreground">
              <span>Question {Math.min(currentQ + 1, questions.length)} / {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-clay"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-card p-8 shadow-sm"
              >
                <h3 className="mb-6 font-display text-xl font-bold text-foreground">
                  {questions[currentQ].question}
                </h3>
                <div className="space-y-3">
                  {questions[currentQ].options.map((opt) => {
                    const isSelected = answers[questions[currentQ].id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(questions[currentQ].id, opt.value)}
                        className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 ${
                          isSelected
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border text-foreground"
                        }`}
                      >
                        {opt.label}
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </button>
                    );
                  })}
                </div>

                {currentQ > 0 && (
                  <button
                    onClick={() => setCurrentQ(currentQ - 1)}
                    className="mt-4 text-sm text-muted-foreground hover:text-foreground"
                  >
                    ← Question précédente
                  </button>
                )}
              </motion.div>
            ) : recommendation && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border-2 ${recommendation.color} bg-card p-8 shadow-sm`}
              >
                <div className="mb-6 text-center">
                  <span className="mb-2 inline-block text-4xl">🎾</span>
                  <h3 className="font-display text-2xl font-black text-foreground">
                    Votre Recommandation
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl bg-secondary p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Type de Corde</p>
                    <p className="mt-1 font-display text-lg font-bold text-foreground">{recommendation.stringType}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{recommendation.stringDetail}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-secondary p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-clay">Jauge</p>
                      <p className="mt-1 font-display text-lg font-bold text-foreground">{recommendation.gauge}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{recommendation.gaugeDetail}</p>
                    </div>
                    <div className="rounded-xl bg-secondary p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-purple">Tension</p>
                      <p className="mt-1 font-display text-lg font-bold text-foreground">{recommendation.tension}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{recommendation.tensionDetail}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">💡 Conseil Pro</p>
                    <p className="mt-2 text-sm text-foreground">{recommendation.proTip}</p>
                  </div>
                </div>

                <button
                  onClick={reset}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  <RotateCcw className="h-4 w-4" />
                  Recommencer le Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StringQuiz;