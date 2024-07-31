

export default function Home() {
    return (
        <div className="flex flex-col bg-[url('src/assets/white-w-yellow-bg.svg')] w-full text-center text-2xl pt-20">
            <h1 className="text-4xl">In Short:</h1>
            <h1 className="text-4xl">I</h1>
            <ul>
                <li>Am a Family Man</li>
                <li>Am a Team Player</li>
                <li>Love Learning</li>
                <li>Get Stuff Done</li>
                <li>& Have Fun Doing It</li>
            </ul>
            <p className="my-20 w-8/12 mx-auto">
                If you want to know more about me, just click the links above, or just
                shoot me over an email!
            </p>
        </div>
    );
}
