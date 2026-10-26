import { officeAddressLine1, officeAddressLine2, officeAddressLine3 } from "@/data/site-data";

export function OfficeAddress() {
  return (
    <>
      {officeAddressLine1} <span className="whitespace-nowrap">{officeAddressLine2}</span>{" "}
      <span className="whitespace-nowrap">{officeAddressLine3}</span>
    </>
  );
}
