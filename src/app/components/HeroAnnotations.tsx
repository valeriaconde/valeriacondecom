"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Currently = { emoji: string; label: string; value: string };


function Card({ emoji, label, value, rotate }: Currently & { rotate: string }) {
  return (
    <div className={`${rotate} bg-white border border-border rounded-2xl px-4 py-3.5 shadow-sm w-[170px] shrink-0`}>
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text mb-1.5">{emoji} {label}</p>
      <p className="font-heading text-sm italic text-foreground leading-snug">{value}</p>
    </div>
  );
}

export default function HeroAnnotations({ currentlies }: { currentlies: Currently[] }) {
  const [latestNote, setLatestNote] = useState<string | null>(null);

  const reading  = currentlies.find(c => c.label === "Reading");
  const watching = currentlies.find(c => c.label === "Watching");
  const listening = currentlies.find(c => c.label === "Listening");

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("notes")
      .select("content")
      .order("created_at", { ascending: false })
      .limit(1)
      .single()
      .then(({ data }) => { if (data) setLatestNote(data.content); });
  }, []);

  return (
    <>
      {/* Arrow images — drop into /public/arrows/ */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/arrows/arrow-reading.png"   alt="" className="hidden lg:block absolute left-[17%] top-[18%]  w-20 rotate-[20deg]  pointer-events-none select-none" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/arrows/arrow-listening.png" alt="" className="hidden lg:block absolute left-[17%] top-[62%]  w-20 -rotate-[25deg] pointer-events-none select-none" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/arrows/arrow-watching.png"  alt="" className="hidden lg:block absolute right-[17%] top-[65%] w-20 rotate-[15deg]  pointer-events-none select-none" />

      {/* Reading — left, upper */}
      {reading && (
        <div className="hidden lg:block absolute left-[2%] xl:left-[4%] top-[20%]">
          <Card {...reading} rotate="rotate-2" />
        </div>
      )}

      {/* Listening — left, lower */}
      {listening && (
        <div className="hidden lg:block absolute left-[2%] xl:left-[4%] top-[65%]">
          <Card {...listening} rotate="-rotate-3" />
        </div>
      )}

      {/* Latest thought — right, upper */}
      {latestNote && (
        <div className="hidden lg:flex absolute right-[2%] xl:right-[4%] top-[8%] items-end gap-3">
          {/* Thought bubbles — large at card corner, smaller ones step down-left */}
          <div className="relative w-24 h-8 shrink-0 overflow-visible">
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-white border border-border" />
            <div className="absolute -bottom-3 right-10 w-3.5 h-3.5 rounded-full bg-white border border-border" />
            <div className="absolute -bottom-6 right-[4.5rem] w-2.5 h-2.5 rounded-full bg-white border border-border" />
          </div>
          <Link href="/notes" className="group">
            <div className="rotate-2 bg-white border border-border rounded-2xl px-4 py-3.5 shadow-sm w-[170px] group-hover:border-accent transition-colors duration-200">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text mb-1.5">💭 thinking</p>
              <p className="font-heading text-sm italic text-foreground leading-snug line-clamp-3">{latestNote}</p>
              <p className="mt-2 text-right text-[10px] text-muted-text group-hover:text-accent transition-colors duration-200"> →</p>
            </div>
          </Link>
        </div>
      )}

      {/* Watching — right, lower */}
      {watching && (
        <div className="hidden lg:block absolute right-[2%] xl:right-[4%] top-[68%]">
          <Card {...watching} rotate="-rotate-2" />
        </div>
      )}

      {/* Mobile — vertical stack below the name */}
      <div className="lg:hidden flex flex-col items-center gap-3 w-full max-w-xs">
        {latestNote && (
          <Link href="/notes" className="group w-full">
            <div className="bg-white border border-border rounded-2xl px-4 py-3.5 w-full group-hover:border-accent transition-colors duration-200">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text mb-1.5">💭 thinking </p>
              <p className="font-heading text-sm italic text-foreground leading-snug line-clamp-3">{latestNote}</p>
            </div>
          </Link>
        )}
        {reading && (
          <div className="bg-white border border-border rounded-2xl px-4 py-3.5 w-full">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text mb-1.5">{reading.emoji} {reading.label}</p>
            <p className="font-heading text-sm italic text-foreground leading-snug">{reading.value}</p>
          </div>
        )}
        {watching && (
          <div className="bg-white border border-border rounded-2xl px-4 py-3.5 w-full">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text mb-1.5">{watching.emoji} {watching.label}</p>
            <p className="font-heading text-sm italic text-foreground leading-snug">{watching.value}</p>
          </div>
        )}
        {listening && (
          <div className="bg-white border border-border rounded-2xl px-4 py-3.5 w-full">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text mb-1.5">{listening.emoji} {listening.label}</p>
            <p className="font-heading text-sm italic text-foreground leading-snug">{listening.value}</p>
          </div>
        )}
      </div>
    </>
  );
}
