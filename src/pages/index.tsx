import Header from "@/components/Header";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

export default function IndexPage() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <div>
                    <Header />
                </div>
            </main>
        </QueryClientProvider>
    )
}