const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-lg font-black text-foreground">
        STRING<span className="text-primary">LAB</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Ressource éducative pour les joueurs de tennis. Jouez plus intelligent, jouez plus longtemps.
      </p>
      <div className="mt-4 justify-center text-xs text-muted-foreground">
        <a href="https://mikahermet.fr" className="underline hover:text-primary/90">MikaHermet</a> Copyright © 2026  StringLab. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
