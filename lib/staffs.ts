export type Staff = {
  id: number;
  name: string;
  contract: string;
  unitPrice: number;
  invoice: string;
  status: string;
};


export const staffs: Staff[] = [
  {
    id: 1065,
    name: "宮崎 圭二",
    contract: "個数委託",
    unitPrice: 182,
    invoice: "未登録",
    status: "稼働中",
  },
  {
    id: 1075,
    name: "尾加 龍之介",
    contract: "リーダー",
    unitPrice: 183.5,
    invoice: "T981...279",
    status: "稼働中",
  },
  {
    id: 2010,
    name: "栗並 佑樹",
    contract: "個数委託",
    unitPrice: 187,
    invoice: "未登録",
    status: "稼働中",
  },
  {
    id: 2008,
    name: "濵本 一咲",
    contract: "最低保証",
    unitPrice: 134.64,
    invoice: "未登録",
    status: "稼働中",
  },
];



const STORAGE_KEY = "rhill_staffs";


// 取得
export function getStaffs(): Staff[] {

  if(typeof window === "undefined"){
    return staffs;
  }


  const saved =
    localStorage.getItem(STORAGE_KEY);


  if(saved){
    return JSON.parse(saved);
  }


  return staffs;
}



// 保存
export function saveStaffs(
  data: Staff[]
){

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

}