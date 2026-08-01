import React from 'react';

/**
 * Structural contract Vajra UI's icon-accepting components expect
 * (IconButton, IconBox, IconSwitch, Badge, etc.). Kept local rather than
 * imported from vajra-ui, since this package has no dependency on it.
 */
export type TVajraIconComponent = React.ComponentType<{
  size: number;
  width: number;
  height: number;
  color: string;
}>;
