import { Room } from "@/app/Room";
import { StorageTldraw } from "@/components/StorageTldraw";

export default function TldrawPage() {
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <Room>
        <StorageTldraw />
      </Room>
    </main>
  );
}
