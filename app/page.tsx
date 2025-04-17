import HomePage from "@/components/features/home/main";
import Navigation from "@/components/features/commons/nav";
import Footer from "@/components/features/commons/footer";

export default function Home() {
  return (
    <div className="font-mono">
      <Navigation />
      <main className="px-4 max-w-4xl mx-auto min-h-screen">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
