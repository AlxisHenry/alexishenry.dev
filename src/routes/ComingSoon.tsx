import { Layout } from "../components/Layout";

const ComingSoon = () => {
    return (
        <Layout>
            <main class={"flex flex-col items-center justify-center h-screen"}>
                <h1 class={"text-5xl sm:text-9xl font-bold text-center"}>
                    Coming <span class={"text-blue-500"}>Soon</span>
                </h1>
            </main>
        </Layout>
    );
};

export default ComingSoon;
