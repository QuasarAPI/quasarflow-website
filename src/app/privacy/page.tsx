import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      <nav className='sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link
                href='/'
                className='text-2xl font-bold text-slate-900 dark:text-white'
              >
                Quasar<span className='text-blue-600'>Flow</span>
              </Link>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/docs'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  Documentation
                </Link>
                <Link
                  href='/api'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  API Reference
                </Link>
                <Link
                  href='/examples'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  Examples
                </Link>
                <Link
                  href='/privacy'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  Privacy Policy
                </Link>
                <a
                  href='https://github.com/QuasarAPI/quasarflow-api'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='prose prose-slate prose-headings:my-10 prose-p:my-6 prose-ul:my-8 prose-li:my-3 prose-h2:mt-16 prose-h3:mt-10 prose-ol:my-8 dark:prose-invert max-w-none space-y-6'>
          <h1 className='mb-4 text-4xl font-bold'>PRIVACY POLICY</h1>

          <p className='mb-8 text-sm text-slate-600 dark:text-slate-400'>
            Last updated October 07, 2025
          </p>

          <p className='my-6'>
            This Privacy Notice for Quasar Flow ("we," "us," or "our"),
            describes how and why we might access, collect, store, use, and/or
            share ("process") your personal information when you use our
            services ("Services"), including when you:
          </p>

          <ul className='my-6 space-y-3 pl-6'>
            <li>
              Visit our website at{' '}
              <Link
                href='https://quasarflow.dev'
                className='text-blue-600 hover:text-blue-700'
              >
                https://quasarflow.dev
              </Link>{' '}
              or any website of ours that links to this Privacy Notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>

          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice
            will help you understand your privacy rights and choices. We are
            responsible for making decisions about how your personal information
            is processed. If you do not agree with our policies and practices,
            please do not use our Services. If you still have any questions or
            concerns, please contact us at{' '}
            <a
              href='mailto:privacy@quasarflow.dev'
              className='text-blue-600 hover:text-blue-700'
            >
              privacy@quasarflow.dev
            </a>
            .
          </p>

          <h2>SUMMARY OF KEY POINTS</h2>

          <p>
            <strong>
              <em>
                This summary provides key points from our Privacy Notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for.
              </em>
            </strong>
          </p>

          <p>
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with us and the Services,
            the choices you make, and the products and features you use.
          </p>

          <p>
            <strong>Do we process any sensitive personal information?</strong>{' '}
            We do not process sensitive personal information.
          </p>

          <p>
            <strong>Do we collect any information from third parties?</strong>{' '}
            We do not collect any information from third parties.
          </p>

          <p>
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law.
          </p>

          <p>
            <strong>
              In what situations and with which parties do we share personal
              information?
            </strong>{' '}
            We may share information in specific situations and with specific
            third parties.
          </p>

          <p>
            <strong>How do we keep your information safe?</strong> We have
            adequate organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure.
          </p>

          <p>
            <strong>What are your rights?</strong> Depending on where you are
            located geographically, the applicable privacy law may mean you have
            certain rights regarding your personal information.
          </p>

          <h2>TABLE OF CONTENTS</h2>

          <ol className='my-10 list-inside list-decimal space-y-4 pl-4'>
            <li>
              <a
                href='#infocollect'
                className='text-blue-600 hover:text-blue-700'
              >
                WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li>
              <a href='#infouse' className='text-blue-600 hover:text-blue-700'>
                HOW DO WE PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href='#whoshare' className='text-blue-600 hover:text-blue-700'>
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a href='#cookies' className='text-blue-600 hover:text-blue-700'>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href='#ai' className='text-blue-600 hover:text-blue-700'>
                DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </a>
            </li>
            <li>
              <a
                href='#inforetain'
                className='text-blue-600 hover:text-blue-700'
              >
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href='#infosafe' className='text-blue-600 hover:text-blue-700'>
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li>
              <a
                href='#privacyrights'
                className='text-blue-600 hover:text-blue-700'
              >
                WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href='#DNT' className='text-blue-600 hover:text-blue-700'>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li>
              <a
                href='#otherlaws'
                className='text-blue-600 hover:text-blue-700'
              >
                DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a
                href='#policyupdates'
                className='text-blue-600 hover:text-blue-700'
              >
                DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li>
              <a href='#contact' className='text-blue-600 hover:text-blue-700'>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href='#request' className='text-blue-600 hover:text-blue-700'>
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </a>
            </li>
          </ol>

          <div id='infocollect'>
            <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>

            <h3>Personal information you disclose to us</h3>

            <p>
              <em>
                <strong>In Short:</strong> We collect personal information that
                you provide to us.
              </em>
            </p>

            <p>
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
            </p>

            <p>
              <strong>Personal Information Provided by You.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>

            <ul className='my-8 space-y-3 pl-6'>
              <li>email addresses</li>
              <li>contact or authentication data</li>
              <li>phone numbers</li>
              <li>names</li>
            </ul>

            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>

            <h3>Information automatically collected</h3>

            <p>
              <em>
                <strong>In Short:</strong> Some information — such as your
                Internet Protocol (IP) address and/or browser and device
                characteristics — is collected automatically when you visit our
                Services.
              </em>
            </p>

            <p>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>

            <p>The information we collect includes:</p>

            <ul className='my-8 space-y-4 pl-6'>
              <li className='mb-4'>
                <em className='font-medium'>Log and Usage Data.</em> Log and
                usage data is service-related, diagnostic, usage, and
                performance information our servers automatically collect when
                you access or use our Services and which we record in log files.
                Depending on how you interact with us, this log data may include
                your IP address, device information, browser type, and settings
                and information about your activity in the Services (such as the
                date/time stamps associated with your usage, pages and files
                viewed, searches, and other actions you take such as which
                features you use), device event information (such as system
                activity, error reports ("crash dumps"), and hardware settings).
              </li>
              <li className='mb-4'>
                <em className='font-medium'>Device Data.</em> We collect device
                data such as information about your computer, phone, tablet, or
                other device you use to access the Services. Depending on the
                device used, this device data may include information such as
                your IP address (or proxy server), device and application
                identification numbers, location, browser type, hardware model,
                Internet service provider and/or mobile carrier, operating
                system, and system configuration information.
              </li>
              <li className='mb-4'>
                <em className='font-medium'>Location Data.</em> We collect
                location data such as information about your device's location,
                which can be either precise or imprecise. How much information
                we collect depends on the type and settings of the device you
                use to access the Services. For example, we may use GPS and
                other technologies to collect geolocation data that tells us
                your current location (based on your IP address). You can opt
                out of allowing us to collect this information either by
                refusing access to the information or by disabling your Location
                setting on your device. However, if you choose to opt out, you
                may not be able to use certain aspects of the Services.
              </li>
            </ul>

            <h3 className='mt-12 mb-6'>Google API</h3>
            <p className='mb-8'>
              Our use of information received from Google APIs will adhere to{' '}
              <a
                href='https://developers.google.com/terms/api-services-user-data-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                Google API Services User Data Policy
              </a>
              , including the{' '}
              <a
                href='https://developers.google.com/terms/api-services-user-data-policy#limited-use'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                Limited Use requirements
              </a>
              .
            </p>
          </div>

          <div id='infouse' className='mt-14'>
            <h2 className='mb-6 text-2xl font-bold'>
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>

            <p>
              <em>
                <strong>In Short:</strong> We process your information to
                provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law.
                We may also process your information for other purposes with
                your consent.
              </em>
            </p>

            <p className='my-6'>
              <strong>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </strong>
            </p>

            <ul className='my-8 space-y-3 pl-6'>
              <li>
                <strong>
                  To deliver and facilitate delivery of services to the user.
                </strong>{' '}
                We may process your information to provide you with the
                requested service.
              </li>
              <li>
                <strong>To enable user-to-user communications.</strong> We may
                process your information if you choose to use any of our
                offerings that allow for communication with another user.
              </li>
              <li>
                <strong>To request feedback.</strong> We may process your
                information when necessary to request feedback and to contact
                you about your use of our Services.
              </li>
              <li>
                <strong>To protect our Services.</strong> We may process your
                information as part of our efforts to keep our Services safe and
                secure, including fraud monitoring and prevention.
              </li>
              <li>
                <strong>To identify usage trends.</strong> We may process
                information about how you use our Services to better understand
                how they are being used so we can improve them.
              </li>
            </ul>
          </div>

          <div id='whoshare'>
            <h2>
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>

            <p>
              <em>
                <strong>In Short:</strong> We may share information in specific
                situations described in this section and/or with the following
                third parties.
              </em>
            </p>

            <p>
              We may need to share your personal information in the following
              situations:
            </p>

            <ul>
              <li>
                <strong>Business Transfers.</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition of
                all or a portion of our business to another company.
              </li>
            </ul>
          </div>

          <div id='cookies'>
            <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>

            <p>
              <em>
                <strong>In Short:</strong> We may use cookies and other tracking
                technologies to collect and store your information.
              </em>
            </p>

            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services, prevent crashes, fix bugs, save your
              preferences, and assist with basic site functions.
            </p>

            <p>
              We also permit third parties and service providers to use online
              tracking technologies on our Services for analytics and
              advertising, including to help manage and display advertisements,
              to tailor advertisements to your interests, or to send abandoned
              shopping cart reminders (depending on your communication
              preferences). The third parties and service providers use their
              technology to provide advertising about products and services
              tailored to your interests which may appear either on our Services
              or on other websites.
            </p>

            <p>
              Specific information about how we use such technologies and how
              you can refuse certain cookies is set out in our Cookie Notice.
            </p>

            <h3>Google Analytics</h3>
            <p>
              We may share your information with Google Analytics to track and
              analyze the use of the Services. The Google Analytics Advertising
              Features that we may use include: Google Analytics Demographics
              and Interests Reporting. To opt out of being tracked by Google
              Analytics across the Services, visit{' '}
              <a
                href='https://tools.google.com/dlpage/gaoptout'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              . You can opt out of Google Analytics Advertising Features through{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                Ads Settings
              </a>{' '}
              and Ad Settings for mobile apps. Other opt out means include{' '}
              <a
                href='http://optout.networkadvertising.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                http://optout.networkadvertising.org/
              </a>{' '}
              and{' '}
              <a
                href='http://www.networkadvertising.org/mobile-choice'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                http://www.networkadvertising.org/mobile-choice
              </a>
              . For more information on the privacy practices of Google, please
              visit the{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                Google Privacy & Terms page
              </a>
              .
            </p>
          </div>

          <div id='ai'>
            <h2>5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>

            <p>
              <em>
                <strong>In Short:</strong> We offer products, features, or tools
                powered by artificial intelligence, machine learning, or similar
                technologies.
              </em>
            </p>

            <p>
              As part of our Services, we offer products, features, or tools
              powered by artificial intelligence, machine learning, or similar
              technologies (collectively, "AI Products"). These tools are
              designed to enhance your experience and provide you with
              innovative solutions. The terms in this Privacy Notice govern your
              use of the AI Products within our Services.
            </p>

            <h3>Use of AI Technologies</h3>
            <p>
              We provide the AI Products through third-party service providers
              ("AI Service Providers"), including Google Cloud AI. As outlined
              in this Privacy Notice, your input, output, and personal
              information will be shared with and processed by these AI Service
              Providers to enable your use of our AI Products for purposes
              outlined in "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
              INFORMATION?"
            </p>

            <h3>Our AI Products</h3>
            <p>Our AI Products are designed for the following functions:</p>
            <ul>
              <li>AI deployment</li>
              <li>Blockchain</li>
              <li>AI research</li>
            </ul>

            <h3>How We Process Your Data Using AI</h3>
            <p>
              All personal information processed using our AI Products is
              handled in line with our Privacy Notice and our agreement with
              third parties. This ensures high security and safeguards your
              personal information throughout the process, giving you peace of
              mind about your data's safety.
            </p>
          </div>

          <div id='inforetain'>
            <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>

            <p>
              <em>
                <strong>In Short:</strong> We keep your information for as long
                as necessary to fulfill the purposes outlined in this Privacy
                Notice unless otherwise required by law.
              </em>
            </p>

            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than 90 days.
            </p>

            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>

          <div id='infosafe'>
            <h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>

            <p>
              <em>
                <strong>In Short:</strong> We aim to protect your personal
                information through a system of organizational and technical
                security measures.
              </em>
            </p>

            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>

          <div id='privacyrights'>
            <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>

            <p>
              <em>
                <strong>In Short:</strong> You may review, change, or terminate
                your account at any time, depending on your country, province,
                or state of residence.
              </em>
            </p>

            <p>
              <strong>
                <u>Withdrawing your consent:</u>
              </strong>{' '}
              If we are relying on your consent to process your personal
              information, which may be express and/or implied consent depending
              on the applicable law, you have the right to withdraw your consent
              at any time. You can withdraw your consent at any time by
              contacting us by using the contact details provided in the section
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>

            <p>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>

            <p>
              <strong>
                <u>Cookies and similar technologies:</u>
              </strong>{' '}
              Most Web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or
              reject cookies, this could affect certain features or services of
              our Services.
            </p>

            <p>
              If you have questions or comments about your privacy rights, you
              may email us at{' '}
              <a
                href='mailto:privacy@quasarflow.dev'
                className='text-blue-600 hover:text-blue-700'
              >
                privacy@quasarflow.dev
              </a>
              .
            </p>
          </div>

          <div id='DNT'>
            <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>

            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this Privacy Notice.
            </p>
          </div>

          <div id='otherlaws'>
            <h2>10. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>

            <p>
              <em>
                <strong>In Short:</strong> You may have additional rights based
                on the country you reside in.
              </em>
            </p>

            <h3>Australia</h3>

            <p>
              We collect and process your personal information under the
              obligations and conditions set by Australia's Privacy Act 1988
              (Privacy Act).
            </p>

            <p>
              This Privacy Notice satisfies the notice requirements defined in
              the Privacy Act, in particular: what personal information we
              collect from you, from which sources, for which purposes, and
              other recipients of your personal information.
            </p>

            <p>
              If you do not wish to provide the personal information necessary
              to fulfill their applicable purpose, it may affect our ability to
              provide our services, in particular:
            </p>

            <ul>
              <li>offer you the products or services that you want</li>
              <li>respond to or help with your requests</li>
            </ul>

            <p>
              At any time, you have the right to request access to or correction
              of your personal information. You can make such a request by
              contacting us by using the contact details provided in the section
              "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?"
            </p>

            <p>
              If you believe we are unlawfully processing your personal
              information, you have the right to submit a complaint about a
              breach of the Australian Privacy Principles to the{' '}
              <a
                href='https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                Office of the Australian Information Commissioner
              </a>
              .
            </p>
          </div>

          <div id='policyupdates'>
            <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>

            <p>
              <em>
                <strong>In Short:</strong> Yes, we will update this notice as
                necessary to stay compliant with relevant laws.
              </em>
            </p>

            <p>
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date at the top
              of this Privacy Notice. If we make material changes to this
              Privacy Notice, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
              We encourage you to review this Privacy Notice frequently to be
              informed of how we are protecting your information.
            </p>
          </div>

          <div id='request'>
            <h2>
              12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h2>

            <p>
              You have the right to request access to the personal information
              we collect from you, details about how we have processed it,
              correct inaccuracies, or delete your personal information. You may
              also have the right to withdraw your consent to our processing of
              your personal information. These rights may be limited in some
              circumstances by applicable law. To request to review, update, or
              delete your personal information, please fill out and submit a{' '}
              <a
                href='https://app.termly.io/dsar/6b2d7f9f-907e-4fbc-ae0c-61149c963525'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                data subject access request
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
