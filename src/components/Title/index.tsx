import React from 'react';
import {
  Linebreaker, Pause, WindupChildren,
} from 'windups';

type TitleProps = {
  setTitleOver: React.Dispatch<React.SetStateAction<boolean>>
};

function Title(props: TitleProps) {
  const { setTitleOver } = props;

  return (
    <section
      className="dark:text-neutral-200 text-4xl p-4 font-['Poppins'] font-semibold select-none"
    >
      <Linebreaker fontStyle="36px 'Poppins', semibold" width={300}>
        <WindupChildren onFinished={setTitleOver as () => void}>
          <div>Hi, I&apos;m Daniel</div>
          <Pause ms={400} />
          <div>Full-Stack Developer,</div>
          <div>UI/UX Designer</div>
        </WindupChildren>
      </Linebreaker>
    </section>
  );
}

export default Title;
