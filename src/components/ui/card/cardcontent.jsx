export default function CardContent({ children, className = "" }) {
  return <div className={`text-sm ${className}`}>{children}</div>;
}
