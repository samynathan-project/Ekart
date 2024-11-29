import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import play from '../assets/img/sl-5.avif';
import plays from '../assets/img/sl-6.avif';
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer()
{
    return(
        <div>
            <div className="container bg-secondary border mt-5 mb-5">
                <div className="row">
                    <div className="col-6  mt-4">
                        <p><b>For better experience,download the Takeaway.com app now</b></p>
                    </div>
                    <div className="col-3">
                    <ul>
                        <ul>
                            <Link to={"https://play.google.com/store/apps/details?id=uk.takeaway.android"}><img src={play} alt="play-2"></img></Link>
                        </ul>
                    </ul>
                    </div>
                    <div className="col-3">
                    <ul>
                        <ul>
                            <Link to={"https://apps.apple.com/in/app/takeaway-com/id333214491"}><img src={plays} alt="play-2"></img></Link>
                        </ul>
                    </ul>
                    </div>
                </div>
            </div>
            <div>
           
            </div>
        </div>
    )
}