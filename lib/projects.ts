export type Project = {
  id: number;
  employee: string;
  project: string;
  status: "未着手" | "進行中" | "完了";
  start: string;
};

export const projects: Project[] = [
  {
    id: 1,
    employee: "山田 太郎",
    project: "PCキッティング",
    status: "進行中",
    start: "2026-07-01",
  },
  {
    id: 2,
    employee: "佐藤 花子",
    project: "LAN配線工事",
    status: "完了",
    start: "2026-06-15",
  },
  {
    id: 3,
    employee: "鈴木 一郎",
    project: "ネットワーク構築",
    status: "未着手",
    start: "2026-08-01",
  },
];