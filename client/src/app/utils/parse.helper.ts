export function parseSlotName (slot: string) {
  return slot.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}