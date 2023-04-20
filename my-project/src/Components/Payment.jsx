import { useAtom } from "jotai";
import { dataAtom } from "../states/StatesAtom";

const Payment = () => {
  const [data, setData] = useAtom(dataAtom);

  return (
    <form className="">
      <h1>Cartão de Crédito</h1>
       <div className="flex flex-col">
        <label>
          Número:
          <input type="text" name="name" />
        </label>
        <label>
          Nome do titular do cartão:
          <input type="text" name="name" />
        </label>
        <div className="flex" >
          <label>
            Data de validade:
            <input type="text" name="name" />
          </label>
          <label>
            Código CVV:
            <input type="text" name="name" />
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
            <button className="bg-[#9222DC] h-[3.5rem] w-[80vw] rounded-lg text-white p-3 text-xl mt-5">
              Seguir para o pagamento
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Payment;
