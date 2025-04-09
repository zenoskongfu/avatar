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
npm install avatar-generator
```

#### React Usage
```jsx
import { AvatarReact } from 'avatar';

function App() {
  return <AvatarReact str="Example" height={200} />;
}
```

#### Vue Usage
```vue
<script setup>
import { AvatarVue } from 'avatar';
</script>

<template>
  <AvatarVue str="Example" :height="200" />
</template>
```

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