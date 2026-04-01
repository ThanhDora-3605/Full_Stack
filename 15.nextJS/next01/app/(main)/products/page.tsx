import InputFiler from "./_components/InputFiler";
import Button from "./Button";

export const metadata = {
    title: "Products Page",
    description: "Products Page",
}

type Props = {
    searchParams: { status?: string }
}

export default function ProductsPage({ searchParams }: Props) {
    const status = searchParams.status ?? "";
    return (
        <div>
            <h1 className="text-2xl font-bold">ProductsPage</h1>
            <p className="text-gray-500">Status: {status}</p>
            <Button />
            <InputFiler />
        </div>
    )
}
