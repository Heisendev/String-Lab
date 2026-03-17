import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, HeartPulse, Lightbulb } from "lucide-react";

const tips = [
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Tennis Elbow & Cordes",
    description:
      "Les cordes polyester rigides à haute tension sont le facteur n°1 lié à l'équipement qui contribue au tennis elbow. Le choc d'impact se transmet directement aux tendons de l'avant-bras.",
    color: "bg-clay/10 text-clay",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Choisissez le Multifilament",
    description:
      "Si vous avez des douleurs au bras, passez à un multifilament souple ou du boyau naturel. L'absorption d'énergie est bien supérieure, réduisant le choc jusqu'à 30%.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Baissez Votre Tension",
    description:
      "Baisser la tension de 1 à 2 kg augmente le temps de contact sur le tamis, réduisant la force d'impact. C'est souvent la solution la plus simple contre l'inconfort au bras.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Cordages Hybrides",
    description:
      "Combinez un poly durable en montants avec un multi souple en travers. Vous obtenez le spin et le contrôle du poly, avec le confort du multifilament.",
    color: "bg-purple/10 text-purple",
  },
];

const InjuryPrevention = () => {
  return (
    <section id="injury" className="bg-card py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            Santé
          </span>
          <h2 className="text-display text-3xl font-black text-foreground sm:text-4xl">
            Conseils de Prévention des Blessures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Vos cordes sont la seule partie de la raquette qui touche la balle.
            Bien les choisir peut sauver votre bras.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-border"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${tip.color}`}>
                {tip.icon}
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
      </div>
    </section>
  );
};

export default InjuryPrevention;