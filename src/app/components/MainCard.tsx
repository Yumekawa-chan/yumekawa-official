import { FaGithub, FaPenNib, FaMapMarkerAlt, FaTools } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { JSX } from 'react';

type Props = {
  location: string;
  doing: string;
};

function IconLink({
  href,
  icon,
}: {
  href: string;
  icon: JSX.Element;
}): JSX.Element {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-pink-500 text-2xl"
    >
      {icon}
    </Link>
  );
}

function ProfileCard(): JSX.Element {
  return (
    <div className="flex flex-col items-center mb-4">
      <Image
        src="/icon.png"
        alt="Yumekawa-chan"
        width={150}
        height={150}
        className="rounded-full shadow-md"
      />
      <div className="inline-block text-center p-2">
        <p className="text-sm font-bold text-pink-500">代表取締役</p>
        <p className="text-lg font-bold text-violet-500">Yumekawa-chan</p>
      </div>
      <p className="text-gray-600 text-sm">
        現実を溶かし、甘美なる悪夢で染め上げるゆめかわの造物主🦄
      </p>
    </div>
  );
}

type SectionProps = {
  title: string;
  color: string;
  icon: JSX.Element;
  children: string | JSX.Element;
};

function Section({ title, color, icon, children }: SectionProps): JSX.Element {
  return (
    <div className="text-center">
      <h3
        className={`text-lg font-semibold flex items-center justify-center text-${color}`}
      >
        {title}
        <div className="ml-2">{icon}</div>
      </h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

function CurrentSection({ location, doing }: Props): JSX.Element {
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-xl font-bold text-pink-500 mb-2">Yumekawa LIVE</p>
        <p className="text-gray-600 text-sm">
          Yumekawa-chanの"今"がリアルタイムで更新されます🍭
        </p>
      </div>
      <div className="space-y-4">
        <Section title="今ココ" color="violet-500" icon={<FaMapMarkerAlt />}>
          {location}
        </Section>
        <Section title="今していること" color="violet-500" icon={<FaTools />}>
          {doing}
        </Section>
      </div>
    </div>
  );
}

function ProfileSection(): JSX.Element {
  return (
    <div className="text-center border-b border-gray-300 pb-4 mb-4">
      <h1 className="text-2xl font-bold text-pink-500 mb-2">
        Yumekawa Holdings
      </h1>
      <p className="text-gray-600 text-sm mb-4">
        世界をゆめかわいく侵略します🌈
      </p>
      <ProfileCard />
      <div className="flex justify-center space-x-4">
        <IconLink href="https://github.com/Yumekawa-chan" icon={<FaGithub />} />
        <IconLink href="https://zenn.dev/yumekawa" icon={<FaPenNib />} />
      </div>
    </div>
  );
}

export default function MainCard({ location, doing }: Props): JSX.Element {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full h-auto">
      <ProfileSection />
      <CurrentSection location={location} doing={doing} />
    </div>
  );
}
