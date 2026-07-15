type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500">
        {title}
      </p>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}