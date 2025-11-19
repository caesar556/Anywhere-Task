import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { CalendarToday, Assignment } from "@mui/icons-material";

export default function CustomCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto my-4">
      <Card className="border-l-4 border-blue-500 rounded-none">
        <CardContent className="p-4">
          <div className="flex items-center mb-2">
            <Assignment className="text-blue-500 mr-2" fontSize="small" />
            <Typography variant="h6" className="font-semibold text-gray-800">
              Unit 2 quiz
            </Typography>
          </div>

          <Typography variant="body2" className="text-gray-600 mb-1">
            Course: Physics Q3
          </Typography>

          <Typography variant="body2" className="text-gray-600 mb-3">
            Topic: Linda Melton and forces
          </Typography>

          <div className="flex items-center text-gray-500 mb-4">
            <CalendarToday fontSize="small" className="mr-1" />
            <Typography variant="body2">Due: 20 Dec 2017 - 09:00 PM</Typography>
          </div>

          <Button
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium normal-case px-4 py-1 rounded shadow-sm w-full"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
