import { ModeToggleButton } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-heading">Hello</h1>
      <span className="font-body">This is body font</span>
      <ModeToggleButton />
    </main>
  );
}
