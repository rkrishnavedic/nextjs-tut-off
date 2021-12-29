import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const FirstPost = ()=>{
    return(
        <>
            <Head>
                <title>First Post</title>
                {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>{
                    console.log(`script loaded correctly, window.FB has been populated`)
                        }
                    }
                />
            </Head>
            <div>
                <h1>
                This is first post!
                </h1>
                <p>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </p>
            </div>
        </>
    )
}
export default FirstPost;