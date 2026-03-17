const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-lg font-black text-foreground">
        STRING<span className="text-primary">LAB</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Ressource éducative pour les joueurs de tennis. Jouez plus intelligent, jouez plus longtemps.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" /> Open d'Australie
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-clay" /> Roland Garros
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Wimbledon
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-purple" /> Wimbledon
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
