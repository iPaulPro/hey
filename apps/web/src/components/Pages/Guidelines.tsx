import Footer from "@/components/Shared/Footer";
import { H2, H4 } from "@/components/Shared/UI";
import { APP_NAME } from "@hey/data/constants";
import { Link } from "react-router";

const Guidelines = () => {
  return (
    <>
      <div className="flex h-48 w-full items-center justify-center bg-neutral-400">
        <div className="relative text-center">
          <H2 className="text-white">Community Guidelines</H2>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <div className="relative mx-auto max-w-3/4 rounded-lg sm:w-2/4">
            <div className="!p-8 max-w-none text-neutral-500 dark:text-neutral-200">
              <div className="space-y-5">
                <p className="leading-7">
                  To protect all users on {APP_NAME} and to prevent spam, we put
                  some rules in place. Please read them carefully and remember
                  them whenever you are posting something on {APP_NAME} or you
                  are changing your Account.
                </p>
              </div>
              {/* Safety beings */}
              <H4 className="mt-8 mb-5">Safety</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  You are not allowed to display, share or promote any form of
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Violence</li>
                  <li>Abuse</li>
                  <li>Harassment</li>
                  <li>Hateful speech</li>
                  <li>
                    Harmful content (including self-harm and suicidal content)
                  </li>
                  <li>Illegal/unlawful content</li>
                </ul>
              </div>
              {/* Safety ends */}
              {/* Nudity beings */}
              <H4 className="mt-8 mb-5">Nudity</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  {APP_NAME} is not a place to display, share or promote any
                  form of the following types of content:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Nudity</li>
                  <li>Sexual content</li>
                </ul>
                <p className="leading-7">
                  Please try to keep {APP_NAME} family-friendly (especially
                  considering all Images, Videos, Audios and Links).
                </p>
              </div>
              {/* Nudity ends */}
              {/* Spam beings */}
              <H4 className="mt-8 mb-5">Spam</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  You are not allowed to use {APP_NAME} as a platform to
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Manipulate other users</li>
                  <li>Create a large amount of Accounts</li>
                  <li>
                    Share excessive amounts of content of any type ("Spam")
                  </li>
                  <li>Airdrop farming</li>
                </ul>
                <p className="leading-7">
                  If your account got suspended, you are not allowed to create
                  any new accounts.
                </p>
              </div>
              {/* Spam ends */}
              {/* Impersonation beings */}
              <H4 className="mt-8 mb-5">Impersonation</H4>
              <div className="space-y-5">
                <p className="leading-7">
                  You are not allowed to impersonate other people on {APP_NAME}.
                </p>
                <p className="leading-7">
                  We understand that some of you like to create Accounts with
                  the names of popular persons as a parody. If you do something
                  like this, please use the "About me" section on your Account
                  to inform other users that your Account is a parody account.
                  You must do this in a way which can be easily seen and
                  understood by other users.
                </p>
                <H4 className="mt-8 mb-5">Suspension</H4>
                <p className="leading-7">
                  Account suspension only apply to {APP_NAME} and not on Lens
                  Protocol, decisions on suspension an account will be made by
                  the
                  {APP_NAME} team and its not automated.
                </p>
                <p className="font-bold leading-7">
                  This is a {APP_NAME}-specific decision / feature and not a
                  protocol-level decision / feature.
                </p>
              </div>
              {/* Impersonation ends */}
              {/* Copyright and Trademarks beings */}
              <H4 className="mt-8 mb-5">Copyright and Trademarks</H4>
              <p className="leading-7">
                You are not allowed to violate any intellectual property rights,
                including copyright and trademark, of others.
              </p>
              {/* Copyright and Trademarks ends */}
              {/* Feedback beings */}
              <H4 className="mt-8 mb-5">Feedback</H4>
              <p className="linkify leading-7">
                If you have any feedback on these rules or if you have any
                questions, please <Link to="/support">Contact us</Link>.
              </p>
              {/* Feedback ends */}
            </div>
          </div>
        </div>
        <div className="mt-2 mb-6 flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Guidelines;
