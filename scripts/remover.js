const remove = () =>
	chrome.storage.local.get((result) => {
		if (result.isEnabled === undefined ? true : result.isEnabled) {
			for (const b of document.getElementsByTagName("ytd-browse"))
				if (b && b.getAttribute("page-subtype") === "home") b.remove();

			document.getElementById("related")?.remove();
		}
	});
document.addEventListener("yt-page-data-updated", remove);
document.addEventListener("readystatechange", remove);
document.addEventListener("visibilitychange", remove);
