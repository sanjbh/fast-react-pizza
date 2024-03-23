export default function Button({ children, isDisabled }) {
  return (
    <button
      className="semi-bold focus: rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
