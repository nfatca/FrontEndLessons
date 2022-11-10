import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 p-2">
            {
                data?.map(item => {
                    return (
                        <div className="col" key={item.id}>
                            <div className="card" style={{ minHeight: "400px", maxHeight: "400px" }}>
                                <img src={`https://avatars.dicebear.com/v2/avataaars/${item.id}.svg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {item.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card