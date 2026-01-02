import type { ReactNode } from "react";

interface TabContentProps {
  children: ReactNode;
  isActive: boolean;
}

export const TabContent = ({ children, isActive }: TabContentProps) => {
  if (!isActive) return null;

  return <div className="animate-fade-in">{children}</div>;
};
