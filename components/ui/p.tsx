export default function P({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <p className="text-gray-600">{children}</p>;
}