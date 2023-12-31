const remove = () =>
	chrome.storage.local.get((result) => {
		if (
			result.isPYSToLEnabled === undefined ? true : result.isPYSToLEnabled
		) {
			for (const b of document.getElementsByTagName("ytd-browse"))
				if (b && b.getAttribute("page-subtype") !== "channels")
					b.remove();

			document.getElementById("related")?.remove();
		}
	});
document.addEventListener("yt-page-data-updated", remove);
document.addEventListener("readystatechange", remove);
document.addEventListener("visibilitychange", remove);
