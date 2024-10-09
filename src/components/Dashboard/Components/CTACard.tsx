import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTACardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const CTACard: React.FC<CTACardProps> = ({ title, subtitle, children }) => {
  return (
    <div>CTACard</div>
  )
}

export default CTACard