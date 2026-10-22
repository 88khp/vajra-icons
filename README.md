# @88khp/vajra-icons

[**Documentation**](https://88khp.github.io/vajra-icons/)

Lucide icon adapters for [Vajra UI](https://github.com/88khp/vajra-ui)'s icon component
contract (`IconButton`, `IconBox`, `IconSwitch`, `Badge`, `Checkbox`, `Accordion`, `Alert`, `Chip`,
`Select`, and anywhere else a `TVajraIconComponent` is accepted).

Vajra UI ships with no bundled icons — any icon-accepting component takes a plain
`{ size, width, height, color }` component. This package wraps a curated set of
[Lucide](https://lucide.dev) icons so you don't have to write that adapter yourself, without
forcing Lucide on anyone who wants to bring their own icons instead.

## Is it for you?

### Why use it

- You use `@88khp/vajra-ui` and want icons that work with its icon props straight away.
- You want Lucide icons without writing an adapter for each one.

### The problem it solves

Vajra UI components take a plain icon component with `size`, `width`, `height` and `color`. Wiring a Lucide icon to that contract means writing the same adapter for every icon. This package does it once for a curated set.

### Who it's not for

- Apps that don't use Vajra UI. The adapters target its icon contract.
- Teams that want an icon set other than Lucide. Bring your own icon components instead.

### What it doesn't do

- It doesn't include the full Lucide library. It exports a curated set.
- It doesn't bundle `lucide-react-native` or `react-native-svg`. Both are peer dependencies, so you control their versions.

---

## Install

```bash
npm install @88khp/vajra-icons lucide-react-native react-native-svg
```

`lucide-react-native` and `react-native-svg` are peer dependencies — you control their versions.

## Usage

```tsx
import { IconButton } from 'vajra-ui';
import { BellIcon } from '@88khp/vajra-icons';

<IconButton icon={BellIcon} onPress={() => {}} />;
```

## Icons included

`AlertCircleIcon`, `AlertTriangleIcon`, `BellIcon`, `CheckIcon`, `CheckCircleIcon`,
`ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon`, `CircleIcon`,
`HeartIcon`, `HomeIcon`, `InfoIcon`, `MinusIcon`, `MoonIcon`, `PlusIcon`, `SearchIcon`,
`SettingsIcon`, `StarIcon`, `SunIcon`, `UserIcon`, `XIcon`.

Need one that isn't here? Wrap it yourself with the exported helper:

```tsx
import { wrapLucideIcon } from '@88khp/vajra-icons';
import { Trash2 } from 'lucide-react-native';

const TrashIcon = wrapLucideIcon(Trash2);
```

## License

MIT
