import React, { useState } from "react";


interface ToggleCamProps {
    onClick: () => void
}



export default function ToggleCam(props: ToggleCamProps) {
    const [displayedEmoji, setDisplayedEmoji] = useState(false);
    return (
        <div>
            Toggle Cam!
        </div>
    )
}