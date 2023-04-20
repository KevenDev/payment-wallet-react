import { dataAtom, userCardName, userNumberCard, userDateCard } from "../states/StatesAtom";
import { useAtom } from "jotai";

const Confirmation = ()=>{

    const[data,setData] = useAtom(dataAtom);
    const [cardNumber, setCardNumber] = useAtom(userNumberCard);
    const [cardName, SetCardName] = useAtom(userCardName)
    const [dateCard, setDateCard] = useAtom(userDateCard)
    console.log(cardNumber);

    return(
        <>
        <section className="w-screen h-[90%] mt-4 ">
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
                <div className="h-[50%] w-[100%]flex flex-col border-2 border-[#CCCCCC] border-solid ">
                  {data[0].items?.map((items,index)=>(
                  <div key={index} className="w-full h-full flex justify-between items-center ">
                    <img src={items.product.imageObjects[0].small} className='h-[6rem] mb-2' alt="" />
                    <p className='text-xs w-[12rem] font-bold'> {items.product.name}</p>
                  </div>
                ))
              }</div>
          </>
        )}
        </div>
    </section>
      </>
    )
}

export default Confirmation;