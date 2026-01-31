/**
 * Shared TypeScript types for the AI Expense Tracker app.
 * Add expense, chart, and AI-related types here as you build features.
 */

export type ExpenseCategory =
  | "food"
  | "transport"
  | "shopping"
  | "bills"
  | "entertainment"
  | "health"
  | "other";

export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  description: string;
  date: string;
  createdAt: string;
}

export interface ExpenseSummary {
  total: number;
  byCategory: Record<ExpenseCategory, number>;
  period: string;
}
