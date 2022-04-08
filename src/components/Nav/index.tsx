import React from 'react';
import {
  FaGithub, FaLinkedin, FaTwitter, FaBook, FaJenkins, FaFilePdf,
} from 'react-icons/fa';
import FadeIn from 'react-fade-in';
import Link from '../Link';

type NavProps = {
  titleOver: boolean
};

function Nav(props: NavProps) {
  const { titleOver } = props;
  return (
    <FadeIn
      className="flex-1 p-4 flex flex-col items-stretch justify-center gap-4"
      wrapperTag={'nav' as any}
      visible={titleOver}
    >
      <Link title="Portfolio" href="https://chew01.github.io/" icon={FaBook} />
      <Link title="Resume" href="https://fs.kitsuiro.com/docs/CV_Daniel.pdf" icon={FaFilePdf} />
      <Link title="Github" href="https://github.com/chew01" icon={FaGithub} />
      <Link title="LinkedIn" href="https://www.linkedin.com/in/chewjunheng/" icon={FaLinkedin} />
      <Link title="Twitter" href="https://twitter.com/lifelessfruit" icon={FaTwitter} />
      <Link title="Jenkins" href="https://jenkins.kitsuiro.com/" icon={FaJenkins} />
    </FadeIn>
  );
}

export default Nav;
