import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import { destinationFeatured } from "@/lib/actions";

export default async function Home() {
  const destinations = await destinationFeatured()
  return (
    <div>
      <Banner></Banner>
      <Featured destinations={destinations}></Featured>
    </div>
  );
}
