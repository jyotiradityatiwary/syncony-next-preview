import Link from 'next/link';
import './styles.css'
import Script from 'next/script';
import { root_url_prefix } from '@/app/constants';
import localFont from 'next/font/local'

const madimi = localFont({ src: '../../MadimiOne-Regular.ttf' })

export default function Page() {
    return (<>
        <div className="div-background" id="page-header-background-div"></div>
        <header className="page-header" id="page-header">
            <div className="div-blur">
                <h2 className={`${madimi.className} brand-theme`} >
                    Syncony
                </h2>
                <div className="call-to-action">
                    <Link href={root_url_prefix + "/register"}>
                        <button className="call-to-action-main-button">Register</button>
                    </Link>
                    <Link href={root_url_prefix + "/login"}>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </header>


        <section className="title-card" id="title-card">
            <h1 className={`${madimi.className} page-title brand-theme`}>Syncony</h1>
            <p className="page-subtitle">open-source, easy to host cloud storage</p>
            <div className="call-to-action">
                <Link href={root_url_prefix + "/register"}>
                    <button className="call-to-action-main-button">Register 🙋‍♂️</button>
                </Link>
                <Link href={root_url_prefix + "/login"}>
                    <button>Login 🌩️ </button>
                </Link>
            </div>
        </section>

        <ContentSection
            title="Freedom of Choice"
            content="Choose any hosting provider, or host it yourself, locally or on the cloud. We tried our best to make self hosting easy!"
            buttonTitle='Browser available providers'
            buttonHref='/wip'
            imgUrl="/images/boston-public-library-YoK5pBcSY8s-unsplash.jpg"
        />

        <ContentSection
            title='Transparency'
            content=' You are free to audit our code, or have it audited. The work is all in the open!'
            buttonTitle='Check out our code on Github'
            buttonHref='/wip'
            imgUrl='/images/bing-ai-glass-lens.png'
        />

        <ContentSection
            title='Security'
            content='Your files are always stored encrypted and the server owner can see nothing! Files are encrypted with your accounts password before being sent off to the server so you do not need to trust the backend.'
            buttonTitle='Overview of how the encyption works'
            buttonHref='/wip'
            imgUrl='/images/mcgill-library-3IRw5ADM8z4-unsplash.jpg'
        />

        <ContentSection
            title='Privacy'
            content='No data collected about app usage, about files stored or anything else by us. Everything stays between you and your provider.'
            buttonTitle='View our Privacy Policy'
            buttonHref='/wip'
            imgUrl='/images/british-library-b3xgGS-M8fk-unsplash.jpg'
        />

        <ContentSection
            title='Want to self host?'
            content='We got you covered. We tried our best to make self hosting as easy and straight forward as possible.'
            buttonTitle='Read the documentation'
            buttonHref='/wip'
            imgUrl='/images/bing-ai-crt-monitor.png'
        />

        <footer>
            <div className="footer-card footer-card-primary">
                <p className={`${madimi.className} brand-theme`}>
                    Syncony
                </p>
                <div className="icon-links">
                    <a href="/wip.html">
                        <img src="/icons/github-mark-white.svg" alt="Github" />
                    </a>
                    <a href="/wip.html">
                        <img className='logo-inverted' src="/icons/X_logo_2023.svg" alt="Twitter" />
                    </a>
                    <a href="/wip.html">
                        <img className='logo-inverted' src="/icons/rss-feed-logo.svg" alt="RSS Feeds" />
                    </a>
                </div>
            </div>

            <div className="footer-card">
                <h2 className="footer-card-header">
                    Quick Links
                </h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/wip.html">Register</a></li>
                    <li><a href="/wip.html">Documentation</a></li>
                    <li><a href="/wip.html">Privacy Policy</a></li>
                    <li><a href="/wip.html">Licenses</a></li>
                    <li><a href="/wip.html">Report an Issue</a></li>
                </ul>
            </div>

            <div className="footer-card">
                <h2 className="footer-card-header">
                    Author
                </h2>
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="https://jyotiradityatiwary.github.io">Website</a></li>
                    <li><a href="https://github.com/jyotiradityatiwary">Github Profile</a></li>
                    <li><a href="https://in.linkedin.com/in/jyotiraditya-tiwary-40486b287">LinkedIn</a></li>
                </ul>
            </div>
        </footer>

        <Script src='/scripts/about-page-scroll-transparency-handler-script.js' />
    </>);
}

function ContentSection(
    { title, content, buttonTitle, buttonHref, imgUrl }: {
        title: string,
        content: string,
        buttonTitle: string,
        buttonHref: string,
        imgUrl: string,
    }
): JSX.Element {
    return (
        <section className="content-section">
            <div className="content-section-primary-text">
                <h2 className="content-section-header">
                    {title}
                </h2>
                <p className="content-section-content">
                    {content}
                </p>
                <Link href={buttonHref}>
                    <button className="content-section-primary-button">
                        {buttonTitle}
                    </button>
                </Link>
            </div>
            <img className="content-section-primary-image" src={imgUrl} alt="" width={400} />
        </section>
    )
}