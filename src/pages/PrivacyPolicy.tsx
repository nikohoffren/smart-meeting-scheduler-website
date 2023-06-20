import "../output.css";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="font-semibold text-xl text-gray-800 mb-4">
                            Privacy Policy for Smart Meeting Scheduler
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                1. Introduction
                            </div>
                            <p className="text-gray-600">
                                Smart Meeting Scheduler is a Google Chrome
                                extension designed to streamline and simplify
                                the process of scheduling meetings using Google
                                Calendar. This Privacy Policy outlines our
                                commitment to protecting the privacy of
                                individuals who use our extension.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                2. What data is being collected?
                            </div>
                            <p className="text-gray-600">
                                Smart Meeting Scheduler collects the following
                                data from its users: Google Calendar event
                                details. The extension accesses your Google
                                Calendar events to provide its services.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                3. How is the data being collected?
                            </div>
                            <p className="text-gray-600">
                                Data is collected directly from the user's
                                Google Calendar when they use the extension.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                4. Why is the data being collected?
                            </div>
                            <p className="text-gray-600">
                                The data is collected to facilitate the
                                scheduling of meetings and to provide the user
                                with a personalized experience when using the
                                extension.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                5. How is the data used?
                            </div>
                            <p className="text-gray-600">
                                The collected data is used solely for the
                                operation of the extension. It is used to
                                display and schedule events within the user's
                                Google Calendar.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                6. Who else has access to the data?
                            </div>
                            <p className="text-gray-600">
                                The data accessed by Smart Meeting Scheduler is
                                not shared with any third parties. The
                                developers of the extension also do not have
                                access to this data.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                7. How can users control their data?
                            </div>
                            <p className="text-gray-600">
                                As a user, you have the right to access, modify,
                                and delete your data. This can be done within
                                the Google Calendar application itself.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                8. Updates to the policy
                            </div>
                            <p className="text-gray-600">
                                We reserve the right to make changes to this
                                Privacy Policy. Any changes will be posted on
                                this page. We encourage you to review our
                                Privacy Policy to stay informed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
