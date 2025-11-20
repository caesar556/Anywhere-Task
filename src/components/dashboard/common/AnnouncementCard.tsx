import { Avatar, Divider } from "@mui/material";

type AnnouncementCardProps = {
  name: string;
  date: string;
  description: string;
};

export default function AnnouncementCard({
  name,
  date,
  description,
}: AnnouncementCardProps) {
  const formattedDate = date ? date.split("T")[0] : "No date";
  return (
    <div className="flex items-center mt-8 gap-4 px-2 py-3 bg-white rounded-xl shadow-sm border border-gray-200 flex-wrap">
      <Avatar
        src="https://i.pravatar.cc/150?img=16"
        sx={{ width: 45, height: 45, cursor: "pointer" }}
      />

      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800 text-base">{name}</h3>
        <p className="text-gray-500 text-sm">{formattedDate}</p>
      </div>

      <Divider orientation="vertical" flexItem className="mx-3" />

      <p className="text-gray-700 text-sm flex-1">{description}</p>
    </div>
  );
}
