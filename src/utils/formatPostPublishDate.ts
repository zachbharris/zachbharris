export default function formatPostPublishDate(publishDate: string) {
  return new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
