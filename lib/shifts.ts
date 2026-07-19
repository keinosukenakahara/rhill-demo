export type Shift = {
  id:number;
  staff:string;
  area:string;
  date:string;
  workType:string;
  status:string;
};


export const shifts:Shift[] = [

{
 id:1,
 staff:"宮崎 圭二",
 area:"広島中央局",
 date:"2026/07/01",
 workType:"A",
 status:"稼働"
},

{
 id:2,
 staff:"宮崎 圭二",
 area:"広島中央局",
 date:"2026/07/02",
 workType:"A",
 status:"稼働"
},

{
 id:3,
 staff:"栗並 佑樹",
 area:"広島中央局",
 date:"2026/07/01",
 workType:"Y",
 status:"稼働"
},

{
 id:4,
 staff:"栗並 佑樹",
 area:"広島中央局",
 date:"2026/07/02",
 workType:"Y",
 status:"稼働"
},

];