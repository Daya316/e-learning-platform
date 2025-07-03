// Select the range input and span to show progress
const progressSlider = document.getElementById('progress');
const progressValue = document.getElementById('progressValue');

// Only run if elements exist (good for multi-page setups)
if (progressSlider && progressValue) {
  progressSlider.addEventListener('input', () => {
    progressValue.textContent = progressSlider.value + '%';
  });
}
