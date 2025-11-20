import { Card, CardContent } from "@mui/material";
import AnnouncementCard from "./AnnouncementCard";
import { useGetAllAnnouncementsQuery } from "../../../redux/announcement/announcementApi";
import type { Key } from "react";
import { AsyncHandler } from "../../handler/AsyncHandler";

export default function Announcement() {
  const { data, isError, isLoading } = useGetAllAnnouncementsQuery(undefined);
  const announcements = data?.data || [];

  return (
    <Card>
      <AsyncHandler isError={isError} isLoading={isLoading}>
        <CardContent>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Announcement
          </h2>
          <p className="text-gray-400 text-[14px]">
            All announcements here in one place
          </p>
          {announcements.map(
            (announcement: {
              _id: Key | null | undefined;
              title: string;
              date: string;
              description: string;
            }) => (
              <AnnouncementCard
                key={announcement._id}
                name={announcement.title}
                date={announcement.date}
                description={announcement.description}
              />
            ),
          )}
        </CardContent>
      </AsyncHandler>
    </Card>
  );
}
