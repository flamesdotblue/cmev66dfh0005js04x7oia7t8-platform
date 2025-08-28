import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        {/* Vignette + tint for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,222,0,0.10),rgba(0,0,0,0.85))] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
        {!isLoaded && (
          <div className="absolute inset-0 grid place-items-center bg-black">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl" />
              <div className="h-16 w-16 animate-spin rounded-full border-2 border-yellow-300 border-t-transparent" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
            The Mystic Arts Return
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Doctor Strange: Circle of Spells
          </h1>
          <p className="mt-4 text-pretty text-base text-gray-200 sm:text-lg">
            A dark, immersive landing where a golden ray etches a living circle into the void.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#artifacts"
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-400/30 transition hover:shadow-yellow-400/40"
          >
            Explore the Artefacts
          </a>
          <a
            href="#lore"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.08]"
          >
            Read the Lore
          </a>
        </div>
      </div>
    </section>
  );
}
