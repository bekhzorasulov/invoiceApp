import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";

function UniversalSheet({ children }) {
  return (
    <Sheet className="top-[105px]">
      <SheetTrigger className={`${buttonVariants({ variant: "default" })}`}>
        <PlusCircle /> <span className="hidden sm:block">New</span>
      </SheetTrigger>
      <SheetContent
        className="top-[105px] w-full max-w-full pl-16 sm:max-w-[80%] md:left-14 md:top-0 md:ml-2 md:max-w-[80%]"
        side="left"
      >
        <SheetHeader>
          <SheetTitle>New invoices</SheetTitle>
        </SheetHeader>
        <div className="h-full overflow-y-auto pb-20">{children}</div>
        <div className="absolute bottom-24 left-0 right-0 flex w-full items-center justify-between border-t p-3 md:bottom-0 md:pl-16">
          <Button variant="outline">Discard</Button>
          <div className="md:flex md:items-center md:justify-end">
            <Button className="mr-7" variant="secondary">
              Save as Draft
            </Button>
            <Button>Save & Send</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default UniversalSheet;
