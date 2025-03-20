/* eslint-disable react-hooks/exhaustive-deps */
import { betApi, globalApi } from "@/apis";
import BetDetailComp from "@/components/bet/BetDetail";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { DateContext } from "@/contexts/DateContext";
import { SettingContext } from "@/contexts/SettingContext";
import { PATHS } from "@/utils/constants";
import {
  IBetResultDetailInner,
  IProvince,
  IRule,
  IStatistic,
} from "@/utils/interface";
import {
  calculateStatistic,
  calculateStatisticMatched,
  calculateStatisticReceived,
  checkProvince,
  checkRule,
  transferBet,
} from "@/utils/string";
import { DateContextType, SettingContextType } from "@/utils/types";
import { useContext, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { useLocation } from "react-router-dom";

const tabs = [
  {
    value: "Tin nhắn",
    key: 1,
  },
  {
    value: "Xử lý tin nhắn",
    key: 2,
  },
  {
    value: "Hệ số",
    key: 3,
  },
  {
    value: "Nhiều SMS",
    key: 4,
  },
  {
    value: "Số trúng",
    key: 5,
  },
];

const BetDetail = () => {
  const location = useLocation();

  const [tab, setTab] = useState(tabs[0]);
  const [showDetail, setShowDetail] = useState(false);
  const { toast } = useToast();
  const { date } = useContext(DateContext) as DateContextType;
  const { provinces, rules } = useContext(SettingContext) as SettingContextType;
  const [bet, setBet] = useState<IBetResultDetailInner | null>(null);
  const [pointRaw, setPointRaw] = useState<IStatistic[]>([]);
  const [pointMiddle, setPointMiddle] = useState<IStatistic[]>([]);
  const [pointMatched, setPointMatched] = useState<IStatistic[]>([]);
  const [ruleError, setRuleError] = useState<string[]>([]);
  const [provinceError, setProvinceError] = useState<string[]>([]);
  const [region, setRegion] = useState("");
  const [validProvince, setValidProvince] = useState<IProvince[]>([]);
  const [rulesGlobal, setRulesGlobal] = useState<IRule[]>([]);

  const getRules = async () => {
    try {
      const response = await globalApi.GetAllRule();
      if (response) {
        const { data } = response;
        if (data.data) {
          setRulesGlobal(response.data.data);
        } else {
          setRulesGlobal([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRules();
  }, []);

  const handleAddBet = async () => {
    try {
      if (ruleError.length > 0 || provinceError.length > 0) {
        toast({
          variant: "destructive",
          title: "Lỗi nhập liệu",
        });
        return;
      }

      const bet_id = location.pathname.split("/").pop();
      const agency_id = location.search.split("=")[1];

      let contentTransfer = content.replace(/,/g, ".");

      const province_acronym = bet?.province_acronym.map(
        (item) => item.acronym
      )[0];

      if (region === "north") {
        //check content has province_acronym
        contentTransfer = contentTransfer
          .split(/\n/)
          .map((item) => {
            if (item.includes(province_acronym!)) {
              return item;
            } else {
              return province_acronym! + " " + item;
            }
          })
          .join("\n");
      }

      let data: {
        agency_id: number;
        open_date: string;
        region_unique_key: string;
        bets: string[];
        bet_id?: number;
      } = {
        agency_id: Number(agency_id),
        open_date: date?.toISOString().split("T")[0] || "",
        region_unique_key: region,
        bets: transferBet(provinces, contentTransfer),
      };
      if (bet_id && bet_id !== "-1") {
        data = {
          ...data,
          bet_id: Number(bet_id),
        };
      }

      const response = await betApi.CreateBet(data);
      if (response) {
        const { data } = response;
        if (data) {
          let responseStatus = data.status;
          if (responseStatus == 200) {
            toast({
              title: "Thành công",
              variant: "success",
            });
            if (data.data.id) {
              const path = location.pathname.split("/");
              path[path.length - 1] = data.bet_id?.toString() || "";
              const newPath =
                path.join("/") + data.data.id + `?agency_id=${agency_id}`;
              window.location.replace(newPath);
            }
          } else {
            toast({
              variant: "destructive",
              title: data.error,
            });
          }

          //repalace -1 to data.data.id
          // if (data.data.id) {
          //   const path = location.pathname.split("/");
          //   path[path.length - 1] = data.bet_id?.toString() || "";
          //   const newPath =
          //     path.join("/") + data.data.id + `?agency_id=${agency_id}`;
          //   window.location.replace(newPath);
          // }

          // window.location.reload()
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Lỗi nhập liệu",
      });
    }
  };

  const getBet = async () => {
    try {
      let region_unique_key = "";
      if (location.pathname.includes(PATHS.MIEN_BAC)) {
        region_unique_key = "north";
      } else if (location.pathname.includes(PATHS.MIEN_TRUNG)) {
        region_unique_key = "central";
      } else if (location.pathname.includes(PATHS.MIEN_NAM)) {
        region_unique_key = "south";
      }
      setRegion(region_unique_key);
      if (bet?.province_acronym) {
        for (let i = 0; i < bet.province_acronym.length; i++) {
          const province = provinces.find(
            (province) => province.acronym === bet.province_acronym[i].acronym
          );
          if (province) {
            validProvince.push(province);
          }
        }
      }

      if (region_unique_key === "") {
        return;
      }

      const response = await betApi.GetBets({
        open_date: date?.toISOString().split("T")[0] || "",
        region_unique_key,
        agency_id: location.search.split("=")[1],
      });
      const { data } = response;
      if (data && data.data !== null) {
        if (Array.isArray(response.data.data)) {
          setBet({
            bets: [],
            province_acronym: response.data.data,
            statistic: [],
            win: [],
          });
        } else {
          setBet(data.data);
        }
      } else {
        setBet(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.search.split("=")[1] && date) {
      getBet();
    }
  }, [date]);

  const createEmptyStatistic = (rules: IRule[]): IStatistic[] =>
    (rules || []).map((rule) => ({
      rule: rule.rule_unique_key,
      score: 0,
      money: 0,
    }));

  useEffect(() => {
    const emptyStatistics = createEmptyStatistic(rulesGlobal);
    if (bet) {
      const statisticRaw = bet?.statistic || [];
      const flattenedRaw = statisticRaw.flat();
      const statisticFilled = calculateStatistic(rulesGlobal, flattenedRaw);
      setPointRaw(statisticFilled);
      const statisticReceived = calculateStatisticReceived(
        rulesGlobal,
        flattenedRaw
      );
      setPointMiddle(statisticReceived);

      const statisticWin = bet?.win || [];

      const statisticMatched = calculateStatisticMatched(
        rulesGlobal,
        statisticWin
      );
      setPointMatched(statisticMatched);
    } else {
      setPointRaw(emptyStatistics);
      setPointMiddle(emptyStatistics);
      setPointMatched(emptyStatistics);
    }
  }, [bet]);

  const [content, setContent] = useState("");
  useEffect(() => {
    if (bet && bet.bets.length > 0) {
      if (tab.key === 1) {
        setContent(bet?.bets[0].bets.map((item) => item).join("\n"));
      } else if (tab.key === 2) {
        setContent(bet?.bets[0].bets.map((item) => item).join(" "));
      } else if (tab.key === 3 || tab.key === 4) {
        setContent("");
      } else if (tab.key === 5) {
        setContent(
          bet.win
            .map((item) => {
              if (item.score > 1) {
                return item.bet_win;
              }
              return item.bet_win;
            })
            .join(";")
        );
      }
    } else {
      setContent("");
    }
  }, [tab, bet]);
  useEffect(() => {
    if (tab.key === 1) {
      if (!location.pathname.includes(PATHS.MIEN_BAC)) {
        setProvinceError(checkProvince(provinces, content.trim(), rules));
      }
      setRuleError(checkRule(rules, content.trim()));
    }
  }, [content]);

  return (
    <div>
      <div className="space-x-1 border-b border-gray-400 pb-1">
        {bet?.province_acronym.map((city) => {
          return (
            <span
              className="bg-[#1479B8] rounded-2xl px-2 py-1 text-white text-xs"
              key={city.acronym}
            >
              {city.acronym}: {city.name}
            </span>
          );
        })}
      </div>
      <div className="mt-4 space-x-1">
        {tabs.map((item) => (
          <Button
            key={item.key}
            onClick={() => setTab(item)}
            className={`${
              tab.key === item.key ? "bg-[#1479B8]" : "bg-disable"
            } text-white px-2 h-fit rounded-lg`}
          >
            {item.value}
          </Button>
        ))}
      </div>
      <textarea
        className={`w-full h-40 border border-gray-400 p-2 resize-vertical ${
          tab.key === 5 ? "text-main" : ""
        }`}
        disabled={tab.key !== 1}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <p>
        {content.split(/\s+/).map((item, index) => {
          const isRuleError =
            Array.isArray(ruleError) && ruleError.includes(item);
          const isProvinceError =
            Array.isArray(provinceError) && provinceError.includes(item);
          return (
            <span
              key={index}
              className={`${
                isRuleError || isProvinceError ? "text-red-500 font-bold" : ""
              }`}
            >
              {item}{" "}
            </span>
          );
        })}
      </p>

      {/* <TextBetArea
        stationsPattern="hn"
        validProvinces={validProvince}
        validRules={rules}
        content={content}
        setContent={setContent}
      /> */}
      {showDetail && (
        <div className="space-x-1">
          {bet?.win.map((item) => {
            return (
              <span
                className="bg-[#1479B8] rounded-2xl px-2 py-1 text-white text-xs"
                key={item.id}
              >
                {item.bet_win}
              </span>
            );
          })}
        </div>
      )}
      <BetDetailComp
        item={bet!}
        index={0}
        pointRaw={pointRaw}
        pointMatched={pointMatched}
        pointMiddle={pointMiddle}
      />
      <div className="flex justify-between items-center">
        <Button
          onClick={() => setContent("")}
          className="hover:bg-[#d58512] bg-[#f0ad4e] rounded-3xl py-1 h-fit"
        >
          <FaRegTrashAlt />
          Xóa mất
        </Button>
        <div className="space-x-2">
          <Button
            onClick={handleAddBet}
            className="bg-[#1A82C3] rounded-3xl py-1 h-fit"
          >
            <IoMdSave />
            Cập nhật
          </Button>
          {/* <Button className="bg-[#1A82C3] rounded-3xl py-1 h-fit">
            <PiListBold />
            D.sách
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default BetDetail;
