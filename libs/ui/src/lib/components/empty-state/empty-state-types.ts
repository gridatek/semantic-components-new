export type EmptyStateSize = 'sm' | 'md' | 'lg';

export interface EmptyStateAction {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
}
