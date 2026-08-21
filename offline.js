(() => {
  const register = () => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js").catch(() => {});
  };
  if (document.readyState === "loading") window.addEventListener("load", register); else register();
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    const button = document.getElementById("installApp");
    if (button) button.hidden = false;
  });
  document.getElementById("installApp")?.addEventListener("click", async event => {
    if (!deferredPrompt) { event.currentTarget.textContent = "Abre el menú del navegador para instalar"; return; }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    event.currentTarget.hidden = true;
  });
})();
