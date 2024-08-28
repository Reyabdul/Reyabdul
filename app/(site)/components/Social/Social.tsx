import React from "react";

import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';

import "../../../globals.css"
import "./Social.css"

export default function Social() {
    return(
        <div className="social-container">
            <a href="https://www.linkedin.com/in/reyabdul/">
                <UilLinkedin className="icons" size="30" color="#FFF" />
            </a>
            <a href="https://github.com/Reyabdul">
                <UilGithub className="icons" size="30" color="#FFF" />
            </a>
            <a href="https://www.instagram.com/rey35mm.jpg/">
                <UilInstagram className="icons" size="30" color="#FFF" />
            </a>
        </div>
    )
}