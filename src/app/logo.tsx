export const LogoIcon = ({ className }: { className?: string }) => {
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
      className={className}
    >
      <title>Lastio</title>
      <circle cx="12" cy="12" r="10" />
      <polyline points="15 6.8 12 12 8 10" />
    </svg>
  );
};
