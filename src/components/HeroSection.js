export default function HeroSection({ title, subtitle }) {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 text-lg">{subtitle}</p>
    </section>
  );
}
