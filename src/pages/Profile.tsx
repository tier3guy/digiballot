// Internal Imports
import Logo from "../components/Logo";
import NavbarWrapper from "../components/NavbarWrapper";
import PollChart from "../components/PollChart";
const Profile = () => {
  // border-l-[0.5px] border-r-[0.5px] border-gray-500
  return (
    <div className="w-100">
      <NavbarWrapper>
        <div className="py-4 flex items-center justify-center w-2/3 m-auto">
          <Logo className="text-2xl font-semibold" />
        </div>
      </NavbarWrapper>
      <div className="w-2/3 m-auto h-[90vh] overflow-y-scroll">
        <div className="mt-10 px-5">
          <h1 className="text-3xl font-semibold">
            Hello, <span className="text-green-600">Anonymous#5463</span>
          </h1>
          <div className="my-5">
            <p className="text-sm uppercase mb-4">
              Connected Wallet : 0xAbCdEf1234567890aBcDeF1234567890AbCdEf12
            </p>
            <p className="text-sm">
              Passionate explorer of technology and words. With a background in
              computer science and a love for linguistics, I bridge the gap
              between code and communication. By day, I architect software
              solutions that solve real-world challenges; by night, I craft
              compelling narratives that inspire and inform. My journey in tech
              began with curiosity and has evolved into a career marked by
              innovation and collaboration. Beyond the screen, I'm an avid
              hiker, capturing the beauty of nature through my camera lens.
              Always seeking the next challenge, I thrive on continuous learning
              and finding connections in the ever-evolving landscape of
              knowledge and technology.
            </p>
            <p className="text-green-600 mt-4 text-sm cursor-pointer">
              Edit Bio <i className="fa-solid fa-pen"></i>
            </p>
          </div>
        </div>

        <div className="px-5 m-auto text-sm mt-10">
          <h1 className="text-3xl mt-4 font-semibold mb-2">Your Polls</h1>
          <p>Insights of all your created polls history are listed below.</p>
          <div className="my-5 flex flex-col gap-5">
            <PollChart
              total_votes={2458}
              votes={[
                {
                  label: "YES",
                  vote: 1678,
                },
                {
                  label: "NO",
                  vote: 780,
                },
              ]}
              // is_live={true}
              created_at="6th August 2030"
              header="Will India be a five trillion dollar economy by 2030?"
              description="As India sets its sights on becoming a global economic powerhouse, the question of whether it will achieve the monumental goal of a $5 trillion economy by 2030 is on everyone's mind. Economic reforms, technological advancements, and strategic investments play crucial roles in this journey. Share your perspective in this poll: Will India successfully navigate the challenges and realize this ambitious economic target within the next decade? Cast your vote and join the discussion on the nation's economic trajectory. Your opinion matters in shaping the future of India's economic landscape."
            />
            <PollChart
              total_votes={458}
              votes={[
                {
                  label: "NARENDRA BHAI MODI",
                  vote: 321,
                },
                {
                  label: "CONGRESS",
                  vote: 23,
                },
                {
                  label: "IITIAN ARVIND BHAI",
                  vote: 114,
                },
              ]}
              is_live={true}
              created_at="6th August 2030"
              header="Who will win 2024 Lok-Sabha Elections?"
              description="Anticipation builds as the 2024 Lok Sabha Elections approach. The nation holds its breath, wondering which political force will emerge victorious and lead India's destiny. Your prediction matters – will there be a new mandate or a continuation? Share your insights and be part of the conversation on the future direction of the world's largest democracy. Cast your prediction now and stay tuned for the unfolding of India's political narrative."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
