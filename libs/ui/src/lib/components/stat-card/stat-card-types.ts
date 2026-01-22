export type StatCardTrend = 'up' | 'down' | 'neutral';
export type StatCardVariant = 'default' | 'outline' | 'filled';
export type StatCardSize = 'sm' | 'md' | 'lg';

export interface StatCardData {
  label: string;
  value: string | number;
  previousValue?: string | number;
  change?: number;
  changeLabel?: string;
  trend?: StatCardTrend;
  icon?: string;
  description?: string;
}
