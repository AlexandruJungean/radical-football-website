interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

const Header = ({ title, description, className = "" }: PageHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-24 ${className}`}>
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-white rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[var(--color-accent)] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Header; 