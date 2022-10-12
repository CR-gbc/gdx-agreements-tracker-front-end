import { TableComplete } from "components/TableComplete";
import React, { useEffect, useState } from "react";
import { editFields, initialValues, readFields } from "./fields";

export const InvoiceResources = ({
  invoiceId,
  contractId,
}: {
  invoiceId: number;
  contractId: number;
}) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(invoiceId);
  }, [invoiceId]);

  const roles = {
    get: "contracts_read_all",
    add: "contracts_add_one",
    update: "contracts_update_one",
    delete: "contracts_delete_one",
  };

  const url = {
    getAll: `invoices/${id}/resources`,
    getOne: `invoices/resources/{id}`,
    updateOne: `invoices/resources/{id}`,
    addOne: `invoices/${id}/resources`,
    deleteOne: ``,
  };

  const columnWidths = {
    resource_assignment: 3,
    hours: 1,
    rate: 1,
    amount: 1,
  };

  return (
    <TableComplete
      itemName={"Resource"}
      tableName={"resources"}
      columnWidths={columnWidths}
      url={url}
      createFormInitialValues={initialValues}
      readFields={readFields}
      editFields={editFields(contractId)}
      totalColumns={["hours", "rate", "amount"]}
      roles={roles}
    />
  );
};
