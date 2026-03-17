import { motion } from "framer-motion";
import heroImg from "@/assets/hero-strings.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container mx-auto grid min-h-[85vh] grid-cols-1 items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 max-w-xl"
        >
          <span className="mb-4 inline-block rounded-full bg-clay/10 px-4 py-1.5 text-sm font-semibold text-clay">
            Le Labo du Cordage
          </span>
          <h1 className="text-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Maîtrisez Vos <br />
            <span className="text-primary">Cordes</span>,{" "}
            <span className="text-accent">Protégez</span> Votre Bras
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Comprenez comment le type de corde, la jauge et la tension influencent
            votre jeu et votre corps. Faites des choix plus intelligents et jouez
            sans douleur.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#string-types"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Explorer les Types
            </a>
            <a
              href="#tension"
              className="inline-flex items-center rounded-lg border-2 border-clay px-6 py-3 font-display text-sm font-bold text-clay transition-transform hover:scale-105"
            >
              Guide de Tension
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <img
            src={heroImg}
            alt="Gros plan sur le tamis d'une raquette de tennis"
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-accent px-5 py-3 font-display text-sm font-bold text-accent-foreground shadow-lg">
            🎾 Prévention des Blessures
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;