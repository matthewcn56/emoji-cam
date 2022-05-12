import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { OKSignGesture, RockOnGesture, CallMeGesture, emojisMap } from "../gestures/gestures"
import * as fp from "fingerpose";
import { drawHand } from "./camUtils"


interface CamGestureProps {
    onClick: () => void
    addLetter: (letter: string) => void
}

export default function CamGesture(props: CamGestureProps) {
    const webcamRef = useRef<null | Webcam>(null);
    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    const detectIntervalRef = useRef<NodeJS.Timer | null>(null);
    const [currentGesture, setCurrentGesture] = useState("");

    useEffect(() => {
        const stopDetecting = () => {
            if (detectIntervalRef.current) {
                clearInterval(detectIntervalRef.current);
                detectIntervalRef.current = null;
            }
        }
        const runHandpose = async () => {
            await tf.ready();
            console.log("Using tf backend", tf.getBackend());
            const net = await handpose.load();

            if (detectIntervalRef.current) return;
            detectIntervalRef.current = setInterval(() => {
                console.log("Detecting...")
                detect(net);
            }, 100)
        }
        const detect = async (net: any) => {
            if (typeof webcamRef.current !== "undefined" && webcamRef.current != null && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
                const video = webcamRef.current.video;
                const { videoHeight, videoWidth } = video;
                webcamRef.current.video.width = videoWidth;
                webcamRef.current.video.height = videoHeight;
                //const videoWidth = webcamRef.current.video.videoWidth;
                //set canvas width and height
                if (canvasRef.current) {
                    canvasRef.current.width = videoWidth;
                    canvasRef.current.height = videoHeight;
                }
                //make detection
                const hand = await net.estimateHands(video);
                if (hand.length > 0) {
                    const GE = new fp.GestureEstimator([
                        fp.Gestures.VictoryGesture,
                        fp.Gestures.ThumbsUpGesture,
                        OKSignGesture,
                        RockOnGesture,
                        CallMeGesture
                    ]);
                    //console.log(hand);
                    const gesture = await GE.estimate(hand[0].landmarks, 8);
                    if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                        const confidence = gesture.gestures.map(
                            (prediction: any) => prediction.score
                        );
                        const maxConfidence = confidence.indexOf(
                            Math.max.apply(null, confidence)
                        );
                        //console.log(gesture.gestures[maxConfidence].name);
                        setCurrentGesture(gesture.gestures[maxConfidence].name);
                    }
                    //drawing mesh
                    if (canvasRef.current) {
                        const ctx = canvasRef.current.getContext("2d");
                        drawHand(hand, ctx);
                    }
                }

            }
        }
        runHandpose();
        return () => {
            stopDetecting();
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        //console.log(currentGesture);
        if (currentGesture) {
            const emoji = (emojisMap as any)[currentGesture];
            if (emoji)
                props.addLetter(emoji);
        }
        // eslint-disable-next-line
    }, [currentGesture])
    return (
        <div onClick={props.onClick}>
            <Webcam ref={webcamRef}

                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zIndex: 9,
                    width: 100,
                    height: 100,
                    marginTop: 50
                }}
            />
            <canvas ref={canvasRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zIndex: 9,
                    width: 100,
                    height: 100,
                    marginTop: 50
                }} />
        </div>
    )
}

