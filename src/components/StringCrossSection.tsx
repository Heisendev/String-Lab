import { motion } from "framer-motion";

const MonofilamentDiagram = () => (
  <svg viewBox="0 0 200 200" className="h-48 w-48 mx-auto">
    {/* Outer circle - the single filament */}
    <circle cx="100" cy="100" r="80" fill="hsl(201 100% 39% / 0.15)" stroke="hsl(201 100% 39%)" strokeWidth="3" />
    <circle cx="100" cy="100" r="60" fill="hsl(201 100% 39% / 0.08)" stroke="hsl(201 100% 39% / 0.4)" strokeWidth="1" strokeDasharray="4 3" />
    {/* Core - solid single core */}
    <circle cx="100" cy="100" r="35" fill="hsl(201 100% 39% / 0.25)" stroke="hsl(201 100% 39%)" strokeWidth="2" />
    <circle cx="100" cy="100" r="8" fill="hsl(201 100% 39%)" />
    {/* Labels */}
    <text x="100" y="10" textAnchor="middle" className="fill-foreground text-[9px] font-bold">Enveloppe extérieure</text>
    <text x="100" y="200" textAnchor="middle" className="fill-muted-foreground text-[8px]">Noyau solide unique</text>
    {/* Arrows */}
    <line x1="100" y1="32" x2="100" y2="38" stroke="hsl(201 100% 39%)" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />
  </svg>
);

const MultifilamentDiagram = () => (
  <svg viewBox="0 0 200 200" className="h-48 w-48 mx-auto">
    {/* Outer circle */}
    <circle cx="100" cy="100" r="80" fill="hsl(152 100% 22% / 0.1)" stroke="hsl(152 100% 22%)" strokeWidth="3" />
    {/* Many small filaments inside */}
    {[
      [80, 70], [120, 70], [100, 55], [70, 90], [130, 90],
      [85, 110], [115, 110], [100, 130], [70, 110], [130, 110],
      [90, 85], [110, 85], [100, 100], [80, 125], [120, 125],
      [95, 70], [105, 95], [90, 105], [110, 105], [100, 115],
      [75, 100], [125, 100], [85, 90], [115, 90], [100, 80],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="6" fill="hsl(152 100% 22% / 0.2)" stroke="hsl(152 100% 22%)" strokeWidth="1.2" />
    ))}
    {/* Center highlight */}
    <circle cx="100" cy="100" r="4" fill="hsl(152 100% 22%)" />
    {/* Labels */}
    <text x="100" y="10" textAnchor="middle" className="fill-foreground text-[9px] font-bold">Enveloppe extérieure</text>
    <text x="100" y="200" textAnchor="middle" className="fill-muted-foreground text-[8px]">Centaines de micro-fibres</text>
  </svg>
);

const StringCrossSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-purple/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-purple">
            Anatomie
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl">
            Coupe Transversale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprendre la structure interne d'une corde permet de mieux saisir
            ses propriétés de jeu et son impact sur le bras.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Monofilament */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-primary bg-card p-8 shadow-sm"
          >
            <h3 className="mb-2 text-center font-display text-xl font-bold text-foreground">
              Monofilament
            </h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Un seul noyau solide en polyester
            </p>
            <MonofilamentDiagram />
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <span className="mt-0.5 text-primary">●</span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Structure rigide</span> — le noyau unique transmet directement les vibrations au bras.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <span className="mt-0.5 text-primary">●</span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Surface lisse</span> — accroche la balle par effet de « snap-back » pour générer du spin.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <span className="mt-0.5 text-primary">●</span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Très durable</span> — résiste à l'abrasion grâce à sa composition dense.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Multifilament */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-accent bg-card p-8 shadow-sm"
          >
            <h3 className="mb-2 text-center font-display text-xl font-bold text-foreground">
              Multifilament
            </h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Des centaines de micro-fibres tressées
            </p>
            <MultifilamentDiagram />
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <span className="mt-0.5 text-accent">◎</span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Structure souple</span> — les fibres absorbent les chocs et protègent le bras.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <span className="mt-0.5 text-accent">◎</span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Effet trampoline</span> — l'élasticité des fibres offre plus de puissance naturelle.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <span className="mt-0.5 text-accent">◎</span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Maintien de tension</span> — garde sa tension plus longtemps qu'un monofilament.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StringCrossSection;
