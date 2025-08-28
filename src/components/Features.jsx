import { Aperture, Hourglass, Sparkle } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Aperture,
      title: 'Mystic Circle',
      desc: 'A golden ray carves a living circle in space — the core of Strange\'s sigils rendered in real time.'
    },
    {
      icon: Hourglass,
      title: 'Temporal Weave',
      desc: 'Feel time stretch and fold as the scene flows, echoing the Eye of Agamotto\'s power.'
    },
    {
      icon: Sparkle,
      title: 'Arcane Glow',
      desc: 'Subtle halos and gradients illuminate the darkness, guiding your focus to the ritual.'
    }
  ];

  return (
    <section id="lore" className="relative border-t border-white/5 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Enter the Sanctum</h2>
          <p className="mt-3 text-gray-300">
            A minimal, cinematic page that channels the energy of the Sorcerer Supreme.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-yellow-400/30 hover:bg-yellow-400/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-yellow-300 group-hover:border-yellow-300/50">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{desc}</p>
            </div>
          ))}
        </div>

        <div id="artifacts" className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold text-white">Relics of the Sanctum</h3>
          <p className="mt-2 text-gray-300">
            From the Cloak of Levitation to the fabled Eye, every artifact tells a story. This space is crafted to celebrate the magic — anchored by the living circle drawn with a radiant yellow beam.
          </p>
        </div>
      </div>
    </section>
  );
}
