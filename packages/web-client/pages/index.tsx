import Head from 'next/head';
import Image from 'next/image';
import { TextWithUnderline } from '@web/components/src/components/atoms/text';
import { DefaultButton } from '@web/components/src/components/atoms/button';
import { TextAndButton } from '@web/components/src/components/molecules/text-and-button';

// eslint-disable-next-line max-lines-per-function
export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Example nextjs, typescript, tailwindcss</title>
        <meta name="description" content="Example nextjs, typescript, tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>
            <TextWithUnderline text="Example nextjs, typescript, tailwindcss" />
          </h1>
          <DefaultButton label="Example normal button" />
          <DefaultButton label="Example primary button" primary />
        </div>
        <div>
          <h2>Molecules Example</h2>
          <TextAndButton textTitle="Molecules " buttonLabel="Molecules button" buttonProps={{ primary: true }} />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}
