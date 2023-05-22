



export default async function AlbumPage({ params: { albumId } }: {params: {albumId: string}}) {
    return <h1 className="m-auto text-white">{albumId}</h1>
}