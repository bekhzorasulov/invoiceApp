function Status({ status = "pending" }) {
  let baseStyles = "";
  let dotColor = "";

  switch (status) {
    case "pending":
      baseStyles = "bg-[rgb(255,143,0,0.05)] text-[#FF8F00]";
      dotColor = "bg-[#FF8F00]";
      break;
    case "paid":
      baseStyles = "bg-[rgb(51,214,159,0.05)] text-[#33D69F]";
      dotColor = "bg-[#33D69F]";
      break;
    default:
      baseStyles = "bg-[rgb(55,59,83,0.05)] text-[#373B53]";
      dotColor = "bg-[#373B53]";
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md px-7 py-3 ${baseStyles}`}
    >
      <span className={`inline-block h-2 w-2 rounded-full ${dotColor}`}></span>
      <span className="text-xs font-semibold capitalize leading-4 -tracking-[0.25px]">
        {status}
      </span>
    </span>
  );
}

export default Status;
