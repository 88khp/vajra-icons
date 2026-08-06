# @devraj-labs/vajra-ui-icons

[**Documentation**](https://devraj-labs.github.io/vajra-ui-icons/)

Lucide icon adapters for [Vajra UI](https://github.com/devraj-labs/vajra-ui)'s icon component
contract (`IconButton`, `IconBox`, `IconSwitch`, `Badge`, `Checkbox`, `Accordion`, `Alert`, `Chip`,
`Select`, and anywhere else a `TVajraIconComponent` is accepted).

Vajra UI ships with no bundled icons — any icon-accepting component takes a plain
`{ size, width, height, color }` component. This package wraps a curated set of
[Lucide](https://lucide.dev) icons so you don't have to write that adapter yourself, without
forcing Lucide on anyone who wants to bring their own icons instead.

## Install

```bash
npm install @devraj-labs/vajra-ui-icons lucide-react-native react-native-svg
```

`lucide-react-native` and `react-native-svg` are peer dependencies — you control their versions.

## Usage

```tsx
import { IconButton } from 'vajra-ui';
import { BellIcon } from '@devraj-labs/vajra-ui-icons';

<IconButton icon={BellIcon} onPress={() => {}} />;
```

## Icons included

`AlertCircleIcon`, `AlertTriangleIcon`, `BellIcon`, `CheckIcon`, `CheckCircleIcon`,
`ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon`, `CircleIcon`,
`HeartIcon`, `HomeIcon`, `InfoIcon`, `MinusIcon`, `MoonIcon`, `PlusIcon`, `SearchIcon`,
`SettingsIcon`, `StarIcon`, `SunIcon`, `UserIcon`, `XIcon`.

Need one that isn't here? Wrap it yourself with the exported helper:

```tsx
import { wrapLucideIcon } from '@devraj-labs/vajra-ui-icons';
import { Trash2 } from 'lucide-react-native';

const TrashIcon = wrapLucideIcon(Trash2);
```

## License

MIT
