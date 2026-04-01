import PostsDetilPage from "./PostsDetil";
import PostsListPage from "./PostsList";

type Props = {
    params: { id?: string[] }
}

export default function PostsPage({ params }: Props) {
    const id = params.id;
    if (!id?.length) {
        return <PostsListPage />
    }
    return <PostsDetilPage id={id.join("/")} />
}
