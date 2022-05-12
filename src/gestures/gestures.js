import * as fp from "fingerpose";

const OKSignGesture = new fp.GestureDescription('ok_sign');

OKSignGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);

OKSignGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
OKSignGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.9);


for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    OKSignGesture.addCurl(finger, fp.FingerCurl.NoCurl);
    OKSignGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    OKSignGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
    OKSignGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
}
export {OKSignGesture};

const RockOnGesture = new fp.GestureDescription('rock_on');

RockOnGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
RockOnGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
RockOnGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
RockOnGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

RockOnGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
RockOnGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
RockOnGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
RockOnGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring]) {
    RockOnGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export {RockOnGesture};

const CallMeGesture = new fp.GestureDescription('call_me');

CallMeGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
CallMeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
CallMeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
CallMeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

CallMeGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 1.0);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 1.0);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    CallMeGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export {CallMeGesture};

const ThumbsDownGesture = new fp.GestureDescription('thumbs_down');

ThumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    ThumbsDownGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    ThumbsDownGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }


export {ThumbsDownGesture};

const MiddleFingerGesture = new fp.GestureDescription('middle_finger');

MiddleFingerGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
MiddleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
MiddleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
MiddleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    MiddleFingerGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    MiddleFingerGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }


  export {MiddleFingerGesture};

  const LoveYouGesture = new fp.GestureDescription('love_you');

  LoveYouGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  LoveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
  LoveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
  
  LoveYouGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
  LoveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
  LoveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
  LoveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
  
  LoveYouGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  LoveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
  LoveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
  LoveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);
  
  for (let finger of [fp.Finger.Middle, fp.Finger.Ring]) {
      LoveYouGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  }
export {LoveYouGesture}  

  export const emojisMap = {
      "thumbs_up" : "👍",
      "victory" : "✌️",
      "call_me" : "🤙",
      "ok_sign" : "👌",
      "rock_on" : "🤟"
  };


