type Props = {
    params: { id: string[] }
}

export default function ProductDetailPage({ params }: Props) {
    const id = params.id.join("/");
    return (
        <div>
            <h1 className="text-2xl font-bold">ProductDetailPage: {id}</h1>
        </div>
    )
}
