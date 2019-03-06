{
	focusinHandler() {
    setTimeout(() => {
      document.body.scrollTop = document.body.scrollHeight;
    }, 100);
  },
  focusoutHandler() {
    window.scrollTo(0, 0);
  }
};
exports.ready = function() {
  this.silencedChanged(this.model.silenced);
  window.addEventListener('focusin', this.focusinHandler);
  window.addEventListener('focusout', this.focusoutHandler);
};
exports.beforeDestroy = function() {
  window.removeEventListener('focusin', this.focusinHandler);
  window.removeEventListener('focusout', this.focusoutHandler);
};