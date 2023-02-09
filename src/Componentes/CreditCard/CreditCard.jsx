
export default function TarjetaCredito({className, type, number, expirationMonth, expirationYear, bank, owner }) {
    
    return ( 
        <> 
            <div className={className}> 
                <h1 className="title">{type}</h1> 
                <p className="number">{number}</p> 
                <div className="date"> 
                    <p>{"Expires"}</p>
                    <p className="month">{expirationMonth}/</p> 
                    <p className="year">{expirationYear}</p> 
                    <p className="bank">{bank}</p> 
                </div> 
                <h2 className="owner">{owner}</h2>
            </div>
        </>
    )
} 



