import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -120,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGTVqW1l_q2FA/company-logo_200_200/0/1662044206978?e=1674086400&v=beta&t=GsW0rFOgpHV84bwX5BKRB9RJbuagrZQAYiUgnPz3TpI"
        alt=""
      />
      <div>
        <h4>Software Developer</h4>
        <p>Microsoft</p>
      </div>
    </article>
  );
}

export default ExperienceCard;
