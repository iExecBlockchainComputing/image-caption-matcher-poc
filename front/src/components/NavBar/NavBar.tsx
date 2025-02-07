import '@fontsource/space-mono/700.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import iExecLogo from '../../assets/iexec-logo.svg';
import { cn } from '../../utils/style.utils.ts';
import { Button } from '../ui/button.tsx';

export function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="group relative z-30 h-full flex-none lg:w-[255px]">
      <label
        className="group/checkbox fixed right-7 top-7 z-30 flex size-5 w-[26px] origin-center transform flex-col justify-between lg:hidden"
        htmlFor="menu"
        onClick={handleMenuToggle}
      >
        <input
          type="checkbox"
          className="absolute -inset-4 size-14 cursor-pointer appearance-none bg-transparent"
          name="menu"
          id="menu"
          checked={isMenuOpen}
          readOnly
        />
        <span className="pointer-events-none block h-0.5 w-[26px] origin-right transform rounded-full bg-white duration-200 group-has-[:checked]/checkbox:-rotate-45"></span>
        <span className="pointer-events-none block h-0.5 w-[26px] origin-top-right transform rounded-full bg-white duration-200 group-has-[:checked]/checkbox:scale-x-0"></span>
        <span className="pointer-events-none block h-0.5 w-[26px] origin-right transform rounded-full bg-white duration-200 group-has-[:checked]/checkbox:rotate-45"></span>
      </label>
      <div className="border-grey-600 bg-grey-900 fixed flex h-dvh w-full -translate-x-full flex-col overflow-auto rounded-r-3xl border-r px-5 pt-10 duration-300 group-has-[:checked]:translate-x-0 lg:w-[255px] lg:translate-x-0">
        <Link to="/" className="-mx-2 flex items-center p-2">
          <img src={iExecLogo} width="25" height="30" alt="iExec logo" />

          <div className="ml-3 font-mono font-bold leading-5">iExec</div>
        </Link>

        <div className="left-navbar text-grey-400 mt-10 flex grow flex-col">
          <div className="mt-0.5 grow">
            <NavLink
              to={'/protected-images'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-x-3 px-2 py-2 duration-200 hover:text-white md:py-3',
                  isActive ? 'text-yellow-500 underline underline-offset-4' : ''
                )
              }
              onClick={() => {
                handleMenuToggle();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0C12.4156 0 10.9734 0.228125 9.9 0.6125C9.3625 0.804688 8.925 1.02656 8.5875 1.3125C8.25 1.59844 8 1.97188 8 2.4C8 2.47969 8.00937 2.5625 8.025 2.6375C8.00625 2.68906 7.99687 2.74531 8 2.8V5.2C8 5.27969 8.00937 5.3625 8.025 5.4375C8.00625 5.48906 7.99687 5.54531 8 5.6V6.925C7.37343 6.84219 6.70312 6.8 6 6.8C4.41562 6.8 2.97343 7.02813 1.9 7.4125C1.3625 7.60469 0.924997 7.82656 0.587497 8.1125C0.249997 8.39844 -2.9041e-06 8.77187 -2.9041e-06 9.2C-2.9041e-06 9.27969 0.0093721 9.3625 0.0249971 9.4375C0.0062471 9.48906 -0.0031279 9.54531 -2.9041e-06 9.6V12C-2.9041e-06 12.0797 0.0093721 12.1625 0.0249971 12.2375C0.0062471 12.2891 -0.0031279 12.3453 -2.9041e-06 12.4V14.8C-2.9041e-06 14.8797 0.0093721 14.9625 0.0249971 15.0375C0.0062471 15.0891 -0.0031279 15.1453 -2.9041e-06 15.2V17.6C-2.9041e-06 18.0281 0.249997 18.4016 0.587497 18.6875C0.924997 18.9734 1.3625 19.1953 1.9 19.3875C2.97343 19.7703 4.41406 20 6 20C7.58593 20 9.02656 19.7703 10.1 19.3875C10.6375 19.1953 11.075 18.9734 11.4125 18.6875C11.75 18.4016 12 18.0281 12 17.6V15.875C12.6266 15.9578 13.2953 16 14 16C15.5859 16 17.0266 15.7703 18.1 15.3875C18.6375 15.1953 19.075 14.9734 19.4125 14.6875C19.75 14.4016 20 14.0281 20 13.6V11.2C20.0031 11.1453 19.9937 11.0891 19.975 11.0375C19.9906 10.9625 20 10.8797 20 10.8V8.4C20.0031 8.34531 19.9937 8.28906 19.975 8.2375C19.9906 8.1625 20 8.07969 20 8V5.6C20.0031 5.54531 19.9937 5.48906 19.975 5.4375C19.9906 5.3625 20 5.27969 20 5.2V2.8C19.9984 2.74375 19.9859 2.68906 19.9625 2.6375C19.9797 2.56094 20 2.48125 20 2.4C20 1.97188 19.75 1.59844 19.4125 1.3125C19.075 1.02656 18.6375 0.804688 18.1 0.6125C17.0266 0.228125 15.5844 0 14 0ZM14 0.8C15.5078 0.8 16.8719 1.02188 17.825 1.3625C18.3016 1.53281 18.6719 1.73281 18.9 1.925C19.1281 2.11719 19.2 2.275 19.2 2.4C19.2 2.525 19.1281 2.68281 18.9 2.875C18.6719 3.06719 18.3016 3.26719 17.825 3.4375C16.8719 3.77813 15.5078 4 14 4C12.4922 4 11.1281 3.77813 10.175 3.4375C9.69843 3.26719 9.32812 3.06719 9.1 2.875C8.87187 2.68281 8.8 2.525 8.8 2.4C8.8 2.275 8.87187 2.11719 9.1 1.925C9.32812 1.73281 9.69843 1.53281 10.175 1.3625C11.1281 1.02188 12.4922 0.8 14 0.8ZM8.8 3.6375C9.10468 3.85 9.46562 4.03281 9.9 4.1875C10.9734 4.57188 12.4156 4.8 14 4.8C15.5844 4.8 17.0266 4.57188 18.1 4.1875C18.5344 4.03281 18.8953 3.85 19.2 3.6375V5.2C19.2 5.325 19.1281 5.48281 18.9 5.675C18.6719 5.86719 18.3016 6.06719 17.825 6.2375C16.8719 6.57813 15.5078 6.8 14 6.8C12.4922 6.8 11.1281 6.57813 10.175 6.2375C9.69843 6.06719 9.32812 5.86719 9.1 5.675C8.87187 5.48281 8.8 5.325 8.8 5.2V3.6375ZM8.8 6.4375C9.10468 6.65 9.46562 6.83281 9.9 6.9875C10.9734 7.37188 12.4141 7.6 14 7.6C15.5859 7.6 17.0266 7.37188 18.1 6.9875C18.5344 6.83281 18.8953 6.65 19.2 6.4375V8C19.2 8.125 19.1281 8.28281 18.9 8.475C18.6719 8.66719 18.3016 8.86719 17.825 9.0375C16.8719 9.37813 15.5078 9.6 14 9.6C13.2797 9.6 12.5891 9.55156 11.9625 9.4625C11.9625 9.45469 11.9625 9.44531 11.9625 9.4375C11.9797 9.36094 12 9.28125 12 9.2C12 8.77187 11.75 8.39844 11.4125 8.1125C11.075 7.82656 10.6375 7.60469 10.1 7.4125C9.71094 7.27344 9.27343 7.15781 8.8 7.0625V6.4375ZM6 7.6C7.50781 7.6 8.87187 7.82188 9.825 8.1625C10.3016 8.33281 10.6719 8.53281 10.9 8.725C11.1281 8.91719 11.2 9.075 11.2 9.2C11.2 9.325 11.1281 9.48281 10.9 9.675C10.6719 9.86719 10.3016 10.0672 9.825 10.2375C8.87187 10.5781 7.50781 10.8 6 10.8C4.49218 10.8 3.12812 10.5781 2.175 10.2375C1.69843 10.0672 1.32812 9.86719 1.1 9.675C0.871872 9.48281 0.799997 9.325 0.799997 9.2C0.799997 9.075 0.871872 8.91719 1.1 8.725C1.32812 8.53281 1.69843 8.33281 2.175 8.1625C3.12812 7.82188 4.49218 7.6 6 7.6ZM19.2 9.2375V10.8C19.2 10.925 19.1281 11.0828 18.9 11.275C18.6719 11.4672 18.3016 11.6672 17.825 11.8375C16.8719 12.1781 15.5078 12.4 14 12.4C13.2812 12.4 12.5984 12.3406 11.975 12.25C11.9703 12.25 11.9672 12.25 11.9625 12.25C11.9641 12.2453 11.9609 12.2422 11.9625 12.2375C11.9797 12.1609 12 12.0813 12 12V10.275C12.6234 10.3563 13.2984 10.4 14 10.4C15.5859 10.4 17.0266 10.1719 18.1 9.7875C18.5344 9.63281 18.8953 9.45 19.2 9.2375ZM0.799997 10.4375C1.10468 10.65 1.46562 10.8328 1.9 10.9875C2.97343 11.3719 4.41562 11.6 6 11.6C7.58437 11.6 9.02656 11.3719 10.1 10.9875C10.5344 10.8328 10.8953 10.65 11.2 10.4375V12C11.2 12.125 11.1281 12.2828 10.9 12.475C10.6719 12.6672 10.3016 12.8672 9.825 13.0375C8.87187 13.3781 7.50781 13.6 6 13.6C4.49218 13.6 3.12812 13.3781 2.175 13.0375C1.69843 12.8672 1.32812 12.6672 1.1 12.475C0.871872 12.2828 0.799997 12.125 0.799997 12V10.4375ZM19.2 12.0375V13.6C19.2 13.725 19.1281 13.8828 18.9 14.075C18.6719 14.2672 18.3016 14.4672 17.825 14.6375C16.8719 14.9781 15.5078 15.2 14 15.2C13.275 15.2 12.5906 15.1406 11.9625 15.05C11.9625 15.0453 11.9625 15.0422 11.9625 15.0375C11.9797 14.9609 12 14.8813 12 14.8V13.075C12.625 13.1578 13.3 13.2 14 13.2C15.5859 13.2 17.0266 12.9703 18.1 12.5875C18.5344 12.4328 18.8953 12.25 19.2 12.0375ZM0.799997 13.2375C1.10468 13.45 1.46562 13.6328 1.9 13.7875C2.97343 14.1703 4.41406 14.4 6 14.4C7.58593 14.4 9.02656 14.1703 10.1 13.7875C10.5344 13.6328 10.8953 13.45 11.2 13.2375V14.8C11.2 14.925 11.1281 15.0828 10.9 15.275C10.6719 15.4672 10.3016 15.6672 9.825 15.8375C8.87187 16.1781 7.50781 16.4 6 16.4C4.49218 16.4 3.12812 16.1781 2.175 15.8375C1.69843 15.6672 1.32812 15.4672 1.1 15.275C0.871872 15.0828 0.799997 14.925 0.799997 14.8V13.2375ZM0.799997 16.0375C1.10468 16.25 1.46562 16.4328 1.9 16.5875C2.97343 16.9703 4.41406 17.2 6 17.2C7.58593 17.2 9.02656 16.9703 10.1 16.5875C10.5344 16.4328 10.8953 16.25 11.2 16.0375V17.6C11.2 17.725 11.1281 17.8828 10.9 18.075C10.6719 18.2672 10.3016 18.4672 9.825 18.6375C8.87187 18.9781 7.50781 19.2 6 19.2C4.49218 19.2 3.12812 18.9781 2.175 18.6375C1.69843 18.4672 1.32812 18.2672 1.1 18.075C0.871872 17.8828 0.799997 17.725 0.799997 17.6V16.0375Z"
                  fill="currentColor"
                />
              </svg>
              <span>My Protected images</span>
            </NavLink>
          </div>

          <hr className="border-grey-700 mt-6 border-t" />

          <div className="mb-16 mt-10">
            <Button
              asChild
              size="lg"
              variant="discreet_outline"
              className="w-full"
            >
              <a
                href="https://iexecproject.atlassian.net/servicedesk/customer/portal/4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Support
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="discreet_outline"
              className="mt-4 w-full"
            >
              <a
                href="https://iexecproject.atlassian.net/servicedesk/customer/portal/4/group/9/create/71"
                target="_blank"
                rel="noopener noreferrer"
              >
                Feedback
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
