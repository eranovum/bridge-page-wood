/* ==========================================================================
   Pogo Page JavaScript - DIY Woodworking & Shed Plans
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // 1. Dynamic Year Update
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Policy Modal Data & Interaction
    const modalOverlay = document.getElementById('policy-modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalTriggers = document.querySelectorAll('.js-modal-trigger');

    const modalData = {
        privacy: `
            <h3>Privacy Policy</h3>
            <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect while operating our website.</p>
            <p>We do not collect personal identification information unless voluntarily provided. We do not sell or trade user information to third parties.</p>
            <p>Cookies may be used to track affiliate click-through referral statistics on behalf of ClickBank.</p>
        `,
        terms: `
            <h3>Terms of Service</h3>
            <p>By accessing this website, you agree to be bound by these Terms and Conditions of Use and all applicable laws and regulations.</p>
            <p>All content presented on this bridge page is for informational purposes only. Product purchases are processed securely by ClickBank®.</p>
            <p>If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        `,
        disclaimer: `
            <h3>Earnings & Outcome Disclaimer</h3>
            <p>Results may vary based on individual effort, skill level, and experience. Building projects require basic safety measures and appropriate woodworking tools.</p>
            <p>The owner of this page receives affiliate compensation when sales are generated through links on this page. All product fulfillment is handled by RyanShedPlans via ClickBank.</p>
        `
    };

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            if (modalData[modalType]) {
                modalContent.innerHTML = modalData[modalType];
                modalOverlay.classList.add('active');
            }
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function () {
            modalOverlay.classList.remove('active');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // 3. CTA Click Tracking & Meta Pixel Outbound Event Logger
    const ctaButtons = document.querySelectorAll('.btn-primary-cta, a[href*="clickbank.net"]');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('Outbound affiliate click triggered for novis23 / shedplans');
            if (typeof window.fbq === 'function') {
                window.fbq('track', 'Lead', {
                    lead_type: 'high_intent_click'
                });
            }
        });
    });

});
