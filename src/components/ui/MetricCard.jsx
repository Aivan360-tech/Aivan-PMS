export default function MetricCard({ title, value, icon: Icon, accent, note }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-normal text-slate-950">{value}</p>
        </div>
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${accent}`}>
          <Icon className="text-xl" />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{note}</p>
    </article>
  );
}
