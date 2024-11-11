import Image from "next/image";
import Container from "@/Components/Container";
import Navbar from "@/Components/Navbar";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import axios from "axios";
import DroneDetails from "@/Components/droneDetails";
import UserQuery from "@/Components/UserQuery";


type ImageData = {
  imageId?: string;
  timestamp?: string;
  latitude?: string;
  longitude?: string;
  altitudeM?: number;
  headingDeg?: number;
  fileName?: string;
  cameraTiltDeg?: number;
  focalLengthMm?: number;
  iso?: number;
  shutterSpeed?: string;
  aperture?: string;
  colorTempK?: number;
  imageFormat?: string;
  fileSizeMb?: number;
  droneSpeedMps?: number;
  batteryLevelPct?: number;
  gpsAccuracyM?: number;
  gimbalMode?: string;
  subjectDetection?: string;
  imageTags?: string[];
};

// Define the array type
type ImageDataArray = ImageData[];


export default function Home() {
  const {isLoading, error, data } = useQuery<ImageData>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const { data } = await axios.get( 
        `${process.env.Drone_Key}`
      );
      return data;

    }
  });

  const firstData = data?.list[0];

  console.log("data", data);

  if (isLoading) 
    return (
  <div className = "flex items-center min-h-screen justify-center">
    <p className = "animate-bounce"> Loading... </p>
  </div>
  );


  return (
    <div className= "flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className= "px-3 max-w-7x1 mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* Drone Data */}
        <section>
         <Container className = "bg-blue-500/80 px-6 gap-4 justify-between overflow-x-auto">
         <DroneDetails 
         imageId = {`${firstData?.main.imageId}`}
         timestamp = {`${firstData?.main.timestamp}`}
         latitude = {`${firstData?.main.latitude}`}
         longitude = {`${firstData?.main.longitude}`}
         altitudeM = {`${firstData?.main.altitudeM}`}
         headingDeg = {`${firstData?.main.headingDeg}`}


         />
         </Container>
        </section>

        {/* User Queries */}
        <section>
          <Container className= "bg-white-500/80 px-6 gap-4 justify-between overflow-x-auto">
          <UserQuery/>
          </Container>
          
        </section>
      </main>
    </div>
  
  );
}
