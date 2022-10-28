

const Card = (data) => {
    console.log("ne geliyo",data);
    const {title, image, desc} = data;
    return(
        <div className="cards">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <img src={image} alt="" />
            <div className="card-over">
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Card;