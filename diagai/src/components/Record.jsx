import React from "react";
import records from "@/data/records";

const Record = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <table className="md:w-full table-fixed overflow-x-auto">
        <thead>
          <tr className="w-full text-left">
            <th className="p-4 md:p-8 text-nowrap w-1/3 md:w-1/4">
              Patient ID
            </th>
            <th className="p-4 md:p-8 w-1/3 md:w-1/4">Illness/Disease</th>
            <th className="p-4 md:p-8 w-1/3 md:w-1/4">Symptoms</th>
            <th className="p-4 md:p-8 w-1/3 md:w-1/4">References</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return (
              <tr key={record.patientId}>
                <td className="p-4 md:p-8">{record.patientId}</td>
                <td className="p-4 md:p-8">
                  <p>{record.illness_disease}</p>
                </td>
                <td className="pt-8 pb-8">
                  <p>{record.symptoms}</p>
                </td>
                <td className="pt-8 pb-8 pr-4 md:pr-0">
                  <p className="w-full flex flex-col gap-2">
                    {record.references.map((reference) => {
                      return (
                        <a
                          href="/#"
                          className="text-nowrap overflow-hidden text-ellipsis"
                        >
                          {reference}
                        </a>
                      );
                    })}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Record;
