import { memo } from "react";
import { Link } from "react-router-dom";

function Button({ children, isDisabled, to, type, onClick }) {
  const base =
    "semi-bold text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "semi-bold text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 outline-none transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to !== undefined && to !== "") {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={styles[type]} disabled={isDisabled} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type]} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default memo(Button);
