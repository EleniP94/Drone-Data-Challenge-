import * as React from 'react';
import { SiBunq } from 'react-icons/si';

type Props = {}

export interface DroneDetailProps {
    imageId: string;
    timestamp: string;
    latitude: string;
    longitude: string;
    altitudeM: number;
    headingDeg: number;
    fileName: string;
    cameraTiltDeg: number;
    focalLengthMm: number;
    iso: number;
    shutterSpeed: string;
    aperture: string;
    colorTempK: number;
    imageFormat: string;
    fileSizeMb: number;
    droneSpeedMps: number;
    batteryLevelPct: number;
    gpsAccuracyM: number;
    gimbalMode: string;
    subjectDetection: string;
    imageTags: string[];
}

export default function DroneDetails (props: DroneDetailProps) {
    const {
        imageId = "003",
        timestamp = "2024-09-24 14:36:47",
        latitude = "44.4275 N",
        longitude = "110.5888 W",
        altitudeM = 100,
        headingDeg = 90,
        fileName = "YNP_003.jpg",
        cameraTiltDeg = 0,
        focalLengthMm = 50,
        iso = 400,
        shutterSpeed = "1/2000",
        aperture = "f/5.6",
        colorTempK = 5800,
        imageFormat = "RAW+JPEG",
        fileSizeMb = 26.8,
        droneSpeedMps = 2.5,
        batteryLevelPct = 91,
        gpsAccuracyM = 0.4,
        gimbalMode = "Tripod",
        subjectDetection = "Yes",
        imageTags = ["Wildlife", "Elk"]
    } = props;

  return (
   <>
   <SingleDroneDetail
   information = "imageId"
   value = {imageId}
   />

   <SingleDroneDetail
   information = "timestamp"
   value = {timestamp}
   />

   <SingleDroneDetail
   information = "latitude"
   value = {latitude}
   />

   <SingleDroneDetail
   information = "longitude"
   value = {longitude}
   />

   <SingleDroneDetail
   information = "altitudeM"
   value = {altitudeM}
   />

   <SingleDroneDetail
   information = "headingDeg"
   value = {headingDeg}
   />


   </>
  );
}
export interface SingleDroneDetailProps {
    information: string;
    icon: React.ReactNode;
    Value: string;
}

function SingleDroneDetail(props: SingleDroneDetailProps) {
    return (
        <div className = "flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
            <p className = "whitespace-nowrap">{props.information}</p>
        </div>
    );
}