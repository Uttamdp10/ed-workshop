import Head from "next/head";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main> 
          <Navbar />
        <div className="Hero">
          <h1 className="">
            Welcome to the{" "}
            <span className="text-orange">only Resource Website</span> for{" "}
            <span className="underline">EN</span>
          </h1>
          <button className="btn"> Login To Site </button>
        </div> 
        <div className="res">
          <Resources  />
        </div>
      </main>
    </>
  );
}
