export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="p-3">Top Bar</div>
      {children}
      <div className="p-3">Footer</div>
    </div>
  );
}
