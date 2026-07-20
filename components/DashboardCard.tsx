type Props = {
  title:string;
  value:string;
  description?:string;
  icon?:string;
  change?:string;
};


export default function DashboardCard({
  title,
  value,
  description,
  icon,
  change,
}: Props) {

  return (
    <div className="rounded-lg bg-white p-4 shadow md:p-6">

      <div className="flex justify-between items-center">

        <h3 className="text-gray-500">
          {title}
        </h3>

        <span className="text-2xl">
          {icon}
        </span>

      </div>

      <p className="mt-3 text-2xl font-bold md:text-3xl">
        {value}
      </p>

      <p className="text-green-600 mt-2 text-sm">
        {change}
      </p>

    </div>
  );
}


