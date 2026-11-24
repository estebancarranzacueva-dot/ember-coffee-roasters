"use client";

import { useEffect, useRef } from "react";

// Bean shape: an ellipsoid with a curved crease down the middle.
const SIZE = { x: 1, y: 0.7, z: 0.58 };

export default function CoffeeBean({
  className = "h-[280px] w-full sm:h-[360px] lg:h-[460px]",
}: {
  className?: string;
}) {
  const holder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;

    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20);
      camera.position.set(0, 0, 5);

      scene.add(new THREE.AmbientLight(0xffffff, 1.1));
      const sun = new THREE.DirectionalLight(0xffffff, 2.4);
      sun.position.set(3, 4, 5);
      scene.add(sun);

      const bean = new THREE.Group();
      scene.add(bean);

      const body = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 48),
        new THREE.MeshStandardMaterial({ color: 0x6b3a22, roughness: 0.5 })
      );
      body.scale.set(SIZE.x, SIZE.y, SIZE.z);
      bean.add(body);

      // Crease: a thin tube that follows the surface along an S curve.
      const points: InstanceType<typeof THREE.Vector3>[] = [];
      for (let i = 0; i <= 40; i++) {
        const x = -0.88 + (1.76 * i) / 40;
        const y = 0.14 * Math.sin((x / 0.88) * Math.PI);
        const inside = 1 - (x / SIZE.x) ** 2 - (y / SIZE.y) ** 2;
        const z = SIZE.z * Math.sqrt(Math.max(inside, 0)) - 0.015;
        points.push(new THREE.Vector3(x, y, z));
      }
      const crease = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 60, 0.05, 10),
        new THREE.MeshStandardMaterial({ color: 0x1e100a, roughness: 0.8 })
      );
      bean.add(crease);

      const target = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };
      const observer = new ResizeObserver(resize);
      observer.observe(el);

      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let frame = 0;
      let spin = 0.5;

      const loop = () => {
        spin += 0.004;
        bean.rotation.y += (spin + target.x * 0.6 - bean.rotation.y) * 0.05;
        bean.rotation.x += (0.25 + target.y * 0.5 - bean.rotation.x) * 0.05;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(loop);
      };

      const apply = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointer);
        if (motion.matches) {
          // Still bean: fixed pose, no animation, no pointer tilt.
          bean.rotation.set(0.25, 0.5, 0);
          renderer.render(scene, camera);
        } else {
          window.addEventListener("pointermove", onPointer);
          frame = requestAnimationFrame(loop);
        }
      };
      motion.addEventListener("change", apply);
      apply();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointer);
        motion.removeEventListener("change", apply);
        observer.disconnect();
        scene.traverse((o) => {
          if (o instanceof THREE.Mesh) {
            o.geometry.dispose();
            (o.material as InstanceType<typeof THREE.Material>).dispose();
          }
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={holder}
      role="img"
      aria-label="A coffee bean turning slowly"
      className={className}
    />
  );
}
