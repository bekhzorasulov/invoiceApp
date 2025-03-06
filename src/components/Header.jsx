// import { useStore } from "../lib/zustand";
import Filter from "./Filter";
import UniversalSheet from "./UniversalSheet";

function Header({ backendFilterRequestG, invoices }) {
  return (
    <header className="py-8 md:ml-24 md:mt-0">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-5">
        <div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Invoices
          </h1>
          <p className="text-[18px] leading-[15px] text-slate-400">
            {(invoices || []).length} total invoices
          </p>
        </div>
        <div className="flex gap-4">
          <Filter />
          <UniversalSheet />
        </div>
      </div>
    </header>
  );
}

export default Header;
