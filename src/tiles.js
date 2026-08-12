/**
 * Hotspots over map.png — positions are % of the image box.
 * Uniform size: 11.0% × 6.2% (centered on each tile).
 * Titles: `{row}-{slot}` — 1=center, 2=left, 3=right, 4=far-left, 5=far-right.
 * `link`: fnd:// deep link when unlocked; `locked: true` when blocked.
 */
export const tiles = [
  // Row 1
  {
    id: '1-1',
    label: '1-1',
    title: 'Noob!',
    text: 'Você é um noob',
    image:
      'https://media.giphy.com/media/g7GKcSzwQfugw/giphy.gif',
    left: 44.5,
    top: 82.6,
    width: 11.0,
    height: 6.2,
  },

  // Row 2
  { id: '2-4', label: '2-4', title: '2-4', locked: true, left: 21.5, top: 68.9, width: 11.0, height: 6.2 },
  {
    id: '2-2',
    label: '2-2',
    title: '2-2',
    link: 'fnd://replay?VEp1UXdjVTViMzozOA==',
    text: 'fnd://replay?VEp1UXdjVTViMzozOA==',
    left: 33.0,
    top: 73.9,
    width: 11.0,
    height: 6.2,
  },
  { id: '2-1', label: '2-1', title: '2-1', locked: true, left: 44.5, top: 73.9, width: 11.0, height: 6.2 },
  {
    id: '2-3',
    label: '2-3',
    title: '2-3',
    link: 'fnd://replay?VndTQjM4aG9TczozOA==',
    text: 'fnd://replay?VndTQjM4aG9TczozOA==',
    left: 56.0,
    top: 73.9,
    width: 11.0,
    height: 6.2,
  },

  // Row 3
  {
    id: '3-2',
    label: '3-2',
    title: '3-2',
    link: 'fnd://replay?SkhQVmtQNVVGTDozOA==',
    text: 'fnd://replay?SkhQVmtQNVVGTDozOA==',
    left: 33.0,
    top: 65.2,
    width: 11.0,
    height: 6.2,
  },
  {
    id: '3-1',
    label: '3-1',
    title: '3-1',
    link: 'fnd://replay?NWlLSkw5cUE0dzozOA==',
    text: 'fnd://replay?NWlLSkw5cUE0dzozOA==',
    left: 44.5,
    top: 65.2,
    width: 11.0,
    height: 6.2,
  },
  {
    id: '3-3',
    label: '3-3',
    title: '3-3',
    link: 'fnd://replay?UVVlcnN2cDhlRzozOA==',
    text: 'fnd://replay?UVVlcnN2cDhlRzozOA==',
    left: 56.0,
    top: 65.2,
    width: 11.0,
    height: 6.2,
  },
  { id: '3-5', label: '3-5', title: '3-5', locked: true, left: 67.5, top: 60.9, width: 11.0, height: 6.2 },

  // Row 4
  { id: '4-4', label: '4-4', title: '4-4', locked: true, left: 21.5, top: 52.4, width: 11.0, height: 6.2 },
  { id: '4-2', label: '4-2', title: '4-2', locked: true, left: 33.0, top: 57.2, width: 11.0, height: 6.2 },
  {
    id: '4-1',
    label: '4-1',
    title: '4-1',
    link: 'fnd://replay?Tk1FaE1lUGdCZTozOA==',
    text: 'fnd://replay?Tk1FaE1lUGdCZTozOA==',
    left: 44.5,
    top: 57.2,
    width: 11.0,
    height: 6.2,
  },
  { id: '4-3', label: '4-3', title: '4-3', locked: true, left: 56.0, top: 57.2, width: 11.0, height: 6.2 },

  // Row 5
  { id: '5-2', label: '5-2', title: '5-2', locked: true, left: 33.0, top: 48.9, width: 11.0, height: 6.2 },
  {
    id: '5-1',
    label: '5-1',
    title: '5-1',
    link: 'fnd://replay?UTJYQXMzOGpZMj0zOA==',
    text: 'fnd://replay?UTJYQXMzOGpZMj0zOA==',
    left: 44.5,
    top: 48.9,
    width: 11.0,
    height: 6.2,
  },
  {
    id: '5-3',
    label: '5-3',
    title: '5-3',
    link: 'fnd://replay?NG9DeVdmc3lCcTozOA==',
    text: 'fnd://replay?NG9DeVdmc3lCcTozOA==',
    left: 56.0,
    top: 48.9,
    width: 11.0,
    height: 6.2,
  },
  { id: '5-5', label: '5-5', title: '5-5', locked: true, left: 67.5, top: 44.9, width: 11.0, height: 6.2 },

  // Row 6
  { id: '6-4', label: '6-4', title: '6-4', locked: true, left: 21.5, top: 36.4, width: 11.0, height: 6.2 },
  { id: '6-2', label: '6-2', title: '6-2', locked: true, left: 33.0, top: 40.4, width: 11.0, height: 6.2 },
  {
    id: '6-1',
    label: '6-1',
    title: '6-1',
    link: 'fnd://replay?MDNWSEpjU2RoYTozOA==',
    text: 'fnd://replay?MDNWSEpjU2RoYTozOA==',
    left: 44.5,
    top: 40.5,
    width: 11.0,
    height: 6.2,
  },
  { id: '6-3', label: '6-3', title: '6-3', locked: true, left: 56.0, top: 40.5, width: 11.0, height: 6.2 },

  // Row 7
  { id: '7-2', label: '7-2', title: '7-2', locked: true, left: 33.0, top: 31.0, width: 11.0, height: 6.2 },
  {
    id: '7-1',
    label: '7-1',
    title: '7-1',
    link: 'fnd://replay?MmtCRTY0ZUpFcjozOA==',
    text: 'fnd://replay?MmtCRTY0ZUpFcjozOA==',
    left: 44.5,
    top: 31,
    width: 11.0,
    height: 6.2,
  },
  {
    id: '7-3',
    label: '7-3',
    title: '7-3',
    link: 'fnd://replay?R2J5QVFSUUpjSjozOA==',
    text: 'fnd://replay?R2J5QVFSUUpjSjozOA==',
    left: 56.0,
    top: 31,
    width: 11.0,
    height: 6.2,
  },
  { id: '7-5', label: '7-5', title: '7-5', locked: true, left: 67.5, top: 28.6, width: 11.0, height: 6.2 },

  // Row 8
  { id: '8-2', label: '8-2', title: '8-2', locked: true, left: 32.5, top: 19.9, width: 11.0, height: 6.2 },
  {
    id: '8-1',
    label: '8-1',
    title: '8-1',
    link: 'fnd://replay?N294TmlZQTRIUz0zOA==',
    text: 'fnd://replay?N294TmlZQTRIUz0zOA==',
    left: 44.5,
    top: 21.7,
    width: 11.0,
    height: 6.2,
  },
  { id: '8-3', label: '8-3', title: '8-3', locked: true, left: 56.0, top: 21.7, width: 11.0, height: 6.2 },

  // Row 9
  { id: '9-1', label: '9-1', title: '9-1', locked: true, left: 44.5, top: 12.9, width: 11.0, height: 6.2 },

  // Row 10
  { id: '10-1', label: '10-1', title: '10-1', locked: true, left: 44.5, top: 1.4, width: 11.0, height: 6.2 },
]
