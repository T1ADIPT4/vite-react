// src/pages/QuestBoard.tsx
import { useContracts } from "../hooks/useContracts";
import { useState } from "react";

export default function QuestBoard() {
  const { questManager } = useContracts();
  const [status, setStatus] = useState("");

  const startQuest = async () => {
    try {
      const tx = await questManager.startQuest(1); // เควสต์ ID 1
      await tx.wait();
      setStatus("🎯 เควสต์เริ่มแล้ว! MeeBot กำลังติดตามความก้าวหน้าของคุณ...");
    } catch (err) {
      setStatus("⚠️ เริ่มเควสต์ไม่สำเร็จ... MeeBot กำลังตรวจสอบบั๊กให้คุณอยู่!");
    }
  }

  return (
    <div className="quest-board">
      <h2>🧙‍♂️ เควสต์วันนี้</h2>
      <button onClick={startQuest}>เริ่มเควสต์: Mint Badge</button>
      <p>{status}</p>
    </div>
  );
}
