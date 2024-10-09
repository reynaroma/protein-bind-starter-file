import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTACardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const CTACard: React.FC<CTACardProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <div>
        <div>
          <h4>
            {title}
          </h4>
          <span>{subtitle}</span>
        </div>
      </div>
      <div>
        <span>
          <ArrowRight />
        </span>
      </div>
    </div>
  )
}

export default CTACard