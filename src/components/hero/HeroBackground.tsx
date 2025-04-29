"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const HeroBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#161616" },
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "canvas" as const,
        events: {
          onClick: { enable: true, mode: "push" },
        },
      },

      particles: {
        number: { value: 300 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 1 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "top" as const,
          outModes: {
            default: "out" as const,
          },
        },
        collisions: {
          enable: true,
          mode: "bounce" as const,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      className={`transition-opacity duration-800 ${
        init ? "opacity-100" : "opacity-0"
      }`}
      options={options}
    />
  );
};

export default HeroBackground;
