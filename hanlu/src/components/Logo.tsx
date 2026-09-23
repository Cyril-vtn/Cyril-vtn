export default function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid place-items-center rounded-[10px] bg-seal font-han font-black text-white shadow-[0_6px_14px_-6px_var(--seal)] ${
          small ? "h-7 w-7 text-base" : "h-9 w-9 text-xl"
        }`}
      >
        汉
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">
        Hanlu<span className="ml-1 font-han text-sm font-normal text-muted">汉路</span>
      </span>
    </span>
  );
}
