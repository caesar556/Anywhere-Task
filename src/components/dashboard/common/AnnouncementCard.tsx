import { Avatar, Divider } from "@mui/material";

type AnnouncementCardProps = {
  imgSrc: string;
  name: string;
  date: string;
  description: string;
};

export default function AnnouncementCard({
  imgSrc,
  name,
  date,
  description,
}: AnnouncementCardProps) {
  return (
    <div className="flex items-center mt-8 gap-4 px-2 py-3 bg-white rounded-xl shadow-sm border border-gray-200 flex-wrap">
      <Avatar src={imgSrc} sx={{ width: 45, height: 45, cursor: "pointer" }} />

      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800 text-base">{name}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>

      <Divider orientation="vertical" flexItem className="mx-3" />

      <p className="text-gray-700 text-sm flex-1">{description}</p>
    </div>
  );
}
