import { useState } from "react";
import { useAtom } from "jotai";
import { dataAtom, userCardName, userDateCard, userNumberCard} from "../states/StatesAtom";

const Payment = () => {
  const [data, setData] = useAtom(dataAtom);
  const [cardNumber, setCardNumber] = useAtom(userNumberCard);
  const [cardName, SetCardName] = useAtom(userCardName)
  const [dateCard, setDateCard] = useAtom(userDateCard)
  const [isValid, setIsValid] = useState(true);

  const span = document.querySelectorAll('.span')

  const handleSubmit = (e) =>{
    validateForm()
    e.preventDefault()
  } 

  const validateForm = (e) =>{
    cardNumber.length != 16 ? setIsValid(false) : setIsValid(true)  
  } 


  return (
    <section className="w-screen h-[90vh] flex flex-col mt-4">
    <form onSubmit={handleSubmit}>
      <div className="w-screen h-[60%]  border-2 border-[#CCCCCC] border-solid p-4 font-mediun">
        <h1 className="text-2xl">Cartão de crédito</h1>
        <label className="flex flex-col mt-4 text-[#515151]">
          Número:
          <input onChange={(e)=> setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000"  className={`h-[2.5rem] p-3 rounded-md border-2 ${isValid ? 'border-[#d6d6d6]' : 'border-red-500'} border-solid`} 
          type="text" />
          {isValid ? null: <span className="text-red-500">insira um número de cartão válido</span> }
        </label>
        <label className="flex flex-col mt-4 text-[#515151]">
          Nome do titular do cartão:
          <input onChange={(e) =>SetCardName(e.target.value)} placeholder="Nome impresso no cartão" className=" p-3 rounded-md border-2 border-[#d6d6d6] border-solid h-[2.5rem]" type="text" name="name" />
          <span className="">insira um nome cartão válido</span>
        </label>
        
        <div className="flex gap-4 mt-4 text-[#515151]">
          <label>
            Data de validade:
            <input onChange={(e)=> setDateCard(e.target.value)} placeholder="MM/AA" className="h-[2.5rem] p-3 rounded-md border-2 border-[#d6d6d6] border-solid  w-[10rem]" type="text" name="name" />
          </label>
          <label>
            Código CVV:
            <input  placeholder="000" className="h-[2.5rem] rounded-md border-2 border-[#d6d6d6] border-solid p-3  w-[10rem]" type="text" name="name" />
          </label>
        </div>
      </div>
      {data.length > 0 && (
        <>
          <div className="flex flex-col px-4 py-4 text-lg ">
            <div className="flex justify-between">
              <p>Produtos</p>
              <p>R$ {data[0].subTotal}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Frete: </p>
              <p>R$ {data[0].shippingTotal}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Desconto:</p>
              <p className="text-[#9222DC] font-bold">R$ {data[0].discount}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-bold ">Subtotal</p>
              <p>R$ {data[0].total}</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="bg-[#9222DC] h-[3.5rem] w-[80vw] rounded-lg text-white p-3 text-xl mt-5">
              Finalizar pedido
            </button>
          </div>
        </>
      )}
    </form>
    </section>
  );
};

export default Payment;
