type Props = {
  title: string;
  value: string;
  icon: string;
  change: string;
};

export default function DashboardCard({
  title,
  value,
  icon,
  change,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-6">

      <div className="flex justify-between items-center">

        <h3 className="text-gray-500">
          {title}
        </h3>

        <span className="text-2xl">
          {icon}
        </span>

      </div>

      <p className="text-3xl font-bold mt-4">
        {value}
      </p>

      <p className="text-green-600 mt-2 text-sm">
        {change}
      </p>

    </div>
  );
}


