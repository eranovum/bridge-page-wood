/* ==========================================================================
   TimberCraft Digest - Bridge Page Client Logic
   Optimized for Meta Ads Tracking & Seamless UX
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // 1. Dynamic Year Update
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Policy Modal Data & Interactive Handlers (Meta Ads & FTC Compliant)
    const modalOverlay = document.getElementById('policy-modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalTriggers = document.querySelectorAll('.js-modal-trigger');

    const modalData = {
        privacy: `
            <h3>Privacy Policy</h3>
            <p>Your privacy is important to us. It is the policy of TimberCraft Digest to respect your privacy regarding any information we may collect across our website.</p>
            <p>We do not collect personal identification information unless voluntarily provided by you. We do not sell, rent, or trade your personal information to third parties.</p>
            <p>Standard web analytics and cookies may be used to measure referral traffic, click-through rates, and affiliate referrals on behalf of retail partners including ClickBank.</p>
            <p>If you have any questions about how we handle user data and personal information, please feel free to reach out via our contact page.</p>
        `,
        terms: `
            <h3>Terms of Service</h3>
            <p>By accessing this website, you agree to be bound by these website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local laws.</p>
            <p>All materials and information presented on this bridge page are for informational and educational purposes only. Product orders and fulfillment are handled securely by ClickBank®.</p>
            <p>If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        `,
        disclaimer: `
            <h3>Earnings & Outcome Disclaimer</h3>
            <p>Building sheds and woodworking projects inherently involves physical labor, construction materials, and the use of tools. Individual results may vary depending on personal experience, safety precautions, and project execution.</p>
            <p>The owner of this informational page receives compensation as an independent affiliate if you choose to purchase products through the referral links on this site. This comes at zero extra cost to you.</p>
            <p>All product guarantees, returns, and fulfillment are backed directly by ClickBank’s official 60-day money-back guarantee policy.</p>
        `,
        contact: `
            <h3>Contact &amp; Customer Support</h3>
            <p>We are dedicated to providing clear, transparent information for woodworking enthusiasts and homeowners.</p>
            <p><strong>Editorial &amp; Review Inquiries:</strong> contact@timbercraftdigest.com</p>
            <p><strong>Product &amp; Order Support:</strong> For order lookup, downloads, or customer service regarding Ryan Shed Plans, please visit ClickBank's official support desk at <a href="https://www.clkbank.com" target="_blank" rel="noopener noreferrer" style="color: #16402d; text-decoration: underline;">clkbank.com</a>.</p>
        `
    };

    function openModal(modalType) {
        if (modalData[modalType] && modalOverlay && modalContent) {
            modalContent.innerHTML = modalData[modalType];
            modalOverlay.classList.add('active');
            modalOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            modalOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            openModal(modalType);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Escape key closes modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // 3. High-Intent Outbound CTA Tracking (Meta Pixel Event)
    const outboundTargets = document.querySelectorAll('.outbound-target, a[href*="clickbank.net"]');
    outboundTargets.forEach(element => {
        element.addEventListener('click', function () {
            // Track high intent outbound click on Meta Pixel
            if (typeof window.fbq === 'function') {
                window.fbq('track', 'Lead', {
                    content_name: 'Master Shed Blueprints Presentation Click',
                    content_category: 'Woodworking DIY Pre-lander',
                    destination: 'ClickBank RyanShedPlans'
                });
            }
            console.log('Outbound click tracked for Meta Ads conversion optimization.');
        });
    });

});
