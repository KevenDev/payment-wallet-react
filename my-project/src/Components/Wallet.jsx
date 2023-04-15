import { useEffect } from 'react'
import { useState } from 'react'

const Wallet = () =>{

 const [data, setData] = useState([])
 const [load, setLoad] = useState(false)
  
  useEffect(() => {
      setLoad(true)
      fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd').then(res => res.json()).then((response) => {
      setData([response])
      setLoad(false)
      console.log(data);
    }) 
  },[])
  if(load){
    return(
      <div>Carregando</div>
    )
  }
    return(
      <>
        <section className="w-screen h-screen flex-column mt-4  ">
            {
              data.length > 0 && (
                <>
                <div className="h-[50%] w-[100%]flex flex-col justify-center items-center border-2 border-[#CCCCCC] border-solid ">
                  {data[0].items?.map((items)=>(
                  <div className="w-full flex justify-between items-center">
                    <img src={items.product.imageObjects[0].small}  className='' alt="" />
                    <p className='text-xs w-[12rem] font-bold'> {items.product.name}</p>
                    <span className='font-bold p-1 mr-1'>RS$ {items.product.priceSpecification.price}</span>
                  </div>
                ))
              }</div>
           <div className="w-[90%] flex flex-col py-4 ml-5 text-lg ">
             <div className='flex justify-between'>
               <p>Produtos</p>
               <p>R$ {data[0].subTotal}</p>
            </div>
             <div className='flex justify-between mt-2' >
               <p>Frete: </p>
               <p>R$ {data[0].shippingTotal}</p>
             </div>
             <div className='flex justify-between mt-2'>
               <p>Desconto:</p>
              <p className='text-[#9222DC] font-bold'>R$ {data[0].discount}</p>
             </div>
             <div className='flex justify-between mt-2'>
               <p className='font-bold '>Subtotal</p>
              <p>R$ {data[0].total}</p>
             </div>
          </div>
          <div className='flex justify-center items-center' >
            <button className='bg-[#9222DC] h-[3.5rem] w-[90%] rounded-lg text-white p-3 text-xl mt-5'>Seguir para o pagamento</button>
          </div>
          </>
        )}
        </section>
      </>   
    )
}


export default Wallet;