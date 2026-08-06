import React from 'react';
import { render } from '@testing-library/react-native';
import { Bell } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import { Svg } from 'react-native-svg';

import { wrapLucideIcon } from './wrap-lucide-icon';

describe('wrapLucideIcon', () => {
  it('passes size and color through to the underlying Lucide icon', () => {
    const BellIcon = wrapLucideIcon(Bell);
    const { UNSAFE_getByType } = render(
      <BellIcon size={24} width={24} height={24} color="#ff0000" />,
    );

    const svg = UNSAFE_getByType(Svg);

    expect(svg.props.width).toBe(24);
    expect(svg.props.height).toBe(24);
    expect(svg.props.stroke).toBe('#ff0000');
  });

  it('ignores width/height from the Vajra contract, deferring to size', () => {
    // The Vajra icon contract requires width/height props, but wrapLucideIcon
    // never forwards them to the underlying Lucide icon — size alone controls
    // both dimensions there (Lucide's Icon sets Svg's width/height from size
    // internally). Guard against a future edit accidentally wiring the Vajra
    // width/height straight through and distorting aspect ratio for any
    // consumer passing size !== width/height.
    const BellIcon = wrapLucideIcon(Bell);
    const { UNSAFE_getByType } = render(
      <BellIcon size={16} width={999} height={999} color="#000" />,
    );

    const svg = UNSAFE_getByType(Svg);

    expect(svg.props.width).toBe(16);
    expect(svg.props.height).toBe(16);
  });

  it('sets a displayName derived from the wrapped icon', () => {
    const BellIcon = wrapLucideIcon(Bell);

    expect(BellIcon.displayName).toBe('VajraIcon(Bell)');
  });

  it('falls back to "Lucide" when the wrapped icon has no displayName', () => {
    const Nameless = (() => null) as unknown as LucideIcon;

    const WrappedIcon = wrapLucideIcon(Nameless);

    expect(WrappedIcon.displayName).toBe('VajraIcon(Lucide)');
  });
});
