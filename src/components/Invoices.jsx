import InvoiceCard from "./InvoiceCard";
import { ScrollArea } from "@/components/ui/scroll-area";

function Invoices({ invoices }) {
  return (
    <ScrollArea className="h-screen rounded-md border p-4">
      <div className="flex flex-col gap-5">
        {invoices &&
          invoices.map(
            ({ clientName, id, paymentDue, status, total }, index) => {
              return (
                <InvoiceCard
                  clientName={clientName}
                  id={id}
                  paymentDue={paymentDue}
                  status={status}
                  total={total}
                  key={index}
                />
              );
            },
          )}
      </div>
    </ScrollArea>
  );
}

export default Invoices;
