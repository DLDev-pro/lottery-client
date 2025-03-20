import { betApi, globalApi } from "@/apis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { AgencyContext } from "@/contexts/AgencyContext";
import { DateContext } from "@/contexts/DateContext";
import { IBetResult } from "@/utils/interface";
import { AgencyContextType, DateContextType, InputChange } from "@/utils/types";
import React, { useContext, useEffect } from "react";
import { FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [value, setValue] = React.useState<string>("");
  const [isValid, setIsValid] = React.useState<boolean>(true);
  const handleChange = (e: InputChange) => {
    const { value } = e.target;
    setValue(value);
  };

  const { updateAgency } = useContext(AgencyContext) as AgencyContextType;

  const [betResult, setBetResult] = React.useState<IBetResult[]>([]);

  const { date } = useContext(DateContext) as DateContextType;

  const getBet = async () => {
    try {
      if (!date) {
        return;
      }
      const response = await betApi.GetBets({
        open_date: date.toISOString().split("T")[0],
      });
      const { data } = response;
      if (data && data.data !== null) {
        setBetResult(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickGetLotteryResult = async (region: string) => {
    try {
      if (!date) {
        return;
      }
      const response = await globalApi.GetLotteryResult({
        date: date.toISOString().split("T")[0],
        region: region,
      });
      const { data } = response;
      if (data.message == "error") {
        toast({
          variant: "destructive",
          title: data.data,
        });
      } else {
        toast({
          variant: "success",
          title: "Lấy kết quả thành công",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBet();
  }, [date]);

  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-1">
        <Link className="bg-[#d9534f] text-white p-2 rounded" to={""}>
          Thống kê số cược
        </Link>
        <div className="space-x-2">
          <Button
            className="bg-submain text-white px-2 h-fit rounded-lg"
            onClick={() => {
              handleClickGetLotteryResult("south");
            }}
          >
            <FaCogs className="mr-1" />
            Dò MN
          </Button>
          <Button
            className="bg-submain text-white px-2 h-fit rounded-lg"
            onClick={() => {
              handleClickGetLotteryResult("central");
            }}
          >
            <FaCogs className="mr-1" />
            Dò MT
          </Button>
          <Button
            className="bg-submain text-white px-2 h-fit rounded-lg"
            onClick={() => {
              handleClickGetLotteryResult("north");
            }}
          >
            <FaCogs className="mr-1" />
            Dò MB
          </Button>
        </div>
      </div>
      <div>
        {betResult.map((bet, index) => {
          // const isActive = bet.id! % 2 === 0 ? 'bg-main' : 'bg-disable'
          // const isDisable = bet.id! % 2 === 0 ? true : false
          const agency = bet.agency;
          return (
            <div
              key={index}
              className="font-bold border-t-[3px] border-black p-2 flex justify-between items-start"
            >
              <div>
                <h3>{agency.agency_name}</h3>
                {/* <span className="text-blue-600">{bet.key}</span> */}
              </div>
              <div>
                <Link
                  to={`/mien-nam?agency_id=${agency.id}`}
                  onClick={() => updateAgency(agency)}
                  className={`${
                    bet.is_have_bet_south ? "bg-main" : "bg-disable"
                  } cursor-pointer p-[12px_5px] float-right m-[1px_4px_4px_4px] rounded-full text-[6px] h-8 w-8 text-white text-center leading-[8px] shadow-md shadow-black`}
                >
                  Nam
                  <span className="block">1</span>
                </Link>
                <Link
                  to={`/mien-trung?agency_id=${agency.id}`}
                  onClick={() => updateAgency(agency)}
                  className={`${
                    bet.is_have_bet_central ? "bg-main" : "bg-disable"
                  } ${
                    !bet.is_have_bet_central ? "cursor-default" : ""
                  } cursor-pointer p-[12px_5px] float-right m-[1px_4px_4px_4px] rounded-full text-[6px] h-8 w-8 text-white text-center leading-[8px] shadow-md shadow-black`}
                >
                  Trung
                  <span className="block">1</span>
                </Link>
                <Link
                  to={`/mien-bac?agency_id=${agency.id}`}
                  onClick={() => updateAgency(agency)}
                  className={`${
                    bet.is_have_bet_north ? "bg-main" : "bg-disable"
                  } ${
                    !bet.is_have_bet_north ? "cursor-default" : ""
                  } cursor-pointer p-[12px_5px] float-right m-[1px_4px_4px_4px] rounded-full text-[6px] h-8 w-8 text-white text-center leading-[8px] shadow-md shadow-black`}
                >
                  Bắc
                  <span className="block">1</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
