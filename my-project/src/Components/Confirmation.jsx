import { dataAtom, userCardName, userNumberCard, userDateCard } from "../states/StatesAtom";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

const Confirmation = ()=>{

    const[data,setData] = useAtom(dataAtom);
    const [cardNumber, setCardNumber] = useAtom(userNumberCard);
    const [cardName, SetCardName] = useAtom(userCardName)
    const [dateCard, setDateCard] = useAtom(userDateCard)
    console.log(cardNumber);

    return(
        <>
        <section className="w-screen h-[100%] mt-4 ">
        <div className="flex flex-col p-4 justify-center items-center border-2 border-[#CCCCCC] border-solid">
            <h1 className="text-2xl"> Compra Efetuada com sucesso</h1>
            <p className="text-xl text-[#515151]">{`****.****.****.${cardNumber.slice(12,16)}`}</p>
            <span className=" text-[#515151]">{cardName}</span>
            <span className=" text-[#515151]">{dateCard}</span>
        </div>

        <div>
            
        {
              data.length > 0 && (
                <>
                <div className="h-[50%] w-[100%]flex flex-col border-2 border-[#CCCCCC] border-solid p-4 mt-4">
                <h1 className="text-xl">Produtos</h1>
                  {data[0].items?.map((items,index)=>(
                  <div key={index} className="w-full h-full flex justify-between items-center ">
                    <img src={items.product.imageObjects[0].small} className='h-[6rem] mb-2' alt="" />
                    <p className='text-xs w-[15rem] font-bold'> {items.product.name}</p>
                  </div>
                ))
              }</div>
              <div className=" flex flex-col px-4 py-4 text-lg ">
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
               <p className='font-bold'>Subtotal</p>
              <p className="font-bold">R$ {data[0].total}</p>
             </div>
          </div>
          <div className='flex justify-center items-center' >
          <Link to='/'> <button className='bg-[#000000] h-[3.5rem] w-[80vw] rounded-lg text-white p-3 text-xl mt-5'>Voltar ao início do protótipo</button> </Link>
          </div>
          </>
        )}
        </div>
    </section>
      </>
    )
}

export default Confirmation;