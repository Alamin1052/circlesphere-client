import React from "react";

const Privacy = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
                    <p className="opacity-90">
                        Your privacy matters. Learn how CircleSphere collects and protects your data.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto max-sm:px-6 px-4 py-16 space-y-10 text-gray-700">

                <section>
                    <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p>
                        CircleSphere is committed to protecting your privacy. This Privacy Policy
                        explains how we collect, use, and safeguard your personal information when
                        you use our platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Personal details such as name, email, and phone number</li>
                        <li>Account and profile information</li>
                        <li>Payment and transaction details</li>
                        <li>Event registrations and club activity</li>
                        <li>Device, browser, and usage data</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>To provide and manage our services</li>
                        <li>To process payments and registrations</li>
                        <li>To communicate important updates</li>
                        <li>To improve platform performance and security</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">4. Data Protection</h2>
                    <p>
                        We use modern security measures such as encryption, secure servers, and
                        restricted access to protect your data from unauthorized access, misuse,
                        or loss.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">5. Data Sharing</h2>
                    <p>
                        We do not sell or rent your personal information. Data may only be shared
                        with trusted service providers for payment processing, hosting, or legal
                        compliance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
                    <p>
                        CircleSphere uses cookies to enhance user experience, analyze traffic,
                        and remember preferences. You can disable cookies in your browser settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your personal data. You may
                        also request to close your account at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">8. Policy Updates</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be
                        posted on this page with a revised date.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <span className="font-medium">support@circlesphere.com</span>
                    </p>
                </section>

            </div>
        </div>
    );
};

export default Privacy;
