import clsx from 'clsx';

export function Card({ children, className = '', forceRounded = false }) {
  return (
    <div
      className={clsx(
        forceRounded ? 'rounded-xl' : 'rounded-none sm:rounded-xl',
        'border bg-white ',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`border-b p-3 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
