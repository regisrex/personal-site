export default function P({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <p className="text-sm text-slate-600">{children}</p>;
}