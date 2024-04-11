import OnePost from "@/app/(home)/post/[id]/one-post";


export default function Page({ params }: { params: { id: string } }) {
    return (
      <>
        <OnePost id={params.id} />
      </>
    )
  }