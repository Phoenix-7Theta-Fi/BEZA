import type { SVGProps } from 'react';

export function EngageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
      <circle cx="12" cy="10" r="2"></circle>
      <line x1="8" y1="2" x2="8" y2="4"></line>
      <line x1="16" y1="2" x2="16" y2="4"></line>
    </svg>
  );
}
