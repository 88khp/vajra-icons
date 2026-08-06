import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import IconGrid from '@site/src/components/IconGrid';

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Vajra UI Icons"
      description="Lucide icon adapters for Vajra UI's icon component contract"
    >
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Vajra UI Icons
          </Heading>
          <p className="hero__subtitle">Lucide icon adapters for Vajra UI&apos;s icon contract</p>
        </div>
      </header>

      <main>
        <section className="container margin-vert--lg">
          <p>
            Vajra UI ships with no bundled icons &mdash; any icon-accepting component (
            <code>IconButton</code>, <code>IconBox</code>, <code>IconSwitch</code>,{' '}
            <code>Badge</code>, <code>Checkbox</code>, <code>Accordion</code>, <code>Alert</code>,{' '}
            <code>Chip</code>, <code>Select</code>, and anywhere else a{' '}
            <code>TVajraIconComponent</code> is accepted) takes a plain{' '}
            <code>{'{ size, width, height, color }'}</code> component. This package wraps a
            curated set of <a href="https://lucide.dev">Lucide</a> icons so you don&apos;t have to
            write that adapter yourself, without forcing Lucide on anyone who wants to bring their
            own icons instead.
          </p>

          <Heading as="h2">Install</Heading>
          <CodeBlock language="bash">
            npm install @devraj-labs/vajra-ui-icons lucide-react-native react-native-svg
          </CodeBlock>
          <p>
            <code>lucide-react-native</code> and <code>react-native-svg</code> are peer
            dependencies &mdash; you control their versions.
          </p>

          <Heading as="h2">Usage</Heading>
          <CodeBlock language="tsx">
            {`import { IconButton } from 'vajra-ui';
import { BellIcon } from '@devraj-labs/vajra-ui-icons';

<IconButton icon={BellIcon} onPress={() => {}} />;`}
          </CodeBlock>

          <Heading as="h2">Icons</Heading>
          <p>All 22 curated icons, rendered live. Each tile is labeled with its export name.</p>
          <IconGrid />

          <Heading as="h2">Need a different icon?</Heading>
          <p>
            Wrap any other Lucide icon yourself with the exported <code>wrapLucideIcon</code>{' '}
            helper:
          </p>
          <CodeBlock language="tsx">
            {`import { wrapLucideIcon } from '@devraj-labs/vajra-ui-icons';
import { Trash2 } from 'lucide-react-native';

const TrashIcon = wrapLucideIcon(Trash2);`}
          </CodeBlock>
        </section>
      </main>
    </Layout>
  );
}
