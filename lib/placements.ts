export interface Placement {
  id: number;
  employee: string;
  destination: string;
  startDate: string;
  status: string;
}

const initialPlacements: Placement[] = [
  {
    id: 1,
    employee: "山田 太郎",
    destination: "大阪営業所",
    startDate: "2026-07-20",
    status: "配置予定",
  },
  {
    id: 2,
    employee: "佐藤 花子",
    destination: "神戸営業所",
    startDate: "2026-07-22",
    status: "配置中",
  },
];

const STORAGE_KEY = "placements";

export function getPlacements(): Placement[] {
  if (typeof window === "undefined") {
    return initialPlacements;
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(initialPlacements)
    );
    return initialPlacements;
  }

  return JSON.parse(data);
}

export function savePlacements(
  placements: Placement[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(placements)
  );
}