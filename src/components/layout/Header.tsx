import { APP_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-background">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-xl font-semibold text-foreground">{APP_NAME}</h1>
      </div>
    </header>
  );
}
