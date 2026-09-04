// widget/verifier-badge.js
(function() {
    const badge = document.getElementById('talentchain-badge');
    if (!badge) return;

    const certId = badge.getAttribute('data-cert-id');
    badge.innerHTML = `
        <div style="font-family: sans-serif; border: 1px solid #4f46e5; border-radius: 8px; padding: 8px 12px; display: inline-flex; align-items: center; gap: 8px; background: #eef2ff; color: #4f46e5; font-size: 13px; font-weight: 600;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01 0 .89.622-.639A2.89 2.89 0 0 0 .87 10.067l.638.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.639a2.89 2.89 0 0 0 4.134 0l.622-.638.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.638-.622a2.89 2.89 0 0 0 0-4.134l-.638-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.639zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
            <span>Verified VC: ${certId}</span>
        </div>
    `;
})();
