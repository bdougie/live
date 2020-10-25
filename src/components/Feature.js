const Feature = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="mt-5">
        <h5 className="text-lg font-bold leading-6">{title}</h5>
        <p className="mt-2 text-base font-light leading-6">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
