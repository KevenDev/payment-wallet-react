import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return(
  <>
    <nav className="md:text-2xl w-screen font-[Roboto,sans-serif] mt-5">
      <ul className="flex justify-center gap-3">
        <li>Sacola</li> 
        <li>Pagamento</li>
        <li>Confirmação</li>
      </ul>
    </nav>
      <Outlet/>
  </>
  )
  
}

export default SharedLayout;