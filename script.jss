document.querySelectorAll('.word-list button').forEach(btn => {
  btn.addEventListener('click', () => {
    const slotNum = btn.parentElement.dataset.slot;
    document.getElementById(`slot${slotNum}`).textContent = btn.textContent;
  });
});
