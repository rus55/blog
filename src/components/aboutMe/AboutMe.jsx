import React from 'react';
import {Link} from "react-router-dom";

const AboutMe = () => {
    return (
        <>
            <Link to={'/'}>Back</Link>
            <div>
                <div>FRONTEND DEVELOPER|</div>
                <div>I am a frontend developer with experience in developing user interface (UI) for web applications
                    using
                    React, Redux, Redux Toolkit, JavaScript, TypeScript.
                </div>

                <div>I have experience in using ReactJS components, forms, events, keys, router, as well as the concept
                    of
                    Redux and Flux. I also have commercial experience in writing automated tests.
                </div>
            </div>
        </>
    );
};

export default AboutMe;