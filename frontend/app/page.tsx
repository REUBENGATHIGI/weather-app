import WeatherCard from "../components/WeatherCard";

type WeatherData = {
  city: string;
  temperature: number;
  description: string;
};

export default function HomePage({ weather }: { weather: WeatherData }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <WeatherCard city={weather.city} temperature={weather.temperature} description={weather.description} />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/weather?city=Nairobi");
    const data = await res.json();

    return {
      props: {
        weather: {
          city: data.name,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
        },
      },
    };
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    return {
      props: {
        weather: {
          city: "Unknown",
          temperature: 0,
          description: "Unavailable",
        },
      },
    };
  }
}
