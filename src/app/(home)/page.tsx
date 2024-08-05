import { ModeToggleButton } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-3xl text-center space-y-8 px-4">
        <h1 className="font-heading text-5xl">Welcome to My App</h1>
        <p className="font-body text-xl">
          Experience the best user interface designed with care and precision.
          Switch between light and dark modes effortlessly.
        </p>
        <ModeToggleButton />
      </div>
    </main>
  );
}