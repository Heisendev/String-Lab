import { motion } from "framer-motion";

const types = [
  {
    name: "Monofilament",
    aka: "Polyester / \"Poly\"",
    color: "border-primary",
    badgeColor: "bg-primary/10 text-primary",
    pros: ["Excellent potentiel de spin", "Grande durabilité", "Contrôle précis"],
    cons: ["Plus rigide — dur pour le bras", "Perd la tension plus vite", "Moins de puissance"],
    bestFor: "Joueurs avancés avec de grands gestes cherchant spin et contrôle.",
    diagram: "●",
    armRisk: "Élevé",
    armColor: "text-clay",
  },
  {
    name: "Multifilament",
    aka: "Nylon / Boyau Synthétique",
    color: "border-accent",
    badgeColor: "bg-accent/10 text-accent",
    pros: ["Confortable pour le bras", "Plus de puissance et de toucher", "Maintient bien la tension"],
    cons: ["Moins durable", "Moins de potentiel de spin", "Moins de contrôle à haut niveau"],
    bestFor: "Débutants à intermédiaires, ou toute personne ayant des douleurs au bras.",
    diagram: "◎",
    armRisk: "Faible",
    armColor: "text-accent",
  },
];

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const StringTypes = () => {
  return (
    <section id="string-types" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Types de Cordes
          </span>
          <h2 className="text-display text-3xl font-black text-foreground sm:text-4xl">
            Monofilament vs Multifilament
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            La construction de la corde change fondamentalement le comportement de
            votre raquette et ce que ressent votre bras après un match.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {types.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className={`rounded-2xl border-2 ${t.color} bg-card p-8 shadow-sm transition-shadow hover:shadow-lg`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl">{t.diagram}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {t.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{t.aka}</span>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className={`rounded-full ${t.badgeColor} px-3 py-0.5 text-xs font-bold`}>
                  Risque bras : <span className={t.armColor}>{t.armRisk}</span>
                </span>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                    ✓ Avantages
                  </p>
                  <ul className="space-y-1">
                    {t.pros.map((p) => (
                      <li key={p} className="text-sm text-foreground">{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-clay">
                    ✗ Inconvénients
                  </p>
                  <ul className="space-y-1">
                    {t.cons.map((c) => (
                      <li key={c} className="text-sm text-foreground">{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-secondary p-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-bold">Idéal pour :</span> {t.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StringTypes;