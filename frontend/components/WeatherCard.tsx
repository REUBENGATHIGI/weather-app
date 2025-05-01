type WeatherCardProps = {
  city: string;
  temperature: number;
  description: string;
};

export default function WeatherCard({ city, temperature, description }: WeatherCardProps) {
  return (
    <div className="bg-white text-black rounded-2xl shadow-md p-6 max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-2">{city}</h2>
      <p className="text-4xl font-semibold">{temperature}°C</p>
      <p className="text-lg text-gray-600 capitalize">{description}</p>
    </div>
  );
}
