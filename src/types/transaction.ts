export type Transaction = {
  id: string;
  amount: number;
  type: 'expense' | 'income';
  date: Date;
  note?: string;
};
