import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="font-han text-8xl text-seal">迷路</p>
      <h1 className="mt-6 font-display text-4xl font-semibold">404</h1>
      <p className="mt-3 text-ink-2">Page introuvable · Page not found</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/fr" className="btn btn-ghost">Accueil</Link>
        <Link href="/en" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
}
