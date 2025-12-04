import React from "react";

const Frequently = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4 text-gray-900">
          Frequently Asked Questions (FAQ)
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          Here are some common questions about PlaySync. Find answers about
          accounts, downloads, and gameplay.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create a PlaySync account?
          </div>
          <div className="collapse-content text-sm">
            Click "Register" at the top of the page, fill in your details, and
            verify your email. Once done, you can start exploring and
            downloading games!
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I download games?
          </div>
          <div className="collapse-content text-sm">
            Navigate to the game’s detail page and click the "Download Now"
            button. Ensure your device meets the game’s system requirements.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I play games on multiple devices?
          </div>
          <div className="collapse-content text-sm">
            Yes! Your PlaySync account allows you to download and play games on
            any compatible device. Just log in with your account.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I manage my purchased games?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Profile" and view your game library. You can see all
            purchased games, re-download them, and check their details.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            What should I do if a game won't download or run?
          </div>
          <div className="collapse-content text-sm">
            Check your internet connection and system requirements. If issues
            persist, contact PlaySync support via chat or email—we’re here to
            help!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
