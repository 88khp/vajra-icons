import React from 'react';
import { render } from '@testing-library/react-native';

import {
  AlertCircleIcon,
  AlertTriangleIcon,
  BellIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
  UserIcon,
  XIcon,
} from './index';
import * as VajraIcons from './index';

describe('vajra-ui-icons barrel', () => {
  it('exports exactly the documented set of icon components, each renderable', () => {
    const icons = {
      AlertCircleIcon,
      AlertTriangleIcon,
      BellIcon,
      CheckIcon,
      CheckCircleIcon,
      ChevronDownIcon,
      ChevronLeftIcon,
      ChevronRightIcon,
      ChevronUpIcon,
      CircleIcon,
      HeartIcon,
      HomeIcon,
      InfoIcon,
      MinusIcon,
      MoonIcon,
      PlusIcon,
      SearchIcon,
      SettingsIcon,
      StarIcon,
      SunIcon,
      UserIcon,
      XIcon,
    };

    const exportedIconNames = Object.keys(VajraIcons).filter(name => name !== 'wrapLucideIcon');

    expect(exportedIconNames.sort()).toEqual(Object.keys(icons).sort());

    for (const Icon of Object.values(icons)) {
      expect(() => render(<Icon size={20} width={20} height={20} color="#123456" />)).not.toThrow();
    }
  });

  it('exports the wrapLucideIcon helper for wrapping icons outside the curated set', () => {
    expect(typeof VajraIcons.wrapLucideIcon).toBe('function');
  });
});
