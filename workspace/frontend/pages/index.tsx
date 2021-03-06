import BaseLayout from '@components/BaseLayout';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <BaseLayout className="mt-24 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
      Under Construction{' '}
      <span role="img" aria-label="roadwork sign">
        🚧
      </span>
    </BaseLayout>
  );
};

export default Home;
