import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, my name is Vladimir V', 'Developer', 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.18169-9/14440825_970910346368193_1319467220109149433_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RaqhdgfCozEAX_tZxvl&_nc_ht=scontent.fyyz1-2.fna&oh=00_AT8VYVL9uQvltU8iL69926BnKdYVxi_lE1CFvY4wVY24_A&oe=636F5D9B"
        alt=""
        width="128"
        height="128"
      />
      <div className="z-20">
        <h2 className="test-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
