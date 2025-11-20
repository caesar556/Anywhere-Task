import { Card, CardContent } from "@mui/material";
import CustomCard from "./CustomCard";
import { useGetAllQuizQuery } from "../../../redux/quiz/quizApi";
import { AsyncHandler } from "../../handler/AsyncHandler";

export default function Quiz() {
  const { data, isLoading, isError } = useGetAllQuizQuery(undefined);
  const quiz = data?.data || [];

  return (
    <Card  sx={{paddingX: '20px' }} >
      <AsyncHandler isError={isError} isLoading={isLoading}>
        <div className="ml-6 mt-3">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">What's due</h3>
            <span className="text-[#0047AB] font-bold text-xl mr-6 pointer">
              All
            </span>
          </div>
          <p className="text-gray-500 pt-2 text-[14px] ">
            You have {quiz.length} quiz
          </p>
        </div>
        <CardContent>
          {quiz.map(
            (quiz: {
              _id: any;
              title: string;
              course: string;
              dueDate: string;
            }) => (
              <CustomCard
                key={quiz._id}
                title={quiz.title}
                course={quiz.course}
                date={quiz.dueDate}
              />
            ),
          )}
        </CardContent>
      </AsyncHandler>
    </Card>
  );
}
