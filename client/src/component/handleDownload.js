// handleDownload.js
export default function handleDownload(imageUrl) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'cartoonified_image.png';
  link.click();
}
