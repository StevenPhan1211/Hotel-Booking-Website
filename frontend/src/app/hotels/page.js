import HotelsList from "@/components/hotels/HotelsList";

export default async function Hotels() {
  const res = await fetch("http://localhost:5000/hotels", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Can't load hotels list!");
  }

  const hotels = await res.json(); // Chuyển dữ liệu thành JSON

  return <HotelsList hotels={hotels} />;
}
