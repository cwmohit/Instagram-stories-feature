import Header from "src/components/Header";
import Stories from "src/components/Stories";
import Posts from "src/components/Posts";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-[#fafafa] text-[#262626] max-w-[480px] mx-auto">
      <Header />
      <Stories />
      <Posts />
    </main>
  );
}
