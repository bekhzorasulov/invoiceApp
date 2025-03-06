import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useStore } from "../lib/zustand";

export default function Filter() {
  const [statuses, setStatuses] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const [open, setOpen] = useState(false);
  const [backendFilterRequest, setBackendFilterRequest] = useState("");
  const { setBackendFilterRequestG } = useStore();

  useEffect(() => {
    let str = "";
    for (const key in statuses) {
      if (statuses[key]) {
        if (str === "") {
          str += key;
        } else {
          str += `|${key}`;
        }
      }

      setBackendFilterRequest(str);
    }
  }, [statuses]);

  useEffect(() => {
    setBackendFilterRequestG(backendFilterRequest);
  }, [backendFilterRequest]);

  function handleClick() {
    setOpen(!open);
  }

  function handleCheck(status) {
    setStatuses((prev) => {
      let finalRresult = null;
      if (status !== "" && prev[""]) {
        finalRresult = { ...prev, [status]: !statuses[status], all: false };
      } else {
        finalRresult = { ...prev, [status]: !statuses[status] };
      }
      return finalRresult;
    });
  }

  return (
    <div className="relative w-full max-w-[150px]">
      <Button className="w-full" onClick={handleClick} variant="ghost">
        <span className="flex justify-between">
          Filter <span className="hidden md:block">by status</span>
        </span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {open && (
        <div className="absolute top-11 z-40 w-full rounded-md p-1 shadow-md">
          <ul>
            {Object.entries(statuses).map(([status, check], index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => handleCheck(status)}
                    className="w-full justify-between capitalize"
                    variant="ghost"
                  >
                    {status}
                    {check && <Check />}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
