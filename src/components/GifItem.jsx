export const GifItem = ({title, url}) => {
    return (
        <div className="card">
            <div><img src={url} alt={title} /></div>
            <div>{title}</div>
        </div>
    )
}