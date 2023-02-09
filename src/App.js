import './App.css'; 
import NameB from './Componentes/Header/Header'; 
import NumberCard from './Componentes/NumeroTarjeta/NumeroTarjeta'; 
import DateExpires from './Componentes/FechaVencimiento/FechaVencimiento'; 
import NameUser from './Componentes/NameUsers/NameUser'; 
import TarjetaCredito from './Componentes/CreditCard/CreditCard'

function App() { 

  return ( 
    <> 
    <article className='containerPrincipal'>  
        <TarjetaCredito
          type = 'Visa' 
          number = '.... .... .... 8845' 
          expirationMonth = '03' 
          expirationYear = '21' 
          bank = 'BNP' 
          owner = 'Maxence Bouret' 
          className="green"/> 

          <TarjetaCredito 
          type = 'Mastercard' 
          number = '.... .... .... 0995' 
          expirationMonth = '03' 
          expirationYear = '21' 
          bank = 'N26' 
          owner = 'Maxence Bouret' 
          className="grey"/> 

          <TarjetaCredito 
          type = 'Visa' 
          number = '.... .... .... 6984' 
          expirationMonth = '12' 
          expirationYear = '19' 
          bank = 'Name of the Bank' 
          owner = 'Firstname Lastname' 
          className="yellow"/>
    </article>


    <br>
    </br>

    <section className='card'> 
      <div className="CardGreen"> 
        <NameB nameBanc={"Visa"}/> 
        <NumberCard numTarjeta={".... .... .... 8845"} /> 
        <DateExpires fechaExpire={"Expires 03/21"} nameBanco={"BNP"}/> 
        <NameUser nameUsuario={"Maxence Bouret"} />
      </div> 

      <div className="CardGrey"> 
        <NameB nameBanc={"MasterCard"}/> 
        <NumberCard numTarjeta={".... .... .... 0995"} />
        <DateExpires fechaExpire={"Expires 03/21"} nameBanco={"N26"}/> 
        <NameUser nameUsuario={"Maxence Bouret"} />
      </div> 

      <div className="Yellow"> 
        <NameB nameBanc={"Visa"}/> 
        <NumberCard numTarjeta={".... .... .... 6984"} />
        <DateExpires fechaExpire={"Expires 12/19"} nameBanco={"Name of the Bank"}/> 
        <NameUser nameUsuario={"FirstName LastName"} />
      </div> 
    </section>
    </>
  );
}




export default App;
