export enum Category {
  Investment = 'Investment',
  Business = 'Business',
  Education = 'Education',
  Personal = 'Personal'
}

export interface Rule {
  id: number;
  title: string;
  description: string;
  category: Category;
  highlight?: boolean;
}

export interface Principle {
  id: number;
  title: string;
  description: string;
  relatedRules: number[]; // IDs of related rules
  iconName: string;
}

export type ViewMode = 'list' | 'system' | 'oracle' | 'pre_mortem' | 'anti_mentor' | 'guide';