import { FC } from "react";

interface Vote {
  label: string;
  vote: number;
}

interface PollChartProps {
  total_votes: number;
  votes: Array<Vote>;
  is_live?: boolean;
  created_at?: string;
  header: string;
  description?: string;
}

const PollChart: FC<PollChartProps> = ({
  total_votes = 0,
  votes = [],
  is_live = false,
  created_at = "",
  header,
  description,
}) => {
  return (
    <div className="border-[0.5px] border-gray-500 p-4 flex flex-col">
      <div className="flex items-start justify-between">
        <p
          className={`px-6 py-1 text-sm ${
            is_live ? "bg-green-600" : "bg-gray-500"
          } text-gray-200`}
        >
          {is_live ? "LIVE" : "ENDED"}
        </p>
        <p className="my-2">Posted on: {created_at}</p>
      </div>
      <h1 className="font-semibold text-xl mt-2">{header}</h1>
      {description && <p className="mt-2">{description}</p>}
      <p className="mt-4 mb-2">TOTAL VOTES: {total_votes}</p>
      <div className="mt-5 border-l-[0.5px] border-b-[0.5px] border-gray-500 flex flex-col justify-around items-start py-5">
        {votes.map((element, idx) => {
          const width = ((element.vote / total_votes) * 100).toFixed(2);

          return (
            <div
              key={idx}
              className={`relative my-2 px-2 bg-green-600 py-3 text-center text-gray-200`}
              style={{
                width: `${width}%`,
              }}
            >
              {element.label.toUpperCase()}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-5 mt-5">
        {votes.map((element, idx) => {
          return (
            <div key={idx}>
              {element.label}: {element.vote} Votes
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PollChart;
