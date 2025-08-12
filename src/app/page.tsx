import Link from "next/link";
import { Edit3, PenTool } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="main-container">
      <h1 className="title">For collaborating with the team</h1>
      <h2 className="sub-title">Choose the tools that suit you</h2>

      <div className="card-row">
        <Link href="/texteditor" className="card blue-card" target="_blank">
          <div className="icon-circle blue-icon">
            <Edit3 size={48} className="icon" />
          </div>
          <span className="card-label">Text Editor</span>
        </Link>

        <Link href="/whiteboard" className="card green-card" target="_blank">
          <div className="icon-circle green-icon">
            <PenTool size={48} className="icon" />
          </div>
          <span className="card-label">Whiteboard</span>
        </Link>
      </div>
    </main>
    </>
  );
}
