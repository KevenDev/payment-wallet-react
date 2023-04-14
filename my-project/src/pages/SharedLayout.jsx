import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return(
  <>
    <nav className=" font-[Roboto,sans-serif] ">
      <ul className="flex justify-center gap-3">
        <li>Sacola</li> 
        <li>Pagamento</li>
        <li>Confirmação</li>
      </ul>
    </nav>
    <div>
      <Outlet/>
    </div>
  </>
  )
  
}

export default SharedLayout;