"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/content/types";
import { track } from "@/lib/analytics";
import { CHECKOUT } from "@/lib/site";
import Icon from "../Icon";

export default function Pricing({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [yearly, setYearly] = useState(true);
  const router = useRouter();
  const eur = (n: number) => new Intl.NumberFormat(fr ? "fr-FR" : "en-IE", { style: "currency", currency: "EUR" }).format(n);

  const go = (plan: "monthly" | "yearly" | "lifetime") => {
    track("checkout_clicked", { plan });
    const url = CHECKOUT[plan];
    if (url) window.location.href = url;
    else alert(fr ? "Le paiement arrive très bientôt. Merci pour ton intérêt !" : "Checkout is coming very soon. Thanks for your interest!");
  };

  const freeF = fr
    ? ["Tout le HSK 1 (15 leçons)", "Listes de vocabulaire HSK 1 à 9", "Toutes les fiches de grammaire", "Entraîneur de tons, pinyin, écriture", "Test de niveau", "15 nouveaux mots/jour en révision"]
    : ["All of HSK 1 (15 lessons)", "HSK 1–9 vocabulary lists", "Every grammar guide", "Tone trainer, pinyin, handwriting", "Placement test", "15 new review words/day"];
  const proF = fr
    ? ["Tout ce qui est gratuit", "Tous les cours HSK 2 à 9", "Révisions illimitées (FSRS)", "Exercices et dialogues complets", "Suivi de progression détaillé", "Nouveaux contenus chaque mois"]
    : ["Everything in Free", "All HSK 2–9 courses", "Unlimited reviews (FSRS)", "Full exercises and dialogues", "Detailed progress tracking", "New content every month"];

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex rounded-full border border-line bg-card p-1 text-sm font-medium">
          <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 ${!yearly ? "bg-ink text-paper" : ""}`}>
            {fr ? "Mensuel" : "Monthly"}
          </button>
          <button onClick={() => setYearly(true)} className={`flex items-center gap-2 rounded-full px-5 py-2 ${yearly ? "bg-ink text-paper" : ""}`}>
            {fr ? "Annuel" : "Yearly"} <span className="rounded-full bg-jade px-2 py-0.5 text-[10px] text-white">−50%</span>
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Plan
          name={fr ? "Découverte" : "Free"}
          price={eur(0)}
          period={fr ? "pour toujours" : "forever"}
          features={freeF}
          cta={fr ? "C’est parti" : "Get started"}
          onClick={() => router.push(`/${locale}/learn/1`)}
        />
        <Plan
          highlight
          badge={fr ? "Le plus choisi" : "Most popular"}
          name="Pro"
          price={yearly ? eur(4.99) : eur(9.99)}
          period={yearly ? (fr ? `/mois · ${eur(59.99)} facturés par an` : `/month · ${eur(59.99)} billed yearly`) : fr ? "/mois" : "/month"}
          features={proF}
          cta={yearly ? (fr ? "Essai gratuit 7 jours" : "7-day free trial") : fr ? "Passer à Pro" : "Go Pro"}
          onClick={() => go(yearly ? "yearly" : "monthly")}
        />
        <Plan
          name={fr ? "À vie · Fondateur" : "Lifetime · Founder"}
          price={eur(149)}
          period={fr ? "une fois · 500 places" : "one-time · 500 seats"}
          features={fr ? ["Pro pour toujours", "Toutes les futures mises à jour", "Accès anticipé aux nouveautés", "Ton nom dans les remerciements"] : ["Pro forever", "All future updates", "Early access to new features", "Your name in the credits"]}
          cta={fr ? "Devenir fondateur" : "Become a founder"}
          onClick={() => go("lifetime")}
        />
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        {fr ? "Paiement sécurisé · Annulable en 2 clics · TVA incluse" : "Secure payment · Cancel in 2 clicks · VAT included"}
      </p>
    </div>
  );
}

function Plan({
  name,
  price,
  period,
  features,
  cta,
  onClick,
  highlight,
  badge,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  onClick: () => void;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div className={`relative flex flex-col rounded-[1.5rem] p-7 ${highlight ? "bg-ink text-paper shadow-2xl lg:-my-4 lg:py-11" : "card"}`}>
      {badge && <span className="absolute -top-3 left-7 rounded-full bg-seal px-3 py-1 text-xs font-semibold text-white">{badge}</span>}
      <h3 className="font-display text-2xl font-semibold">{name}</h3>
      <p className="mt-4 font-display text-5xl font-semibold tracking-tight">{price}</p>
      <p className={`mt-1 text-sm ${highlight ? "text-paper/60" : "text-muted"}`}>{period}</p>
      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Icon name="check" size={18} className={highlight ? "text-seal-2" : "text-jade"} /> {f}
          </li>
        ))}
      </ul>
      <button onClick={onClick} className={`btn mt-8 w-full !py-3.5 ${highlight ? "btn-primary" : "btn-ghost"}`}>
        {cta}
      </button>
    </div>
  );
}
