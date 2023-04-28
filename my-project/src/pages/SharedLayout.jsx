import { Outlet,Link,useLocation } from "react-router-dom";

const SharedLayout = () => {
  const location = useLocation();

  return(
  <>
    <nav className="md:text-2xl w-screen font-[Roboto,sans-serif] mt-5">
      <ul className="flex justify-center gap-3">
      <Link to="/">
            <li className={location.pathname === "/" ? "border-b-2 border-black" : ""}>Sacola</li>
          </Link>
          <Link to="/">
            <li className={location.pathname === "/payment" ? "border-b-2 border-black" : ""}>Pagamento</li>
          </Link>
          <Link to="/">
            <li className={location.pathname === "/confirmPayment" ? "border-b-2 border-black" : ""}>Confirmação</li>
          </Link>
      </ul>
    </nav>
      <Outlet/>
  </>
  )
  
}

export default SharedLayout;