import { JSX } from 'react';
import { FaGithub, FaPenNib } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

function ProfileSection(): JSX.Element {
  return (
    <div className="text-center border-b border-gray-300 pb-4 mb-4">
      <h1 className="text-2xl font-bold text-pink-500 mb-2">
        Yumekawa Holdings
      </h1>
      <p className="text-gray-600 text-sm mb-4">
        世界をゆめかわいく侵略します🌈
      </p>

      <div className="flex flex-col items-center mb-4">
        <Image
          src="/icon.png"
          alt="Yumekawa-chan"
          width={150}
          height={150}
          className="rounded-full shadow-md"
        />
        <p className="text-pink-500 font-semibold mt-2">Yumekawa-chan</p>
        <p className="text-gray-600 text-sm">
          現実を溶かし、甘美なる悪夢で染め上げるゆめかわの造物主🦄
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          href="https://github.com/Yumekawa-chan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 text-2xl"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://zenn.dev/yumekawa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 text-2xl"
        >
          <FaPenNib />
        </Link>
      </div>
    </div>
  );
}

function CurrentSection(): JSX.Element {
  return (
    <div className="space-y-4">
      <Section title="今していること" color="violet-500">
        これ作っている
      </Section>
      <Section title="今いる場所" color="pink-500">
        自宅
      </Section>
      <TodoSection />
    </div>
  );
}

type SectionProps = {
  title: string;
  color: string;
  children: string | JSX.Element;
};

function Section({ title, color, children }: SectionProps): JSX.Element {
  return (
    <div className="text-center">
      <h3 className={`text-lg font-semibold text-${color}`}>{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function getTasks(): Task[] {
  return [
    { id: 1, title: 'タスク1: ダミーチェック', completed: false },
    { id: 2, title: 'タスク2: ダミーチェック', completed: false },
    { id: 3, title: 'タスク3: ダミーチェック', completed: false },
  ];
}

function TodoSection(): JSX.Element {
  const tasks = getTasks();

  return (
    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold text-violet-500 mb-4">本日のTODO</h3>
      <div className="flex flex-col items-start space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center bg-violet-100 p-2 rounded-md shadow-sm w-full"
          >
            <input
              type="checkbox"
              disabled
              checked={task.completed}
              className="mr-3 w-5 h-5 text-violet-500 focus:ring-violet-500 cursor-not-allowed"
            />
            <span className="text-gray-700">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MainCard(): JSX.Element {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
      <ProfileSection />
      <CurrentSection />
    </div>
  );
}
