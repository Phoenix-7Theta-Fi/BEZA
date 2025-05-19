import type { SVGProps } from 'react';

export function BezaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="40"
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BEZA Logo"
      {...props}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
          .beza-logo-text {
            font-family: 'Montserrat', var(--font-geist-sans), sans-serif;
            font-weight: 700;
            font-size: 28px;
            fill: hsl(var(--primary));
          }
          .beza-logo-dot {
            fill: hsl(var(--accent));
          }
        `}
      </style>
      <text x="5" y="30" className="beza-logo-text">
        BEZA
      </text>
      <circle cx="90" cy="15" r="5" className="beza-logo-dot" />
    </svg>
  );
}
