import React from 'react'

export const Bed = (props) => {
  return (
    <svg fill="none" className={`${props.font === "small" ? "h-4 w-4" : "h-6 w-6"}`} color={`${props.color ? props.color : 'none'}`} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor">
        {/* <defs>
            <style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style>
        </defs> */}
        <path class="cls-1" d="M1.5,9.14H19.64A2.86,2.86,0,0,1,22.5,12v1.91a0,0,0,0,1,0,0H1.5a0,0,0,0,1,0,0V9.14A0,0,0,0,1,1.5,9.14Z"/>
        <rect class="cls-1" x="1.5" y="13.91" width="21" height="3.82"/>
        <line class="cls-1" x1="1.5" y1="21.55" x2="1.5" y2="2.45"/>
        <line class="cls-1" x1="22.5" y1="21.55" x2="22.5" y2="17.73"/>
        <path class="cls-1" d="M3.56,5.32H6.12A2.06,2.06,0,0,1,8.18,7.38v0A1.76,1.76,0,0,1,6.43,9.14H3.26A1.76,1.76,0,0,1,1.5,7.38v0A2.06,2.06,0,0,1,3.56,5.32Z"/>
        <line class="cls-1" x1="12" y1="9.14" x2="12" y2="13.91"/>
    </svg>
  )
}
