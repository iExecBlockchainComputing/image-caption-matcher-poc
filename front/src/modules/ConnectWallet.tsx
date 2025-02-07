import { ArrowUpRight } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useLoginLogout } from '@/hooks/useLoginLogout';

export default function ConnectWallet() {
  const { login } = useLoginLogout();

  return (
    <div className="mt-[94px]">
      <div className="border-lightgrey relative overflow-hidden rounded-3xl border border-[#303039] bg-[#14141B] px-10 py-[78px] text-center">
        <div className="relative z-10">
          <h1 className="mx-auto max-w-[725px] text-3xl font-extrabold">
            Connect your wallet to access the Image Caption Matcher Poc.
          </h1>
          <div className="mt-7">
            <Button className="px-10" onClick={login}>
              <span className="text-base font-semibold">Connect Wallet</span>
              <ArrowUpRight size="20" className="-mr-0.5 ml-1.5" />
            </Button>
          </div>
        </div>

        {/*Figma ellipse 1*/}
        <div className="absolute left-[25%] top-[157px] size-[484px] rounded-full bg-[rgba(24,62,233,0.60)] blur-[200px]">
          &nbsp;
        </div>

        {/*Figma ellipse 2*/}
        <div className="absolute left-[calc(50%-191px)] top-[15px] size-[383px] rounded-full bg-[rgba(149,49,233,0.40)] blur-[200px]">
          &nbsp;
        </div>

        {/*Figma ellipse 3*/}
        <div className="absolute left-[calc(50%-55px)] top-[50%] size-[306px] rounded-full bg-[rgba(188,112,253,0.40)] blur-[200px]">
          &nbsp;
        </div>
      </div>
    </div>
  );
}
