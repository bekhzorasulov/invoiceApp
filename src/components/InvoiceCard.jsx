import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Status from "./Status";
import { dateFormatter } from "../lib/utils";

function InvoiceCard({ id, clientName, paymentDue, total, status }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>#{id}</CardTitle>
        <CardDescription>{clientName}</CardDescription>
      </CardHeader>
      <CardContent>{dateFormatter(paymentDue)}</CardContent>
      <CardFooter className="flex items-center justify-between">
        <span>
          {Number(total).toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </span>
        <Status status={status} />
      </CardFooter>
    </Card>
  );
}

export default InvoiceCard;
