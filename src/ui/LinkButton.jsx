import { Link } from "react-router-dom";

export default function LinkButton({children, to, onClick}) {
    return <Link to={to}
    className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    onClick={onClick}
  >
    {children}
  </Link>
}