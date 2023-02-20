"use client";

import Progress from "@/components/Progress";
import { useState } from "react";

export default function Home() {
  const [currentQ, setCurrentQ] = useState(1);

  return (
    <main>
      <div className="absolute">MENU</div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Progress totalQ={20} currentQ={currentQ} />
        </div>
        <div>質問タイトル</div>
        <div>質問文</div>
        <div>賛成反対</div>
        <div>メリデメ</div>
        <button
          className="p-1 border"
          onClick={() => setCurrentQ((prev) => prev + 1)}
        >
          次の質問
        </button>
      </div>
    </main>
  );
}
