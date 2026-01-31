import { ExpenseList } from "@/features/expenses/components/ExpenseList";
import { ExpenseChart } from "@/features/charts/components/ExpenseChart";
import { AIAdvice } from "@/features/ai/components/AIAdvice";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            AI Expense Tracker
          </h1>
          <p className="mt-2 text-muted-foreground">
            Track daily expenses, visualize with charts, and get AI-generated
            financial advice.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExpenseList />
          <ExpenseChart />
          <AIAdvice />
        </div>
      </div>
    </main>
  );
}
