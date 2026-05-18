export default () => {
  const saved = localStorage.getItem('jerry-theme') || 'dark'
  if (saved === 'light') {
    document.documentElement.classList.add('light')
  }
}
