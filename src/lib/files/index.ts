export function getFileURL(file) {
  if (file.type !== 'files') return undefined
  if (!file.files.length) return undefined

  return file.files[0].file.url
}