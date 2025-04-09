# Avatar Generator

English | [中文文档](./README_Zh.MD)

## English Documentation

### Project Overview
A canvas-based avatar generator tool that supports both React and Vue frameworks. Generates unique colored avatars from any input string.

### Features
- 🎨 Generate colored avatars from any string
- ⚛️ React component version
- 🖖 Vue component version
- 🌀 Support for both circle and square styles
- 🎯 Automatic high contrast between background and text colors

### Installation & Usage

#### Install
```bash
npm install @zenos-chen/avatar
```

#### React Usage 
```jsx
import { Avatar} from '@zenos-chen/avatar';

function App() {
  return <Avatar str="H" height={200} />;
}
```

![quare](./doc/quare.png)


### React Circle Usage
```jsx
import { AvatarCircle } from '@zenos-chen/avatar';

function App() {
  return <AvatarCircle str="H" height={200} />;
}
```
![circle](./doc/circle.png)

#### Vue Usage
```ts
<script setup>
import { Avatar } from '@zenos-chen/avatar/vue';
</script>

<template>
  <Avatar str="H" :height="200" />
</template>
```

![quare](./doc/quare.png)

### Development Guide

#### Local Development
```bash
npm run dev
```

#### Production Build
```bash
npm run build
```

### Project Structure
```
avatar/
├── dist/            # Build output
├── playground/      # Development playground
├── src/
│   ├── react/       # React implementation
│   ├── vue/         # Vue implementation
│   └── util/        # Core utilities
└── package.json
```

### Contributing
PRs and issues are welcome!