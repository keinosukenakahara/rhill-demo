export type Dispatch = {
  id: number;
  employee: string;
  project: string;
  vendor: string;
  dispatchDate: string;
  status: string;
};

export const dispatches: Dispatch[] = [
  {
    id: 1,
    employee: "山田 太郎",
    project: "PCキッティング",
    vendor: "○○運送",
    dispatchDate: "2026/07/20",
    status: "手配済",
  },
  {
    id: 2,
    employee: "佐藤 花子",
    project: "LAN配線工事",
    vendor: "△△物流",
    dispatchDate: "2026/07/22",
    status: "未手配",
  },
];

export function getDispatches(): Dispatch[] {
  if (typeof window === "undefined") {
    return dispatches;
  }

  const saved = localStorage.getItem("dispatches");

  if (!saved) {
    return dispatches;
  }

  return JSON.parse(saved);
}

export function saveDispatches(data: Dispatch[]) {
  localStorage.setItem("dispatches", JSON.stringify(data));
}