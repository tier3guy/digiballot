// Internal Imports
import { FC, useState, MouseEventHandler } from "react";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import CustomFileUploader from "../components/FileUploader";

interface SwitchButtonProps {
  label: string;
  active: boolean;
  action: MouseEventHandler<HTMLButtonElement>;
}

const SwitchButton: FC<SwitchButtonProps> = ({
  label = "",
  active = false,
  action = () => {},
}) => {
  const buttonClassName: string = `text-sm border-2 ${
    active ? "border-green-600" : "border-gray-500"
  } border-gray-500 px-4 py-3 w-[48%]`;

  return (
    <button className={buttonClassName} onClick={action}>
      {label}
    </button>
  );
};

const IndividualSignupForm: FC = () => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");

  const onSubmitHandler = () => {};

  return (
    <div className="text-sm text-start">
      <p>
        Note: It is not important to create an account as an individual unless
        they themselves wants to provide their data to us. While creating an
        account enhances your experience, remember that anonymity is at the
        heart of our platform. Your choice to register or vote anonymously is
        respected at all times.
      </p>
      <div className="mt-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Input
            value={fName}
            setValue={setFName}
            label="FIRST NAME"
            important={true}
            placeholder="John"
            className="w-[49%]"
          />
          <Input
            value={lName}
            setValue={setLName}
            label="LAST NAME"
            important={true}
            placeholder="Doe"
            className="w-[49%]"
          />
        </div>
        <Input
          value={phone}
          setValue={setPhone}
          label="PHONE NO"
          important={true}
          placeholder="XXXXX XXXXX"
        />
        <Input
          value={email}
          setValue={setEmail}
          label="EMAIL ID"
          placeholder="johndoe@example.com"
        />
        <Input
          value={walletAddress}
          setValue={setWalletAddress}
          label="WALLET ADDRESS"
          important={true}
          placeholder="0x0000000000000000000000000000000000000000"
        />
        <Button label="Register" action={onSubmitHandler} />
      </div>
    </div>
  );
};
const OrganizationalSignupForm: FC = () => {
  const [organizationName, setOrganizationName] = useState<string>("");
  const [contactPersonName, setContactPersonName] = useState<string>("");
  const [contactPersonEmail, setContactPersonEmail] = useState<string>("");
  const [oragnizationType, setOragnizationType] = useState<string>("");
  const [oragnizationSize, setOragnizationSize] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onSubmitHandler = () => {};

  return (
    <div className="text-sm text-start">
      <p>
        Note: As organizations, registering is a key step to access DigiBallot's
        advanced features, including creating voting dashboards and managing
        transparent voting processes. We understand the importance of your role
        in facilitating these processes. While organizations are required to
        register to fully utilize our platform, we want to assure you that our
        dedication to user anonymity remains steadfast. DigiBallot ensures that
        the privacy and anonymity of your participants are preserved throughout
        the voting experience. Our aim is to provide you with the tools you need
        while upholding the values of transparency and user choice. Feel
        confident in using DigiBallot to conduct secure and anonymous voting
        processes for your members or employees.
      </p>
      <div className="mt-10 flex flex-col gap-6">
        <Input
          value={organizationName}
          setValue={setOrganizationName}
          label="ORGANIZATION NAME"
          important={true}
          placeholder="LinkcrateDotcom"
        />
        <CustomFileUploader
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          label="UPLOAD LOGO (OPTIONAL)"
        />
        <div className="flex items-center justify-between">
          <Input
            value={oragnizationType}
            setValue={setOragnizationType}
            label="Organization Type"
            important={true}
            placeholder="Healthcare"
            className="w-[49%]"
          />
          <Input
            value={oragnizationSize}
            setValue={setOragnizationSize}
            label="Organization Size"
            important={true}
            placeholder="50-100"
            className="w-[49%]"
          />
        </div>
        <div className="flex items-center justify-between">
          <Input
            value={contactPersonName}
            setValue={setContactPersonName}
            label="SPOC NAME"
            important={true}
            placeholder="John Doe"
            className="w-[49%]"
          />
          <Input
            value={contactPersonEmail}
            setValue={setContactPersonEmail}
            label="SPOC EMAIL"
            important={true}
            placeholder="johndoe@example.com"
            className="w-[49%]"
          />
        </div>
        <Input
          value={phone}
          setValue={setPhone}
          label="SPOC PHONE (OPTIONAL)"
          important={true}
          placeholder="XXXXX XXXXX"
        />
        <Input
          value={location}
          setValue={setLocation}
          label="Location"
          important={true}
          placeholder="Kolkata, West Bengal"
        />
        {/* <Input
          value={email}
          setValue={setEmail}
          label="EMAIL ID"
          placeholder="johndoe@example.com"
        />
        <Input
          value={walletAddress}
          setValue={setWalletAddress}
          label="WALLET ADDRESS"
          important={true}
          placeholder="0x0000000000000000000000000000000000000000"
        /> */}
        <Button label="Register" action={onSubmitHandler} />
      </div>
    </div>
  );
};

const Signup = () => {
  const [activeTab, setActiveTab] = useState<string>("Individual");

  return (
    <div className="relative w-100 h-[100%] flex justify-center pt-10">
      <div className="w-[50%] h-[90%] overflow-y-scroll m-auto flex flex-col gap-3">
        <Logo />
        <p className="text-sm">
          Join the DigiBallot Community! Create your account now to start
          conducting secure and transparent voting processes.
        </p>
        <p className="text-lg mt-5">SIGNUP AS</p>
        <div className="flex justify-between items-center mt-2 mb-5">
          <SwitchButton
            label="Individual"
            active={activeTab === "Individual"}
            action={() => setActiveTab("Individual")}
          />
          <SwitchButton
            label="Organization"
            active={activeTab === "Organization"}
            action={() => setActiveTab("Organization")}
          />
        </div>
        {activeTab === "Individual" ? (
          <IndividualSignupForm />
        ) : (
          <OrganizationalSignupForm />
        )}
      </div>
    </div>
  );
};

export default Signup;
