# Audio Player

Feature-rich audio player with playlist support, shuffle, repeat, and volume controls.

## Components

- `ScAudioPlayer` - Full-featured audio player
- `ScAudioPlayerMinimal` - Simplified player wrapper

## Usage

```html
<sc-audio-player [tracks]="tracks" />
```

## API

### AudioTrack

```typescript
interface AudioTrack {
  src: string;
  title?: string;
  artist?: string;
  cover?: string;
  duration?: number;
}
```

### ScAudioPlayer

| Input         | Type                                  | Default     | Description            |
| ------------- | ------------------------------------- | ----------- | ---------------------- |
| `tracks`      | `AudioTrack[]`                        | `[]`        | Array of audio tracks  |
| `variant`     | `'default' \| 'compact' \| 'minimal'` | `'default'` | Player layout variant  |
| `showCover`   | `boolean`                             | `true`      | Show album artwork     |
| `showInfo`    | `boolean`                             | `true`      | Show track info        |
| `showVolume`  | `boolean`                             | `true`      | Show volume controls   |
| `showShuffle` | `boolean`                             | `true`      | Show shuffle button    |
| `showRepeat`  | `boolean`                             | `true`      | Show repeat button     |
| `autoplay`    | `boolean`                             | `false`     | Auto-play on load      |
| `class`       | `string`                              | -           | Additional CSS classes |

| Model          | Type                       | Default  | Description         |
| -------------- | -------------------------- | -------- | ------------------- |
| `currentIndex` | `number`                   | `0`      | Current track index |
| `volume`       | `number`                   | `1`      | Volume level (0-1)  |
| `shuffle`      | `boolean`                  | `false`  | Shuffle mode        |
| `repeat`       | `'none' \| 'one' \| 'all'` | `'none'` | Repeat mode         |

| Output        | Type         | Description                |
| ------------- | ------------ | -------------------------- |
| `trackChange` | `AudioTrack` | Emits when track changes   |
| `play`        | `void`       | Emits when playback starts |
| `pause`       | `void`       | Emits when playback pauses |
| `ended`       | `void`       | Emits when track ends      |

## Examples

### Basic Usage

```typescript
readonly tracks: AudioTrack[] = [
  {
    src: '/audio/song1.mp3',
    title: 'Song Title',
    artist: 'Artist Name',
    cover: '/images/album.jpg',
  },
  // ... more tracks
];
```

```html
<sc-audio-player [tracks]="tracks" />
```

### Compact Variant

Horizontal layout for sidebars:

```html
<sc-audio-player [tracks]="tracks" [variant]="'compact'" />
```

### Minimal Variant

Simple player without extra controls:

```html
<sc-audio-player [tracks]="tracks" [variant]="'minimal'" [showCover]="false" [showVolume]="false" [showShuffle]="false" [showRepeat]="false" />
```

### Single Track

```html
<sc-audio-player [tracks]="[singleTrack]" [showShuffle]="false" />
```

### Controlled Playback

```html
<sc-audio-player [tracks]="tracks" [(currentIndex)]="currentIndex" [(volume)]="volume" [(shuffle)]="shuffle" [(repeat)]="repeat" (trackChange)="onTrackChange($event)" />
```

## Features

- Play/pause with visual feedback
- Previous/next track navigation
- Progress bar with seek functionality
- Volume control with mute toggle
- Shuffle mode
- Repeat modes: none, one, all
- Keyboard navigation on progress bar
- Touch-friendly controls
- Multiple layout variants

## Keyboard Navigation

When focused on the progress bar:

| Key         | Action                  |
| ----------- | ----------------------- |
| `←`         | Seek back 5 seconds     |
| `→`         | Seek forward 5 seconds  |
| `Shift + ←` | Seek back 10 seconds    |
| `Shift + →` | Seek forward 10 seconds |

## Accessibility

- ARIA labels on all controls
- Keyboard navigable progress bar
- Screen reader announcements
- Focus indicators on buttons
