import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [viewerLoaded, setViewerLoaded] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    const existing = document.querySelector('script[data-spline-viewer]');
    if (existing) {
      loadedRef.current = true;
      setViewerLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-spline-viewer', 'true');
    script.onload = () => {
      loadedRef.current = true;
      setViewerLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[100px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-12 sm:pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
            The Mystic Arts Return
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Doctor Strange: Circle of Spells
          </h1>
          <p className="mt-4 text-pretty text-base text-gray-300 sm:text-lg">
            A dark, immersive landing experience centered on a living circle etched by a golden ray. Watch the arcane energy weave itself into existence.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-5xl">
          {/* Glowing ring frame */}
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-b from-yellow-400/20 to-transparent opacity-80 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-white/10">
              {/* Spline Viewer */}
              <div className="relative h-[60vh] min-h-[420px] w-full bg-[radial-gradient(ellipse_at_center,rgba(255,222,0,0.06),rgba(0,0,0,0.6))]">
                {viewerLoaded ? (
                  // eslint-disable-next-line react/no-unknown-property
                  <spline-viewer
                    loading="eager"
                    class="h-full w-full"
                    url="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
                  ></spline-viewer>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl" />
                      <div className="h-16 w-16 animate-spin rounded-full border-2 border-yellow-300 border-t-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#artifacts" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-400/30 transition hover:shadow-yellow-400/40">
            Explore the Artefacts
          </a>
          <a href="#lore" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.08]">
            Read the Lore
          </a>
        </div>
      </div>
    </section>
  );
}
