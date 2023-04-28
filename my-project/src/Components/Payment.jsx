import { useState } from "react";
import { useAtom } from "jotai";
import { dataAtom, userCardName, userCvvCard, userDateCard, userNumberCard} from "../states/StatesAtom";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [data, setData] = useAtom(dataAtom);
  const [cardNumber, setCardNumber] = useAtom(userNumberCard);
  const [cardName, SetCardName] = useAtom(userCardName)
  const [dateCard, setDateCard] = useAtom(userDateCard)
  const [isValid, setIsValid] = useState(true);
  const [cvc, setCvc] = useAtom(userCvvCard)
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    validateForm();
  } 

  const validateForm = () =>{
    let isValidForm = true;
  
    if (cardNumber.length !== 16) {
      setIsValid(false);
      isValidForm = false;
    }

    if (cardName.length === 0) {
      setIsValid(false);
      isValidForm = false;   
    }

    if(dateCard.length != 4){
      setIsValid(false);
      isValidForm = false;   
    }
    if(cvc.length != 3){
      setIsValid(false);
      isValidForm = false;   
    }

    isValidForm ? navigate("/confirmPayment") : setIsValid(false);
  } 

  return (
    <section className=" w-screen h-[90vh] flex flex-col mt-2">
    <form onSubmit={handleSubmit}>
      <div className="md:border-none md:w-[30%] md:mx-auto md:mt-2 w-screen h-[60%]  border-2 border-[#CCCCCC] border-solid p-4 font-mediun">
        <h1 className="text-2xl">Cartão de crédito</h1>
        <label className="md:mt-5 flex flex-col mt-1 text-[#515151]">
          Número:
          <input maxLength={16} onChange={(e)=> setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000"  className={`h-[2.5rem] p-3 rounded-md border-2 ${isValid ? 'border-[#d6d6d6]' : 'border-red-500'} border-solid`} 
          type="text" />
          {isValid ? null: <span className="text-red-500">insira um número de cartão válido</span> }
        </label>
        <label className=" md:mt-5 flex flex-col mt-4 text-[#515151]">
          Nome do titular do cartão:
          <input onChange={(e) =>SetCardName(e.target.value)} placeholder="Nome impresso no cartão" className=" p-3 rounded-md border-2 border-[#d6d6d6] border-solid h-[2.5rem]" type="text" name="name" />
          {isValid ? null: <span className=" text-red-500">insira um número de cartão válido</span> }
        </label>
        
        <div className="flex gap-4 mt-4 text-[#515151]">
          <label className="md:mt-3">
            Data de validade:
            <input maxLength={4} onChange={(e)=> setDateCard(e.target.value)} placeholder="MM/AA" className="md:h-[2.2rem] h-[2.5rem] p-3 rounded-md border-2 border-[#d6d6d6] border-solid  w-[10rem]" type="text" name="name" />
            {isValid ? null: <span className="text-red-500">insira um número de cartão válido</span> }
          </label>
          <label className="md:mt-3">
            Código CVV:
            <input maxLength={3} onChange={(e)=>setCvc(e.target.value)} placeholder="000" className="md:h-[2.2rem] h-[2.5rem] rounded-md border-2 border-[#d6d6d6] border-solid p-3  w-[10rem]" type="text" name="name" />
            {isValid ? null: <span className="text-red-500">insira um número de cartão válido</span> }
          </label>
        </div>
      </div>
      {data.length > 0 && (
        <>
          <div className=" md:w-[30%] md:h-[20vh] md:justify-center md:mx-auto flex flex-col px-4 py-4 text-lg ">
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
          <div className="md:w-[30%] md:mx-auto flex justify-center items-center">
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
