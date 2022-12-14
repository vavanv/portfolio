import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
    duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -120,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="tex-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-l">{experience?.company}</p>
        <div className="flex space-x-4 my-2">
          {experience?.technologies?.map(technology => (
            <motion.img
              key={technology._id}
              className="h-10 w-10 cursor-pointer"
              src={urlFor(technology?.image).url()}
              alt=""
              title={technology?.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {(new Date(experience.dateStarted).getMonth() + 1).toString() +
            '/' +
            new Date(experience.dateStarted).getFullYear().toString()}
          -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : (new Date(experience.dateEnded).getMonth() + 1).toString() +
              '/' +
              new Date(experience.dateEnded).getFullYear().toString()}
        </p>
        <ul
          className="list-disc space-y-4 ml-5 text-lg scroll h-80 overflow-y-scroll pr-5
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80 "
        >
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
