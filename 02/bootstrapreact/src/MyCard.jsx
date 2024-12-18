import React from "react"

function MyCard(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>  
            <img src="https://picsum.photos/200" className="card-img-top" alt="Card image" />  
            <div className="card-body">  
                <h5 className="card-title">{props.title}</h5>  
                <p className="card-text">  
                    Some quick example text to build on the card title and make up the bulk of the card’s content.  
                </p>  
                <a href="#" className="btn btn-primary">{props.button}</a>  
            </div>  
        </div>
    )
}

export default MyCard