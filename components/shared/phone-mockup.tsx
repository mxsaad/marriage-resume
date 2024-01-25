export default function PhoneMockup() {
  return (
    <div className="relative mx-auto border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-md shadow-muted">
        <div className="w-[148px] h-[18px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
        <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[124px] rounded-s-lg" />
        <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[178px] rounded-s-lg" />
        <div className="h-[64px] w-[3px] bg-black absolute -end-[17px] top-[142px] rounded-e-lg" />
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px bg-black">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt="Light theme phone mockup" />
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="Dark theme phone mockup" />
        </div>
    </div>
  )
}
