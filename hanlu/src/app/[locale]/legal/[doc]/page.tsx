import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { locales } from "@/i18n/config";
import meta from "@/data/vocab/meta.json";

type Doc = { title: string; sections: [string, string][] };
const OWNER = process.env.NEXT_PUBLIC_LEGAL_ENTITY || "[Éditeur du site — à compléter]";
const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[contact@votre-domaine — à compléter]";

function docs(locale: Locale): Record<string, Doc> {
  const fr = locale === "fr";
  const srcList = (meta.sources as { name: string; url: string; license: string }[])
    .map((s) => `• ${s.name} — ${s.license} — ${s.url}`)
    .join("\n");
  return {
    privacy: {
      title: fr ? "Politique de confidentialité" : "Privacy policy",
      sections: fr
        ? [
            ["Responsable du traitement", `${OWNER}. Contact : ${CONTACT}.`],
            ["Ta progression reste chez toi", "Tes leçons, révisions, XP et réglages sont enregistrés uniquement dans le stockage local de ton navigateur (localStorage). Nous n’y avons pas accès. Tu peux les exporter ou les effacer depuis « Ma progression »."],
            ["Mesure d’audience sans cookie", "Si activée, nous utilisons Plausible Analytics, un outil européen qui ne dépose aucun cookie et ne collecte aucune donnée personnelle : pages vues, référent, pays, type d’appareil, de façon agrégée."],
            ["Analyse produit (avec ton accord)", "Uniquement si tu cliques sur « Accepter », nous utilisons PostHog (hébergement UE) pour comprendre comment les cours et exercices sont utilisés : leçons commencées/terminées, réponses justes/fausses, parcours dans le site. Un identifiant pseudonyme est stocké dans ton navigateur. Base légale : consentement. Durée : 13 mois maximum. Tu peux retirer ton accord à tout moment via « Gérer les cookies » en bas de page."],
            ["Tes droits", `Accès, rectification, effacement, opposition, portabilité : écris à ${CONTACT}. Tu peux aussi saisir la CNIL (cnil.fr).`],
            ["Pas de revente, pas de publicité", "Nous ne vendons aucune donnée et n’affichons aucune publicité."],
          ]
        : [
            ["Data controller", `${OWNER}. Contact: ${CONTACT}.`],
            ["Your progress stays with you", "Your lessons, reviews, XP and settings are stored only in your browser’s local storage. We cannot access them. You can export or erase them from “My progress”."],
            ["Cookieless traffic measurement", "When enabled, we use Plausible Analytics, an EU tool that sets no cookies and collects no personal data: page views, referrer, country, device type, in aggregate."],
            ["Product analytics (with your consent)", "Only if you click “Accept”, we use PostHog (EU hosting) to understand how courses and exercises are used: lessons started/completed, right/wrong answers, navigation paths. A pseudonymous ID is stored in your browser. Legal basis: consent. Retention: up to 13 months. Withdraw anytime via “Cookie settings” in the footer."],
            ["Your rights", `Access, rectification, erasure, objection, portability: write to ${CONTACT}. You may also complain to your data protection authority.`],
            ["No resale, no ads", "We never sell data and show no advertising."],
          ],
    },
    terms: {
      title: fr ? "Conditions d’utilisation" : "Terms of use",
      sections: fr
        ? [
            ["Éditeur", `${OWNER}. Contact : ${CONTACT}.`],
            ["Service", "Hanlu est une plateforme d’apprentissage du chinois. Les contenus gratuits sont accessibles sans compte ; les contenus Pro nécessitent un abonnement."],
            ["Abonnements", "Les abonnements se renouvellent automatiquement et peuvent être résiliés à tout moment ; la résiliation prend effet à la fin de la période en cours. Droit de rétractation de 14 jours pour les consommateurs de l’UE, sauf renonciation expresse lors de l’accès immédiat au contenu numérique."],
            ["Propriété intellectuelle", "Les cours, explications, dialogues et exercices sont la propriété de l’éditeur. Les listes de vocabulaire intègrent des données sous licences libres (voir « Sources & licences »)."],
            ["Indépendance", "Hanlu n’est pas affilié à Chinese Testing International ni au Center for Language Education and Cooperation. HSK est une marque de ses détenteurs. La réussite à l’examen n’est pas garantie."],
          ]
        : [
            ["Publisher", `${OWNER}. Contact: ${CONTACT}.`],
            ["Service", "Hanlu is a Chinese learning platform. Free content requires no account; Pro content requires a subscription."],
            ["Subscriptions", "Subscriptions renew automatically and can be cancelled anytime; cancellation takes effect at the end of the current period. EU consumers have a 14-day withdrawal right unless expressly waived upon immediate access to digital content."],
            ["Intellectual property", "Courses, explanations, dialogues and exercises belong to the publisher. Vocabulary lists include openly licensed data (see “Sources & licenses”)."],
            ["Independence", "Hanlu is not affiliated with Chinese Testing International or the Center for Language Education and Cooperation. HSK is a trademark of its owners. Exam success is not guaranteed."],
          ],
    },
    credits: {
      title: fr ? "Sources & licences" : "Sources & licenses",
      sections: [
        [fr ? "Données de vocabulaire" : "Vocabulary data", srcList],
        [
          fr ? "Licence des listes de mots" : "Word list license",
          fr
            ? "Les fichiers de vocabulaire (mots, pinyin, définitions) sont distribués sous licence CC BY-SA 4.0, conformément aux licences de CC-CEDICT et CFDICT (chine.in). Les définitions ont été raccourcies et adaptées."
            : "The vocabulary files (words, pinyin, definitions) are distributed under CC BY-SA 4.0, as required by the CC-CEDICT and CFDICT (chine.in) licenses. Definitions were shortened and adapted.",
        ],
        [
          fr ? "Ordre des traits" : "Stroke order",
          fr
            ? "Animations par Hanzi Writer (MIT, Chanind) ; données de traits issues de Make Me a Hanzi (Arphic Public License)."
            : "Animations by Hanzi Writer (MIT, Chanind); stroke data from Make Me a Hanzi (Arphic Public License).",
        ],
        [
          fr ? "Référentiel" : "Standard",
          fr
            ? "Niveaux et chiffres : norme GF0025-2021 « 国际中文教育中文水平等级标准 » (Ministère de l’Éducation de la RPC) et programme d’examen HSK 2025 (CLEC)."
            : "Levels and figures: standard GF0025-2021 “国际中文教育中文水平等级标准” (PRC Ministry of Education) and the 2025 HSK exam syllabus (CLEC).",
        ],
        [fr ? "Révisions" : "Spaced repetition", "ts-fsrs (MIT) — Free Spaced Repetition Scheduler."],
      ],
    },
  };
}

export function generateStaticParams() {
  return locales.flatMap((locale) => ["privacy", "terms", "credits"].map((doc) => ({ locale, doc })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/legal/[doc]">): Promise<Metadata> {
  const { locale, doc } = await params;
  const d = docs(locale as Locale)[doc];
  return d ? { title: d.title } : {};
}

export default async function LegalPage({ params }: PageProps<"/[locale]/legal/[doc]">) {
  const { locale, doc } = await params;
  const d = docs(locale as Locale)[doc];
  if (!d) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">{d.title}</h1>
      <div className="mt-10 space-y-8">
        {d.sections.map(([h, b]) => (
          <section key={h}>
            <h2 className="text-lg font-semibold">{h}</h2>
            <p className="mt-2 leading-relaxed whitespace-pre-line text-ink-2">{b}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
