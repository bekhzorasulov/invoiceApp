import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAll } from "../requests";
import Invoices from "../components/Invoices";
import { useStore } from "../lib/zustand";
import CardSkleton from "../components/CardSkeleton";
import InvoiceCard from "../components/InvoiceCard";

function Home() {
  const { backendFilterRequestG } = useStore();
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoadnig] = useState(false);

  useEffect(() => {
    setLoadnig(true);
    getAll(
      `/invoices${backendFilterRequestG === "" ? backendFilterRequestG : `?status=${backendFilterRequestG}`}`,
    )
      .then((res) => setInvoices(res))
      .catch(({ message }) => alert(message))
      .finally(() => {
        setLoadnig(false);
      });
  }, [backendFilterRequestG]);

  return (
    <>
      <Header
        backendFilterRequestG={backendFilterRequestG}
        invoices={invoices}
      />
      <div className="md:ml-20">
        <div className="mx-auto w-full max-w-4xl px-5">
          {loading && <CardSkleton />}
          {!loading && invoices && <Invoices invoices={invoices} />}
        </div>
      </div>
    </>
  );
}

export default Home;
