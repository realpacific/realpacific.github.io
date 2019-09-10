import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriter() {
    const list = ['Prashant Barahi;', '@realpacific;', 'Full-Stack Software Engineer;'];
    const duration = 200;
    return (
        <div className="Typewriter">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello, World!')
                        .pauseFor(duration)
                        .deleteAll()
                        .typeString('I am ')
                        .changeDeleteSpeed(1)
                        .typeString(list[0])
                        .pauseFor(duration)
                        .deleteChars(list[0].length)
                        .typeString(list[1])
                        .pauseFor(duration)
                        .deleteChars(list[1].length)
                        .typeString(list[2])
                        .pauseFor(duration)
                        .deleteChars(list[2].length)
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}

export default TypeWriter;
