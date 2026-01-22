# Video Player

Full-featured HTML5 video player with custom controls, keyboard shortcuts, and fullscreen support.

## Usage

```html
<sc-video-player [src]="'video.mp4'" [poster]="'poster.jpg'" />
```

## API

### VideoSource

```typescript
interface VideoSource {
  src: string;
  type?: string;
  label?: string;
}
```

### VideoTrack

```typescript
interface VideoTrack {
  src: string;
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
  srclang: string;
  label: string;
  default?: boolean;
}
```

### ScVideoPlayer

| Input               | Type            | Default  | Description                |
| ------------------- | --------------- | -------- | -------------------------- |
| `src`               | `string`        | `''`     | Video source URL           |
| `sources`           | `VideoSource[]` | `[]`     | Multiple video sources     |
| `tracks`            | `VideoTrack[]`  | `[]`     | Subtitle/caption tracks    |
| `poster`            | `string`        | `''`     | Poster image URL           |
| `autoplay`          | `boolean`       | `false`  | Auto-play (requires muted) |
| `loop`              | `boolean`       | `false`  | Loop video                 |
| `muted`             | `boolean`       | `false`  | Start muted                |
| `playsInline`       | `boolean`       | `true`   | Inline playback on mobile  |
| `showSkipButtons`   | `boolean`       | `true`   | Show skip forward/back     |
| `showPlaybackSpeed` | `boolean`       | `true`   | Show speed selector        |
| `showPiP`           | `boolean`       | `true`   | Show picture-in-picture    |
| `showBigPlayButton` | `boolean`       | `true`   | Show center play button    |
| `aspectRatio`       | `string`        | `'16/9'` | Video aspect ratio         |
| `class`             | `string`        | -        | Additional CSS classes     |

| Model          | Type     | Default | Description        |
| -------------- | -------- | ------- | ------------------ |
| `volume`       | `number` | `1`     | Volume level (0-1) |
| `playbackRate` | `number` | `1`     | Playback speed     |

| Output       | Type     | Description                |
| ------------ | -------- | -------------------------- |
| `play`       | `void`   | Emits when playback starts |
| `pause`      | `void`   | Emits when playback pauses |
| `ended`      | `void`   | Emits when video ends      |
| `timeUpdate` | `number` | Emits current time         |

## Examples

### Basic Usage

```html
<sc-video-player [src]="'/videos/sample.mp4'" [poster]="'/images/poster.jpg'" />
```

### Multiple Sources

```html
<sc-video-player
  [sources]="[
    { src: '/videos/sample.webm', type: 'video/webm' },
    { src: '/videos/sample.mp4', type: 'video/mp4' }
  ]"
/>
```

### Autoplay (Muted)

Browser policies require muted videos for autoplay:

```html
<sc-video-player [src]="video" [autoplay]="true" [muted]="true" />
```

### Minimal Controls

```html
<sc-video-player [src]="video" [showSkipButtons]="false" [showPlaybackSpeed]="false" [showPiP]="false" />
```

### With Subtitles

```html
<sc-video-player
  [src]="video"
  [tracks]="[
    { src: '/subs/en.vtt', kind: 'subtitles', srclang: 'en', label: 'English', default: true },
    { src: '/subs/es.vtt', kind: 'subtitles', srclang: 'es', label: 'Spanish' }
  ]"
/>
```

### Custom Aspect Ratio

```html
<sc-video-player [src]="video" [aspectRatio]="'4/3'" />
```

## Keyboard Shortcuts

| Key           | Action                 |
| ------------- | ---------------------- |
| `Space` / `K` | Play/Pause             |
| `←`           | Seek back 5 seconds    |
| `→`           | Seek forward 5 seconds |
| `↑`           | Volume up              |
| `↓`           | Volume down            |
| `M`           | Mute/Unmute            |
| `F`           | Toggle fullscreen      |

## Features

- Custom styled controls with gradient overlay
- Progress bar with buffered indicator
- Volume slider with mute toggle
- Playback speed selection (0.25x - 2x)
- Skip forward/back buttons
- Picture-in-picture support
- Fullscreen mode
- Keyboard navigation
- Double-click to fullscreen
- Auto-hide controls during playback
- Buffering indicator

## Accessibility

- ARIA labels on all controls
- Keyboard navigable
- Screen reader friendly
- Focus indicators
