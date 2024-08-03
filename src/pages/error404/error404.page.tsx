import {BiHome} from "react-icons/bi";

export const Error404Page = () => {
    return (<section className="flex flex-col md:flex-row items-center p-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-bold p-2"> Oops! </h1>
                        <h1 className="text-5xl text-violet-600 font-semibold p-2"> Something went wrong... </h1>
                        <h1 className="text-2xl p-2"> Page not found! </h1>
                        <a className="p-4 text-violet-600 rounded-sm font-semibold flex items-center gap-x-2" href="/dashboard"> <BiHome/> Go back to home page </a>
                </div>
                <img src="/assets/404.png" className="ml-auto" alt="" width={600} height={600}/>
        </section>)
}
