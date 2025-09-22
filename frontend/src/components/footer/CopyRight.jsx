export default function CopyRight({ className }) {
  return (
    <div
      className={`${className} flex flex-col justify-center border-t border-b-slate-400 text-center text-white`}
    >
      <span>
        FitnessHub 2025 -{" "}
        <a href="https://www.carlosfullstack.dev/" target="_blank">
          Carlos Full Stack
        </a>
      </span>
    </div>
  );
}
