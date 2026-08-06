import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

/**
 * Live-renders all 22 curated icons in a grid, each labeled with its export
 * name. Wrapped in BrowserOnly since the icons ultimately render through
 * react-native-svg, which touches browser globals not available during
 * Docusaurus's Node.js SSR pass.
 */
export default function IconGrid(): React.ReactElement {
  return (
    <BrowserOnly fallback={<div className={styles.grid} />}>
      {() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const icons = require('@devraj-labs/vajra-ui-icons');

        const entries = Object.keys(icons)
          .filter((key) => key.endsWith('Icon'))
          .sort()
          .map((key) => [key, icons[key]] as const);

        return (
          <div className={styles.grid}>
            {entries.map(([name, Icon]) => (
              <div key={name} className={styles.tile}>
                <div className={styles.iconWrap}>
                  <Icon size={28} width={28} height={28} color="currentColor" />
                </div>
                <code className={styles.label}>{name}</code>
              </div>
            ))}
          </div>
        );
      }}
    </BrowserOnly>
  );
}
