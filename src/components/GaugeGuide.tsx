import { motion } from "framer-motion";

const gauges = [
  {
    gauge: "15 (1.40mm)",
    thickness: "Le plus épais",
    durability: "★★★★★",
    power: "★★☆☆☆",
    feel: "★★☆☆☆",
    spin: "★★☆☆☆",
    border: "border-l-primary",
    note: "Durabilité maximale, idéal pour les casseurs de cordes.",
  },
  {
    gauge: "16 (1.30mm)",
    thickness: "Standard",
    durability: "★★★★☆",
    power: "★★★☆☆",
    feel: "★★★☆☆",
    spin: "★★★☆☆",
    border: "border-l-accent",
    note: "La jauge la plus populaire — équilibrée dans toutes les catégories.",
  },
  {
    gauge: "17 (1.25mm)",
    thickness: "Fin",
    durability: "★★★☆☆",
    power: "★★★★☆",
    feel: "★★★★☆",
    spin: "★★★★☆",
    border: "border-l-clay",
    note: "Plus d'accroche sur la balle. Parfait pour les joueurs orientés spin.",
  },
  {
    gauge: "18 (1.20mm)",
    thickness: "Le plus fin",
    durability: "★★☆☆☆",
    power: "★★★★★",
    feel: "★★★★★",
    spin: "★★★★★",
    border: "border-l-purple",
    note: "Toucher et spin max, mais les cordes cassent plus vite. Choix expert.",
  },
];

const GaugeGuide = () => {
  return (
    <section id="gauges" className="bg-card py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-clay/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-clay">
            Jauges
          </span>
          <h2 className="text-display text-3xl font-black text-foreground sm:text-4xl">
            Comparaison des Jauges
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Cordes plus fines = plus de toucher, spin et puissance. Plus épaisses =
            plus de durabilité. Trouvez votre équilibre idéal.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gauges.map((g, i) => (
            <motion.div
              key={g.gauge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border-l-4 ${g.border} bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md`}
            >
              <h3 className="font-display text-lg font-bold text-foreground">
                {g.gauge}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {g.thickness}
              </span>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Durabilité</span>
                  <span>{g.durability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Puissance</span>
                  <span>{g.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Toucher</span>
                  <span>{g.feel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Spin</span>
                  <span>{g.spin}</span>
                </div>
              </div>

              <p className="mt-4 rounded-lg bg-secondary p-3 text-xs text-muted-foreground">
                {g.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaugeGuide;