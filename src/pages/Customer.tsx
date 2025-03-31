import { DeleteAgency } from "@/apis/agency";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { AgencyContext } from "@/contexts/AgencyContext";
import { AgencyContextType } from "@/utils/types";
import { useContext } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Customer = () => {
  const { updateAgency, agencies } = useContext(
    AgencyContext
  ) as AgencyContextType;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-3 text-black border font-bold text-center">
              #
            </TableHead>
            <TableHead className="text-black border font-bold text-center w-10">
              Key ID
            </TableHead>
            <TableHead className="text-black border font-bold text-center">
              Khách
            </TableHead>
            {/* <TableHead className='text-black border font-bold text-center w-8'>
              Cân hàng
            </TableHead>
            <TableHead className='text-black border font-bold text-left w-8'>
              User
            </TableHead>
            <TableHead className='text-black border font-bold text-center w-8'>
              Pass
            </TableHead> */}
            <TableHead className="border w-3"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agencies.map((customer, index) => {
            const color = index % 2 === 0 ? "bg-gray-100" : "bg-white";
            const handleDeleteAgency = () => {
              const confirm = window.confirm("Chắc chắn xoá đại lý này?");
              if (confirm) {
                DeleteAgency(customer.id + "")
                  .then((_) => {
                    toast({
                      title: "Success",
                      variant: "success",
                      description: "Xoá đại lý thành công",
                    });
                    window.location.reload();
                  })
                  .catch((error) => {
                    toast({
                      title: "Error",
                      variant: "destructive",
                      description: error.message,
                    });
                  });
              }
            };
            return (
              <TableRow
                key={index}
                className={`${color} hover:bg-gray-200 cursor-pointer`}
              >
                <TableCell className="text-center border">
                  {index + 1}
                </TableCell>
                <TableCell className="text-left border">
                  {customer.key}
                </TableCell>
                <TableCell className="text-left border">
                  {customer.name}
                </TableCell>
                <TableCell
                  onClick={() => updateAgency(customer)}
                  className="text-right border flex justify-center gap-2"
                >
                  <FaTrash onClick={handleDeleteAgency} />
                  <Link to={"form?agency_id=" + customer.id}>
                    <FaEdit />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="w-full flex justify-end mt-2">
        <Link
          to={"form"}
          className="bg-[#1ABB9C] border border-[#1ABB9C] text-white p-0 h-fit px-2 rounded-md"
        >
          <FaPlus className="inline" />
          Add
        </Link>
      </div>
    </>
  );
};

export default Customer;
