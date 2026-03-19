import { motion } from "framer-motion";
import { Baby, Shield, Feather, AlertTriangle } from "lucide-react";

const tips = [
  {
    icon: Feather,
    title: "Multifilament obligatoire",
    description:
      "Les bras des enfants sont en pleine croissance. Utilisez toujours des cordes souples (multifilament ou boyau synthétique) pour protéger leurs articulations.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Tension basse (18–22 kg)",
    description:
      "Une tension basse offre plus de puissance naturelle, réduit les vibrations et compense le manque de force des jeunes joueurs.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Baby,
    title: "Jauge 16 ou 17",
    description:
      "La jauge 16 (1.30mm) offre un bon équilibre durabilité/confort. La 17 (1.25mm) apporte plus de toucher pour les juniors avancés.",
    color: "text-clay",
    bg: "bg-clay/10",
  },
  {
    icon: AlertTriangle,
    title: "Recorder souvent",
    description:
      "Les cordes perdent leur tension avec le temps. Pour les enfants, recorder toutes les 6–8 semaines même sans casse, pour garder confort et performance.",
    color: "text-purple",
    bg: "bg-purple/10",
  },
];

const ageGroups = [
  {
    age: "5–8 ans",
    racket: "19\"–23\"",
    string: "Multifilament souple",
    tension: "16–18 kg",
    gauge: "16 (1.30mm)",
  },
  {
    age: "9–12 ans",
    racket: "25\"–26\"",
    string: "Multifilament",
    tension: "18–21 kg",
    gauge: "16 (1.30mm)",
  },
  {
    age: "13–16 ans",
    racket: "26\"–27\"",
    string: "Multi ou Mono souple",
    tension: "20–24 kg",
    gauge: "16–17",
  },
];

const KidsSection = () => {
  return (
    <section id="kids" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            Juniors
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl">
            Cordage pour Enfants & Juniors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Le cordage des juniors nécessite une attention particulière. Leurs
            bras en croissance sont plus vulnérables — le confort prime sur la
            performance.
          </p>
        </motion.div>

        {/* Tips grid */}
        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className={`mb-4 inline-flex rounded-xl ${tip.bg} p-3`}>
                <tip.icon className={`h-6 w-6 ${tip.color}`} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                {tip.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Age group table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="border-b border-border bg-primary/5 px-6 py-4">
            <h3 className="font-display text-lg font-bold text-foreground">
              Guide par tranche d'âge
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-3 font-bold text-foreground">Âge</th>
                  <th className="px-6 py-3 font-bold text-foreground">Raquette</th>
                  <th className="px-6 py-3 font-bold text-foreground">Corde</th>
                  <th className="px-6 py-3 font-bold text-foreground">Tension</th>
                  <th className="px-6 py-3 font-bold text-foreground">Jauge</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((g) => (
                  <tr key={g.age} className="border-b border-border last:border-0">
                    <td className="px-6 py-3 font-semibold text-primary">{g.age}</td>
                    <td className="px-6 py-3 text-muted-foreground">{g.racket}</td>
                    <td className="px-6 py-3 text-muted-foreground">{g.string}</td>
                    <td className="px-6 py-3 text-muted-foreground">{g.tension}</td>
                    <td className="px-6 py-3 text-muted-foreground">{g.gauge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KidsSection;
