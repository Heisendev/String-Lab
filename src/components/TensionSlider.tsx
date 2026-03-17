import { useState } from "react";
import { motion } from "framer-motion";

const TensionSlider = () => {
  const [tension, setTension] = useState(55);
  const min = 40;
  const max = 70;
  const pct = ((tension - min) / (max - min)) * 100;

  const tensionKg = Math.round(tension * 0.453592 * 10) / 10;
  const minKg = Math.round(min * 0.453592 * 10) / 10;
  const maxKg = Math.round(max * 0.453592 * 10) / 10;

  const power = Math.round(100 - pct);
  const control = Math.round(pct);
  const comfort = Math.round(100 - pct * 0.9);
  const spin = Math.round(50 + (pct - 50) * 0.3);

  const getZone = () => {
    if (tension < 48) return { label: "Tension Basse", color: "text-accent", tip: "Plus de puissance et de confort, moins de contrôle. Idéal pour les débutants et les joueurs souffrant du bras." };
    if (tension < 58) return { label: "Tension Moyenne", color: "text-primary", tip: "Jouabilité équilibrée. La plage la plus populaire pour les joueurs de club et loisir." };
    return { label: "Tension Haute", color: "text-clay", tip: "Contrôle et précision maximum. Préféré des joueurs avancés. Risque accru de douleurs au bras." };
  };

  const zone = getZone();

  return (
    <section id="tension" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-purple/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-purple">
            Tension
          </span>
          <h2 className="text-display text-3xl font-black text-foreground sm:text-4xl">
            Guide Interactif de Tension
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Déplacez le curseur pour voir comment la tension (en lbs / kg) affecte la
            puissance, le contrôle, le confort et le risque de blessure en temps réel.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl rounded-2xl bg-card p-8 shadow-sm">
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm font-medium text-muted-foreground">
              <span>{min} lbs<br /><span className="text-xs">({minKg} kg)</span></span>
              <div className="text-center">
                <span className={`font-display text-2xl font-black ${zone.color}`}>
                  {tension} lbs
                </span>
                <span className={`block text-sm font-semibold ${zone.color}`}>
                  {tensionKg} kg
                </span>
              </div>
              <span className="text-right">{max} lbs<br /><span className="text-xs">({maxKg} kg)</span></span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              value={tension}
              onChange={(e) => setTension(Number(e.target.value))}
              className="h-3 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
            />
            <p className={`mt-3 text-center font-display text-sm font-bold ${zone.color}`}>
              {zone.label}
            </p>
          </div>

          <div className="space-y-5">
            {[
              { label: "Puissance", value: power, color: "bg-primary" },
              { label: "Contrôle", value: control, color: "bg-accent" },
              { label: "Confort", value: comfort, color: "bg-clay" },
              { label: "Potentiel de Spin", value: spin, color: "bg-purple" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-foreground">{stat.label}</span>
                  <span className="font-display font-bold text-foreground">{stat.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className={`h-full rounded-full ${stat.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-secondary p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">💡 Conseil :</span>{" "}
              {zone.tip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TensionSlider;