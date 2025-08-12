import { Room } from "@/app/Room";
import { TextEditor } from "@/components/TextEditor";

export default function TextEditorPage() {
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <Room>
        <TextEditor />
      </Room>
    </main>
  );
}
