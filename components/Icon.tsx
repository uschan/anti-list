import React, { memo } from 'react';
import { 
  CircleOff, 
  TrendingUp, 
  Hourglass, 
  Users, 
  RefreshCcw, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  User, 
  LayoutGrid,
  Search,
  BookOpen,
  Skull,
  FileWarning,
  Activity,
  MessageSquareX,
  ChevronRight,
  Cpu,
  Globe,
  Zap,
  Quote,
  Star,
  CheckCircle2,
  Twitter,
  Github,
  Instagram,
  Gamepad2,
  CreditCard,
  Cloud,
  Tent,
  FileText,
  HelpCircle
} from 'lucide-react';

const icons: Record<string, React.FC<any>> = {
  CircleOff,
  TrendingUp,
  Hourglass,
  Users,
  RefreshCcw,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  User,
  LayoutGrid,
  Search,
  BookOpen,
  Skull,
  FileWarning,
  Activity,
  MessageSquareX,
  ChevronRight,
  Cpu,
  Globe,
  Zap,
  Quote,
  Star,
  CheckCircle2,
  Twitter,
  Github,
  Instagram,
  Gamepad2,
  CreditCard,
  Cloud,
  Tent,
  FileText,
  HelpCircle
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = memo(({ name, size = 24, className, strokeWidth }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent size={size} className={className} strokeWidth={strokeWidth} /> : null;
});