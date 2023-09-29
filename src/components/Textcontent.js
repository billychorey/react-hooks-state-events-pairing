function Textcontent({video}) {
    return (
        <>
            <h1>{video.title}</h1>
            <p>
                <span>{video.views} Views | </span>
                <span>Uploaded {video.createdAt}</span>
            </p>
        </>

    )
}

export default Textcontent;