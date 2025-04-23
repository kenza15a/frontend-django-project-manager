"use client";

export default function Button({
  children,
  variant = "black",
  onClick,
  type = "button",
  className = "",
}) {
  const baseStyles = "px-4 py-2 rounded-2xl font-medium transition-all";
  const variants = {
    black: "bg-black text-white hover:bg-gray-800",
    white: "bg-white text-black border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
