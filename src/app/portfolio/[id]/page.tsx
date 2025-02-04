import dynamic from "next/dynamic";
import FooterSection from "@/components/FooterSection";
import PortfolioComponent from "@/components/portfolio/ui/PortfolioDetails";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });


interface PortfolioParams {
  id: string;
}

// Fungsi ini menggantikan getStaticPaths()
export async function generateStaticParams(): Promise<PortfolioParams[]> {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ];
}

export default function PortfolioPage({ params }: { params: PortfolioParams }) {
  return (
    <div>
      <Navbar />
      <div className="h-[4rem]"></div>
      <PortfolioComponent />
      <FooterSection />
    </div>
  )
}
