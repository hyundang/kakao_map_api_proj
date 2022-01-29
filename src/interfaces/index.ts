export interface UserDataProps {
  id: number;
  address: string;
  alias: string;
  addressDetail: string;
  caution: string;
}

export interface AddrDataProps {
  address: string | null;
  address_name: string;
  address_type: string;
  road_address: {
    building_name: string;
  } | null;
  x: string;
  y: string;
}

export interface ReturnAddrApiDataProps {
  isEnd: boolean;
  resData: AddrDataProps[];
}

export interface LatLngProps {
  x: string;
  y: string;
}
