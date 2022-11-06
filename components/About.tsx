import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        // viewport={{ once: true }}
        src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.18169-9/14440825_970910346368193_1319467220109149433_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RaqhdgfCozEAX_tZxvl&_nc_ht=scontent.fyyz1-2.fna&oh=00_AT8VYVL9uQvltU8iL69926BnKdYVxi_lE1CFvY4wVY24_A&oe=636F5D9B"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is <span className="underline decoration-[#f7ab0a]/50">little</span> background
        </h4>
        <ul className="text-base">
          <li>
            My expertise covers over 20 years of strong experience in software design, development,
            testing, and deploying with a combination of extensive working knowledge of:
          </li>
          <li>Object-Oriented Design and programming.</li>
          <li>Agile Software Development, SCRUM.</li>
          <li>Win App, Web applications & Web services development.</li>
          <li>
            Web development with modern libs and frameworks (React.js, Node.js, Express, Redux,
            Saga).
          </li>
          <li>Relational database concepts.</li>
          <li>
            Possession of excellent analytical, design, and problem-solving skills. Self-starter,
            who learns quickly and applies initiative to get the job done. Energetic, with a great
            sense of teamwork, flexible, resourceful, and result-oriented, ease of learning new
            ideas/concepts/technologies, new development environments, and methodologies.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
