import { ReturnAddrApiDataProps } from "@interfaces/index";
import axios from "axios";

const getAddress = async (
  searchValue: string,
  pageIndex: number
): Promise<ReturnAddrApiDataProps | undefined> => {
  try {
    const res = await axios.get(
      `/v2/local/search/address?query=${searchValue}&analyze_type=similar&page=${pageIndex}&size=15`,
      {
        baseURL: "https://dapi.kakao.com",
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
        },
      }
    );
    return {
      isEnd: res.data.meta.is_end,
      resData: res.data.documents,
    };
  } catch (e) {
    return;
  }
};

const getApi = {
  getAddress,
};

export default getApi;
