import { Skeleton } from "@/components/ui/skeleton";
function CardSkleton({ length = 8 }) {
  return Array.from({ length }).map((_, index) => {
    return (
      <div key={index} className="mx-auto mb-3 flex flex-col space-y-3">
        <Skeleton className="h-[125px] rounded-xl" />
      </div>
    );
  });
}

export default CardSkleton;
