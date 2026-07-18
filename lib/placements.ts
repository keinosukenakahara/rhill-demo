export type Placement = {
  id: number;
  employee: string;
  destination: string;
  startDate: string;
  status: string;
};

export const placements: Placement[] = [
  {
    id: 1,
    employee: "山田 太郎",
    destination: "東京営業所",
    startDate: "2026-07-20",
    status: "配置予定",
  },
  {
    id: 2,
    employee: "佐藤 花子",
    destination: "大阪支店",
    startDate: "2026-07-25",
    status: "配置中",
  },
  {
    id: 3,
    employee: "鈴木 一郎",
    destination: "名古屋支店",
    startDate: "2026-08-01",
    status: "完了",
  },
];