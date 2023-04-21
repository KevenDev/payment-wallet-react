import { useAtom } from 'jotai'
import { useEffect,useState } from 'react'
import { dataAtom } from '../states/StatesAtom'
import { Link } from 'react-router-dom'

const Wallet = () =>{

 const [data, setData] = useAtom(dataAtom)
 const [load, setLoad] = useState(false)

  useEffect(() => {
      setLoad(true)
      fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd').then(res => res.json()).then((response) => {
      setData([response])
      localStorage.setItem('data', JSON.stringify([response]))
      setLoad(false)
      console.log(response);
    }) 
  },[])
  if(load){
    return(
      <div className='flex justify-center items-center h-screen'>
        <div className=" text-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...
          </span>
        </div>
      </div>
    )
  }
    return(
      <>
        <section className="md:h-[100vh] md:grid md:place-items-center w-screen h-full flex-column md:mt-6 mt-4  ">
            {
              data.length > 0 && (
                <>
                <div className="md:shadow-md  md:flex md:h-full md:w-[70%] md:place-items-center h-[40%] w-[100%]flex flex-col border-2 border-[#eeeeee] border-solid ">
                  {data[0].items?.map((items,index)=>(
                  <div key={index} className="w-full h-full flex justify-between items-center ">
                    <img src={items.product.imageObjects[0].small} className='md:h-[7rem]  h-[6rem] mb-2' alt="" />
                    <p className='text-xs w-[12rem] md:w-1/3 md:text-xl font-bold'> {items.product.name}</p>
                    <span className='md:text-xl font-bold px-2 mr-1'>RS$ {items.product.priceSpecification.price}</span>
                  </div>
                ))
              }</div>
           <div className="md:shadow-md flex flex-col px-4 py-4 text-lg md:w-[70%] md:h-[70%] md:text-xl">
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
          <div className='md:justify-center md:flex md:w-full flex justify-center items-center md:text-xl' >
          <Link to='/payment'> <button className='bg-[#9222DC] h-[3.5rem] w-[80vw] rounded-xl md:w-[40vw]  text-white p-3 text-xl mt-5'>Seguir para o pagamento</button> </Link>
          </div>
          </div>
          </>
        )}
        </section>
      </>   
    )
}


export default Wallet;