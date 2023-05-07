import Head from "next/head";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="bg-cover bg-center md:bg-[center_top] min-w-screen min-h-screen bg-[url('/static/bg.jpeg')]">
      <Head>
        <title>BeChains</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"></link>
        
      </Head>
      <div style={{fontFamily: "'ZCOOL QingKe HuangYou', sans-serif"}} className="md:ml-[350px] flex flex-col items-center md:items-center justify-center w-screen md:w-[50%] min-h-[90vh] text-white">
       
        <h1 className="lg:-mt-5 text-[40px] md:text-[60px] lg:text-[90px] font-bold text-[#ffd235]">
          Apu - EduDao
        </h1>
        <h2 className="lg:-mt-5 text-[20px] md:text-[40px] lg:text-[60px] font-semibold text-[#ffd235]">
          BeChains
        </h2>
        <div className="text-[20px] font-poppins text-gray-300">
          decentralized “bank” statements for
        </div>  
      
        <div className="text-[20px] text-[yellow] font-bold "> blockchain assets</div>
        <Link href="/join"><div className="bg-yellow-500 hover:scale-105 transition cursor-pointer mt-5 rounded-lg py-2 px-4 font-medium">
          Get Started
        </div></Link>
      </div>
      <div className="absolute left-0 bottom-5 right-5 flex items-center justify-center ">
        <div className="flex items-center justify-center w-full md:w-[50%]">
         
          <img
            src="/static/logo-light.svg"
            className="mx-2 w-[10%] md:w-[15%] rounded cursor-pointer hover:opacity-90 transition"
          />
        </div>
        
      </div>

      <img src="/static/logo.png" className="absolute top-5 left-5 h-20 w-30"></img>
     
    </div>
  );
}
