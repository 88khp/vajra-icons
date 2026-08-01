import React from 'react';
import type { LucideIcon } from 'lucide-react-native';

import { TVajraIconComponent } from './types';

/**
 * Adapts a Lucide icon component to Vajra UI's icon contract. Lucide's `size`
 * prop already sets both width and height internally, and `color` maps
 * directly to `stroke` — so `width`/`height` from the Vajra contract are
 * intentionally unused here.
 */
export const wrapLucideIcon = (Icon: LucideIcon): TVajraIconComponent => {
  const Wrapped: TVajraIconComponent = ({ size, color }) => <Icon size={size} color={color} />;

  Wrapped.displayName = `VajraIcon(${Icon.displayName ?? 'Lucide'})`;

  return Wrapped;
};
