
export default function DateExpires({fechaExpire, nameBanco}) { 

    return ( 
        <> 
            <div className="CardGreenDate"> 
                <p>{fechaExpire}</p> 
                <p>{nameBanco}</p> 
            </div>
        </>
    )
    
}