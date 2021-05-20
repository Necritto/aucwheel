import React, { useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LotInterface } from "utils/interfaces/lots";
import { LotsReducerInterface } from "utils/interfaces/redux";

import { WheelContainer } from "./styles";

const Wheel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const spinRef = useRef<HTMLDivElement>(null);

  const lots = useSelector((state: LotsReducerInterface) => state.lotsReducer.lots, shallowEqual);

  useEffect(() => {
    if (!lots.length) return;
    const canvas = canvasRef.current;
    contextRef.current = canvas!.getContext("2d");

    const rand = (m: number, M: number) => Math.random() * (M - m) + m;
    const tot = lots.length;
    const spinElem = spinRef.current;
    const ctx = contextRef.current;
    const dia = ctx!.canvas.width;
    const rad = dia / 2;
    const PI = Math.PI;
    const TAU = 2 * PI;
    const arc = TAU / lots.length;

    const friction = 0.991;
    let angVel = 0;
    let ang = 0;

    const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

    function drawSector(sector: LotInterface, i: number) {
      if (!sector) return;
      if (ctx === null) return;

      const ang = arc * i;

      ctx.save();

      ctx.beginPath();
      ctx.fillStyle = sector.color;
      ctx.moveTo(rad, rad);
      ctx.arc(rad, rad, rad, ang, ang + arc);
      ctx.lineTo(rad, rad);
      ctx.fill();

      ctx.translate(rad, rad);
      ctx.rotate(ang + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 30px sans-serif";
      ctx.fillText(sector.title, rad - 10, 10);

      ctx.restore();
    }

    function rotate() {
      const sector = lots[getIndex()];

      if (!sector) return;

      ctx!.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
      spinElem!.textContent = !angVel ? "SPIN" : sector.title;
      spinElem!.style.background = sector.color;
    }

    function frame() {
      if (!angVel) return;
      angVel *= friction;
      if (angVel < 0.002) angVel = 0;
      ang += angVel;
      ang %= TAU;
      rotate();
    }

    function engine() {
      frame();
      requestAnimationFrame(engine);
    }

    lots.forEach(drawSector);
    rotate();
    engine();
    spinElem &&
      spinElem!.addEventListener("click", () => {
        if (!angVel) angVel = rand(0.25, 0.35);
      });
  }, [lots]);

  return (
    <WheelContainer>
      {lots.length ? (
        <>
          <canvas className="wheel" width="400" height="400" ref={canvasRef} />
          <div className="spin" ref={spinRef}>
            SPIN
          </div>
        </>
      ) : (
        ""
      )}
    </WheelContainer>
  );
};

export default Wheel;
