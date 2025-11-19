import { Card, CardContent } from "@mui/material";
import AnnouncementCard from "./AnnouncementCard";

export const announcements = [
  {
    id: 1,
    imgSrc: "https://i.pravatar.cc/150?img=1",
    name: "Dr. Sarah Morgan",
    date: "2023-05-08",
    description: "Midterm exam results have been uploaded. Please review them.",
  },
  {
    id: 2,
    imgSrc: "https://i.pravatar.cc/150?img=5",
    name: "Prof. Adam Lewis",
    date: "2023-04-29",
    description:
      "Tomorrow’s lecture will cover Unit 4: Advanced Calculus topics.",
  },
  {
    id: 3,
    imgSrc: "https://i.pravatar.cc/150?img=8",
    name: "Admin Office",
    date: "2023-04-22",
    description:
      "Campus will be closed next Friday due to scheduled maintenance.",
  },
  {
    id: 4,
    imgSrc: "https://i.pravatar.cc/150?img=12",
    name: "Dr. Lina Ahmed",
    date: "2023-04-18",
    description: "Please submit Assignment 3 before the deadline on Monday.",
  },
  {
    id: 5,
    imgSrc: "https://i.pravatar.cc/150?img=16",
    name: "System Notification",
    date: "2023-04-10",
    description: "Your profile has been updated successfully.",
  },
];

export default function Announcement() {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Announcement
        </h2>
        <p className="text-gray-400">All announcements here in one place</p>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            imgSrc={announcement.imgSrc}
            name={announcement.name}
            date={announcement.date}
            description={announcement.description}
          />
        ))}
      </CardContent>
    </Card>
  );
}
