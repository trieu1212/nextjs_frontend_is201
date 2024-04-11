import OnePost from "@/app/(home)/post/[id]/one-post";


export default function Page({ params }: { params: { id: string } }) {
    return (
      <>
      <h1>đây là bài viết</h1>
        <OnePost id={params.id} />
      </>
    )
  }