import { Link } from "react-router-dom";

export default function Button({ children, isDisabled, to, type }) {
  const base =
    "semi-bold focus: rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to !== "") {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={isDisabled}>
      {children}
    </button>
  );
}
