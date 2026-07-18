export type Dispatch = {
  id: number;
  employee: string;
  destination: string;
  dispatchDate: string;
  status: string;
};

export const dispatches: Dispatch[] = [
  {
    id: 1,
    employee: "山田 太郎",
    destination: "大阪本社",
    dispatchDate: "2026-07-22",
    status: "手配中",
  },
  {
    id: 2,
    employee: "佐藤 花子",
    destination: "東京営業所",
    dispatchDate: "2026-07-24",
    status: "完了",
  },
  {
    id: 3,
    employee: "鈴木 一郎",
    destination: "名古屋支店",
    dispatchDate: "2026-07-28",
    status: "未手配",
  },
];